# GHL Affiliate Hub

A high-conversion, SEO-optimized **Next.js 15** landing page built for GoHighLevel (GHL) referrals. Features a full pricing breakdown, a feature comparison matrix vs ClickFunnels / Kajabi / Kartra, and a markdown-powered blog designed to rank.

**Live stack:** Next.js (App Router) · React 19 · TypeScript · Tailwind CSS · Markdown blog (gray-matter + remark)

---

## ✨ Features

### Conversion-focused landing page
- **Hero** with benefit-driven copy, trust markers, and dual CTAs
- **Pricing breakdown** — Starter ($97/mo), Unlimited ($297/mo), SaaS Pro ($497/mo), monthly + annual, usage-cost footnotes
- **Feature comparison matrix** — GoHighLevel vs ClickFunnels vs Kajabi vs Kartra (responsive, accessible table)
- **How it works** 3-step flow, affiliate-income section with commission math, testimonials, FAQ accordion, sticky-header CTA
- Every CTA routes through a single configurable **affiliate link** (`rel="sponsored"`)

### SEO-friendly blog
- Markdown posts in `src/content/posts/` with frontmatter (title, description, date, tags)
- Dynamic routes with per-post `generateMetadata`, canonical URLs, Open Graph + Twitter cards
- JSON-LD structured data: `BlogPosting`, `BreadcrumbList`, `FAQPage`, `SoftwareApplication` (with offers), `WebSite`, `Organization`, `Blog`
- `sitemap.xml` + `robots.ts` generated automatically
- GFM support (tables, task lists) via remark-gfm

### Engineering
- Fully static-rendered (SSG) — fast, cheap to host
- TypeScript strict, zero build-time dependencies on external services
- Accessible markup: semantic landmarks, `sr-only` labels, keyboard-friendly `<details>` FAQ

---

## 🚀 Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
npm start          # serve the production build
npm run typecheck  # tsc --noEmit
```

## ⚙️ Configuration

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for sitemap, OG tags, JSON-LD (no trailing slash) |
| `NEXT_PUBLIC_GHL_AFFILIATE_URL` | **Your GoHighLevel referral link** — used by every CTA |

> **Before launch:** replace `YOUR-AFFILIATE-ID` (or the whole URL) with your real affiliate link, and update `AFFILIATE_PROGRAM_URL` in `src/lib/site.ts` if needed.

## 📁 Project structure

```
src/
  app/
    layout.tsx            # global metadata, header/footer
    page.tsx              # landing page
    blog/page.tsx         # blog index
    blog/[slug]/page.tsx  # blog posts (SSG from markdown)
    sitemap.ts, robots.ts, icon.svg, not-found.tsx
  components/             # Hero, PricingTable, ComparisonTable, Faq, ...
  content/posts/*.md      # blog posts (edit these, no code changes needed)
  lib/site.ts             # site config, plans data, affiliate links
  lib/posts.ts            # markdown loading + rendering
```

## ✍️ Adding a blog post

Create `src/content/posts/my-post.md`:

```markdown
---
title: "Your SEO title (55–65 chars)"
description: "Meta description, ~155 chars — this is what Google shows."
date: "2026-09-26"
updated: "2026-09-26"   # optional
tags: ["Pricing"]
author: "GHL Affiliate Hub Team"
---

Your markdown content here. Tables, lists, links, and
blockquotes are all supported.
```

The post automatically appears on `/blog`, in the home-page teaser, in `sitemap.xml`, and with full social/structured metadata.

## 🚢 Deploy

**Vercel (recommended):** import the repo — zero config needed.

For any other host: `npm run build` and serve the `.next` output with `npm start` (Node server). Set `NEXT_PUBLIC_SITE_URL` to your production domain in the host's environment settings.

## 📌 Content & compliance notes

- Pricing/features verified **September 2026** (GoHighLevel: $97 / $297 / $497 per month; 14-day trial). Re-verify before launch and keep the disclosure in the footer accurate.
- The testimonial section uses **illustrative placeholder quotes** — replace with real, verifiable testimonials before commercial launch.
- Competitor pricing/feature cells are summarized from public sources with a dated footnote; update periodically.
- The footer contains the required affiliate disclosure; keep it (FTC compliance).

## 📄 License

MIT — use it, sell with it, remix it.
