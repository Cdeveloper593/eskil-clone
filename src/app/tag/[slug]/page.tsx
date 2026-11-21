import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BLOG_TAGS, blogTagBySlug } from "@/lib/eskil/archives";
import { BlogArchivePage } from "@/components/sites/eskil/BlogArchive";

export function generateStaticParams() {
  return BLOG_TAGS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const archive = blogTagBySlug(slug);
  return {
    title: archive ? `${archive.name} — Tag | Nordvik` : "Tag | Nordvik",
  };
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const archive = blogTagBySlug(slug);
  if (!archive) notFound();
  return <BlogArchivePage title={archive.name} eyebrow="Tag" slugs={archive.posts} />;
}
