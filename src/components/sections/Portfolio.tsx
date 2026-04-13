"use client";

type PortfolioItem = {
  key: string;
  project: string;
  value: string;
  role: string;
};

type PortfolioProps = {
  locale: string;
  eyebrow: string;
  title: string;
  items: PortfolioItem[];
};

export function Portfolio({ locale, eyebrow, title, items }: PortfolioProps) {
  const isArabic = locale === "ar";
  const displayFont = isArabic
    ? "font-[family-name:var(--font-arabic-display)]"
    : "font-[family-name:var(--font-english-display)]";
  const eyebrowClass = isArabic
    ? "text-sm tracking-[0.08em] text-[var(--color-gold)]"
    : "text-sm uppercase tracking-[0.3em] text-[var(--color-gold)]";

  return (
    <section id="portfolio" data-reveal className="relative border-y border-[var(--color-border)]/50 bg-[var(--color-bg)] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-gold-dim),transparent_70%)] opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className={eyebrowClass}>{eyebrow}</p>
          <h2 className={`mt-4 text-[2.5rem] sm:text-[3.5rem] leading-[1.2] text-[var(--color-text)] ${displayFont}`}>
            {title}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.key}
              data-reveal
              className="group relative bg-[var(--color-surface)]/50 border border-[var(--color-border)]/60 rounded-2xl p-8 hover:border-[var(--color-gold)]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start justify-between gap-4">
                <span className="text-4xl font-light text-[var(--color-gold)]/20 group-hover:text-[var(--color-gold)]/40 transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className={`text-lg sm:text-xl leading-tight text-[var(--color-text)] ${displayFont}`}>
                    {item.project}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)] font-light">
                    {item.role}
                  </p>
                  <p className="mt-4 text-lg font-medium text-[var(--color-gold-light)]">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            {isArabic 
              ? "+ 12 مليار دولار إجمالي قيمة المشاريع الممثلة"
              : "$12+ Billion Total Project Value"}
          </p>
        </div>
      </div>
    </section>
  );
}