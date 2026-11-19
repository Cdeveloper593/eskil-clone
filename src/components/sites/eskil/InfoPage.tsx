"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { POSTS } from "@/lib/eskil/posts";
import { PORTFOLIO } from "@/lib/eskil/portfolio";
import { Reveal } from "@/components/sites/eskil/Reveal";

export const SOURCE_BASE = "https://eskil.qodeinteractive.com";

/* ------------------------------------------------------------------ */
/* Plain-text helpers                                                  */
/* ------------------------------------------------------------------ */

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&hellip;/g, "…")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&rsquo;/g, "’")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

const INFO_SLUGS = new Set([
  "about-us",
  "contact-us",
  "faq-page",
  "careers",
  "designer-profiles",
  "terms-conditions",
  "delivery-information",
  "returns-refunds",
  "coming-soon",
  "landing",
  "typo",
  "blog-list-no-sidebar",
  "blog-list-right-sidebar",
  "blog-list-left-sidebar",
  "blog-list-masonry",
  "portfolio",
  "portfolio/gallery",
  "portfolio/gallery-joined",
  "portfolio/masonry",
  "portfolio/masonry-joined",
  "portfolio/slider",
  "portfolio/info-on-left",
  "portfolio/info-on-image",
  "portfolio/info-on-hover",
  "portfolio/info-follow",
  "portfolio/image-on-hover",
  "portfolio/two-columns",
  "portfolio/two-columns-wide",
  "portfolio/three-columns",
  "portfolio/three-columns-wide",
  "portfolio/four-columns",
  "portfolio/four-columns-wide",
]);

const LOCAL_PATHS = new Set<string>([
  "/",
  ...INFO_SLUGS,
  ...POSTS.map((p) => p.slug),
  ...PORTFOLIO.map((p) => `portfolio-item/${p.slug}`),
]);

/** Rewrite a source-site href to a local path when that route is cloned. */
export function rewriteLocalLink(href: string): string {
  if (!href.startsWith(SOURCE_BASE)) return href;
  const path = href.slice(SOURCE_BASE.length).replace(/\/$/, "") || "/";
  const clean = path.replace(/^\//, "");
  if (LOCAL_PATHS.has(clean)) return path;
  return href;
}

function rewriteLinks(html: string): string {
  return html.replace(/href="([^"]+)"/g, (_m, href: string) => {
    return `href="${rewriteLocalLink(href)}"`;
  });
}

/* ------------------------------------------------------------------ */
/* Elementor HTML -> clean blocks                                      */
/* ------------------------------------------------------------------ */

export type InfoBlock =
  | { kind: "heading"; level: number; html: string }
  | { kind: "paragraph"; html: string }
  | { kind: "list"; ordered: boolean; items: string[] }
  | { kind: "quote"; html: string }
  | { kind: "image"; src: string; alt: string; width: number; height: number };

function isNavJunk(text: string): boolean {
  return (
    text.includes("Main Home") ||
    text.includes("Shopping Cart") ||
    text.includes("No products in the cart") ||
    text.includes("Sorry, this product is unavailable") ||
    (text.includes("support@example.com") && text.includes("Order Tracking")) ||
    text === "FOLLOW US" ||
    text === "FB IG TW"
  );
}

function attr(tag: string, name: string): string | null {
  const m = tag.match(new RegExp(`${name}\\s*=\\s*"([^"]*)"`, "i"));
  return m ? m[1] : null;
}

export function parseInfoBlocks(html: string): InfoBlock[] {
  const clean = html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "");
  const blocks: InfoBlock[] = [];
  const re =
    /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>|<(p)[^>]*>([\s\S]*?)<\/p>|<(ul|ol)[^>]*>([\s\S]*?)<\/(?:ul|ol)>|<blockquote[^>]*>([\s\S]*?)<\/blockquote>|<img([^>]*)\/?>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(clean)) !== null) {
    if (m[1]) {
      const text = stripHtml(m[2]);
      if (!text || isNavJunk(text)) continue;
      blocks.push({
        kind: "heading",
        level: Number(m[1][1]),
        html: rewriteLinks(m[2].trim()),
      });
    } else if (m[3]) {
      const inner = m[4];
      const imgMatch = inner.match(/<img([^>]*)\/?>/i);
      const text = stripHtml(inner.replace(/<img[^>]*>/gi, ""));
      if (imgMatch) {
        const src = attr(imgMatch[1], "src") ?? "";
        if (src.startsWith("/sites/eskil/")) {
          blocks.push({
            kind: "image",
            src,
            alt: attr(imgMatch[1], "alt") ?? "",
            width: Number(attr(imgMatch[1], "width") ?? 900) || 900,
            height: Number(attr(imgMatch[1], "height") ?? 700) || 700,
          });
        }
      }
      if (!text || isNavJunk(text)) continue;
      blocks.push({ kind: "paragraph", html: rewriteLinks(inner.trim()) });
    } else if (m[5]) {
      const items = [...m[6].matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
        .map((li) => stripHtml(li[1]))
        .filter(Boolean);
      if (items.length === 0) continue;
      if (items.every((t) => isNavJunk(t))) continue;
      blocks.push({
        kind: "list",
        ordered: m[5].toLowerCase() === "ol",
        items: items.map((t) => rewriteLinks(t)),
      });
    } else if (m[7] !== undefined) {
      const text = stripHtml(m[7]);
      if (!text || isNavJunk(text)) continue;
      blocks.push({ kind: "quote", html: rewriteLinks(m[7].trim()) });
    } else if (m[8] !== undefined) {
      const src = attr(m[8], "src") ?? "";
      if (!src.startsWith("/sites/eskil/")) continue;
      blocks.push({
        kind: "image",
        src,
        alt: attr(m[8], "alt") ?? "",
        width: Number(attr(m[8], "width") ?? 900) || 900,
        height: Number(attr(m[8], "height") ?? 700) || 700,
      });
    }
  }
  return blocks;
}

/* ------------------------------------------------------------------ */
/* Page hero + rendered info content                                   */
/* ------------------------------------------------------------------ */

export function PageHero({
  title,
  eyebrow = "Eskil",
  crumb,
}: {
  title: string;
  eyebrow?: string;
  crumb?: string;
}) {
  return (
    <section className="bg-[#f7f6f4] px-4 py-16 text-center md:py-24">
      <Reveal>
        <p className="eskil-eyebrow">{eyebrow}</p>
        <h1 className="eskil-display mt-4 text-4xl leading-tight text-black md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 text-[13px] tracking-[0.18em] text-[#8a8a8a] uppercase">
          <Link href="/" className="transition-colors hover:text-black">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black">{crumb ?? title}</span>
        </p>
      </Reveal>
    </section>
  );
}

const HEADING_CLASS: Record<number, string> = {
  1: "eskil-display text-4xl md:text-5xl text-black",
  2: "eskil-display text-3xl md:text-4xl text-black",
  3: "eskil-display text-2xl md:text-3xl text-black",
  4: "eskil-display text-xl md:text-2xl text-black",
  5: "eskil-display text-lg md:text-xl text-black",
  6: "text-base font-medium tracking-[0.2em] uppercase text-black",
};

export function InfoContent({ html }: { html: string }) {
  const blocks = parseInfoBlocks(html);
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.kind === "heading") {
          const Tag = `h${block.level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
          return (
            <Reveal key={i}>
              <Tag
                className={HEADING_CLASS[block.level] ?? HEADING_CLASS[3]}
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            </Reveal>
          );
        }
        if (block.kind === "paragraph") {
          return (
            <Reveal key={i}>
              <p
                className="text-[15px] leading-[1.85] text-[#555]"
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            </Reveal>
          );
        }
        if (block.kind === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <Reveal key={i}>
              <ListTag className="ml-5 list-disc space-y-2 text-[15px] leading-[1.85] text-[#555]">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ListTag>
            </Reveal>
          );
        }
        if (block.kind === "quote") {
          return (
            <Reveal key={i}>
              <blockquote
                className="border-l-2 border-black pl-5 font-[Marcellus,serif] text-[22px] leading-[1.5] text-black"
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            </Reveal>
          );
        }
        return (
          <Reveal key={i}>
            <Image
              src={block.src}
              alt={block.alt || "Eskil"}
              width={block.width}
              height={block.height}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </Reveal>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ accordion (questions are numbered paragraphs in the source)     */
/* ------------------------------------------------------------------ */

export type FaqItem = { question: string; answer: string };

export function parseFaq(html: string): FaqItem[] {
  const blocks = parseInfoBlocks(html);
  const items: FaqItem[] = [];
  let current: FaqItem | null = null;
  for (const block of blocks) {
    if (block.kind !== "paragraph") continue;
    const text = stripHtml(block.html);
    const q = text.match(/^(\d+)[.)]\s+(.+)$/);
    if (q) {
      if (current) items.push(current);
      current = { question: q[2].trim(), answer: "" };
    } else if (current) {
      current.answer = current.answer ? `${current.answer} ${text}` : text;
    }
  }
  if (current) items.push(current);
  return items;
}

export function FaqAccordion({ html }: { html: string }) {
  const items = parseFaq(html);
  const [open, setOpen] = useState<number | null>(0);
  if (items.length === 0) {
    return <InfoContent html={html} />;
  }
  return (
    <div className="divide-y divide-[#e8e8e8] border-y border-[#e8e8e8]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span className="flex items-baseline gap-4">
                <span className="eskil-eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <span className="eskil-display text-xl text-black md:text-2xl">
                  {item.question}
                </span>
              </span>
              <span
                aria-hidden
                className={`shrink-0 text-2xl leading-none text-black transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-7 text-[15px] leading-[1.85] text-[#555]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Contact form (local demo)                                           */
/* ------------------------------------------------------------------ */

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  if (sent) {
    return (
      <div className="eskil-fade-in border border-black bg-[#f7f6f4] px-6 py-8 text-center">
        <p className="eskil-display text-2xl text-black">Thank you for your message.</p>
        <p className="mt-3 text-[15px] leading-relaxed text-[#555]">
          We look forward to answering your request. This is a local demo — your
          message was not sent anywhere.
        </p>
      </div>
    );
  }
  const inputCls =
    "w-full border border-[#e8e8e8] bg-white px-4 py-3 text-[15px] text-black outline-none placeholder:text-[#999] focus:border-black transition-colors";
  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input required placeholder="Your name *" className={inputCls} aria-label="Your name" />
      <input
        required
        type="email"
        placeholder="Your email *"
        className={inputCls}
        aria-label="Your email"
      />
      <input placeholder="Subject" className={`${inputCls} sm:col-span-2`} aria-label="Subject" />
      <textarea
        required
        rows={6}
        placeholder="Your message *"
        className={`${inputCls} resize-y sm:col-span-2`}
        aria-label="Your message"
      />
      <div className="sm:col-span-2">
        <button type="submit" className="eskil-btn">
          Send message
        </button>
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Countdown to a fixed date                                           */
/* ------------------------------------------------------------------ */

export function Countdown({ target }: { target: string }) {
  const [parts, setParts] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const id = setInterval(() => {
      const diff = Math.max(0, new Date(target).getTime() - Date.now());
      setParts({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000) / 60_000),
        seconds: Math.floor((diff % 60_000) / 1000),
      });
    }, 1000);
    return () => clearInterval(id);
  }, [target]);
  const cells: [number, string][] = [
    [parts.days, "Days"],
    [parts.hours, "Hours"],
    [parts.minutes, "Minutes"],
    [parts.seconds, "Seconds"],
  ];
  return (
    <div className="flex flex-wrap items-start justify-center gap-6 md:gap-12">
      {cells.map(([value, label]) => (
        <div key={label} className="min-w-[72px] text-center">
          <div className="eskil-display text-5xl text-black tabular-nums md:text-7xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="eskil-eyebrow mt-3">{label}</div>
        </div>
      ))}
    </div>
  );
}
