# Assets to add

Drop these files in to complete the site. The code already references them.

## Logos (this folder — `public/`)

| File | Used in | Notes |
|------|---------|-------|
| `audryl-logo.png` | Navbar (white background) | Dark/color version of the Audryl logo. Recommended height ~32px (displayed at `h-8`), so export at 2x (~64px tall) for retina. Transparent PNG. |
| `audryl-logo-white.png` | Footer (dark slate background) | White/light version of the same logo, same dimensions. Transparent PNG. |

A placeholder wordmark (typeset in Sora, Blue-600) ships in this folder under
both filenames so the site renders cleanly before final logo art is dropped in.
Replace them with the polished exports when ready — same filenames, no code change.

## Favicon (place in the `app/` folder, NOT here)

Next.js App Router auto-detects favicons placed in `app/`:

- `app/favicon.ico` — classic favicon, OR
- `app/icon.png` — modern icon (Next generates the right tags automatically)

No `<link rel="icon">` tag is needed; Next handles it.

## If a logo file is missing

The site still builds and runs — the `<img>` simply shows the alt text
("Audryl") until the file is added. So you can deploy first and add
polished logos later without breaking anything.
