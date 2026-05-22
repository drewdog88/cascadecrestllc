import Link from "next/link";

/** Legacy URL — handoff goes directly to RentSpree; redirect applicants home. */
export default function ApplySuccessPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-serif text-3xl text-purple">Apply for tenancy</h1>
        <p className="mt-6 text-base leading-relaxed text-foreground/80">
          Applications are completed on our screening partner site. Start from the
          apply page if you have not finished disclosures yet.
        </p>
        <Link
          href="/apply"
          className="mt-8 inline-block rounded-md bg-teal px-6 py-3 text-sm font-medium text-white"
        >
          Go to apply
        </Link>
        <Link href="/" className="mt-6 block text-sm text-teal underline">
          Return home
        </Link>
      </div>
    </main>
  );
}
