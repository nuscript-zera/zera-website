# Zera Website Setup Guide

## Overview
This is a Next.js 15 website for Zera Health, cloned from Audryl's design system. It's deployed to Cloudflare Pages with static export.

**Key Details:**
- **Domain:** zera.health
- **Stack:** Next.js 15, Tailwind CSS, Framer Motion, Radix UI
- **Deployment:** Cloudflare Pages (static export)
- **Design System:** Blue-600 primary (#2563EB), matches Audryl exactly
- **Typography:** Satoshi (display/body), JetBrains Mono (labels)

---

## Project Structure

```
zera-website/
├── app/
│   ├── fonts/                    # Satoshi font files (embedded)
│   ├── globals.css               # Design tokens & CSS variables
│   ├── layout.tsx                # Root layout (metadata, providers)
│   ├── page.tsx                  # Home page
│   ├── about/
│   │   ├── layout.tsx
│   │   └── page.tsx              # About Zera
│   ├── platform/
│   │   ├── layout.tsx
│   │   └── page.tsx              # Platform/Features
│   ├── request-demo/
│   │   ├── layout.tsx
│   │   └── page.tsx              # Demo request form
│   ├── security/
│   │   ├── layout.tsx
│   │   └── page.tsx              # Security & compliance
│   ├── privacy-policy/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── terms-of-service/
│   │   ├── layout.tsx
│   │   └── page.tsx
│
├── components/
│   ├── home/
│   │   ├── ZeraHeroSection.tsx
│   │   ├── ZeraProofSection.tsx
│   │   ├── ZeraProblemSection.tsx
│   │   ├── ZeraSolutionSection.tsx
│   │   ├── ZeraROITeaser.tsx
│   │   ├── SecuritySection.tsx    # (reusable)
│   │   ├── FAQSection.tsx         # (reusable)
│   │   └── CTASection.tsx         # (reusable)
│   ├── layout/
│   │   ├── Navbar.tsx            # Navigation
│   │   └── Footer.tsx            # Footer
│   ├── shared/
│   │   ├── AnimatedSection.tsx   # Framer Motion wrapper
│   │   ├── SectionLabel.tsx      # Section eyebrow label
│   │   ├── PageCTA.tsx           # Full-width CTA section
│   │   └── PipelineConsole.tsx   # (for how-it-works pages)
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── label.tsx
├── public/
│   ├── zera-logo.svg             # (add Zera logo here)
│   └── favicon.ico
├── lib/
│   └── utils.ts
│
├── package.json
├── tailwind.config.js             # Design tokens
├── next.config.js
├── tsconfig.json
└── postcss.config.js
```

---

## Key Updates Made

### 1. **Metadata (layout.tsx)**
- Updated `metadataBase` to `zera.health`
- Title: "Zera — Autonomous Revenue Cycle for Specialty Medicine"
- Description focuses on RCM, specialty medicine, automation

### 2. **Home Page (page.tsx)**
- Imports Zera-specific sections:
  - `ZeraHeroSection` → "Automate Revenue Cycle. Reclaim Hours."
  - `ZeraProofSection` → Live proof-of-concept metrics
  - `ZeraProblemSection` → Manual RCM pain points
  - `ZeraSolutionSection` → End-to-end pipeline
  - `ZeraROITeaser` → Financial impact (Before/After)
  - `SecuritySection`, `FAQSection`, `CTASection` (reusable)

### 3. **About Page (app/about/page.tsx)**
- Created Zera-specific content
- Mission: RCM automation for specialty practices
- Three principles: End-to-End Automation, Specialty Expertise, Transparent Control

### 4. **Color System (app/globals.css)**
- ✅ Blue-600 (#2563EB) primary (same as Audryl)
- ✅ All CSS variables match Audryl's design system
- No changes needed—theme is identical

---

## Remaining Pages to Complete

The following pages need content updates (follow the same pattern as About):

### Platform Page (app/platform/page.tsx)
- Title: "The Zera Platform"
- Sections:
  - RCM pipeline walkthrough (intake → coding → submission → tracking → appeals → collections)
  - Feature highlights with icons
  - Integration partners (EHR platforms)
  - Demo CTA

### How It Works (new: app/how-it-works/page.tsx)
- Step-by-step walkthrough of claim lifecycle
- Visual pipeline (use PipelineConsole component)
- Provider control & transparency messaging
- CTA to request demo

### Security Page (app/security/page.tsx)
- HIPAA compliance + BAA
- Data residency & encryption
- Audit trails
- Certifications (SOC 2, etc.)

### Request Demo Page (app/request-demo/page.tsx)
- Contact form (name, email, phone, practice size, specialties)
- Success message
- Integration with email backend (currently Audryl's setup)

### Privacy Policy & Terms of Service
- Legal copy (update "Audryl" → "Zera" throughout)
- Can largely copy from Audryl with domain/company name swaps

---

## Building & Deployment

### Local Development
```bash
npm install
npm run dev
# Opens http://localhost:3000
```

### Build for Cloudflare Pages
```bash
npm run build
# Generates static export in `out/` directory
```

### Deploy to Cloudflare Pages
1. **Connect GitHub repo to Cloudflare Pages:**
   - Cloudflare Dashboard → Pages → Connect to Git
   - Select repo: `nuscript-tech/zera-website`
   - Build command: `npm run build`
   - Build output directory: `out`

2. **Custom Domain:**
   - Add DNS records for zera.health (Cloudflare will provide)
   - SSL certificate auto-provisioned

3. **Environment Variables (if needed):**
   - Currently: None required
   - If adding forms: Add `CONTACT_EMAIL_ADDRESS` for demo requests

---

## Customization Checklist

- [ ] Update all Audryl references to Zera in code/copy
- [ ] Replace placeholder logo/favicon with Zera assets
- [ ] Create Platform page with RCM pipeline details
- [ ] Create How It Works page with claim lifecycle
- [ ] Update Security page for healthcare compliance
- [ ] Create Request Demo form with backend email integration
- [ ] Update Privacy Policy & Terms with Zera branding
- [ ] Test all links and CTAs
- [ ] Verify mobile responsiveness
- [ ] Audit SEO metadata on all pages
- [ ] Push to GitHub and deploy to Cloudflare Pages

---

## Design System Reference

**Colors:**
- Primary: Blue-600 (#2563EB) — buttons, links, accents
- Background: White (#FFFFFF)
- Foreground (text): Slate-900 (#0F172A)
- Muted: Cool Grey (#F5F7FA)
- Border: Light grey (#E2E6EB)

**Typography:**
- Satoshi (400/500/600/700) — all body text and headlines
- JetBrains Mono — small labels, eyebrows, metadata

**Spacing:**
- Container: max-w-[1180px]
- Padding: 1.5rem (mobile), 1.75rem (desktop)
- Gap: 1.5rem (components)

**Buttons:**
- Primary: Blue-600 bg, white text, 12px radius, shadow
- Outline: Border with hover state
- Size: height 48px (h-12), padding 0.5rem x 2rem

**Cards:**
- 16px radius
- Border: 1px solid border color
- Padding: 1.5rem
- Shadow: subtle (box-shadow-sm)

---

## Common Tasks

### Add a New Page
1. Create directory: `app/new-page/`
2. Add `layout.tsx` (inherit root layout)
3. Add `page.tsx` with content
4. Use `AnimatedSection` for Framer Motion fades
5. Use `SectionLabel` for eyebrow text
6. Use `PageCTA` for bottom call-to-action

### Update Navigation
- Edit: `components/layout/Navbar.tsx`
- Add link to navigation menu

### Update Footer
- Edit: `components/layout/Footer.tsx`
- Update company info, links, etc.

### Change Primary Color
- Edit: `app/globals.css`
- Update `--primary` CSS variable
- All components will inherit automatically

---

## Support & Questions
- GitHub: nuscript-tech/zera-website
- Domain: zera.health
- Design System: Blue-600 primary, Satoshi typeface

---

Generated: July 2026
Next.js 15 + Cloudflare Pages
