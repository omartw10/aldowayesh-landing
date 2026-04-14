"use client";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

interface CounterStatProps {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
  delay?: number;
}

export function CounterStat({ end, prefix = "", suffix = "", label, duration = 2000, delay = 0 }: CounterStatProps) {
  const { count, ref } = useCounterAnimation({ end, duration, delay, prefix, suffix });

  return (
    <div className="flex flex-col items-start gap-1">
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className="text-2xl sm:text-3xl font-light text-[var(--color-gold)] tabular-nums"
      >
        {prefix}{count}{suffix}
      </span>
      <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mt-0.5">{label}</span>
    </div>
  );
}