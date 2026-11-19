import Image from "next/image";
import Link from "next/link";
import { productBySlug } from "@/lib/eskil/products";
import { HOME_COLLECTIONS } from "@/lib/eskil/site";
import { ProductCard } from "@/components/sites/eskil/ProductCard";
import { Reveal } from "@/components/sites/eskil/Reveal";
import { HeroHotspots } from "@/components/sites/eskil/HeroHotspots";
import { NewsletterForm } from "@/components/sites/eskil/NewsletterForm";

export const metadata = {
  title: "Furniture Store – Eskil",
  description:
    "Eskil Furniture Store — featured collections by Antonio Citterio, Johanna Grawundler, Patricia Urquiola, Borge Mogensen, Gino Sarfatti and Vincent Van Duysen.",
};

const HOTSPOTS = [
  {
    title: "Wooden Table",
    price: "$799",
    href: "/product/stockhold-oakwood-table",
    thumb: "/sites/eskil/2022/04/h3-item-02.jpg",
    top: "51%",
    left: "32%",
  },
  {
    title: "Ceramic Vase",
    price: "$299",
    href: "/product/gift-box-handmade-venus-candle-and-minimal-vase",
    thumb: "/sites/eskil/2022/04/h3-item-01.jpg",
    top: "50%",
    left: "50%",
  },
  {
    title: "Satin Armchair",
    price: "$599",
    href: "/product/swedish-lounge-armchair",
    thumb: "/sites/eskil/2022/04/h3-item-03.jpg",
    top: "68%",
    left: "75%",
  },
];

export default function FurnitureStorePage() {
  return (
    <div>
      {/* Hero — room scene with shoppable hotspots, as on the source */}
      <section aria-label="Featured room">
        <HeroHotspots hotspots={HOTSPOTS} />
      </section>

      {/* Designer collections */}
      {HOME_COLLECTIONS.map((collection, ci) => {
        const products = collection.slugs
          .map((s) => productBySlug(s))
          .filter((p): p is NonNullable<typeof p> => Boolean(p));
        return (
          <section
            key={collection.title}
            className={ci % 2 === 1 ? "bg-[#f7f6f4]" : "bg-white"}
          >
            <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
              <Reveal className="mb-10 text-center">
                <h2 className="eskil-display text-[32px] leading-tight text-black md:text-[40px]">
                  {collection.title}
                </h2>
                <p className="eskil-eyebrow mt-3">{collection.designer}</p>
              </Reveal>
              <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
                {products.map((p, i) => (
                  <Reveal key={p.slug} delay={(i % 4) * 90}>
                    <ProductCard product={p} priority={ci === 0 && i < 4} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* BM62 Armchair feature */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1500px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <Reveal>
            <div className="relative">
              <Image
                src="/sites/eskil/2022/03/h3-img-3.jpg"
                alt="BM62 Armchair — styled interior"
                width={1200}
                height={830}
                className="w-full object-cover"
              />
              <Image
                src="/sites/eskil/2022/03/h3-img-6.jpg"
                alt="BM62 Armchair detail"
                width={600}
                height={812}
                className="absolute -bottom-10 -right-2 w-1/3 border-8 border-white object-cover shadow-xl md:-right-6"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="md:pl-6">
            <p className="eskil-eyebrow">1975-1985</p>
            <h2 className="eskil-display mt-3 text-[34px] leading-tight text-black md:text-[44px]">
              BM62 Armchair
            </h2>
            <h5 className="mt-4 text-[17px] leading-relaxed text-[#555]">
              Lorem ipsum dolorsit, consectetur adipiscing elit. Ut elit tellus
            </h5>
            <h3 className="eskil-display mt-6 text-[26px] leading-snug text-black md:text-[30px]">
              Live in comfort and luxury, get our quality design furniture &amp;
              custom-made décor, we guarantee you won’t regret it!
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-[#777]">
              *Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <Link href="/about-us" className="eskil-btn mt-8">
              View more
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Customer satisfaction band */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 md:grid-cols-2 md:px-6 md:py-20">
          <Reveal className="flex items-start gap-5">
            <Image
              src="/sites/eskil/2022/04/h3-icon-01.png"
              alt=""
              width={64}
              height={64}
              className="h-14 w-14 shrink-0 object-contain"
            />
            <div>
              <h3 className="eskil-display text-[24px] leading-snug text-black md:text-[27px]">
                Customer satisfaction has always been our top priority. We
                guarantee full refunds, returns and product exchange.
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#777]">
                *Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis.
              </p>
              <Link href="/returns-refunds" className="eskil-btn mt-6">
                View more
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} className="flex items-start gap-5">
            <Image
              src="/sites/eskil/2022/04/h3-icon-02.png"
              alt=""
              width={64}
              height={64}
              className="h-14 w-14 shrink-0 object-contain"
            />
            <div>
              <h3 className="eskil-display text-[24px] leading-snug text-black md:text-[27px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#777]">
                Handmade pieces, natural materials and honest craftsmanship —
                made to be lived with for years.
              </p>
              <Link href="/shop" className="eskil-btn mt-6">
                Shop now
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-16 text-center md:px-6 md:py-20">
          <Reveal>
            <h3 className="eskil-display mx-auto max-w-3xl text-[26px] leading-snug text-black md:text-[32px]">
              Subscribe to our newsletter and receive the latest product news,
              stories, invitations to exclusive design events and much, much
              more.
            </h3>
            <div className="mt-8">
              <NewsletterForm />
            </div>
            <p className="mt-4 text-[13px] text-[#8a8a8a]">
              By subscribing, you accept our{" "}
              <Link href="/terms-conditions" className="text-black underline underline-offset-4">
                Privacy policy
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
