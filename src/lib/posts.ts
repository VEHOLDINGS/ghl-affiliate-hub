import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const postsDir = path.join(process.cwd(), "src", "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  updated?: string;
  tags: string[];
  author: string;
};

export type Post = PostMeta & {
  contentHtml: string;
  readingTime: string;
};

function readingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 225))} min read`;
}

function parseMeta(slug: string, raw: string): PostMeta {
  const { data } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? "2026-01-01"),
    updated: data.updated ? String(data.updated) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    author: String(data.author ?? "GHL Affiliate Hub Team"),
  };
}

/** All posts, newest first. */
export function getAllPostMeta(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));
  const metas = files.map((file) =>
    parseMeta(file.replace(/\.md$/, ""), fs.readFileSync(path.join(postsDir, file), "utf8"))
  );
  return metas.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Single post with rendered HTML (GFM tables supported). */
export function getPostBySlug(slug: string): Post | null {
  const file = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { content } = matter(raw);
  const contentHtml = remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .processSync(content)
    .toString();
  return {
    ...parseMeta(slug, raw),
    contentHtml,
    readingTime: readingTime(content),
  };
}
