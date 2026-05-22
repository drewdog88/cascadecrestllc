import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { complianceChecklist } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Rental compliance checklist | Cascade Crest LLC",
  description:
    "Oregon and Portland rental screening compliance checklist for Cascade Crest LLC.",
  robots: { index: false, follow: true },
};

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-cream">
      <LegalPage
        title={complianceChecklist.title}
        intro={complianceChecklist.intro}
        sections={complianceChecklist.items.map((item) => ({
          heading: item.required ? `${item.heading} (required)` : item.heading,
          body: item.body,
        }))}
        disclaimer={complianceChecklist.disclaimer}
      >
        <p className="mt-8 text-sm">
          Applicants: see{" "}
          <Link href="/screening-criteria" className="text-teal underline">
            screening criteria
          </Link>
          . Landlords: use FCRA-compliant screening via{" "}
          <Link href="/apply" className="text-teal underline">
            application flow
          </Link>{" "}
          and RentSpree—never DIY public-records sites for tenant denial decisions.
        </p>
      </LegalPage>
    </main>
  );
}
