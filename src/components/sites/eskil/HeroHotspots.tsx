"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Plus } from "lucide-react";

export type Hotspot = {
  title: string;
  price: string;
  href: string;
  thumb: string;
  top: string;
  left: string;
};

export function HeroHotspots({ hotspots }: { hotspots: Hotspot[] }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="relative">
      <Image
        src="/sites/eskil/2022/03/h3-img-01-scaled.jpg"
        alt="Eskil furniture store — styled living room"
        width={2560}
        height={1180}
        priority
        className="w-full object-cover"
      />
      {hotspots.map((h, i) => (
        <div key={h.title} className="absolute" style={{ top: h.top, left: h.left }}>
          <button
            type="button"
            aria-label={`${h.title} — ${h.price}`}
            aria-expanded={active === i}
            onClick={() => setActive(active === i ? null : i)}
            onMouseEnter={() => setActive(i)}
            className="eskil-pin flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110"
          >
            <Plus size={16} />
          </button>
          <div
            className={`absolute left-1/2 top-5 z-20 w-60 -translate-x-1/2 transition-all duration-300 ${
              active === i ? "visible opacity-100" : "invisible opacity-0"
            }`}
            onMouseLeave={() => setActive(null)}
          >
            <div className="bg-white p-3 shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
              <div className="flex gap-3">
                <Image src={h.thumb} alt="" width={76} height={76} className="h-[76px] w-[76px] object-cover" />
                <div>
                  <p className="eskil-display text-[16px] leading-snug text-black">{h.title}</p>
                  <p className="mt-1 text-[15px] text-black">{h.price}</p>
                </div>
              </div>
              <Link href={h.href} className="eskil-btn mt-3 w-full !px-3 !py-2.5">
                View more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
