import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { POST_AUTHORS, postAuthorBySlug } from "@/lib/eskil/archives";
import { BlogArchivePage } from "@/components/sites/eskil/BlogArchive";

export function generateStaticParams() {
  return POST_AUTHORS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const archive = postAuthorBySlug(slug);
  return {
    title: archive ? `${archive.name} — Author | Eskil` : "Author | Eskil",
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const archive = postAuthorBySlug(slug);
  if (!archive) notFound();
  return (
    <BlogArchivePage title={archive.name} eyebrow="Author" slugs={archive.posts} />
  );
}
