import { notFound } from "next/navigation";
import { infoPageBySlug } from "@/lib/eskil/pages";
import { InfoContent, PageHero } from "@/components/sites/eskil/InfoPage";

export const metadata = { title: "Careers | Eskil" };

export default function CareersPage() {
  const page = infoPageBySlug("careers");
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
