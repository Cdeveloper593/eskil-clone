import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/eskil/products";
import { ShopGrid } from "@/components/sites/eskil/ShopGrid";

export const metadata: Metadata = {
  title: "Shop – Four Columns Grid – Nordvik",
  description: "Shop furniture at Nordvik Furniture Store.",
};

export default function ShopVariantPage() {
  return (
    <ShopGrid
      products={PRODUCTS}
      columns={4}
      sidebar="none"
      title="Four Columns Grid"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: "Four Columns Grid" }]}
    />
  );
}
