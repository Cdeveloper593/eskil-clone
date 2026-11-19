import { PageHero } from "@/components/sites/eskil/InfoPage";
import { PortfolioGrid } from "@/components/sites/eskil/PortfolioGrid";

export const metadata = { title: "Portfolio — Info On Image | Eskil" };

export default function PortfolioInfoOnImagePage() {
  return (
    <>
      <PageHero title="Portfolio — Info On Image" eyebrow="Portfolio" />
      <main className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <PortfolioGrid variant="info-on-image" />
      </main>
    </>
  );
}
