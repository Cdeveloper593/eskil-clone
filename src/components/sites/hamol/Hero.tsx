"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import { projects } from "./data";
import { openProjectDialog } from "./ProjectDialog";

export function Hero() {
  const [selected, setSelected] = useState(0);
  const [rotating, setRotating] = useState(true);
  const project = projects[selected];

  return (
    <section id="top" className="relative overflow-hidden bg-[#0b0d10] text-[#f1f2ef]">
      {/* starfield */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 12% 22%, #ffffffcc, transparent), radial-gradient(1px 1px at 32% 68%, #ffffff88, transparent), radial-gradient(1.5px 1.5px at 58% 14%, #ffffffaa, transparent), radial-gradient(1px 1px at 74% 42%, #ffffff77, transparent), radial-gradient(1px 1px at 88% 76%, #ffffff99, transparent), radial-gradient(1.5px 1.5px at 44% 86%, #ffffff66, transparent), radial-gradient(1px 1px at 6% 54%, #ffffff77, transparent), radial-gradient(1px 1px at 94% 18%, #ffffff88, transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(720px 480px at 68% 44%, ${project.accent}14, transparent 65%)`,
          transition: "background 600ms ease",
        }}
      />
      {/* lunar surface floor */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-[30%] overflow-hidden opacity-45 [mask-image:linear-gradient(to_top,black_45%,transparent)]">
        <Image src="/sites/hamol/media/environments/lunar.webp" alt="" fill className="object-cover object-top" sizes="100vw" />
      </div>

      <div className="relative grid min-h-svh grid-cols-1 gap-10 px-[max(clamp(24px,3.45vw,72px),env(safe-area-inset-left))] pt-[135px] pb-16 min-[900px]:grid-cols-[minmax(340px,1fr)_minmax(380px,560px)_minmax(240px,320px)] min-[900px]:items-center">
        {/* Copy */}
        <div className="relative z-10 max-w-[560px]">
          <p className="text-[12px] font-medium tracking-[0.25em] text-[#b8bbc0]">
            CREATIVE &amp; VENTURE STUDIO
          </p>
          <h1 className="mt-6 mb-[26px] text-[clamp(48px,4.5vw,82px)] leading-[1.06] font-medium tracking-[-0.057em]">
            We turn ideas
            <br />
            into cool
            <br />
            <span style={{ color: project.accent }} className="transition-colors duration-500">
              brands.
            </span>
          </h1>
          <p className="max-w-[44ch] text-base leading-[1.65] text-[#b9bdc2]">
            Hamol Studio brings brands to life through memorable visuals and digital experiences
            that people want to explore.
          </p>
          <a
            href="#projects"
            className="mt-7 inline-flex items-center gap-3 border-b border-white/40 pb-1 text-[15px] font-medium transition hover:border-white"
          >
            Explore our work
            <ArrowDown size={16} />
          </a>

          <div className="mt-14 hidden items-center gap-4 text-[11px] tracking-[0.22em] text-[#8b9096] min-[900px]:flex">
            <span>THE ORBITAL COLLECTION</span>
            <span className="h-px w-10 bg-white/25" />
            <span>
              {String(selected + 1).padStart(2, "0")} / LUNAR
            </span>
          </div>
        </div>

        {/* Orbital visual */}
        <div className="relative mx-auto aspect-square w-full max-w-[560px]">
          <div
            aria-hidden
            className={`absolute inset-0 rounded-full border border-white/10 ${rotating ? "hamol-orbit" : ""}`}
          >
            {projects.map((p, i) => {
              const angle = (i / projects.length) * 360;
              return (
                <span
                  key={p.slug}
                  className="absolute top-1/2 left-1/2 h-2 w-2 rounded-full"
                  style={{
                    background: p.accent,
                    boxShadow: `0 0 12px ${p.accent}`,
                    transform: `rotate(${angle}deg) translateX(min(26vw, 280px)) rotate(${-angle}deg) translate(-50%, -50%)`,
                  }}
                />
              );
            })}
          </div>
          <div aria-hidden className="absolute inset-[16%] rounded-full border border-dashed border-white/10" />
          <div
            className="absolute inset-[24%] flex items-center justify-center overflow-hidden rounded-full shadow-[0_0_120px_rgba(180,200,220,0.15)] transition-all duration-700"
            style={{
              background: `conic-gradient(from 210deg at 38% 30%, ${project.accent}66, ${project.accent}22 28%, #10161a 52%, ${project.accent}38 76%, #0c1114)`,
              clipPath: "polygon(50% 0%, 82% 8%, 100% 38%, 92% 72%, 66% 100%, 30% 96%, 4% 70%, 0% 34%, 20% 6%)",
            }}
          >
            {project.logo ? (
              <Image
                src={project.logo}
                alt=""
                width={150}
                height={150}
                priority
                className="w-[46%] object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
              />
            ) : (
              <span className="text-4xl font-bold" style={{ color: project.accent }}>
                P<span className="text-white">360</span>
              </span>
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0d10]/50 via-transparent to-white/10" />
          </div>
          <div className="absolute inset-x-0 -bottom-2 text-center">
            <p className="text-[11px] tracking-[0.2em] text-[#8b9096] uppercase">
              Selected work / {String(selected + 1).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={() => openProjectDialog(selected)}
              className="mt-1.5 inline-flex items-center gap-2 text-2xl font-medium tracking-[-0.03em] transition hover:opacity-80"
              style={{ color: project.accent }}
            >
              {project.name}
              <ArrowUpRight size={20} />
            </button>
            <p className="mt-0.5 text-sm text-[#a9afb5]">{project.category}</p>
          </div>
        </div>

        {/* Orbit project list */}
        <div className="relative z-10">
          <ol className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {projects.map((p, i) => (
              <li key={p.slug}>
                <button
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-pressed={i === selected}
                  className={`flex w-full items-center gap-3.5 px-2 py-[9px] text-left transition ${
                    i === selected ? "bg-white/[0.04]" : "hover:bg-white/[0.03]"
                  }`}
                >
                  <span
                    className="w-6 text-[11px] tracking-[0.12em]"
                    style={{ color: i === selected ? p.accent : "#717980" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 leading-tight">
                    <span className={`block text-[14px] font-medium ${i === selected ? "text-white" : "text-[#d7d9d4]"}`}>
                      {p.name}
                    </span>
                    <small className="block text-[11px] text-[#8b9096]">
                      {p.category}
                      {p.status === "In development" ? " · In progress" : ""}
                    </small>
                  </span>
                  <ArrowUpRight
                    size={13}
                    className={i === selected ? "opacity-100" : "opacity-0"}
                    style={{ color: p.accent }}
                  />
                </button>
              </li>
            ))}
          </ol>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setRotating((r) => !r)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-[13px] transition hover:border-white/40"
            >
              {rotating ? <Pause size={13} /> : <Play size={13} />}
              {rotating ? "Pause orbit" : "Turn orbit"}
            </button>
            <button
              type="button"
              onClick={() => openProjectDialog(selected)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#f1f2ef] px-4 text-[13px] font-semibold text-[#0b0d10] transition hover:bg-white"
            >
              Open {project.name}
              <ArrowUpRight size={13} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-between px-[max(clamp(24px,3.45vw,72px),env(safe-area-inset-left))] pb-8 text-[12px] text-[#8b9096]">
        <span className="hidden sm:block">Scroll to explore · Drag to rotate · Click to open</span>
        <span className="sm:hidden">Swipe to browse · Tap a meteor</span>
        <span>
          <span className="text-[#e8ecec]">{String(selected + 1).padStart(2, "0")}</span> / 09
        </span>
      </div>
    </section>
  );
}
