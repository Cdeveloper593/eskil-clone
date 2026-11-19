import Image from "next/image";
import { productBySlug } from "@/lib/eskil/products";
import { ProductCard } from "@/components/sites/eskil/ProductCard";
import { Reveal } from "@/components/sites/eskil/Reveal";

export const metadata = {
  title: "Shop Metro – Eskil",
  description:
    "Eskil Shop Metro — make your household feel cozy with our furniture and decorations, in a metro tiled layout.",
};

const METRO_SLUGS = [
  "geometric-statement-piece-steel-chair-noir-powder-coating",
  "ceramic-animorph-soft-grey-vase",
  "soft-taupe-minimal-chair",
  "lagom-matte-wall-led-lamp-aluminium-steel-powder-coating",
  "gift-box-handmade-venus-candle-and-minimal-vase",
  "normani-designers-piece-chair-dark-charcoal-satin-cotton-cushion",
  "plastic-wendy-chair-with-plywood-matte-lacquer",
  "orka-handamade-concrete-candle-holders",
  "tystnad-hinna-relaxing-wooden-stool",
];

// Varied metro tile spans (desktop 3-col grid). The source metro list uses
// mixed tile sizes; the exact spans are approximated from the list order.
const TILE_SPANS = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "",
  "md:col-span-2",
  "",
  "",
  "",
  "",
];

const CLIENT_LOGOS = [
  "/sites/eskil/2022/03/client-img-1.png",
  "/sites/eskil/2022/03/client-img-2.png",
  "/sites/eskil/2022/03/client-img-3.png",
  "/sites/eskil/2022/03/client-img-4.png",
  "/sites/eskil/2022/03/client-img-5.png",
  "/sites/eskil/2022/03/client-img-6.png",
  "/sites/eskil/2022/03/client-img-7.png",
  "/sites/eskil/2022/03/client-img-08.png",
  "/sites/eskil/2022/03/client-img-9.png",
  "/sites/eskil/2022/03/client-img-10.png",
];

export default function ShopMetroPage() {
  const products = METRO_SLUGS.map((s) => productBySlug(s)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
          <Reveal className="mb-12 text-center">
            <h1 className="eskil-display mx-auto max-w-4xl text-[30px] leading-tight text-black md:text-[44px]">
              MAKE YOUR HOUSEHOLD FEEL COZY WITH OUR FURNITURE AND
              DECORATIONS
            </h1>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 90} className={TILE_SPANS[i] ?? ""}>
                <ProductCard product={p} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="border-t border-[#e8e8e8] bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-12 md:px-6">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {CLIENT_LOGOS.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Client logo ${i + 1}`}
                  width={160}
                  height={60}
                  className="h-10 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Instagram — photos are served from Instagram's CDN with expired signed URLs, so only the profile link is reproduced */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto max-w-[1500px] px-5 py-16 text-center md:px-6 md:py-20">
          <Reveal>
            <p className="eskil-eyebrow">Follow us</p>
            <h2 className="eskil-display mt-3 text-[32px] leading-tight text-black md:text-[40px]">
              #DECO_ESKIL
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
