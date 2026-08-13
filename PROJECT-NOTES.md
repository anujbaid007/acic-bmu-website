# ACIC-BMU Foundation Website — Project Notes

Reference document: source content (Google Drive), repo/deployment details, and the
full record of changes made to date.

_Last updated: 11 Aug 2026 · Last code commit: `9255fdb`, 23 Jun 2026_

---

## 1. Quick reference

| Item | Value |
|---|---|
| Local repo | `/Users/anuj/Desktop/Projects/ACIC BMU/acic-website` |
| GitHub | https://github.com/anujbaid007/acic-bmu-website |
| Branch | `main` (clean, synced with `origin/main`) |
| Hosting | Vercel — project `acic-website` (`prj_vysTHpMcM37gsDeI4QxjOPdxg4YU`, team `team_kE8BRrwRDEczbpjmcgacqIzQ`) |
| Framework | Next.js 16.2.6 (App Router) · React 19.2.4 · TypeScript 5 |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Animation | Framer Motion 12 · Embla Carousel 8 |
| Icons | lucide-react · react-icons |
| Dev commands | `npm run dev` · `npm run build` · `npm run lint` |
| Public assets | 193 images, ~30 MB in `public/` |

---

## 2. Google Drive source content

All website copy, photos and data sheets come from the shared **Website** Drive
folder owned by `acic@bmu.edu.in`.

**Root folder → https://drive.google.com/drive/folders/1vtftgbfVJQDThcrKL70TZNJMtupHvjgc**

### Top-level folders

| Folder | Drive link |
|---|---|
| Homepage | https://drive.google.com/drive/folders/1uCprQDqUpxUsO06jhUXa8x2_C3RGn0Zs |
| About (Neha) | https://drive.google.com/drive/folders/1JQNORlkyCUl77Dtg7eTsP3_vrvwpIQBY |
| Board Members (Divya) | https://drive.google.com/drive/folders/11uuSpH2dCaG0dzLtQlp378VcfpOOoFrp |
| Team (Siraj) | https://drive.google.com/drive/folders/1-AbX08dcNZXqCxr4gWlZFpa7GAepfn32 |
| Programs (Siraj, Neha, Divya) | https://drive.google.com/drive/folders/1FI6b676S3gd9m6lui6Dogp8u4Yl_V9IT |
| Startups (Divya) | https://drive.google.com/drive/folders/10RA72GbhVEH34RpW3zZkMicL8kK9_vRs |
| Partners (Divya) | https://drive.google.com/drive/folders/15A0j5FH3nU2BzAf4kRzF-3y-1jL01maY |
| Events (Siraj, Neha, Divya) | https://drive.google.com/drive/folders/1316wkCWf7Sq6edWbjmdJmvSjuf4jz8Ev |
| Gallery (Siraj, Neha, Divya) | https://drive.google.com/drive/folders/1dREscajy3R35U7XWkU2qMV94x2Pr97yz |
| Infrastructure (Siraj) | https://drive.google.com/drive/folders/1i1jahIfNA-JFV-P1yqthjTOQjFl1ves1 |
| Contact Us (Neha) | https://drive.google.com/drive/folders/18mQZEWP3iNZBjUrJhQn1KYaTs1hP8SP2 |
| Logos | https://drive.google.com/drive/folders/1x_gT-LiD1hsKAGACUx7BqGcNIvrRrOti |
| Blogs | https://drive.google.com/drive/folders/17WptRuR9V8DIzNMI1yrYEpgQSi3tX067 (empty) |
| Media (Roobal) | https://drive.google.com/drive/folders/1RA6V8F8WoutRbSTwTn82yOuegWDSbT8m (empty) |

### Programmes sub-folders

| Folder | Drive link |
|---|---|
| CIF Program | https://drive.google.com/drive/folders/1qZv3zsb7ERXkpqT15fLToxq_nBJ-VMVT |
| Mera Business Program (Neha) | https://drive.google.com/drive/folders/1PMHmmQJ3WQOxdjVwqwbzyGZgCgmZ_wQC |
| Yuva Udyami (Siraj) | https://drive.google.com/drive/folders/10ugEmRnwDSk-8GsOKvL9OVy3YV8bHTq_ |
| Corporate Innovation (Divya) | https://drive.google.com/drive/folders/1gKI9baE2sTIsmfCbv_UyY_9p4yGOsjeG |
| Incubation Acceleration (Divya) | https://drive.google.com/drive/folders/1y12f-8WBZ77VIBmSRZ9-ENA8fS_IHXHe |
| Investments (Divya) | https://drive.google.com/drive/folders/16Ev0GQYO5ieePVtVooBK6wnquSvNfHs9 |

### Other sub-folders

| Folder | Drive link |
|---|---|
| Board Members → Board Members | https://drive.google.com/drive/folders/1gTKFTAL9tv2D0v9nNGCKRCoYhU8yJCvf |
| Board Members → Steering Committee | https://drive.google.com/drive/folders/1bdZtvGjhnbPRlJpmewT3ktofYvvYiBKI |
| Board Members → Mentors | https://drive.google.com/drive/folders/1EsteOLqQbzLT0IKgh-ySciBkJEvOAYo8 |
| Startups → Startups | https://drive.google.com/drive/folders/1sviEwAl6l7woVKB39MseYCuswQGI0rlL |
| Startups → Genesis Startups | https://drive.google.com/drive/folders/1NrEV7kZufpFCg31SrAFJuXg4dFzPogfe |
| Startups → SAMRIDH Startups | https://drive.google.com/drive/folders/1jaF6dI2tuIFQ8xmQx3asHRG-zqh2yNS9 |
| Partners → Academic partners | https://drive.google.com/drive/folders/1rSz_Q_to829ty5ay0hEvl_RQP95Wf0Sc |
| Partners → Industry Logos | https://drive.google.com/drive/folders/1H3QX32hlhmuCz3EInA4TA25Dcrjr7Xpj |
| Partners → Investors Logo | https://drive.google.com/drive/folders/1J-gNqgecoqTgQayg7N9v-8bMp_SDZor7 |
| Partners → Enablers Logo | https://drive.google.com/drive/folders/1KIzCiChcMah-ZvS2IKGCEqqsnsEmsuXj |
| Partners → Service Providers Logos | https://drive.google.com/drive/folders/1sPKLANdjzvz2o99JC7DrwiKKGBhuNDHq |
| Gallery → Pictures | https://drive.google.com/drive/folders/1qkgAZ2G_0hiwR3MfVaXveFptvgMcfxix |
| Gallery → Videos | https://drive.google.com/drive/folders/1uGR-mZP20qKdp4UKcClQAVPG0gdh3iHv |

### Key source documents & sheets

| Document | Feeds | Drive link |
|---|---|---|
| Homepage.docx | Homepage copy | https://drive.google.com/file/d/1dcpbgJI8m4MUJ-j_6-sWoWCOVYfrPCjP/view |
| Website.docx (About) | About page copy | https://drive.google.com/file/d/1ZCWYkFPqlHQSpW9-yyNhWpeIR81ci_79/view |
| Website Data (1).docx | Programme pages | https://drive.google.com/file/d/1dFrlkdVB5-ODY_k-YEO4QuOdXuUQ63hc/view |
| CIF Program.docx | `/programs/cif` page + Arpit Maurya photo | https://drive.google.com/file/d/1VzJMXn6C2C0q2oZfPwnXp_QDfVXNGlv6/view |
| Contact — Untitled document | Contact page details | https://docs.google.com/document/d/1DfrukrPHQ2-EGHmZy5EeqlVb_8tPkSDO1SxaFsxAqfA/edit |
| Program Details (Sheet) | Programme cards/metadata | https://docs.google.com/spreadsheets/d/1Ygrt0VqG4cED6GQGn0iVpLsemtDHuS7XDA-xmtYToX8/edit |
| Partner (Sheet) | Partner categories & logos | https://docs.google.com/spreadsheets/d/15tQCSPHtoCDXnRXDVFqcSTQMw_N_PKZ9P3eNN7SLOHc/edit |
| Startup details.xlsx | Startups page | https://drive.google.com/file/d/16SMomCkyYYh8bxbX97YxMlrEU_SmztrN/view |
| Team Details.xlsx | Team page | https://drive.google.com/file/d/1YDeRQ07gcsoBYw3an_Egr1odEAx2NrNq/view |

### Local mirror of the Drive content

A downloaded copy of the Drive folders sits **inside the repo root** (git-ignored
for the most part) and in a second, older snapshot folder:

- Current: `acic-website/` → `Homepage/`, `About (Neha)/`, `Board Members (Divya)/`,
  `Team (Siraj)/`, `Programs (Siraj, Neha, Divya)/`, `Startups (Divya)/`,
  `Partners (Divya)/`, `Events (Siraj, Neha, Divya)/`, `Gallery (Siraj, Neha, Divya)/`,
  `Infrastructure (Siraj)/`, `Contact Us (Neha)/`, `Logos/`
- Older snapshot (19 May 2026, superseded): `/Users/anuj/Desktop/Projects/ACIC BMU/ACIC Website/`
  — safe to archive/delete; `acic-website/` is the live project.

---

## 3. Site structure

| Route | File |
|---|---|
| `/` | `src/app/page.tsx` |
| `/about` | `src/app/about/page.tsx` |
| `/about/board` | `src/app/about/board/page.tsx` |
| `/about/steering-committee` | `src/app/about/steering-committee/page.tsx` |
| `/about/mentors` | `src/app/about/mentors/page.tsx` |
| `/about/team` | `src/app/about/team/page.tsx` |
| `/programs` | `src/app/programs/page.tsx` |
| `/programs/incubation` | `src/app/programs/incubation/page.tsx` |
| `/programs/mera-business` | `src/app/programs/mera-business/page.tsx` |
| `/programs/yuva-udyami` | `src/app/programs/yuva-udyami/page.tsx` |
| `/programs/corporate-innovation` | `src/app/programs/corporate-innovation/page.tsx` |
| `/programs/cif` | `src/app/programs/cif/page.tsx` |
| `/startups` | `src/app/startups/page.tsx` |
| `/partners` | `src/app/partners/page.tsx` |
| `/events` | `src/app/events/page.tsx` |
| `/gallery` | `src/app/gallery/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |

Shared components: `Navbar`, `Footer` (layout) and `BannerSlider`,
`AnimatedCounter`, `SectionHeading`, `StartupLogoCluster`, `bento-gallery`,
`logo-cloud`, `team-showcase`, `testimonials-columns`, `glowing-effect`,
`spotlight`, `button` (ui).

---

## 4. Change log

Grouped by working phase, newest first. Commit hashes are on `main`.

### Phase 4 — CIF Programme (23 Jun 2026)

**`9255fdb` Add CIF Programme (Community Innovation)**
- New `/programs/cif` page: hero, three support areas (infrastructural, financial,
  learning), Arpit Maurya candidate spotlight with photo, CTA
- CIF card added to the Programmes page (centred 5th card) and the homepage grid
- CIF added to the navbar Programmes dropdown and the footer Programmes list
- Spotlight image extracted from the Drive `CIF Program.docx`

### Phase 3 — Website updates Part 2 + mobile polish (22 Jun 2026)

**`968298e` Improve mobile header & banner**
- NITI Aayog / AIM "Supported by" logos now show on mobile (previously hidden below `md`)
- Mobile logo lockup reduced slightly so it fits alongside NITI/AIM + menu button
- Banner: removed the oversized `min-height` that left an empty band on mobile —
  Mera fills the 2:1 area, Genesis blends its letterbox
- Homepage header spacer synced to the responsive header height

**`577ec69` Website updates (Part 2): banners, board, logos, copy**
- Banners: homepage carousel populated (Genesis-EIR + Mera Business); full uncropped
  banners with click-to-open lightbox; enlarged to a 2:1 hero area
- Navbar: full-width bar above the banner that morphs into a floating island on
  scroll; combined ACIC-BMU · BMU · Propel lockup plus NITI Aayog / AIM; widened to fit
- Footer: same combined logo lockup
- Board reconciled to the sheet — Swati, Akshay, Shyam, Ravi Pahuja, Dr Prem Kumar,
  Manorama Nagarajan; last row centre-aligned
- Steering Committee: "Former Member" badge and "Former" titles replaced with an
  asterisk + footnote
- Stats: 500+ → **600+ Women Empowered** across the site
- Duplicate Facilities section removed from the homepage
- Corporate Innovation: real UDAAN collaboration photos
- Mentors: Sanjay Nagi LinkedIn URL fixed
- Copy: "Program" → "Programme" in visible text; Events heading → "Events"

### Phase 2 — Website updates.docx implementation (19 May 2026)

**`c9614a2` Implement Website updates.docx changes across all pages**
- Homepage: hero replaced with the placeholder `BannerSlider`; Innovators / Propel /
  SeedFund sections removed; About Us & Programs sections rewritten; programme card
  images and copy refreshed
- Navbar: NITI Aayog / AIM endorsement logo added (transparent); dropdown hover-gap fixed
- About: AIM section removed, overview collage refreshed, single BMU campus image
- Board: 4 members incl. Manorama Nagarajan
- Steering Committee: 15 members with LinkedIn links and former-member badges
- Team: rebuilt as a circular-card grid (7 members)
- Programmes: Mera Business / UDAAN / BOSCH content and images updated
- Partners: Academic Partners category added
- Contact: compact rebuilt layout with map
- Verified mobile-friendly at 390 px across all pages

### Phase 1 — Build, content load and polish (10–11 May 2026)

**Content & assets**
- `d496a72` Website content assets committed — board, mentors, steering committee,
  partners, programmes, events, gallery, startups, team and infrastructure images,
  documents and data files; `.gitignore` extended to exclude `.playwright-mcp/` and `.mp4`

**Startups section**
- `a3ac322` Scroll-pinned horizontal reveal — cards slide in from the right while the
  page is pinned (Framer Motion `useScroll`/`useTransform`, 400vh container; body
  `overflow-x: clip` to allow sticky)
- `faae853` / `bdb6cb7` / `45affe9` Scroll-highlight behaviour and active-card refinement
- `f06977d` / `0236cb8` / `fa5d344` Startup logos linked to company websites; hero logo
  links and blended-logo rendering fixed

**People pages**
- `2d560c3` Interactive team showcase (photo grid + hover, grayscale→colour); team page
  rewritten to use it; all 5 board-member LinkedIn links
- `5a39aab` Small partner logos scaled up (DPIIT, Survam, HSBC, BPCL …); orange ring +
  name highlight on hover for board and mentors; per-logo `scale` support in LogoCloud
- `41536d5` LinkedIn links + icons for all 26 mentors; "Join our mentor pool" CTA to the
  accubate form; Ravi Pahuja image fixed for Vercel (`.jfif` → `.jpg`)

**Gallery**
- `41536d5` Gallery page rewritten with an interactive bento gallery
- `51ed49f` Bento gallery replaced with an Embla carousel — autoplay, 1/2/3 slides on
  mobile/tablet/desktop, prev/next + dots, lightbox with arrow/escape keys, hover overlay
- `c2b529c` TypeScript build error in bento-gallery variants fixed (`as const` on the
  spring transition)

**Logos & branding**
- `1f5a504` LogoCloud rebuilt on the 21st.dev pattern — `bg-secondary` checkerboard,
  smaller logos (h-8 mobile / h-10 desktop), refined spacing
- `ac3d7c2` Blue banner logos redesigned as equal-size white capsules with the new BMU
  logo; LogoCloud row padding, border/checkerboard logic, rounded container, plus-icons
  only at valid intersections
- `11fa4e3` Root font-size set to 90 % for a more compact site; LogoCloud grid
  backgrounds fixed
- `2b725d6` Favicon (64 px), apple-icon (180 px), dynamic `opengraph-image.tsx`,
  OpenGraph + Twitter metadata
- `41536d5` Favicons replaced with extracted ACIC-BMU branded versions

**Mobile & performance**
- `e599439` Mobile homepage fixes — BMU/AIM logo backgrounds as white pills, single-line
  banner logos, faster partner marquee on mobile (15s → 10s), smaller "Supported by AIM"
  badge, left-aligned supported-by logos
- `aeec654` Hero fills the full mobile viewport; parallax reduced on mobile to stop
  jitter; hydration error from an in-render `window` check fixed; wider navbar with larger
  font and a flowing border on the blue banner logos; font sizes and spacing normalised
- `b469844` 25 large images compressed **218 MB → 15 MB** (Mera Business 23 MB → ~200 KB
  each, portraits 16 MB → ~50 KB each); responsive `sizes` config in `next.config.ts`;
  `sizes` on fill images; `loading="lazy"` in LogoCloud; partner logos constrained to stop
  grid overflow
- `3d7b154` Spacing and layout adjustments across programme pages

**Foundation**
- `465f06c` Complete first build — hero, programmes, partners, events and startups
  sections; board, steering committee, mentors and team pages; responsive navbar with
  expanded/compact scroll states; LogoCloud; Seed Fund scheme section with eligibility
  pills; Corporate Innovation page with UDAAN and BOSCH-BMU; supported-by logos
- `2c08a2d` Testimonial display pictures fixed
- `3f99dad` Footer social links
- `105b345` Initial commit from Create Next App

---

## 5. Outstanding / next up

- **`Website Update Part 3.docx` has not been implemented yet.** The file is at
  `~/Downloads/Website Update Part 3.docx` (10 Aug 2026) with a duplicate
  `Website Update Part 3 (1).docx` (11 Aug 2026, identical size). It is not in the
  shared Drive **Website** folder and no code has changed since 23 Jun 2026 — the
  working tree is clean at `9255fdb`.
- `Blogs` and `Media (Roobal)` Drive folders are still empty; there is no blog or
  media/press section on the site.
- The production domain is not recorded anywhere in the repo (no `vercel.json`, no
  `metadataBase` in `src/app/layout.tsx`) — worth adding `metadataBase` so OpenGraph
  image URLs resolve absolutely.

## 6. Gotchas worth remembering

- Root `<html>` carries `text-[90%]`, so every rem-based size on the site is scaled to
  90 %. Design specs need that factored in.
- `body` uses `overflow-x: clip` (not `hidden`) — required for the sticky/pinned
  startups scroll section to work.
- Vercel is case-sensitive about image extensions; `.jfif` broke a board photo once
  (fixed in `41536d5`). Keep uploads to `.jpg`/`.png`.
- Drive originals are large (single portraits up to 16 MB). Compress before adding to
  `public/` — the whole `public/` folder is currently ~30 MB.
- Visible copy uses British "Programme"; route paths stay `/programs/...`.
