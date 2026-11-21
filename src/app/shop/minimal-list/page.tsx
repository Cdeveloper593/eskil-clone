import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/eskil/products";
import { ShopGrid } from "@/components/sites/eskil/ShopGrid";

export const metadata: Metadata = {
  title: "Shop – Minimal List – Nordvik",
  description: "Shop furniture at Nordvik Furniture Store.",
};

export default function ShopVariantPage() {
  return (
    <ShopGrid
      products={PRODUCTS}
      columns={4}
      layout="list"
      sidebar="none"
      title="Minimal List"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: "Minimal List" }]}
    />
  );
}
