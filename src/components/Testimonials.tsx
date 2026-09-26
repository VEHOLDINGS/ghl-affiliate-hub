const QUOTES = [
  {
    quote:
      "We cancelled four subscriptions the month we switched. The all-in-one price is one bill, and our team stopped context-switching between tools.",
    name: "Sarah K.",
    role: "Marketing agency owner",
  },
  {
    quote:
      "SaaS Mode changed our business model. Clients pay us monthly for 'our software' — it's GoHighLevel under our brand, and the margin is the business.",
    name: "Marcus T.",
    role: "Agency founder",
  },
  {
    quote:
      "The automations alone paid for the plan. Missed-call text-back and review requests run for every client without anyone touching them.",
    name: "Priya N.",
    role: "Freelance consultant",
  },
];

/**
 * NOTE: these are illustrative placeholder quotes for the template.
 * Replace with real, verifiable testimonials before a commercial launch.
 */
export function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Why teams switch
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for agencies that bill for results
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {QUOTES.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <svg className="h-8 w-8 text-brand-200" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-4">
                <span className="block font-semibold text-slate-900">{item.name}</span>
                <span className="block text-sm text-slate-500">{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
