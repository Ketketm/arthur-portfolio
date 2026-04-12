# Design System — Verne Agency

## Product Context
- **What this is:** Digital agency website specializing in custom web design for French law firms
- **Who it's for:** Avocats (lawyers) early in practice who need a professional web presence, partners evaluating digital agencies
- **Space/industry:** Legal services web design, French market
- **Project type:** Agency marketing site — must project quiet authority and editorial taste

## Aesthetic Direction
- **Direction:** Editorial/Refined
- **Decoration level:** Intentional — no grain overlays, no custom cursors, no ambient glow orbs, no scroll progress bars. Only precise micro-interactions where they aid comprehension.
- **Mood:** Like a beautifully typeset legal brief. Quiet precision. The site itself is the portfolio piece. Restraint IS the statement.
- **Reference sites:** Bredin Prat (bredinprat.fr), Anima Dispute Resolution, DPS Avocats, Awwwards editorial portfolios

## Typography
- **Display/Hero:** Instrument Serif — elegant, editorial, signals authority. Unusual for a tech portfolio, perfect for selling to lawyers.
- **Body:** Instrument Sans — clean, modern, pairs with its serif sibling.
- **UI/Labels:** JetBrains Mono — subtle tech credibility for labels, metadata, and eyebrows. Uppercase with letter-spacing for section labels.
- **Code:** JetBrains Mono
- **Loading:** Google Fonts — `https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap`
- **Scale:**
  - Hero: 96px / line-height 1.1
  - H1: 48px / line-height 1.2
  - H2: 38px / line-height 1.25
  - H3: 30px / line-height 1.3
  - Body: 18px / line-height 1.6
  - Small: 14px / line-height 1.5
  - Label: 11px / line-height 1.4 / letter-spacing 0.2em / uppercase

## Color
- **Approach:** Restrained — near-monochrome warm neutrals with one deliberate bronze accent
- **Background:** #FAFAF8 (warm off-white) — not stark white
- **Surface/Cards:** #F2F0EC (warm stone)
- **Surface Hover:** #EAE7E1
- **Text Primary:** #1A1A1A (near-black) — not pure black
- **Text Secondary:** #6B6B6B (warm gray)
- **Text Tertiary:** #999999
- **Accent:** #8B6914 (aged bronze) — richer and more authoritative than gold, reads "notaire" not "crypto"
- **Accent Hover:** #A37D1C
- **Accent Light:** rgba(139, 105, 20, 0.08) — for subtle backgrounds
- **Border:** rgba(26, 26, 26, 0.08)
- **Border Strong:** rgba(26, 26, 26, 0.15)
- **Semantic:** success #2D8F3C, warning #B8860B, error #C53030, info #2B6CB0
- **Dark mode:** Optional. If implemented: bg #141416, surface #1E1E22, text #F0EDE8, accent #C4A044

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable — generous whitespace, the space breathes
- **Scale:** 2xs(4) xs(8) sm(16) md(24) lg(32) xl(48) 2xl(64) 3xl(96)
- **Section padding:** 96px vertical (py-96), 32px horizontal (px-32)
- **Content max-width:** 1200px

## Layout
- **Approach:** Grid-disciplined with editorial breaks
- **Grid:** 12 columns, asymmetric hero compositions
- **Max content width:** 1200px
- **Border radius:** Minimal — sm: 2px, md: 4px, lg: 8px. No large rounded corners. Precision, not friendliness.
- **Hero composition:** Magazine-cover feel. Asymmetric two-column with strong typographic hierarchy. NOT centered text + button.

## Motion
- **Approach:** Minimal-functional — restraint IS the statement
- **Easing:** ease-out for enters, ease-in for exits, ease-in-out for state changes
- **Duration:** fade-up on scroll 200ms, page transitions 300ms crossfade, hover states 150ms
- **What to animate:** Section fade-ups on scroll, page transitions, hover state changes
- **What NOT to animate:** No parallax, no spring physics, no infinite animations, no grain, no glow orbs, no custom cursors
- **Framer Motion:** Keep it, but use sparingly. Simple `initial/whileInView` fade-ups only.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-04-11 | Initial design system created | Created by /design-consultation based on competitive research (legal web agencies, Awwwards portfolios) and product positioning analysis |
| 2025-04-11 | Editorial/Refined over dark luxury | Dark mode + gold = crypto portfolio, not legal trust. Light + serif = editorial authority. |
| 2025-04-11 | Instrument Serif for display | Serif on a tech portfolio is unusual — but the audience is lawyers, not developers. The serif says "I understand your world." |
| 2025-04-11 | Kill all decorative effects | Grain, custom cursor, glow orbs, scroll progress = "I just learned framer-motion." Restraint demonstrates taste. |
| 2025-04-11 | Near-monochrome palette | In a sea of colorful law agency sites, the restraint makes you memorable. One bronze accent, used rarely and precisely. |
