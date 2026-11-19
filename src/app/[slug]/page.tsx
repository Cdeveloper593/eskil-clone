import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { POSTS, postBySlug } from "@/lib/eskil/posts";
import { BlogCard, CommentForm } from "@/components/sites/eskil/BlogList";
import { formatPostDate } from "@/lib/eskil/blog-utils";
import { Reveal } from "@/components/sites/eskil/Reveal";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  return {
    title: post ? `${post.title} | Eskil` : "Post | Eskil",
    description: post
      ? post.excerpt.replace(/<[^>]+>/g, "").slice(0, 160)
      : undefined,
  };
}

export default async function SinglePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();
  const idx = POSTS.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? POSTS[idx - 1] : null;
  const next = idx < POSTS.length - 1 ? POSTS[idx + 1] : null;
  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="bg-[#f7f6f4] px-4 py-16 text-center md:py-24">
        <Reveal>
          <p className="eskil-eyebrow">{formatPostDate(post.date)}</p>
          <h1 className="eskil-display mx-auto mt-4 max-w-4xl text-4xl leading-tight text-black md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-[13px] tracking-[0.18em] text-[#8a8a8a] uppercase">
            <Link href="/" className="transition-colors hover:text-black">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog-list-no-sidebar" className="transition-colors hover:text-black">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black">Post</span>
          </p>
        </Reveal>
      </section>

      <main className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        {post.featured ? (
          <Reveal>
            <Image
              src={post.featured}
              alt={post.title}
              width={1200}
              height={800}
              className="aspect-[3/2] w-full object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          </Reveal>
        ) : null}

        <Reveal>
          <div
            className="eskil-content mt-10"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Reveal>

        <nav
          aria-label="Post navigation"
          className="mt-16 grid gap-4 border-y border-[#e8e8e8] py-6 sm:grid-cols-2"
        >
          <div>
            {prev ? (
              <Link href={`/${prev.slug}`} className="group block">
                <span className="eskil-eyebrow">← Previous post</span>
                <span className="eskil-display mt-2 block text-xl text-black transition-opacity group-hover:opacity-70">
                  {prev.title}
                </span>
              </Link>
            ) : null}
          </div>
          <div className="sm:text-right">
            {next ? (
              <Link href={`/${next.slug}`} className="group block">
                <span className="eskil-eyebrow">Next post →</span>
                <span className="eskil-display mt-2 block text-xl text-black transition-opacity group-hover:opacity-70">
                  {next.title}
                </span>
              </Link>
            ) : null}
          </div>
        </nav>

        <section className="mt-16">
          <Reveal>
            <h2 className="eskil-display text-3xl text-black">Related posts</h2>
          </Reveal>
          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rel, i) => (
              <Reveal key={rel.slug} delay={i * 80}>
                <BlogCard post={rel} masonry />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <Reveal>
            <h2 className="eskil-display text-3xl text-black">Leave a comment</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#555]">
              Your email address will not be published.
            </p>
          </Reveal>
          <div className="mt-8">
            <CommentForm />
          </div>
        </section>
      </main>
    </>
  );
}
