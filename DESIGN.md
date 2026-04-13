# Design System — Verne Agency

## Product Context
- **What this is:** Digital agency website specializing in custom web design for French law firms
- **Who it's for:** Avocats (lawyers) early in practice who need a professional web presence, partners evaluating digital agencies
- **Space/industry:** Legal services web design, French market
- **Project type:** Agency marketing site — must project quiet authority and editorial taste

## Aesthetic Direction
- **Direction:** Dark Editorial
- **Decoration level:** Minimal — typography does the work. No grain, no custom cursors, no glow orbs.
- **Mood:** Like a beautifully lit law library at night. Deep, precise, authoritative. The restraint IS the statement.
- **Reference sites:** Ourama (ourama.fr), Obys Agency, Locomotive, Bredin Prat
- **Default theme:** Dark mode. Light mode available via toggle.

## Typography
- **Display/Hero:** Instrument Serif — elegant, editorial, signals authority
- **Body:** Instrument Sans — clean, modern, pairs with its serif sibling
- **UI/Labels:** Geist Mono — Apple-adjacent, cleaner than JetBrains Mono. Uppercase + letter-spacing for section labels.
- **Code:** Geist Mono
- **Loading:** Google Fonts — Instrument Sans + Instrument Serif. Geist Mono self-hosted or from CDN.
- **Scale:**
  - Hero: clamp(3rem, 8vw, 7rem) / line-height 0.95 / tracking -0.03em
  - H2: clamp(2rem, 5vw, 3.5rem) / line-height 1.1
  - H3: 24px / line-height 1.3
  - Body: 15px / line-height 1.6
  - Small: 14px / line-height 1.5
  - Label: 10px / line-height 1.4 / letter-spacing 0.3em / uppercase

## Color
- **Approach:** Restrained — near-monochrome with one sage green accent
- **Accent rationale:** Sage green is unusual for law. That's the point. It says "considered, natural, precise" while competitors use blue or gold. Reads as sophisticated without being corporate.

### Dark mode (default)
- **Page:** #08090E (deep navy-black)
- **Surface:** #0F1118 (slightly lifted)
- **Surface Hover:** #161923
- **Text:** #F0EDE8 (warm ivory, not clinical white)
- **Text Secondary:** #8A8580 (warm gray)
- **Text Muted:** #555048
- **Accent:** #7C9A82 (sage green)
- **Accent Hover:** #92B098
- **Accent Glow:** rgba(124, 154, 130, 0.10)
- **Border:** rgba(240, 237, 232, 0.06)
- **Border Strong:** rgba(240, 237, 232, 0.12)
- **Glass nav:** rgba(8, 9, 14, 0.80) + blur(20px) + saturate(180%)

### Light mode
- **Page:** #FAFAF7 (warm off-white)
- **Surface:** #F0EFEB (warm stone)
- **Surface Hover:** #E6E5E0
- **Text:** #1A1A18 (near-black, warm)
- **Text Secondary:** #6B6964
- **Text Muted:** #9A9892
- **Accent:** #5C7D62 (deeper sage for contrast on light)
- **Accent Hover:** #4A6B50
- **Accent Glow:** rgba(92, 125, 98, 0.08)
- **Border:** rgba(26, 26, 24, 0.08)
- **Border Strong:** rgba(26, 26, 24, 0.15)
- **Glass nav:** rgba(250, 250, 247, 0.90) + blur(20px) + saturate(180%)

### Semantic colors
- Success: #5C9A6E
- Warning: #C4A054
- Error: #C46A5C
- Info: #5C8AC4

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable — generous whitespace
- **Scale:** 2xs(4) xs(8) sm(16) md(24) lg(32) xl(48) 2xl(64) 3xl(96)
- **Section padding:** 120px vertical, 32px horizontal
- **Content max-width:** 1200px

## Layout
- **Approach:** Grid-disciplined with editorial breaks
- **Grid:** Asymmetric two-column for services/FAQ (1fr 2fr), full-width for hero/CTA
- **Max content width:** 1200px
- **Border radius:** Minimal — 2px, 3px, 4px. No large rounded corners.
- **Hero:** Bottom-aligned, full-width text, massive type scaling

## Motion
- **Approach:** Minimal-functional
- **Easing:** ease-out for enters, ease-in for exits
- **Duration:** fade-up 400ms, page transitions 300ms, hover 200ms
- **What to animate:** Section reveals on scroll (IntersectionObserver), hover states, page transitions
- **What NOT to animate:** No parallax, no spring physics, no infinite loops, no decorative motion

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-13 | Dark-first design | Competitive research: top agencies (Obys, Locomotive) go dark-first. Ourama alternates. Dark = authority + differentiation from generic law sites. |
| 2026-04-13 | Sage green accent (#7C9A82) | Unusual for law. That's the point. Competitors use blue or gold. Sage says "considered, natural, precise." Pairs with warm ivory on dark navy. |
| 2026-04-13 | Warm ivory text (#F0EDE8) | Not clinical white. Warm ivory reduces eye strain on dark backgrounds and reads more editorial. Inspired by Apple's dark mode text treatment. |
| 2026-04-13 | Keep Instrument Serif/Sans | They work. Serif signals authority for lawyers. Sans is clean for body. No need to change what's already good. |
| 2026-04-13 | Light mode as toggle, not default | Dark-first commits to a direction. Light mode exists for accessibility and preference. Not a compromise. |
