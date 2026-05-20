import { footer, site } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-purple px-6 py-14 text-purple-mist sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center text-sm sm:gap-4">
        <p className="font-serif text-2xl text-white">{site.legalName}</p>
        <p>{footer.registration}</p>
        <p className="max-w-md text-purple-light">{footer.affiliation}</p>
        <p className="text-xs text-purple-light/80">{footer.photoCredit}</p>
        <p className="text-xs text-purple-light/60">
          © {year} {site.legalName}
        </p>
      </div>
    </footer>
  );
}
