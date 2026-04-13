import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { About } from "@/components/sections/About";
import { AuthorityBar } from "@/components/sections/AuthorityBar";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";
import { BackToTop } from "@/components/ui/BackToTop";
import { ThemeSelector } from "@/components/ui/ThemeSelector";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Portfolio } from "@/components/sections/Portfolio";
import { routing } from "@/i18n/routing";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const hero = await getTranslations({ locale, namespace: "hero" });
  const authority = await getTranslations({ locale, namespace: "authority" });
  const services = await getTranslations({ locale, namespace: "services" });
  const about = await getTranslations({ locale, namespace: "about" });
  const portfolio = await getTranslations({ locale, namespace: "portfolio" });
  const why = await getTranslations({ locale, namespace: "why" });
  const contact = await getTranslations({ locale, namespace: "contact" });
  const footer = await getTranslations({ locale, namespace: "footer" });
  const nav = await getTranslations({ locale, namespace: "nav" });

  const authorityItems = [
    { value: authority("experience"), label: authority("experience_label") },
    { value: authority("locations"), label: authority("locations_label") },
    { value: authority("membership"), label: authority("membership_label") },
    { value: authority("languages"), label: authority("languages_label") },
  ];

  const serviceKeys = [
    "insolvency",
    "banking",
    "arbitration",
    "infrastructure",
    "labor",
    "investment",
  ] as const;
  const whyKeys = ["standards", "financial", "international", "track_record"] as const;

  const serviceItems = serviceKeys.map((key) => ({
    key,
    title: services(`items.${key}.title`),
    description: services(`items.${key}.description`),
  }));

  const whyItems = whyKeys.map((key) => ({
    key,
    title: why(`items.${key}.title`),
    description: why(`items.${key}.description`),
  }));

  const portfolioKeys = ["rabigh", "airport", "railways", "aluminum", "bank_guarantee"] as const;
  const portfolioItems = portfolioKeys.map((key) => ({
    key,
    project: portfolio(`items.${key}.project`),
    value: portfolio(`items.${key}.value`),
    role: portfolio(`items.${key}.role`),
  }));

  const navItems = [
    { href: "#services", label: nav("services") },
    { href: "#about", label: nav("about") },
    { href: "#portfolio", label: nav("portfolio") },
    { href: "#why", label: nav("why") },
    { href: "#contact", label: nav("contact") },
  ];

  return (
    <main>
      <Header
        locale={locale}
        brand={nav("brand")}
        navItems={navItems}
        callLabel={nav("call")}
      />
      <Hero
        locale={locale}
        badge={hero("badge")}
        eyebrow={hero("eyebrow")}
        name={hero("name")}
        title={hero("title")}
        specialization={hero("specialization")}
        subheadline={hero("subheadline")}
        primaryCta={hero("cta_primary")}
        secondaryCta={hero("cta_secondary")}
        panelTitle={hero("panel_title")}
        panelText={hero("panel_text")}
        locationLabel={hero("location_label")}
        locationValue={hero("location_value")}
        accessLabel={hero("access_label")}
        accessValue={hero("access_value")}
        counselLabel={hero("counsel_label")}
        counselText={hero("counsel_text")}
        positioningLabel={hero("positioning_label")}
        metricYears={hero("metric_years")}
        metricCities={hero("metric_cities")}
        metricBilingual={hero("metric_bilingual")}
        profileAlt={hero("profile_alt")}
        licenceBadge={hero("licence_badge")}
      />
      <AuthorityBar items={authorityItems} />
      <Services
        locale={locale}
        eyebrow={services("eyebrow")}
        title={services("title")}
        subtitle={services("subtitle")}
        items={serviceItems}
      />
      <About
        locale={locale}
        eyebrow={about("eyebrow")}
        title={about("title")}
        paragraphs={[about("paragraph_1"), about("paragraph_2"), about("paragraph_3")]}
      />
      <Portfolio
        locale={locale}
        eyebrow={portfolio("eyebrow")}
        title={portfolio("title")}
        items={portfolioItems}
      />
      <WhyChoose locale={locale} eyebrow={why("eyebrow")} title={why("title")} items={whyItems} />
      <Testimonials locale={locale} />
      <Contact
        locale={locale}
        title={contact("title")}
        subtitle={contact("subtitle")}
        whatsappLabel={contact("whatsapp")}
        callLabel={contact("call")}
        emailLabel={contact("email_label")}
        locationLabel={contact("location_label")}
        availabilityLabel={contact("availability_label")}
        consultationLabel={contact("consultation_label")}
        location={contact("location")}
        hours={contact("hours")}
        emailValue="mdowayesh@gmail.com"
      />
      <Footer locale={locale} rights={footer("rights")} membership={footer("membership")} />
      <WhatsAppFAB />
      <BackToTop />
      <ThemeSelector />
    </main>
  );
}
