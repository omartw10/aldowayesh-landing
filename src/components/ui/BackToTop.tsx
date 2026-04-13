"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function onScroll() {
      setVisible(window.scrollY > 600);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-bg-elevated)] text-[var(--color-gold-text)] shadow-[0_8px_24px_var(--color-card-shadow)] backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:bg-[var(--color-gold)] hover:text-[var(--color-primary)] ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"}`}
      style={{ insetInlineEnd: "max(1rem, env(safe-area-inset-right))" }}
      aria-label="Back to top"
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
