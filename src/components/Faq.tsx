import { CtaLink } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, TRIAL_DAYS, AFFILIATE_URL } from "@/lib/site";

const FAQS = [
  {
    q: "How much does GoHighLevel cost in 2026?",
    a: "GoHighLevel has three plans: Starter at $97/month, Unlimited at $297/month, and SaaS Pro at $497/month. Annual billing saves roughly 17% (about two months free). Email, SMS, phone, and AI usage are billed separately at carrier rates.",
  },
  {
    q: "Is there a free trial?",
    a: `Yes — every plan includes a ${TRIAL_DAYS}-day free trial so you can test the full platform before paying. There are no long-term contracts, and you can cancel anytime from your account settings.`,
  },
  {
    q: "What's the difference between Starter, Unlimited, and SaaS Pro?",
    a: "Starter ($97/mo) covers a solo business with the full core toolkit (up to 3 sub-accounts). Unlimited ($297/mo) removes all client-account limits and adds white-label branding plus full API access — it's the agency default. SaaS Pro ($497/mo) adds SaaS Mode, letting you resell the platform as your own branded software with automatic billing.",
  },
  {
    q: "Are SMS and email really extra?",
    a: "Yes — the subscription covers the software; usage-based channels (email sends, SMS segments, phone minutes, AI) are billed at pass-through carrier rates. Most agencies budget an extra $20–$150/month depending on client volume. You can set re-billing markups on SaaS Pro to turn usage into profit.",
  },
  {
    q: "Can I white-label GoHighLevel for my clients?",
    a: "Yes. Unlimited includes a white-label desktop app and custom domains. SaaS Pro goes further: clients log into software branded entirely as yours, and you can package and sell it with your own pricing tiers.",
  },
  {
    q: "How does the GoHighLevel affiliate program work?",
    a: "Affiliates earn 40% recurring commission on every subscription they refer — for as long as the customer stays — plus 5% second-tier commission on affiliates they recruit. It's free to join with no earnings cap. Full breakdown in our affiliate program guide.",
  },
  {
    q: "Is GoHighLevel better than ClickFunnels?",
    a: "They solve different problems. ClickFunnels is a dedicated funnel builder; GoHighLevel is an all-in-one agency platform that includes funnels plus CRM, two-way SMS and calling, scheduling, reputation management, and white-label SaaS. If you only need funnels, either works — if you run client marketing, GoHighLevel consolidates far more. See our detailed comparison.",
  },
];

export function Faq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything readers ask before signing up
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {FAQS.map((faq) => (
            <details key={faq.q} className="faq-item group rounded-2xl border border-slate-200 bg-white px-6 py-5 transition hover:border-brand-200">
              <summary className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                  {faq.q}
                </h3>
                <svg
                  className="faq-chevron mt-1 h-5 w-5 flex-shrink-0 text-slate-400 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-slate-900 p-8 text-center text-white">
          <h3 className="text-xl font-semibold">Still deciding?</h3>
          <p className="mx-auto mt-2 max-w-xl text-slate-300">
            The {TRIAL_DAYS}-day trial is the fastest answer — explore every
            feature with zero risk and cancel anytime.
          </p>
          <div className="mt-6">
            <CtaLink variant="light">Start Your Free Trial</CtaLink>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Questions about our guides? This is an independent affiliate site —
            we don&apos;t operate the GoHighLevel platform itself.
          </p>
        </div>
      </div>

      <JsonLd data={faqSchema} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "GoHighLevel",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "All-in-one marketing, CRM, and white-label SaaS platform for agencies and local businesses.",
          offers: [
            {
              "@type": "Offer",
              name: "Starter",
              price: "97",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Unlimited",
              price: "297",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "SaaS Pro",
              price: "497",
              priceCurrency: "USD",
            },
          ],
          url: AFFILIATE_URL,
          subjectOf: { "@type": "WebPage", url: `${SITE_URL}/#pricing` },
        }}
      />
    </section>
  );
}
