import Link from "next/link";
import { SITE_NAME, NAV_LINKS } from "@/lib/site";
import { CtaLink } from "@/components/Cta";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold text-slate-900"
          aria-label={`${SITE_NAME} home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-base font-bold text-white shadow-sm">
            G
          </span>
          <span className="text-lg tracking-tight">{SITE_NAME}</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <CtaLink size="sm" className="whitespace-nowrap">
          Start Free Trial
        </CtaLink>
      </div>
    </header>
  );
}
