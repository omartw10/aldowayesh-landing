type LegalDisclaimerProps = {
  locale: string;
};

export function LegalDisclaimer({ locale }: LegalDisclaimerProps) {
  const isArabic = locale === "ar";

  const text = isArabic
    ? "المحتوى المعروض على هذا الموقع لأغراض إعلامية فقط، ولا يُشكّل مشورة قانونية محددة أو رأياً قانونياً ملزماً. يُرجى التواصل مع المكتب للحصول على استشارة مخصصة تراعي ظروف قضيتكم."
    : "The content presented on this website is for informational purposes only and does not constitute specific legal advice or a binding legal opinion. Please contact the office for tailored counsel regarding your particular circumstances.";

  return (
    <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-4">
      <p className="text-center text-xs leading-6 text-[var(--color-text-muted)]">
        {text}
      </p>
    </div>
  );
}
