import Image from "next/image";
import { galleryImages } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

const spanClasses: Record<string, string> = {
  wide: "sm:col-span-2 sm:row-span-1",
  tall: "sm:row-span-2",
  normal: "",
};

export function ImageGallery() {
  return (
    <section
      id="gallery"
      className="bg-background py-24 sm:py-32"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <ScrollReveal>
          <header className="mb-14 text-center sm:mb-20">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-teal">
              Portland & the Pacific Northwest
            </p>
            <h2
              id="gallery-heading"
              className="mt-4 font-serif text-3xl font-light text-purple sm:text-5xl"
            >
              A sense of place
            </h2>
          </header>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <ScrollReveal
              key={img.src}
              className={`relative aspect-square overflow-hidden rounded-sm sm:aspect-auto sm:min-h-[200px] ${
                spanClasses[img.span ?? "normal"]
              } ${i === 0 ? "col-span-2 aspect-[2/1] sm:col-span-2" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
