import type { Metadata } from "next";
import { productsInCategory } from "@/lib/eskil/site";
import { infoPageBySlug } from "@/lib/eskil/pages";
import { ShopGrid } from "@/components/sites/eskil/ShopGrid";

export const metadata: Metadata = {
  title: "Gift Cards – Nordvik",
  description: "Nordvik gift cards — give the gift of great design furniture.",
};

export default function GiftCardsPage() {
  const info = infoPageBySlug("gift-cards");
  return (
    <ShopGrid
      products={productsInCategory("gifts")}
      columns={3}
      sidebar="none"
      title={info?.title ?? "Gift Cards"}
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Shop", href: "/shop" },
        { label: info?.title ?? "Gift Cards" },
      ]}
    />
  );
}
