import { CtaLink } from "@/components/Cta";
import { TRIAL_DAYS, PLANS } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-cyan-600 py-20 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 300px at 85% 20%, rgba(255,255,255,0.18), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Ready to consolidate your stack?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-blue-50">
          Start the {TRIAL_DAYS}-day free trial today — full access to every
          feature, from ${PLANS[0].monthly}/month after that, cancel anytime.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaLink variant="light" size="lg">
            Start My Free Trial
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </CtaLink>
          <a
            href="#compare"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Compare platforms first
          </a>
        </div>
      </div>
    </section>
  );
}
