# Website Update Part 3 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement every change requested in `Website Update Part 3 (1).docx` (root-level Drive mirror file) across the ACIC-BMU Foundation Next.js site — content corrections, section removals/moves, and one structural change (drop the standalone Partners page in favour of a homepage slider).

**Architecture:** This is a static-content Next.js 16 App Router site with no backend and no test suite. Every "component" here is a page-level Client Component (`"use client"`) holding a local data array (people, programmes, partners, etc.) rendered with Framer Motion. Changes are therefore data-array edits and JSX section edits, not new abstractions.

**Tech Stack:** Next.js 16.2.6 (App Router, Turbopack) · React 19 · TypeScript 5 · Tailwind CSS v4 · Framer Motion 12 · lucide-react.

## Global Constraints

- **No test suite exists** (`package.json` has no `test` script). "Verify" steps in this plan mean: run `npm run dev`, load the affected route in a browser, and visually confirm the change — plus `npx tsc --noEmit` for type safety since several edits touch typed arrays.
- **No git repository exists** in this working directory (`c:\Users\Nikhil Koltharkar\Downloads\acic-bmu-website-main` has no `.git`). Do **not** include `git commit` steps — check off the task instead.
- Preserve the established design system: primary orange `#e67e22` / accent green `#2d6a4f`, `rounded-2xl`/`rounded-3xl` cards, `SectionHeading` and `Button` shared primitives, Framer Motion `fadeUp`/`whileInView` patterns already used on every page. Do not introduce new one-off styling patterns.
- Visible copy uses British "Programme"; route paths stay `/programs/...` (per `PROJECT-NOTES.md` §6). Don't rename routes.
- New images must be `.jpg`/`.png`/`.webp`/`.svg` — Vercel is case-sensitive and `.jfif` has broken a deploy before (`PROJECT-NOTES.md` §6).
- Root `<html>` carries `text-[90%]` — all rem-based sizing already accounts for this; don't compensate again in new copy.
- Every task below references exact current file content read directly from the repo on 2026-08-12. If a file has changed since, re-read it before editing — do not assume line numbers still match.

---

## Part A — Tasks I can do now (no missing information)

### Task 1: Startups page — remove scheme-tag badges

**Source:** doc lines 6–9 + `image1.png` (circles the SISF/SAMRIDH/Genesis badge on 4 different cards).

**Files:**
- Modify: `src/app/startups/page.tsx:200-205` (the `{/* Badge */}` block inside the results grid)

**Interpretation:** The doc says "Remove Samridh, Genesis, SISF from startups section" while circling only the small badge pill on each card — not the filter tabs or the whole card. The `category` field is still needed internally for the search/filter tabs (`categories` array, line 36, and the `activeCategory` filter logic, lines 59-63), so I will remove only the **visible badge display**, not the `category` field or filter tabs, since the doc doesn't mention removing the filter UI.

- [ ] **Step 1:** In `src/app/startups/page.tsx`, delete the badge block:
```tsx
                    {/* Badge */}
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {startup.category}
                      </span>
                    </div>
```
- [ ] **Step 2:** Verify: run `npm run dev`, open `/startups`, confirm cards no longer show the SISF/SAMRIDH/Genesis pill but search and category-tab filtering still work.

---

### Task 2: About Us — add "About Atal Innovation Mission" section

**Source:** doc lines 12–14 (exact copy supplied).

**Files:**
- Modify: `src/app/about/page.tsx` — insert a new `<section>` between the "ABOUT BML MUNJAL UNIVERSITY" section (ends at line 259) and the "INFRASTRUCTURE GALLERY" section (starts at line 262).

**Interpretation:** The doc says "Add AIM intro in About Us after BML Munjal introduction" — the only "BML Munjal introduction" block on this page is the "ABOUT BML MUNJAL UNIVERSITY" section, so the new section goes immediately after it, matching the existing alternating white/`section-alt` background rhythm (BML Munjal section is `bg-white`, so the new one should be `bg-section-alt` to alternate, matching the pattern already used between Overview/Vision&Mission/BML Munjal/Infrastructure).

- [ ] **Step 1:** In `src/app/about/page.tsx`, after line 259 (`</section>` closing "ABOUT BML MUNJAL UNIVERSITY") and before line 261 (`{/* ========== INFRASTRUCTURE GALLERY ========== */}`), insert:
```tsx
      {/* ========== ATAL INNOVATION MISSION ========== */}
      <section className="py-12 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                label="Our Enabler"
                title="About Atal Innovation Mission"
                align="left"
              />
              <p className="text-text-muted leading-relaxed text-lg -mt-6">
                Atal Innovation Mission (AIM) is Government of India&apos;s flagship
                initiative to create and promote a culture of innovation and
                entrepreneurship across the length and breadth of our country.
                AIM&apos;s objective is to develop new programmes and policies for
                fostering innovation in different sectors of the economy, provide
                platforms and collaboration opportunities for different
                stakeholders, and create an umbrella structure to oversee the
                innovation &amp; entrepreneurship ecosystem of the country.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/logos/niti-aayog.png"
                  alt="Atal Innovation Mission, NITI Aayog"
                  width={674}
                  height={288}
                  className="w-full h-[300px] lg:h-[420px] object-contain bg-white p-12"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
```
Also add `import { Image } from "next/image";` — **already imported** at line 4, no new import needed.

- [ ] **Step 2:** Verify: `npx tsc --noEmit` passes, then run `npm run dev`, open `/about`, confirm the new AIM section renders between "About BML Munjal University" and "World-Class Infrastructure" with alternating `section-alt` background.

---

### Task 3: Board Members — designation updates

**Source:** doc lines 16–18.

**Files:**
- Modify: `src/app/about/board/page.tsx:29-34` (Akshay Munjal), `:35-41` (Shyam Menon)

- [ ] **Step 1:** Change line 30 from:
```tsx
    designation: "Founder and CEO, Hero Vired",
```
to:
```tsx
    designation: "Pro Chancellor, BML Munjal University; Founder and CEO, Hero Vired",
```
(this is the Akshay Munjal entry, lines 28-34)

- [ ] **Step 2:** Change line 37 from:
```tsx
    designation: "Vice President, BML Munjal University",
```
to:
```tsx
    designation: "Officiating Vice Chancellor, BML Munjal University",
```
(this is the Shyam Menon entry, lines 35-41)

- [ ] **Step 3:** Verify: run `npm run dev`, open `/about/board`, confirm both cards show the updated designations without text overflow (the card is narrow — `w-[calc(25%-1.5rem)]` on desktop — check the longer Akshay Munjal line wraps cleanly).

---

### Task 4: Steering Committee — name, designation, and structural changes

**Source:** doc lines 22–32 + `image2.png` (circles the "GOVERNANCE" badge and "Steering Committee" heading).

**Files:**
- Modify: `src/app/about/steering-committee/page.tsx:42-48` (Sunil Munjal), `:82-88` (Poyni Bhat), `:89-95` (Neharika Vohra), `:103-110` (Srinivas Rao), `:133-140` (remove Swati Munjal entry), `:171` (Governance badge), `:236` (footnote)

- [ ] **Step 1:** Sunil Munjal — change lines 42-44 from:
```tsx
    name: "Mr. Sunil Munjal",
    designation: "Chairman",
    company: "HERO Enterprises",
```
to:
```tsx
    name: "Mr Sunil Kant Munjal",
    designation: "Chancellor",
    company: "BML Munjal University",
```

- [ ] **Step 2:** Remove the `former: true` asterisk flag from three members. In the Gerry George entry (lines 64-72), delete line 70 (`former: true,`). Confirm the full entry after edit reads:
```tsx
  {
    name: "Dr. Gerry George",
    designation: "Dean",
    company: "Singapore Management University",
    photo: "/images/steering/gerry-george.jpg",
    imageClass: "object-[70%_top]",
    linkedin: "https://www.linkedin.com/in/gerry-george-a713505",
  },
```
In the Poyni Bhat entry (lines 81-88), delete `former: true,` (line 86) and update the designation (combined with Step 3 below).
In the Srinivas Rao entry (lines 103-110), delete `former: true,` (line 108) and update name + designation (combined with Step 4 below).

- [ ] **Step 3:** Poyni Bhat — change lines 82-87 from:
```tsx
    name: "Ms. Poyni Bhat",
    designation: "CEO",
    company: "SINE",
    photo: "/images/steering/poyni-bhat.jpg",
    former: true,
    linkedin: "https://www.linkedin.com/in/poyni-bhatt-972b932",
```
to:
```tsx
    name: "Ms. Poyni Bhat",
    designation: "Former CEO",
    company: "SINE",
    photo: "/images/steering/poyni-bhat.jpg",
    linkedin: "https://www.linkedin.com/in/poyni-bhatt-972b932",
```
(this drops the asterisk per Step 2 and puts "Former" directly in the designation text instead, per doc line 26: "Kindly change designation of Poyni Bhat- Former CEO SINE")

- [ ] **Step 4:** Neharika Vohra — change lines 90-94 from:
```tsx
    name: "Dr. Neharika Vohra",
    designation: "Board Member",
    company: "CIIE",
    photo: "/images/steering/neharika-vohra.jpg",
```
to:
```tsx
    name: "Dr. Neharika Vohra",
    designation: "Former Board Member",
    company: "CIIE",
    photo: "/images/steering/neharika-vohra.jpg",
```

- [ ] **Step 5:** Srinivas Rao — change lines 104-109 from:
```tsx
    name: "Mr. Srinivas Rao",
    designation: "CEO",
    company: "T-Hub",
    photo: "/images/steering/srinivas-rao.jpg",
    former: true,
    linkedin: "https://www.linkedin.com/in/srinivas-rao-mahankali-767b77175",
```
to:
```tsx
    name: "Mr. M Srinivas Rao",
    designation: "Former CEO",
    company: "T-Hub",
    photo: "/images/steering/srinivas-rao.jpg",
    linkedin: "https://www.linkedin.com/in/srinivas-rao-mahankali-767b77175",
```

- [ ] **Step 6:** Remove Swati Munjal from the steering committee. Delete the entire object at lines 133-140:
```tsx
  {
    name: "Ms Swati Munjal",
    designation: "President",
    company: "BML Munjal University",
    photo: "/images/board/swati-munjal.jpg",
    imageClass: "object-[60%_center]",
    linkedin: "https://www.linkedin.com/in/swati-munjal-3a5752",
  },
```
(She stays on the Board Members page — this only removes the duplicate steering-committee entry, per doc line 30: "Remove Swati Munjal from Sterring committee members")

- [ ] **Step 7:** Remove the "GOVERNANCE" badge from the section header. In the `SectionHeading` call at lines 170-174, delete the `label="Governance"` prop:
```tsx
          <SectionHeading
            title="Steering Committee"
            description="Distinguished industry leaders and academicians who provide strategic direction and oversight to ACIC-BMU Foundation."
          />
```
(Removing the `label` prop is safe — `SectionHeading` treats it as optional and conditionally renders it, per `src/components/ui/SectionHeading.tsx:30-34`.)

- [ ] **Step 8:** Footnote singular fix. Change line 236 from:
```tsx
            <span className="text-primary">*</span> Former member
```
This is **already singular** ("Former member", not "Former members") — re-read the doc instruction: "In asterisk below, just write Former Member instead of Former Members". The current code already says "Former member" (lowercase m). Only the **capitalization** needs to change to match the doc's exact casing:
```tsx
            <span className="text-primary">*</span> Former Member
```

- [ ] **Step 9:** Verify: `npx tsc --noEmit` passes, then run `npm run dev`, open `/about/steering-committee`, confirm: no "GOVERNANCE" badge above the heading, Swati Munjal's card is gone (count drops from 15 to 14 cards), Sunil Kant Munjal / Poyni Bhat / Neharika Vohra / M Srinivas Rao show updated text, and only the intended members (not George Goh, Gerry George, Rahul Garg, Kris Gopalakrishnan, Kanwaljit Singh) still show the `*` asterisk.

---

### Task 5: Team Members — remove and rename

**Source:** doc lines 40–41.

**Files:**
- Modify: `src/app/about/team/page.tsx:28-34` (delete Siraj Khan entry), `:50` (rename Ramanuj Jajoo)

- [ ] **Step 1:** Delete the Siraj Khan object at lines 28-34:
```tsx
  {
    name: "Siraj Khan",
    role: "Programme Manager",
    photo: "/images/team/siraj-khan.png",
    linkedin: "https://www.linkedin.com/in/siraj-khan-b7a04213b",
    imageClass: "",
  },
```

- [ ] **Step 2:** Change line 50 from:
```tsx
    name: "Ramanuj Jajoo",
```
to:
```tsx
    name: "Ramanuj Jaju",
```

- [ ] **Step 3:** Verify: run `npm run dev`, open `/about/team`, confirm 6 members show (was 7) and Ramanuj's card now reads "Ramanuj Jaju". Note the grid is `lg:grid-cols-4` with 6 items — layout will end with 2 items alone on the last row; this is a pre-existing grid, not something this task needs to fix, but flag it as a visual check.

---

### Task 6: Salutation consistency — Board & Steering Committee

**Source:** doc line 36: "Salutations are missing for some individuals. Salutations should be applied consistently across the website so that all names follow the same format."

**Files:**
- Modify: `src/app/about/steering-committee/page.tsx` (multiple `name:` fields)

**Interpretation:** `src/app/about/board/page.tsx` and `src/app/about/team/page.tsx` don't use punctuation after salutations (e.g. "Ms Swati Munjal", "Mr Akshay Munjal", "Prof Shyam Menon", "Dr Prem Kumar" — no periods), and Team page uses no salutations at all. `steering-committee/page.tsx` mixes both styles: "Mr. Sunil Munjal", "Ms. Padmaja Ruparel", "Dr. Gerry George" (with periods) alongside "Dr George Goh", "Dr Dinesh Dua", "Ms Swati Munjal", "Mr Akshay Munjal" (no periods). I'll standardize the whole steering-committee list to the no-period style already used consistently on Board — this touches the most entries in one place and requires no new information (every person already has a stated title, just inconsistent punctuation).

- [ ] **Step 1:** In `src/app/about/steering-committee/page.tsx`, remove the period after every salutation in the `committeeMembers` array (`name:` field only — do not touch `designation`/`company`). Affected lines and their current → target value:
  - Line 42: `"Mr. Sunil Munjal"` → (already changed to `"Mr Sunil Kant Munjal"` in Task 4 Step 1 — no period, already correct)
  - Line 50: `"Ms. Padmaja Ruparel"` → `"Ms Padmaja Ruparel"`
  - Line 57: `"Mr. Rahul Garg"` → `"Mr Rahul Garg"`
  - Line 65: `"Dr. Gerry George"` → `"Dr Gerry George"`
  - Line 74: `"Mr. Kris Gopalakrishnan"` → `"Mr Kris Gopalakrishnan"`
  - Line 82: `"Ms. Poyni Bhat"` → `"Ms Poyni Bhat"`
  - Line 90: `"Dr. Neharika Vohra"` → `"Dr Neharika Vohra"`
  - Line 97: `"Mr. Vineet Rai"` → `"Mr Vineet Rai"`
  - Line 104: `"Mr. Srinivas Rao"` → (already changed to `"Mr M Srinivas Rao"` in Task 4 Step 5 — no period, already correct)
  - Line 112: `"Mr. Kanwaljit Singh"` → `"Mr Kanwaljit Singh"`
  - Line 120: `"Dr. Sankalp Chaturvedi"` → `"Dr Sankalp Chaturvedi"`
  - Lines 33 (`"Dr George Goh"`), 127 (`"Dr Dinesh Dua"`), 134 (`"Ms Swati Munjal"` — removed in Task 4 Step 6), 142 (`"Mr Akshay Munjal"`) already have no period — leave as-is.

- [ ] **Step 2:** Verify: `npx tsc --noEmit` passes, run `npm run dev`, open `/about/steering-committee`, spot-check 3-4 cards for consistent "Mr"/"Ms"/"Dr" (no trailing period) formatting.

**Note:** Mentors page (`src/app/about/mentors/page.tsx`) has the same inconsistency but worse — several mentors have **no salutation at all** and I don't have their correct titles. This is tracked separately as **Blocked Item B6** in Part B, since guessing Mr/Ms/Dr/Prof for a real person is not safe to do without confirmation.

---

### Task 7: Incubation page — "Government Schemes" rename + guideline text

**Source:** doc lines 45–50 + `image3.png` (shows the exact 3-card section as it looks today).

**Files:**
- Modify: `src/app/programs/incubation/page.tsx:232` (heading), `:28-59` (`investmentPrograms` array — add guideline line to each card's render)

- [ ] **Step 1:** Change line 232 from:
```tsx
            title="Investment & Programmes"
```
to:
```tsx
            title="Government Schemes"
```

- [ ] **Step 2:** Add "Scheme guidelines applicable" under each card's highlight list. In the render block at lines 256-268, after the closing `</ul>` (line 268) and before the closing `</motion.div>` (line 269), insert:
```tsx
                <p className="mt-4 pt-4 border-t border-border/50 text-xs text-text-muted italic">
                  Scheme guidelines applicable
                </p>
```

- [ ] **Step 3:** Verify: run `npm run dev`, open `/programs/incubation`, confirm the section heading now reads "Government Schemes" and all 3 cards (SISF, MeitY Startup Hub, SAMRIDH) show "Scheme guidelines applicable" at the bottom.

**Note:** The doc also flags missing/wrong copy inside the MeitY Startup Hub and SAMRIDH cards specifically (doc lines 48-49) — that's **Blocked Items B2/B3** below; this task only does the heading rename and the guideline-line addition, which don't depend on the missing source text.

---

### Task 8: Yuva Udyami page — remove Vision & Mission and the "Building Tomorrow's Entrepreneurs" section

**Source:** doc lines 53, 57 + `image4.png` (shows the "Building Tomorrow's Entrepreneurs, Today" heading/paragraph immediately above the CTA banner).

**Files:**
- Modify: `src/app/programs/yuva-udyami/page.tsx:115-162` (delete "Vision & Mission" section), `:209-236` (delete "About Section")

**Interpretation:** `image4.png` shows the "Building Tomorrow's Entrepreneurs, Today" text block sitting directly above the orange "Ready to Start Your Entrepreneurial Journey?" CTA — because in the live site these two sections (`About Section` at lines 209-236 and `CTA` at lines 238-278) are visually adjacent with no gap between them, so they appear as one continuous block in a screenshot. The CTA section is the same reusable end-of-page pattern used on **every** programme page (Incubation, Corporate Innovation, Mera Business all end with an identical-structure CTA) — removing it here would break that site-wide convention, and the doc never mentions the CTA text ("Ready to Start Your Entrepreneurial Journey?") by name. I'm removing only the "About Section" (the part actually named/quoted-adjacent in the doc) and keeping the CTA. **Flag this interpretation for your confirmation** — if you intended the CTA removed too, tell me and I'll take it out.

- [ ] **Step 1:** Delete the entire "Vision & Mission" section, lines 115-162:
```tsx
      {/* Vision & Mission */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-section-alt rounded-2xl p-8 border border-border/50"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-text-muted leading-relaxed">
                To develop self-reliant, skilled youth who transform ideas into
                micro-enterprises — creating a generation of job creators rather
                than job seekers who drive sustainable economic growth in their
                communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-section-alt rounded-2xl p-8 border border-border/50"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-text-muted leading-relaxed">
                To provide mentorship and training to educated and skilled youth
                to establish sustainable MSMEs — equipping them with the
                practical knowledge, business acumen, and confidence needed to
                launch successful enterprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

```

- [ ] **Step 2:** Delete the entire "About Section", lines 209-236:
```tsx
      {/* About Section */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Building Tomorrow&apos;s Entrepreneurs,{" "}
                <span className="text-primary">Today</span>
              </h2>
              <p className="text-text-muted leading-relaxed text-lg">
                Through our Yuva Udyami vertical, we reach thousands of young
                people across Haryana and beyond — from school students in ATL
                labs to polytechnic graduates building their first prototypes.
                Every program is designed to move participants one step closer to
                becoming confident, capable entrepreneurs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

```

- [ ] **Step 3:** Remove now-unused imports. Line 6 currently reads:
```tsx
import { ArrowRight, Sparkles, Target, Eye } from "lucide-react";
```
`Sparkles`, `Target`, and `Eye` are only used in the two deleted sections — change to:
```tsx
import { ArrowRight } from "lucide-react";
```

- [ ] **Step 4:** Verify: `npx tsc --noEmit` passes (catches any leftover unused-import or reference errors), run `npm run dev`, open `/programs/yuva-udyami`, confirm the page flows: Hero → Sub-Programmes → CTA, with no Vision/Mission cards and no "Building Tomorrow's Entrepreneurs" block.

---

### Task 9: Move UDAAN from Corporate Innovation to Yuva Udyami

**Source:** doc line 62: "Remove Udaan from Corporate Programs and move to yuvaudyami section."

**Files:**
- Modify: `src/app/programs/corporate-innovation/page.tsx:20-33` (remove UDAAN entry from `subPrograms`)
- Modify: `src/app/programs/yuva-udyami/page.tsx` (add UDAAN into its `subPrograms` array)

- [ ] **Step 1:** In `src/app/programs/corporate-innovation/page.tsx`, delete the UDAAN object at lines 20-33:
```tsx
  {
    title: "UDAAN \u2014 Idea to Impact",
    description:
      "A 12-month entrepreneurship development programme supported by Aavishkaar Foundation, delivered through quarterly engagements focused on problem identification, design thinking, startup validation, industry exposure, mentorship, and venture pitching. UDAAN empowers grassroots student innovators from Uttar Pradesh to turn real-world challenges into scalable, sustainable ventures.",
    highlights: [
      "12-month programme with quarterly engagements",
      "Supported by Aavishkaar Foundation",
      "Grassroots student innovators from Uttar Pradesh",
      "Design thinking, validation, mentorship & pitching",
    ],
    icon: Zap,
    image: "/images/programs/udaan.webp",
  },
```
This leaves only the BOSCH-BMU entry in `corporatePrograms`/`subPrograms`. Also remove the now-unused `Zap` import if nothing else in the file uses it — check remaining usages first (`focusAreas` array at line 51 uses `Zap` too, and the "Collaboration Model" section at line 280 uses `Zap` — so **keep** the `Zap` import, it's still used elsewhere in this file).

- [ ] **Step 2:** In `src/app/programs/yuva-udyami/page.tsx`, add UDAAN to `subPrograms` (after Task 8's edits, this array starts around line 9). Add a new object — since UDAAN's source data used `highlights` (a feature this page's `subPrograms` items don't currently have, only `title`/`description`/`image`), append UDAAN using the same three fields already used by this page's cards, folding the highlights into the description so no new card layout is needed:
```tsx
  {
    title: "UDAAN — Idea to Impact",
    description:
      "A 12-month entrepreneurship development programme supported by Aavishkaar Foundation, delivered through quarterly engagements focused on problem identification, design thinking, startup validation, industry exposure, mentorship, and venture pitching for grassroots student innovators from Uttar Pradesh.",
    image: "/images/programs/udaan.webp",
  },
```
Insert this as a new entry in the `subPrograms` array (position doesn't matter functionally — add it at the end, after "ATL Student Innovator Programme").

- [ ] **Step 3:** Verify: `npx tsc --noEmit` passes, run `npm run dev`, confirm `/programs/corporate-innovation` no longer shows UDAAN (only BOSCH-BMU remains in "Innovation Programmes"), and `/programs/yuva-udyami` shows a new UDAAN card in "Our Sub-Programmes" (now 8 cards total).

---

### Task 10: Mera Business — trim partner descriptions to names only

**Source:** doc line 60 + `image5.png` (shows the current 4 partner cards with full write-ups).

**Files:**
- Modify: `src/app/programs/mera-business/page.tsx:73-94` (`partnerships` array), `:326-352` (render block)

- [ ] **Step 1:** Simplify the `partnerships` array (lines 73-94) to drop `description`:
```tsx
const partnerships = [
  { name: "Raman Kant Munjal Foundation" },
  { name: "Hinduja Foundation" },
  { name: "HDFC Bank" },
  { name: "SEWA Uttarakhand" },
];
```

- [ ] **Step 2:** Update the render block (lines 326-352) to drop the description paragraph and the icon+flex layout that was sized for two-line content, since a name-only list reads better as a simpler pill/tag grid than 4 tall cards. Replace lines 326-352 with:
```tsx
          <div className="flex flex-wrap justify-center gap-4 mt-4 max-w-4xl mx-auto">
            {partnerships.map((partner, i) => (
              <motion.div
                key={partner.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-section-alt rounded-full pl-4 pr-6 py-3 border border-border/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Handshake className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold text-foreground text-sm">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
```

- [ ] **Step 3:** Verify: `npx tsc --noEmit` passes, run `npm run dev`, open `/programs/mera-business`, confirm the "Partnerships & Support" section now shows 4 compact name pills instead of 4 description cards.

---

### Task 11: Remove standalone Partners page; redesign homepage partner slider

**Source:** doc line 64: "Remove the Partners tab. Show the partners on the homepage in a colorful sliding format. Also, remove India AI from the Partners section."

**Files:**
- Delete: `src/app/partners/page.tsx`
- Modify: `src/components/layout/Navbar.tsx:40` (remove nav link)
- Modify: `src/components/layout/Footer.tsx:11` (remove footer link)
- Modify: `src/app/page.tsx:149-166` (`allPartners` array — expand to include all categories except India AI), `:536-557` (marquee section — remove grayscale styling)

**Interpretation:** "Colorful sliding format" is a design instruction without a pixel-exact spec. My interpretation: (1) the marquee already slides (`animate-scroll-left`) — keep that mechanic; (2) "colorful" means removing the `grayscale hover:grayscale-0` treatment so logos show in their natural colours by default, and adding a subtle alternating colour-tinted card background behind each logo (using the existing `primary`/`accent` tokens) instead of plain white, so the row reads as more vibrant. Since the standalone `/partners` page (with ~50 logos across 5 categories) is being deleted, I'm also expanding the homepage's `allPartners` array (currently only 16 logos) to include the rest so partner visibility isn't lost — excluding India AI Mission per the doc.

- [ ] **Step 1:** Delete `src/app/partners/page.tsx` entirely.

- [ ] **Step 2:** In `src/components/layout/Navbar.tsx`, remove line 40:
```tsx
  { label: "Partners", href: "/partners" },
```
from the `navLinks` array (between the "Programmes" and "Startups" entries).

- [ ] **Step 3:** In `src/components/layout/Footer.tsx`, remove the Partners entry from the `"Quick Links"` array (line 11):
```tsx
    { name: "Partners", href: "/partners" },
```

- [ ] **Step 4:** In `src/app/page.tsx`, replace the `allPartners` array (lines 149-166) with the full logo set from the deleted Partners page, minus India AI Mission and minus any path that doesn't exist under `public/images/partners/` (cross-check against the `partners/page.tsx` categories read during planning — Investor, Ecosystem Enablers, Service Providers, Industry, Academic):
```tsx
const allPartners = [
  // Investors
  "/images/partners/investors/survam-partner.png",
  "/images/partners/investors/lead-angels-network.jpg",
  "/images/partners/investors/indian-angel-network.png",
  "/images/partners/investors/sanchi-connect.png",
  "/images/partners/investors/campus-fund.png",
  "/images/partners/investors/ah!-ventures.png",
  "/images/partners/investors/-we-founder-circle.png",
  "/images/partners/investors/real-time-angel-fund.png",
  "/images/partners/investors/fluid-ventures.png",
  "/images/partners/investors/yournest-vc.png",
  "/images/partners/investors/pontaq-vc.jpg",
  "/images/partners/investors/100x.vc.svg",
  // Ecosystem Enablers (India AI Mission excluded per doc)
  "/images/partners/enablers/startup-india.png",
  "/images/partners/enablers/atal-innovation-mission.jpg",
  "/images/partners/enablers/tie-delhi-ncr.png",
  "/images/partners/enablers/isba.png",
  "/images/partners/enablers/wadhwani-foundation.png",
  "/images/partners/enablers/arthayan.png",
  "/images/partners/enablers/manthan-by-psa.jpg",
  "/images/partners/enablers/startup-haryana.jpg",
  "/images/partners/enablers/meity-startup-hub.png",
  // Service Providers
  "/images/partners/service-providers/zoho-for-startups.png",
  "/images/partners/service-providers/-aws.png",
  "/images/partners/service-providers/wivitan-solution.webp",
  "/images/partners/service-providers/cunomial-accubate.webp",
  "/images/partners/service-providers/openweaver.jpg",
  "/images/partners/service-providers/google.png",
  "/images/partners/service-providers/ancrew-global.jpg",
  "/images/partners/service-providers/ezylegal.png",
  // Industry
  "/images/partners/industry/hero-motocorp.png",
  "/images/partners/industry/hsbc.png",
  "/images/partners/industry/cii.png",
  "/images/partners/industry/rane-group.png",
  "/images/partners/industry/aima.png",
  "/images/partners/industry/hdfc-bank.png",
  "/images/partners/industry/idfc-bank.png",
  "/images/partners/industry/sbi-bank.jpg",
  "/images/partners/industry/bpcl.png",
  "/images/partners/industry/icici-bank.svg",
  // Academic
  "/images/partners/academic/aavishkaar-foundation.png",
  "/images/partners/academic/govt-girls-college.png",
  "/images/partners/academic/mrk-college.png",
  "/images/partners/academic/dhamlawas.jpg",
  "/images/partners/academic/lisana.jpg",
  "/images/partners/academic/manesar.png",
];
```

- [ ] **Step 5:** In `src/app/page.tsx`, update the marquee render (around line 544-550) to remove grayscale-by-default styling and add alternating colour-tinted backgrounds. Change:
```tsx
          <div className="flex animate-scroll-left">
            {[...allPartners, ...allPartners].map((src, i) => (
              <div key={i} className="flex-shrink-0 mx-3 sm:mx-8 flex items-center justify-center">
                <Image src={src} alt="Partner" width={180} height={80} className="h-10 w-24 sm:h-20 sm:w-44 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
              </div>
            ))}
          </div>
```
to:
```tsx
          <div className="flex animate-scroll-left">
            {[...allPartners, ...allPartners].map((src, i) => (
              <div
                key={i}
                className={`flex-shrink-0 mx-3 sm:mx-8 flex items-center justify-center rounded-2xl p-3 sm:p-4 ${
                  i % 3 === 0
                    ? "bg-primary/5"
                    : i % 3 === 1
                    ? "bg-accent/5"
                    : "bg-section-alt"
                }`}
              >
                <Image src={src} alt="Partner" width={180} height={80} className="h-10 w-24 sm:h-16 sm:w-36 object-contain" />
              </div>
            ))}
          </div>
```
(Reduced desktop logo size from `h-20 w-44` to `h-16 w-36` since the list is now ~3x longer — keeps the marquee from feeling sparse at the same scroll speed. If you'd rather keep the original size, tell me and I'll drop it back — this is a judgment call, not a doc requirement.)

- [ ] **Step 6:** Verify: `npx tsc --noEmit` passes, run `npm run dev`, confirm: `/partners` now 404s, "Partners" is gone from the navbar and footer, and the homepage partner section shows all ~46 logos in colour with tinted backgrounds, sliding continuously, with no India AI Mission logo present.

---

### Task 12: Events page — remove hero stats row

**Source:** doc line 66 + `image6.png` (shows the "10+ Events per Year / 2000+ Participants / 50+ Expert Mentors" row).

**Files:**
- Modify: `src/app/events/page.tsx:113-129`

- [ ] **Step 1:** Delete the stats block, lines 113-129:
```tsx
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {[
              { value: "10+", label: "Events per Year" },
              { value: "2000+", label: "Participants" },
              { value: "50+", label: "Expert Mentors" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-5 border border-white/10">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
```

- [ ] **Step 2:** Verify: run `npm run dev`, open `/events`, confirm the hero now ends right after the description paragraph, with no stats row.

---

### Task 13: Standardize number formatting — Startups page hero stats

**Source:** doc lines 73–75: "The format of the numbers throughout the website should be same... displayed as the number is displayed in mera business section, same goes for every program."

**Files:**
- Modify: `src/app/startups/page.tsx:5, 38-42, 94-110` (replace static stat cards with the shared `AnimatedCounter` component)

**Interpretation:** Mera Business (`src/app/programs/mera-business/page.tsx:170-186`), the Homepage (`src/app/page.tsx:364-379`), and Incubation (`src/app/programs/incubation/page.tsx:149-164`) all already use the shared `AnimatedCounter` component (count-up animation, `text-3xl sm:text-5xl font-bold` primary-coloured number). The Startups page hero is the outlier — it renders static (non-animated) numbers inside glassy `bg-white/10` cards with an icon. I'm bringing Startups in line with the majority pattern. Partners page and Events page also had static number displays, but both are being removed/changed in Tasks 11 and 12, so no separate fix is needed there.

- [ ] **Step 1:** Add the import at line 8 (after the existing `SectionHeading` import):
```tsx
import AnimatedCounter from "@/components/ui/AnimatedCounter";
```

- [ ] **Step 2:** Change the `stats` array (lines 38-42) from:
```tsx
const stats = [
  { icon: Rocket, value: "110+", label: "Startups Incubated" },
  { icon: IndianRupee, value: "₹110 Cr+", label: "Funding Raised" },
  { icon: TrendingUp, value: "₹850 Cr+", label: "Combined Valuation" },
];
```
to the `{end, suffix, prefix, label}` shape `AnimatedCounter` expects (matching Homepage/Incubation's existing pattern exactly):
```tsx
const stats = [
  { end: 110, suffix: "+", label: "Startups Incubated" },
  { end: 110, suffix: " Cr+", prefix: "₹", label: "Funding Raised" },
  { end: 850, suffix: " Cr+", prefix: "₹", label: "Combined Valuation" },
];
```

- [ ] **Step 3:** Replace the render block (lines 100-109):
```tsx
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <stat.icon className="w-8 h-8 text-primary-light mx-auto mb-3" />
                <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
```
with:
```tsx
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  label={stat.label}
                  light
                />
              </div>
            ))}
```

- [ ] **Step 4:** The `Rocket` and `IndianRupee` icon imports (line 6) are no longer used by the stats cards — check remaining usages in the file: `Rocket` is still used at line 236 (the "Apply for Incubation" CTA button icon) and possibly `TrendingUp`/`Building2` elsewhere — **keep** any icon still referenced elsewhere in the file, only drop `IndianRupee` from the import line if nothing else in the file uses it (grep the file for `IndianRupee` after editing to confirm zero remaining references before removing the import).

- [ ] **Step 5:** Verify: `npx tsc --noEmit` passes, run `npm run dev`, open `/startups`, confirm the 3 hero stats now count up on scroll into view (matching the animated behaviour on the homepage impact numbers) instead of appearing instantly static.

---

### Task 14: Yuva Udyami — investigate "remove this gap" (needs live visual confirmation)

**Source:** doc line 70 + `image7.png` (browser screenshot of `/programs/yuva-udyami` with the navbar circled and a visible empty gap between the floating navbar and the "Our Vision"/"Our Mission" cards below).

**Confidence: low.** Unlike the other tasks, I can't be certain what "this gap" refers to without comparing the live scrolled state of the page against the screenshot — it may already be resolved once Task 8 removes the Vision & Mission section (the gap may have been the space directly above those now-deleted cards), or it may be a real navbar/hero spacing issue independent of that content.

- [ ] **Step 1:** After completing Task 8, run `npm run dev`, open `/programs/yuva-udyami`, scroll down until the navbar reaches its floating "island" state (per `src/components/layout/Navbar.tsx:76-80`, triggered past 20px scroll), and visually compare against `image7.png`'s framing (extracted to `C:\Users\Nikhil Koltharkar\AppData\Local\Temp\claude_docx_extract\word\media\image7.png` for reference).
- [ ] **Step 2:** If a real gap remains between the floating navbar and the hero content below it, check whether other programme pages (`/programs/incubation`, `/programs/corporate-innovation`, `/programs/mera-business` — all share the same `pt-24` hero top-padding pattern) show the same gap. If it's site-wide, it's a `Navbar`/hero-padding interaction, not specific to Yuva Udyami, and should be raised as its own follow-up rather than patched ad hoc on one page.
- [ ] **Step 3:** Report back what's actually visible before making a change here — this task ends in a finding, not a blind edit.

---

## Part B — Changes I cannot do yet (blocked, with reasons)

| # | Item (doc reference) | Why I can't do it | What I need from you |
|---|---|---|---|
| B1 | Update startup website links (doc line 10: "Startup website link: Excel sheet attached with this email") | The Excel sheet isn't in this repo, the Drive folders, or anywhere I can access — it was an email attachment. | Share the `.xlsx` file (or its contents) and I'll update the `website` field for every startup in `src/app/startups/page.tsx` and `src/app/page.tsx`'s `startups` array. |
| B2 | MeitY Startup Hub card missing text (doc line 48: "There is text after EiR, Pilot and investment, we have to add that as well") | The doc states this text exists in a source document but doesn't include it inline — I don't have that source. | Share the source doc/copy, or dictate the missing sentence(s) and I'll add them to the `investmentPrograms` array in `src/app/programs/incubation/page.tsx:42-52`. |
| B3 | SAMRIDH card text is wrong (doc line 49: "Kindly add that text only which is available in document") | Same as B2 — references a document I don't have. | Share the correct SAMRIDH copy and I'll replace lines 53-59 of `src/app/programs/incubation/page.tsx`. |
| B4 | Corporate Innovation page text is wrong (doc line 51: "recheck") | The doc doesn't say *what's* wrong — no diff, no correct version, no specific paragraph flagged. | Tell me which paragraph(s) on `/programs/corporate-innovation` are incorrect and what they should say. |
| B5 | Standardize profile photos — centering, framing, zoom, background (doc line 20) | This requires producing new, edited image files (crop/recompose/background-normalize ~40+ photos across Board, Steering Committee, Mentors, Team) — it is an image-editing/asset task, not a code change. I can adjust CSS `object-position` per-photo (several entries already do this via `imageClass`, e.g. `object-[70%_top]`) as a partial mitigation, but that can't fix backgrounds or zoom level — only reframe within the existing photo. | Either (a) provide already-standardized replacement photos, or (b) confirm you want me to attempt CSS-only reframing as a stopgap (won't fully satisfy the doc's "same background" requirement), or (c) I can use Adobe's image tools (background removal/replacement, available via the connected Adobe MCP server) on the existing photos if you approve — this would still need your review of each result since it's a judgment call per photo. |
| B6 | Salutation consistency — Mentors page (doc line 36) | 11 of 26 mentors have **no salutation at all** in `src/app/about/mentors/page.tsx` (Anmol Sehgal, Gitanjali Puri, Rakesh Sharma, Rohit Gupta, Sajid Raza, Sameer Gupta, Sanghamitra Bahsin, Sanjay Nagi, Shailendra Awasthi, Shashwat Pathak, Vibhuti Agarwal). I don't have a reliable source for each person's correct title (Mr/Ms/Dr/Prof) — guessing would risk misgendering or mis-titling a real person. | Confirm the correct salutation for each of the 11 names listed above (or point me to `Team Details.xlsx` / mentor bios in the Drive `Mentors` folder if titles are recorded there). |
| B7 | Updated ACIC-BMU logo files (doc: "Kindly take updated logos of ACIC-BMU from drive link given below") | The logos live at `drive.google.com/drive/folders/1-COKvLYT3f5YI9AIlA85I7Xn-AZ58mJF` — I have no Google Drive access from this environment. | Download the logo files from that folder and place them in `public/images/logos/`, or share them with me directly, and tell me which existing logo references (`acic-bmu-propel.webp` used in `Navbar.tsx`, `Footer.tsx`; `acic-logo.png`; `bmu-logo.png`/`bmu-logo-alt.png`; `niti-aayog.png`/`.webp`) each new file should replace. |

---

## Self-Review

**1. Spec coverage** — every doc line (1–75, per the paragraph-numbered extraction) maps to a task or a blocked item:
- Logos → B7. Startups badges → Task 1. Startup links → B1. AIM intro → Task 2. Board designations → Task 3. Photo standardization → B5. Steering committee (name/designation/asterisks/removal/footnote/Governance badge) → Task 4. Salutations → Task 6 (Board/Steering) + B6 (Mentors, blocked). Team removal/rename → Task 5. Government Schemes heading + guideline text → Task 7. MeitY/SAMRIDH missing text → B2/B3. Corporate Innovation text recheck → B4. Yuva Udyami vision/mission + "this section" removal → Task 8. Mera Business partner write-ups → Task 10. UDAAN move → Task 9. Partners tab removal + homepage slider + India AI removal → Task 11. Events numbers → Task 12. "This gap" → Task 14. Number format consistency → Task 13.
- No doc line was left unmapped.

**2. Placeholder scan** — every task has literal before/after code, exact file paths, and exact line numbers as read on 2026-08-12. No "TBD"/"handle appropriately"/"similar to Task N" placeholders. Where I made a judgment call (Task 8's CTA-keep decision, Task 11's "colorful" styling, Task 14's gap uncertainty), I called it out explicitly as an interpretation rather than presenting it as doc fact.

**3. Type consistency** — Task 13's `stats` array shape (`{end, suffix, prefix, label}`) matches `AnimatedCounterProps` exactly as defined in `src/components/ui/AnimatedCounter.tsx:6-13`, and matches the identical pattern already used in `src/app/page.tsx:367-372` and `src/app/programs/incubation/page.tsx:150-154`. Task 9's UDAAN object matches the `{title, description, image}` shape already used by every other entry in Yuva Udyami's `subPrograms` array (no `highlights` field, since that page's cards don't render one).

---

## Execution Handoff

Plan complete and saved to `IMPLEMENTATION-PLAN.md`. Two execution options:

**1. Subagent-Driven (recommended)** – I dispatch a fresh subagent per task, review between tasks, fast iteration.

**2. Inline Execution** – I execute tasks directly in this session, batching with checkpoints for your review.

Which approach — and should I start with Part A now, or wait until you've resolved some of Part B first?
