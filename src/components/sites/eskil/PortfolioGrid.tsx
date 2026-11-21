import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO, type PortfolioItem } from "@/lib/eskil/portfolio";
import { Reveal } from "@/components/sites/eskil/Reveal";

/* The staged portfolio data also carries logos, CSS files and nav dumps.
   Real project imagery is the portfolio-single-* / portfolio-lista-* files. */
export function portfolioImages(item: PortfolioItem): string[] {
  return item.images.filter(
    (src) => /\.(jpe?g|png|webp)$/i.test(src) && /portfolio-(single|lista)-/i.test(src),
  );
}

export function portfolioCover(item: PortfolioItem): string | null {
  const imgs = portfolioImages(item);
  return imgs[0] ?? null;
}

export function portfolioCategory(item: PortfolioItem): string {
  const t = item.title.toLowerCase();
  if (t.includes("office")) return "Office";
  if (t.includes("bedroom")) return "Bedroom";
  if (t.includes("living")) return "Living Room";
  if (t.includes("storage")) return "Storage";
  return "Interior";
}

export function cleanPortfolioParagraphs(item: PortfolioItem): string[] {
  return item.paragraphs.filter(
    (p) =>
      !p.includes("Main Home") &&
      !p.includes("Shopping Cart") &&
      !p.includes("Sorry, this product is unavailable"),
  );
}

export type PortfolioInfo = "below" | "on-image" | "on-hover" | "image-on-hover" | "none";

const MASONRY_HEIGHTS = [1100, 800, 1000, 900];

export function PortfolioCard({
  item,
  info = "below",
  aspect = "aspect-[4/3]",
  index = 0,
}: {
  item: PortfolioItem;
  info?: PortfolioInfo;
  aspect?: string;
  index?: number;
}) {
  const cover = portfolioCover(item);
  const hover = portfolioImages(item)[1] ?? null;
  const category = portfolioCategory(item);
  const natural = aspect === "aspect-auto";
  const imgCls = natural
    ? "h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
    : "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105";
  return (
    <Link href={`/portfolio-item/${item.slug}`} className="group block">
      <div className={`relative overflow-hidden bg-[#f7f6f4] ${aspect}`}>
        {cover ? (
          <Image
            src={cover}
            alt={item.title}
            width={1000}
            height={natural ? MASONRY_HEIGHTS[index % MASONRY_HEIGHTS.length] : 750}
            className={imgCls}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : null}
        {info === "image-on-hover" && hover ? (
          <Image
            src={hover}
            alt=""
            width={1000}
            height={750}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : null}
        {info === "on-image" ? (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pt-10 pb-4">
            <p className="text-[11px] tracking-[0.22em] text-white/80 uppercase">{category}</p>
            <p className="eskil-display mt-1 text-xl text-white">{item.title}</p>
          </div>
        ) : null}
        {info === "on-hover" ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/55 px-4 text-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
            <p className="text-[11px] tracking-[0.22em] text-white/80 uppercase">{category}</p>
            <p className="eskil-display mt-2 text-2xl text-white">{item.title}</p>
            <span className="mt-3 text-[11px] tracking-[0.22em] text-white uppercase underline underline-offset-4">
              View project
            </span>
          </div>
        ) : null}
      </div>
      {info === "below" || info === "image-on-hover" ? (
        <div className="pt-4 text-center">
          <p className="text-[11px] tracking-[0.22em] text-[#8a8a8a] uppercase">{category}</p>
          <h3 className="eskil-display mt-1 text-xl text-black transition-opacity group-hover:opacity-70">
            {item.title}
          </h3>
        </div>
      ) : null}
      <span className="sr-only">
        {item.title} — project {index + 1}
      </span>
    </Link>
  );
}

export type PortfolioVariant =
  | "standard"
  | "gallery"
  | "gallery-joined"
  | "masonry"
  | "masonry-joined"
  | "info-on-left"
  | "info-on-image"
  | "info-on-hover"
  | "image-on-hover"
  | "two-columns"
  | "two-columns-wide"
  | "three-columns"
  | "three-columns-wide"
  | "four-columns"
  | "four-columns-wide";

export function PortfolioGrid({ variant = "standard" }: { variant?: PortfolioVariant }) {
  const items = PORTFOLIO;

  if (variant === "masonry" || variant === "masonry-joined") {
    const joined = variant === "masonry-joined";
    return (
      <div className={`columns-1 sm:columns-2 lg:columns-3 ${joined ? "gap-0" : "gap-6"}`}>
        {items.map((item, i) => (
          <div key={item.slug} className={`break-inside-avoid ${joined ? "" : "mb-6"}`}>
            <Reveal delay={(i % 3) * 80}>
              <PortfolioCard
                item={item}
                index={i}
                info={joined ? "on-hover" : "below"}
                aspect="aspect-auto"
              />
            </Reveal>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "info-on-left") {
    return (
      <div className="space-y-14 md:space-y-20">
        {items.map((item, i) => (
          <Reveal key={item.slug}>
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <p className="eskil-eyebrow">{portfolioCategory(item)}</p>
                <h3 className="eskil-display mt-3 text-3xl text-black md:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-[1.85] text-[#555]">
                  An Nordvik interior project — {item.title.toLowerCase()} — furnished with
                  pieces from our furniture collections.
                </p>
                <Link
                  href={`/portfolio-item/${item.slug}`}
                  className="eskil-link-underline mt-6 inline-block text-[12px] font-medium tracking-[0.22em] text-black uppercase"
                >
                  View project
                </Link>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <PortfolioCard item={item} info="none" index={i} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    );
  }

  const cols =
    variant === "two-columns" || variant === "two-columns-wide"
      ? "sm:grid-cols-2"
      : variant === "four-columns" || variant === "four-columns-wide"
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  const info: PortfolioInfo =
    variant === "gallery" || variant === "gallery-joined"
      ? "on-hover"
      : variant === "info-on-image"
        ? "on-image"
        : variant === "info-on-hover"
          ? "on-hover"
          : variant === "image-on-hover"
            ? "image-on-hover"
            : "below";

  const joined = variant === "gallery-joined";
  const gap = joined ? "gap-0" : variant.startsWith("four") ? "gap-6" : "gap-8";

  return (
    <div className={`grid grid-cols-1 ${cols} ${gap}`}>
      {items.map((item, i) => (
        <Reveal key={item.slug} delay={(i % 3) * 80}>
          <PortfolioCard item={item} info={info} index={i} />
        </Reveal>
      ))}
    </div>
  );
}

export function portfolioGridWide(variant: PortfolioVariant): boolean {
  return variant.endsWith("-wide");
}
