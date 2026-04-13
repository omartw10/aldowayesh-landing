"use client"

import { gsap } from "gsap"
import { Flip, ScrollTrigger, SplitText } from "gsap/all"

// Register all plugins — call this once at app root
export function registerGSAP() {
  if (typeof window === "undefined") return
  gsap.registerPlugin(SplitText, ScrollTrigger, Flip)
}

// Shared GSAP defaults for consistent animations
export const GSAP_DEFAULTS = {
  ease: "power3.out",
  duration: 0.8,
}

// Gold color for GSAP animations
export const GOLD = "var(--color-gold)"

export { gsap, SplitText, ScrollTrigger, Flip }
