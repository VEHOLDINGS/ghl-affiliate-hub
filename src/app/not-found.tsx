import Link from "next/link";
import { CtaLink } from "@/components/Cta";

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <p className="text-7xl font-extrabold text-brand-100">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
          Page not found
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
          >
            Back to home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-700"
          >
            Browse the blog
          </Link>
          <CtaLink>Start Free Trial</CtaLink>
        </div>
      </div>
    </section>
  );
}
