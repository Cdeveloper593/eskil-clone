"use client";

import Link from "next/link";
import { infoPageBySlug } from "@/lib/eskil/pages";
import {
  Countdown,
  PageHero,
  parseInfoBlocks,
  type InfoBlock,
} from "@/components/sites/eskil/InfoPage";
import { NewsletterForm } from "@/components/sites/eskil/NewsletterForm";
import { Reveal } from "@/components/sites/eskil/Reveal";

export default function ComingSoonPage() {
  const page = infoPageBySlug("coming-soon");
  const blocks = page ? parseInfoBlocks(page.content) : [];
  const heading = blocks.find(
    (b): b is Extract<InfoBlock, { kind: "heading" }> =>
      b.kind === "heading" && b.level === 1,
  );
  const headingHtml = heading ? heading.html : "Introducing the new shopping experience by Nordvik Stòir";

  return (
    <>
      <PageHero title="Coming Soon" eyebrow="Coming soon" />
      <main className="mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
        <Reveal>
          <h2
            className="eskil-display text-4xl leading-tight text-black md:text-6xl"
            dangerouslySetInnerHTML={{ __html: headingHtml }}
          />
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.85] text-[#555]">
            Our new shopping experience launches on 31 December 2026. Leave your
            email below and we will let you know the moment it goes live.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14">
            <Countdown target="2026-12-31T00:00:00" />
            <p className="eskil-eyebrow mt-6">Countdown to 31 December 2026</p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-14 max-w-xl">
            <NewsletterForm />
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-14">
            <p className="eskil-eyebrow">Follow us</p>
            <p className="mt-4 flex justify-center gap-6 text-[13px] tracking-[0.22em] uppercase">
              <a
                href="https://www.facebook.com/NordvikInteractive/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline underline-offset-4"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/nordvikliving"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline underline-offset-4"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/nordvikliving"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline underline-offset-4"
              >
                Twitter
              </a>
            </p>
            <p className="mt-8 text-[13px] text-[#8a8a8a]">
              <Link href="/" className="transition-colors hover:text-black">
                ← Back to the store
              </Link>
              <span className="mx-3">·</span>
              <span>© 2022 Nordvik Living, All Rights Reserved</span>
            </p>
          </div>
        </Reveal>
      </main>
    </>
  );
}
