"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Heart, ShoppingBag, X } from "lucide-react";
import { formatPrice, productBySlug, type Product } from "@/lib/eskil/products";
import { useShop } from "./cart";

function Stars({ rating }: { rating: number }) {
  if (!rating) return null;
  const full = Math.round(rating);
  return (
    <span className="text-[11px] tracking-[0.2em] text-black" aria-label={`Rated ${rating} out of 5`}>
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
    </span>
  );
}

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const { addToCart, toggleWishlist, isWishlisted, setQuickViewSlug } = useShop();
  const main = product.images[0];
  const alt = product.images[1] ?? product.images[0];
  const wished = isWishlisted(product.slug);
  return (
    <article className="eskil-card group">
      <div className="relative overflow-hidden bg-[#f7f6f4]">
        <Link href={`/product/${product.slug}`} aria-label={product.name}>
          {main ? (
            <>
              <Image
                src={main}
                alt={product.name}
                width={650}
                height={650}
                priority={priority}
                className="eskil-card-img-main aspect-square w-full object-cover"
              />
              {alt && alt !== main && (
                <Image
                  src={alt}
                  alt=""
                  width={650}
                  height={650}
                  className="eskil-card-img-alt absolute inset-0 aspect-square w-full object-cover"
                />
              )}
            </>
          ) : (
            <div className="aspect-square w-full" />
          )}
        </Link>
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
        <div className="eskil-card-actions absolute inset-x-0 bottom-0 flex items-stretch justify-center gap-px bg-white/95">
          <button
            type="button"
            onClick={() => addToCart(product.slug)}
            disabled={!product.inStock}
            className="flex flex-1 items-center justify-center gap-2 px-2 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white disabled:opacity-40"
          >
            <ShoppingBag size={14} strokeWidth={1.5} /> Add to cart
          </button>
          <button
            type="button"
            onClick={() => toggleWishlist(product.slug)}
            aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
            className={`flex w-11 items-center justify-center transition-colors hover:bg-black hover:text-white ${wished ? "text-black" : "text-black"}`}
          >
            <Heart size={15} strokeWidth={1.5} fill={wished ? "currentColor" : "none"} />
          </button>
          <button
            type="button"
            onClick={() => setQuickViewSlug(product.slug)}
            aria-label="Quick view"
            className="flex w-11 items-center justify-center text-black transition-colors hover:bg-black hover:text-white"
          >
            <Eye size={15} strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <div className="pt-4 text-center">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[#8a8a8a]">
          {product.categories.map((c) => c.name).join(" / ") || "Furniture"}
        </p>
        <h3 className="eskil-display mt-1 text-[19px] leading-snug text-black">
          <Link href={`/product/${product.slug}`} className="transition-opacity hover:opacity-70">
            {product.name}
          </Link>
        </h3>
        <div className="mt-1 flex items-center justify-center gap-2">
          <Stars rating={product.rating} />
          {product.reviewCount > 0 && (
            <span className="text-xs text-[#8a8a8a]">({product.reviewCount})</span>
          )}
        </div>
        <p className="mt-1 text-[15px] text-black">
          {product.onSale && product.salePrice != null && product.salePrice < product.regularPrice ? (
            <>
              <span className="mr-2 text-[#8a8a8a] line-through">{formatPrice(product.regularPrice)}</span>
              {formatPrice(product.salePrice)}
            </>
          ) : (
            formatPrice(product.price)
          )}
        </p>
      </div>
    </article>
  );
}

export function QuickViewModal() {
  const { quickViewSlug, setQuickViewSlug, addToCart, toggleWishlist, isWishlisted } = useShop();
  const product = quickViewSlug ? productBySlug(quickViewSlug) : undefined;
  if (!product) return null;
  const wished = isWishlisted(product.slug);
  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Quick view: ${product.name}`}
    >
      <button
        type="button"
        aria-label="Close quick view"
        onClick={() => setQuickViewSlug(null)}
        className="absolute inset-0 bg-black/50"
      />
      <div className="eskil-fade-in relative grid max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-white md:grid-cols-2">
        <button
          type="button"
          aria-label="Close"
          onClick={() => setQuickViewSlug(null)}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center bg-white text-black transition-colors hover:bg-black hover:text-white"
        >
          <X size={16} />
        </button>
        <div className="relative bg-[#f7f6f4]">
          {product.images[0] && (
            <Image
              src={product.images[0]}
              alt={product.name}
              width={650}
              height={650}
              className="aspect-square w-full object-cover"
            />
          )}
        </div>
        <div className="flex flex-col justify-center p-7 md:p-9">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#8a8a8a]">
            {product.categories.map((c) => c.name).join(" / ")}
          </p>
          <h3 className="eskil-display mt-2 text-[26px] leading-tight text-black">{product.name}</h3>
          <p className="mt-2 text-xl text-black">{formatPrice(product.price)}</p>
          <div
            className="mt-4 text-[15px] leading-relaxed text-[#555] [&_p]:mb-3"
            dangerouslySetInnerHTML={{ __html: product.shortDescription || product.description }}
          />
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              className="eskil-btn flex-1"
              disabled={!product.inStock}
              onClick={() => {
                addToCart(product.slug);
                setQuickViewSlug(null);
              }}
            >
              {product.inStock ? "Add to cart" : "Sold out"}
            </button>
            <button
              type="button"
              aria-label="Toggle wishlist"
              onClick={() => toggleWishlist(product.slug)}
              className={`flex w-12 items-center justify-center border border-black transition-colors hover:bg-black hover:text-white ${wished ? "bg-black text-white" : "text-black"}`}
            >
              <Heart size={16} fill={wished ? "currentColor" : "none"} />
            </button>
          </div>
          <Link
            href={`/product/${product.slug}`}
            onClick={() => setQuickViewSlug(null)}
            className="eskil-link-underline mt-5 self-start text-[12px] font-medium uppercase tracking-[0.2em] text-black"
          >
            View full details
          </Link>
        </div>
      </div>
    </div>
  );
}
