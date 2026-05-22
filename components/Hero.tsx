import Image from "next/image";
import Link from "next/link";
import { apply, hero, site } from "@/lib/content";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] items-end justify-center overflow-hidden"
      aria-label="Introduction"
    >
      <Image
        src={hero.image}
        alt={hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-purple via-purple/70 to-purple/20"
        aria-hidden
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-32 text-center sm:px-10 sm:pb-28 sm:text-left">
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-purple-light">
          {site.heroSubline}
        </p>
        <h1 className="font-serif text-5xl font-light tracking-tight text-white sm:text-7xl md:text-8xl">
          {site.name}
        </h1>
        <p className="mt-5 max-w-xl font-sans text-base text-purple-mist sm:text-lg">
          {site.tagline}
        </p>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:justify-start">
          <a
            href="#neighborhood"
            className="text-xs uppercase tracking-[0.25em] text-purple-light transition-colors hover:text-white"
          >
            Explore
          </a>
          <Link
            href={apply.href}
            className="rounded-md bg-teal px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-teal/90"
          >
            {apply.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
