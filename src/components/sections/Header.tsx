"use client";

import { useState } from "react";

import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ScalesIcon } from "@/components/ui/ScalesIcon";
import { AvailabilityIndicator } from "@/components/ui/AvailabilityIndicator";

type HeaderProps = {
  locale: string;
  brand: string;
  navItems: Array<{ href: string; label: string }>;
  callLabel: string;
};

export function Header({ locale, brand, navItems, callLabel }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isArabic = locale === "ar";
  const navLabelClass = isArabic
    ? "text-sm tracking-[0.08em]"
    : "text-xs uppercase tracking-[0.18em]";

  return (
    <header data-reveal="hero" className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-[var(--color-border)]/40 bg-[var(--color-bg-elevated)]/80 shadow-lg backdrop-blur-md transition-all duration-500">
        <div className="px-5 sm:px-8 lg:px-10">
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4 py-4 lg:py-5 lg:border-b lg:border-[var(--color-border)]/30">
            <a href={`/${locale}`} className="flex items-center gap-4 text-[var(--color-text)] group">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-gold-dim)] text-[var(--color-gold-text)] group-hover:bg-[var(--color-gold)] group-hover:text-[var(--color-primary)] transition-all duration-500 shadow-sm">
                <ScalesIcon size={20} />
              </span>
              <div className="flex flex-col">
                <span className={`text-lg font-medium leading-none tracking-tight sm:text-xl font-[family-name:var(--font-arabic-display)]`}>{brand}</span>
                <span className="text-[10px] tracking-widest uppercase text-[var(--color-text-muted)] mt-1 hidden sm:block">Legal Consultant</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 text-[var(--color-text-secondary)] hover:text-[var(--color-gold-light)] transition-colors duration-300 group ${navLabelClass}`}
                >
                  {item.label}
                  <span className="absolute bottom-0 inset-x-0 h-px bg-[var(--color-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-start" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden xl:block">
                <AvailabilityIndicator locale={locale} />
              </div>
              
              <LanguageToggle locale={locale} />

              <a
                href="https://wa.me/966506488848"
                className="hidden lg:flex min-h-[2.85rem] items-center justify-center rounded-full px-7 text-[12px] font-bold text-[var(--color-cta-primary-text)] transition-all duration-500 hover:-translate-y-0.5 shadow-md relative overflow-hidden group"
                style={{ background: 'var(--gold-gradient)', backgroundSize: '100% 100%' }}
              >
                <span className="absolute inset-0 z-0 block w-full h-full transform -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-gold-light)]/15 to-transparent group-hover:transition-all group-hover:duration-1000 group-hover:translate-x-full pointer-events-none" />
                <span className="relative z-10">{callLabel}</span>
              </a>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/50 lg:hidden"
                aria-label="Toggle navigation"
                aria-expanded={mobileOpen}
              >
                <div className="w-5 flex flex-col gap-1.5 items-end group">
                   <span className={`h-px bg-current transition-all duration-300 ${mobileOpen ? 'w-5 translate-y-1 rotate-45' : 'w-5'}`} />
                   <span className={`h-px bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'w-3'}`} />
                   <span className={`h-px bg-current transition-all duration-300 ${mobileOpen ? 'w-5 -translate-y-1 -rotate-45' : 'w-4'}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          <div
            id="mobile-navigation"
            className={`overflow-hidden transition-all duration-500 ease-in-out lg:hidden`}
            style={{
              maxHeight: mobileOpen ? "500px" : "0px",
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            <div className="flex flex-col gap-1 pb-6 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-base text-[var(--color-text)] hover:bg-[var(--color-bg)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-[var(--color-border)]/30 my-3" />
              <div className="flex flex-col gap-3 px-2">
                 <a 
                   href="tel:+966506488848" 
                   className="flex items-center justify-center min-h-[3.5rem] rounded-xl font-bold shadow-md relative overflow-hidden group text-[var(--color-cta-primary-text)]"
                   style={{ background: 'var(--gold-gradient)', backgroundSize: '100% 100%' }}
                 >
                   <span className="absolute inset-0 z-0 block w-full h-full transform -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-gold-light)]/15 to-transparent group-hover:transition-all group-hover:duration-1000 group-hover:translate-x-full pointer-events-none" />
                   <span className="relative z-10">+966 50 648 8848</span>
                 </a>
                 <div className="flex justify-center py-2">
                    <AvailabilityIndicator locale={locale} />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
