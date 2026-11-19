"use client";

import { useState } from "react";
import Link from "next/link";
import { PackageSearch } from "lucide-react";
import { Reveal } from "@/components/sites/eskil/Reveal";

const inputCls =
  "mt-1 w-full border border-[#e8e8e8] px-4 py-3 text-sm text-black outline-none focus:border-black";

export default function OrderTrackingPage() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<{ orderId: string; email: string } | null>(null);

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-10 md:px-8 md:py-14">
      <Reveal>
        <nav aria-label="Breadcrumb" className="text-center text-[13px] text-[#8a8a8a]">
          <Link href="/" className="transition-colors hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Order Tracking</span>
        </nav>
        <h1 className="eskil-display mt-3 text-center text-[42px] leading-tight text-black md:text-[54px]">
          Order Tracking
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-[15px] leading-relaxed text-[#555]">
          To track your order please enter your Order ID in the box below and
          press the “Track” button. This was given to you on your receipt and
          in the confirmation email you should have received.
        </p>
      </Reveal>

      <Reveal>
        <form
          className="mx-auto mt-10 max-w-xl space-y-4 border border-[#e8e8e8] p-7 md:p-9"
          onSubmit={(e) => {
            e.preventDefault();
            setResult({ orderId: orderId.trim(), email: email.trim() });
          }}
        >
          <label className="block">
            <span className="text-sm text-[#555]">Order ID *</span>
            <input
              required
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Found in your order confirmation email."
              className={inputCls}
            />
          </label>
          <label className="block">
            <span className="text-sm text-[#555]">Billing email *</span>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email you used during checkout."
              className={inputCls}
            />
          </label>
          <button type="submit" className="eskil-btn w-full">Track</button>
          <p className="text-xs leading-relaxed text-[#8a8a8a]">
            Local demo — no orders are stored on a server, so tracking results
            below are illustrative only.
          </p>
        </form>
      </Reveal>

      {result && (
        <Reveal>
          <div className="mx-auto mt-8 max-w-xl border border-[#e8e8e8] bg-[#f7f6f4] p-7 md:p-9">
            <div className="flex items-center gap-3">
              <PackageSearch size={24} strokeWidth={1.5} className="text-black" />
              <h2 className="eskil-display text-[24px] text-black">
                Order {result.orderId}
              </h2>
            </div>
            <dl className="mt-5 space-y-3 text-[15px]">
              <div className="flex justify-between gap-4 border-b border-[#e8e8e8] pb-3">
                <dt className="text-[#555]">Billing email</dt>
                <dd className="text-black">{result.email}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[#e8e8e8] pb-3">
                <dt className="text-[#555]">Status</dt>
                <dd className="font-medium text-black">Processing</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#555]">Estimated delivery</dt>
                <dd className="text-black">3–5 business days</dd>
              </div>
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-[#555]">
              This is a demo result: the order number and email you entered
              are shown back to you, but no real order was looked up because
              this clone has no backend or stored orders.
            </p>
            <Link href="/shop" className="eskil-btn mt-6 inline-flex">
              Continue shopping
            </Link>
          </div>
        </Reveal>
      )}
    </div>
  );
}
