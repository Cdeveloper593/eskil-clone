"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { productBySlug } from "@/lib/eskil/products";
import { useShop } from "@/components/sites/eskil/cart";
import { ProductCard } from "@/components/sites/eskil/ProductCard";
import { Reveal } from "@/components/sites/eskil/Reveal";

export default function WishlistPage() {
  const { wishlist } = useShop();
  const products = wishlist
    .map((slug) => productBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-10 md:px-8 md:py-14">
      <Reveal>
        <nav aria-label="Breadcrumb" className="text-center text-[13px] text-[#8a8a8a]">
          <Link href="/" className="transition-colors hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Wishlist</span>
        </nav>
        <h1 className="eskil-display mt-3 text-center text-[42px] leading-tight text-black md:text-[54px]">
          Wishlist
        </h1>
        <p className="mt-3 text-center text-[15px] text-[#555]">
          {products.length === 0
            ? "Save the pieces you love and find them here."
            : `${products.length} product${products.length === 1 ? "" : "s"} saved to your wishlist.`}
        </p>
      </Reveal>

      {products.length === 0 ? (
        <Reveal>
          <div className="mx-auto mt-12 max-w-2xl border border-[#e8e8e8] bg-[#f7f6f4] px-6 py-16 text-center">
            <Heart size={36} strokeWidth={1} className="mx-auto text-[#8a8a8a]" />
            <p className="eskil-display mt-5 text-[26px] text-black">
              Your wishlist is empty.
            </p>
            <p className="mt-3 text-[15px] text-[#555]">
              Tap the heart on any product to save it here.
            </p>
            <Link href="/shop" className="eskil-btn mt-7 inline-flex">
              Browse the shop
            </Link>
          </div>
        </Reveal>
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i, 7) * 40}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      )}
      <p className="mt-12 text-center text-xs text-[#8a8a8a]">
        Your wishlist is stored in your browser (localStorage).
      </p>
    </div>
  );
}
