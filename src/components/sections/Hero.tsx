import Image from "next/image";

import { HeroReveal } from "@/components/ui/HeroReveal";
import { ScalesIcon } from "@/components/ui/ScalesIcon";
import { CTAButton } from "../ui/CTAButton";

type HeroProps = {
  locale: string;
  badge: string;
  eyebrow: string;
  name: string;
  title: string;
  specialization: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  panelTitle: string;
  panelText: string;
  locationLabel: string;
  locationValue: string;
  accessLabel: string;
  accessValue: string;
  counselLabel?: string;
  counselText?: string;
  positioningLabel?: string;
  metricYears?: string;
  metricCities?: string;
  metricBilingual?: string;
  profileAlt?: string;
  licenceBadge?: string;
};

export function Hero({
  locale,
  badge,
  eyebrow,
  name,
  title,
  specialization,
  subheadline,
  primaryCta,
  secondaryCta,
  panelTitle,
  panelText,
  locationLabel,
  locationValue,
  accessLabel,
  accessValue,
  counselLabel,
  counselText,
  positioningLabel,
  metricYears,
  metricCities,
  metricBilingual,
  profileAlt,
  licenceBadge,
}: HeroProps) {
  const isArabic = locale === "ar";
  const displayFont = isArabic
    ? "font-[family-name:var(--font-arabic-display)]"
    : "font-[family-name:var(--font-english-display)]";

  // Fallbacks for optional i18n props
  const _counselLabel = counselLabel ?? (isArabic ? "شريك مدير في سي إم إس (CMS)" : "Managing Partner at CMS Global");
  const _counselText = counselText ?? (isArabic
    ? "خبرة سابقة في كلايد آند كو (Clyde & Co) ومكتب بي أس إيه (BSA LAW)."
    : "Formerly at Clyde & Co and BSA LAW with international arbitration experience.");
  const _metricYears = metricYears ?? (isArabic ? "+17 سنة" : "+17 Years");
  const _metricCities = metricCities ?? (isArabic ? "$12+B مشاريع" : "$12B+ Projects");
  const _metricBilingual = metricBilingual ?? (isArabic ? "صياغة عربي/إنجليزي" : "Arabic/English Drafting");
  const _profileAlt = profileAlt ?? (isArabic
    ? "المحامي محمد الدويش — شريك مدير في سي إم إس"
    : "Mohammed Al-Dowayesh — Managing Partner at CMS Global");
  const _licenceBadge = licenceBadge ?? (isArabic ? "مرخص من وزارة العدل" : "Ministry of Justice Licensed");

  // Gradient directions based on language to blend the image seamlessly into the text container
  const imageBlendGradient = isArabic
    ? "lg:bg-gradient-to-l rtl:bg-gradient-to-l"
    : "lg:bg-gradient-to-r ltr:bg-gradient-to-r";

  return (
    <section className="relative flex items-center justify-center overflow-hidden px-4 md:px-6 py-10 lg:py-14 bg-[var(--color-bg)]">

      {/* Absolute faint background element */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.015] text-[var(--color-gold)] pointer-events-none z-0">
        <ScalesIcon size={1200} />
      </div>

      <div className="mx-auto w-full max-w-[1300px] relative z-10">

        {/* 
          ─── THE UNIFIED CARD ───
        */}
        <HeroReveal className="relative flex flex-col lg:flex-row w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-[var(--color-surface)]/45 backdrop-blur-md shadow-[0_30px_80px_var(--color-card-shadow)] border border-[var(--color-border)]/40" data-reveal="hero">
          
          {/* Glassy reflection top line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

          {/* Subtle global gradient inside the card to enrich the tones */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-gold-dim),transparent_70%)] pointer-events-none z-0" />

          {/* ─── TEXT PORTION ─── */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 py-8 sm:px-12 lg:px-14 xl:px-16 lg:py-12 z-20">

            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-3 w-fit rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-bg)]/60 px-4 py-1.5 mb-6 sm:mb-8 backdrop-blur-sm shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" aria-hidden="true" data-badge-pulse />
              <p className="text-[10px] sm:text-[11px] tracking-widest text-[var(--color-gold-light)] font-semibold uppercase">{eyebrow}</p>
            </div>

            {/* Title Lockup - One Line Forced */}
            <h1 data-hero-title className={`text-[1.75rem] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-[3rem] leading-[1.15] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] gold-shine ${displayFont}`}>
              {name}
            </h1>

            <h2 className={`mt-3 sm:mt-4 text-[1.2rem] sm:text-[1.5rem] text-[var(--color-gold-light)] leading-snug font-light opacity-95 ${displayFont}`}>
              {title}
            </h2>

            <div className="h-px w-20 bg-[linear-gradient(90deg,var(--color-gold),transparent)] rtl:bg-[linear-gradient(270deg,var(--color-gold),transparent)] my-6 opacity-60" />

            {/* Narrative Flow */}
            <div className="flex flex-col gap-4 w-full max-w-2xl">
              <p className="text-[1.1rem] sm:text-[1.25rem] leading-[1.7] text-[var(--color-text)] font-light opacity-95">
                {specialization}
              </p>

              <p className="text-[0.9rem] sm:text-[1rem] leading-[1.8] text-[var(--color-text-secondary)] font-light opacity-90">
                {subheadline}
              </p>

              {/* Counsel Label smoothly embedded into text hierarchy */}
              <div className="mt-2 ps-4 py-1.5 border-s-[2px] border-[var(--color-gold)]/60 bg-[linear-gradient(270deg,var(--color-bg-subtle)_0%,transparent_100%)] rtl:bg-[linear-gradient(90deg,var(--color-bg-subtle)_0%,transparent_100%)]">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)] font-medium mb-1.5">{_counselLabel}</p>
                <p className="text-[12px] sm:text-[13px] leading-[1.75] text-[var(--color-text-muted)] font-light">
                  {_counselText}
                </p>
              </div>
            </div>

            {/* Seamless Metrics row directly embedded, no separate cards */}
            <div className="mt-8 flex items-center justify-between sm:justify-start sm:gap-12 pt-6 border-t border-[var(--color-border)]/50 max-w-2xl">
              <div className="flex flex-col items-start gap-1">
                <span className="text-2xl sm:text-3xl font-light text-[var(--color-gold)] tabular-nums">+17</span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mt-0.5">{_metricYears}</span>
              </div>
              <div className="w-px h-8 bg-[var(--color-border)]/50 hidden sm:block" />
              <div className="flex flex-col items-start gap-1">
                <span className="text-2xl sm:text-3xl font-light text-[var(--color-gold)] tabular-nums">$12B+</span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mt-0.5">{_metricCities}</span>
              </div>
              <div className="w-px h-8 bg-[var(--color-border)]/50 hidden sm:block" />
              <div className="flex flex-col items-start gap-1">
                <span className="text-lg sm:text-xl font-light text-[var(--color-gold)] mt-1.5 mb-0.5 uppercase">AR / EN</span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mt-0.5">{_metricBilingual}</span>
              </div>
            </div>

            {/* Buttons strictly at bottom of flow */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <CTAButton
                href="https://wa.me/966506488848"
                variant="primary"
                className="min-h-[3.5rem] px-8 sm:px-10 text-[15px] font-medium tracking-wide shadow-lg"
                locale={locale}
              >
                {primaryCta}
              </CTAButton>
              <CTAButton
                href="tel:+966506488848"
                variant="secondary"
                locale={locale}
                className="flex flex-col items-center justify-center min-h-[3.75rem] px-8 sm:px-10 border border-[var(--color-gold)]/30 hover:border-[var(--color-gold)] transition-all"
              >
                <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-gold-light)] mb-1 opacity-80">{secondaryCta}</span>
                <span dir="ltr" className="text-[14px] text-[var(--color-text)] font-medium tracking-wider group-hover:text-[var(--color-gold)] transition-colors">+966 50 648 8848</span>
              </CTAButton>
            </div>
          </div>

          {/* ─── IMAGE PORTION ─── */}
          <div className="w-full lg:w-[45%] relative min-h-[550px] sm:min-h-[600px] lg:min-h-full">

            <Image
              src="/aldowayesh-pic.png"
              alt={_profileAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
              quality={85}
            />

            {/* Gradient blending the side of the image natively into the container background - much more subtle now */}
            <div className={`absolute inset-0 z-10 ${imageBlendGradient} from-[var(--color-surface)] via-[var(--color-surface)]/10 to-transparent pointer-events-none`} />

            {/* Gradient blending the bottom of the image for consistent depth - adjusted for the new integrated plaque */}
            <div className="absolute inset-x-0 bottom-0 top-1/2 z-10 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/80 to-transparent pointer-events-none" />

            {/* Elegant Status Tag Floating */}
            <div className="absolute top-6 sm:top-8 start-6 sm:start-8 z-30">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-surface)]/85 backdrop-blur-sm px-4 py-1.5 shadow-lg">
                <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[var(--color-gold)] font-medium">{_licenceBadge}</span>
              </div>
            </div>

            {/* Quote / Subpanel Plaque - Now seamlessly merged without a restrictive box */}
            <div className="absolute bottom-8 sm:bottom-10 lg:bottom-14 start-6 end-6 sm:start-10 sm:end-10 lg:start-14 lg:end-14 z-30">
              <div className="relative">

                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[1px] w-8 bg-[var(--color-gold)]" />
                  <span className="text-[10px] sm:text-[11px] tracking-[0.3em] text-[var(--color-gold)] uppercase font-semibold">{panelTitle}</span>
                </div>

                <p className={`text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] leading-[1.6] text-[var(--color-text)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:pe-8 ${displayFont}`}>
                  "{panelText}"
                </p>

                <div className="mt-8 pt-6 border-t border-[var(--color-gold)]/15 flex justify-between gap-6">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] text-[var(--color-gold)] opacity-60 tracking-[0.2em] uppercase font-bold">{locationLabel}</span>
                    <span className="text-[11px] sm:text-[12px] font-medium tracking-wide text-[var(--color-text-secondary)] leading-none">{locationValue}</span>
                  </div>
                  <div className="flex flex-col gap-1.5 text-end sm:text-start">
                    <span className="text-[9px] text-[var(--color-gold)] opacity-60 tracking-[0.2em] uppercase font-bold">{accessLabel}</span>
                    <span className="text-[11px] sm:text-[12px] font-medium tracking-wide text-[var(--color-text-secondary)] leading-none">{accessValue}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </HeroReveal>
      </div>
    </section>
  );
}
