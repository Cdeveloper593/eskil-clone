import { PageHero } from "@/components/sites/eskil/InfoPage";
import { PortfolioGrid } from "@/components/sites/eskil/PortfolioGrid";

export const metadata = { title: "Portfolio — Three Columns Wide | Nordvik" };

export default function PortfolioThreeColumnsWidePage() {
  return (
    <>
      <PageHero title="Portfolio — Three Columns Wide" eyebrow="Portfolio" />
      <main className="px-2 py-16 sm:px-4 md:py-20">
        <PortfolioGrid variant="three-columns-wide" />
      </main>
    </>
  );
}
