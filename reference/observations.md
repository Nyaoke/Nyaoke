# Rare Carat `/diamond-search` reconnaissance

Date: 2026-06-09

## Capture method

- Browser automation/screenshot tooling was not available in this environment, so `reference/desktop.png`, `reference/mobile.png`, and `reference/filters-applied.png` were skipped.
- A direct Python/curl-style fetch to `https://www.rarecarat.com/diamond-search` returned `403 Forbidden`.
- The read-only web fetch tool succeeded and returned rendered text content. Because it does not expose computed CSS or a live DOM/CSSOM, exact computed style values below are marked as unavailable where they could not be observed directly.

## Computed style observations

Unavailable from the fetch-only path:

- Body computed `font-family`
- Body computed background color
- Primary text color
- Border color
- Accent colors
- Exact padding/gap/border-radius on live filter groups, grade toggle buttons, and diamond cards
- Exact responsive breakpoints and grid column transitions

Prototype defaults retained for those values unless the fetched text contradicted the prompt:

- Font stack: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- Background: `#FFFFFF`
- Primary text: `#0F0F0F`
- Secondary text: `#737373`
- Border: `#E5E5E5`
- Hover: `#F5F5F5`
- Promo strip background: `#FAFAFA`
- Yellow CTA accent: `#FACC15`

## Live text and structure observed

- Step indicator:
  - `1 Choose your Diamond`
  - `2 Choose your Setting`
  - `Browse`
  - `3 Complete Ring`
- H1: `Search for Round Diamonds`
- Quiz CTA: `Need help? Take our quiz 💍`
- Lab toggle: `Lab`, `Natural`, `What's the difference?`
- Filter groups and controls observed in order:
  1. `Shape`
  2. `Carat`
  3. `Color`
  4. `Cut`
  5. `Clarity`
  6. `Price`
  7. `Quick ship`
  8. `Delivery by Holiday`
  9. `Reset Filters`
  10. `More filters`
- Results/view text:
  - `Visual`
  - `List`
  - `Best Value`
  - `Only showing compatible results with your setting. Remove setting`
- Carat quick picks:
  - `<1ct`, `1ct+`, `1.5ct+`, `2ct+`, `2.5ct+`, `3ct+`, `3.5ct+`, `4ct+`, `5ct+`
- Sort options:
  - `Sweet Spot`
  - `Top Quality`
  - `Budget Friendly`
  - `Largest`
  - `Lowest price`
  - `Highest price`
- Marketing line:
  - `We're using unbiased artificial intelligence to compare your diamonds to a million others`
- Track CTA:
  - `Track this search`
- More filters content observed:
  - `Ships as loose diamonds by`
  - `Any date`
  - `Search by GIA/IGI Cert No.`
  - `GIA/IGI Number`
  - `Submit`
  - `Popular filters`
  - `Image or Video Available`
  - `Search Earring Pairs`
  - `Search for Rings`
  - `Search for Pendants`
  - `Take the Quiz`
  - `Dark Mode`
  - `Rare Carat Scores`
  - `Price Score`
  - `Great Price`
  - `Good Price`
  - `Fair Price`
  - `Quality Check`
  - `Meets all checks`
  - `Misses 1`
  - `Misses 2`
  - `Misses 3`
  - `Certification`
  - `GIA`
  - `IGI`
  - `GCAL`

## Grade order observed

The live fetched content shows grades in descending visual/sidebar order:

- Color: `K`, `J`, `I`, `H`, `G`, `F`, `E`, `D`
- Cut: `Good`, `Very Good`, `Excellent`, `Rare Carat Ideal`
- A duplicated Cut block also appeared in fetched text: `Good`, `Very Good`, `Excellent`, `Ideal`, `Rare Carat Ideal`
- Clarity: `SI2`, `SI1`, `VS2`, `VS1`, `VVS2`, `VVS1`, `IF`, `FL`

## Sidebar DOM snapshot note

The browser DOM was unavailable, so `reference/sidebar.html` is a hand-extracted semantic snapshot from the rendered text returned by web fetch rather than a full browser DOM subtree.
