import type { Metadata } from "next";
import { getAllPostMeta } from "@/lib/posts";
import { BlogCard } from "@/components/BlogCard";
import { CtaLink } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "GoHighLevel Guides & Comparisons",
  description:
    "In-depth GoHighLevel pricing breakdowns, plan comparisons, and affiliate strategy guides. Honest, independently researched articles for agencies and marketers.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `${SITE_NAME} Blog — GoHighLevel Guides & Comparisons`,
    description:
      "In-depth GoHighLevel pricing breakdowns, plan comparisons, and affiliate strategy guides.",
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPostMeta();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
    description:
      "GoHighLevel pricing breakdowns, plan comparisons, and affiliate strategy guides.",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex items-center gap-2">
              <li>
                <a href="/" className="hover:text-brand-700">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-slate-700">Blog</li>
            </ol>
          </nav>

          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            The GoHighLevel knowledge hub
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Research-backed guides on GoHighLevel pricing, platform comparisons,
            and the affiliate program — written for agency owners who want the
            full picture before they commit.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-slate-900 p-10 text-center text-white">
            <h2 className="text-2xl font-bold">Want the full picture on pricing?</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-300">
              Start a 14-day free trial and explore every plan feature
              first-hand — then pick the tier that fits your agency.
            </p>
            <div className="mt-6">
              <CtaLink variant="light" size="lg">
                Start Free Trial
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={blogSchema} />
    </>
  );
}
