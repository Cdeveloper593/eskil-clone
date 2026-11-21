import Image from "next/image";
import Link from "next/link";
import { productBySlug } from "@/lib/eskil/products";
import { postBySlug } from "@/lib/eskil/posts";
import { Reveal } from "@/components/sites/eskil/Reveal";
import { ShopGridClient } from "./ShopGridClient";

export const metadata = {
  title: "Shop Grid – Nordvik",
  description:
    "Nordvik Shop Grid — chairs & stools, lamps & pendants and haus decor, with a filterable product grid, shop by room and latest news.",
};

const GRID_SLUGS = [
  "turuput-pendant-lamp-dark-epoxy-painted-chromatica",
  "sonde-matte-nightstand-with-drawer",
  "insomnitus-floor-wooden-lamp-matte-tinted-lacquer",
  "amber-exotique-fine-leather-chair",
  "morgeby-coffee-table-with-concrete-top-plywood-birch",
  "fine-dark-tinted-leather-collectors-piece-chair",
];

const BANNERS = [
  {
    img: "/sites/eskil/2022/03/h5-img-1.jpg",
    title: "Chairs & stools",
    by: "By Borge Morgensen",
    href: "/product-category/chairs-stools/",
  },
  {
    img: "/sites/eskil/2022/03/h5-img-2.jpg",
    title: "Lamps & Pendants",
    by: "By Thao & Kallilio",
    href: "/product-category/lamps-pendants/",
  },
  {
    img: "/sites/eskil/2022/07/clock-original.jpg",
    hoverImg: "/sites/eskil/2022/07/clock-hover.jpg",
    title: "Haus Decor",
    by: "By august Sandgren",
    href: "/product-category/home-decor/",
  },
];

const ROOMS = [
  {
    img: "/sites/eskil/2022/03/h5-img-4.jpg",
    room: "KITCHEN",
    product: "Bar Stool",
    slug: "ginger-leather-limited-edition-chair-steel-legs-waxed-leather",
  },
  {
    img: "/sites/eskil/2022/03/h5-img-5.jpg",
    room: "LIVING ROOM",
    product: "Fate Cushion",
    slug: "vonanda-mid-century-modern-sofa",
  },
  {
    img: "/sites/eskil/2022/03/h5-img-6.jpg",
    room: "BEDROOM",
    product: "Exotic Vase",
    slug: "orka-handamade-concrete-candle-holders",
  },
];

const BLOG_POSTS = [
  { slug: "we-believe-that-your-style-should-be-a-reflection-of-you-and-your-style", img: "/sites/eskil/2022/03/blog-h5-5.jpg" },
  { slug: "thats-why-all-of-our-modern-furniture-is-designed-to-be-customized-by-you", img: "/sites/eskil/2022/03/blog-h5-6.jpg" },
  { slug: "select-your-fabric-and-colour-and-have-your-modern-furniture-customized", img: "/sites/eskil/2022/03/blog-h5-2.jpg" },
];

export default function ShopGridPage() {
  const products = GRID_SLUGS.map((s) => productBySlug(s)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );
  const posts = BLOG_POSTS.map(({ slug, img }) => ({ post: postBySlug(slug), img })).filter(
    (x): x is { post: NonNullable<typeof x.post>; img: string } => Boolean(x.post),
  );
  return (
    <div>
      {/* Category banners */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1500px] gap-5 px-5 py-12 md:grid-cols-3 md:px-6 md:py-16">
          {BANNERS.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <a href={b.href} target="_blank" rel="noreferrer" className="group block">
                <div className="relative overflow-hidden">
                  <Image
                    src={b.img}
                    alt={b.title}
                    width={800}
                    height={600}
                    priority={i === 0}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {b.hoverImg && (
                    <Image
                      src={b.hoverImg}
                      alt=""
                      width={800}
                      height={600}
                      className="absolute inset-0 aspect-[4/3] w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  )}
                </div>
                <h4 className="eskil-display mt-4 text-[22px] text-black transition-opacity group-hover:opacity-70">
                  {b.title}
                </h4>
                <h5 className="mt-1 text-[13px] uppercase tracking-[0.2em] text-[#8a8a8a]">{b.by}</h5>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Intro + filterable product grid */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
          <Reveal className="mb-10 max-w-3xl">
            <p className="text-[16px] leading-relaxed text-black">
              Decorate your house as you see fit! With our grandiose
              collections of contemporary furniture and unique house décor we
              will help you make your household as comfortable as possible
              while.
            </p>
            <Link href="/shop" className="eskil-btn mt-7">
              All Products
            </Link>
          </Reveal>
          <Reveal>
            <ShopGridClient products={products} />
          </Reveal>
        </div>
      </section>

      {/* Feature */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
          <Reveal className="max-w-3xl">
            <p className="text-[17px] leading-relaxed text-black">
              Quality materials &amp; refined design perfect for all apartments
              and houses. Start decorating now!
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-[#777]">
              Ipsum voluptate et non. Est velit et ex laboriosam dolor est
              inven tore quo numquam. Labore voluptas nihil molestiae sint
              delectus sint sequi volup tatem. Quia id omnis aliquid suscipit*
              recusandae similique. Vero natus sed animi reiciendis. Ipsum
              voluptate et non. Est velit et ex laboriosam dolor est inventore
              quo numquam. Labore voluptas nihil molestiae sint delectus sint
              sequi volup tatem. Quia id omnis aliquid suscipit*
            </p>
            <Link href="/shop" className="eskil-btn mt-8">
              View more
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Shop by room */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
          <Reveal className="mb-10 text-center">
            <p className="eskil-eyebrow">Inspiration</p>
            <h2 className="eskil-display mt-3 text-[32px] leading-tight text-black md:text-[40px]">
              Shop by room
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {ROOMS.map((r, i) => (
              <Reveal key={r.room} delay={i * 90}>
                <div className="group bg-white">
                  <div className="overflow-hidden">
                    <Image
                      src={r.img}
                      alt={`${r.room} — ${r.product}`}
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <p className="eskil-display text-[20px] text-black">{r.product}</p>
                    <p className="mt-2 text-[13px] uppercase tracking-[0.18em] text-[#8a8a8a]">
                      {r.room} - Lorem ipsum dolor sit amet sed credispula
                      deius
                    </p>
                    <Link
                      href={`/product/${r.slug}`}
                      className="eskil-link-underline mt-5 inline-block text-[12px] font-medium uppercase tracking-[0.2em] text-black"
                    >
                      View more
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
          <div className="grid gap-x-5 gap-y-10 md:grid-cols-3">
            {posts.map(({ post, img }, i) => (
              <Reveal key={post.slug} delay={i * 90}>
                <article>
                  <Link href={`/${post.slug}`} className="group block">
                    <div className="overflow-hidden">
                      <Image
                        src={img}
                        alt={post.title}
                        width={800}
                        height={600}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-4 text-[12px] uppercase tracking-[0.2em] text-[#8a8a8a]">
                      March 22, 2022
                    </p>
                    <h4 className="eskil-display mt-2 text-[20px] leading-snug text-black transition-opacity group-hover:opacity-70">
                      {post.title}
                    </h4>
                  </Link>
                  <Link
                    href={`/${post.slug}`}
                    className="eskil-link-underline mt-4 inline-block text-[12px] font-medium uppercase tracking-[0.2em] text-black"
                  >
                    Read more
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
