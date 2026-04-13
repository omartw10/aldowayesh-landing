"use client";

/**
 * LoadingScreen Component
 * 
 * Uses PURE CSS for the fade-out animation to completely bypass 
 * React hydration, Strict Mode, and JS execution timing issues.
 * This guarantees the screen will disappear no matter what.
 */
export function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-bg)] pointer-events-none animate-global-fade"
      aria-hidden="true"
    >
      {/* Ambient glow effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.08),transparent_55%)]" />

      {/* Animated Scales of Justice Icon */}
      <div className="relative">
        <svg
          width="72"
          height="72"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[var(--color-gold)]"
        >
          {/* Center pillar */}
          <line
            x1="12" y1="3" x2="12" y2="21"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="loading-draw"
            style={{ strokeDasharray: 18, strokeDashoffset: 18, animationDelay: "0s" }}
          />
          {/* Base */}
          <line
            x1="7" y1="21" x2="17" y2="21"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="loading-draw"
            style={{ strokeDasharray: 10, strokeDashoffset: 10, animationDelay: "0.2s" }}
          />
          {/* Top crossbar (Beam) */}
          <line
            x1="4" y1="6" x2="20" y2="6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="loading-draw"
            style={{ strokeDasharray: 16, strokeDashoffset: 16, animationDelay: "0.35s" }}
          />
          {/* Left chain */}
          <line
            x1="6" y1="6" x2="5" y2="10"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="loading-draw"
            style={{ strokeDasharray: 5, strokeDashoffset: 5, animationDelay: "0.55s" }}
          />
          {/* Right chain */}
          <line
            x1="18" y1="6" x2="19" y2="10"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="loading-draw"
            style={{ strokeDasharray: 5, strokeDashoffset: 5, animationDelay: "0.55s" }}
          />
          {/* Left pan */}
          <path
            d="M2 10.5 C2 10.5 3.5 14 5 14 C6.5 14 8 10.5 8 10.5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
            className="loading-draw"
            style={{ strokeDasharray: 12, strokeDashoffset: 12, animationDelay: "0.7s" }}
          />
          {/* Right pan */}
          <path
            d="M16 10.5 C16 10.5 17.5 14 19 14 C20.5 14 22 10.5 22 10.5"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
            className="loading-draw"
            style={{ strokeDasharray: 12, strokeDashoffset: 12, animationDelay: "0.7s" }}
          />
          {/* Top finial circle */}
          <circle
            cx="12" cy="3" r="1.5"
            fill="currentColor"
            className="loading-fade"
            style={{ opacity: 0, animationDelay: "1s" }}
          />
        </svg>
      </div>

      {/* Brand Name Text */}
      <p
        className="loading-fade mt-6 text-lg font-semibold tracking-wide text-[var(--color-text)]"
        style={{ opacity: 0, animationDelay: "1.1s" }}
      >
        المحامي محمد الدويش
      </p>

      {/* Professional Title Text */}
      <p
        className="loading-fade mt-2 text-sm tracking-widest text-[var(--color-text-muted)]"
        style={{ opacity: 0, animationDelay: "1.3s" }}
      >
        خبير الإعسار وإعادة الهيكلة
      </p>
    </div>
  );
}
