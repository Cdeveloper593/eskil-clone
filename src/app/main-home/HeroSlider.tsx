"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type HeroSlide = {
  img: string;
  title: string;
  designer: string;
};

export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number) => setIndex((next + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => go(index + 1), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [index, paused, go]);

  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden bg-[#f7f6f4] sm:aspect-[16/8] lg:aspect-[2560/1110]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured furniture"
    >
      {slides.map((s, i) => (
        <div
          key={s.img}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={s.img}
            alt={s.title}
            width={2560}
            height={1110}
            priority={i === 0}
            className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${
              i === index ? "scale-105" : "scale-100"
            }`}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pb-14 pt-24 md:pb-20">
            <div className="mx-auto max-w-[1500px] px-5 md:px-6">
              <p
                className={`eskil-eyebrow text-white transition-all delay-200 duration-700 ${
                  i === index ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                *{s.designer}
              </p>
              <h2
                className={`eskil-display mt-2 text-[34px] leading-none text-white transition-all delay-300 duration-700 md:text-[56px] ${
                  i === index ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                {s.title}
              </h2>
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/90 text-black transition-colors hover:bg-black hover:text-white md:left-6"
      >
        <ChevronLeft size={20} strokeWidth={1.5} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/90 text-black transition-colors hover:bg-black hover:text-white md:right-6"
      >
        <ChevronRight size={20} strokeWidth={1.5} />
      </button>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((s, i) => (
          <button
            key={s.img}
            type="button"
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-1.5 transition-all duration-300 ${
              i === index ? "w-8 bg-white" : "w-3 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
