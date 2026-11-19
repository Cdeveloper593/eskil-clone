"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ContactButton } from "./ContactDialog";

const NAV = [
  { label: "Work", href: "#projects" },
  { label: "Studio", href: "#studio" },
  { label: "Approach", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [onStudio, setOnStudio] = useState(false);

  useEffect(() => {
    const studio = document.getElementById("studio");
    if (!studio) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnStudio(entry.isIntersecting),
      { rootMargin: "-80px 0px -55% 0px" },
    );
    observer.observe(studio);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[max(clamp(24px,3.45vw,72px),env(safe-area-inset-left))] pt-7 pb-5 transition-colors duration-300 ${
        onStudio
          ? "bg-[#e9e9e3]/95 text-[#171a1c]"
          : "bg-gradient-to-b from-[#0b0d10]/95 via-[#0b0d10]/45 to-transparent text-[#f1f2ef]"
      }`}
    >
      <div className="flex items-center gap-4">
        <a href="#top" aria-label="Hamol Studio, home" className="block">
          <Image
            src="/sites/hamol/media/hamol-logo.svg"
            alt="Hamol Studio"
            width={110}
            height={73}
            className={`h-9 w-auto ${onStudio ? "invert" : ""}`}
            priority
          />
        </a>
        <a
          href="https://lovable-partner-directory.lovable.app/partners/hamol-studio"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden items-center border-l pl-4 min-[941px]:flex ${onStudio ? "border-[#17251c]/15" : "border-white/15"}`}
          aria-label="Lovable Expert 2026 — Hamol Studio partner profile (opens in a new tab)"
        >
          <Image
            src={
              onStudio
                ? "/sites/hamol/media/badges/lovable-expert-2026-dark.svg"
                : "/sites/hamol/media/badges/lovable-expert-2026.svg"
            }
            alt="Lovable Expert 2026"
            width={74}
            height={36}
            className="h-8 w-auto opacity-90"
          />
        </a>
      </div>

      <nav
        aria-label="Primary"
        className={`fixed bottom-3 left-1/2 flex -translate-x-1/2 gap-[3px] rounded-full border p-1 backdrop-blur-[14px] min-[701px]:absolute min-[701px]:bottom-auto min-[701px]:p-1 ${
          onStudio
            ? "border-[#52615a]/20 bg-[#191d21]/95 min-[701px]:bg-[#e2e5df] min-[701px]:text-[#45514c]"
            : "border-white/15 bg-[#191d21]/95 min-[701px]:bg-[#181b1d]/35"
        }`}
      >
        {NAV.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            aria-current={i === 0 ? "page" : undefined}
            className={`flex min-h-11 items-center rounded-full px-4 text-[12px] whitespace-nowrap transition hover:text-current sm:px-[17px] min-[701px]:min-h-0 min-[701px]:px-6 min-[701px]:py-2 min-[701px]:text-[13px] ${
              onStudio && "min-[701px]:hover:text-[#101a15]"
            } ${i === 0 ? "" : "text-[#a9adb1]"} ${onStudio ? "min-[701px]:text-[#45514c]" : ""}`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <ContactButton
        className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition ${
          onStudio
            ? "bg-[#19231e] text-[#f3f5ef] hover:bg-[#101a15]"
            : "bg-[#f1f2ef] text-[#0b0d10] hover:bg-white"
        }`}
      >
        Let&rsquo;s talk
        <ArrowUpRight size={14} />
      </ContactButton>
    </header>
  );
}
