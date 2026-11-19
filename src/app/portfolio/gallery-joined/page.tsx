import { PageHero } from "@/components/sites/eskil/InfoPage";
import { PortfolioGrid } from "@/components/sites/eskil/PortfolioGrid";

export const metadata = { title: "Portfolio — Gallery Joined | Eskil" };

export default function PortfolioGalleryJoinedPage() {
  return (
    <>
      <PageHero title="Portfolio — Gallery Joined" eyebrow="Portfolio" />
      <main className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <PortfolioGrid variant="gallery-joined" />
      </main>
    </>
  );
}
