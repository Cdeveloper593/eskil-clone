import { PageHero } from "@/components/sites/eskil/InfoPage";
import { PortfolioGrid } from "@/components/sites/eskil/PortfolioGrid";

export const metadata = { title: "Portfolio — Four Columns Wide | Eskil" };

export default function PortfolioFourColumnsWidePage() {
  return (
    <>
      <PageHero title="Portfolio — Four Columns Wide" eyebrow="Portfolio" />
      <main className="px-2 py-16 sm:px-4 md:py-20">
        <PortfolioGrid variant="four-columns-wide" />
      </main>
    </>
  );
}
