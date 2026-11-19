"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ShoppingBag } from "lucide-react";
import {
  formatPrice,
  type Product,
} from "@/lib/eskil/products";
import { CATEGORIES, productsInCategory } from "@/lib/eskil/site";
import { ProductCard } from "@/components/sites/eskil/ProductCard";
import { Reveal } from "@/components/sites/eskil/Reveal";
import { useShop } from "@/components/sites/eskil/cart";

export type ShopSortKey =
  | "default"
  | "popularity"
  | "price-asc"
  | "price-desc"
  | "rating";

export type ShopLayout = "grid" | "list" | "masonry";
export type ShopSidebar = "left" | "right" | "none";

export function sortProducts(
  products: Product[],
  sort: ShopSortKey,
): Product[] {
  const list = [...products];
  switch (sort) {
    case "popularity":
      return list.sort((a, b) => b.reviewCount - a.reviewCount);
    case "price-asc":
      return list.sort((a, b) => Number(a.price) - Number(b.price));
    case "price-desc":
      return list.sort((a, b) => Number(b.price) - Number(a.price));
    case "rating":
      return list.sort((a, b) => b.rating - a.rating);
    default:
      return list;
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const GRID_COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  5: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
  6: "sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6",
};

const MASONRY_COLS: Record<number, string> = {
  2: "sm:columns-2",
  3: "sm:columns-2 lg:columns-3",
  4: "sm:columns-2 lg:columns-3 xl:columns-4",
  5: "sm:columns-2 lg:columns-3 xl:columns-5",
  6: "sm:columns-2 md:columns-3 xl:columns-6",
};

function ShopSidebar({
  maxPrice,
  priceCeil,
  onMaxPrice,
  query,
  onQuery,
}: {
  maxPrice: number;
  priceCeil: number;
  onMaxPrice: (v: number) => void;
  query: string;
  onQuery: (v: string) => void;
}) {
  return (
    <aside className="space-y-10">
      <div>
        <h3 className="eskil-display text-[20px] text-black">Search</h3>
        <form
          className="mt-4 flex border border-[#e8e8e8]"
          onSubmit={(e) => e.preventDefault()}
          role="search"
        >
          <input
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search products…"
            aria-label="Search products"
            className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-black outline-none placeholder:text-[#8a8a8a]"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex w-12 items-center justify-center text-black transition-colors hover:bg-black hover:text-white"
          >
            <Search size={16} strokeWidth={1.5} />
          </button>
        </form>
      </div>

      <div>
        <h3 className="eskil-display text-[20px] text-black">Categories</h3>
        <ul className="mt-4 space-y-2.5">
          {CATEGORIES.map((cat) => {
            const count = productsInCategory(cat.slug).length;
            if (count === 0) return null;
            return (
              <li key={cat.slug}>
                <Link
                  href={`/product-category/${cat.slug}`}
                  className="group flex items-baseline justify-between gap-2 text-[15px] text-[#555] transition-colors hover:text-black"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {cat.name}
                  </span>
                  <span className="text-xs text-[#8a8a8a]">({count})</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h3 className="eskil-display text-[20px] text-black">
          Filter by price
        </h3>
        <div className="mt-5">
          <input
            type="range"
            min={0}
            max={priceCeil}
            step={100}
            value={maxPrice}
            onChange={(e) => onMaxPrice(Number(e.target.value))}
            aria-label="Maximum price"
            className="w-full accent-black"
          />
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="text-sm text-[#555]">
              Up to <span className="font-medium text-black">{formatPrice(maxPrice)}</span>
            </p>
            {maxPrice < priceCeil && (
              <button
                type="button"
                onClick={() => onMaxPrice(priceCeil)}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-black underline underline-offset-4"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      <div>
        <h3 className="eskil-display text-[20px] text-black">Shop pages</h3>
        <ul className="mt-4 space-y-2.5 text-[15px] text-[#555]">
          <li>
            <Link href="/cart" className="transition-colors hover:text-black">
              Cart
            </Link>
          </li>
          <li>
            <Link href="/checkout" className="transition-colors hover:text-black">
              Checkout
            </Link>
          </li>
          <li>
            <Link href="/wishlist" className="transition-colors hover:text-black">
              Wishlist
            </Link>
          </li>
          <li>
            <Link href="/order-tracking" className="transition-colors hover:text-black">
              Order Tracking
            </Link>
          </li>
          <li>
            <Link href="/shop/gift-cards" className="transition-colors hover:text-black">
              Gift Cards
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

function ListRow({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const wished = isWishlisted(product.slug);
  const desc = stripHtml(product.shortDescription || product.description);
  return (
    <article className="grid gap-6 border-b border-[#e8e8e8] py-8 first:pt-0 sm:grid-cols-[220px_1fr] md:grid-cols-[280px_1fr]">
      <Link
        href={`/product/${product.slug}`}
        className="relative block overflow-hidden bg-[#f7f6f4]"
        aria-label={product.name}
      >
        {product.images[0] && (
          <Image
            src={product.images[0]}
            alt={product.name}
            width={560}
            height={560}
            className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
        {product.onSale && (
          <span className="absolute left-3 top-3 bg-black px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white">
            Sale
          </span>
        )}
        {!product.inStock && (
          <span className="absolute left-3 top-3 bg-white px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-black">
            Sold out
          </span>
        )}
      </Link>
      <div className="flex flex-col justify-center">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#8a8a8a]">
          {product.categories.map((c) => c.name).join(" / ")}
        </p>
        <h3 className="eskil-display mt-1 text-[24px] leading-snug text-black">
          <Link
            href={`/product/${product.slug}`}
            className="transition-opacity hover:opacity-70"
          >
            {product.name}
          </Link>
        </h3>
        {product.rating > 0 && (
          <p className="mt-1 text-[12px] tracking-[0.2em] text-black">
            {"★".repeat(Math.round(product.rating))}
            {"☆".repeat(5 - Math.round(product.rating))}
            <span className="ml-2 tracking-normal text-[#8a8a8a]">
              ({product.reviewCount} review{product.reviewCount === 1 ? "" : "s"})
            </span>
          </p>
        )}
        <p className="mt-2 text-lg text-black">
          {product.onSale &&
          product.salePrice != null &&
          Number(product.salePrice) < Number(product.regularPrice) ? (
            <>
              <span className="mr-2 text-[#8a8a8a] line-through">
                {formatPrice(Number(product.regularPrice))}
              </span>
              {formatPrice(Number(product.salePrice))}
            </>
          ) : (
            formatPrice(Number(product.price))
          )}
        </p>
        {desc && (
          <p className="mt-3 line-clamp-3 max-w-xl text-[15px] leading-relaxed text-[#555]">
            {desc}
          </p>
        )}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => addToCart(product.slug)}
            disabled={!product.inStock}
            className="eskil-btn"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            {product.inStock ? "Add to cart" : "Sold out"}
          </button>
          <button
            type="button"
            onClick={() => toggleWishlist(product.slug)}
            aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
            className={`flex h-12 w-12 items-center justify-center border transition-colors hover:bg-black hover:text-white ${
              wished ? "border-black bg-black text-white" : "border-black text-black"
            }`}
          >
            <Heart size={16} fill={wished ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
    </article>
  );
}

export function ShopGrid({
  products,
  columns = 4,
  layout = "grid",
  sidebar = "none",
  wide = false,
  showFilterBar = false,
  title,
  breadcrumb,
  perPage = 12,
}: {
  products: Product[];
  columns?: 2 | 3 | 4 | 5 | 6;
  layout?: ShopLayout;
  sidebar?: ShopSidebar;
  wide?: boolean;
  showFilterBar?: boolean;
  title: string;
  breadcrumb: { label: string; href?: string }[];
  perPage?: number;
}) {
  const [sort, setSort] = useState<ShopSortKey>("default");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const priceCeil = useMemo(() => {
    const max = Math.max(...products.map((p) => Number(p.price)), 0);
    return Math.ceil(max / 100) * 100;
  }, [products]);
  const [maxPrice, setMaxPrice] = useState(priceCeil);

  useEffect(() => {
    setMaxPrice(priceCeil);
  }, [priceCeil]);

  useEffect(() => {
    setPage(1);
  }, [sort, query, maxPrice, activeCategory]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sortProducts(
      products.filter((p) => {
        if (activeCategory && !p.categories.some((c) => c.slug === activeCategory))
          return false;
        if (Number(p.price) > maxPrice) return false;
        if (
          q &&
          !`${p.name} ${p.categories.map((c) => c.name).join(" ")} ${p.tags.join(" ")}`
            .toLowerCase()
            .includes(q)
        )
          return false;
        return true;
      }),
      sort,
    );
  }, [products, sort, query, maxPrice, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = Math.min(page, totalPages);
  const pageItems = filtered.slice((safePage - 1) * perPage, safePage * perPage);
  const from = filtered.length === 0 ? 0 : (safePage - 1) * perPage + 1;
  const to = Math.min(safePage * perPage, filtered.length);

  const filterCategories = useMemo(() => {
    const seen = new Map<string, { slug: string; name: string; count: number }>();
    for (const p of products) {
      for (const c of p.categories) {
        const entry = seen.get(c.slug) ?? { slug: c.slug, name: c.name, count: 0 };
        entry.count += 1;
        seen.set(c.slug, entry);
      }
    }
    return [...seen.values()].sort((a, b) => b.count - a.count);
  }, [products]);

  const sidebarEl = sidebar !== "none" && (
    <div className="lg:w-[260px] lg:shrink-0 xl:w-[280px]">
      <ShopSidebar
        maxPrice={maxPrice}
        priceCeil={priceCeil}
        onMaxPrice={setMaxPrice}
        query={query}
        onQuery={setQuery}
      />
    </div>
  );

  return (
    <div className={wide ? "w-full px-4 py-10 md:px-10 md:py-14" : "mx-auto w-full max-w-[1400px] px-4 py-10 md:px-8 md:py-14"}>
      <Reveal>
        <nav aria-label="Breadcrumb" className="text-center text-[13px] text-[#8a8a8a]">
          {breadcrumb.map((crumb, i) => (
            <span key={`${crumb.label}-${i}`}>
              {i > 0 && <span className="mx-2">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="transition-colors hover:text-black">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-black">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="eskil-display mt-3 text-center text-[42px] leading-tight text-black md:text-[54px]">
          {title}
        </h1>
      </Reveal>

      {showFilterBar && (
        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors ${
                activeCategory === null
                  ? "border-black bg-black text-white"
                  : "border-[#e8e8e8] text-black hover:border-black"
              }`}
            >
              All ({products.length})
            </button>
            {filterCategories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() =>
                  setActiveCategory(activeCategory === cat.slug ? null : cat.slug)
                }
                className={`border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors ${
                  activeCategory === cat.slug
                    ? "border-black bg-black text-white"
                    : "border-[#e8e8e8] text-black hover:border-black"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </Reveal>
      )}

      <div
        className={`mt-10 flex flex-col gap-10 lg:flex-row ${
          sidebar === "right" ? "lg:flex-row-reverse" : ""
        }`}
      >
        {sidebarEl}
        <div className="min-w-0 flex-1">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e8e8e8] pb-5">
              <p className="text-sm text-[#555]">
                Showing {from}–{to} of {filtered.length} result
                {filtered.length === 1 ? "" : "s"}
              </p>
              <label className="flex items-center gap-3 text-sm text-[#555]">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-black">
                  Sort by
                </span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as ShopSortKey)}
                  aria-label="Sort products"
                  className="border border-[#e8e8e8] bg-white px-3 py-2.5 text-sm text-black outline-none focus:border-black"
                >
                  <option value="default">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="price-asc">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
              </label>
            </div>
          </Reveal>

          {pageItems.length === 0 ? (
            <Reveal>
              <div className="border border-[#e8e8e8] bg-[#f7f6f4] px-6 py-14 text-center">
                <p className="eskil-display text-[24px] text-black">
                  No products were found matching your selection.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setMaxPrice(priceCeil);
                    setActiveCategory(null);
                  }}
                  className="eskil-btn mt-6"
                >
                  Clear filters
                </button>
              </div>
            </Reveal>
          ) : layout === "list" ? (
            <div className="mt-8">
              {pageItems.map((p, i) => (
                <Reveal key={p.slug} delay={Math.min(i, 5) * 40}>
                  <ListRow product={p} />
                </Reveal>
              ))}
            </div>
          ) : layout === "masonry" ? (
            <div className={`mt-8 columns-1 gap-6 ${MASONRY_COLS[columns] ?? ""}`}>
              {pageItems.map((p, i) => (
                <div key={p.slug} className="mb-6 break-inside-avoid">
                  <Reveal delay={Math.min(i, 5) * 40}>
                    <ProductCard product={p} />
                  </Reveal>
                </div>
              ))}
            </div>
          ) : (
            <div className={`mt-8 grid grid-cols-1 gap-x-6 gap-y-12 ${GRID_COLS[columns] ?? ""}`}>
              {pageItems.map((p, i) => (
                <Reveal key={p.slug} delay={Math.min(i, 7) * 40}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <nav
              aria-label="Pagination"
              className="mt-12 flex flex-wrap items-center justify-center gap-2"
            >
              <button
                type="button"
                disabled={safePage <= 1}
                onClick={() => setPage(safePage - 1)}
                className="border border-[#e8e8e8] px-4 py-2.5 text-[12px] font-medium uppercase tracking-[0.15em] text-black transition-colors hover:border-black disabled:opacity-40"
              >
                ← Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  aria-current={n === safePage ? "page" : undefined}
                  className={`flex h-11 w-11 items-center justify-center border text-sm transition-colors ${
                    n === safePage
                      ? "border-black bg-black text-white"
                      : "border-[#e8e8e8] text-black hover:border-black"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                disabled={safePage >= totalPages}
                onClick={() => setPage(safePage + 1)}
                className="border border-[#e8e8e8] px-4 py-2.5 text-[12px] font-medium uppercase tracking-[0.15em] text-black transition-colors hover:border-black disabled:opacity-40"
              >
                Next →
              </button>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
