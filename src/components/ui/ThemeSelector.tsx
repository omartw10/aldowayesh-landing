"use client";

import { useState, useEffect } from "react";

const THEMES = [
  // --- Dark Luxury ---
  {
    id: "blue",
    name: "أزرق ملكي (أساسي)",
    vars: {
      "--color-primary": "#0a1628",
      "--color-surface": "#111d35",
      "--color-gold": "#c9a84c",
      "--color-gold-light": "#e8c96d",
      "--color-text": "#f5f0e8",
      "--color-text-muted": "#8a9bb8",
      "--color-border": "#1e2d4a",
      "--color-header-bg": "rgba(10,22,40,0.82)",
      "--color-bg-subtle": "#0d1a31",
      "--color-text-secondary": "#b4c0d4",
    }
  },
  {
    id: "burgundy",
    name: "عنابي ملكي",
    vars: {
      "--color-primary": "#140508",
      "--color-surface": "#1e0a10",
      "--color-gold": "#c9a84c",
      "--color-gold-light": "#e8c96d",
      "--color-text": "#f5ede8",
      "--color-text-muted": "#a07a80",
      "--color-border": "#3a1520",
      "--color-header-bg": "rgba(20,5,8,0.88)",
      "--color-bg-subtle": "#110406",
      "--color-text-secondary": "#d4b4bc",
    }
  },
  {
    id: "charcoal",
    name: "أسود دباغ",
    vars: {
      "--color-primary": "#0a0a0a",
      "--color-surface": "#141414",
      "--color-gold": "#d4a853",
      "--color-gold-light": "#e8c070",
      "--color-text": "#f2f2f2",
      "--color-text-muted": "#888888",
      "--color-border": "#222222",
      "--color-header-bg": "rgba(10,10,10,0.88)",
      "--color-bg-subtle": "#050505",
      "--color-text-secondary": "#aaaaaa",
    }
  },
  {
    id: "night-forest",
    name: "غابة ليلية",
    vars: {
      "--color-primary": "#050f09",
      "--color-surface": "#0a1a10",
      "--color-gold": "#9e8245",
      "--color-gold-light": "#ccae6d",
      "--color-text": "#ecf5ec",
      "--color-text-muted": "#5a8a6a",
      "--color-border": "#102818",
      "--color-header-bg": "rgba(5,15,9,0.90)",
      "--color-bg-subtle": "#030805",
      "--color-text-secondary": "#9fb5a7",
    }
  },
  // --- Light Luxury ---
  {
    id: "imperial-ivory",
    name: "العاجي الإمبراطوري",
    vars: {
      "--color-primary": "#fdfbf7",
      "--color-surface": "#ffffff",
      "--color-gold": "#96722d",
      "--color-gold-light": "#b89531",
      "--color-text": "#0a0c10",
      "--color-text-muted": "#4b5563",
      "--color-border": "#e2e2d8",
      "--color-header-bg": "rgba(253,251,247,0.85)",
      "--color-bg-subtle": "#f4f2eb",
      "--color-text-secondary": "#1f2937",
    }
  },
  {
    id: "pearl-platinum",
    name: "لؤلؤ وبلاتين",
    vars: {
      "--color-primary": "#f3f4f6",
      "--color-surface": "#ffffff",
      "--color-gold": "#3f3f46",
      "--color-gold-light": "#71717a",
      "--color-text": "#000000",
      "--color-text-muted": "#52525b",
      "--color-border": "#e5e7eb",
      "--color-header-bg": "rgba(243,244,246,0.88)",
      "--color-bg-subtle": "#e5e7eb",
      "--color-text-secondary": "#18181b",
    }
  },
  {
    id: "desert-sand",
    name: "رمل الصحراء الدافئ",
    vars: {
      "--color-primary": "#f2eee8",
      "--color-surface": "#faf9f6",
      "--color-gold": "#7a5c31",
      "--color-gold-light": "#96722d",
      "--color-text": "#1a1612",
      "--color-text-muted": "#685b4d",
      "--color-border": "#dfd8cc",
      "--color-header-bg": "rgba(242,238,232,0.88)",
      "--color-bg-subtle": "#e6decb",
      "--color-text-secondary": "#3d3229",
    }
  },
  {
    id: "royal-marble",
    name: "الرخام الملكي",
    vars: {
      "--color-primary": "#ffffff",
      "--color-surface": "#ffffff",
      "--color-gold": "#a67c00",
      "--color-gold-light": "#c9a84c",
      "--color-text": "#000000",
      "--color-text-muted": "#374151",
      "--color-border": "#e5e7eb",
      "--color-header-bg": "rgba(255,255,255,0.92)",
      "--color-bg-subtle": "#f3f4f6",
      "--color-text-secondary": "#111827",
    }
  },
  {
    id: "silk-champagne",
    name: "حرير الشامبين",
    vars: {
      "--color-primary": "#fdfbe8",
      "--color-surface": "#ffffff",
      "--color-gold": "#856a29",
      "--color-gold-light": "#a6883c",
      "--color-text": "#051329",
      "--color-text-muted": "#475569",
      "--color-border": "#e9e4c5",
      "--color-header-bg": "rgba(253,251,232,0.88)",
      "--color-bg-subtle": "#f1eccb",
      "--color-text-secondary": "#1e293b",
    }
  }
];

export function ThemeSelector() {
  const [activeTheme, setActiveTheme] = useState("night-forest");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const theme = THEMES.find((t) => t.id === activeTheme);
    if (!theme) return;
    
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [activeTheme]);

  return (
    <div className="fixed bottom-6 left-6 z-[9999]" dir="rtl">
      {isOpen && (
        <div className="absolute bottom-full mb-4 left-0 w-64 md:w-72 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/90 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between mb-4 px-1">
            <p className="text-xs font-bold text-[var(--color-gold)] uppercase tracking-widest">تنسيقات الألوان الفاخرة</p>
            <button onClick={() => setIsOpen(false)} className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
               <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l18 18" /></svg>
            </button>
          </div>
          
          <div className="max-h-[380px] overflow-y-auto overflow-x-hidden pr-1 space-y-6 custom-scrollbar">
            {/* Dark Themes Group */}
            <div className="space-y-2">
              <p className="text-[10px] uppercase font-bold text-[var(--color-text-muted)] opacity-60 mb-3 px-2">التنسيقات الداكنة (Dark)</p>
              <div className="grid grid-cols-1 gap-1.5">
                {THEMES.filter(t => !t.id.includes("ivory") && !t.id.includes("pearl") && !t.id.includes("sand") && !t.id.includes("marble") && !t.id.includes("silk") && t.id !== "light").map((t) => (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setActiveTheme(t.id)}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 border ${
                      activeTheme === t.id 
                        ? "border-[var(--color-gold)] bg-[var(--color-gold-dim)] text-[var(--color-text)] shadow-sm" 
                        : "border-transparent hover:bg-[var(--color-bg)] text-[var(--color-text-secondary)]"
                    }`}
                  >
                    <span 
                      className="h-4 w-4 shrink-0 rounded-full border border-[var(--color-border)] ring-1 ring-white/10 ring-offset-1 ring-offset-black/20" 
                      style={{ backgroundColor: t.vars["--color-primary"] }} 
                    />
                    <span className="truncate">{t.name}</span>
                    {activeTheme === t.id && (
                      <div className="ms-auto h-1 w-1 rounded-full bg-[var(--color-gold)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Light Themes Group */}
            <div className="space-y-2">
              <p className="text-[10px] uppercase font-bold text-[var(--color-text-muted)] opacity-60 mb-3 px-2">التنسيقات الفاتحة الراقية (Light)</p>
              <div className="grid grid-cols-1 gap-1.5">
                {THEMES.filter(t => t.id.includes("ivory") || t.id.includes("pearl") || t.id.includes("sand") || t.id.includes("marble") || t.id.includes("silk") || t.id === "light").map((t) => (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => setActiveTheme(t.id)}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 border ${
                      activeTheme === t.id 
                        ? "border-[var(--color-gold)] bg-[var(--color-gold-dim)] text-[var(--color-text)] shadow-sm" 
                        : "border-transparent hover:bg-[var(--color-bg)] text-[var(--color-text-secondary)]"
                    }`}
                  >
                    <span 
                      className="h-4 w-4 shrink-0 rounded-full border border-[var(--color-border)] ring-1 ring-black/5 ring-offset-1 ring-offset-transparent" 
                      style={{ backgroundColor: t.vars["--color-primary"] }} 
                    />
                    <span className="truncate">{t.name}</span>
                    {activeTheme === t.id && (
                      <div className="ms-auto h-1 w-1 rounded-full bg-[var(--color-gold)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-500 shadow-2xl ${
          isOpen 
            ? "bg-[var(--color-gold)] text-[var(--color-primary)] border-[var(--color-gold)] scale-90" 
            : "bg-[var(--color-bg-elevated)] text-[var(--color-gold)] border-[var(--color-border)] hover:scale-110 hover:border-[var(--color-gold)]"
        }`}
        aria-label="خيارات الألوان"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </button>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--color-gold);
          border-radius: 10px;
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
}
