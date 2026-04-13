import { ScalesIcon } from "@/components/ui/ScalesIcon";
import { LegalDisclaimer } from "@/components/ui/LegalDisclaimer";

type FooterProps = {
  locale: string;
  rights: string;
  membership: string;
};

export function Footer({ locale, rights, membership }: FooterProps) {
  const isArabic = locale === "ar";
  const displayFont = isArabic
    ? "font-[family-name:var(--font-arabic-display)]"
    : "font-[family-name:var(--font-english-display)]";
  const labelClass = isArabic
    ? "text-[10px] tracking-widest text-[var(--color-gold)] font-semibold uppercase"
    : "text-[10px] uppercase tracking-[0.26em] text-[var(--color-gold)] font-semibold";
  const brandName = isArabic ? "المحامي محمد الدويش" : "Mohammed Al-Dowayesh";
  const brandTitle = isArabic ? "خبير الإعسار وإعادة الهيكلة" : "Bankruptcy & Restructuring Expert";
  const locationLabel = isArabic ? "الموقع" : "Location";
  const locationValue = isArabic
    ? "الرياض — مركز الملك عبدالله المالي (KAFD)"
    : "Riyadh — King Abdullah Financial District (KAFD)";
  const contactLabel = isArabic ? "تواصل مباشر" : "Direct Contact";

  return (
    <footer data-reveal className="relative border-t border-[var(--color-border)]/50 bg-[var(--color-bg)] px-6 pb-12 pt-20 sm:px-8 lg:px-12 lg:pt-24">
      {/* Top gold line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)] opacity-20" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold-dim)] text-[var(--color-gold-text)] shadow-sm">
                <ScalesIcon size={22} />
              </span>
              <div className="space-y-1">
                <p className={`text-xl sm:text-2xl text-[var(--color-text)] tracking-tight ${displayFont}`}>{brandName}</p>
                <p className="text-xs tracking-widest uppercase text-[var(--color-text-muted)] font-medium opacity-80">{brandTitle}</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--color-text-secondary)] font-light opacity-80">{membership}</p>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <p className={labelClass}>{locationLabel}</p>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-[var(--color-text-secondary)] font-light">{locationValue}</p>
              <p className="text-xs text-[var(--color-text-muted)] opacity-70">
                {isArabic ? "المبنى 6677 — حي الشرفية" : "Building 6677 — Al-Sharafiyyah"}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <p className={labelClass}>{contactLabel}</p>
            <div className="flex flex-col gap-4">
               <a href="https://wa.me/966506488848" className="group flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-gold-light)] transition-colors">
                 <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] group-hover:border-[var(--color-gold)]/40 transition-colors">
                   <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                 </span>
                 <span className="text-sm">WhatsApp Business</span>
               </a>
               <a href="tel:+966506488848" className="group flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-gold-light)] transition-colors">
                 <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] group-hover:border-[var(--color-gold)]/40 transition-colors">
                   <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                 </span>
                 <span className="text-sm" dir="ltr">+966 50 648 8848</span>
               </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <LegalDisclaimer locale={locale} />

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border)]/30 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between opacity-60">
          <p className="text-[10px] tracking-widest uppercase font-medium">© {new Date().getFullYear()} · {rights}</p>
          <div className="flex gap-6">
             <span className="text-[10px] tracking-widest uppercase font-medium">Saudi Bar Association</span>
             <span className="text-[10px] tracking-widest uppercase font-medium">Unified National Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
