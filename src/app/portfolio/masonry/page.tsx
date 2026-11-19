import { PageHero } from "@/components/sites/eskil/InfoPage";
import { PortfolioGrid } from "@/components/sites/eskil/PortfolioGrid";

export const metadata = { title: "Portfolio — Masonry | Eskil" };

export default function PortfolioMasonryPage() {
  return (
    <>
      <PageHero title="Portfolio — Masonry" eyebrow="Portfolio" />
      <main className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <PortfolioGrid variant="masonry" />
      </main>
    </>
  );
}
