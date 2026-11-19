"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { type Product } from "@/lib/eskil/products";
import { ProductCard } from "@/components/sites/eskil/ProductCard";

export type ShopGridFilter = {
  label: string;
  slug: string | null;
};

const FILTERS: ShopGridFilter[] = [
  { label: "All Products", slug: null },
  { label: "Coffee Tables", slug: "coffee-tables" },
  { label: "Lightning", slug: "lightning" },
  { label: "Lamps & Pendants", slug: "lamps-pendants" },
];

type SortKey = "default" | "price-asc" | "price-desc" | "name";

export function ShopGridClient({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<string | null>(null);
  const [sort, setSort] = useState<SortKey>("default");

  const visible = useMemo(() => {
    const list = filter
      ? products.filter((p) => p.categories.some((c) => c.slug === filter))
      : [...products];
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [products, filter, sort]);

  const activeLabel = FILTERS.find((f) => f.slug === filter)?.label ?? "All Products";

  return (
    <div>
      {/* Filter / sort toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e8e8e8] pb-5">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter products by category">
          {FILTERS.map((f) => (
            <button
              key={f.label}
              type="button"
              aria-pressed={filter === f.slug}
              onClick={() => setFilter(f.slug)}
              className={`px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] transition-colors ${
                filter === f.slug
                  ? "bg-black text-white"
                  : "border border-black/20 text-black hover:border-black hover:bg-black hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-[#777]">
          <ArrowUpDown size={14} strokeWidth={1.5} />
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            aria-label="Sort products"
            className="border border-black/20 bg-white px-3 py-2 text-[13px] normal-case tracking-normal text-black outline-none"
          >
            <option value="default">Default sorting</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </label>
      </div>
      <p className="mt-5 text-[13px] text-[#8a8a8a]" aria-live="polite">
        Showing {visible.length} of {products.length} products
        {filter ? ` in ${activeLabel}` : ""}
      </p>

      {visible.length === 0 ? (
        <p className="py-16 text-center text-[15px] text-[#777]">
          No products found in {activeLabel} — try another category.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
