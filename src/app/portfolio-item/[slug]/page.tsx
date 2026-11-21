import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PORTFOLIO, portfolioBySlug } from "@/lib/eskil/portfolio";
import {
  cleanPortfolioParagraphs,
  portfolioCategory,
  portfolioImages,
} from "@/components/sites/eskil/PortfolioGrid";
import { Reveal } from "@/components/sites/eskil/Reveal";
import { PageHero } from "@/components/sites/eskil/InfoPage";

export function generateStaticParams() {
  return PORTFOLIO.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioBySlug(slug);
  return { title: item ? `${item.title} | Nordvik` : "Portfolio | Nordvik" };
}

export default async function PortfolioItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = portfolioBySlug(slug);
  if (!item) notFound();
  const images = portfolioImages(item);
  const paragraphs = cleanPortfolioParagraphs(item);
  const idx = PORTFOLIO.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? PORTFOLIO[idx - 1] : null;
  const next = idx < PORTFOLIO.length - 1 ? PORTFOLIO[idx + 1] : null;
  const [first, ...rest] = images;

  return (
    <>
      <PageHero title={item.title} eyebrow={portfolioCategory(item)} crumb={item.title} />
      <main className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        {first ? (
          <Reveal>
            <Image
              src={first}
              alt={item.title}
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
              sizes="(max-width: 768px) 100vw, 1100px"
              priority
            />
          </Reveal>
        ) : null}

        {rest.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {rest.map((src, i) => (
              <Reveal key={src} delay={(i % 2) * 80}>
                <Image
                  src={src}
                  alt={`${item.title} — image ${i + 2}`}
                  width={1000}
                  height={750}
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 550px"
                />
              </Reveal>
            ))}
          </div>
        ) : null}

        {paragraphs.length > 0 ? (
          <div className="mx-auto mt-12 max-w-3xl space-y-5">
            {paragraphs.map((p, i) => (
              <Reveal key={i}>
                <p className="text-[15px] leading-[1.85] whitespace-pre-line text-[#555]">{p}</p>
              </Reveal>
            ))}
          </div>
        ) : null}

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-between gap-4 border-t border-[#e8e8e8] pt-8 text-[13px] tracking-[0.18em] uppercase">
          <span>
            Category: <span className="text-black">{portfolioCategory(item)}</span>
          </span>
          <Link href="/portfolio" className="text-black underline underline-offset-4">
            All projects
          </Link>
        </div>

        <nav
          aria-label="Project navigation"
          className="mt-12 grid gap-4 border-y border-[#e8e8e8] py-6 sm:grid-cols-2"
        >
          <div>
            {prev ? (
              <Link href={`/portfolio-item/${prev.slug}`} className="group block">
                <span className="eskil-eyebrow">← Previous project</span>
                <span className="eskil-display mt-2 block text-xl text-black transition-opacity group-hover:opacity-70">
                  {prev.title}
                </span>
              </Link>
            ) : null}
          </div>
          <div className="sm:text-right">
            {next ? (
              <Link href={`/portfolio-item/${next.slug}`} className="group block">
                <span className="eskil-eyebrow">Next project →</span>
                <span className="eskil-display mt-2 block text-xl text-black transition-opacity group-hover:opacity-70">
                  {next.title}
                </span>
              </Link>
            ) : null}
          </div>
        </nav>
      </main>
    </>
  );
}
