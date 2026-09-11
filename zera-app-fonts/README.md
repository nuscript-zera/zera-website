# Zera app fonts — Figtree + JetBrains Mono

Drop-in typography for the Zera app UI, matched to the marketing site.
These are the **exact same font files** zera.health loads, so both surfaces
render identical faces.

## What's here

```
fonts/Figtree-Variable.woff2        system sans  (variable, 300–900)
fonts/jetbrains-mono-variable.woff2 monospace    (variable, 100–800)
fonts.css                           @font-face + font-family tokens
```

Both fonts are open-source (OFL) and safe to self-host and embed.

## Install (any framework)

1. Copy the two files in `fonts/` to wherever the app serves static assets
   so they resolve at `/fonts/…` (e.g. `public/fonts/` in Next.js/Vite/CRA).
2. Copy `fonts.css` into the app's global stylesheet, or import it once at
   the app root. If your static path isn't `/fonts/…`, fix the two `src:`
   URLs to match.
3. Use the tokens `var(--font-sans)` and `var(--font-mono)` in your styles
   rather than hard-coding family names.

## Next.js note

If the app uses `next/font/local`, register the same files instead of the
raw `@font-face` (keeps preloading + zero layout shift):

```ts
import localFont from 'next/font/local';

export const sans = localFont({
  src: '../public/fonts/Figtree-Variable.woff2',
  weight: '300 900',
  variable: '--font-sans',
  display: 'swap',
});

export const mono = localFont({
  src: '../public/fonts/jetbrains-mono-variable.woff2',
  weight: '100 800',
  variable: '--font-mono',
  display: 'swap',
});
```

Then add `${sans.variable} ${mono.variable}` to the `<html>`/`<body>`
className and reference `var(--font-sans)` / `var(--font-mono)` in CSS.

## Tailwind note

Map the tokens in `tailwind.config`:

```js
theme: {
  extend: {
    fontFamily: {
      sans: ['var(--font-sans)'],
      mono: ['var(--font-mono)'],
    },
  },
}
```

(Still load the `@font-face` blocks from `fonts.css` so the files register.)

## House style

- Body text: Figtree 400.
- Headings: Figtree **600**, letter-spacing **-0.02em** (matches the site).
- Codes, CPT/ICD/J-codes, tags, uppercase labels: JetBrains Mono 500.
