# 🏛️ Dr. Hassan Hashem Al-Maliki — Legal Authority Landing Page

[![Framework: Next.js](https://img.shields.io/badge/Framework-Next.js%2016-0a1628?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Style: Tailwind v4](https://img.shields.io/badge/Style-Tailwind%20v4-c9a84c?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Animation: GSAP](https://img.shields.io/badge/Animation-GSAP-f5f0e8?style=flat-square&logo=greensock)](https://greensock.com/)
[![I18n: next-intl](https://img.shields.io/badge/i18n-Arabic%20%2F%20English-111d35?style=flat-square)](https://next-intl-docs.vercel.app/)

A premium, bilingual digital experience designed to establish institutional authority for **Dr. Hassan Hashem Al-Maliki**. This project transcends standard landing pages by blending academic prestige with state-of-the-art web technology.

---

## ✨ Project Vision
This is not just a website; it is a digital extension of a legal institution. Built to evoke trust, authority, and professional excellence, the platform serves as a high-conversion gateway for direct legal consultations in Saudi Arabia and beyond.

### 🏆 Core Pillars
- **Uncompromising Authority**: A design language inspired by formal legal documents and high-end institutional aesthetics.
- **Arabic-First Excellence**: Designed from the ground up for a native RTL experience, with a seamless English LTR toggle.
- **Performance & Motion**: Silky-smooth interactions powered by GSAP and Lenis, ensuring every scroll feels intentional and prestigious.
- **Privacy-Centric Architecture**: A secure, form-less contact model that prioritises direct person-to-person communication.

---

## 🛠️ Technical Masterpiece

The codebase is engineered for stability, speed, and future-proof scalability using the latest industry standards.

- **Frontend**: `Next.js 16.2` (App Router) with full `TypeScript` strict mode.
- **Styling**: `Tailwind CSS v4.2` utilizing dynamic CSS variables for a cohesive design system.
- **Motion Layer**: 
  - `GSAP 3.14` + `ScrollTrigger` for advanced editorial reveals.
  - `Motion` (from `motion/react`) for responsive UI state transitions.
  - `Lenis` for premium smooth-scrolling experience.
- **Internationalisation**: `next-intl` for robust, type-safe bilingual routing and translations.
- **SEO & Search**: Fully optimized with dynamic Sitemap, Robots, and Schema.org structured data for legal professionals.

---

## 🎨 Design System: The Academic Palette

The visual identity is defined by a curated palette that balances "Legal Deep Blue" with "Institutional Gold".

### Colors
| Name | Variable | Hex (Value) | Purpose |
| :--- | :--- | :--- | :--- |
| **Deep Primary** | `--color-primary` | `#0a1628` | Background & Depth |
| **Noble Gold** | `--color-gold` | `#c9a84c` | Accents & Authority |
| **Gold Light** | `--color-gold-light` | `#e8c96d` | Hover states |
| **Surface Ink** | `--color-surface` | `#111d35` | Card backgrounds |
| **Parchment White** | `--color-text` | `#f5f0e8` | Primary Reading |

### Typography
- **Arabic Display**: *Noto Naskh Arabic* — Echoing classical legal manuscripts.
- **Arabic Body**: *IBM Plex Arabic* — Modern, legible, and professional.
- **English Display**: *Playfair Display* — The gold standard for academic prestige.
- **English Body**: *Crimson Pro* — Refined editorial clarity.

---

## 🌍 Bilingual Orchestration

Every component is architected to perform flawlessly in both **RTL (Arabic)** and **LTR (English)** contexts.

- **Logical Properties**: Using `ps-`, `pe-`, `ms-`, and `me-` for direction-aware spacing.
- **Mirrored Animations**: Animation vectors automatically invert based on the current locale to ensure natural flow.
- **Register & Tone**: 
  - **Arabic**: Formal Modern Standard Arabic (فصحى).
  - **English**: Formal British register for international legal credibility.

---

## 🔒 Security & Privacy by Design

In alignment with legal ethics and user privacy, this project adheres to a strict "No-Persistence" contact model:
- **No Forms**: No user data is ever collected or stored on a database.
- **Direct CTAs**: All conversion points lead directly to encrypted communication channels (WhatsApp or Phone).
- **Sanitised Logic**: No external third-party scripts (except Google Fonts) are permitted, ensuring a clean and secure environment.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Run development server
npm run dev
```

### Available Commands
- `npm run dev`: Starts the local server with Turbopack.
- `npm run build`: Generates a production-ready optimized bundle.
- `npm run start`: Runs the production server locally.
- `npm run lint`: Enforces code quality and standards.

---

## 📦 Project Architecture
```text
src/
├── app/[locale]/       # Multi-language routing layer
├── components/
│   ├── sections/       # Narrative blocks (Hero, About, Why, etc.)
│   └── ui/             # High-finesse atomic components
├── lib/                # Engine initialization (GSAP, Lenis)
├── messages/           # Translation dictionaries (ar, en)
└── fonts/              # Custom brand typography
```

---

## 🎓 Contributor Guidelines
To maintain the prestige of this project, ensure that:
1. All changes are tested in both **Arabic (RTL)** and **English (LTR)**.
2. Motion is never decorative; it must always enhance the context or guide the eye.
3. Typography remains legible across all device sizes (minimum 375px).
4. **Never** hardcode hex colors; always use the CSS variable tokens.

---

<div align="center">
  <p>Built with precision by <strong>NeuraSync AI</strong></p>
  <p>For <strong>Dr. Hassan Hashem Al-Maliki</strong></p>
</div>
