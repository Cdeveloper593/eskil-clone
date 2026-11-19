import { POSTS } from "@/lib/eskil/posts";
import { PageHero } from "@/components/sites/eskil/InfoPage";
import { BlogList } from "@/components/sites/eskil/BlogList";

/* Shared listing for the WordPress blog archives (category, tag, post
   format, author and month archives), styled after the clone's
   blog-list-no-sidebar page. */
export function BlogArchivePage({
  title,
  eyebrow,
  slugs,
}: {
  title: string;
  eyebrow: string;
  slugs: string[];
}) {
  const wanted = new Set(slugs);
  const posts = POSTS.filter((p) => wanted.has(p.slug));
  return (
    <>
      <PageHero title={title} eyebrow={eyebrow} />
      <main className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        {posts.length > 0 ? (
          <BlogList posts={posts} />
        ) : (
          <p className="text-center text-[#555]">No posts found.</p>
        )}
        <p className="mt-14 text-center text-[13px] tracking-[0.18em] text-[#8a8a8a] uppercase">
          Showing {posts.length} of {POSTS.length} posts
        </p>
      </main>
    </>
  );
}
