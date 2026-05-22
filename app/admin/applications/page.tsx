import Link from "next/link";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/admin/SignOutButton";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { screeningConfig } from "@/lib/screening";

export const metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminApplicationsPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login?from=/admin/applications");
  }

  return (
    <main className="min-h-screen bg-cream px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-serif text-3xl text-purple">Screening admin</h1>
          <SignOutButton />
        </div>
        <Link
          href="/"
          className="mt-2 inline-block text-sm text-foreground/60 hover:text-teal"
        >
          ← Site home
        </Link>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-foreground/80">
          <p>
            This site intentionally <strong>does not store applicant PII</strong>.
            Review applications, screening reports, receipts, and decision notes in{" "}
            {screeningConfig.providerLabel}.
          </p>
          <p>
            <a
              href={screeningConfig.landlordDashboardUrl}
              className="inline-block rounded-md bg-purple px-5 py-2.5 font-medium text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open {screeningConfig.providerLabel} landlord dashboard
            </a>
          </p>
          <p>{screeningConfig.setupNote}</p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <Link href="/screening-criteria" className="text-teal underline">
                Screening criteria
              </Link>{" "}
              (published on this site)
            </li>
            <li>
              <Link href="/compliance" className="text-teal underline">
                Compliance checklist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
