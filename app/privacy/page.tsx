import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyPolicy } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy policy | Cascade Crest LLC",
  description: "Privacy policy for Cascade Crest LLC rental applications and website.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream">
      <LegalPage
        title={privacyPolicy.title}
        intro={`Last updated: ${privacyPolicy.lastUpdated}`}
        sections={privacyPolicy.sections}
      />
    </main>
  );
}
