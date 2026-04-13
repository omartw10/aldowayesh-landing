---
description: "Build the complete Hero section with all animations and translations"
---

Orchestrate the complete build of the Hero section for Dr. Hassan Al-Maliki's landing page.

Delegate in this order:
1. @ui-builder — Build src/components/sections/Hero.tsx with:
   - Full-width dark background (var(--color-primary))
   - Professional photo placeholder (right side LTR, left side RTL)
   - Doctor's name in gold (var(--color-gold)), large display font
   - Subtitle and subheadline in white
   - Two CTA buttons: WhatsApp and Call (use href="https://wa.me/966508089886" and href="tel:+966508089886")
   - Saudi Bar Association badge below CTAs

2. @animator — Add to Hero.tsx:
   - GSAP SplitText character reveal for the doctor's name
   - Gold particle canvas in the background (40 particles max)
   - Fade-up entrance for CTAs (Motion)

3. @i18n-agent — Validate RTL and LTR layouts are correct

4. @security-auditor — Security review of Hero.tsx

Report when all 4 steps are complete.