import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

import { Amiri, Tajawal, Playfair_Display, Crimson_Pro } from "next/font/google";
import { PremiumOrnaments } from "@/components/ui/PremiumOrnaments";

const arabicDisplay = Amiri({
  subsets: ["arabic"],
  variable: "--font-arabic-display",
  weight: ["400", "700"],
  display: "swap",
});

const arabicBody = Tajawal({
  subsets: ["arabic"],
  variable: "--font-arabic-body",
  weight: ["400", "500", "700"],
  display: "swap",
});

const englishDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-english-display",
  weight: ["400", "500", "700"],
  display: "swap",
});

const englishBody = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-english-body",
  weight: ["400", "600"],
  display: "swap",
});

const siteUrl = "https://aldowayesh-law.vercel.app";

const localeBootstrap = `(function () {
  var locale = location.pathname.split("/")[1] === "en" ? "en" : "ar";
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
})();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mohammed Al-Dowayesh | Managing Partner at CMS Global",
    template: "%s | Mohammed Al-Dowayesh",
  },
  description:
    "Official site of Mohammed Al-Dowayesh — Managing Partner at CMS Global, Expert in Saudi Bankruptcy Law & Restructuring.",
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
  alternates: {
    languages: {
      ar: "/ar",
      en: "/en",
    },
  },
  openGraph: {
    title: "Mohammed Al-Dowayesh",
    description:
      "Managing Partner at CMS Global — Expert in Bankruptcy Law & Restructuring",
    url: siteUrl,
    siteName: "Mohammed Al-Dowayesh",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/aldowayesh-og.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Al-Dowayesh — Managing Partner at CMS Global",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Al-Dowayesh",
    description:
      "Managing Partner at CMS Global — Expert in Bankruptcy Law & Restructuring",
    images: ["/aldowayesh-og.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${arabicDisplay.variable} ${arabicBody.variable} ${englishDisplay.variable} ${englishBody.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <PremiumOrnaments />
        <Script id="locale-bootstrap" strategy="beforeInteractive">
          {localeBootstrap}
        </Script>
        {children}
      </body>
    </html>
  );
}