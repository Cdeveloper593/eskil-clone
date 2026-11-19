import Image from "next/image";
import { ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import { CONTACT_EMAIL } from "./data";
import { ContactButton } from "./ContactDialog";

const PAD = "px-[max(clamp(24px,3.45vw,72px),env(safe-area-inset-left))]";
const EYEBROW = "text-[12px] font-medium tracking-[0.2em] uppercase";

function Topline({ left, right, light = false }: { left: string; right: string; light?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between border-b pb-5 ${light ? "border-[#171a1c]/15 text-[#60696c]" : "border-white/10 text-[#999da4]"}`}
    >
      <span className={EYEBROW}>{left}</span>
      <span className={EYEBROW}>{right}</span>
    </div>
  );
}

/* ---------------- Connected Earth ---------------- */

export function ConnectedEarth() {
  return (
    <section
      id="connected-earth"
      className={`relative scroll-mt-[130px] border-b border-[#c8dcd8]/10 bg-[#0c0e10] py-[clamp(52px,6vw,88px)] text-[#f1f2ef] ${PAD}`}
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-8 min-[801px]:grid-cols-[1.25fr_1fr] min-[801px]:gap-[clamp(32px,6vw,112px)]">
        <div>
          <p className="mb-[22px] flex items-center gap-2.5 text-[10px] font-medium tracking-[0.18em] text-[#9eafa9] uppercase">
            <span className="h-[5px] w-[5px] rounded-full bg-[#99d7ba] shadow-[0_0_12px_rgba(121,203,160,0.25)]" />
            An international vision
          </p>
          <h2 className="text-[clamp(32px,3.9vw,62px)] leading-[1.13] font-medium tracking-[-0.045em] text-balance">
            Built here. <span className="text-[#becfc8]">Connected everywhere.</span>
          </h2>
          <ol className="relative mt-[29px] grid w-[min(100%,450px)] grid-cols-4 gap-1.5">
            <span aria-hidden className="absolute top-[3px] right-[12.5%] left-[12.5%] h-px bg-gradient-to-r from-[#629988]/35 via-[#87cbb5]/50 to-[#6898b5]/35" />
            {["New York", "London", "Bratislava", "Singapore"].map((city) => (
              <li key={city} className="relative pt-[18px] text-center text-[10px] whitespace-nowrap text-[#93a19f]">
                <span aria-hidden className="absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full border border-[#8cbdad] bg-[#0c0e10]" />
                {city}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <p className="max-w-[47ch] text-[clamp(15px,1.25vw,18px)] leading-[1.75] text-[#b0b8b8]">
            We bring technology, design and growth together to help businesses reach beyond
            borders. Have an idea? Let&rsquo;s build what comes next.
          </p>
          <div className="mt-[26px] flex flex-wrap items-center gap-x-6 gap-y-3">
            <ContactButton className="inline-flex min-h-[46px] items-center justify-center gap-[18px] rounded-full border border-[#c9e4d8]/15 bg-[#e6eee8] px-[21px] py-3 text-[13px] font-semibold text-[#14201b] transition hover:bg-[#d3e8db]">
              Build with us
              <ArrowRight size={14} />
            </ContactButton>
            <a
              href="#projects"
              className="inline-flex min-h-[46px] items-center gap-2.5 text-[13px] text-[#c4cfca] transition hover:text-[#f4f7f4]"
            >
              Explore our projects
              <ArrowDownRightIcon />
            </a>
          </div>
          <p className="mt-5 text-[10px] text-[#86958f]">Earth imagery · NASA / GSFC</p>
        </div>
      </div>
    </section>
  );
}

function ArrowDownRightIcon() {
  return <ArrowUpRight size={15} className="rotate-45" />;
}

/* ---------------- Studio + Team (light) ---------------- */

const FOUNDERS = [
  {
    id: "rastislav-molcan",
    name: "Rastislav Molcan",
    role: "Co-founder · Technology & Product",
    photo: "/sites/hamol/media/team/rastislav-molcan-768.webp",
    expertise: ["Product development", "Systems & automation", "Applied AI"],
    bio: [
      "Rastislav leads technology initiatives where systems, data and operations meet. At Frost a.s. Prešov, he oversees IT strategy and digital transformation, including systems architecture, process automation, cybersecurity and data-driven reporting.",
      "As founder of Ranketize and Crawlly AI, he builds products and solutions across technical SEO, AEO, GEO and AI visibility. He is pursuing a PhD in Industrial Logistics at the Technical University of Košice, researching practical applications of AI in enterprise logistics.",
    ],
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/rastislavmolcan/" }],
  },
  {
    id: "michal-hajtas",
    name: "Michal Hajtas",
    role: "Co-founder · Growth & AI Visibility",
    photo: "/sites/hamol/media/team/michal-hajtas-768.webp",
    expertise: ["Technical GEO", "Content & citations", "Community growth"],
    bio: [
      "Michal is a growth marketer and entrepreneur with more than eight years of experience building digital brands, leading international teams and scaling online businesses. Before founding Red-engage, he progressed from hands-on SEO, content and conversion optimization to managing a 19-person marketing team operating across five countries.",
      "Throughout his career, Michal has launched and grown multiple agencies and SaaS products spanning AI visibility, marketing automation and compliance technology. Today, he helps B2B SaaS, fintech and AI companies become trusted sources across ChatGPT, Perplexity, Gemini and Google.",
      "His approach combines technical GEO, citation-ready content and authentic engagement across Reddit, LinkedIn, YouTube and other platforms—with a clear focus on measurable visibility, qualified leads and business growth.",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/michalhajtas/" },
      { label: "Personal website", href: "https://michalhajtas.com" },
    ],
  },
];

const DISCIPLINES = [
  { n: "01", title: "Strategy", text: "The opportunity, the audience, the direction." },
  { n: "02", title: "Design", text: "A clear identity. An intuitive experience." },
  { n: "03", title: "Technology", text: "Products made for real use and continued development." },
];

export function Studio() {
  return (
    <section id="studio" className={`scroll-mt-32 bg-[#e9e9e3] pt-24 pb-10 text-[#171a1c] ${PAD}`}>
      <Topline left="Hamol / The Studio" right="02" light />
      <h2 className="mt-12 text-[clamp(40px,5vw,76px)] leading-[1.05] font-medium tracking-[-0.05em]">
        From possibility
        <br />
        to a working business.
      </h2>
      <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
        <p className="max-w-[560px] text-lg leading-[1.7] text-[#46524d]">
          We turn ideas into digital products, brands and independent ventures. Strategy, design and
          technology come together in one studio.
        </p>
        <a
          href="#team-heading"
          className="inline-flex items-center gap-2.5 border-b border-[#171a1c]/40 pb-1 text-[15px] font-medium transition hover:border-[#171a1c]"
        >
          Meet the co-founders
          <ArrowRight size={15} />
        </a>
      </div>

      <div className="mt-16 grid gap-10 border-t border-[#171a1c]/12 pt-10 min-[800px]:grid-cols-3">
        {DISCIPLINES.map((d) => (
          <div key={d.n}>
            <span className="text-[12px] tracking-[0.18em] text-[#7a847f]">{d.n}</span>
            <h3 className="mt-3 text-[26px] font-medium tracking-[-0.03em]">{d.title}</h3>
            <p className="mt-2 max-w-[30ch] leading-[1.6] text-[#515e63]">{d.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-12 text-[13px] tracking-[0.08em] text-[#7a847f]">
        Independent in spirit. Connected by craft. 09 projects. One studio.
      </p>

      {/* Team */}
      <div className="mx-auto mt-[100px] max-w-[1320px]">
        <p className={`${EYEBROW} text-[#5b6969]`}>The people behind Hamol</p>
        <h3
          id="team-heading"
          className="mt-6 max-w-[16ch] scroll-mt-32 text-[clamp(34px,3.6vw,56px)] leading-[1.08] font-medium tracking-[-0.045em]"
        >
          Different expertise. Shared ambition.
        </h3>
        <p className="mt-5 max-w-[620px] text-[17px] leading-[1.7] text-[#515e63]">
          Technology and product development meet growth and AI visibility. We bring both
          perspectives to the businesses we build.
        </p>

        <div className="mt-14 grid gap-14 min-[800px]:grid-cols-2 min-[800px]:gap-10">
          {FOUNDERS.map((f) => (
            <article key={f.id} id={f.id} className="flex scroll-mt-32 flex-col">
              <div className="aspect-[4/3] overflow-hidden rounded-md bg-[#182025]">
                <Image
                  src={f.photo}
                  alt={`Portrait of ${f.name}`}
                  width={768}
                  height={576}
                  className="h-full w-full object-cover saturate-[0.55]"
                />
              </div>
              <h4 className="mt-7 text-[clamp(28px,2.7vw,42px)] leading-[1.15] font-normal tracking-[-0.045em]">
                {f.name}
              </h4>
              <p className="mt-2.5 text-sm text-[#465b58]">{f.role}</p>
              <ul className="mt-[22px] mb-6 flex flex-wrap gap-2" aria-label={`${f.name}’s expertise`}>
                {f.expertise.map((e) => (
                  <li
                    key={e}
                    className="rounded-[5px] border border-[#b9c3be] px-2.5 py-1.5 text-[13px] text-[#4c5d5a]"
                  >
                    {e}
                  </li>
                ))}
              </ul>
              <div className="space-y-[18px] text-base leading-[1.7] text-[#515e63]">
                {f.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-x-7 gap-y-3 pt-6">
                {f.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-3.5 border-b border-[#829295] text-sm transition hover:border-[#176a4c] hover:text-[#176a4c]"
                  >
                    {l.label}
                    <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Approach ---------------- */

const STEPS = [
  {
    n: "01",
    label: "Discover",
    title: "Find the right problem.",
    text: "Understand what people need before deciding what to build.",
    diagram: (
      <>
        <path d="M25 25 140 60 25 95M65 12 140 60 65 108M15 60h225" className="stroke-[#5b6a72]" fill="none" />
        <circle cx="140" cy="60" r="24" className="stroke-[#8fa3ad]" fill="none" />
        <circle cx="140" cy="60" r="5" className="fill-[#cfe0e8]" />
        <circle cx="257" cy="60" r="8" className="fill-[#cfe0e8]" />
      </>
    ),
  },
  {
    n: "02",
    label: "Make",
    title: "Make the complex feel simple.",
    text: "Give every product a clear purpose, a considered identity and an experience that makes sense.",
    diagram: (
      <>
        <rect x="35" y="22" width="48" height="38" rx="4" className="stroke-[#8fa3ad]" fill="none" />
        <rect x="60" y="65" width="33" height="28" rx="4" className="stroke-[#8fa3ad]" fill="none" />
        <path d="M112 60h39m-9-7 9 7-9 7" className="stroke-[#5b6a72]" fill="none" />
        <rect x="178" y="20" width="68" height="80" rx="6" className="stroke-[#8fa3ad]" fill="none" />
        <path d="M190 38h44M190 48h28M190 81h44" className="stroke-[#5b6a72]" fill="none" />
        <rect x="190" y="61" width="44" height="8" rx="2" className="fill-[#cfe0e8]" />
      </>
    ),
  },
  {
    n: "03",
    label: "Evolve",
    title: "Keep making it better.",
    text: "Learn from real use and give good ideas room to evolve.",
    diagram: (
      <>
        <path
          d="M97 36a49 49 0 0 1 86 4m-1-19 3 20-20-2M183 84a49 49 0 0 1-86-4m1 19-3-20 20 2"
          className="stroke-[#8fa3ad]"
          fill="none"
        />
        <circle cx="140" cy="60" r="8" className="fill-[#cfe0e8]" />
        <path d="M27 60h53m120 0h53" className="stroke-[#5b6a72]" fill="none" />
      </>
    ),
  },
];

export function Approach() {
  return (
    <section
      id="about"
      className={`scroll-mt-[150px] py-[105px] text-[#f1f2ef] ${PAD}`}
      style={{ background: "radial-gradient(at 5% 55%, rgba(26,50,53,0.18), transparent 65%), #0b0f12" }}
    >
      <Topline left="Our Approach" right="03" />
      <div className="mt-[50px] mb-16 grid gap-7 min-[900px]:grid-cols-[1.25fr_1fr] min-[900px]:items-end min-[900px]:gap-[9%]">
        <h2 className="text-[clamp(46px,5.7vw,90px)] leading-[1.04] font-medium tracking-[-0.055em]">
          Different ideas.
          <br />
          <span className="text-[#9fb3bd]">The same care.</span>
        </h2>
        <p className="max-w-[460px] text-lg leading-[1.7] text-[#aeb4ba]">
          From AI tools and comparison platforms to premium pastry, we work across categories. Each
          project starts with a specific need and its own point of view.
        </p>
      </div>

      <div className="grid gap-12 min-[900px]:grid-cols-3 min-[900px]:gap-8">
        {STEPS.map((s) => (
          <article key={s.n} className="border-t border-white/10 pt-7">
            <div className="flex items-center justify-between">
              <span className="text-[13px] tracking-[0.15em] text-[#717980]">{s.n}</span>
              <span className={`${EYEBROW} text-[#b9bdc2]`}>{s.label}</span>
            </div>
            <svg viewBox="0 0 280 120" fill="none" aria-hidden className="my-7 w-full">
              {s.diagram}
            </svg>
            <h3 className="text-[24px] font-medium tracking-[-0.03em]">{s.title}</h3>
            <p className="mt-2.5 leading-[1.65] text-[#aeb4ba]">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Footer / Contact ---------------- */

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className={`scroll-mt-[150px] border-t border-white/[0.07] pt-[85px] pb-9 text-[#f1f2ef] ${PAD}`}
      style={{ background: "radial-gradient(at 82% 30%, rgba(23,49,58,0.22), transparent 60%), #0b0e11" }}
    >
      <Topline left="Start a conversation" right="04" />
      <div className="mt-14 flex flex-wrap items-end justify-between gap-10">
        <h2 className="text-[clamp(46px,6vw,96px)] leading-[1.03] font-medium tracking-[-0.055em]">
          Let&rsquo;s build
          <br />
          <span className="text-[#9fb3bd]">what comes next.</span>
        </h2>
        <div className="text-[17px] leading-[1.65] text-[#aeb4ba]">
          <p>
            A new venture, a product or an idea
            <br /> you can&rsquo;t stop thinking about.
          </p>
          <p className="mt-3">We&rsquo;d like to hear it.</p>
        </div>
      </div>

      <ContactButton className="group mt-14 flex w-full items-center justify-between gap-6 border-y border-white/12 py-7 text-left text-[clamp(24px,4.2vw,56px)] font-medium tracking-[-0.04em] break-all transition hover:text-white">
        <span>{CONTACT_EMAIL}</span>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 transition group-hover:bg-[#f1f2ef] group-hover:text-[#0b0d10] sm:h-16 sm:w-16">
          <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </span>
      </ContactButton>

      <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5 text-sm text-[#999da4]">
        <a href="#top" aria-label="Hamol Studio, home">
          <Image
            src="/sites/hamol/media/hamol-logo.svg"
            alt="Hamol Studio"
            width={90}
            height={60}
            className="h-8 w-auto"
          />
        </a>
        <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-white">
          {CONTACT_EMAIL}
        </a>
        <span>© 2026 Hamol Studio</span>
        <a href="#top" className="ml-auto inline-flex items-center gap-2 transition hover:text-white">
          Back to top
          <ArrowUp size={15} />
        </a>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-white/[0.07] pt-6 text-[13px] text-[#717980]">
        <a href="https://hamol.studio/privacy/" className="transition hover:text-white">
          Privacy policy
        </a>
        <a
          href="https://lovable-partner-directory.lovable.app/partners/hamol-studio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lovable Expert 2026 — Hamol Studio partner profile (opens in a new tab)"
        >
          <Image
            src="/sites/hamol/media/badges/lovable-expert-2026.svg"
            alt="Lovable Expert 2026"
            width={120}
            height={58}
            className="h-10 w-auto opacity-80"
          />
        </a>
      </div>
    </footer>
  );
}
