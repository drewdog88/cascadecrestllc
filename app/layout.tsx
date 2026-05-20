import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { metadataDescription, hero, site } from "@/lib/content";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.legalName}`,
  description: metadataDescription,
  robots: "index, follow, noai, noimageai",
  openGraph: {
    title: `${site.name} | ${site.legalName}`,
    description: metadataDescription,
    type: "website",
    images: [
      {
        url: hero.image,
        width: 2400,
        height: 1600,
        alt: hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.legalName}`,
    description: metadataDescription,
    images: [hero.image],
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
