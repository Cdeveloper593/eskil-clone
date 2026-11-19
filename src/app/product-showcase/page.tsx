import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/sites/eskil/Reveal";

export const metadata = {
  title: "Product Showcase – Eskil",
  description:
    "Eskil Product Showcase — the Soborg BM61 Chair by Hans J. Wegner, carefully made with oak and fine wool.",
};

const QA = [
  {
    q: "When did you realize you wanted to be a designer?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
  },
  {
    q: "What is the next object you would like to design?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    q: "What are your plans for the design fair?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    q: "When will we see your new ideas come to life?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
];

const MATERIALS = [
  { name: "Water resistance", img: "/sites/eskil/2022/05/h7-icon-01.png" },
  { name: "Eco friendly materials", img: "/sites/eskil/2022/05/h7-icon-02.png" },
  { name: "Frost resistant", img: "/sites/eskil/2022/05/h7-icon-03.png" },
  { name: "Easy assembling", img: "/sites/eskil/2022/05/h7-icon-04.png" },
  { name: "Durable materials", img: "/sites/eskil/2022/05/h7-icon-05.png" },
];

const SOCIALS = [
  { label: "FB", href: "https://www.facebook.com/QodeInteractive" },
  { label: "IG", href: "https://www.instagram.com/qodeinteractive" },
  { label: "TW", href: "https://twitter.com/QodeInteractive" },
];

export default function ProductShowcasePage() {
  return (
    <div>
      {/* Hero — Soborg BM61 Chair (the source repeats this hero for each
          responsive breakpoint; it is rendered once here) */}
      <section className="bg-white">
        <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1500px] flex-col items-center justify-center px-5 py-16 text-center md:min-h-[calc(100svh-6rem)] md:px-6">
          <Reveal>
            <Image
              src="/sites/eskil/2022/03/h7-img-5.jpg"
              alt="Soborg BM61 Chair"
              width={90}
              height={90}
              priority
              className="mx-auto h-[90px] w-[90px] object-cover"
            />
            <h1 className="eskil-display mt-8 text-[42px] leading-tight text-black md:text-[64px]">
              Soborg BM61 Chair
            </h1>
            <h4 className="mt-4 text-[14px] font-medium uppercase tracking-[0.28em] text-black">
              HANS J.WEGNER
            </h4>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[#777]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <Link href="/shop" className="eskil-btn mt-8">
              Purchase
            </Link>
            <h6 className="mt-8 text-[13px] italic text-[#777]">
              *Only 1 left in stock. Order now.
            </h6>
            <p className="mt-10 flex items-center justify-center gap-4 text-[12px] font-medium uppercase tracking-[0.22em] text-black">
              <span className="text-[#8a8a8a]">Follow</span>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-opacity hover:opacity-60"
                >
                  {s.label}
                </a>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Carefully made with oak and fine wool */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto grid max-w-[1500px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <Reveal>
            <Image
              src="/sites/eskil/2022/03/h7-img-1.jpg"
              alt="Soborg BM61 Chair — oak and fine wool detail"
              width={1442}
              height={1432}
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <h3 className="eskil-display text-[28px] leading-snug text-black md:text-[34px]">
              Carefully made with oak and fine wool, perfect for living rooms.
              Your guests will love it!
            </h3>
            <h6 className="mt-6 text-[13px] italic text-[#777]">
              *Only the best quality materials are used.
            </h6>
          </Reveal>
        </div>
      </section>

      {/* Defined curves */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1500px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <Reveal className="order-2 md:order-1">
            <h3 className="eskil-display text-[28px] leading-snug text-black md:text-[34px]">
              The new BM Chair was designed with defined curves that aim to
              provide extensive comfort to its user.
            </h3>
            <h6 className="mt-6 text-[13px] uppercase tracking-[0.15em] text-[#777]">
              Height: 77 cm Width: 49,5 cm Depth: 53 cm Seat height: 46 cm
            </h6>
          </Reveal>
          <Reveal delay={120} className="order-1 md:order-2">
            <div className="flex gap-5">
              <Image
                src="/sites/eskil/2022/03/h7-img-6.jpg"
                alt="Soborg BM61 Chair — curve detail"
                width={80}
                height={80}
                className="h-20 w-20 object-cover"
              />
              <Image
                src="/sites/eskil/2022/03/h7-img-7.jpg"
                alt="Soborg BM61 Chair — seat detail"
                width={80}
                height={80}
                className="h-20 w-20 object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Variety of colors */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto grid max-w-[1500px] items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <Reveal>
            <div className="grid grid-cols-2 gap-5">
              <Image
                src="/sites/eskil/2022/03/h7-img-2.jpg"
                alt="Soborg BM61 Chair — color option one"
                width={1442}
                height={1442}
                className="w-full object-cover"
              />
              <Image
                src="/sites/eskil/2022/03/h7-img-3.jpg"
                alt="Soborg BM61 Chair — color option two"
                width={1300}
                height={1302}
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h3 className="eskil-display text-[28px] leading-snug text-black md:text-[34px]">
              We offer a variety of colors for our new BM chair. Fully
              personalize &amp; decorate your home with us!
            </h3>
            <h6 className="mt-6 text-[13px] uppercase tracking-[0.15em] text-[#777]">
              $ 2.695,00 Recommended Retail Price (Additional fees, customs
              &amp; freight may apply)
            </h6>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1500px] px-5 pb-16 md:px-6 md:pb-24">
          <Reveal>
            <Image
              src="/sites/eskil/2022/03/h7-img-4.jpg"
              alt="Soborg BM61 Chair — full view"
              width={1300}
              height={1302}
              className="w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Meet the designer */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-6 md:py-20">
          <Reveal className="text-center">
            <p className="eskil-eyebrow">meet the desginer</p>
            <h2 className="eskil-display mt-3 text-[32px] leading-tight text-black md:text-[40px]">
              HANS J.WAGNER
            </h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-10 md:grid-cols-2">
            {QA.map((item, i) => (
              <Reveal key={item.q} delay={(i % 2) * 120}>
                <h4 className="eskil-display text-[21px] leading-snug text-black">{item.q}</h4>
                <p className="mt-3 text-[15px] leading-relaxed text-[#777]">{item.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* High quality materials */}
      <section className="bg-[#f7f6f4]">
        <div className="mx-auto max-w-[1500px] px-5 py-16 text-center md:px-6 md:py-20">
          <Reveal>
            <h3 className="eskil-display mx-auto max-w-3xl text-[26px] leading-snug text-black md:text-[32px]">
              Made of high qulaity materials and by highest possible standards
            </h3>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
            {MATERIALS.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <Image
                  src={m.img}
                  alt={m.name}
                  width={120}
                  height={120}
                  className="mx-auto h-16 w-16 object-contain md:h-20 md:w-20"
                />
                <h5 className="mt-4 text-[12px] font-medium uppercase tracking-[0.2em] text-black">
                  {m.name}
                </h5>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
