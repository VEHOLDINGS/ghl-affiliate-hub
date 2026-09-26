import { CtaLink } from "@/components/Cta";

type Cell = "yes" | "partial" | "no";

const COLUMNS = ["GoHighLevel", "ClickFunnels", "Kajabi", "Kartra"] as const;

const ROWS: { feature: string; values: [Cell, Cell, Cell, Cell]; note?: string }[] = [
  {
    feature: "Sales funnels & landing pages",
    values: ["yes", "yes", "yes", "yes"],
  },
  {
    feature: "Full CRM with pipelines",
    values: ["yes", "partial", "partial", "yes"],
  },
  {
    feature: "Email marketing & automation",
    values: ["yes", "yes", "yes", "yes"],
  },
  {
    feature: "2-way SMS, calling & voicemail",
    values: ["yes", "partial", "no", "partial"],
    note: "Native SMS/voice is core to GHL; others rely on add-ons or integrations.",
  },
  {
    feature: "Appointment scheduling",
    values: ["yes", "no", "no", "partial"],
  },
  {
    feature: "Membership sites & courses",
    values: ["yes", "yes", "yes", "yes"],
  },
  {
    feature: "Reputation / review management",
    values: ["yes", "no", "no", "no"],
  },
  {
    feature: "Multi-client agency management",
    values: ["yes", "partial", "partial", "partial"],
  },
  {
    feature: "White-label + resell as your own SaaS",
    values: ["yes", "no", "no", "no"],
    note: "Only GoHighLevel's SaaS Pro plan lets you sell the platform under your own brand.",
  },
  {
    feature: "Free trial",
    values: ["yes", "yes", "yes", "yes"],
  },
];

const ICONS: Record<Cell, { symbol: string; className: string; label: string }> = {
  yes: {
    symbol: "✓",
    className: "text-emerald-600 bg-emerald-50",
    label: "Included",
  },
  partial: {
    symbol: "◐",
    className: "text-amber-600 bg-amber-50",
    label: "Limited or add-on",
  },
  no: {
    symbol: "✕",
    className: "text-rose-500 bg-rose-50",
    label: "Not included",
  },
};

const PRICES = ["$97/mo", "$97/mo*", "$179/mo*", "$59/mo*"];

export function ComparisonTable() {
  return (
    <section id="compare" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Feature comparison
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            GoHighLevel vs the alternatives
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Every platform below builds funnels — only one replaces your CRM,
            phone system, scheduler, review tool, and white-label SaaS in a
            single subscription.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-50">
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-slate-600">
                    Feature
                  </th>
                  {COLUMNS.map((col, i) => (
                    <th
                      key={col}
                      scope="col"
                      className={`px-5 py-4 text-center text-sm font-semibold ${
                        i === 0
                          ? "bg-brand-600 text-white"
                          : "text-slate-700"
                      }`}
                    >
                      {col}
                      <span className="mt-1 block text-xs font-normal opacity-80">
                        {PRICES[i]}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, rowIdx) => (
                  <tr key={row.feature} className={rowIdx % 2 === 1 ? "bg-slate-50/60" : ""}>
                    <th
                      scope="row"
                      className="px-5 py-4 text-sm font-medium text-slate-800"
                    >
                      {row.feature}
                      {row.note && (
                        <span className="mt-1 block text-xs font-normal leading-relaxed text-slate-500">
                          {row.note}
                        </span>
                      )}
                    </th>
                    {row.values.map((value, colIdx) => {
                      const icon = ICONS[value];
                      return (
                        <td key={colIdx} className="px-5 py-4 text-center">
                          <span
                            title={icon.label}
                            className={`inline-grid h-8 w-8 place-items-center rounded-full text-sm font-bold ${icon.className}`}
                          >
                            {icon.symbol}
                          </span>
                          <span className="sr-only">{icon.label}</span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
                <tr className="border-t-2 border-slate-200 bg-slate-50">
                  <th scope="row" className="px-5 py-4 text-sm font-semibold text-slate-800">
                    Starting price (monthly)
                  </th>
                  {PRICES.map((price, i) => (
                    <td
                      key={price + i}
                      className={`px-5 py-4 text-center text-sm font-semibold ${
                        i === 0 ? "bg-brand-50 text-brand-800" : "text-slate-700"
                      }`}
                    >
                      {price}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
            {Object.values(ICONS).map((icon) => (
              <span key={icon.label} className="inline-flex items-center gap-2">
                <span className={`inline-grid h-6 w-6 place-items-center rounded-full text-xs font-bold ${icon.className}`}>
                  {icon.symbol}
                </span>
                {icon.label}
              </span>
            ))}
          </div>
          <p className="max-w-3xl text-xs leading-relaxed text-slate-500">
            * Competitor entry pricing: ClickFunnels from ~$97/mo, Kajabi Basic
            $179/mo, Kartra Essentials $59/mo (annual billing lowers each).
            Feature availability summarized September 2026 — vendors change
            plans often, so confirm on their sites. Comparison is for general
            guidance only.
          </p>
          <CtaLink size="lg">
            Try GoHighLevel Free for 14 Days
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
