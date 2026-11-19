import { PageHero } from "@/components/sites/eskil/InfoPage";
import { PortfolioGrid } from "@/components/sites/eskil/PortfolioGrid";

export const metadata = { title: "Portfolio — Three Columns | Eskil" };

export default function PortfolioThreeColumnsPage() {
  return (
    <>
      <PageHero title="Portfolio — Three Columns" eyebrow="Portfolio" />
      <main className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <PortfolioGrid variant="three-columns" />
      </main>
    </>
  );
}
