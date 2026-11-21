import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/lib/eskil/site";
import { Reveal } from "@/components/sites/eskil/Reveal";

export const metadata = {
  title: "Left Menu Home – Nordvik",
  description:
    "Nordvik Left Menu Home — BM61 Armchair, O&M Design, Aesthetics, Danish classic and Bølling Table, full-height parallax sections.",
};

const SECTIONS = [
  {
    id: "bm61-armchair",
    img: "/sites/eskil/2022/03/h8-img-1-e1656579202827.jpg",
    title: "BM61 Armchair",
    text: "The new BM61 Chair is designed with eco-friendly materials",
  },
  {
    id: "om-design",
    img: "/sites/eskil/2022/03/h8-img-2.jpg",
    title: "O&M Design",
    text: "Unique décor for your living room, dining room or bedroom.",
  },
  {
    id: "aesthetics",
    img: "/sites/eskil/2022/03/h8-img3.jpg",
    title: "Aesthetics",
    text: "Comfort is our top priority when it comes to making furniture",
  },
  {
    id: "danish-classic",
    img: "/sites/eskil/2022/03/h8-img-6.jpg",
    title: "Danish classic",
    text: "Minimalistic design that will fit any modern apartment/house",
  },
  {
    id: "bolling-table",
    img: "/sites/eskil/2022/03/h8-img-5.jpg",
    title: "Bølling Table",
    text: "Our latest collection of coffee & garden tables is out now",
  },
];

export default function LeftMenuHomePage() {
  const homeNav = NAV.find((n) => n.label === "Home");
  const menuLinks = homeNav?.groups?.[0]?.links ?? [];
  return (
    <div className="lg:flex">
      {/* Left vertical menu — the source replaces the top header with this
          menu; the clone keeps the global sticky header and renders the
          vertical menu alongside the content instead. */}
      <aside className="hidden shrink-0 border-r border-[#e8e8e8] bg-white lg:sticky lg:top-24 lg:block lg:h-[calc(100vh-6rem)] lg:w-72 lg:overflow-y-auto">
        <nav aria-label="Home variants" className="px-7 py-10">
          <p className="eskil-eyebrow">Home</p>
          <ul className="mt-6 space-y-1">
            {menuLinks.map((l) => {
              const active = l.href === "/left-menu-home";
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`eskil-display block py-2 text-[19px] leading-snug transition-opacity hover:opacity-60 ${
                      active ? "text-black underline underline-offset-8" : "text-[#555]"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-10 border-t border-[#e8e8e8] pt-6">
            <p className="text-[12px] uppercase tracking-[0.2em] text-[#8a8a8a]">Sections</p>
            <ul className="mt-4 space-y-2">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-[13px] uppercase tracking-[0.15em] text-black transition-opacity hover:opacity-60"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Mobile variant nav */}
      <nav
        aria-label="Home variants"
        className="flex gap-5 overflow-x-auto border-b border-[#e8e8e8] bg-white px-5 py-4 lg:hidden"
      >
        {menuLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={l.href === "/left-menu-home" ? "page" : undefined}
            className={`whitespace-nowrap text-[13px] uppercase tracking-[0.15em] ${
              l.href === "/left-menu-home" ? "text-black underline underline-offset-4" : "text-[#777]"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {/* Full-height parallax sections */}
      <div className="min-w-0 flex-1">
        {SECTIONS.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            aria-label={s.title}
            className="relative flex min-h-[calc(100svh-4rem)] scroll-mt-24 items-end overflow-hidden md:min-h-[calc(100svh-6rem)]"
          >
            <Image
              src={s.img}
              alt={s.title}
              width={1920}
              height={1238}
              priority={i === 0}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <Reveal className="relative w-full">
              <div className="px-5 pb-12 md:px-10 md:pb-16">
                <h2 className="eskil-display text-[36px] leading-none text-white md:text-[56px]">
                  {s.title}
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/85 md:text-[17px]">
                  {s.text}
                </p>
                <Link href="/shop" className="mt-6 inline-block border border-white px-6 py-3 text-[12px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black">
                  View more
                </Link>
              </div>
            </Reveal>
          </section>
        ))}
      </div>
    </div>
  );
}
