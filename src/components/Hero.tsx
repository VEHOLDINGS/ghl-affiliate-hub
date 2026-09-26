import { CtaLink } from "@/components/Cta";
import { TRIAL_DAYS, PLANS } from "@/lib/site";

const STATS = [
  { value: `$${PLANS[0].monthly}/mo`, label: "Transparent pricing from day one" },
  { value: "40%", label: "Recurring affiliate commissions for life" },
  { value: `${TRIAL_DAYS} days`, label: "Free trial — no contracts, cancel anytime" },
  { value: "6+", label: "Tools replaced by one platform" },
];

const CHECKS = [
  "14-day free trial",
  "No contracts — cancel anytime",
  "All-in-one: CRM, funnels, SMS, email",
  "White-label SaaS mode",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 500px at 80% -10%, rgba(51,128,252,0.35), transparent 60%), radial-gradient(700px 420px at 10% 110%, rgba(21,73,222,0.35), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-blue-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Independent GoHighLevel resource · Updated September 2026
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            One Platform to Run Your Entire{" "}
            <span className="bg-gradient-to-r from-blue-300 via-brand-300 to-cyan-200 bg-clip-text text-transparent">
              Marketing Agency
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            GoHighLevel replaces your CRM, funnel builder, email and SMS tools,
            scheduling software, and reputation management with a single
            subscription — starting at{" "}
            <strong className="font-semibold text-white">${PLANS[0].monthly}/month</strong>.
            Compare every plan below and start a {TRIAL_DAYS}-day free trial.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaLink size="lg">
              Start Your {TRIAL_DAYS}-Day Free Trial
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CtaLink>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
            >
              See Pricing & Compare Plans
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
            {CHECKS.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center backdrop-blur"
            >
              <dt className="order-2 mt-2 text-xs leading-relaxed text-slate-400">{stat.label}</dt>
              <dd className="order-1 text-3xl font-bold text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
