import Link from "next/link";
import { SITE_NAME, NAV_LINKS, AFFILIATE_URL, AFFILIATE_PROGRAM_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5 font-semibold text-slate-900">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-base font-bold text-white">
                G
              </span>
              {SITE_NAME}
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              Your independent guide to GoHighLevel pricing, features, and
              alternatives — built for agencies and marketers evaluating the
              all-in-one platform.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 transition hover:text-brand-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Get started
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="font-medium text-brand-700 hover:text-brand-800"
                >
                  Start GoHighLevel Free Trial →
                </a>
              </li>
              <li>
                <a
                  href={AFFILIATE_PROGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-slate-600 transition hover:text-brand-700"
                >
                  Join the Affiliate Program
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-slate-600 transition hover:text-brand-700">
                  Read the Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-3 border-t border-slate-200 pt-8 text-xs leading-relaxed text-slate-500">
          <p>
            <strong className="font-semibold text-slate-600">Affiliate disclosure:</strong>{" "}
            This site is an independent affiliate resource. We may earn a
            commission if you sign up for GoHighLevel through our links, at no
            extra cost to you. This keeps our guides free. Prices and features
            were verified in September 2026; always confirm current details on
            the official GoHighLevel website.
          </p>
          <p>
            GoHighLevel and HighLevel are trademarks of their respective owner.
            This site is not affiliated with or endorsed by GoHighLevel Inc.
          </p>
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
