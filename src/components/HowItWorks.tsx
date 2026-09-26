import { CtaLink } from "@/components/Cta";
import { TRIAL_DAYS } from "@/lib/site";

const STEPS = [
  {
    number: "01",
    title: `Start your ${TRIAL_DAYS}-day free trial`,
    description:
      "Pick any plan — Starter, Unlimited, or SaaS Pro — and explore the full platform risk-free. No contracts, and you can cancel anytime.",
  },
  {
    number: "02",
    title: "Launch your agency stack",
    description:
      "Import your contacts, build your first funnel, and switch on automated follow-ups, booking reminders, and review requests — usually within a weekend.",
  },
  {
    number: "03",
    title: "Scale with recurring revenue",
    description:
      "Onboard client sub-accounts, or flip on SaaS Mode to resell GoHighLevel under your own brand and bill clients automatically every month.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-slate-900 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Live in days, not months
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            From free trial to fully operational agency workflow — here&apos;s
            the path most of our readers take.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 lg:grid-cols-3">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <span className="text-5xl font-extrabold text-white/15">{step.number}</span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <CtaLink variant="light" size="lg">
            Get Started — It&apos;s Free for {TRIAL_DAYS} Days
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
