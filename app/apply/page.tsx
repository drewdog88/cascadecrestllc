import Link from "next/link";
import { ScreeningHandoff } from "@/components/apply/ScreeningHandoff";
import { site } from "@/lib/content";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-cream">
      <header className="border-b border-purple-light/40 bg-purple px-6 py-10 text-white sm:px-10">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.2em] text-purple-light hover:text-white"
          >
            ← {site.name}
          </Link>
          <h1 className="mt-4 font-serif text-4xl font-light">Apply for tenancy</h1>
          <p className="mt-3 text-sm text-purple-mist">
            {site.legalName} · Disclosures on this site · Application & screening on
            our licensed partner (no applicant data stored here)
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-2xl px-6 py-12 sm:px-10">
        <ScreeningHandoff />
      </div>
    </main>
  );
}
