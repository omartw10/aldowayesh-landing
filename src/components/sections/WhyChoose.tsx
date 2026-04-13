type WhyItem = {
  key: string;
  title: string;
  description: string;
};

type WhyChooseProps = {
  locale: string;
  eyebrow: string;
  title: string;
  items: WhyItem[];
};

export function WhyChoose({ locale, eyebrow, title, items }: WhyChooseProps) {
  const isArabic = locale === "ar";
  const displayFont = isArabic
    ? "font-[family-name:var(--font-arabic-display)]"
    : "font-[family-name:var(--font-english-display)]";
  const eyebrowClass = isArabic
    ? "text-sm tracking-widest text-[var(--color-gold)] font-medium"
    : "text-xs uppercase tracking-[0.34em] text-[var(--color-gold)] font-medium";
  const indexClass = isArabic
    ? "text-[11px] tracking-widest text-[var(--color-gold)] font-bold opacity-40"
    : "text-[10px] uppercase tracking-[0.28em] text-[var(--color-gold)] font-bold opacity-40";

  return (
    <section id="why" data-reveal className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-32 bg-[var(--color-bg)]">
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.03),transparent_60%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--color-gold)]" />
            <p className={eyebrowClass}>{eyebrow}</p>
          </div>
          <h2 className={`text-[2.5rem] sm:text-[3.5rem] leading-[1.2] text-[var(--color-text)] ${displayFont}`}>
            {title}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              data-reveal
              key={item.key}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-bg-elevated)]/70 p-10 sm:p-12 transition-all duration-500 hover:border-[var(--color-gold)]/40 hover:-translate-y-1 shadow-sm"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-gold-dim),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" aria-hidden="true" />

              <div className="relative z-10 space-y-8">
                <span className={indexClass}>0{index + 1}</span>
                
                <h3 className={`text-2xl sm:text-[1.75rem] leading-tight text-[var(--color-text)] group-hover:text-[var(--color-gold-light)] transition-colors duration-500 ${displayFont}`}>
                  {item.title}
                </h3>
                
                <p className="text-base sm:text-[1.1rem] leading-[1.8] text-[var(--color-text-secondary)] font-light opacity-90">
                  {item.description}
                </p>
                
                <div className="pt-8 flex justify-end">
                   <div className="h-[2px] w-8 bg-[var(--color-gold)]/20 group-hover:w-16 group-hover:bg-[var(--color-gold)]/50 transition-all duration-700" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
