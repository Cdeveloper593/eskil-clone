"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUp,
  ChevronDown,
  Heart,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Trash2,
  User,
  X,
} from "lucide-react";
import { PRODUCTS, formatPrice, productBySlug } from "@/lib/eskil/products";
import { FOOTER_COLUMNS, LOGO, LOGO_FOOTER, NAV, type NavItem } from "@/lib/eskil/site";
import { useShop } from "./cart";

function NavMenu({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  if (mobile) {
    return (
      <nav aria-label="Mobile">
        {NAV.map((item) => (
          <div key={item.label} className="border-b border-[#e8e8e8]">
            <div className="flex items-center justify-between">
              <Link
                href={item.href}
                onClick={onNavigate}
                className="eskil-display py-3.5 text-[19px] text-black"
              >
                {item.label}
              </Link>
              {item.groups && (
                <button
                  type="button"
                  aria-label={`Expand ${item.label}`}
                  aria-expanded={open === item.label}
                  onClick={() => setOpen(open === item.label ? null : item.label)}
                  className="p-2 text-black"
                >
                  <ChevronDown size={16} className={open === item.label ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>
              )}
            </div>
            {open === item.label && item.groups && (
              <div className="pb-4 pl-1">
                {item.groups.map((g) => (
                  <div key={g.label} className="mb-3">
                    <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#8a8a8a]">
                      {g.label}
                    </p>
                    <ul className="space-y-1.5">
                      {g.links.map((l) => (
                        <li key={l.href + l.label}>
                          <Link href={l.href} onClick={onNavigate} className="text-[15px] text-[#333]">
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    );
  }
  return (
    <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
      {NAV.map((item: NavItem) => (
        <div key={item.label} className="eskil-nav-item relative py-6">
          <Link
            href={item.href}
            className="eskil-link-underline flex items-center gap-1 text-[13px] font-medium uppercase tracking-[0.18em] text-black"
          >
            {item.label}
            {item.groups && <ChevronDown size={13} />}
          </Link>
          {item.groups && (
            <div className="eskil-mega absolute left-1/2 top-full z-50 -translate-x-1/2 pt-1">
              <div
                className="flex gap-10 border border-[#e8e8e8] bg-white px-9 py-7 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                style={{ width: item.groups.length > 1 ? `${item.groups.length * 210}px` : "240px" }}
              >
                {item.groups.map((g) => (
                  <div key={g.label} className="min-w-[180px]">
                    <p className="mb-3 border-b border-[#e8e8e8] pb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#8a8a8a]">
                      {g.label}
                    </p>
                    <ul className="space-y-2">
                      {g.links.map((l) => (
                        <li key={l.href + l.label}>
                          <Link
                            href={l.href}
                            className="text-[14px] text-[#333] transition-colors hover:text-black hover:underline hover:underline-offset-4"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

function SearchOverlay() {
  const { searchOpen } = useShop();
  if (!searchOpen) return null;
  return <SearchPanel />;
}

function SearchPanel() {
  const { setSearchOpen } = useShop();
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const t = window.setTimeout(() => inputRef.current?.focus(), 60);
    return () => window.clearTimeout(t);
  }, []);
  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (needle.length < 2) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(needle) ||
        p.categories.some((c) => c.name.toLowerCase().includes(needle)),
    ).slice(0, 8);
  }, [q]);
  return (
    <div className="fixed inset-0 z-[80] bg-white/98" role="dialog" aria-modal="true" aria-label="Search">
      <div className="mx-auto max-w-3xl px-5 pt-24 md:pt-32">
        <button
          type="button"
          aria-label="Close search"
          onClick={() => setSearchOpen(false)}
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-black text-black transition-colors hover:bg-black hover:text-white"
        >
          <X size={18} />
        </button>
        <p className="eskil-eyebrow mb-4">Search products</p>
        <div className="flex items-center gap-3 border-b-2 border-black pb-3">
          <Search size={22} strokeWidth={1.5} />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Type to search…"
            className="eskil-display w-full bg-transparent text-2xl text-black outline-none placeholder:text-[#bbb] md:text-3xl"
          />
        </div>
        {results.length > 0 && (
          <ul className="mt-6 divide-y divide-[#eee]">
            {results.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/product/${p.slug}`}
                  onClick={() => setSearchOpen(false)}
                  className="flex items-center gap-4 py-3"
                >
                  {p.images[0] && (
                    <Image src={p.images[0]} alt="" width={56} height={56} className="h-14 w-14 object-cover" />
                  )}
                  <span className="flex-1">
                    <span className="eskil-display block text-[17px] text-black">{p.name}</span>
                    <span className="text-xs uppercase tracking-[0.18em] text-[#8a8a8a]">
                      {p.categories.map((c) => c.name).join(" / ")}
                    </span>
                  </span>
                  <span className="text-[15px] text-black">{formatPrice(p.price)}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {q.trim().length >= 2 && results.length === 0 && (
          <p className="mt-6 text-[#555]">No products found for “{q}”.</p>
        )}
      </div>
    </div>
  );
}

function CartDrawer() {
  const { cartOpen, setCartOpen, lines, setQty, removeFromCart, subtotalCents } = useShop();
  return (
    <>
      <div
        className={`eskil-overlay fixed inset-0 z-[70] bg-black/40 ${cartOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setCartOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`eskil-drawer fixed right-0 top-0 z-[75] flex h-full w-full max-w-md flex-col bg-white shadow-2xl ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-label="Shopping cart"
        aria-hidden={!cartOpen}
      >
        <div className="flex items-center justify-between border-b border-[#e8e8e8] px-6 py-5">
          <h3 className="eskil-display text-[22px] text-black">Shopping Cart</h3>
          <button
            type="button"
            aria-label="Close cart"
            onClick={() => setCartOpen(false)}
            className="flex h-9 w-9 items-center justify-center text-black transition-colors hover:bg-black hover:text-white"
          >
            <X size={17} />
          </button>
        </div>
        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag size={36} strokeWidth={1} className="text-[#bbb]" />
            <p className="text-[#555]">No products in the cart.</p>
            <button type="button" className="eskil-btn" onClick={() => setCartOpen(false)}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-[#eee] overflow-y-auto px-6">
              {lines.map((l) => {
                const p = productBySlug(l.slug);
                if (!p) return null;
                return (
                  <li key={l.slug} className="flex gap-4 py-4">
                    {p.images[0] && (
                      <Link href={`/product/${p.slug}`} onClick={() => setCartOpen(false)}>
                        <Image src={p.images[0]} alt={p.name} width={84} height={84} className="h-[84px] w-[84px] object-cover" />
                      </Link>
                    )}
                    <div className="flex flex-1 flex-col">
                      <Link href={`/product/${p.slug}`} onClick={() => setCartOpen(false)} className="eskil-display text-[16px] leading-snug text-black">
                        {p.name}
                      </Link>
                      <span className="mt-0.5 text-sm text-[#8a8a8a]">{formatPrice(p.price)}</span>
                      <div className="mt-2 flex items-center gap-3">
                        <span className="flex items-center border border-[#e8e8e8]">
                          <button type="button" aria-label="Decrease quantity" onClick={() => setQty(l.slug, l.qty - 1)} className="flex h-8 w-8 items-center justify-center text-black hover:bg-black hover:text-white">
                            <Minus size={13} />
                          </button>
                          <span className="w-8 text-center text-sm">{l.qty}</span>
                          <button type="button" aria-label="Increase quantity" onClick={() => setQty(l.slug, l.qty + 1)} className="flex h-8 w-8 items-center justify-center text-black hover:bg-black hover:text-white">
                            <Plus size={13} />
                          </button>
                        </span>
                        <button type="button" aria-label={`Remove ${p.name}`} onClick={() => removeFromCart(l.slug)} className="text-[#8a8a8a] transition-colors hover:text-black">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                    <span className="text-[15px] font-medium text-black">{formatPrice(p.price * l.qty)}</span>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-[#e8e8e8] px-6 py-5">
              <div className="flex justify-between text-[15px]">
                <span className="text-[#555]">Subtotal</span>
                <span className="font-medium text-black">{formatPrice(subtotalCents)}</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Link href="/cart" onClick={() => setCartOpen(false)} className="eskil-btn eskil-btn--outline !px-3 text-center">
                  View cart
                </Link>
                <Link href="/checkout" onClick={() => setCartOpen(false)} className="eskil-btn !px-3 text-center">
                  Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export function SiteHeader() {
  const { count, wishlist, setCartOpen, setSearchOpen } = useShop();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 10);
      setShowTop(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="hidden border-b border-[#e8e8e8] bg-white text-[12px] md:block">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-2">
          <p className="tracking-wide text-[#555]">10% discount for registered users</p>
          <div className="flex items-center gap-5">
            <a href="https://www.facebook.com/QodeInteractive" target="_blank" rel="noreferrer" className="uppercase tracking-[0.15em] text-black hover:opacity-60">FB</a>
            <a href="https://www.instagram.com/qodeinteractive" target="_blank" rel="noreferrer" className="uppercase tracking-[0.15em] text-black hover:opacity-60">IG</a>
            <a href="https://twitter.com/QodeInteractive" target="_blank" rel="noreferrer" className="uppercase tracking-[0.15em] text-black hover:opacity-60">TW</a>
            <span className="text-[#ccc]">|</span>
            <span className="tracking-wide text-black">English</span>
          </div>
        </div>
      </div>
      <header className={`eskil-header sticky top-0 z-[60] bg-white ${stuck ? "is-stuck" : ""}`}>
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 md:px-6">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 items-center justify-center text-black lg:hidden"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
          <Link href="/" className="shrink-0 py-4" aria-label="Eskil — home">
            <Image src={LOGO} alt="Eskil" width={120} height={32} className="h-8 w-auto" priority />
          </Link>
          <NavMenu />
          <div className="flex items-center gap-1 md:gap-2">
            <button type="button" aria-label="Search" onClick={() => setSearchOpen(true)} className="flex h-11 w-11 items-center justify-center text-black transition-colors hover:opacity-60">
              <Search size={19} strokeWidth={1.5} />
            </button>
            <Link href="/my-account" aria-label="My account" className="hidden h-11 w-11 items-center justify-center text-black transition-colors hover:opacity-60 sm:flex">
              <User size={19} strokeWidth={1.5} />
            </Link>
            <Link href="/wishlist" aria-label="Wishlist" className="relative hidden h-11 w-11 items-center justify-center text-black transition-colors hover:opacity-60 sm:flex">
              <Heart size={19} strokeWidth={1.5} />
              {wishlist.length > 0 && (
                <span className="absolute right-0.5 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] font-medium text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <button type="button" aria-label="Open cart" onClick={() => setCartOpen(true)} className="relative flex h-11 w-11 items-center justify-center text-black transition-colors hover:opacity-60">
              <ShoppingBag size={19} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute right-0.5 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] font-medium text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`eskil-overlay fixed inset-0 z-[70] bg-black/40 ${mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`eskil-drawer fixed left-0 top-0 z-[75] h-full w-full max-w-sm overflow-y-auto bg-white ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Menu"
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between border-b border-[#e8e8e8] px-5 py-4">
          <Image src={LOGO} alt="Eskil" width={110} height={30} className="h-7 w-auto" />
          <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)} className="flex h-10 w-10 items-center justify-center text-black hover:bg-black hover:text-white">
            <X size={18} />
          </button>
        </div>
        <div className="px-5 py-2">
          <NavMenu mobile onNavigate={() => setMobileOpen(false)} />
          <div className="flex gap-6 py-5 text-[13px] uppercase tracking-[0.18em]">
            <Link href="/my-account" onClick={() => setMobileOpen(false)} className="text-black">Account</Link>
            <Link href="/wishlist" onClick={() => setMobileOpen(false)} className="text-black">Wishlist</Link>
            <Link href="/cart" onClick={() => setMobileOpen(false)} className="text-black">Cart</Link>
          </div>
          <p className="pb-6 text-sm text-[#8a8a8a]">10% discount for registered users</p>
        </div>
      </aside>

      <SearchOverlay />
      <CartDrawer />
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="eskil-fade-in fixed bottom-6 right-6 z-[65] flex h-11 w-11 items-center justify-center bg-black text-white shadow-lg transition-opacity hover:opacity-80"
          aria-label="Back to top"
        >
          <ArrowUp size={17} />
        </button>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e8e8e8] bg-white">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Link href="/" aria-label="Eskil — home">
            <Image src={LOGO_FOOTER} alt="Eskil" width={150} height={40} className="h-10 w-auto" />
          </Link>
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-[#777]">
            Live in comfort and luxury — quality design furniture &amp; custom-made décor.
          </p>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <h6 className="mb-4 text-[12px] font-medium uppercase tracking-[0.24em] text-black">
              {col.title}
            </h6>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("http") ? (
                    <a href={l.href} target="_blank" rel="noreferrer" className="text-[14px] text-[#555] transition-colors hover:text-black">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="text-[14px] text-[#555] transition-colors hover:text-black">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[#e8e8e8]">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-3 px-5 py-5 text-[13px] text-[#8a8a8a] md:px-6">
          <p>
            © 2022{" "}
            <a href="https://qodeinteractive.com" target="_blank" rel="noreferrer" className="text-black hover:underline">
              Qode Interactive
            </a>
            . All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 uppercase tracking-[0.2em] text-black transition-opacity hover:opacity-60"
          >
            Top <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export function NoticeToast() {
  const { notice } = useShop();
  if (!notice) return null;
  return (
    <div className="eskil-fade-in fixed bottom-6 left-1/2 z-[95] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 bg-black px-5 py-3.5 text-center text-sm text-white shadow-xl" role="status">
      {notice}
    </div>
  );
}
