"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export type VerticalSlide = {
  img: string;
  title: string;
  designer: string;
  color: string;
  materials: string;
  style: string;
  caption: string;
};

export function VerticalSlider({ slides }: { slides: VerticalSlide[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const scrolling = useRef(false);

  const scrollTo = useCallback((next: number) => {
    const el = containerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(slides.length - 1, next));
    scrolling.current = true;
    el.scrollTo({ top: clamped * el.clientHeight, behavior: "smooth" });
    setIndex(clamped);
    window.setTimeout(() => {
      scrolling.current = false;
    }, 700);
  }, [slides.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      if (scrolling.current) return;
      setIndex(Math.round(el.scrollTop / el.clientHeight));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollTo(index + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollTo(index - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, scrollTo]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        tabIndex={0}
        aria-label="Vertical slider — use arrow keys to move between sections"
        className="h-[calc(100svh-4rem)] snap-y snap-mandatory overflow-y-auto md:h-[calc(100svh-6.0625rem)]"
      >
        {slides.map((s, i) => (
          <section
            key={s.img}
            aria-label={s.title}
            className="relative flex h-full snap-start snap-always items-end overflow-hidden"
          >
            <Image
              src={s.img}
              alt={s.title}
              width={800}
              height={537}
              priority={i === 0}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
            <div
              className={`relative w-full px-5 pb-14 transition-all duration-700 md:px-10 md:pb-20 ${
                i === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <dl className="mb-5 flex flex-wrap gap-x-6 gap-y-1 text-[12px] uppercase tracking-[0.18em] text-white/80">
                <div className="flex gap-2">
                  <dt className="text-white/60">designer:</dt>
                  <dd>{s.designer}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-white/60">Color:</dt>
                  <dd>{s.color}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-white/60">materials:</dt>
                  <dd>{s.materials}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-white/60">Style:</dt>
                  <dd>{s.style}</dd>
                </div>
              </dl>
              <p className="max-w-xl text-[14px] leading-relaxed text-white/85">{s.caption}</p>
              <h2 className="eskil-display mt-3 text-[40px] leading-none text-white md:text-[64px]">
                {s.title}
              </h2>
            </div>
          </section>
        ))}
      </div>

      {/* Static layer from the source: follow us on social media */}
      <p className="pointer-events-none absolute bottom-5 left-5 z-10 hidden text-[11px] uppercase tracking-[0.22em] text-white/70 md:block">
        Follow us on social media
      </p>

      {/* Dot navigator */}
      <div className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-3 md:right-6">
        {slides.map((s, i) => (
          <button
            key={s.img}
            type="button"
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
            aria-current={i === index}
            onClick={() => scrollTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "w-2.5 scale-125 bg-white" : "w-2.5 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Arrow navigator */}
      <div className="absolute bottom-5 right-4 z-10 flex gap-2 md:right-6">
        <button
          type="button"
          aria-label="Previous section"
          disabled={index === 0}
          onClick={() => scrollTo(index - 1)}
          className="flex h-11 w-11 items-center justify-center bg-white/90 text-black transition-colors hover:bg-black hover:text-white disabled:opacity-40"
        >
          <ChevronUp size={20} strokeWidth={1.5} />
        </button>
        <button
          type="button"
          aria-label="Next section"
          disabled={index === slides.length - 1}
          onClick={() => scrollTo(index + 1)}
          className="flex h-11 w-11 items-center justify-center bg-white/90 text-black transition-colors hover:bg-black hover:text-white disabled:opacity-40"
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
