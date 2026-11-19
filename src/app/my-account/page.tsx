"use client";

import { useState } from "react";
import Link from "next/link";
import { LogOut, UserRound } from "lucide-react";
import { useShop } from "@/components/sites/eskil/cart";
import { Reveal } from "@/components/sites/eskil/Reveal";

const inputCls =
  "mt-1 w-full border border-[#e8e8e8] px-4 py-3 text-sm text-black outline-none focus:border-black";

export default function MyAccountPage() {
  const { lines, count } = useShop();
  const [tab, setTab] = useState<"login" | "register">("login");
  const [user, setUser] = useState<string | null>(null);
  const [showLost, setShowLost] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [loginName, setLoginName] = useState("");
  const [registerName, setRegisterName] = useState("");

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-10 md:px-8 md:py-14">
      <Reveal>
        <nav aria-label="Breadcrumb" className="text-center text-[13px] text-[#8a8a8a]">
          <Link href="/" className="transition-colors hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">My account</span>
        </nav>
        <h1 className="eskil-display mt-3 text-center text-[42px] leading-tight text-black md:text-[54px]">
          My account
        </h1>
      </Reveal>

      {user ? (
        <Reveal>
          <div className="mx-auto mt-12 max-w-2xl border border-[#e8e8e8] p-8 md:p-10">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f7f6f4] text-black">
                <UserRound size={24} strokeWidth={1.5} />
              </span>
              <div>
                <p className="eskil-display text-[26px] text-black">
                  Hello, {user}
                </p>
                <p className="text-sm text-[#8a8a8a]">
                  You are signed in to your Eskil account (local demo).
                </p>
              </div>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-[#555]">
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your
              password and account details.
            </p>
            <ul className="mt-6 divide-y divide-[#e8e8e8] border-y border-[#e8e8e8] text-[15px]">
              <li className="flex justify-between py-3">
                <span className="text-[#555]">Orders</span>
                <span className="text-black">No orders yet — this is a local demo with no backend.</span>
              </li>
              <li className="flex justify-between py-3">
                <span className="text-[#555]">Items in your cart</span>
                <Link href="/cart" className="text-black underline underline-offset-4">
                  {count} item{count === 1 ? "" : "s"} ({lines.length} line{lines.length === 1 ? "" : "s"})
                </Link>
              </li>
              <li className="flex justify-between py-3">
                <span className="text-[#555]">Downloads</span>
                <span className="text-black">No downloads available.</span>
              </li>
              <li className="flex justify-between py-3">
                <span className="text-[#555]">Addresses</span>
                <span className="text-black">No address saved yet.</span>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="eskil-btn">Continue shopping</Link>
              <button
                type="button"
                onClick={() => setUser(null)}
                className="eskil-btn eskil-btn--outline"
              >
                <LogOut size={14} strokeWidth={1.5} /> Log out
              </button>
            </div>
          </div>
        </Reveal>
      ) : (
        <Reveal>
          <div className="mx-auto mt-12 max-w-xl">
            <div role="tablist" aria-label="Account" className="flex border-b border-[#e8e8e8]">
              {(["login", "register"] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={tab === key}
                  onClick={() => {
                    setTab(key);
                    setShowLost(false);
                  }}
                  className={`border-b-2 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.18em] transition-colors ${
                    tab === key
                      ? "border-black text-black"
                      : "border-transparent text-[#8a8a8a] hover:text-black"
                  }`}
                >
                  {key === "login" ? "Login" : "Register"}
                </button>
              ))}
            </div>

            {showLost ? (
              <div className="border border-[#e8e8e8] border-t-0 p-7">
                <h2 className="eskil-display text-[24px] text-black">Lost your password?</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[#555]">
                  Enter your email address and we will send you a link to reset
                  your password.
                </p>
                {resetSent ? (
                  <p className="mt-6 border border-[#e8e8e8] bg-[#f7f6f4] px-4 py-3 text-sm text-black">
                    If an account exists for that email, a reset link would be
                    sent. This is a local demo — no email is actually sent.
                  </p>
                ) : (
                  <form
                    className="mt-6 space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setResetSent(true);
                    }}
                  >
                    <label className="block">
                      <span className="text-sm text-[#555]">Username or email *</span>
                      <input required type="text" className={inputCls} />
                    </label>
                    <button type="submit" className="eskil-btn">Reset password</button>
                  </form>
                )}
                <button
                  type="button"
                  onClick={() => setShowLost(false)}
                  className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#8a8a8a] underline underline-offset-4 hover:text-black"
                >
                  Back to login
                </button>
              </div>
            ) : tab === "login" ? (
              <form
                className="space-y-4 border border-[#e8e8e8] border-t-0 p-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  setUser(loginName.trim() || "Customer");
                }}
              >
                <label className="block">
                  <span className="text-sm text-[#555]">Username or email address *</span>
                  <input
                    required
                    type="text"
                    autoComplete="username"
                    value={loginName}
                    onChange={(e) => setLoginName(e.target.value)}
                    className={inputCls}
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-[#555]">Password *</span>
                  <input required type="password" autoComplete="current-password" className={inputCls} />
                </label>
                <label className="flex items-center gap-2 text-sm text-[#555]">
                  <input type="checkbox" defaultChecked className="accent-black" />
                  Remember me
                </label>
                <button type="submit" className="eskil-btn w-full">Log in</button>
                <button
                  type="button"
                  onClick={() => setShowLost(true)}
                  className="block text-[12px] text-[#8a8a8a] underline underline-offset-4 hover:text-black"
                >
                  Lost your password?
                </button>
                <p className="border-t border-[#e8e8e8] pt-4 text-xs leading-relaxed text-[#8a8a8a]">
                  Local demo — logging in only shows a dashboard on this page.
                  No account is created and no credentials leave your browser.
                </p>
              </form>
            ) : (
              <form
                className="space-y-4 border border-[#e8e8e8] border-t-0 p-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  setUser(registerName.trim() || "Customer");
                }}
              >
                <label className="block">
                  <span className="text-sm text-[#555]">Username *</span>
                  <input
                    required
                    type="text"
                    autoComplete="username"
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                    className={inputCls}
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-[#555]">Email address *</span>
                  <input required type="email" autoComplete="email" className={inputCls} />
                </label>
                <label className="block">
                  <span className="text-sm text-[#555]">Password *</span>
                  <input required type="password" autoComplete="new-password" className={inputCls} />
                </label>
                <p className="text-sm leading-relaxed text-[#555]">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account,
                  and for other purposes described in our privacy policy.
                </p>
                <button type="submit" className="eskil-btn w-full">Register</button>
                <p className="border-t border-[#e8e8e8] pt-4 text-xs leading-relaxed text-[#8a8a8a]">
                  Local demo — registering only shows a dashboard on this page.
                  No account is created and nothing is stored on a server.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      )}
    </div>
  );
}
