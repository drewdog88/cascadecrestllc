import Link from "next/link";

type Section = { heading: string; body: string };

type LegalPageProps = {
  title: string;
  intro?: string;
  sections: readonly Section[];
  disclaimer?: string;
  children?: React.ReactNode;
};

export function LegalPage({
  title,
  intro,
  sections,
  disclaimer,
  children,
}: LegalPageProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <p className="mb-6">
        <Link
          href="/"
          className="text-sm text-teal underline-offset-2 hover:underline"
        >
          ← Home
        </Link>
        {" · "}
        <Link
          href="/apply"
          className="text-sm text-teal underline-offset-2 hover:underline"
        >
          Apply
        </Link>
      </p>
      <h1 className="font-serif text-4xl font-light text-purple">{title}</h1>
      {intro ? (
        <p className="mt-6 text-base leading-relaxed text-foreground/80">
          {intro}
        </p>
      ) : null}
      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-serif text-xl text-purple">{s.heading}</h2>
            <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-foreground/80">
              {s.body}
            </p>
          </section>
        ))}
      </div>
      {children}
      {disclaimer ? (
        <p className="mt-12 border-t border-purple-light/40 pt-8 text-sm text-foreground/60">
          {disclaimer}
        </p>
      ) : null}
    </article>
  );
}
