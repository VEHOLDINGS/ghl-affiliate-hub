import { CtaLink } from "@/components/Cta";
import { AFFILIATE_PROGRAM_URL, PLANS } from "@/lib/site";

const COMMISSIONS = PLANS.map((plan) => ({
  plan: plan.name,
  price: plan.monthly,
  monthly: (plan.monthly * 0.4).toFixed(2),
  yearly: (plan.monthly * 0.4 * 12).toFixed(2),
}));

const PERKS = [
  {
    title: "40% recurring — for life",
    description:
      "Earn 40% of every subscription you refer, every month the customer stays. No 12-month cap like most SaaS programs.",
  },
  {
    title: "5% second-tier income",
    description:
      "Recruit other promoters and earn 5% recurring on everything they refer — a second passive income stream.",
  },
  {
    title: "Generous attribution window",
    description:
      "GoHighLevel's cookie window is far longer than the industry-standard 30 days, so slower-deciding referrals still credit to you.",
  },
  {
    title: "Free to join, no cap",
    description:
      "No approval process, no audience minimums, and no ceiling on earnings — one SaaS Pro referral pays $198.80 every month.",
  },
];

export function AffiliateSection() {
  return (
    <section id="affiliate" className="scroll-mt-20 bg-gradient-to-b from-brand-50/70 to-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              The affiliate opportunity
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Turn GoHighLevel into recurring income
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We built this hub because the GoHighLevel affiliate program is one
              of the strongest in SaaS: 40% recurring commissions that keep
              paying as long as your referrals stay subscribed.
            </p>

            <dl className="mt-8 space-y-5">
              {PERKS.map((perk) => (
                <div key={perk.title} className="flex gap-4">
                  <div className="mt-1 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 011.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">{perk.title}</dt>
                    <dd className="mt-1 text-[15px] leading-relaxed text-slate-600">
                      {perk.description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={AFFILIATE_PROGRAM_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Join the Affiliate Program
              </a>
              <CtaLink variant="secondary">Or start a free trial</CtaLink>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <h3 className="text-lg font-semibold text-slate-900">
              What 40% recurring actually pays
            </h3>
            <table className="mt-5 w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                  <th scope="col" className="pb-3 font-semibold">Plan referred</th>
                  <th scope="col" className="pb-3 text-right font-semibold">Monthly</th>
                  <th scope="col" className="pb-3 text-right font-semibold">Per year</th>
                </tr>
              </thead>
              <tbody>
                {COMMISSIONS.map((row) => (
                  <tr key={row.plan} className="border-b border-slate-100">
                    <td className="py-3 font-medium text-slate-800">
                      {row.plan}
                      <span className="block text-xs font-normal text-slate-500">
                        ${row.price}/mo subscription
                      </span>
                    </td>
                    <td className="py-3 text-right font-semibold text-slate-900">
                      ${row.monthly}
                    </td>
                    <td className="py-3 text-right font-semibold text-brand-700">
                      ${row.yearly}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 rounded-xl bg-brand-50 px-4 py-3 text-sm leading-relaxed text-brand-900">
              <strong>Do the math:</strong> just 25 active Unlimited referrals =
              <strong> $2,970/month</strong> in recurring commission — every
              month they stay customers.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Commission terms (40% recurring + 5% second tier) summarized
              September 2026. Cookie duration and payout terms can change —
              review the current affiliate agreement before promoting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
