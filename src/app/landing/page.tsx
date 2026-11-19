import Link from "next/link";
import { notFound } from "next/navigation";
import { infoPageBySlug } from "@/lib/eskil/pages";
import { InfoContent } from "@/components/sites/eskil/InfoPage";
import { Reveal } from "@/components/sites/eskil/Reveal";

export const metadata = { title: "Landing | Eskil" };

export default function LandingPage() {
  const page = infoPageBySlug("landing");
  if (!page) notFound();
  return (
    <>
      <section className="bg-[#f7f6f4] px-4 py-20 text-center md:py-32">
        <Reveal>
          <p className="eskil-eyebrow">Eskil — Furniture Store</p>
          <h1 className="eskil-display mx-auto mt-5 max-w-4xl text-4xl leading-tight text-black md:text-6xl">
            Start your eCommerce venture now!
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.85] text-[#555]">
            Sophisticated websites for furniture &amp; interior décor stores — a
            splendid selection of inner pages, shop elements and portfolio lists,
            made for all uses.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/shop" className="eskil-btn">
              Get theme
            </Link>
            <Link href="/portfolio" className="eskil-btn eskil-btn--outline">
              View more
            </Link>
          </div>
        </Reveal>
      </section>

      <main className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <InfoContent html={page.content} />
        <Reveal>
          <div className="mt-16 border-t border-[#e8e8e8] pt-12 text-center">
            <h2 className="eskil-display text-3xl text-black md:text-4xl">
              Promote your store
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.85] text-[#555]">
              Eskil includes a great variety of carefully designed portfolio lists,
              versatile portfolio singles, blog list layouts and diverse post types
              for your blog.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/blog-list-no-sidebar" className="eskil-btn">
                Start blogging
              </Link>
              <Link href="/portfolio" className="eskil-btn eskil-btn--outline">
                Showcase your creations
              </Link>
            </div>
          </div>
        </Reveal>
      </main>
    </>
  );
}
