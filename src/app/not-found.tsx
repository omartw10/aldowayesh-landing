import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-gold-dim),transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-lg space-y-8">
        {/* 404 number */}
        <p className="text-8xl font-bold tracking-tight text-[var(--color-gold)] sm:text-9xl">
          404
        </p>

        {/* Decorative line */}
        <div className="mx-auto h-px w-24 bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)]" />

        {/* Arabic text */}
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
            الصفحة غير موجودة
          </h1>
          <p className="text-lg leading-8 text-[var(--color-text-muted)]">
            الصفحة التي تبحث عنها غير متاحة — يمكنك العودة للصفحة الرئيسية.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/ar"
          className="inline-flex min-h-13 items-center justify-center rounded-full bg-[var(--color-cta-primary-bg)] px-8 py-3 text-sm font-semibold text-[var(--color-cta-primary-text)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
