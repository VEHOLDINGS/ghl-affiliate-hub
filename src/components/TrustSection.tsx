import Link from "next/link";

const PILLARS = [
  {
    title: "Pricing verified & dated",
    description:
      "Every price on this site was checked against official pricing pages in September 2026 — and each claim carries its date. When rates change, we update the guide instead of letting stale numbers linger.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M12 3v18M17 7H10.5a2.5 2.5 0 000 5h3a2.5 2.5 0 010 5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Cross-checked sources",
    description:
      "Factual claims are backed by multiple independent sources — official vendor documentation, pricing pages, and current reviews. Where sources disagree (like cookie durations), we say so rather than picking the flattering number.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M9 12l2 2 4-4M12 21a9 9 0 110-18 9 9 0 010 18z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Comparisons, not hit pieces",
    description:
      "Our feature tables show what each platform includes — including the places competitors beat GoHighLevel — with dated footnotes for everything. Limits, add-ons, and asterisks are marked honestly for every vendor.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Independence, disclosed",
    description:
      "Affiliate commissions fund this site but never buy a recommendation. Every commercial link is marked rel=\"sponsored\", the full disclosure sits in the footer, and our ranking logic is fit first, price second.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M12 2L4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const FACTS = [
  { value: "Sept 2026", label: "Last full pricing review" },
  { value: "3+", label: "Sources per factual claim" },
  { value: "7", label: "In-depth guides published" },
  { value: "0", label: "Paid rankings, ever" },
];

/**
 * Replaced the previous placeholder testimonials with verifiable
 * research-methodology content (no fabricated quotes).
 */
export function TrustSection() {
  return (
    <section id="trust" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Research standards
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How we keep this site honest
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            This is an independent affiliate resource — so trust is the product.
            Here&apos;s exactly how the guides are researched and kept current.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                {pillar.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {FACTS.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-6 text-center"
            >
              <dd className="text-2xl font-bold text-brand-700">{fact.value}</dd>
              <dt className="mt-1.5 text-xs leading-relaxed text-slate-500">
                {fact.label}
              </dt>
            </div>
          ))}
        </dl>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-500">
          See something out of date or wrong? Pricing and features change fast —
          we&apos;d rather fix the page than keep a flattering number. Read our{" "}
          <Link href="/blog" className="font-medium text-brand-700 hover:text-brand-800">
            latest guides
          </Link>{" "}
          for the full research behind every claim.
        </p>
      </div>
    </section>
  );
}
