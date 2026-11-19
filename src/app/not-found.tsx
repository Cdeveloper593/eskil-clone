import Link from "next/link";
import { Reveal } from "@/components/sites/eskil/Reveal";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 py-20 text-center md:px-8 md:py-28">
      <Reveal>
        <p className="eskil-eyebrow">Error 404</p>
        <p className="eskil-display mt-4 text-[120px] leading-none text-black md:text-[180px]">
          404
        </p>
        <h1 className="eskil-display mt-4 text-[34px] leading-tight text-black md:text-[44px]">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[#555]">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/" className="eskil-btn">
            Back to home
          </Link>
          <Link href="/shop" className="eskil-btn eskil-btn--outline">
            Browse the shop
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
