import { PageHero } from "@/components/sites/eskil/InfoPage";
import { PortfolioGrid } from "@/components/sites/eskil/PortfolioGrid";

export const metadata = { title: "Portfolio — Two Columns Wide | Eskil" };

export default function PortfolioTwoColumnsWidePage() {
  return (
    <>
      <PageHero title="Portfolio — Two Columns Wide" eyebrow="Portfolio" />
      <main className="px-2 py-16 sm:px-4 md:py-20">
        <PortfolioGrid variant="two-columns-wide" />
      </main>
    </>
  );
}
