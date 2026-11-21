"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Heart, ShoppingBag } from "lucide-react";
import { formatPrice, type Product } from "@/lib/eskil/products";
import { SOURCE_BASE } from "@/lib/eskil/site";
import { useShop } from "@/components/sites/eskil/cart";

/** Rewrite WP upload URLs embedded in stored description HTML to local paths.
    The source descriptions embed prikaz.png / prikaz-02.png / prikaz-03.png
    dimension diagrams, staged under public/sites/eskil — the <img> tags are
    kept so the diagrams render as on the source. */
export function localizeWpHtml(html: string): string {
  return html.replaceAll(
    "https://www.nordvikliving.com/wp-content/uploads/",
    "/sites/eskil/",
  );
}

function Stars({ rating }: { rating: number }) {
  if (!rating) return null;
  const full = Math.round(rating);
  return (
    <span
      className="text-[13px] tracking-[0.2em] text-black"
      aria-label={`Rated ${rating} out of 5`}
    >
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </span>
  );
}

function Price({ product }: { product: Product }) {
  if (
    product.onSale &&
    product.salePrice != null &&
    Number(product.salePrice) < Number(product.regularPrice)
  ) {
    return (
      <p className="text-[26px] text-black">
        <span className="mr-3 text-[#8a8a8a] line-through">
          {formatPrice(Number(product.regularPrice))}
        </span>
        {formatPrice(Number(product.salePrice))}
      </p>
    );
  }
  return (
    <p className="text-[26px] text-black">{formatPrice(Number(product.price))}</p>
  );
}

function QtyStepper({
  qty,
  setQty,
  disabled = false,
}: {
  qty: number;
  setQty: (q: number) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex h-[52px] items-stretch border border-[#e8e8e8]">
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={disabled || qty <= 1}
        onClick={() => setQty(Math.max(1, qty - 1))}
        className="w-11 text-lg text-black transition-colors hover:bg-black hover:text-white disabled:opacity-40"
      >
        −
      </button>
      <span className="flex w-12 items-center justify-center border-x border-[#e8e8e8] text-[15px] text-black">
        {qty}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        disabled={disabled}
        onClick={() => setQty(Math.min(99, qty + 1))}
        className="w-11 text-lg text-black transition-colors hover:bg-black hover:text-white disabled:opacity-40"
      >
        +
      </button>
    </div>
  );
}

const GROUPED_COMPONENTS = ["Chair", "Table", "Pendant"];

export function ProductDetail({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWishlisted, setCartOpen } = useShop();
  const [imageIdx, setImageIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"description" | "additional" | "reviews">(
    "description",
  );
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(
    {},
  );
  const [compared, setCompared] = useState(false);
  const [groupQtys, setGroupQtys] = useState<Record<string, number>>({
    Chair: 1,
    Table: 1,
    Pendant: 1,
  });
  const [reviewSent, setReviewSent] = useState(false);

  const wished = isWishlisted(product.slug);
  const images = product.images.length > 0 ? product.images : [];
  const mainImage = images[imageIdx] ?? images[0];
  const isVariable = product.type === "variable";
  const isGrouped = product.type === "grouped";
  const isExternal = product.type === "external";
  const isCountdown = product.slug === "rosale-de-ville-rattan-collectors-chair";
  const multiAttributes = product.attributes.filter((a) => a.terms.length > 1);

  const addGroupedToCart = () => {
    const total = GROUPED_COMPONENTS.reduce(
      (sum, name) => sum + (groupQtys[name] ?? 0),
      0,
    );
    addToCart(product.slug, Math.max(1, total));
    setCartOpen(true);
  };

  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Gallery */}
        <div>
          <div className="relative overflow-hidden bg-[#f7f6f4]">
            {mainImage && (
              <Image
                key={mainImage}
                src={mainImage}
                alt={product.name}
                width={900}
                height={900}
                priority
                className="eskil-fade-in aspect-square w-full object-cover"
              />
            )}
            {product.onSale && (
              <span className="absolute left-4 top-4 bg-black px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white">
                Sale
              </span>
            )}
            {!product.inStock && (
              <span className="absolute left-4 top-4 bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-black">
                Sold out
              </span>
            )}
            {isCountdown && (
              <span className="absolute right-4 top-4 bg-black px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white">
                Limited time offer
              </span>
            )}
          </div>
          {images.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6">
              {images.map((src, i) => (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  onClick={() => setImageIdx(i)}
                  aria-label={`View image ${i + 1}`}
                  aria-pressed={i === imageIdx}
                  className={`overflow-hidden bg-[#f7f6f4] transition-all ${
                    i === imageIdx
                      ? "ring-2 ring-black ring-offset-2"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    width={200}
                    height={200}
                    className="aspect-square w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Summary */}
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#8a8a8a]">
            {product.categories.map((c) => c.name).join(" / ")}
          </p>
          <h1 className="eskil-display mt-2 text-[34px] leading-tight text-black md:text-[42px]">
            {product.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <Stars rating={product.rating} />
            {product.reviewCount > 0 ? (
              <a
                href="#reviews"
                onClick={() => setTab("reviews")}
                className="text-sm text-[#8a8a8a] underline underline-offset-4 hover:text-black"
              >
                ({product.reviewCount} customer review
                {product.reviewCount === 1 ? "" : "s"})
              </a>
            ) : (
              <span className="text-sm text-[#8a8a8a]">(0 customer reviews)</span>
            )}
          </div>
          <div className="mt-4">
            <Price product={product} />
          </div>
          {product.shortDescription && (
            <div
              className="eskil-content mt-5 text-[15px]"
              dangerouslySetInnerHTML={{
                __html: localizeWpHtml(product.shortDescription),
              }}
            />
          )}
          {!product.inStock && (
            <p className="mt-5 inline-block bg-[#f7f6f4] px-4 py-2 text-[12px] font-medium uppercase tracking-[0.2em] text-black">
              Out of stock
            </p>
          )}

          {/* Variable options */}
          {isVariable && multiAttributes.length > 0 && (
            <div className="mt-7 space-y-5">
              {multiAttributes.map((attr) => {
                const label = attr.name.replace(/:$/, "");
                const selected = selectedOptions[label];
                return (
                  <div key={attr.name}>
                    <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-black">
                      {label}
                      {selected && (
                        <span className="ml-2 font-normal normal-case tracking-normal text-[#8a8a8a]">
                          — {selected}
                        </span>
                      )}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {attr.terms.map((term) => (
                        <button
                          key={term}
                          type="button"
                          onClick={() =>
                            setSelectedOptions((prev) => ({
                              ...prev,
                              [label]: term,
                            }))
                          }
                          aria-pressed={selected === term}
                          className={`border px-4 py-2.5 text-sm transition-colors ${
                            selected === term
                              ? "border-black bg-black text-white"
                              : "border-[#e8e8e8] text-black hover:border-black"
                          }`}
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
              <p className="text-sm text-[#8a8a8a]">
                Select an option above — the listed price is the base price;
                variations do not change the price in the source data.
              </p>
            </div>
          )}

          {/* Grouped items */}
          {isGrouped && (
            <div className="mt-7 border border-[#e8e8e8]">
              <p className="border-b border-[#e8e8e8] bg-[#f7f6f4] px-5 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-black">
                This product includes
              </p>
              <ul className="divide-y divide-[#e8e8e8]">
                {GROUPED_COMPONENTS.map((name) => (
                  <li
                    key={name}
                    className="flex items-center justify-between gap-4 px-5 py-4"
                  >
                    <span className="text-[15px] text-black">
                      {name}{" "}
                      <span className="text-[#8a8a8a]">
                        — part of the {product.name}
                      </span>
                    </span>
                    <QtyStepper
                      qty={groupQtys[name] ?? 1}
                      setQty={(q) =>
                        setGroupQtys((prev) => ({ ...prev, [name]: q }))
                      }
                    />
                  </li>
                ))}
              </ul>
              <p className="border-t border-[#e8e8e8] px-5 py-3 text-sm text-[#8a8a8a]">
                The chair, table and pendant are sold together as one set for{" "}
                {formatPrice(Number(product.price))}. Individual component
                prices are not listed in the source data.
              </p>
            </div>
          )}

          {/* Purchase actions */}
          <div className="mt-8">
            {isExternal ? (
              <a
                href={`${SOURCE_BASE}/product/${product.slug}/`}
                target="_blank"
                rel="noreferrer"
                className="eskil-btn w-full sm:w-auto"
              >
                Buy product
              </a>
            ) : isGrouped ? (
              <button
                type="button"
                onClick={addGroupedToCart}
                disabled={!product.inStock}
                className="eskil-btn w-full sm:w-auto"
              >
                <ShoppingBag size={14} strokeWidth={1.5} /> Add all to cart
              </button>
            ) : (
              <div className="flex flex-wrap items-stretch gap-3">
                <QtyStepper qty={qty} setQty={setQty} disabled={!product.inStock} />
                <button
                  type="button"
                  onClick={() => {
                    addToCart(product.slug, qty);
                    setCartOpen(true);
                  }}
                  disabled={!product.inStock}
                  className="eskil-btn flex-1"
                >
                  <ShoppingBag size={14} strokeWidth={1.5} />
                  {product.inStock ? "Add to cart" : "Out of stock"}
                </button>
              </div>
            )}
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => toggleWishlist(product.slug)}
                className={`flex items-center gap-2 border px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors hover:bg-black hover:text-white ${
                  wished ? "border-black bg-black text-white" : "border-black text-black"
                }`}
              >
                <Heart size={14} fill={wished ? "currentColor" : "none"} />
                {wished ? "Wishlisted" : "Add to wishlist"}
              </button>
              <button
                type="button"
                onClick={() => setCompared((v) => !v)}
                aria-pressed={compared}
                className={`flex items-center gap-2 border px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors hover:bg-black hover:text-white ${
                  compared ? "border-black bg-black text-white" : "border-black text-black"
                }`}
              >
                {compared && <Check size={14} />}
                {compared ? "Added to compare" : "Compare"}
              </button>
            </div>
          </div>

          {/* Meta */}
          <div className="mt-8 space-y-2 border-t border-[#e8e8e8] pt-6 text-[15px] text-[#555]">
            <p>
              <span className="font-medium text-black">SKU:</span> {product.sku}
            </p>
            <p>
              <span className="font-medium text-black">Categories:</span>{" "}
              {product.categories.map((c, i) => (
                <span key={c.slug}>
                  {i > 0 && ", "}
                  <Link
                    href={`/product-category/${c.slug}`}
                    className="underline underline-offset-4 hover:text-black"
                  >
                    {c.name}
                  </Link>
                </span>
              ))}
            </p>
            {product.tags.length > 0 && (
              <p>
                <span className="font-medium text-black">Tags:</span>{" "}
                {product.tags.map((tag, i) => (
                  <span key={tag}>
                    {i > 0 && ", "}
                    <a
                      href={`/product-tag/${tag}`}
                      className="underline underline-offset-4 hover:text-black"
                    >
                      {tag}
                    </a>
                  </span>
                ))}
              </p>
            )}
            <p>
              <span className="font-medium text-black">Type:</span>{" "}
              {product.type === "simple"
                ? "Simple product"
                : product.type === "variable"
                  ? "Variable product"
                  : product.type === "grouped"
                    ? "Grouped product"
                    : "External / Affiliate product"}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div id="reviews" className="mt-16">
        <div
          role="tablist"
          aria-label="Product information"
          className="flex flex-wrap gap-px border-b border-[#e8e8e8]"
        >
          {(
            [
              ["description", "Description"],
              ["additional", "Additional Information"],
              ["reviews", `Reviews (${product.reviewCount})`],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              onClick={() => setTab(key)}
              className={`border-b-2 px-5 py-3 text-[12px] font-medium uppercase tracking-[0.18em] transition-colors ${
                tab === key
                  ? "border-black text-black"
                  : "border-transparent text-[#8a8a8a] hover:text-black"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="py-10">
          {tab === "description" && (
            <div
              className="eskil-content max-w-3xl"
              dangerouslySetInnerHTML={{
                __html: localizeWpHtml(product.description),
              }}
            />
          )}
          {tab === "additional" && (
            <table className="w-full max-w-3xl border-collapse text-[15px]">
              <tbody>
                {product.attributes.map((attr) => (
                  <tr key={attr.name} className="border-b border-[#e8e8e8]">
                    <th className="w-40 py-3 pr-4 text-left font-medium text-black">
                      {attr.name.replace(/:$/, "")}
                    </th>
                    <td className="py-3 text-[#555]">{attr.terms.join(", ")}</td>
                  </tr>
                ))}
                <tr className="border-b border-[#e8e8e8]">
                  <th className="w-40 py-3 pr-4 text-left font-medium text-black">
                    Weight
                  </th>
                  <td className="py-3 text-[#555]">
                    {product.attributes.find((a) =>
                      a.name.toUpperCase().startsWith("WEIGHT"),
                    )?.terms.join(", ") ?? "—"}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          {tab === "reviews" && (
            <div className="max-w-3xl">
              <h3 className="eskil-display text-[24px] text-black">
                {product.reviewCount > 0
                  ? `${product.reviewCount} review${product.reviewCount === 1 ? "" : "s"} for “${product.name}”`
                  : `Reviews for “${product.name}”`}
              </h3>
              {product.reviewCount > 0 ? (
                <p className="mt-3 text-[15px] leading-relaxed text-[#555]">
                  This product is rated {product.rating} out of 5 based on{" "}
                  {product.reviewCount} review
                  {product.reviewCount === 1 ? "" : "s"} on the source store.
                  The review text itself is not included in the staged product
                  data, so individual reviews cannot be shown here.
                </p>
              ) : (
                <p className="mt-3 text-[15px] leading-relaxed text-[#555]">
                  There are no reviews yet.
                </p>
              )}
              {reviewSent ? (
                <p className="mt-8 border border-[#e8e8e8] bg-[#f7f6f4] px-5 py-4 text-[15px] text-black">
                  Thank you — your review has been submitted. Reviews are a
                  local demo on this clone; nothing is sent to the store.
                </p>
              ) : (
                <form
                  className="mt-8 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setReviewSent(true);
                  }}
                >
                  <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-black">
                    Be the first to review “{product.name}”
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm text-[#555]">Your name *</span>
                      <input
                        required
                        type="text"
                        className="mt-1 w-full border border-[#e8e8e8] px-4 py-3 text-sm outline-none focus:border-black"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm text-[#555]">Your email *</span>
                      <input
                        required
                        type="email"
                        className="mt-1 w-full border border-[#e8e8e8] px-4 py-3 text-sm outline-none focus:border-black"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-sm text-[#555]">Your review *</span>
                    <textarea
                      required
                      rows={4}
                      className="mt-1 w-full border border-[#e8e8e8] px-4 py-3 text-sm outline-none focus:border-black"
                    />
                  </label>
                  <button type="submit" className="eskil-btn">
                    Submit review
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
