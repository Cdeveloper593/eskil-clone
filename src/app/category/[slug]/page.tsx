import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BLOG_CATEGORIES, blogCategoryBySlug } from "@/lib/eskil/archives";
import { BlogArchivePage } from "@/components/sites/eskil/BlogArchive";

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const archive = blogCategoryBySlug(slug);
  return {
    title: archive ? `${archive.name} — Category | Nordvik` : "Category | Nordvik",
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const archive = blogCategoryBySlug(slug);
  if (!archive) notFound();
  return (
    <BlogArchivePage title={archive.name} eyebrow="Category" slugs={archive.posts} />
  );
}
