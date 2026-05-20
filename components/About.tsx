import { about } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  const paragraphs = about.body.split("\n\n");

  return (
    <section
      id="about"
      className="border-t border-purple-light/60 bg-background py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-teal">
            {about.title}
          </p>
          <h2
            id="about-heading"
            className="sr-only"
          >
            About Cascade Crest
          </h2>
          <div className="mt-8 space-y-6 font-sans text-lg leading-relaxed text-purple-medium">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
