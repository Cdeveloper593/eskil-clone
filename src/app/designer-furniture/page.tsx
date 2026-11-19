import Image from "next/image";
import Link from "next/link";
import { productBySlug } from "@/lib/eskil/products";
import { postBySlug } from "@/lib/eskil/posts";
import { ProductCard } from "@/components/sites/eskil/ProductCard";
import { Reveal } from "@/components/sites/eskil/Reveal";

export const metadata = {
  title: "Designer Furniture – Eskil",
  description:
    "Eskil Designer Furniture — furniture & décor by Hans J. Wegner and Hugo Passos, high quality materials, latest news.",
};

const DESIGNER_PRODUCTS = [
  "snaade-wall-clock-birch-wood-matte-lacquer-dry-finish-11",
  "vedio-chair-gunnared-green-solid-birch-frame-lacquer",
  "tvorhond-table-lamp-with-led-light-acrylic-painted-steel-gold",
  "loratus-floor-lamp-with-led-light-bulb-solid-ash-acrylic",
  "soft-leather-gunsmoke-brown-statement-chair-steel-legs",
  "silha-coffee-table-plywood-tabletop-matte-lacquer-33",
  "steel-construction-fine-wood-retro-chair-black-lacquer",
  "hygger-soft-cushion-armchair-grey-cotton-plywood-legs",
];

const DESIGNERS = [
  {
    name: "Hans J. Wegner",
    img: "/sites/eskil/2022/07/designer-bigger.jpg",
    href: "/product-designer/hans-j-wegner/",
    text: "Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis. Ipsum voluptate et non. Est velit et ex labori osam dolor est inventore quo numquam.",
  },
  {
    name: "Hugo Passos",
    img: "/sites/eskil/2022/06/designer-img-h6-2.jpg",
    href: "/product-designer/hugo-passos/",
    text: "Quia id omnis aliquid suscipit recusandae similique. Vero natus sed animi reiciendis. Ipsum voluptate et non. Est velit et ex labori osam dolor est inventore quo numquam.",
  },
];

const PORTFOLIO_ITEMS = [
  { slug: "apartment-qi", title: "Apartment QI", img: "/sites/eskil/2022/03/portfolio-lista-5.jpg" },
  { slug: "bedroom-designs", title: "Bedroom designs", img: "/sites/eskil/2022/03/portfolio-lista-8.jpg" },
  { slug: "living-rooms", title: "Living rooms", img: "/sites/eskil/2022/03/portfolio-lista-2.jpg" },
  { slug: "office-interior", title: "Office interior", img: "/sites/eskil/2022/03/portfolio-lista-4.jpg" },
];

const MATERIALS = [
  { name: "WOOD", img: "/sites/eskil/2022/03/h6-icon-1.png" },
  { name: "METAL", img: "/sites/eskil/2022/03/h6-icon-2.png" },
  { name: "Concrete", img: "/sites/eskil/2022/03/h6-icon-3.png" },
  { name: "Marble", img: "/sites/eskil/2022/03/h6-icon-4.png" },
  { name: "Fabric", img: "/sites/eskil/2022/03/h6-icon-5.png" },
  { name: "Glass", img: "/sites/eskil/2022/03/h6-icon-6.png" },
];

const BLOG_POSTS = [
  { slug: "eskil-is-proud-to-stock-all-brends-at-one-site-everything-together", img: "/sites/eskil/2022/03/blog-masonry-6.jpg" },
  { slug: "how-to-achieve-natural-shades-in-your-sweet-home-easy-pretty-tips", img: "/sites/eskil/2022/03/blog-masonry-7.jpg" },
  { slug: "tips-and-tricks-how-to-achieve-natural-shades-in-your-sweet-home", img: "/sites/eskil/2022/03/blog-masonry-3.jpg" },
  { slug: "handmade-pieces-that-took-time-to-make-retro-new-artistic-design", img: "/sites/eskil/2022/03/blog-masonry-4.jpg" },
];

const CATEGORY_CHIPS = ["CHAIR", "HOME DECOR", "TABLES", "LIGHTING"];

function formatPostDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

export default function DesignerFurniturePage() {
  const products = DESIGNER_PRODUCTS.map((s) => productBySlug(s)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );
  const posts = BLOG_POSTS.map(({ slug, img }) => ({ post: postBySlug(slug), img })).filter(
    (x): x is { post: NonNullable<typeof x.post>; img: string } => Boolean(x.post),
  );
  return (
    <div>
      {/* Hero — text, image, short text (3 columns on desktop, as on the source) */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 md:grid-cols-3 md:px-6 md:py-20">
          <Reveal>
            <h1 className="eskil-display text-[40px] leading-tight text-black md:text-[52px]">
              Furniture &amp; décor
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-[#777]">
              Ipsum voluptate et nonst veet ex laboriosam dolor est inventore
              quo numquam. Labore voluptas nihil molestiae sint delectus.
            </p>
            <Link href="/shop" className="eskil-btn mt-7">
              Read more
            </Link>
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2">
              {CATEGORY_CHIPS.map((c) => (
                <Link
                  key={c}
                  href="/shop"
                  className="eskil-link-underline text-[12px] font-medium uppercase tracking-[0.2em] text-black"
                >
                  {c}
                </Link>
              ))}
            </div>
            <p className="mt-10 flex items-center gap-3 text-[13px] uppercase tracking-[0.15em] text-black">
              <Image
                src="/sites/eskil/2022/03/toparea-img.png"
                alt=""
                width={23}
                height={26}
                className="-rotate-90"
              />
              10% discount for registered users
            </p>
          </Reveal>
          <Reveal delay={120} className="md:pt-10">
            <p className="text-[15px] leading-relaxed text-[#777]">
              Ipsum voluptate et nonst veet ex laboriosam dolor est inventore
              quo
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Image
              src="/sites/eskil/2022/03/h6-img-2.jpg"
              alt="Designer furniture — styled interior"
              width={330}
              height={455}
              className="w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Quote + clocks */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto max-w-[1500px] px-5 py-16 text-center md:px-6 md:py-20">
          <Reveal>
            <h3 className="eskil-display mx-auto max-w-3xl text-[26px] leading-snug text-black md:text-[32px]">
              “Labore voluptas nihil molestiae sint delectus sint sequi volup
              tatem. Quia idomnis psum volup suscipit.“
            </h3>
            <h6 className="mt-5 text-[13px] font-medium uppercase tracking-[0.22em] text-black">
              Hannes Wettstein
            </h6>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-5">
            <Reveal>
              <Image
                src="/sites/eskil/2022/04/clock-01.png"
                alt="Snaade wall clock — front view"
                width={800}
                height={942}
                className="w-full object-cover"
              />
            </Reveal>
            <Reveal delay={120}>
              <Image
                src="/sites/eskil/2022/04/clock-02.png"
                alt="Snaade wall clock — side view"
                width={800}
                height={942}
                className="w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Designer products */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 90}>
                <ProductCard product={p} priority={i < 4} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Designers */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 md:grid-cols-2 md:px-6 md:py-20">
          {DESIGNERS.map((d, i) => (
            <Reveal key={d.name} delay={i * 120}>
              <a href={d.href} target="_blank" rel="noreferrer" className="group block">
                <div className="overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.name}
                    width={1300}
                    height={923}
                    className="aspect-[13/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h6 className="eskil-display mt-5 text-[22px] text-black transition-opacity group-hover:opacity-70">
                  {d.name}
                </h6>
                <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-[#777]">{d.text}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <Reveal key={item.slug} delay={(i % 4) * 90}>
                <Link href={`/portfolio-item/${item.slug}`} className="group block">
                  <div className="overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="eskil-display mt-4 text-[20px] text-black transition-opacity group-hover:opacity-70">
                    {item.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* High quality materials */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto max-w-[1500px] px-5 py-16 text-center md:px-6 md:py-20">
          <Reveal>
            <h2 className="eskil-display text-[32px] leading-tight text-black md:text-[40px]">
              We use High Quality materials
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#777]">
              Labore voluptas nihil molestiae sint delectus sint sequi volup
              tatem qia id omnis suscipit similique. Vero natus sed animi
              reiciendis. Ipsum voluptate et non. Est velit et ex laboriosam
              dolor est inventore quo numquam.
            </p>
            <Link href="/shop" className="eskil-btn mt-8">
              View more
            </Link>
          </Reveal>
          <div className="mt-14 grid grid-cols-3 gap-x-4 gap-y-10 md:grid-cols-6">
            {MATERIALS.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <Link href="/shop" className="group block">
                  <Image
                    src={m.img}
                    alt={m.name}
                    width={120}
                    height={120}
                    className="mx-auto h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20"
                  />
                  <h6 className="mt-4 text-[12px] font-medium uppercase tracking-[0.22em] text-black transition-opacity group-hover:opacity-70">
                    {m.name}
                  </h6>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog — latest news */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
          <Reveal className="mb-10 text-center">
            <p className="eskil-eyebrow">Our Blog</p>
            <h2 className="eskil-display mt-3 text-[32px] leading-tight text-black md:text-[40px]">
              latest news
            </h2>
          </Reveal>
          <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {posts.map(({ post, img }, i) => (
              <Reveal key={post.slug} delay={(i % 4) * 90}>
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
                      {formatPostDate(post.date)}
                    </p>
                    <h4 className="eskil-display mt-2 text-[20px] leading-snug text-black transition-opacity group-hover:opacity-70">
                      {post.title}
                    </h4>
                  </Link>
                  <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-[#777]">
                    {post.excerpt.replace(/\[&hellip;\]/g, "…").replace(/<[^>]+>/g, "")}
                  </p>
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

      {/* Instagram — photos are served from Instagram's CDN with expired signed URLs, so only the profile link is reproduced */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto max-w-[1500px] px-5 py-16 text-center md:px-6 md:py-20">
          <Reveal>
            <p className="eskil-eyebrow">Follow us</p>
            <h2 className="eskil-display mt-3 text-[32px] leading-tight text-black md:text-[40px]">
              #QODE_ESKIL
            </h2>
            <a
              href="https://www.instagram.com/eskilshop/"
              target="_blank"
              rel="noreferrer"
              className="eskil-link-underline mt-5 inline-block text-[13px] font-medium uppercase tracking-[0.2em] text-black"
            >
              eskilshop
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
