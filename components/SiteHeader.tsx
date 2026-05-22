import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 sm:py-5">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center transition-opacity hover:opacity-90"
          aria-label="Cascade Crest home"
        >
          <Image
            src={brand.icon}
            alt=""
            width={220}
            height={220}
            className="h-9 w-auto shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] md:hidden"
            priority
          />
          <Image
            src={brand.wordmark}
            alt={brand.logoAlt}
            width={964}
            height={299}
            className="hidden h-10 w-auto max-w-[min(100%,36rem)] drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] md:block lg:h-11"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
