"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { formatPrice, productBySlug } from "@/lib/eskil/products";
import { useShop } from "@/components/sites/eskil/cart";
import { Reveal } from "@/components/sites/eskil/Reveal";

const PAYMENT_METHODS = [
  { id: "bacs", label: "Direct bank transfer", note: "Make your payment directly into our bank account. Please use your Order ID as the payment reference." },
  { id: "cheque", label: "Check payments", note: "Please send a check to our store address." },
  { id: "cod", label: "Cash on delivery", note: "Pay with cash upon delivery." },
  { id: "paypal", label: "PayPal", note: "Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account." },
] as const;

type PaymentId = (typeof PAYMENT_METHODS)[number]["id"];

const inputCls =
  "mt-1 w-full border border-[#e8e8e8] px-4 py-3 text-sm text-black outline-none focus:border-black";

export default function CheckoutPage() {
  const { lines, subtotalCents, clearCart } = useShop();
  const [payment, setPayment] = useState<PaymentId>("bacs");
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState("");

  const detailed = lines
    .map((l) => ({ line: l, product: productBySlug(l.slug) }))
    .filter((d): d is { line: { slug: string; qty: number }; product: NonNullable<ReturnType<typeof productBySlug>> } => Boolean(d.product));

  const placeOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const num = `ESK-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(num);
    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-10 md:px-8 md:py-14">
      <Reveal>
        <nav aria-label="Breadcrumb" className="text-center text-[13px] text-[#8a8a8a]">
          <Link href="/" className="transition-colors hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/cart" className="transition-colors hover:text-black">Cart</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Checkout</span>
        </nav>
        <h1 className="eskil-display mt-3 text-center text-[42px] leading-tight text-black md:text-[54px]">
          Checkout
        </h1>
      </Reveal>

      {orderNumber ? (
        <Reveal>
          <div className="mx-auto mt-12 max-w-2xl border border-[#e8e8e8] bg-[#f7f6f4] px-6 py-14 text-center">
            <CheckCircle2 size={40} strokeWidth={1} className="mx-auto text-black" />
            <p className="eskil-eyebrow mt-5">Thank you. Your order has been received.</p>
            <h2 className="eskil-display mt-3 text-[30px] text-black">
              Order {orderNumber}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#555]">
              {customerName ? `${customerName}, thank` : "Thank"} you for your
              order. This is a local demo — no payment was processed, no order
              was sent to the store, and nothing was charged. Your cart has
              been cleared.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/shop" className="eskil-btn">Continue shopping</Link>
              <Link href="/order-tracking" className="eskil-btn eskil-btn--outline">
                Track order
              </Link>
            </div>
          </div>
        </Reveal>
      ) : detailed.length === 0 ? (
        <Reveal>
          <div className="mx-auto mt-12 max-w-2xl border border-[#e8e8e8] bg-[#f7f6f4] px-6 py-14 text-center">
            <p className="eskil-display text-[26px] text-black">
              Your checkout is empty.
            </p>
            <p className="mt-3 text-[15px] text-[#555]">
              Add something to your cart before checking out.
            </p>
            <Link href="/shop" className="eskil-btn mt-7 inline-flex">
              Return to shop
            </Link>
          </div>
        </Reveal>
      ) : (
        <form onSubmit={placeOrder}>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_380px]">
            <div className="space-y-10">
              <section>
                <h2 className="eskil-display text-[26px] text-black">Billing details</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm text-[#555]">First name *</span>
                    <input
                      required
                      type="text"
                      autoComplete="given-name"
                      className={inputCls}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm text-[#555]">Last name *</span>
                    <input required type="text" autoComplete="family-name" className={inputCls} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-sm text-[#555]">Company name (optional)</span>
                    <input type="text" autoComplete="organization" className={inputCls} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-sm text-[#555]">Country / Region *</span>
                    <select required defaultValue="United States (US)" className={inputCls}>
                      <option>United States (US)</option>
                      <option>United Kingdom (UK)</option>
                      <option>Canada</option>
                      <option>Australia</option>
                      <option>Germany</option>
                      <option>France</option>
                      <option>Italy</option>
                      <option>Spain</option>
                      <option>Netherlands</option>
                      <option>Sweden</option>
                      <option>Denmark</option>
                      <option>Norway</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-sm text-[#555]">Street address *</span>
                    <input required type="text" autoComplete="street-address" placeholder="House number and street name" className={inputCls} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-sm text-[#555]">Apartment, suite, unit, etc. (optional)</span>
                    <input type="text" className={inputCls} />
                  </label>
                  <label className="block">
                    <span className="text-sm text-[#555]">Town / City *</span>
                    <input required type="text" autoComplete="address-level2" className={inputCls} />
                  </label>
                  <label className="block">
                    <span className="text-sm text-[#555]">Postcode / ZIP *</span>
                    <input required type="text" autoComplete="postal-code" className={inputCls} />
                  </label>
                  <label className="block">
                    <span className="text-sm text-[#555]">Phone *</span>
                    <input required type="tel" autoComplete="tel" className={inputCls} />
                  </label>
                  <label className="block">
                    <span className="text-sm text-[#555]">Email address *</span>
                    <input required type="email" autoComplete="email" className={inputCls} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-sm text-[#555]">Order notes (optional)</span>
                    <textarea rows={3} placeholder="Notes about your order, e.g. special notes for delivery." className={inputCls} />
                  </label>
                </div>
              </section>

              <section>
                <h2 className="eskil-display text-[26px] text-black">Payment</h2>
                <div className="mt-5 divide-y divide-[#e8e8e8] border border-[#e8e8e8]">
                  {PAYMENT_METHODS.map((method) => (
                    <div key={method.id} className="px-5 py-4">
                      <label className="flex cursor-pointer items-center gap-3 text-[15px] text-black">
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={payment === method.id}
                          onChange={() => setPayment(method.id)}
                          className="accent-black"
                        />
                        {method.label}
                      </label>
                      {payment === method.id && (
                        <p className="mt-2 pl-7 text-sm leading-relaxed text-[#555]">
                          {method.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-relaxed text-[#8a8a8a]">
                  Demo checkout — no payment is processed, no card details are
                  collected, and no order is sent to the store.
                </p>
              </section>
            </div>

            <aside className="h-fit border border-[#e8e8e8] bg-[#f7f6f4] p-7">
              <h2 className="eskil-display text-[24px] text-black">Your order</h2>
              <ul className="mt-5 space-y-4 border-b border-[#e8e8e8] pb-5">
                {detailed.map(({ line, product }) => (
                  <li key={line.slug} className="flex items-center gap-3">
                    {product.images[0] && (
                      <Image
                        src={product.images[0]}
                        alt=""
                        width={64}
                        height={64}
                        className="h-12 w-12 shrink-0 bg-white object-cover"
                      />
                    )}
                    <span className="min-w-0 flex-1 text-sm text-black">
                      {product.name}{" "}
                      <span className="text-[#8a8a8a]">× {line.qty}</span>
                    </span>
                    <span className="text-sm font-medium text-black">
                      {formatPrice(Number(product.price) * line.qty)}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex justify-between text-[15px]">
                <span className="text-[#555]">Subtotal</span>
                <span className="font-medium text-black">{formatPrice(subtotalCents)}</span>
              </p>
              <p className="mt-2 flex justify-between text-[15px]">
                <span className="text-[#555]">Shipping</span>
                <span className="text-black">Calculated at checkout</span>
              </p>
              <p className="mt-4 flex justify-between border-t border-[#e8e8e8] pt-4 text-lg">
                <span className="font-medium text-black">Total</span>
                <span className="font-medium text-black">{formatPrice(subtotalCents)}</span>
              </p>
              <button type="submit" className="eskil-btn mt-6 w-full">
                Place order
              </button>
              <Link href="/cart" className="mt-4 block text-center text-[11px] font-medium uppercase tracking-[0.18em] text-[#8a8a8a] underline underline-offset-4 hover:text-black">
                Return to cart
              </Link>
            </aside>
          </div>
        </form>
      )}
    </div>
  );
}
