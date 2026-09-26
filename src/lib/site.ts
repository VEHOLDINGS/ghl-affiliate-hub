/**
 * Central site configuration. Every CTA on the site routes through
 * AFFILIATE_URL so referral attribution is never missed.
 */

export const SITE_NAME = "GHL Affiliate Hub";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const SITE_URL =
  rawSiteUrl && rawSiteUrl.length > 0
    ? rawSiteUrl
    : "https://ghl-affiliate-hub.vercel.app";

export const SITE_DESCRIPTION =
  "Independent GoHighLevel pricing, plan comparisons, and reviews. See GHL's Starter, Unlimited, and SaaS Pro plans side by side, compare ClickFunnels, Kajabi & Kartra, and start a 14-day free trial.";

/** Main referral link — used by every "Start Free Trial" CTA. */
const rawAffiliateUrl = process.env.NEXT_PUBLIC_GHL_AFFILIATE_URL?.trim();
export const AFFILIATE_URL =
  rawAffiliateUrl && rawAffiliateUrl.length > 0
    ? rawAffiliateUrl
    : "https://www.gohighlevel.com/pricing?fp_ref=victor-b364be";

/** Where the "join the affiliate program" CTA points. */
export const AFFILIATE_PROGRAM_URL = "https://www.gohighlevel.com/affiliates";

export const NAV_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#compare", label: "Compare" },
  { href: "/#affiliate", label: "Affiliate Program" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const TRIAL_DAYS = 14;

/** Verified September 2026 — see the pricing section footnotes. */
export const PLANS = [
  {
    name: "Starter",
    monthly: 97,
    annualPerMonth: 80,
    tagline: "For solo marketers & single-location businesses",
    popular: false,
    features: [
      "Full CRM, pipelines & contact management",
      "Funnels, websites & landing pages",
      "Email & SMS automation (usage-billed)",
      "Appointment booking calendar",
      "Reputation & review management",
      "Social media planner",
      "Up to 3 sub-accounts",
    ],
  },
  {
    name: "Unlimited",
    monthly: 297,
    annualPerMonth: 247,
    tagline: "The agency default — unlimited client accounts",
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "Unlimited sub-accounts (client accounts)",
      "White-label desktop app & custom domains",
      "Full API access & advanced reporting",
      "Branded client portal",
      "Bundled AI tools",
      "Priority support",
    ],
  },
  {
    name: "SaaS Pro",
    monthly: 497,
    annualPerMonth: 414,
    tagline: "Resell GoHighLevel as your own branded software",
    popular: false,
    features: [
      "Everything in Unlimited, plus:",
      "SaaS Mode — package & resell GHL",
      "Rebill SMS, email & AI usage at your markup",
      "Stripe-powered subscription billing",
      "White-label mobile app (add-on)",
      "Priority support SLA",
      "Unlimited everything",
    ],
  },
] as const;
