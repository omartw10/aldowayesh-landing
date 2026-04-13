type TestimonialsProps = {
  locale: string;
};

const testimonials = {
  ar: [
    {
      text: "تعاملت مع المحامي الدويش في ملف إعسار معقد، وكان عمله دقيقاً ومتاحاً في كل المراحل.",
      source: "مؤسسة مالية — قطاع الخدمات",
    },
    {
      text: "إعادة الهيكلة تمت بسلاسة تامة. المحامي الدويش يفهم دقائق النظام ويحسن تقديم الحلول.",
      source: "شركة متعثرة — قطاع الأعمال",
    },
    {
      text: "ما يميز الدويش هو الخبرة في معالجة الإعسار وفهمه العميق للأنظمة السعودية.",
      source: "محاسب قانوني — القطاع المالي",
    },
  ],
  en: [
    {
      text: "I worked with Al-Dowayesh on a complex insolvency case — his work was precise and accessible at every stage.",
      source: "Financial Institution — Services Sector",
    },
    {
      text: "The restructuring was completed smoothly. Al-Dowayesh understands the intricacies of the law and presents solutions effectively.",
      source: "Distressed Company — Business Sector",
    },
    {
      text: "What sets Al-Dowayesh apart is his expertise in insolvency matters and deep understanding of Saudi regulations.",
      source: "Legal Accountant — Financial Sector",
    },
  ],
};

export function Testimonials({ locale }: TestimonialsProps) {
  const isArabic = locale === "ar";
  const displayFont = isArabic
    ? "font-[family-name:var(--font-arabic-display)]"
    : "font-[family-name:var(--font-english-display)]";
  const eyebrowClass = isArabic
    ? "text-sm tracking-[0.08em] text-[var(--color-gold-text)]"
    : "text-sm uppercase tracking-[0.3em] text-[var(--color-gold-text)]";
  const items = isArabic ? testimonials.ar : testimonials.en;
  const sectionTitle = isArabic ? "ما يقوله العملاء" : "Client Testimonials";
  const eyebrow = isArabic ? "شهادات الثقة" : "Trust & Credibility";

  return (
    <section data-reveal className="section-divider relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-gold-dim),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl space-y-12">
        <div className="max-w-3xl space-y-5 text-start">
          <p className={eyebrowClass}>{eyebrow}</p>
          <h2 className={`text-4xl leading-tight text-[var(--color-text)] sm:text-5xl ${displayFont}`}>
            {sectionTitle}
          </h2>
          <div data-reveal-line className="h-0.5 w-20 bg-[var(--color-gold)]" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              data-reveal
              key={index}
              className="card-glow group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-7 sm:p-8"
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,var(--color-gold-dim),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-6">
                {/* Quote mark */}
                <svg
                  className="h-8 w-8 text-[var(--color-gold)] opacity-40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>

                {/* Quote text */}
                <p className="text-lg leading-8 text-[var(--color-text)] sm:text-xl sm:leading-9">
                  {item.text}
                </p>

                {/* Source */}
                <div className="border-t border-[var(--color-border)] pt-5">
                  <p className="text-sm font-medium text-[var(--color-gold-text)]">
                    {item.source}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
