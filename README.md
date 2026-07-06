# zera.health — Zera

Marketing site for **Zera**, the autonomous revenue platform for specialty medicine.
Note → Code → Claim. One AI, zero handoffs.

Zera is a product of **NuScript Systems, Inc.** (Texas C-Corp).

## Stack
- Next.js 14 (App Router), **static export** (`output: "export"`)
- Plain-CSS design system (`app/globals.css`) — no Tailwind
- Deploys to **Cloudflare Pages** (git-push auto-deploy)

## Local development
```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build
```bash
npm run build    # outputs static site to ./out
```

## Deploy (Cloudflare Pages)
1. Push this repo to GitHub (suggested: nuscript-zera/zera-website).
2. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Add custom domain `zera.health` after the first successful deploy.

## Pages
`/`, `/product`, `/company`, `/contact`, `/privacy-policy`, `/terms-of-service`.

## Brand
- **Type:** Satoshi (display + body) · JetBrains Mono (labels + eyebrows) — per the NuScript/Audryl brand system.
- **Color:** Blue-600 `#2563EB` primary · Blue-400 `#60A5FA` accent · Slate-900 `#0F172A` ink — shared design family with Audryl.
- **Signature:** the Note → Code → Claim pipeline (chevron flow).
- No pricing page (deliberate — enterprise sales motion; pricing is handled through demos/sales).
- Logos in `/public`: `zera-logo.png` (dark), `zera-logo-white.png` (on-dark), `zera-icon.png` (favicon, also `app/icon.png`).

## Notes
- Fonts load via `@import` in `globals.css` (Satoshi via Fontshare, JetBrains Mono via Google).
- **Privacy Policy** and **Terms of Service** are starter drafts (Texas jurisdiction) — have counsel review before relying on them.
- Contact form opens the visitor's mail client to `hello@zera.health` (no backend). Wire a form handler later if desired.
