import { PageHero } from "@/components/sites/eskil/InfoPage";
import { PortfolioGrid } from "@/components/sites/eskil/PortfolioGrid";

export const metadata = { title: "Portfolio — Info On Hover | Eskil" };

export default function PortfolioInfoOnHoverPage() {
  return (
    <>
      <PageHero title="Portfolio — Info On Hover" eyebrow="Portfolio" />
      <main className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <PortfolioGrid variant="info-on-hover" />
      </main>
    </>
  );
}
