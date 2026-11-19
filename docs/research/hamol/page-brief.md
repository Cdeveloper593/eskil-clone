# Hamol Studio — clone brief

Source: https://hamol.studio/ → Local: `/` (first root clone, replaces template homepage)
Scope: homepage only. Project rows link out to the source project pages at hamol.studio/work/<slug>/.

## Design tokens (from source CSS)
- Font: Manrope variable (400–600), self-hosted woff2 from source /fonts/
- Dark bg: #0b0d10 (--bg), ink: #f1f2ef, muted: #999da4, line: rgba(231,236,245,.14)
- Light studio section: bg #e9e9e3, text #171a1c
- Page padding: max(clamp(24px, 3.45vw, 72px), safe-area)
- Eyebrow: 12px, letter-spacing .2em, uppercase, weight 500
- Hero H1: clamp(48px, 4.5vw, 82px), letter-spacing -.057em, line-height 1.06
- Section space: 120px vertical

## Sections in order
1. Fixed header — logo (hamol-logo.svg) + Lovable Expert badge, centred pill nav (Work / Studio / Approach / Contact), "Let's talk" CTA (opens contact dialog). Header turns light over the studio section. On mobile nav is a fixed bottom pill.
2. Hero / orbital experience (dark, full viewport) — eyebrow "CREATIVE & VENTURE STUDIO", H1 "We turn ideas / into cool / brands.", description "Hamol Studio brings brands to life through memorable visuals and digital experiences that people want to explore.", CTA "Explore our work". Orbital collection label "THE ORBITAL COLLECTION — 01 / LUNAR", lunar.webp visual, project orbit list 01–09 (right), hint "Scroll to explore · Drag to rotate · Click to open", counter 01 / 09.
   Original uses a real-time 3D scene (drag rotate, meteors). Clone: CSS orbital rings + lunar image, selectable project list, rotate play/pause — 3D WebGL is a known gap.
3. Connected Earth (dark) — eyebrow "An international vision", H2 "Built here. / Connected everywhere.", cities: New York, London, Bratislava, Singapore. Copy about reaching beyond borders. CTAs: Let's build (mailto) + Explore our projects. Credit "Earth imagery · NASA / GSFC".
4. Projects (#projects, dark) — topline "A CONSTELLATION OF IDEAS / 01 — 09", H2 "Built with intention." + lead "Digital products, independent brands, and businesses with a point of view." Rows: number, logo mark (accent-tinted tile), name, category, status (Active/Growing/In development), arrow. Accents:
   Ranketize #06d99a · Crawlly AI #729dff · MojBroker #a790fb · Cleminds AI #55dae8 · CompareNow #edbd6d · Platby360 #e39cbf (text mark "P360", no logo png) · Generate QR Code #4ddcea · NameSpark #8b5cf6 · Frost #a8dcf1
5. Studio (#studio, LIGHT) — topline "HAMOL / THE STUDIO / 02", H2 "From possibility / to a working business.", copy, "Meet the co-founders" link. Disciplines: 01 Strategy, 02 Design, 03 Technology.
   Team: eyebrow "THE PEOPLE BEHIND HAMOL", "Different expertise. Shared ambition.", two founder articles (portrait 4/3, saturate .55, name, role, expertise chips, bio, LinkedIn links). Text/bios verbatim from source index.md.
6. Approach (#about, dark) — topline "OUR APPROACH / 03", H2 "Different ideas. / The same care.", lead, 3 steps with SVG line diagrams: 01 Discover "Find the right problem.", 02 Make "Make the complex feel simple.", 03 Evolve "Keep making it better."
7. Footer / Contact (#contact, dark) — topline "START A CONVERSATION / 04", H2 "Let's build / what comes next.", note, large email link contact@ranketize.com, footer line (logo, email, © 2026 Hamol Studio, Back to top), legal (Privacy policy, Lovable badge).

## Assets (source → local, all verified content-type)
- /media/hamol-logo.svg → public/sites/hamol/media/hamol-logo.svg (svg)
- /media/environments/lunar.webp → .../media/environments/lunar.webp (webp)
- /media/team/{rastislav-molcan,michal-hajtas}-768.webp → .../media/team/
- /media/logos/{ranketize,crawlly-ai,mojbroker,cleminds-ai,comparenow,generateqrcode,namespark,frost}.png → .../media/logos/
- /media/badges/lovable-expert-2026{,-dark}.svg → .../media/badges/
- /fonts/manrope-{latin,latin-ext}-variable.woff2 → public/sites/hamol/fonts/

## Interactions to recreate
- Hero orbit list selection changes featured project + accent; Rotate toggle animates orbit; Open <project> button.
- Let's talk opens contact dialog ("Tell us what you're building.") with email CTA.
- Header lightens over studio section (scroll observer).
- Project row hover: accent gradient + logo tile tint.

## Comparison notes (2026-11-12)
- Verified against source HTML/CSS (canonical copy) and a live visual inspection at 1919px.
- Copy in the clone follows the source HTML / index.md exactly; a visual pass paraphrased a few lines (e.g. Earth invitation, studio and approach leads) — HTML text was kept.
- Fixes from comparison: Earth band rebuilt to the real compact 2-column layout (cities as a dotted timeline, "Build with us" pill); project rows and hero now open the project dialog (Project page / Visit website / Next project) as the source JS does; contact dialog rebuilt as the source's white form modal (Name, Email, topic pills, message, Send via mailto); hero centre is a faceted accent sphere carrying the selected project logo over a lunar floor, replacing the earlier lunar disc.
- Known gaps: the source hero is a scroll-driven WebGL 3D scene (drag-rotate spheres, scroll walks 01–09, scene settings, Earth finale) — the clone approximates it with a selectable orbit list, CSS orbit animation and dialogs, no WebGL and no scroll-driven project progression. Individual /work/<slug>/ project pages are not cloned; dialog "Project page" links go to the live source pages. Mobile layout follows the source CSS patterns (bottom pill nav, stacked grids) but was not visually verified against the source at 390px (source inspection browser had no viewport control).
- Checks: `npm run check` passes (lint + typecheck + production build). Local production server renders all sections; all sampled assets return 200 with correct content types.
