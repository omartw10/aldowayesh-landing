"use client";

import { useEffect, useState } from "react";

type AvailabilityProps = {
  locale: string;
};

function getOfficeStatus(locale: string): { isOpen: boolean; label: string } {
  const isArabic = locale === "ar";
  const now = new Date();
  // Get Riyadh time (UTC+3)
  const riyadhOffset = 3 * 60;
  const localOffset = now.getTimezoneOffset();
  const riyadhTime = new Date(now.getTime() + (riyadhOffset + localOffset) * 60000);

  const day = riyadhTime.getDay(); // 0=Sun
  const hour = riyadhTime.getHours();

  // Sunday(0)–Thursday(4), 9AM–5PM
  const isWorkDay = day >= 0 && day <= 4;
  const isWorkHour = hour >= 9 && hour < 17;
  const isOpen = isWorkDay && isWorkHour;

  if (isOpen) {
    return {
      isOpen: true,
      label: isArabic ? "المكتب مفتوح الآن" : "Office is open now",
    };
  }

  return {
    isOpen: false,
    label: isArabic ? "متاح للرسائل" : "Available for messages",
  };
}

export function AvailabilityIndicator({ locale }: AvailabilityProps) {
  const [status, setStatus] = useState<{ isOpen: boolean; label: string } | null>(null);

  useEffect(() => {
    setStatus(getOfficeStatus(locale));

    // Update every minute
    const interval = setInterval(() => {
      setStatus(getOfficeStatus(locale));
    }, 60_000);

    return () => clearInterval(interval);
  }, [locale]);

  if (!status) return null;

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1.5 text-xs backdrop-blur-sm">
      <span
        className={`h-2 w-2 rounded-full ${status.isOpen ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.5)]" : "bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.4)]"}`}
        aria-hidden="true"
      />
      <span className="text-[var(--color-text-muted)]">{status.label}</span>
    </div>
  );
}
