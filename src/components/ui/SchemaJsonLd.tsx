type SchemaProps = {
  locale: string;
};

export function SchemaJsonLd({ locale }: SchemaProps) {
  const isArabic = locale === "ar";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: isArabic
      ? "المحامي محمد الدويش"
      : "Mohammed Al-Dowayesh",
    alternateName: isArabic
      ? "Mohammed Al-Dowayesh"
      : "المحامي محمد الدويش",
    jobTitle: isArabic ? "شريك مدير | خبير الإعسار وإعادة الهيكلة" : "Managing Partner | Insolvency & Restructuring Expert",
    description: isArabic
      ? "شريك مدير في سي إم إس (CMS) العالمية — خبير معتمد في نظام الإفلاس السعودي وإعادة الهيكلة"
      : "Managing Partner at CMS Global — Certified Expert in Saudi Bankruptcy Law & Restructuring",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://aldowayesh-law.vercel.app",
    telephone: "+966506488848",
    image: "/aldowayesh-pic.png",
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: isArabic
        ? "مركز الملك عبدالله المالي (KAFD)، مبنى 1.09، الطابق السادس"
        : "King Abdullah Financial District (KAFD), Building 1.09, 6th Floor",
      addressLocality: isArabic ? "الرياض" : "Riyadh",
      addressRegion: isArabic ? "مركز الملك عبدالله المالي" : "KAFD",
      postalCode: "13512",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.470737,
      longitude: 46.422503,
    },
    areaServed: [
      {
        "@type": "City",
        name: isArabic ? "الرياض" : "Riyadh",
      },
      {
        "@type": "City",
        name: isArabic ? "جدة" : "Jeddah",
      },
      {
        "@type": "City",
        name: isArabic ? "الدمام" : "Dammam",
      },
      {
        "@type": "City",
        name: isArabic ? "لندن" : "London",
      },
      {
        "@type": "City",
        name: isArabic ? "جنيف" : "Geneva",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "17:00",
    },
    knowsLanguage: ["ar", "en"],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: isArabic ? "رخصة محاماة من وزارة العدل" : "Ministry of Justice Attorney License",
      recognizedBy: {
        "@type": "Organization",
        name: isArabic
          ? "الهيئة السعودية للمحامين"
          : "Saudi Bar Association",
      },
    },
    sameAs: [
      "https://x.com/aldowayesh_law",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
