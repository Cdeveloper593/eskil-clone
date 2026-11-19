"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Trash2 } from "lucide-react";
import { formatPrice, productBySlug } from "@/lib/eskil/products";
import { useShop } from "@/components/sites/eskil/cart";
import { Reveal } from "@/components/sites/eskil/Reveal";

export default function CartPage() {
  const { lines, setQty, removeFromCart, subtotalCents, clearCart } = useShop();
  const [updated, setUpdated] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [couponMsg, setCouponMsg] = useState<string | null>(null);

  const detailed = lines
    .map((l) => ({ line: l, product: productBySlug(l.slug) }))
    .filter((d): d is { line: { slug: string; qty: number }; product: NonNullable<ReturnType<typeof productBySlug>> } => Boolean(d.product));

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-10 md:px-8 md:py-14">
      <Reveal>
        <nav aria-label="Breadcrumb" className="text-center text-[13px] text-[#8a8a8a]">
          <Link href="/" className="transition-colors hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Cart</span>
        </nav>
        <h1 className="eskil-display mt-3 text-center text-[42px] leading-tight text-black md:text-[54px]">
          Cart
        </h1>
      </Reveal>

      {detailed.length === 0 ? (
        <Reveal>
          <div className="mx-auto mt-12 max-w-2xl border border-[#e8e8e8] bg-[#f7f6f4] px-6 py-16 text-center">
            <ShoppingBag size={36} strokeWidth={1} className="mx-auto text-[#8a8a8a]" />
            <p className="eskil-display mt-5 text-[26px] text-black">
              Your cart is currently empty.
            </p>
            <Link href="/shop" className="eskil-btn mt-7 inline-flex">
              Return to shop
            </Link>
          </div>
        </Reveal>
      ) : (
        <Reveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#e8e8e8] text-[11px] font-medium uppercase tracking-[0.18em] text-[#8a8a8a]">
                    <th className="py-3 pr-3 font-medium">Product</th>
                    <th className="hidden py-3 pr-3 font-medium sm:table-cell">Price</th>
                    <th className="py-3 pr-3 font-medium">Quantity</th>
                    <th className="py-3 pr-3 text-right font-medium">Subtotal</th>
                    <th className="py-3 font-medium"><span className="sr-only">Remove</span></th>
                  </tr>
                </thead>
                <tbody>
                  {detailed.map(({ line, product }) => (
                    <tr key={line.slug} className="border-b border-[#e8e8e8] align-middle">
                      <td className="py-5 pr-3">
                        <div className="flex items-center gap-4">
                          {product.images[0] && (
                            <Link href={`/product/${product.slug}`} className="hidden w-20 shrink-0 overflow-hidden bg-[#f7f6f4] sm:block">
                              <Image
                                src={product.images[0]}
                                alt={product.name}
                                width={160}
                                height={160}
                                className="aspect-square w-full object-cover"
                              />
                            </Link>
                          )}
                          <Link href={`/product/${product.slug}`} className="eskil-display text-[17px] leading-snug text-black transition-opacity hover:opacity-70">
                            {product.name}
                          </Link>
                        </div>
                      </td>
                      <td className="hidden py-5 pr-3 text-[15px] text-[#555] sm:table-cell">
                        {formatPrice(Number(product.price))}
                      </td>
                      <td className="py-5 pr-3">
                        <div className="flex h-11 w-[110px] items-stretch border border-[#e8e8e8]">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => setQty(line.slug, line.qty - 1)}
                            className="w-8 text-black transition-colors hover:bg-black hover:text-white"
                          >
                            −
                          </button>
                          <span className="flex flex-1 items-center justify-center border-x border-[#e8e8e8] text-sm text-black">
                            {line.qty}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => setQty(line.slug, Math.min(99, line.qty + 1))}
                            className="w-8 text-black transition-colors hover:bg-black hover:text-white"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-5 pr-3 text-right text-[15px] font-medium text-black">
                        {formatPrice(Number(product.price) * line.qty)}
                      </td>
                      <td className="py-5 text-right">
                        <button
                          type="button"
                          aria-label={`Remove ${product.name} from cart`}
                          onClick={() => removeFromCart(line.slug)}
                          className="text-[#8a8a8a] transition-colors hover:text-black"
                        >
                          <Trash2 size={16} strokeWidth={1.5} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <form
                  className="flex flex-1 flex-wrap gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setCouponMsg(
                      coupon.trim()
                        ? `Coupon “${coupon.trim()}” is not valid in this demo — no discounts are applied.`
                        : "Enter a coupon code first.",
                    );
                  }}
                >
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Coupon code"
                    aria-label="Coupon code"
                    className="min-w-[160px] flex-1 border border-[#e8e8e8] px-4 py-3 text-sm outline-none focus:border-black sm:max-w-[220px]"
                  />
                  <button type="submit" className="eskil-btn eskil-btn--outline">
                    Apply coupon
                  </button>
                </form>
                <button
                  type="button"
                  onClick={() => {
                    setUpdated(true);
                    window.setTimeout(() => setUpdated(false), 2600);
                  }}
                  className="eskil-btn eskil-btn--outline"
                >
                  Update cart
                </button>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#8a8a8a] underline underline-offset-4 hover:text-black"
                >
                  Clear cart
                </button>
              </div>
              {updated && (
                <p className="mt-4 border border-[#e8e8e8] bg-[#f7f6f4] px-4 py-3 text-sm text-black">
                  Cart updated.
                </p>
              )}
              {couponMsg && (
                <p className="mt-4 border border-[#e8e8e8] bg-[#f7f6f4] px-4 py-3 text-sm text-black">
                  {couponMsg}
                </p>
              )}
            </div>

            <aside className="h-fit border border-[#e8e8e8] bg-[#f7f6f4] p-7">
              <h2 className="eskil-display text-[24px] text-black">Cart totals</h2>
              <div className="mt-5 space-y-3 border-b border-[#e8e8e8] pb-5 text-[15px]">
                <p className="flex justify-between">
                  <span className="text-[#555]">Subtotal</span>
                  <span className="font-medium text-black">{formatPrice(subtotalCents)}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#555]">Shipping</span>
                  <span className="text-black">Calculated at checkout</span>
                </p>
              </div>
              <p className="mt-5 flex justify-between text-lg">
                <span className="font-medium text-black">Total</span>
                <span className="font-medium text-black">{formatPrice(subtotalCents)}</span>
              </p>
              <Link href="/checkout" className="eskil-btn mt-6 w-full">
                Proceed to checkout
              </Link>
              <p className="mt-4 text-center text-xs leading-relaxed text-[#8a8a8a]">
                Demo checkout — no payment is processed and no order is placed.
                Your cart is stored in your browser (localStorage).
              </p>
            </aside>
          </div>
        </Reveal>
      )}
    </div>
  );
}
