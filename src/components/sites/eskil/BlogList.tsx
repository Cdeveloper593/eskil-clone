"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { POSTS, type Post } from "@/lib/eskil/posts";
import { Reveal } from "@/components/sites/eskil/Reveal";
import { formatPostDate, stripExcerpt } from "@/lib/eskil/blog-utils";

export { formatPostDate, stripExcerpt };

/* ------------------------------------------------------------------ */
/* Blog card                                                           */
/* ------------------------------------------------------------------ */

export function BlogCard({
  post,
  masonry = false,
}: {
  post: Post;
  masonry?: boolean;
}) {
  return (
    <article
      className={
        masonry
          ? "mb-8 break-inside-avoid"
          : "md:flex md:items-start md:gap-10"
      }
    >
      {post.featured ? (
        <Link
          href={`/${post.slug}`}
          className={`group block overflow-hidden ${masonry ? "" : "md:w-5/12 md:shrink-0"}`}
          aria-label={post.title}
        >
          <Image
            src={post.featured}
            alt={post.title}
            width={1200}
            height={800}
            className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </Link>
      ) : null}
      <div className={masonry ? "pt-5" : "pt-6 md:pt-1"}>
        <p className="eskil-eyebrow">{formatPostDate(post.date)}</p>
        <h2 className="eskil-display mt-3 text-2xl leading-snug text-black md:text-[28px]">
          <Link href={`/${post.slug}`} className="transition-opacity hover:opacity-70">
            {post.title}
          </Link>
        </h2>
        <p className="mt-4 line-clamp-3 text-[15px] leading-[1.85] text-[#555]">
          {stripExcerpt(post.excerpt)}
        </p>
        <Link
          href={`/${post.slug}`}
          className="eskil-link-underline mt-5 inline-block text-[12px] font-medium tracking-[0.22em] text-black uppercase"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Blog list (list or masonry)                                         */
/* ------------------------------------------------------------------ */

export function BlogList({
  posts,
  variant = "list",
}: {
  posts: Post[];
  variant?: "list" | "masonry";
}) {
  if (posts.length === 0) {
    return (
      <p className="py-10 text-center text-[15px] text-[#555]">
        No posts found. Try a different search.
      </p>
    );
  }
  if (variant === "masonry") {
    return (
      <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 3) * 80}>
            <BlogCard post={post} masonry />
          </Reveal>
        ))}
      </div>
    );
  }
  return (
    <div className="space-y-14 md:space-y-16">
      {posts.map((post, i) => (
        <Reveal key={post.slug} delay={(i % 2) * 80}>
          <BlogCard post={post} />
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sidebar: search, categories, recent posts, tags                     */
/* ------------------------------------------------------------------ */

const SIDEBAR_CATEGORIES = [
  "Design",
  "Furniture",
  "Interior",
  "Home Office",
  "Natural Shades",
  "Style",
];

const SIDEBAR_TAGS = [
  "Chair",
  "Home",
  "Office",
  "Natural",
  "Style",
  "Design",
  "Furniture",
  "Decor",
];

export function BlogSidebar({
  basePath,
  query = "",
}: {
  basePath: string;
  query?: string;
}) {
  const recent = POSTS.slice(0, 5);
  return (
    <aside className="space-y-10">
      <Reveal>
        <div>
          <h3 className="eskil-display text-xl text-black">Search</h3>
          <form method="get" action={basePath} className="mt-4 flex">
            <label htmlFor="blog-search" className="sr-only">
              Search posts
            </label>
            <input
              id="blog-search"
              name="q"
              type="search"
              defaultValue={query}
              placeholder="Search posts…"
              className="h-[48px] min-w-0 flex-1 border border-[#e8e8e8] px-4 text-[15px] text-black outline-none placeholder:text-[#999] focus:border-black"
            />
            <button type="submit" className="eskil-btn h-[48px] px-5" aria-label="Search">
              →
            </button>
          </form>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h3 className="eskil-display text-xl text-black">Categories</h3>
          <ul className="mt-4 space-y-2.5">
            {SIDEBAR_CATEGORIES.map((cat) => (
              <li key={cat}>
                <Link
                  href={`${basePath}?q=${encodeURIComponent(cat)}`}
                  className="text-[14px] text-[#555] transition-colors hover:text-black"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h3 className="eskil-display text-xl text-black">Recent Posts</h3>
          <ul className="mt-4 space-y-5">
            {recent.map((post) => (
              <li key={post.slug} className="flex gap-4">
                {post.featured ? (
                  <Link href={`/${post.slug}`} className="shrink-0" aria-label={post.title}>
                    <Image
                      src={post.featured}
                      alt=""
                      width={120}
                      height={90}
                      className="h-[72px] w-[96px] object-cover"
                    />
                  </Link>
                ) : null}
                <div>
                  <Link
                    href={`/${post.slug}`}
                    className="eskil-display text-[15px] leading-snug text-black transition-opacity hover:opacity-70"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-1 text-[12px] tracking-[0.14em] text-[#8a8a8a] uppercase">
                    {formatPostDate(post.date)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h3 className="eskil-display text-xl text-black">Tags</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {SIDEBAR_TAGS.map((tag) => (
              <Link
                key={tag}
                href={`${basePath}?q=${encodeURIComponent(tag)}`}
                className="border border-[#e8e8e8] px-3 py-1.5 text-[12px] tracking-[0.12em] text-[#555] uppercase transition-colors hover:border-black hover:text-black"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/* Comment form (local demo)                                           */
/* ------------------------------------------------------------------ */

export function CommentForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  if (sent) {
    return (
      <div className="eskil-fade-in border border-black bg-[#f7f6f4] px-6 py-8 text-center">
        <p className="eskil-display text-2xl text-black">Thank you for your comment.</p>
        <p className="mt-3 text-[15px] leading-relaxed text-[#555]">
          This is a local demo — your comment was not sent anywhere or stored.
        </p>
      </div>
    );
  }
  const inputCls =
    "w-full border border-[#e8e8e8] bg-white px-4 py-3 text-[15px] text-black outline-none placeholder:text-[#999] focus:border-black transition-colors";
  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input required placeholder="Your name *" className={inputCls} aria-label="Your name" />
      <input
        required
        type="email"
        placeholder="Your email *"
        className={inputCls}
        aria-label="Your email"
      />
      <textarea
        required
        rows={5}
        placeholder="Your comment *"
        className={`${inputCls} resize-y sm:col-span-2`}
        aria-label="Your comment"
      />
      <p className="text-[13px] leading-relaxed text-[#8a8a8a] sm:col-span-2">
        Comments are a local demo — nothing is sent or stored.
      </p>
      <div className="sm:col-span-2">
        <button type="submit" className="eskil-btn">
          Post comment
        </button>
      </div>
    </form>
  );
}
