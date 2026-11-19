"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";
import { PORTFOLIO } from "@/lib/eskil/portfolio";
import { portfolioCategory, portfolioCover } from "@/components/sites/eskil/PortfolioGrid";
import { PageHero } from "@/components/sites/eskil/InfoPage";
import { Reveal } from "@/components/sites/eskil/Reveal";

export default function PortfolioInfoFollowPage() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [follow, setFollow] = useState<{ x: number; y: number; slug: string } | null>(null);

  const onMove = (e: MouseEvent<HTMLElement>, slug: string) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setFollow({ x: e.clientX - rect.left, y: e.clientY - rect.top, slug });
  };

  const active = follow ? PORTFOLIO.find((p) => p.slug === follow.slug) : null;

  return (
    <>
      <PageHero title="Portfolio — Info Follow" eyebrow="Portfolio" />
      <main className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <p className="mb-10 text-center text-[15px] text-[#555]">
          Move your cursor over a project — its title and category follow the pointer.
        </p>
        <div
          ref={wrapRef}
          className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          onMouseLeave={() => setFollow(null)}
        >
          {PORTFOLIO.map((item, i) => {
            const cover = portfolioCover(item);
            return (
              <Reveal key={item.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/portfolio-item/${item.slug}`}
                  className="group block"
                  onMouseMove={(e) => onMove(e, item.slug)}
                >
                  <div className="relative overflow-hidden bg-[#f7f6f4]">
                    {cover ? (
                      <Image
                        src={cover}
                        alt={item.title}
                        width={1000}
                        height={750}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : null}
                  </div>
                </Link>
              </Reveal>
            );
          })}
          {active && follow ? (
            <div
              aria-hidden
              className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 bg-black px-4 py-3 text-center whitespace-nowrap transition-opacity duration-150"
              style={{ left: follow.x, top: follow.y }}
            >
              <p className="text-[10px] tracking-[0.22em] text-white/70 uppercase">
                {portfolioCategory(active)}
              </p>
              <p className="eskil-display mt-0.5 text-lg text-white">{active.title}</p>
            </div>
          ) : null}
        </div>
      </main>
    </>
  );
}
