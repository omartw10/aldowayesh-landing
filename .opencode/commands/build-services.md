---
description: "Build the Specializations section with 6 service cards"
---

Build the Specializations section (6 service cards) for Dr. Hassan Al-Maliki.

Delegate:
1. @ui-builder — Build src/components/sections/Specializations.tsx with:
   - Section title and subtitle from translations
   - 6 cards in a responsive grid (2 cols mobile, 3 cols desktop)
   - Each card: icon + title + description
   - Glassmorphism effect: bg-[var(--color-surface)] with subtle border

2. @animator — Add Motion hover effects to each card:
   - y: -8 on hover
   - Golden border glow on hover
   - Scroll entry: staggered fade-up per card

3. @i18n-agent — Validate RTL grid layout

4. @security-auditor — Review Specializations.tsx

Report when complete.