# Zera.health → dictra.health design-system re-skin (Figtree)

A faithful visual clone of the dictra.health system, applied to zera.health.
System sans is **Figtree**; **JetBrains Mono** for codes/labels.

## Files to deploy (5)

Replace:
  app/globals.css
  app/page.tsx              (WHY NOW → dark Way Forward card; CTA motif removed)
  components/Shared.tsx     (CTA motif removed)
  components/Footer.tsx     (Dictra footer: 3 compliance pills + mail icon)
Add:
  public/fonts/Figtree-Variable.woff2

(JetBrains Mono is already present in public/fonts on the live repo.)

## Typography change (this update)

- System sans is now **Figtree** (variable, weights 300–900), replacing
  Instrument Sans. Figtree is chosen as the shared face across the app UI and
  the marketing site — the app is the product's lifeline, so the site inherits
  what the app uses.
- **InstrumentSans-Variable.woff2 is no longer referenced** and can be removed
  from public/fonts on deploy (harmless to leave, but unused).
- JetBrains Mono is unchanged — still used for eyebrows, codes, tags, and all
  monospaced labels.

## What else changed (from the original re-skin)

- Palette: white #FFFFFF canvas, ink #0F172A, body #475569, borders #E2E8F0,
  sunken #F1F5F9, blue tint #E7F0FF, single blue accent #2563EB, all dark
  surfaces on one lifted navy #14213A. Coral removed entirely.
- Type: 17px root, fluid Figtree scale, headings 600 / -0.02em; a complete
  element-by-element sweep to Dictra's steps (t-body, t-small, t-h3/h4,
  t-stat, t-label / t-label-sm).
- Hero & inner headers: clean white canvas, faint grid, no glow.
- WHY NOW: styled as a navy Way Forward card (gradient panel, Title-Case
  eyebrow, statement copy).
- CTA + footer: merged into one continuous #14213A block (centered CTA, no
  card, no motif) — matching Dictra.
- Footer: matched to Dictra (sans belief eyebrow, #7cb0ff accents, 4-col grid,
  17px links, mail icon, HIPAA / SOC 2 / BAA pills).

## Revert
Previous stylesheet preserved as app/globals.css.orig in the working repo.
