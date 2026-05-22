import type { Metadata } from "next";
import { ComplianceChecklist } from "@/components/ComplianceChecklist";

export const metadata: Metadata = {
  title: "Oregon & Portland rental compliance checklist | Cascade Crest LLC",
  description:
    "Safety, habitability, Portland-specific requirements, documentation, and maintenance checklist for Cascade Crest LLC rentals.",
  robots: { index: false, follow: true },
};

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-cream">
      <ComplianceChecklist />
    </main>
  );
}
