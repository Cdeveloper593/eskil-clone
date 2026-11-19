"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { productBySlug } from "@/lib/eskil/products";

export type CartLine = { slug: string; qty: number };

type ShopContextValue = {
  lines: CartLine[];
  count: number;
  subtotalCents: number;
  addToCart: (slug: string, qty?: number) => void;
  removeFromCart: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clearCart: () => void;
  wishlist: string[];
  toggleWishlist: (slug: string) => void;
  isWishlisted: (slug: string) => boolean;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  quickViewSlug: string | null;
  setQuickViewSlug: (slug: string | null) => void;
  notice: string | null;
};

const ShopContext = createContext<ShopContextValue | null>(null);

const CART_KEY = "eskil-cart-v1";
const WISH_KEY = "eskil-wishlist-v1";
const STORAGE_EVENT = "eskil-storage-change";

const EMPTY_LINES: CartLine[] = [];
const EMPTY_WISHLIST: string[] = [];

// Parsed-value cache keyed by the raw localStorage string, so
// useSyncExternalStore sees a stable snapshot reference between renders.
const snapshotCache = new Map<string, { raw: string | null; value: unknown }>();

function readStored<T>(key: string, fallback: T): T {
  const raw = window.localStorage.getItem(key);
  const hit = snapshotCache.get(key);
  if (hit && hit.raw === raw) return hit.value as T;
  let value = fallback;
  if (raw) {
    try {
      value = JSON.parse(raw) as T;
    } catch {
      value = fallback;
    }
  }
  snapshotCache.set(key, { raw, value });
  return value;
}

function writeStored(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage unavailable (private mode, quota) — the event below still
    // refreshes subscribers; the cart simply won't persist.
  }
  window.dispatchEvent(new Event(STORAGE_EVENT));
}

function subscribeStored(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(STORAGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(STORAGE_EVENT, onChange);
  };
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const lines = useSyncExternalStore(
    subscribeStored,
    () => readStored<CartLine[]>(CART_KEY, EMPTY_LINES),
    () => EMPTY_LINES,
  );
  const wishlist = useSyncExternalStore(
    subscribeStored,
    () => readStored<string[]>(WISH_KEY, EMPTY_WISHLIST),
    () => EMPTY_WISHLIST,
  );
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickViewSlug, setQuickViewSlug] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!notice) return;
    const t = window.setTimeout(() => setNotice(null), 2600);
    return () => window.clearTimeout(t);
  }, [notice]);

  const addToCart = useCallback(
    (slug: string, qty = 1) => {
      const found = lines.find((l) => l.slug === slug);
      const next = found
        ? lines.map((l) =>
            l.slug === slug ? { ...l, qty: Math.min(99, l.qty + qty) } : l,
          )
        : [...lines, { slug, qty }];
      writeStored(CART_KEY, next);
      const p = productBySlug(slug);
      setNotice(
        p ? `“${p.name}” has been added to your cart.` : "Added to cart.",
      );
    },
    [lines],
  );

  const removeFromCart = useCallback(
    (slug: string) => {
      writeStored(
        CART_KEY,
        lines.filter((l) => l.slug !== slug),
      );
    },
    [lines],
  );

  const setQty = useCallback(
    (slug: string, qty: number) => {
      writeStored(
        CART_KEY,
        qty <= 0
          ? lines.filter((l) => l.slug !== slug)
          : lines.map((l) => (l.slug === slug ? { ...l, qty } : l)),
      );
    },
    [lines],
  );

  const clearCart = useCallback(() => writeStored(CART_KEY, EMPTY_LINES), []);

  const toggleWishlist = useCallback(
    (slug: string) => {
      if (wishlist.includes(slug)) {
        writeStored(
          WISH_KEY,
          wishlist.filter((s) => s !== slug),
        );
        setNotice("Removed from your wishlist.");
        return;
      }
      writeStored(WISH_KEY, [...wishlist, slug]);
      const p = productBySlug(slug);
      setNotice(
        p
          ? `“${p.name}” has been added to your wishlist.`
          : "Added to wishlist.",
      );
    },
    [wishlist],
  );

  const isWishlisted = useCallback(
    (slug: string) => wishlist.includes(slug),
    [wishlist],
  );

  const { count, subtotalCents } = useMemo(() => {
    let c = 0;
    let s = 0;
    for (const l of lines) {
      const p = productBySlug(l.slug);
      c += l.qty;
      if (p) s += p.price * l.qty;
    }
    return { count: c, subtotalCents: s };
  }, [lines]);

  const value: ShopContextValue = {
    lines,
    count,
    subtotalCents,
    addToCart,
    removeFromCart,
    setQty,
    clearCart,
    wishlist,
    toggleWishlist,
    isWishlisted,
    cartOpen,
    setCartOpen,
    searchOpen,
    setSearchOpen,
    quickViewSlug,
    setQuickViewSlug,
    notice,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}
