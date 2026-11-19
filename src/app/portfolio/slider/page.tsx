"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { PORTFOLIO } from "@/lib/eskil/portfolio";
import { portfolioCategory, portfolioCover } from "@/components/sites/eskil/PortfolioGrid";
import { PageHero } from "@/components/sites/eskil/InfoPage";

export default function PortfolioSliderPage() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = PORTFOLIO.length;

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + count) % count);
  }, [count]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [paused, go]);

  const item = PORTFOLIO[index];
  const cover = portfolioCover(item);

  return (
    <>
      <PageHero title="Portfolio — Slider" eyebrow="Portfolio" />
      <main className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div
          className="relative overflow-hidden bg-[#f7f6f4]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {cover ? (
            <Link href={`/portfolio-item/${item.slug}`} aria-label={item.title}>
              <Image
                key={item.slug}
                src={cover}
                alt={item.title}
                width={1200}
                height={800}
                className="eskil-fade-in aspect-[3/2] w-full object-cover"
                sizes="(max-width: 768px) 100vw, 1100px"
                priority
              />
            </Link>
          ) : null}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 to-transparent px-5 pt-16 pb-5 md:px-8">
            <div>
              <p className="text-[11px] tracking-[0.22em] text-white/80 uppercase">
                {portfolioCategory(item)}
              </p>
              <Link
                href={`/portfolio-item/${item.slug}`}
                className="eskil-display mt-1 block text-2xl text-white md:text-3xl"
              >
                {item.title}
              </Link>
            </div>
            <p className="eskil-display text-lg text-white/90 tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </p>
          </div>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous project"
            className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/60 bg-black/30 text-xl text-white transition-colors hover:bg-black md:left-5"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next project"
            className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/60 bg-black/30 text-xl text-white transition-colors hover:bg-black md:right-5"
          >
            →
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {PORTFOLIO.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to ${p.title}`}
              className={`h-2 transition-all duration-300 ${
                i === index ? "w-8 bg-black" : "w-2 bg-[#d8d8d8] hover:bg-[#999]"
              }`}
            />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-4 gap-3 sm:grid-cols-8">
          {PORTFOLIO.map((p, i) => {
            const src = portfolioCover(p);
            return src ? (
              <button
                key={p.slug}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={p.title}
                className={`overflow-hidden transition-opacity ${i === index ? "opacity-100 ring-2 ring-black" : "opacity-60 hover:opacity-100"}`}
              >
                <Image
                  src={src}
                  alt=""
                  width={200}
                  height={150}
                  className="aspect-[4/3] w-full object-cover"
                />
              </button>
            ) : null;
          })}
        </div>
      </main>
    </>
  );
}
