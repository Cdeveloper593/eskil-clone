import type { Metadata } from "next";
import { Jost, Marcellus } from "next/font/google";
import "./globals.css";
import "@/components/sites/eskil/eskil.css";
import { ShopProvider } from "@/components/sites/eskil/cart";
import {
  NoticeToast,
  SiteFooter,
  SiteHeader,
} from "@/components/sites/eskil/chrome";
import { QuickViewModal } from "@/components/sites/eskil/ProductCard";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Furniture Store – Eskil",
  description:
    "Eskil — Furniture Store. Quality design furniture & custom-made décor. Featured collections by Antonio Citterio, Johanna Grawundler, Patricia Urquiola and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body
        className={`${jost.variable} ${marcellus.variable} eskil-body flex min-h-full flex-col`}
      >
        <ShopProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <QuickViewModal />
          <NoticeToast />
        </ShopProvider>
      </body>
    </html>
  );
}
