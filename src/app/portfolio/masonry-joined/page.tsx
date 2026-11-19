import { PageHero } from "@/components/sites/eskil/InfoPage";
import { PortfolioGrid } from "@/components/sites/eskil/PortfolioGrid";

export const metadata = { title: "Portfolio — Masonry Joined | Eskil" };

export default function PortfolioMasonryJoinedPage() {
  return (
    <>
      <PageHero title="Portfolio — Masonry Joined" eyebrow="Portfolio" />
      <main className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <PortfolioGrid variant="masonry-joined" />
      </main>
    </>
  );
}
