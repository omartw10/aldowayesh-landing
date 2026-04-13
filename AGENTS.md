# NeuraSync AI — Dr. Hassan Al-Maliki Landing Page
# Project Rules — READ BEFORE ANY ACTION

## PROJECT IDENTITY
Client: Dr. Hassan Hashem Al-Maliki
Type: Premium legal landing page
Goal: Establish digital authority and generate client consultations

## MANDATORY TECH STACK — DO NOT DEVIATE
- Framework:   Next.js 16.2 (App Router, SSG, Turbopack)
- Language:    TypeScript strict mode
- Styling:     Tailwind CSS v4.2 — CSS variables via globals.css
- Animation:   GSAP 3.14.2 + SplitText + ScrollTrigger + Flip (all free)
- Motion:      Motion 12.38.0 — ALWAYS import from "motion/react"
- Scroll:      Lenis 1.3.21 — synced with GSAP ticker
- i18n:        next-intl — Arabic (RTL) default, English (LTR) toggle
- Deployment:  Vercel

## CRITICAL IMPORT RULES
CORRECT:   import { motion } from "motion/react"
WRONG:     import { motion } from "framer-motion"

CORRECT:   import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap"
CORRECT:   import Lenis from "lenis"
CORRECT:   import { ReactLenis } from "lenis/react"

## DESIGN SYSTEM — NEVER HARDCODE HEX VALUES
Always use CSS variables defined in src/app/globals.css:
- Background:     var(--color-primary)    #0a1628
- Gold accent:    var(--color-gold)       #c9a84c
- Gold hover:     var(--color-gold-light) #e8c96d
- Card surface:   var(--color-surface)    #111d35
- Body text:      var(--color-text)       #f5f0e8
- Muted text:     var(--color-text-muted) #8a9bb8
- Borders:        var(--color-border)     #1e2d4a

## TYPOGRAPHY
Arabic Display:  Noto Naskh Arabic
Arabic Body:     IBM Plex Arabic
English Display: Playfair Display
English Body:    Crimson Pro

## LANGUAGE & TONE
- Default direction: RTL (Arabic)
- Toggle: LTR (English)
- Tone: Academic + Institutional — NOT warm, NOT casual
- Arabic: Formal Modern Standard Arabic (فصحى) — no dialect
- English: Formal British register for international firms

## RTL/LTR RULES
- Use logical CSS: ps- pe- ms- me- (not pl- pr- ml- mr-)
- Use text-start text-end (not text-left text-right)
- Every component must work correctly in both RTL and LTR
- Animations must respect direction: slide from end in RTL, from start in LTR

## SECURITY RULES — MANDATORY
1. Never expose phone/WhatsApp numbers as plain text — use href="tel:" and href="https://wa.me/"
2. Never add forms that collect and store user data
3. No external scripts except Google Fonts CDN
4. All CTAs must open WhatsApp or phone dialer — no data submission
5. Run @security-auditor after EVERY new component

## CONTACT DATA (use these exact values)
WhatsApp/Phone: +966508089886
WhatsApp URL:   https://wa.me/966508089886
Email:          dr.hassan@[domain].com (placeholder)
Location:       Jeddah, Al-Sharafiyyah District

## FILE STRUCTURE
src/
  app/[locale]/
    layout.tsx      ← root layout: Lenis provider, fonts, dir attr
    page.tsx        ← main page: all sections assembled
  components/
    sections/       ← Hero, AuthorityBar, Specializations, About, Why, Contact, Footer
    ui/             ← AnimatedText, GoldParticles, LanguageToggle, CTAButton
  lib/
    gsap.ts         ← GSAP plugin registration (use this, not direct gsap import)
    lenis.ts        ← Lenis initialization and GSAP sync
  messages/
    ar.json         ← ALL Arabic strings
    en.json         ← ALL English strings
  i18n/
    routing.ts      ← locale definitions
    request.ts      ← next-intl server config

## COMPONENT RULES
- Add "use client" only when using hooks, state, or browser APIs
- Static sections (no interactivity) must be Server Components for SEO
- All next/image must have proper alt in both languages
- All animations must check prefers-reduced-motion

## AGENT ORCHESTRATION
- @orchestrator is the entry point for all non-trivial tasks
- @plan-agent handles discovery, scoping, and execution planning
- @build-agent handles implementation and specialist coordination
- @build-agent may delegate to @ui-builder, @content-writer, @animator, @i18n-agent, and @security-auditor
- @security-auditor remains mandatory after every new component or sensitive change

## DEFINITION OF DONE
A task is DONE only when ALL of the following are true:
1. Component renders correctly in Arabic (RTL)
2. Component renders correctly in English (LTR)
3. All animations work without layout jank
4. Mobile responsive at 375px minimum width
5. @security-auditor has approved it
6. npx tsc --noEmit passes with zero errors
