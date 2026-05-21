import Image from "next/image";
import { nearbyPlaces, neighborhoodLabels, proximity } from "@/lib/content";

export function Neighborhood() {
  return (
    <section
      id="neighborhood"
      className="bg-cream py-24 sm:py-32"
      aria-labelledby="neighborhood-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <header className="reveal max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-teal">
            The neighborhood
          </p>
          <h2
            id="neighborhood-heading"
            className="mt-4 font-serif text-3xl font-light text-purple sm:text-5xl"
          >
            {proximity.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-purple-medium">
            {proximity.subhead}
          </p>
        </header>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {neighborhoodLabels.map((item) => (
            <div
              key={item.label}
              className="reveal group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-purple/40" aria-hidden />
              <p className="absolute inset-x-0 bottom-0 p-4 font-serif text-lg text-white sm:text-xl">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <ul className="mt-20 space-y-16 sm:space-y-24">
          {nearbyPlaces.map((place, index) => {
            const reversed = index % 2 === 1;
            return (
              <li key={place.name} className="reveal">
                <article
                  className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                    reversed ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={place.image}
                      alt={place.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className={reversed ? "md:text-right" : ""}>
                    <h3 className="font-serif text-2xl font-light text-purple sm:text-3xl">
                      {place.name}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-purple-medium">
                      {place.blurb}
                    </p>
                    {place.credit ? (
                      <p
                        className={`mt-3 text-xs text-purple-medium/80 ${reversed ? "md:text-right" : ""}`}
                      >
                        Trail map courtesy of{" "}
                        <a
                          href={place.credit.url}
                          className="underline decoration-purple-medium/40 underline-offset-2 transition-colors hover:text-purple"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {place.credit.name}
                        </a>
                      </p>
                    ) : null}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
