import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostMeta, getPostBySlug } from "@/lib/posts";
import { CtaLink } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, AFFILIATE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostMeta().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.tags,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      siteName: SITE_NAME,
      publishedTime: `${post.date}T00:00:00.000Z`,
      modifiedTime: `${post.updated ?? post.date}T00:00:00.000Z`,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const published = new Date(`${post.date}T00:00:00Z`);
  const modified = new Date(`${post.updated ?? post.date}T00:00:00Z`);

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: published.toISOString(),
    dateModified: modified.toISOString(),
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.tags[0] ?? "GoHighLevel",
    keywords: post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const related = getAllPostMeta()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <article>
        <header className="bg-slate-50 py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-brand-700">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="hover:text-brand-700">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="line-clamp-1 font-medium text-slate-700">{post.title}</li>
              </ol>
            </nav>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              {post.title}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {post.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
              <span className="font-medium text-slate-700">{post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>
                {published.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                })}
              </time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
              {post.updated && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>
                    Updated{" "}
                    {modified.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      timeZone: "UTC",
                    })}
                  </span>
                </>
              )}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <div className="article-body">{/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </div>

          <aside className="mt-12 rounded-3xl border border-brand-200 bg-brand-50/60 p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Ready to see GoHighLevel in action?
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
              Start a 14-day free trial — full access to every feature, cancel
              anytime. Plans from $97/month after the trial.
            </p>
            <div className="mt-5">
              <CtaLink>Start My Free Trial</CtaLink>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Affiliate link — we may earn a commission at no extra cost to you.
            </p>
          </aside>

          {related.length > 0 && (
            <section className="mt-16" aria-label="Related articles">
              <h2 className="text-2xl font-bold text-slate-900">Keep reading</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group rounded-2xl border border-slate-200 p-6 transition hover:border-brand-300 hover:shadow-md"
                  >
                    <h3 className="font-semibold text-slate-900 transition group-hover:text-brand-700">
                      {p.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
                      {p.description}
                    </p>
                    <span className="mt-3 inline-block text-sm font-medium text-brand-700">
                      Read article →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <JsonLd data={postSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: post.title,
          description: post.description,
          url,
          primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
        }}
      />
    </>
  );
}
