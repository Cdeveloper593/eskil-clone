import { POSTS } from "@/lib/eskil/posts";
import { PageHero } from "@/components/sites/eskil/InfoPage";
import { BlogList, BlogSidebar } from "@/components/sites/eskil/BlogList";

export const metadata = { title: "Blog — Right Sidebar | Eskil" };

function filterPosts(query: string) {
  if (!query) return POSTS;
  const q = query.toLowerCase();
  return POSTS.filter((post) =>
    (post.title + " " + post.excerpt).toLowerCase().includes(q),
  );
}

export default async function BlogListRightSidebarPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();
  const posts = filterPosts(query);
  return (
    <>
      <PageHero title="Blog List — Right Sidebar" eyebrow="Blog" />
      <main className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]"><BlogList posts={posts} /><BlogSidebar basePath="/blog-list-right-sidebar" query={query} /></div>
        <p className="mt-14 text-center text-[13px] tracking-[0.18em] text-[#8a8a8a] uppercase">
          Showing {posts.length} of {POSTS.length} posts
        </p>
      </main>
    </>
  );
}
