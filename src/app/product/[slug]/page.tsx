import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCTS, productBySlug } from "@/lib/eskil/products";
import { ProductCard } from "@/components/sites/eskil/ProductCard";
import { ProductDetail } from "@/components/sites/eskil/ProductDetail";
import { Reveal } from "@/components/sites/eskil/Reveal";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return { title: "Product – Eskil" };
  return {
    title: `${product.name} – Eskil`,
    description: product.shortDescription.replace(/<[^>]*>/g, " ").trim(),
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const related = PRODUCTS.filter(
    (p) =>
      p.slug !== product.slug &&
      p.categories.some((c) => c.slug === product.categories[0]?.slug),
  ).slice(0, 4);

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-10 md:px-8 md:py-14">
      <Reveal>
        <nav aria-label="Breadcrumb" className="text-[13px] text-[#8a8a8a]">
          <Link href="/" className="transition-colors hover:text-black">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="transition-colors hover:text-black">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black">{product.name}</span>
        </nav>
      </Reveal>

      <div className="mt-8">
        <ProductDetail product={product} />
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <Reveal>
            <p className="eskil-eyebrow text-center">You may also like</p>
            <h2 className="eskil-display mt-2 text-center text-[34px] text-black">
              Related products
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
