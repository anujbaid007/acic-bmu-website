# Website Update Part 3 — Changes Summary

Source: `Website Update Part 3 (1).docx`. Line-level detail is in `IMPLEMENTATION-PLAN.md`.

**Status: 17 of 21 items done. 4 remain, all blocked on content only the client can supply.**

---

## ✅ Changes done

### Content & copy

1. **Startups page** — removed the SISF / SAMRIDH / Genesis badge tags from each startup card. The `category` field was kept in the data because the search/filter tabs depend on it.
2. **About Us page** — added a new "About Atal Innovation Mission" section immediately after the BML Munjal University section, using the doc's copy verbatim. *(Side effect: the Infrastructure Gallery background was flipped `section-alt` → `white` to preserve the page's alternating background rhythm.)*
3. **Board Members** — designations updated:
   - Akshay Munjal → "Pro Chancellor, BML Munjal University; Founder and CEO, Hero Vired"
   - Shyam Menon → "Officiating Vice Chancellor, BML Munjal University"
4. **Steering Committee**:
   - Sunil Munjal → renamed "Sunil Kant Munjal", now "Chancellor, BML Munjal University"
   - Removed the `*` former-member marker from Gerry George, Poyni Bhat, and Srinivas Rao
   - Poyni Bhat → "Former CEO", SINE
   - Neharika Vohra → "Former Board Member"
   - Srinivas Rao → renamed "M Srinivas Rao", now "Former CEO"
   - Removed Swati Munjal from this page (she remains on the Board page) — 15 members → 14
   - Removed the "GOVERNANCE" badge above the heading
   - Footnote → "Former Member"
5. **Team Members** — removed Siraj Khan (7 → 6 members); renamed "Ramanuj Jajoo" → "Ramanuj Jaju".
6. **Incubation page** — heading "Investment & Programmes" → "Government Schemes"; added "Scheme guidelines applicable" beneath every scheme card.
7. **Yuva Udyami page** — removed the "Our Vision" / "Our Mission" cards and the "Building Tomorrow's Entrepreneurs, Today" section. *(The orange CTA banner was kept — it's the shared end-of-page pattern used on all programme pages.)*
8. **Moved UDAAN** from the Corporate Innovation page to Yuva Udyami. Its four bullet highlights were folded into the description, since Yuva Udyami's cards don't render bullet lists.
9. **Mera Business page** — partner entries (Raman Kant Munjal Foundation, Hinduja Foundation, HDFC Bank, SEWA Uttarakhand) trimmed to name-only and re-laid-out as compact pills. *Note: this removed the CSR funding figures (₹8.5L, ₹60L, 170+ women trained, etc.).*
10. **Events page** — removed the "10+ Events per Year / 2000+ Participants / 50+ Expert Mentors" stats row from the hero.

### Structure & layout

11. **Partners** — deleted the standalone `/partners` page and its navbar + footer links. All partner logos (45, India AI Mission excluded per the doc) now appear on the homepage in a colourful sliding marquee — grayscale treatment removed, each logo on a tinted rounded tile. A "View All Partners" link on the homepage that would have become a dead link was also removed.
12. **Number formatting** — the Startups page hero now uses the shared `AnimatedCounter` component, matching the homepage / Incubation / Mera Business. All five pages showing stats are now consistent. *(Side effect: the three stat icons were dropped, as the reference style doesn't use them.)*
13. **Hero spacing gap** — diagnosed the gap in the doc's screenshot as stacked padding: `pt-24` on the `<section>` plus `py-24 lg:py-32` on the inner `<div>` — 201px of top padding and 115px of dead space at the bottom. Reduced the inner padding to `py-12 lg:py-16` on **all five programme pages** (yuva-udyami, incubation, corporate-innovation, mera-business, cif), since the defect was identical on each. Verified live in the browser.

### Branding & people data

14. **Logos** — replaced with the updated ACIC-BMU branding from the `Updated logos/` folder. Used variant `-01` (the horizontal BMU · propel · ACIC-BMU lockup, the only single-row option carrying all three brands). Trimmed 41% dead whitespace, converted to `public/images/logos/acic-bmu-propel-2026.webp` (1800×221, 85KB). Navbar and Footer height classes were rescaled — the new lockup is 8.15:1 versus the old 4.24:1, so unchanged heights would have rendered it ~2× wider and broken the navbar. Verified at mobile / lg / xl and in the footer.
15. **Salutations** — now consistent across **all four people pages: 52/52 people**.
    - Board 6/6 · Steering Committee 14/14 · Mentors 26/26 · Team 6/6
    - Only four forms in use, no periods: **Mr** (23) · **Ms** (12) · **Dr** (11) · **Prof** (6)
    - Sources used, in order of reliability: the official `Team Details.xlsx`; `dr-` prefixes in people's own LinkedIn URLs; researched authoritative bios (own company sites, employer newsrooms, event listings); and finally the client for two people with no discoverable evidence.
    - **Prof Davinder Singh** — the internal spreadsheet said "Mr", but BMU's own faculty page and newsroom use "Prof". Corrected to Prof. Not "Dr" — BMU lists his doctorate as *"Pursuing"*.
16. **Photo framing (partial)** — audited all 57 photos and visually reviewed the 17 with awkward aspect ratios. 15 were already well-framed (a previous developer had hand-tuned `object-position`). Fixed the 2 that weren't: **Mr Vineet Rai** and **Dr Neharika Vohra**, both set to `object-[62%_center]`. *The rest of this item could not be completed — see below.*

---

## ❌ Changes that cannot be done, and why

| # | Item | Why it can't be done | What would unblock it |
|---|---|---|---|
| 1 | Update startup website links | The doc says *"Excel sheet attached with this email"*. That attachment isn't in the repo, isn't in the local Drive mirror folders, and isn't in the shared Drive folders referenced by `PROJECT-NOTES.md`. Without it there is no source for the correct URLs, and guessing a company's website risks linking to the wrong domain. | The `.xlsx` file, or the list of startup → website URL pairs in any format. |
| 2 | Add missing text to the MeitY Startup Hub scheme card | The doc says *"There is text after EIR, Pilot and investment, we have to add that as well"* — it states the text exists in a source document but doesn't reproduce it. That source document isn't in the repo or Drive mirror. Writing this copy myself would mean inventing scheme terms for a government funding programme, which must not be fabricated. | The source document, or the missing sentences pasted directly. |
| 3 | Fix the SAMRIDH scheme card text | The doc says *"The text is wrong in samridh. Kindly add that text only which is available in document."* It identifies the current text as wrong but doesn't say what the correct text is, and again refers to a document not available here. Same constraint as #2 — this is factual funding-scheme copy that cannot be guessed. | The correct SAMRIDH description. |
| 4 | Recheck the Corporate Innovation page text | The doc says only *"The text is wrong in Corporate programmes section. Kindly recheck."* It doesn't identify which paragraph is wrong, in what way, or what it should say. The page has several text blocks (hero, "Where Corporates Meet Innovation", programme descriptions, focus areas, collaboration model) and there's no way to tell which is meant. | Point to the specific paragraph(s) and what they should say. |
| 5 | Standardize profile photos — same framing, zoom, and background | **Partially done** (see item 16 above — 2 photos re-framed). The remainder is genuinely not a code problem:<br>• **Backgrounds cannot be changed by cropping.** They vary widely — outdoor greenery, pink flowers, grey studio, plain white, office interiors, near-black.<br>• **Zoom cannot be equalised by cropping.** A head-only shot cannot have shoulders added; some photos are head-only, others half-body with a desk.<br>• **Resolution cannot be recovered.** ~35 mentor photos are only 200×200 (one is 152×152); no processing adds detail.<br>• **Adobe's AI tools were investigated and ruled out** — their documentation caps batch work at ~20 files (there are 57), prompt-based background replacement is explicitly unsupported, and each file requires manual selection through a picker dialog that did not appear in this environment. | New headshots taken against a common backdrop at a consistent framing — or a designer running a Photoshop batch action (background replacement + face-aligned crop) across the existing 57. |

---

## Open items (not from the doc, worth deciding)

- **Two likely name misspellings** — `Sanghamitra Bahsin` (her LinkedIn and all sources say **Bhasin**, full name *Sanghamitra Dutta Bhasin*) and `Vibhuti Agarwal` (LinkedIn says **Aggarwal**). Left unchanged; these are real people's names and should be confirmed before editing.
- **Old logo file** `public/images/logos/acic-bmu-propel.webp` (31KB) is now unreferenced. Kept deliberately so the logo change can be reverted instantly; safe to delete once the new logo is signed off.
- **Team page may be out of date** — `Team Details.xlsx` lists staff not shown on the site: Roobal Saxena (Manager, Comm & Marketing), Dibakar Paul (Manager, Finance & Accounts), and several interns.
- **Unused import** — `Cpu` is imported but never used in `corporate-innovation/page.tsx`. Pre-existing (not introduced by these changes); harmless lint warning.

---

## Verification

Every change was checked with `npx tsc --noEmit` (exit 0) and `npx eslint` (clean). Layout-affecting changes — the logo swap, the hero spacing fix, and the partners marquee — were additionally verified live in the browser at mobile, lg, and xl breakpoints. All 45 partner logo paths and all 57 people photo paths were confirmed to resolve on disk.
