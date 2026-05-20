import Image from "next/image";
import { transportation } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

function TransportIcon({ type }: { type: "bus" | "bike" | "walk" }) {
  const paths = {
    bus: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 6v3m8-3v3M5 9h14l-1 9H6L5 9zm2 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      />
    ),
    bike: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 18a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm13 0a3.5 3.5 0 110-7 3.5 3.5 0 010 7zM12 6l2 4m-2-4l-3 7m5-7h3m-9 0H7"
      />
    ),
    walk: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 4a2 2 0 11-4 0 2 2 0 014 0zM7 21l2-4m0 0l2-5 2 5m-2-5h4m4 0l2 4m0 0l2-5-2 5m2-5h-4"
      />
    ),
  };

  return (
    <svg
      className="h-8 w-8 text-teal"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      {paths[type]}
    </svg>
  );
}

export function Transportation() {
  return (
    <section
      id="getting-around"
      className="bg-purple-mist py-24 sm:py-32"
      aria-labelledby="transport-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-teal">
              Getting around
            </p>
            <h2
              id="transport-heading"
              className="mt-4 font-serif text-3xl font-light text-purple sm:text-5xl"
            >
              {transportation.headline}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-purple-medium">
              {transportation.intro}
            </p>
            <ul className="mt-12 space-y-10">
              {transportation.pillars.map((pillar) => (
                <li key={pillar.name} className="flex gap-5">
                  <TransportIcon type={pillar.icon} />
                  <div>
                    <h3 className="font-serif text-xl text-purple">
                      {pillar.name}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-purple-medium">
                      {pillar.blurb}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal className="relative aspect-[3/4] overflow-hidden rounded-sm lg:aspect-[4/5]">
            <Image
              src={transportation.image}
              alt={transportation.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-purple/50 to-transparent"
              aria-hidden
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
