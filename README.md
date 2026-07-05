# Zera Health Website

Autonomous revenue cycle management for specialty medicine practices.

**Live:** https://zera.health  
**Built:** Next.js 15 on Cloudflare Pages  
**Design:** Audryl brand system (Blue-600 primary, Satoshi typography)

---

## Quick Start

```bash
# Install
npm install

# Develop
npm run dev

# Build for production
npm run build
```

Runs on `http://localhost:3000`

---

## What's Done

✅ **Home Page** — Hero, proof, problem, solution, ROI sections  
✅ **About Page** — Mission, pillars, transparency messaging  
✅ **Design System** — Blue-600 primary, Tailwind tokens, Satoshi font  
✅ **Component Library** — Navbar, Footer, AnimatedSection, reusable UI  
✅ **Metadata** — SEO setup for zera.health  

---

## What's Needed

- [ ] Platform page (RCM pipeline details)
- [ ] How It Works page (claim lifecycle visualization)
- [ ] Security page (HIPAA, BAA, compliance)
- [ ] Request Demo form (with email backend)
- [ ] Privacy Policy & Terms (Zera branding)
- [ ] Logo & favicon (Zera assets)
- [ ] GitHub push & Cloudflare Pages deployment

---

## Structure

```
app/
├── page.tsx                  # Home
├── about/page.tsx           # About
├── platform/page.tsx        # Features (TODO)
├── how-it-works/page.tsx    # Pipeline (TODO)
├── request-demo/page.tsx    # Form (TODO)
├── security/page.tsx        # Compliance (TODO)
├── privacy-policy/page.tsx
├── terms-of-service/page.tsx

components/
├── home/
│   ├── ZeraHeroSection.tsx
│   ├── ZeraProofSection.tsx
│   ├── ZeraProblemSection.tsx
│   ├── ZeraSolutionSection.tsx
│   ├── ZeraROITeaser.tsx
│   ├── SecuritySection.tsx
│   ├── FAQSection.tsx
│   └── CTASection.tsx
├── layout/ (Navbar, Footer)
├── shared/ (AnimatedSection, SectionLabel, PageCTA)
└── ui/ (Button, Input, TextArea, Label)
```

---

## Deployment

1. **GitHub:** Push to `nuscript-tech/zera-website`
2. **Cloudflare Pages:** Connect repo, set build output to `out/`
3. **Domain:** zera.health (DNS records via Cloudflare)

---

## Design System

- **Primary:** Blue-600 (#2563EB)
- **Typography:** Satoshi + JetBrains Mono
- **Container:** 1180px max-width
- **Border Radius:** 12px (buttons), 16px (cards)
- **Spacing:** 1.5rem base unit

See `ZERA_WEBSITE_SETUP.md` for full details.

---

## Next Steps

1. Complete remaining pages (Platform, How It Works, Security, Demo Form)
2. Add Zera logo and favicon
3. Update Navbar links to new pages
4. Set up demo request email backend
5. Push to GitHub
6. Deploy to Cloudflare Pages

---

**Built with:** Next.js, Tailwind CSS, Framer Motion, Radix UI  
**Cloned from:** Audryl design system  
**Status:** In development
