# Zera.health — Dictra-system re-skin

Full visual re-skin of zera.health onto the dictra.health design system.
Everything lives in ONE stylesheet plus ONE added font — no markup changes.

## What to deploy (2 files)

1. Replace  →  app/globals.css
2. Add      →  public/fonts/InstrumentSans-Variable.woff2

That's it. No changes to any page.tsx, component, layout, or config.
(JetBrains Mono is already in public/fonts on the live repo.)

## What changed

- Fonts: Satoshi → Instrument Sans (display/body/UI); Commit Mono → JetBrains Mono (labels).
- Palette: Dictra system — white #FFFFFF canvas, ink #0F172A, body #475569,
  borders #E2E8F0, sunken #F1F5F9, blue tint #E7F0FF, single blue accent #2563EB,
  dark surfaces on lifted navy #14213A.
- Type: 17px root, Instrument fluid scale, headings 600 / -0.02em, JetBrains Mono
  uppercase eyebrow/footnote/labels.
- Radius: 0.75rem buttons.
- Coral: removed entirely (blue is the single accent).
- Hero & inner headers: clean white canvas, no blue glow.
- CTA cards + WHY NOW panel: navy #14213A family.

## Revert

The previous stylesheet is preserved as app/globals.css.orig in the working repo
if you ever need to roll back.
