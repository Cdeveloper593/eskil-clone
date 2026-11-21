import { PageHero } from "@/components/sites/eskil/InfoPage";
import { PortfolioGrid } from "@/components/sites/eskil/PortfolioGrid";

export const metadata = { title: "Portfolio — Image On Hover | Nordvik" };

export default function PortfolioImageOnHoverPage() {
  return (
    <>
      <PageHero title="Portfolio — Image On Hover" eyebrow="Portfolio" />
      <main className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <PortfolioGrid variant="image-on-hover" />
      </main>
    </>
  );
}
