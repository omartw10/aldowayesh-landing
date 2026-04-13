import Link from "next/link";

type LanguageToggleProps = {
  locale: string;
};

export function LanguageToggle({ locale }: LanguageToggleProps) {
  const otherLocale = locale === "ar" ? "en" : "ar";
  const label = locale === "ar" ? "English" : "العربية";

  return (
    <Link
      href={`/${otherLocale}`}
      className="inline-flex min-h-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-gold)]"
    >
      {label}
    </Link>
  );
}
