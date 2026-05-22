import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { screeningCriteria } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Screening criteria | Cascade Crest LLC",
  description: "Tenant screening criteria for Cascade Crest LLC rental applications in Oregon.",
  robots: { index: true, follow: true },
};

export default function ScreeningCriteriaPage() {
  return (
    <main className="min-h-screen bg-cream">
      <LegalPage
        title={screeningCriteria.title}
        intro={screeningCriteria.intro}
        sections={screeningCriteria.sections}
        disclaimer={screeningCriteria.disclaimer}
      >
        <ul className="mt-10 space-y-2 text-sm">
          {screeningCriteria.resources.map((r) => (
            <li key={r.url}>
              <a
                href={r.url}
                className="text-teal underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {r.label}
              </a>
            </li>
          ))}
        </ul>
      </LegalPage>
    </main>
  );
}
