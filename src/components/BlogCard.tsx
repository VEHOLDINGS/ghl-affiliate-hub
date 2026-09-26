import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function BlogCard({ post }: { post: PostMeta }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        {post.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-brand-50 px-2.5 py-1 font-medium text-brand-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mt-4 text-xl font-semibold leading-snug text-slate-900">
        <Link href={`/blog/${post.slug}`} className="transition hover:text-brand-700">
          {post.title}
        </Link>
      </h3>

      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">
        {post.description}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500">
        <time dateTime={post.date}>
          {new Date(`${post.date}T00:00:00Z`).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            timeZone: "UTC",
          })}
        </time>
        <Link
          href={`/blog/${post.slug}`}
          className="font-medium text-brand-700 hover:text-brand-800"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}
