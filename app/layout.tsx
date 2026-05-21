import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { metadataDescription, site } from "@/lib/content";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cascadecrestllc.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} | ${site.legalName}`,
  description: metadataDescription,
  robots: "index, follow, noai, noimageai",
  openGraph: {
    title: `${site.name} | ${site.legalName}`,
    description: metadataDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.legalName}`,
    description: metadataDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
