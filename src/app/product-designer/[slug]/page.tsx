import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCT_DESIGNERS, productDesignerBySlug } from "@/lib/eskil/archives";
import { PRODUCTS } from "@/lib/eskil/products";
import { ShopGrid } from "@/components/sites/eskil/ShopGrid";

export function generateStaticParams() {
  return PRODUCT_DESIGNERS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const archive = productDesignerBySlug(slug);
  return {
    title: archive ? `${archive.name} — Designer | Eskil` : "Designer | Eskil",
  };
}

export default async function ProductDesignerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const archive = productDesignerBySlug(slug);
  if (!archive) notFound();
  const wanted = new Set(archive.products);
  const products = PRODUCTS.filter((p) => wanted.has(p.slug));
  return (
    <ShopGrid
      products={products}
      columns={4}
      sidebar="none"
      title={archive.name}
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Shop", href: "/shop" },
        { label: archive.name },
      ]}
    />
  );
}
