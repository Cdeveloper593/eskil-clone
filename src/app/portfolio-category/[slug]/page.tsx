import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  PORTFOLIO_CATEGORIES,
  portfolioCategoryBySlug,
} from "@/lib/eskil/archives";
import { PORTFOLIO } from "@/lib/eskil/portfolio";
import { PageHero } from "@/components/sites/eskil/InfoPage";
import { PortfolioCard } from "@/components/sites/eskil/PortfolioGrid";
import { Reveal } from "@/components/sites/eskil/Reveal";

export function generateStaticParams() {
  return PORTFOLIO_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const archive = portfolioCategoryBySlug(slug);
  return {
    title: archive
      ? `${archive.name} — Portfolio Category | Eskil`
      : "Portfolio Category | Eskil",
  };
}

export default async function PortfolioCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const archive = portfolioCategoryBySlug(slug);
  if (!archive) notFound();
  const wanted = new Set(archive.items);
  const items = PORTFOLIO.filter((i) => wanted.has(i.slug));
  return (
    <>
      <PageHero title={archive.name} eyebrow="Portfolio Category" />
      <main className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 80}>
              <PortfolioCard item={item} info="below" index={i} />
            </Reveal>
          ))}
        </div>
      </main>
    </>
  );
}
