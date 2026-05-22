import Image from "next/image";
import Link from "next/link";
import { apply, brand, footer, site } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-purple px-6 py-14 text-purple-mist sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center text-sm sm:gap-4">
        <Link href="/" className="inline-block">
          <Image
            src={brand.wordmark}
            alt={brand.logoAlt}
            width={1400}
            height={412}
            className="mx-auto h-12 w-auto max-w-full brightness-0 invert drop-shadow-sm"
          />
        </Link>
        <p className="sr-only">{site.legalName}</p>
        <Link
          href={apply.href}
          className="rounded-md border border-purple-light/60 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:border-white hover:bg-white/10"
        >
          {apply.ctaLabel}
        </Link>
        <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
          {footer.legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-purple-light underline-offset-2 hover:text-white hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p>{footer.registration}</p>
        <p className="max-w-md text-purple-light">{footer.affiliation}</p>
        <ul className="max-w-lg space-y-1 text-xs text-purple-light/80">
          {footer.photoCredits.map((item) => (
            <li key={item.label}>
              {item.label}:{" "}
              <a
                href={item.url}
                className="underline decoration-purple-light/50 underline-offset-2 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-purple-light/60">
          © {year} {site.legalName}
        </p>
      </div>
    </footer>
  );
}
