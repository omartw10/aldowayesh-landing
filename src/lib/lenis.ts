"use client"

import Lenis from "lenis"
import { gsap, ScrollTrigger } from "@/lib/gsap"

let lenisInstance: Lenis | null = null
let rafCallback: ((time: number) => void) | null = null

export function initLenis(): Lenis {
  if (typeof window === "undefined") {
    throw new Error("Lenis must be initialized on the client side")
  }

  if (lenisInstance) return lenisInstance

  lenisInstance = new Lenis({
    duration: 1.4,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    smoothWheel: true,
    touchMultiplier: 1.5,
  })

  // Sync Lenis with GSAP ScrollTrigger
  lenisInstance.on("scroll", ScrollTrigger.update)

  rafCallback = (time: number) => {
    lenisInstance?.raf(time * 1000)
  }

  gsap.ticker.add(rafCallback)

  gsap.ticker.lagSmoothing(0)

  return lenisInstance
}

export function getLenis(): Lenis | null {
  return lenisInstance
}

export function destroyLenis() {
  if (rafCallback) {
    gsap.ticker.remove(rafCallback)
  }

  lenisInstance?.destroy()
  rafCallback = null
  lenisInstance = null
}
