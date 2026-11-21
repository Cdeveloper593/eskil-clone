import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/sites/eskil/Reveal";
import { TextImageSlider } from "./TextImageSlider";

export const metadata = {
  title: "Shop Dark – Nordvik",
  description:
    "Nordvik Shop Dark — for every modern home, quality furniture and décor, on a dark theme.",
};

const CATEGORIES = [
  { n: "01", name: "Chairs", img: "/sites/eskil/2022/03/shop-cat-01.jpg", href: "/product-category/chairs/" },
  { n: "02", name: "Sofas", img: "/sites/eskil/2022/03/shop-cat-02.jpg", href: "/product-category/sofas/" },
  { n: "03", name: "Pendants", img: "/sites/eskil/2022/03/shop-cat-03.jpg", href: "/product-category/pendants/" },
  { n: "04", name: "Home decor", img: "/sites/eskil/2022/03/shop-cat-04.jpg", href: "/product-category/home-decor/" },
  { n: "05", name: "Coffee Tables", img: "/sites/eskil/2022/03/shop-cat-05.jpg", href: "/product-category/best-sellers/coffee-tables/" },
  { n: "06", name: "Lamps", img: "/sites/eskil/2022/03/shop-cat-06.jpg", href: "/product-category/lamps/" },
];

const WEGNER_TEXT =
  "Ipsum voluptate et non. Est velit et ex laboriosam dolor est inventore quo numqu am. Labore voluptas nihil mo le stiae sint delectus sint sequi volup tatem.";

const WEGNER_SLIDES = [
  { img: "/sites/eskil/2022/04/h4-img-001.jpg", title: "WEGNER OX CHAIR", text: WEGNER_TEXT },
  { img: "/sites/eskil/2022/04/h4-img-002.jpg", title: "HANS J. WEGNER", text: WEGNER_TEXT },
];

const CATALOGUES = [
  { title: "Minimal Design Catalogue", img: "/sites/eskil/2022/03/h4-img-2.jpg" },
  { title: "Minimal Design Catalogue", img: "/sites/eskil/2022/03/h4-img-4.jpg" },
  { title: "Chair Design Catalogue", img: "/sites/eskil/2022/03/h4-img-3.jpg" },
  { title: "Furniture Catalogue", img: "/sites/eskil/2022/03/h4-img-5.jpg" },
];

export default function ShopDarkPage() {
  return (
    <div className="bg-[#111] text-white">
      {/* Hero */}
      <section>
        <div className="mx-auto grid max-w-[1500px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <Reveal>
            <Image
              src="/sites/eskil/2022/03/h4-img-1.jpg"
              alt="Nordvik furniture — modern home interior"
              width={1502}
              height={1300}
              priority
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120} className="md:pl-6">
            <h1 className="eskil-display text-[36px] leading-tight text-white md:text-[48px]">
              For every modern home, quality Furniture and décor
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-[#bbb]">
              Contrary to popular belief, Lorem Ipsum is not simply random
              text.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-block border border-white px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
            >
              View more
            </Link>
            <p className="mt-6 text-[13px] italic text-[#888]">
              *Ipsum velutate et non. est velit et ex laborism
            </p>
          </Reveal>
        </div>
      </section>

      {/* Search by categories */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
          <Reveal className="mb-10 text-center">
            <p className="eskil-eyebrow">Search by</p>
            <h2 className="eskil-display mt-3 text-[32px] leading-tight text-white md:text-[40px]">
              Categories
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 90}>
                <a href={c.href} target="_blank" rel="noreferrer" className="group block">
                  <div className="overflow-hidden">
                    <Image
                      src={c.img}
                      alt={c.name}
                      width={550}
                      height={550}
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="eskil-display px-4 py-4 text-center text-[19px] text-white transition-opacity group-hover:opacity-70">
                    {c.n} {c.name}
                  </h4>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Finest materials */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1500px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <Reveal>
            <p className="text-[17px] leading-relaxed text-white">
              Only the finest materials are used in our production process.
              Quality is always our top priority.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-[#bbb]">
              Ipsum voluptate et non. Est velit et ex laboriosam dolor est
              inven tore quo numquam. Labore voluptas nihil molestiae sint
              delectus sint sequi volup tatem. Quia id omnis aliquid suscipit*
              recusandae similique. Vero natus sed animi reiciendis. Ipsum
              voluptate et non. Est velit et ex laboriosam dolor est inventore
              quo numquam. Labore voluptas nihil molestiae sint delectus sint
              sequi volup tatem. Quia id omnis aliquid suscipit*
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-block border border-white px-8 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
            >
              Read more
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <Image
              src="/sites/eskil/2022/03/h4-img-6.jpg"
              alt="Fine materials — crafted furniture detail"
              width={1200}
              height={900}
              className="w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Wegner slider */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
          <Reveal>
            <TextImageSlider slides={WEGNER_SLIDES} />
          </Reveal>
        </div>
      </section>

      {/* Catalogues — latest editions */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
          <Reveal className="mb-10 text-center">
            <p className="eskil-eyebrow">catalogues</p>
            <h2 className="eskil-display mt-3 text-[32px] leading-tight text-white md:text-[40px]">
              Latest editions
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {CATALOGUES.map((c, i) => (
              <Reveal key={`${c.img}-${i}`} delay={(i % 4) * 90}>
                <Link href="/shop" className="group block">
                  <div className="overflow-hidden">
                    <Image
                      src={c.img}
                      alt={c.title}
                      width={800}
                      height={1000}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h5 className="eskil-display mt-4 text-center text-[19px] text-white transition-opacity group-hover:opacity-70">
                    {c.title}
                  </h5>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1500px] px-5 py-16 text-center md:px-6 md:py-20">
          <Reveal>
            <h3 className="eskil-display mx-auto max-w-3xl text-[26px] leading-snug text-white md:text-[32px]">
              “Labore voluptas nihil molestiae sint delectus sint sequi volup
              tatem. Quia idomnis psum volup suscipit.“
            </h3>
            <h6 className="mt-5 text-[13px] font-medium uppercase tracking-[0.22em] text-white">
              Hannes Wettstein
            </h6>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
