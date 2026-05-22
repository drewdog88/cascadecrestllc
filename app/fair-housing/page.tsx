import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { fairHousingNotice } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Fair housing | Cascade Crest LLC",
  description: "Fair housing notice for Cascade Crest LLC.",
  robots: { index: true, follow: true },
};

export default function FairHousingPage() {
  return (
    <main className="min-h-screen bg-cream">
      <LegalPage
        title={fairHousingNotice.title}
        sections={[{ heading: "Notice", body: fairHousingNotice.body }]}
      />
    </main>
  );
}
