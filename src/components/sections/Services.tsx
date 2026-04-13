type ServiceItem = {
  key: string;
  title: string;
  description: string;
};

type ServicesProps = {
  locale: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
};

export function Services({ locale, eyebrow, title, subtitle, items }: ServicesProps) {
  const isArabic = locale === "ar";
  const displayFont = isArabic
    ? "font-[family-name:var(--font-arabic-display)]"
    : "font-[family-name:var(--font-english-display)]";
  const eyebrowClass = isArabic
    ? "text-sm tracking-widest text-[var(--color-gold)] font-medium"
    : "text-xs uppercase tracking-[0.32em] text-[var(--color-gold)] font-medium";
  const cardMetaClass = isArabic
    ? "text-[10px] tracking-widest text-[var(--color-text-muted)] uppercase font-semibold"
    : "text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-semibold";
  const note = isArabic
    ? "بنية خدمات مصاغة للملفات التي تتطلب قراءة تنظيمية دقيقة وصياغة متوازنة."
    : "An advisory structure designed for matters that demand regulatory precision and balanced drafting.";

  return (
    <section id="services" data-reveal className="relative px-6 py-24 sm:px-8 lg:px-12 lg:py-32 bg-[var(--color-bg)] transition-colors duration-400">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-8 lg:sticky lg:top-36">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-gold)]" />
                <p className={eyebrowClass}>{eyebrow}</p>
              </div>
              <h2 className={`text-[2.5rem] sm:text-[3.5rem] leading-[1.2] text-[var(--color-text)] ${displayFont}`}>
                {title}
              </h2>
            </div>
            
            <p className="max-w-md text-lg sm:text-xl leading-relaxed text-[var(--color-text-secondary)] font-light opacity-90">
              {subtitle}
            </p>

            <div className="rounded-2xl border border-[var(--color-gold)]/10 bg-[var(--color-surface)]/60 p-8 border-s-4 border-s-[var(--color-gold)]/40 shadow-sm">
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)] font-light italic">
                {note}
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((item, index) => (
              <article
                data-reveal
                data-service-card
                key={item.key}
                className={`group relative overflow-hidden rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-bg-elevated)]/70 p-8 sm:p-10 transition-all duration-500 hover:border-[var(--color-gold)]/40 hover:-translate-y-1 shadow-sm`}
              >
                {/* Individual cell hover glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-gold-dim),transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" aria-hidden="true" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-10">
                    <div className="h-px w-12 bg-[var(--color-gold)]/40 group-hover:w-16 transition-all duration-500" aria-hidden="true" />
                    <span className="text-4xl font-light text-[var(--color-gold)] opacity-[0.08] group-hover:opacity-[0.15] transition-opacity tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className={`text-2xl sm:text-[1.75rem] leading-tight text-[var(--color-text)] mb-6 transition-colors duration-500 group-hover:text-[var(--color-gold-light)] ${displayFont}`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-base sm:text-[1.05rem] leading-[1.8] text-[var(--color-text-secondary)] font-light mb-auto opacity-90">
                    {item.description}
                  </p>
                  
                  <div className={`mt-10 pt-6 border-t border-[var(--color-border)]/40 flex items-center justify-between ${cardMetaClass}`}>
                    <span className="text-[var(--color-gold)] opacity-70">CASE {String(index + 1).padStart(2, "0")}</span>
                    <span className="opacity-60">{isArabic ? "استشارة متخصصة" : "Specialized Advisory"}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
