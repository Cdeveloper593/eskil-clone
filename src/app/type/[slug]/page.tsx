import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { POST_FORMATS, postFormatBySlug } from "@/lib/eskil/archives";
import { BlogArchivePage } from "@/components/sites/eskil/BlogArchive";

export function generateStaticParams() {
  return POST_FORMATS.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const archive = postFormatBySlug(slug);
  return {
    title: archive ? `${archive.name} — Post Format | Eskil` : "Post Format | Eskil",
  };
}

export default async function PostFormatPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const archive = postFormatBySlug(slug);
  if (!archive) notFound();
  return (
    <BlogArchivePage title={archive.name} eyebrow="Post Format" slugs={archive.posts} />
  );
}
