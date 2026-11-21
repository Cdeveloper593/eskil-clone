import { PageHero } from "@/components/sites/eskil/InfoPage";
import { PortfolioGrid } from "@/components/sites/eskil/PortfolioGrid";

export const metadata = { title: "Portfolio — Two Columns | Nordvik" };

export default function PortfolioTwoColumnsPage() {
  return (
    <>
      <PageHero title="Portfolio — Two Columns" eyebrow="Portfolio" />
      <main className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <PortfolioGrid variant="two-columns" />
      </main>
    </>
  );
}
