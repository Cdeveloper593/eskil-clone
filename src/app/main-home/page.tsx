import Image from "next/image";
import Link from "next/link";
import { productBySlug } from "@/lib/eskil/products";
import { ProductCard } from "@/components/sites/eskil/ProductCard";
import { Reveal } from "@/components/sites/eskil/Reveal";
import { HeroSlider } from "./HeroSlider";
import { TextImageSlider } from "./TextImageSlider";

export const metadata = {
  title: "Main Home – Nordvik",
  description:
    "Nordvik Main Home — Mogensen Chair, Søborg Chair, Mogensen Table and Østerby Chair by Børge Mogensen, featured products and categories.",
};

const HERO_SLIDES = [
  { img: "/sites/eskil/2022/03/rev-img-1.jpg", title: "Mogensen Chair", designer: "By Børge Mogensen" },
  { img: "/sites/eskil/2022/03/rev-img-2.jpg", title: "Søborg Chair", designer: "By Børge Mogensen" },
  { img: "/sites/eskil/2022/03/rev-img-3.jpg", title: "Mogensen Table", designer: "By Børge Mogensen" },
  { img: "/sites/eskil/2022/03/rev-img-4.jpg", title: "Østerby Chair", designer: "By Børge Mogensen" },
];

const FEATURED_SLUGS = [
  "poliframe-tuffed-accnet-chair-29-1w-jet-black",
  "sauder-boulevard-cafe-lounge-chair-camel-finish",
  "ella-chair-with-armrests-solid-birch-and-leather-cushion",
  "singapore-dark-rattan-handmade-armchair",
  "stockholm-minimal-chair-oak-wood-with-fine-finish",
  "rattan-spider-work-armchair-matte-lacque-steel-legs",
];

const WEGNER_TEXT =
  "Ipsum voluptate et non. Est velit et ex laboriosam dolor est inventore quo numqu am. Labore voluptas nihil mo le stiae sint delectus sint sequi volup tatem.";

const WEGNER_SLIDES = [
  { img: "/sites/eskil/2022/04/h1-img-001.jpg", title: "WEGNER OX CHAIR", text: WEGNER_TEXT },
  { img: "/sites/eskil/2022/04/h1-img-002.jpg", title: "HANS J. WEGNER", text: WEGNER_TEXT },
];

const CATEGORIES = [
  { n: "01", name: "Chairs", img: "/sites/eskil/2022/03/shop-cat-01.jpg", href: "/product-category/chairs/" },
  { n: "02", name: "Sofas", img: "/sites/eskil/2022/03/shop-cat-02.jpg", href: "/product-category/sofas/" },
  { n: "03", name: "Pendants", img: "/sites/eskil/2022/03/shop-cat-03.jpg", href: "/product-category/pendants/" },
  { n: "04", name: "Home decor", img: "/sites/eskil/2022/03/shop-cat-04.jpg", href: "/product-category/home-decor/" },
  { n: "05", name: "Coffee Tables", img: "/sites/eskil/2022/03/shop-cat-05.jpg", href: "/product-category/best-sellers/coffee-tables/" },
  { n: "06", name: "Lamps", img: "/sites/eskil/2022/03/shop-cat-06.jpg", href: "/product-category/lamps/" },
];

export default function MainHomePage() {
  const featured = FEATURED_SLUGS.map((s) => productBySlug(s)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );
  return (
    <div>
      {/* Hero slider — 4 RevSlider slides by Børge Mogensen */}
      <section aria-label="Featured furniture">
        <HeroSlider slides={HERO_SLIDES} />
      </section>

      {/* Discover Products */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
          <Reveal className="mb-10 text-center">
            <p className="eskil-eyebrow">Featured</p>
            <h2 className="eskil-display mt-3 text-[32px] leading-tight text-black md:text-[40px]">
              Discover Products
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90}>
                <ProductCard product={p} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Feature — unique designs */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto grid max-w-[1500px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <Reveal>
            <h2 className="eskil-display text-[30px] leading-tight text-black md:text-[38px]">
              Unique designs that will fit in with the rest of your furniture.
              We will help you personalize your home.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#777]">
              Ipsum voluptate et non. Est velit et ex laboriosam dolor est
              inven tore quo numquam. Labore voluptas nihil molestiae sint
              delectus sint sequi volup tatem. Quia id omnis aliquid suscipit*
              recusandae similique. Vero natus sed animi reiciendis. Ipsum
              voluptate et non. Est velit et ex laboriosam dolor est inventore
              quo nquam. Labore voluptas nihil molestiae sint delectus sint
              sequi voluptatem. Quia id omnis aliquid suscipit recusandae
              similique. Vero natus sed animi reiciendis. Ipsum voluptate et
              non. Est velit et ex laboriosam dolor est inventore quo nquam
              omnis aliquid suscipit voluptas.
            </p>
            <Link href="/shop" className="eskil-btn mt-8">
              View more
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <Image
              src="/sites/eskil/2022/03/main-img-1.jpg"
              alt="Nordvik furniture — styled interior"
              width={1200}
              height={900}
              className="w-full object-cover"
            />
            <p className="mt-5 text-[15px] leading-relaxed text-[#777]">
              Ipsum voluptate et non. Est velit et ex laboriosam dolor est
              inventore quo numquam. Labore voluptas nihil molestiae sint
              delectus sint sequi volup tatem. Quia id omnis aliquid suscipit*
            </p>
          </Reveal>
        </div>
      </section>

      {/* Wegner Ox Chair / Hans J. Wegner slider */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
          <Reveal>
            <TextImageSlider slides={WEGNER_SLIDES} />
          </Reveal>
        </div>
      </section>

      {/* Search by categories */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
          <Reveal className="mb-10 text-center">
            <p className="eskil-eyebrow">Search by</p>
            <h2 className="eskil-display mt-3 text-[32px] leading-tight text-black md:text-[40px]">
              Categories
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 90}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block bg-white"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={c.img}
                      alt={c.name}
                      width={550}
                      height={550}
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="eskil-display px-4 py-4 text-center text-[19px] text-black transition-opacity group-hover:opacity-70">
                    {c.n} {c.name}
                  </h4>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
