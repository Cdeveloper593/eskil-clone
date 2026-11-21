import Link from "next/link";
import { infoPageBySlug } from "@/lib/eskil/pages";
import { InfoContent, PageHero } from "@/components/sites/eskil/InfoPage";
import { Reveal } from "@/components/sites/eskil/Reveal";

export const metadata = { title: "Typography | Nordvik" };

const HEADINGS = [
  { tag: "h1", cls: "text-5xl md:text-6xl", label: "Heading 1" },
  { tag: "h2", cls: "text-4xl md:text-5xl", label: "Heading 2" },
  { tag: "h3", cls: "text-3xl md:text-4xl", label: "Heading 3" },
  { tag: "h4", cls: "text-2xl md:text-3xl", label: "Heading 4" },
  { tag: "h5", cls: "text-xl md:text-2xl", label: "Heading 5" },
  { tag: "h6", cls: "text-base tracking-[0.2em] uppercase", label: "Heading 6" },
] as const;

export default function TypoPage() {
  const page = infoPageBySlug("typo");
  return (
    <>
      <PageHero title="Typography" eyebrow="Nordvik — Type Specimen" />
      <main className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <section>
          <Reveal>
            <p className="eskil-eyebrow">Display type — Marcellus</p>
          </Reveal>
          <div className="mt-8 space-y-6 border-b border-[#e8e8e8] pb-12">
            {HEADINGS.map((h) => {
              const Tag = h.tag;
              return (
                <Reveal key={h.tag}>
                  <div className="flex flex-wrap items-baseline gap-4">
                    <span className="w-24 shrink-0 text-[12px] tracking-[0.18em] text-[#8a8a8a] uppercase">
                      {h.tag}
                    </span>
                    <Tag className={`eskil-display text-black ${h.cls}`}>{h.label}</Tag>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="mt-12 border-b border-[#e8e8e8] pb-12">
          <Reveal>
            <p className="eskil-eyebrow">Body type — Jost</p>
            <p className="mt-5 text-[15px] leading-[1.85] text-[#555]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua — the body face of Nordvik, set
              in Jost at 15px with generous leading.
            </p>
            <p className="mt-4 text-[15px] leading-[1.85] text-[#555]">
              <strong className="font-semibold text-black">Bold text</strong> and{" "}
              <em>italic text</em> sit alongside{" "}
              <Link href="/about-us" className="text-black underline underline-offset-4">
                underlined links
              </Link>{" "}
              in the same measure.
            </p>
          </Reveal>
        </section>

        <section className="mt-12 grid gap-10 border-b border-[#e8e8e8] pb-12 sm:grid-cols-2">
          <Reveal>
            <p className="eskil-eyebrow">Unordered list</p>
            <ul className="mt-5 ml-5 list-disc space-y-2 text-[15px] leading-[1.85] text-[#555]">
              <li>Designer furniture</li>
              <li>Custom-made décor</li>
              <li>Natural materials</li>
              <li>Handmade pieces</li>
            </ul>
          </Reveal>
          <Reveal>
            <p className="eskil-eyebrow">Ordered list</p>
            <ol className="mt-5 ml-5 list-decimal space-y-2 text-[15px] leading-[1.85] text-[#555]">
              <li>Choose your fabric</li>
              <li>Pick a colour</li>
              <li>Customise your piece</li>
              <li>We deliver it home</li>
            </ol>
          </Reveal>
        </section>

        <section className="mt-12 border-b border-[#e8e8e8] pb-12">
          <Reveal>
            <p className="eskil-eyebrow">Buttons</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/shop" className="eskil-btn">
                Shop now
              </Link>
              <Link href="/about-us" className="eskil-btn eskil-btn--outline">
                Read more
              </Link>
            </div>
            <blockquote className="mt-10 border-l-2 border-black pl-5 font-[Marcellus,serif] text-[22px] leading-[1.5] text-black">
              “Good design is honest — furniture should be made to be lived with.”
            </blockquote>
          </Reveal>
        </section>

        {page ? (
          <section className="mt-12">
            <Reveal>
              <p className="eskil-eyebrow">From the source page</p>
            </Reveal>
            <div className="mt-6">
              <InfoContent html={page.content} />
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
