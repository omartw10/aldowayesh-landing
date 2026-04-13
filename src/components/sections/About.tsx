import Image from "next/image";

type AboutProps = {
  locale: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export function About({ locale, eyebrow, title, paragraphs }: AboutProps) {
  const isArabic = locale === "ar";
  const displayFont = isArabic
    ? "font-[family-name:var(--font-arabic-display)]"
    : "font-[family-name:var(--font-english-display)]";
  const eyebrowClass = isArabic
    ? "text-sm tracking-[0.08em] text-[var(--color-text-muted)]"
    : "text-sm uppercase tracking-[0.3em] text-[var(--color-text-muted)]";
  const labelClass = isArabic
    ? "text-xs tracking-[0.08em] text-[var(--color-text-muted)]"
    : "text-xs uppercase tracking-[0.22em] text-[var(--color-text-muted)]";
  const leadParagraph = paragraphs[0];
  const supportingParagraphs = paragraphs.slice(1);

  const careerItems = [
    {
      num: "01",
      role: isArabic ? "شريك المدير" : "Managing Partner",
      firm: "CMS Global",
      location: "الرياض",
      period: "2023 — " + (isArabic ? "الحاضر" : "Present"),
      highlight: true,
    },
    {
      num: "02",
      role: isArabic ? "شريك" : "Partner",
      firm: "Clyde & Co",
      location: "الرياض",
      period: "2015 — 2023",
    },
    {
      num: "03",
      role: isArabic ? "عضو القسم التجاري" : "Commercial Associate",
      firm: "BSA LAW",
      location: "الرياض",
      period: isArabic ? "سابقاً" : "Previous",
    },
  ];

  const educationItems = [
    {
      num: "01",
      degree: "LL.M.",
      school: isArabic ? "مدرسة ديدمان للقانون" : "Dedman School of Law",
      university: "SMU",
      location: isArabic ? "دالاس، تكساس" : "Dallas, Texas",
      year: "2012",
    },
    {
      num: "02",
      degree: isArabic ? "بكالوريوس الأنظمة" : "LL.B.",
      school: isArabic ? "كلية القانون" : "College of Law",
      university: "جامعة الملك سعود",
      location: isArabic ? "الرياض" : "Riyadh",
      year: "2009",
    },
  ];

  return (
    <section id="about" data-reveal className="relative border-t border-[var(--color-border)]/50 bg-[var(--color-bg)] px-6 py-24 sm:px-8 lg:px-12 lg:py-32 overflow-hidden">
      {/* Background Ambient element */}
      <div className="absolute -start-24 top-1/4 h-96 w-96 bg-[var(--color-gold)] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          
          <div data-reveal className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-gold)]" />
                <p className={eyebrowClass}>{eyebrow}</p>
              </div>
              <h2 className={`text-[2.5rem] sm:text-[3.5rem] leading-[1.2] text-[var(--color-text)] ${displayFont}`}>
                {title}
              </h2>
            </div>

            <p className="text-[1.25rem] sm:text-[1.5rem] leading-[1.8] text-[var(--color-text-secondary)] font-light border-s-2 border-[var(--color-gold)]/30 ps-6">
              {leadParagraph}
            </p>

            {/* Career Timeline */}
            <div className="space-y-6 pt-4">
              <p className={labelClass}>{isArabic ? "المسار المهني" : "Career Path"}</p>
              <div className="space-y-4">
                {careerItems.map((item) => (
                  <div key={item.num} className="group flex gap-4">
                    <span className={`text-lg font-medium ${item.highlight ? 'text-[var(--color-gold)]' : 'text-[var(--color-gold)]/40'}`}>{item.num}</span>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium text-[var(--color-text)]">{item.role}</p>
                      <p className="text-sm text-[var(--color-gold-light)]">{item.firm}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">{item.location} · {item.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4 pt-4">
              <p className={labelClass}>{isArabic ? "التعليم" : "Education"}</p>
              <div className="space-y-3">
                {educationItems.map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <span className="text-lg font-medium text-[var(--color-gold)]/40">{item.num}</span>
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium text-[var(--color-text)]">{item.degree} — {item.university}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">{item.school} · {item.location} · {item.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {supportingParagraphs.map((paragraph, index) => (
              <div 
                key={index} 
                data-reveal 
                className="bg-[var(--color-bg-elevated)]/70 border border-[var(--color-border)]/60 rounded-2xl p-8 sm:p-10 shadow-sm hover:border-[var(--color-gold)]/30 transition-colors"
              >
                <p className="text-lg sm:text-[1.2rem] leading-[1.9] text-[var(--color-text-secondary)] font-light">
                  {paragraph}
                </p>
              </div>
            ))}

            <a
              href="https://x.com/aldowayesh_law"
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              data-service-float
              className="card-glow group relative block overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)] sm:p-7"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src="/aldowayesh-pic.png"
                  alt="X Platform"
                  fill
                  className="scale-105 object-cover opacity-[0.22] grayscale-[0.4] transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-[0.35] group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={50}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--color-bg-elevated)_0%,transparent_50%,var(--color-bg-elevated)_100%)]" aria-hidden="true" />
                <div className={`absolute inset-0 bg-[linear-gradient(to_right,var(--color-bg-elevated)_0%,transparent_70%,var(--color-bg-elevated)_100%)] ${isArabic ? "rotate-180" : ""}`} aria-hidden="true" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.08),transparent_60%)]" aria-hidden="true" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <p className={labelClass}>{isArabic ? "منصة X" : "X Platform"}</p>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold-dim)] bg-[var(--color-gold-dim)] text-[var(--color-gold-text)] transition-all duration-500 group-hover:scale-110 group-hover:bg-black group-hover:border-black group-hover:text-white">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </div>
                </div>
                <h3 className={`mt-6 text-xl sm:text-2xl leading-tight text-[var(--color-text)] transition-colors duration-500 group-hover:text-[var(--color-gold-light)] ${displayFont}`}>{isArabic ? "متابعة التحديثات القانونية" : "Legal Updates & Insights"}</h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] font-light opacity-80">@aldowayesh_law · 6,800+ {isArabic ? "متابع" : "followers"}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[var(--color-gold)] opacity-80 group-hover:opacity-100 transition-all">
                  <span>{isArabic ? "تابعنا على X" : "Follow us on X"}</span>
                  <svg className={`h-4 w-4 transition-transform duration-500 ${isArabic ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={isArabic ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} /></svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}