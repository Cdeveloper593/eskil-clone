import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/eskil/products";
import { ShopGrid } from "@/components/sites/eskil/ShopGrid";

export const metadata: Metadata = {
  title: "Shop – Nordvik",
  description: "Shop furniture, chairs, sofas, lamps and home décor at Nordvik Furniture Store.",
};

export default function ShopPage() {
  return (
    <ShopGrid
      products={PRODUCTS}
      columns={4}
      sidebar="left"
      title="Shop"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Shop" }]}
    />
  );
}
