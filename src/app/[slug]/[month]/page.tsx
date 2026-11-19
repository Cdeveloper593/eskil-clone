import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { POST_MONTHS, postMonthBySlug } from "@/lib/eskil/archives";
import { BlogArchivePage } from "@/components/sites/eskil/BlogArchive";

/* Monthly post archives (e.g. /2022/03/). This lives under the [slug]
   segment because Next.js requires sibling dynamic segments to share a
   param name; the first segment is the year. */
export function generateStaticParams() {
  return POST_MONTHS.map((m) => ({ slug: m.year, month: m.month }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; month: string }>;
}): Promise<Metadata> {
  const { slug, month } = await params;
  const archive = postMonthBySlug(slug, month);
  return {
    title: archive ? `${archive.label} — Archive | Eskil` : "Archive | Eskil",
  };
}

export default async function PostMonthPage({
  params,
}: {
  params: Promise<{ slug: string; month: string }>;
}) {
  const { slug, month } = await params;
  const archive = postMonthBySlug(slug, month);
  if (!archive) notFound();
  return (
    <BlogArchivePage title={archive.label} eyebrow="Archive" slugs={archive.posts} />
  );
}
