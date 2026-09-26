import { CtaLink } from "@/components/Cta";
import { PLANS, TRIAL_DAYS } from "@/lib/site";

export function PricingTable() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Pricing breakdown
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            GoHighLevel pricing, explained plainly
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Three plans, no per-seat surprises. Every plan includes a{" "}
            <strong className="font-semibold text-slate-800">{TRIAL_DAYS}-day free trial</strong>{" "}
            and annual billing saves roughly two months per year.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border bg-white p-8 shadow-sm transition ${
                plan.popular
                  ? "border-brand-500 shadow-brand-100 shadow-xl ring-1 ring-brand-500"
                  : "border-slate-200 hover:border-brand-200 hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-600 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow">
                  Most popular · Agency pick
                </span>
              )}

              <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              <p className="mt-1.5 min-h-[40px] text-sm leading-relaxed text-slate-500">
                {plan.tagline}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-5xl font-extrabold tracking-tight text-slate-900">
                  ${plan.monthly}
                </span>
                <span className="text-base font-medium text-slate-500">/month</span>
              </div>
              <p className="mt-1.5 text-sm text-slate-500">
                or ~${plan.annualPerMonth}/mo billed annually (${plan.annualPerMonth * 12}/yr)
              </p>

              <ul className="mt-7 space-y-3 text-[15px]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className={`mt-0.5 h-5 w-5 flex-shrink-0 ${plan.popular ? "text-brand-600" : "text-emerald-500"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CtaLink
                  variant={plan.popular ? "primary" : "secondary"}
                  className="w-full"
                >
                  Start {TRIAL_DAYS}-Day Free Trial
                </CtaLink>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-2 rounded-2xl border border-slate-200 bg-white px-6 py-5 text-sm leading-relaxed text-slate-500">
          <p>
            <strong className="font-semibold text-slate-700">Good to know:</strong>{" "}
            Email, SMS, phone, and AI usage are billed separately on every plan
            (pay-as-you-go at carrier rates) — most agencies spend an extra
            $20–$150/month depending on volume.
          </p>
          <p>
            Annual billing = roughly 2 months free (≈17% off). Prices verified
            September 2026 against official GoHighLevel pricing; confirm current
            rates on the official site before purchase.
          </p>
        </div>
      </div>
    </section>
  );
}
