import { PageHero } from "@/components/sites/eskil/InfoPage";
import { PortfolioGrid } from "@/components/sites/eskil/PortfolioGrid";

export const metadata = { title: "Portfolio — Gallery | Eskil" };

export default function PortfolioGalleryPage() {
  return (
    <>
      <PageHero title="Portfolio — Gallery" eyebrow="Portfolio" />
      <main className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <PortfolioGrid variant="gallery" />
      </main>
    </>
  );
}
