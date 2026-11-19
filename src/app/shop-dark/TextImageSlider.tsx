"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type TextImageSlide = {
  img: string;
  title: string;
  text: string;
};

export function TextImageSlider({ slides }: { slides: TextImageSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number) => setIndex((next + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => go(index + 1), 5000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [index, paused, go]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Designer spotlight"
    >
      <div className="relative overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={s.img}
            aria-hidden={i !== index}
            className={`transition-opacity duration-700 ${
              i === index ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
            }`}
          >
            <div className="grid items-center gap-8 md:grid-cols-2">
              <Image
                src={s.img}
                alt={s.title}
                width={800}
                height={800}
                className="aspect-square w-full object-cover"
              />
              <div className="pb-2 md:pr-6">
                <h5 className="eskil-display text-[26px] leading-tight text-white md:text-[32px]">
                  {s.title}
                </h5>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#bbb]">{s.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.img}
            type="button"
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-1.5 transition-all duration-300 ${
              i === index ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
