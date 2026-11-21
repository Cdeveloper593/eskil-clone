import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CATEGORIES, categoryBySlug, productsInCategory } from "@/lib/eskil/site";
import { ShopGrid } from "@/components/sites/eskil/ShopGrid";

/* WooCommerce category permalinks are hierarchical on the source:
   child categories live under their parent (e.g.
   /product-category/best-sellers/coffee-tables/), while the flat path
   resolves to the same archive. The catch-all serves both shapes and
   resolves the leaf category. */
const NESTED: string[][] = [
  ["best-sellers", "coffee-tables"],
  ["best-sellers", "lamps-pendants"],
  ["best-sellers", "lightning"],
];

export function generateStaticParams() {
  return [
    ...CATEGORIES.map((c) => ({ slug: [c.slug] })),
    ...NESTED.map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryBySlug(slug[slug.length - 1]);
  if (!category) return { title: "Category – Nordvik" };
  return {
    title: `${category.name} – Nordvik`,
    description: `Shop ${category.name} at Nordvik Furniture Store.`,
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const category = categoryBySlug(slug[slug.length - 1]);
  if (!category) notFound();
  const parent =
    slug.length > 1 ? categoryBySlug(slug[slug.length - 2]) : undefined;
  const products = productsInCategory(category.slug);
  return (
    <ShopGrid
      products={products}
      columns={4}
      sidebar="none"
      title={category.name}
      breadcrumb={[
         { label: "Home", href: "/" },
         { label: "Shop", href: "/shop" },
        ...(parent
          ? [
             {
                label: parent.name,
                href: `/product-category/${parent.slug}`,
             },
            ]
          : []),
         { label: category.name },
      ]}
    />
  );
}






























































