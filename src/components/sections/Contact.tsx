type ContactProps = {
  locale: string;
  title: string;
  subtitle: string;
  whatsappLabel: string;
  callLabel: string;
  emailLabel: string;
  locationLabel: string;
  availabilityLabel: string;
  consultationLabel: string;
  location: string;
  hours: string;
  emailValue: string;
};

export function Contact({
  locale,
  title,
  subtitle,
  whatsappLabel,
  callLabel,
  emailLabel,
  locationLabel,
  availabilityLabel,
  consultationLabel,
  location,
  hours,
  emailValue,
}: ContactProps) {
  const isArabic = locale === "ar";
  const displayFont = isArabic
    ? "font-[family-name:var(--font-arabic-display)]"
    : "font-[family-name:var(--font-english-display)]";
  const headingMetaClass = isArabic
    ? "text-sm tracking-widest text-[var(--color-gold)] font-medium"
    : "text-xs uppercase tracking-[0.3em] text-[var(--color-gold)] font-medium";
  const labelClass = isArabic
    ? "text-[10px] tracking-widest text-[var(--color-text-muted)] uppercase font-semibold"
    : "text-[10px] uppercase tracking-[0.24em] text-[var(--color-text-muted)] font-semibold";

  const hasRealEmail = !emailValue.includes("[domain]");
  const mapLat = "24.681737";
  const mapLng = "46.782679";
  const mapsUrl = `https://www.google.com/maps?q=${mapLat},${mapLng}`;
  const mapsLabel = isArabic ? "افتح في خرائط Google" : "Open in Google Maps";

  return (
    <section id="contact" data-reveal className="relative border-t border-[var(--color-border)]/50 bg-[var(--color-bg)] px-4 sm:px-8 lg:px-12 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          <div data-reveal className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-gold)]" />
                <p className={headingMetaClass}>{consultationLabel}</p>
              </div>
              <h2 className={`text-[2.5rem] sm:text-[3.5rem] leading-[1.2] text-[var(--color-text)] ${displayFont}`}>
                {title}
              </h2>
              <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-[var(--color-text-secondary)] font-light opacity-90">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="https://wa.me/966506488848"
                className="inline-flex min-h-[4rem] items-center justify-center gap-3 rounded-full px-10 py-3 text-base font-bold text-[var(--color-cta-primary-text)] transition-all duration-500 hover:-translate-y-1 shadow-lg relative overflow-hidden group"
                style={{ background: 'var(--gold-gradient)', backgroundSize: '100% 100%' }}
              >
                <span className="absolute inset-0 z-0 block w-full h-full transform -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-gold-light)]/15 to-transparent group-hover:transition-all group-hover:duration-1000 group-hover:translate-x-full pointer-events-none" />
                <svg className="relative z-10 h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span className="relative z-10">{whatsappLabel}</span>
              </a>
              <a
                href="tel:+966506488848"
                className="inline-flex min-h-[4rem] items-center justify-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-8 py-3 text-base font-medium text-[var(--color-text)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/40"
              >
                <svg className="h-4 w-4 text-[var(--color-gold)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                <span dir="ltr">+966 50 648 8848</span>
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-3 pt-6 border-t border-[var(--color-border)]/40">
              {[
                { num: "01", text: isArabic ? "تواصل مباشر دون نماذج أو خطوات معقدة." : "Direct access without forms or unnecessary friction." },
                { num: "02", text: isArabic ? "قنوات مناسبة للمؤسسات والأفراد المستثمرين." : "Suitable channels for institutions and private investors." },
                { num: "03", text: isArabic ? "استجابة مصممة لملفات تتطلب وضوحاً ومهنية عالية." : "Response calibrated for matters that require clarity and discretion." },
              ].map((item) => (
                <div key={item.num} className="space-y-3">
                  <p className="text-[11px] font-bold text-[var(--color-gold)] opacity-50">{item.num}</p>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] font-light opacity-90">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {hasRealEmail && (
                <div data-reveal className="bg-[var(--color-bg-elevated)]/40 border border-[var(--color-border)]/60 rounded-2xl p-7">
                  <p className={labelClass}>{emailLabel}</p>
                  <a href={`mailto:${emailValue}`} className="mt-4 block text-lg text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors truncate">{emailValue}</a>
                </div>
              )}
              <div data-reveal className="bg-[var(--color-bg-elevated)]/40 border border-[var(--color-border)]/60 rounded-2xl p-7">
                <p className={labelClass}>{availabilityLabel}</p>
                <p className="mt-4 text-lg text-[var(--color-text)]">{hours}</p>
              </div>
            </div>

            <div data-reveal className="bg-[var(--color-bg-elevated)]/40 border border-[var(--color-border)]/60 rounded-2xl p-7 space-y-4">
              <p className={labelClass}>{locationLabel}</p>
              <p className="text-lg leading-relaxed text-[var(--color-text)]">{location}</p>
              <p className="text-sm text-[var(--color-text-muted)] opacity-80">
                {isArabic 
                  ? "مبنى 3510 — طريق الأمير سعد بن عبدالرحمن الأول — الروابي — 14215" 
                  : "Building 3510 — Prince Saad bin Abdulrahman Al-Awal Rd. Al-Rawabi — 14215"}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-gold)] hover:opacity-75 transition-opacity"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {mapsLabel}
              </a>
            </div>

            {/* Google Maps Embed */}
            <div data-reveal className="overflow-hidden rounded-2xl border border-[var(--color-border)]/60 bg-[var(--color-bg-elevated)]/40 h-52 sm:h-64 relative grayscale contrast-[1.2]">
              <iframe
                src={`https://www.google.com/maps?q=${mapLat},${mapLng}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(100%) hue-rotate(180deg) brightness(0.6) contrast(1.1)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={isArabic ? "موقع المكتب على الخريطة" : "Office location on map"}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
