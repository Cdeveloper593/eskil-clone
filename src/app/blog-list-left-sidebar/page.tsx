import { POSTS } from "@/lib/eskil/posts";
import { PageHero } from "@/components/sites/eskil/InfoPage";
import { BlogList, BlogSidebar } from "@/components/sites/eskil/BlogList";

export const metadata = { title: "Blog — Left Sidebar | Eskil" };

function filterPosts(query: string) {
  if (!query) return POSTS;
  const q = query.toLowerCase();
  return POSTS.filter((post) =>
    (post.title + " " + post.excerpt).toLowerCase().includes(q),
  );
}

export default async function BlogListLeftSidebarPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").trim();
  const posts = filterPosts(query);
  return (
    <>
      <PageHero title="Blog List — Left Sidebar" eyebrow="Blog" />
      <main className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[300px_1fr]"><div className="order-2 lg:order-1"><BlogSidebar basePath="/blog-list-left-sidebar" query={query} /></div><div className="order-1 lg:order-2"><BlogList posts={posts} /></div></div>
        <p className="mt-14 text-center text-[13px] tracking-[0.18em] text-[#8a8a8a] uppercase">
          Showing {posts.length} of {POSTS.length} posts
        </p>
      </main>
    </>
  );
}
