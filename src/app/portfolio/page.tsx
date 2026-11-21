import { PageHero } from "@/components/sites/eskil/InfoPage";
import { PortfolioGrid } from "@/components/sites/eskil/PortfolioGrid";

export const metadata = { title: "Portfolio | Nordvik" };

export default function PortfolioPage() {
  return (
    <>
      <PageHero title="Portfolio" eyebrow="Portfolio" />
      <main className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <PortfolioGrid variant="standard" />
      </main>
    </>
  );
}
