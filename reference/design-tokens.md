# Design Tokens (extracted from https://ted-nyaoke.framer.website/)

Captured during Step 0 via live browse + screenshots (see /reference/screenshots).

## Theme
Light theme. White / near-white page background. Footer is black.

## Colors
- Page background: `#FFFFFF`
- Subtle/alt section background: `#F5F5F5`
- Primary text (headings): `#0A0A0A`
- Secondary/muted text: `#6B6B6B`
- Faint text / captions: `#8A8A8A`
- Borders/dividers: `#ECECEC`
- Button background (primary): `#0A0A0A`
- Button text: `#FFFFFF`
- Card/surface background: `#FFFFFF`
- Footer background: `#0A0A0A`
- Footer text: `#FFFFFF` / muted `#8A8A8A`
- Accent green availability dot: `#3FCF8E`

## Fonts
Framer serves Inter for both headings and body on this template. Self-hosting the
exact Framer woff is not reliably extractable, so the closest Google Font, Inter,
is used via next/font/google. SUBSTITUTION NOTED: Inter (Google) in place of the
Framer-hosted Inter webfont. Headings use weight 600/700, body 400/500.

## Type scale (approx, desktop)
- H1 hero: ~72px / weight 600 / line-height 1.05 / letter-spacing -0.02em
- H2 section title: ~44px / weight 600 / line-height 1.1 / -0.02em
- H3 card title: ~22px / weight 600 / line-height 1.2
- Body: 17px / weight 400 / line-height 1.6
- Small/caption: 14px / weight 400
- Button text: 15px / weight 500
- Nav links: 15px / weight 500
- Eyebrow/pill: 14px / weight 500

## Spacing
- Content container max-width: ~1200px (wide image rows up to ~1280px)
- Horizontal gutters: 20px mobile, 40px tablet, 80px desktop
- Section vertical padding: ~80px mobile, ~120px desktop
- Grid gaps: 24px

## Radii
- Buttons / pills: 999px (full pill)
- Cards: 16px
- Image containers: 16px
- Chips/tags: 999px

## Shadows
- Cards: soft, low: `0 1px 2px rgba(10,10,10,0.04), 0 8px 24px rgba(10,10,10,0.05)`

## Marquee
- Continuous horizontal translateX loop, constant speed, ~30s per full cycle.
- Does not pause on hover.
