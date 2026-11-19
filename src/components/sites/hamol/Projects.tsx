"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, sourceProjectUrl } from "./data";
import { openProjectDialog } from "./ProjectDialog";

const PAD = "px-[max(clamp(24px,3.45vw,72px),env(safe-area-inset-left))]";

export function Projects() {
  return (
    <section id="projects" className={`scroll-mt-28 bg-[#0b0d10] py-[120px] text-[#f1f2ef] ${PAD}`}>
      <div className="flex items-center justify-between border-b border-white/10 pb-5 text-[#999da4]">
        <span className="text-[12px] font-medium tracking-[0.2em] uppercase">
          A constellation of ideas
        </span>
        <span className="text-[12px] font-medium tracking-[0.2em] uppercase">01 — 09</span>
      </div>

      <div className="mt-[50px] mb-16 grid gap-8 min-[900px]:grid-cols-[1.25fr_1fr] min-[900px]:items-end">
        <h2 className="text-[clamp(46px,5.7vw,90px)] leading-[1.04] font-medium tracking-[-0.055em]">
          Built with intention.
        </h2>
        <p className="max-w-[460px] text-lg leading-[1.7] text-[#aeb4ba]">
          Digital products, independent brands,
          <br className="hidden min-[900px]:block" /> and businesses with a point of view.
        </p>
      </div>

      <div>
        {projects.map((p, i) => (
          <a
            key={p.slug}
            href={sourceProjectUrl(p.slug)}
            data-project={p.slug}
            onClick={(e) => {
              e.preventDefault();
              openProjectDialog(i);
            }}
            className="group grid grid-cols-[52px_minmax(0,1fr)_20px] items-center gap-x-3.5 gap-y-1 border-t border-white/10 py-6 transition-all last:border-b hover:pl-1 min-[701px]:grid-cols-[60px_minmax(0,1.4fr)_minmax(130px,1fr)_125px_24px] min-[701px]:gap-5 min-[701px]:py-7 min-[701px]:hover:pl-4"
            style={{ ["--project-accent" as string]: p.accent }}
          >
            <span className="hidden text-[13px] tracking-[0.12em] text-[#717980] min-[701px]:block">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex items-center gap-4">
              <span className="flex h-14 w-[52px] shrink-0 items-center justify-center rounded-[14px] border border-white/[0.05] bg-[#12171a] p-2 transition group-hover:border-white/25">
                {p.logo ? (
                  <Image
                    src={p.logo}
                    alt=""
                    width={72}
                    height={72}
                    className="max-h-full w-auto object-contain"
                  />
                ) : (
                  <span className="text-[13px] font-bold" style={{ color: p.accent }}>
                    P<span className="text-[#f1f2ef]">360</span>
                  </span>
                )}
              </span>
              <span>
                <span className="block text-[clamp(21px,2.3vw,36px)] leading-tight font-medium tracking-[-0.04em]">
                  {p.name}
                </span>
                <span className="mt-1 block text-[13px] text-[#999da4] min-[701px]:hidden">
                  {p.category} · {p.status}
                </span>
              </span>
            </span>
            <span className="hidden text-[15px] text-[#b9bdc2] min-[701px]:block">{p.category}</span>
            <span className="hidden items-center gap-2 text-[13px] text-[#b9bdc2] min-[701px]:flex">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  p.status === "Active"
                    ? "bg-[#39ff88] shadow-[0_0_10px_rgba(57,255,136,0.4)]"
                    : p.status === "Growing"
                      ? "bg-[#39ff88]"
                      : "bg-[#e8c476]"
                }`}
              />
              {p.status}
            </span>
            <ArrowUpRight
              size={20}
              className="justify-self-end text-[#717980] transition group-hover:text-white"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
