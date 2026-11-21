import { POSTS } from "@/lib/eskil/posts";
import { PageHero } from "@/components/sites/eskil/InfoPage";
import { BlogList } from "@/components/sites/eskil/BlogList";

export const metadata = { title: "Blog — Masonry | Nordvik" };

function filterPosts(query: string) {
  if (!query) return POSTS;
  const q = query.toLowerCase();
  return POSTS.filter((post) =>
    (post.title + " " + post.excerpt).toLowerCase().includes(q),
  );
}

export default async function BlogListMasonryPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();
  const posts = filterPosts(query);
  return (
    <>
      <PageHero title="Blog List — Masonry" eyebrow="Blog" />
      <main className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <BlogList posts={posts} variant="masonry" />
        <p className="mt-14 text-center text-[13px] tracking-[0.18em] text-[#8a8a8a] uppercase">
          Showing {posts.length} of {POSTS.length} posts
        </p>
      </main>
    </>
  );
}
