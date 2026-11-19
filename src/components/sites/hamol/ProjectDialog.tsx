"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { projects, sourceProjectUrl } from "./data";

export const PROJECT_EVENT = "hamol:open-project";

export function openProjectDialog(index: number) {
  window.dispatchEvent(new CustomEvent<number>(PROJECT_EVENT, { detail: index }));
}

export function ProjectDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const open = useCallback((i: number) => {
    setIndex(((i % projects.length) + projects.length) % projects.length);
    if (!ref.current?.open) ref.current?.showModal();
  }, []);

  useEffect(() => {
    const onOpen = (e: Event) => open((e as CustomEvent<number>).detail ?? 0);
    window.addEventListener(PROJECT_EVENT, onOpen);
    return () => window.removeEventListener(PROJECT_EVENT, onOpen);
  }, [open ]);

  return (
    <dialog
      ref={ref}
      className="m-auto w-[min(880px,calc(100vw-40px))] rounded-2xl border border-white/10 bg-[#101418] p-0 text-[#f1f2ef] backdrop:bg-black/70"
      aria-labelledby="project-title"
    >
      <div className="grid sm:grid-cols-[240px_1fr]">
        <div
          aria-hidden
          className="relative hidden items-center justify-center overflow-hidden sm:flex"
          style={{
            background: `radial-gradient(circle at 38% 32%, ${project.accent}55, ${project.accent}18 52%, #0b0f12 78%)`,
          }}
        >
          <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/15 bg-[#0d1216]/80 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
            {project.logo ? (
              <Image src={project.logo} alt="" width={96} height={96} className="max-h-20 w-auto object-contain" />
            ) : (
              <span className="text-2xl font-bold" style={{ color: project.accent }}>
                P<span className="text-white">360</span>
              </span>
            )}
          </div>
          <span className="absolute bottom-4 left-5 text-[10px] tracking-[0.2em] text-white/50 uppercase">
            {String(index + 1).padStart(2, "0")} / A Hamol Studio project
          </span>
        </div>

        <div className="p-7 sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <span className="text-[12px] tracking-[0.18em] text-[#8b9096]">
              {String(index + 1).padStart(2, "0")} / 09
            </span>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              aria-label="Close project detail"
              className="flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-[12px] text-white/75 transition hover:text-white"
            >
              Close <X size={13} />
            </button>
          </div>

          <h3 id="project-title" className="mt-5 text-4xl font-medium tracking-[-0.04em]">
            {project.name}
          </h3>
          <p className="mt-2 flex items-center gap-2.5 text-sm text-[#a9afb5]">
            {project.category}
            <span aria-hidden>·</span>
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: project.status === "In development" ? "#e8c476" : "#39ff88" }}
            />
            {project.status}
          </p>

          <p className="mt-5 leading-[1.7] text-[#c3c8cc]">{project.description}</p>
          <p className="mt-3.5 leading-[1.7] text-[#969ca2]">
            <span className="text-[#d7d9d4]">What we built: </span>
            {project.built}
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <a
              href={sourceProjectUrl(project.slug)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#f1f2ef] px-5 text-[13px] font-semibold text-[#0b0d10] transition hover:bg-white"
            >
              Project page <ArrowUpRight size={14} />
            </a>
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-5 text-[13px] transition hover:border-white/50"
              >
                Visit website <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          <div className="mt-9 flex items-center justify-between border-t border-white/10 pt-5 text-sm">
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className="inline-flex items-center gap-2 text-[#a9afb5] transition hover:text-white"
            >
              <ArrowLeft size={15} /> Back to work
            </button>
            <button
              type="button"
              onClick={() => setIndex((index + 1) % projects.length)}
              className="inline-flex items-center gap-2 font-medium transition hover:opacity-80"
              style={{ color: projects[(index + 1) % projects.length].accent }}
            >
              Next project <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
