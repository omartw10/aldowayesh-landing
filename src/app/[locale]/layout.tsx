import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { LocaleDocument } from "@/components/ui/LocaleDocument";
import { SiteMotion } from "@/components/ui/SiteMotion";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SchemaJsonLd } from "@/components/ui/SchemaJsonLd";
import { routing } from "@/i18n/routing";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const nav = await getTranslations({ locale, namespace: "nav" });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aldowayesh-law.vercel.app";

  return {
    title: `${nav("brand")} | ${t("title")}`,
    description: t("description"),
    openGraph: {
      title: locale === "ar" ? "المحامي محمد الدويش" : "Mohammed Al-Dowayesh",
      description: locale === "ar"
        ? "خبير الإعسار وإعادة الهيكلة المالية"
        : "Bankruptcy & Restructuring Expert",
      url: `${siteUrl}/${locale}`,
      siteName: "Mohammed Al-Dowayesh",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "المحامي محمد الدويش",
        },
      ],
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: locale === "ar" ? "المحامي محمد الدويش" : "Mohammed Al-Dowayesh",
      description: locale === "ar"
        ? "خبير الإعسار وإعادة الهيكلة"
        : "Bankruptcy & Restructuring Expert",
      images: ["/og-image.png"],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const direction = locale === "ar" ? "rtl" : "ltr";

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LocaleDocument dir={direction} locale={locale} />
      <SchemaJsonLd locale={locale} />
      <SiteMotion />
      <LoadingScreen />
      <ScrollProgress />
      <div
        dir={direction}
        className="min-h-screen bg-[var(--color-bg)] transition-colors duration-400"
      >
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
