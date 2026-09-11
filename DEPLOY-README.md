# Zera.health → dictra.health design-system re-skin

A faithful visual clone of the dictra.health system, applied to zera.health.

## Files to deploy (5)

Replace:
  app/globals.css
  app/page.tsx              (WHY NOW → dark section; CTA motif removed)
  components/Shared.tsx     (CTA motif removed)
  components/Footer.tsx     (Dictra footer: 3 compliance pills + mail icon)
Add:
  public/fonts/InstrumentSans-Variable.woff2

(JetBrains Mono is already present in public/fonts on the live repo.)

## What changed

- Fonts: Satoshi → Instrument Sans; Commit Mono → JetBrains Mono.
- Palette: white #FFFFFF canvas, ink #0F172A, body #475569, borders #E2E8F0,
  sunken #F1F5F9, blue tint #E7F0FF, single blue accent #2563EB, all dark
  surfaces on one lifted navy #14213A. Coral removed entirely.
- Type: 17px root, Instrument fluid scale, headings 600 / -0.02em; a complete
  element-by-element sweep to Dictra's steps (t-body, t-small, t-h3/h4,
  t-stat, t-label / t-label-sm).
- Hero & inner headers: clean white canvas, no glow.
- WHY NOW: styled as the Founder's Office (full-width navy, quote statement).
- CTA + footer: merged into one continuous #14213A block (centered CTA, no
  card, no motif) — matching Dictra.
- Footer: matched to Dictra (sans belief eyebrow, #7cb0ff accents, 4-col grid,
  17px links, mail icon, HIPAA / SOC 2 / BAA pills).

## Revert
Previous stylesheet preserved as app/globals.css.orig in the working repo.
