import { notFound } from "next/navigation";
import { infoPageBySlug } from "@/lib/eskil/pages";
import { FaqAccordion, PageHero } from "@/components/sites/eskil/InfoPage";
import { Reveal } from "@/components/sites/eskil/Reveal";

export const metadata = { title: "FAQ Page | Nordvik" };

export default function FaqPage() {
  const page = infoPageBySlug("faq-page");
  if (!page) notFound();
  return (
    <>
      <PageHero title="FAQ" eyebrow="Help & Support" />
      <main className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <Reveal>
          <p className="mb-10 text-[15px] leading-[1.85] text-[#555]">
            Frequently asked questions about Stòir products, delivery, assembly and
            returns. Can&rsquo;t find your answer? Write to us at{" "}
            <a href="mailto:support@example.com" className="text-black underline underline-offset-4">
              support@example.com
            </a>
            .
          </p>
        </Reveal>
        <FaqAccordion html={page.content} />
      </main>
    </>
  );
}
