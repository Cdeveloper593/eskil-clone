import { notFound } from "next/navigation";
import { infoPageBySlug } from "@/lib/eskil/pages";
import { InfoContent, PageHero } from "@/components/sites/eskil/InfoPage";

export const metadata = { title: "Returns & Refunds | Eskil" };

export default function ReturnsRefundsPage() {
  const page = infoPageBySlug("returns-refunds");
  if (!page) notFound();
  return (
    <>
      <PageHero title={page.title} />
      <main className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <InfoContent html={page.content} />
      </main>
    </>
  );
}
