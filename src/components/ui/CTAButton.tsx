import type { ReactNode } from "react";

type CTAHref = `tel:${string}` | `https://wa.me/${string}`;

type CTAButtonProps = {
  href: CTAHref;
  variant: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  locale?: string;
};

export function CTAButton({ href, variant, children, className = "", locale = "ar" }: CTAButtonProps) {
  const isArabic = locale === "ar";
  const labelClass = isArabic
    ? "text-[14px] font-medium tracking-[0.05em]"
    : "text-[13px] font-semibold uppercase tracking-[0.18em]";
  
  const baseClasses = "relative inline-flex min-h-[3.75rem] items-center justify-center rounded-full border px-8 py-4 transition-all duration-500 overflow-hidden group";
  
  const classes =
    variant === "primary"
      ? "text-[#050f09] border-transparent shadow-[0_12px_40px_rgba(158,130,69,0.3)] hover:shadow-[0_15px_45px_rgba(158,130,69,0.45)] hover:-translate-y-1 active:scale-95"
      : "border-[var(--color-gold)]/50 bg-transparent text-[var(--color-text)] hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 hover:-translate-y-1 active:scale-95";

  return (
    <a
      href={href}
      className={`${baseClasses} ${classes} ${labelClass} ${className}`}
      style={variant === "primary" ? { background: 'var(--gold-gradient)', backgroundSize: '200% auto' } : {}}
    >
      {/* Ultra-Subtle Satin Gold Glow */}
      {variant === "primary" && (
        <span className="absolute inset-0 z-0 block w-full h-full transform -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-gold-light)]/15 to-transparent group-hover:transition-all group-hover:duration-1500 group-hover:translate-x-full pointer-events-none" />
      )}
      
      {/* Subtle background glow for extra luxury */}
      <span className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,var(--color-gold-light),transparent_70%)] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
      
      {children}
    </a>
  );
}
