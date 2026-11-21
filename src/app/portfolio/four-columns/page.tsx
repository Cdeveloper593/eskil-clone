import { PageHero } from "@/components/sites/eskil/InfoPage";
import { PortfolioGrid } from "@/components/sites/eskil/PortfolioGrid";

export const metadata = { title: "Portfolio — Four Columns | Nordvik" };

export default function PortfolioFourColumnsPage() {
  return (
    <>
      <PageHero title="Portfolio — Four Columns" eyebrow="Portfolio" />
      <main className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <PortfolioGrid variant="four-columns" />
      </main>
    </>
  );
}
