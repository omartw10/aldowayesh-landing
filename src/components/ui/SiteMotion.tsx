"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { GSAP_DEFAULTS, gsap, ScrollTrigger, registerGSAP } from "@/lib/gsap";
import { initLenis, destroyLenis } from "@/lib/lenis";

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 2. Initialize plugins
    registerGSAP();
    initLenis();

    const context = gsap.context(() => {
      const isRTL = document.documentElement.dir === "rtl";

      // ─── 1. Badge Pulse (Gold Dots) ───
      const badgeDots = gsap.utils.toArray<HTMLElement>("[data-badge-pulse]");
      badgeDots.forEach((element) => {
        if (prefersReducedMotion) return;
        gsap.to(element, {
          scale: 1.4,
          opacity: 0.4,
          duration: 1.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          transformOrigin: "center center",
        });
      });

      // ─── 2. Count Up (Numbers & Metrics) ───
      const countUpElements = gsap.utils.toArray<HTMLElement>("[data-count-up]");
      countUpElements.forEach((element) => {
        const endValue = Number(element.dataset.countEnd ?? 0);
        const prefix = element.dataset.countPrefix ?? "";
        const pad = Number(element.dataset.countPad ?? 0);
        const finalText = element.dataset.countFinal;
        const counter = { value: 0 };

        gsap.to(counter, {
          value: endValue,
          duration: prefersReducedMotion ? 0 : 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 95%",
            once: true,
          },
          onUpdate: () => {
            const nextValue = Math.round(counter.value)
              .toString()
              .padStart(pad, "0");
            element.textContent = `${prefix}${nextValue}`;
          },
          onComplete: () => {
            if (finalText) {
              element.textContent = finalText;
            } else {
              element.textContent = `${prefix}${endValue.toString().padStart(pad, "0")}`;
            }
          },
        });
      });

      // ─── 3. Standard Reveals (Fade + Slide) ───
      const revealElements = gsap.utils.toArray<HTMLElement>("[data-reveal]:not([data-motion-only])");
      revealElements.forEach((element, index) => {
        const distance = element.dataset.reveal === "hero" ? 56 : 36;
        const isImmediate = index < 2;

        gsap.fromTo(
          element,
          { autoAlpha: 0, y: distance },
          {
            autoAlpha: 1,
            y: 0,
            duration: prefersReducedMotion ? 0 : 0.55,
            ease: GSAP_DEFAULTS.ease,
            delay: isImmediate ? index * 0.08 : 0,
            scrollTrigger: isImmediate
              ? undefined
              : {
                  trigger: element,
                  start: "top 92%",
                  once: true,
                },
          }
        );
      });

      // ─── 4. Geometric Lines (Section Dividers) ───
      const lineElements = gsap.utils.toArray<HTMLElement>("[data-reveal-line]");
      lineElements.forEach((element) => {
        gsap.fromTo(
          element,
          { scaleX: 0, transformOrigin: "center center" },
          {
            scaleX: 1,
            duration: prefersReducedMotion ? 0 : 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 94%",
              once: true,
            },
          }
        );
      });

      // ─── 5. Hero Specific: Titles & Accents ───
      const heroTitles = gsap.utils.toArray<HTMLElement>("[data-hero-title]");
      const heroUnderlines = gsap.utils.toArray<HTMLElement>("[data-hero-underline]");

      heroUnderlines.forEach((element) => {
        gsap.fromTo(
          element,
          { scaleX: 0, transformOrigin: isRTL ? "right center" : "left center" },
          {
            scaleX: 1,
            duration: prefersReducedMotion ? 0 : 0.9,
            ease: "power3.inOut",
            delay: 0.2,
          }
        );
      });

      heroTitles.forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, yPercent: 18, rotateX: 14, transformPerspective: 1000 },
          {
            autoAlpha: 1,
            yPercent: 0,
            rotateX: 0,
            duration: prefersReducedMotion ? 0 : 0.9,
            delay: 0.1,
            ease: "power3.out",
          }
        );
      });

      // ─── 6. Sub-Panels & Cards ───
      const heroPanels = gsap.utils.toArray<HTMLElement>("[data-hero-panel]");
      heroPanels.forEach((element, i) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: prefersReducedMotion ? 0 : 0.7,
            delay: 0.22 + i * 0.08,
            immediateRender: true,
            ease: "power2.out",
          }
        );
      });

      const serviceCards = gsap.utils.toArray<HTMLElement>("[data-service-card]");
      serviceCards.forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 44, rotateZ: index % 2 === 0 ? -1.2 : 1.2 },
          {
            autoAlpha: 1,
            y: 0,
            rotateZ: 0,
            duration: prefersReducedMotion ? 0 : 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 95%",
              once: true,
            },
          }
        );
      });

      // ─── 7. Micro-Interactions (Floating Labels) ───
      const floatingCards = gsap.utils.toArray<HTMLElement>("[data-service-float]");
      floatingCards.forEach((element, index) => {
        if (prefersReducedMotion) return;
        gsap.to(element, {
          y: -5,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.8,
        });
      });

      // ─── 8. Parallax Effects ───
      const parallaxNumbers = gsap.utils.toArray<HTMLElement>("[data-parallax-number]");
      parallaxNumbers.forEach((element) => {
        if (prefersReducedMotion) return;
        gsap.to(element, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });
    });

    ScrollTrigger.refresh();

    return () => {
      context.revert();
      destroyLenis();
    };
  }, [pathname]);

  return null;
}
