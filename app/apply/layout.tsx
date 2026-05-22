import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for tenancy | Cascade Crest LLC",
  description: "Rental application for Cascade Crest LLC properties in Oregon.",
  robots: { index: false, follow: false },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
