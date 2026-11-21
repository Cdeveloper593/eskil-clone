import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/eskil/products";
import { ShopGrid } from "@/components/sites/eskil/ShopGrid";

export const metadata: Metadata = {
  title: "Shop – No Sidebar – Nordvik",
  description: "Shop furniture at Nordvik Furniture Store.",
};

export default function ShopVariantPage() {
  return (
    <ShopGrid
      products={PRODUCTS}
      columns={4}
      sidebar="none"
      title="No Sidebar"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: "No Sidebar" }]}
    />
  );
}
