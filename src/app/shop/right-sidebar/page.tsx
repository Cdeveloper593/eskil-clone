import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/eskil/products";
import { ShopGrid } from "@/components/sites/eskil/ShopGrid";

export const metadata: Metadata = {
  title: "Shop – Right Sidebar – Eskil",
  description: "Shop furniture at Eskil Furniture Store.",
};

export default function ShopVariantPage() {
  return (
    <ShopGrid
      products={PRODUCTS}
      columns={4}
      sidebar="right"
      title="Right Sidebar"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: "Right Sidebar" }]}
    />
  );
}
