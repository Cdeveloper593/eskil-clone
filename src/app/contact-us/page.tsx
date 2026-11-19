"use client";

import { infoPageBySlug } from "@/lib/eskil/pages";
import { ContactForm, InfoContent, PageHero } from "@/components/sites/eskil/InfoPage";
import { Reveal } from "@/components/sites/eskil/Reveal";

const CONTACT_DETAILS = [
  {
    label: "E-mail",
    lines: ["Orders: salesorder@qodestoir.com", "General inquiries: customerservice@qodestoir.com", "Service / claims: service@qodestoir.com"],
    hrefs: ["mailto:salesorder@qodestoir.com", "mailto:customerservice@qodestoir.com", "mailto:service@qodestoir.com"],
  },
  {
    label: "Phone",
    lines: ["+355 0992 8855"],
    hrefs: ["tel:+35509928855"],
  },
  {
    label: "Opening hours",
    lines: ["Monday – Friday: 08.00 – 17.00", "Saturday: 09.00 – 16.30"],
    hrefs: [],
  },
];

export default function ContactUsPage() {
  const page = infoPageBySlug("contact-us");
  return (
    <>
      <PageHero title="Contact Us" eyebrow="Get in touch" />
      <main className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        {page ? (
          <div className="mx-auto max-w-3xl text-center">
            <InfoContent html={page.content} />
          </div>
        ) : null}

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CONTACT_DETAILS.map((block) => (
            <Reveal key={block.label}>
              <div className="h-full border border-[#e8e8e8] bg-[#f7f6f4] px-6 py-8 text-center">
                <p className="eskil-eyebrow">{block.label}</p>
                <div className="mt-4 space-y-2 text-[15px] leading-relaxed text-[#555]">
                  {block.lines.map((line, i) =>
                    block.hrefs[i] ? (
                      <p key={line}>
                        <a href={block.hrefs[i]} className="transition-colors hover:text-black">
                          {line}
                        </a>
                      </p>
                    ) : (
                      <p key={line}>{line}</p>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Reveal>
            <h2 className="eskil-display text-center text-3xl text-black">Leave a message</h2>
            <p className="mt-3 text-center text-[15px] leading-relaxed text-[#555]">
              Got any questions? We look forward to answering all your requests.
            </p>
          </Reveal>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
