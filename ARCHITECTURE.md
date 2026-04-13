# هيكل مشروع موقع الدكتور حسن المالكي

## نظرة عامة على المشروع

المشروع هو موقع شخصي احترافي للدكتور حسن هاشم المالكي، محامٍ ومستشار قانوني سعودي. يعتمد على Next.js 16 مع دعم كامل للغتين العربية (RTL) والإنجليزية (LTR).

---

## هيكل المجلدات الرئيسي

```
aldowayesh-landing/
├── src/
│   ├── app/                    # صفحات وتطبيق Next.js
│   ├── components/            # مكونات React
│   ├── lib/                  # مكتبات وإعدادات
│   ├── i18n/                 # إعداداتLanguages
│   ├── messages/              # ملفات الترجمة
│   └── fonts/                 # الخطوط
├── public/                   # ملفات عامة
├── .opencode/               # إعدادات OpenCode
├── .next/                  # بناء سابق (Next.js cache)
└── package.json
```

---

## مجلد src/app — صفحات التطبيق

### `src/app/layout.tsx`
**الوظيفة:** التخطيط الجذري للموقع

**المسؤوليات:**
- توفير مزود Lenis للتمرير السلس
- تحميل الخطوط
- تغليف الأطفال بـ `html` مع سمة `dir`

```typescript
// هيكل البيانات:
// dir → يحدد اتجاه النص (rtl/ltr) حسب اللغة
<Html dir={isRtl ? "rtl" : "ltr"}>
  <Body>
    <ReactLenis root>{children}</ReactLenis>
  </Body>
</Html>
```

---

### `src/app/[locale]/layout.tsx`
**الوظيفة:** تخطيط مع دعم Languages

**المسؤوليات:**
- جلب إعدادات اللغة من `next-intl`
- تمرير `messages` للمكونات
- تحديد اتجاه `dir` حسب اللغة

**سير البيانات:**
```
Request → next-intl/server → request.ts
           ↓
        messages/ar.json أو en.json
           ↓
        useTranslations() في المكونات
```

---

### `src/app/[locale]/page.tsx`
**الوظيفة:** الصفحة الرئيسية

**المكونات التي يتضمنها:**
```typescript
import Hero from "@/components/sections/Hero"
import AuthorityBar from "@/components/sections/AuthorityBar"
import Services from "@/components/sections/Services"
import About from "@/components/sections/About"
import WhyChoose from "@/components/sections/WhyChoose"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

export default function Page() {
  return (
    <>
      <Hero />
      <AuthorityBar />
      <Services />
      <About />
      <WhyChoose />
      <Contact />
      <Footer />
    </>
  )
}
```

---

### `src/app/globals.css`
**الوظيفة:** تعريف متغيرات CSS والتصميم الأساسي

**المتغيرات المُعرفة:**
```css
:root {
  --color-primary: #0a1628       /* خلفية داكنة */
  --color-gold: #c9a84c        /* ذهبي */
  --color-gold-light: #e8c96d    /* ذهبي فاتح */
  --color-surface: #111d35       /* سطح البطاقات */
  --color-text: #f5f0e8        /* نص أبيض دافئ */
  --color-text-muted: #8a9bb8    /* نص باهت */
  --color-border: #1e2d4a         /* حدود */
}
```

**كيفية الاستخدام:**
```typescript
// في أي مكون:
// ❌ خطأ: className="text-[#f5f0e8]"
// ✅ صحيح: className="text-[var(--color-text)]"
```

---

### `src/app/icon.tsx` و `src/app/apple-icon.tsx`
**الوظيفة:** أيقونات الموقع (favicon)

---

### `src/app/manifest.ts`
**الوظيفة:** ملف manifest لتطبيق PWA

---

### `src/app/not-found.tsx`
**الوظيفة:** صفحة 404 عند عدم وجود الصفحة

---

### `src/app/sitemap.ts` و `src/app/robots.ts`
**الوظيفة:** خرائط الموقع ومحركات البحث

---

## مجلد src/components/sections — أقسام الموقع

### `Hero.tsx`
**الوظيفة:** القسم الرئيسي (الfst section)

**البيانات المسحوبة من `ar.json`:**
```json
{
  "hero": {
    "name": "الدكتور حسن هاشم المالكي",
    "title": "محامٍ ومستشار قانوني",
    "specialization": "متخصص في...",
    "cta_primary": "ابدأ عبر واتساب",
    "cta_secondary": "اتصال مباشر"
  }
}
```

**كيفية جلب البيانات:**
```typescript
import { useTranslations } from "next-intl"

export default function Hero() {
  const t = useTranslations("hero")
  
  return (
    <h1>{t("name")}</h1>
    <p>{t("title")}</p>
    <a href="https://wa.me/966508089886">{t("cta_primary")}</a>
  )
}
```

**التفاعلات:**
- GSAP SplitText لحركة الأحرف
- 40 جزيئة ذهبية (Canvas)
- Motion للدخول

---

### `AuthorityBar.tsx`
**الوظيفة:** شريط الخبرة والعضويات

**البيانات من `ar.json`:**
```json
{
  "authority": {
    "experience": "+15 سنة",
    "locations": "جدة | الرياض | القصيم"
  }
}
```

---

### `Services.tsx` (أو Specializations)
**الوظيفة:** قسم الخدمات

**البيانات من `ar.json`:**
```json
{
  "services": {
    "items": {
      "financial": { "title": "...", "description": "..." },
      "legislative": { ... },
      "translation": { ... },
      ...
    }
  }
}
```

**grid: 2 أعمدة على الجوال، 3 على desktop**

---

### `About.tsx`
**الوظيفة:** نبذة مهنية

**البيانات من `ar.json`:**
```json
{
  "about": {
    "paragraph_1": "...",
    "paragraph_2": "...",
    "paragraph_3": "..."
  }
}
```

---

### `WhyChoose.tsx`
**الوظيفة:** أسباب اختيار العميل

**البيانات من `ar.json`:**
```json
{
  "why": {
    "items": {
      "academic": { "title": "...", "description": "..." },
      "bilingual": { ... },
      "geographic": { ... }
    }
  }
}
```

---

### `Contact.tsx`
**الوظيفة:** نموذج التواصل

**البيانات من `ar.json`:**
```json
{
  "contact": {
    "whatsapp": "تواصل عبر واتساب",
    "call": "اتصال مباشر"
  }
}
```

**CTA buttons:**
- واتساب: `href="https://wa.me/966508089886"`
- اتصال: `href="tel:+966508089886"`

---

### `Footer.tsx`
**الوظيفة:** الذيل مع الحقوق

**البيانات من `ar.json`:**
```json
{
  "footer": {
    "rights": "جميع الحقوق محفوظة",
    "membership": "..."
  }
}
```

---

### `Header.tsx`
**الوظيفة:** رأس التنقل

**البيانات من `ar.json`:**
```json
{
  "nav": {
    "services": "التخصصات",
    "about": "النبذة المهنية",
    "why": "عناصر التميز",
    "contact": "التواصل"
  }
}
```

---

## مجلد src/components/ui — مكونات UI

| الملف | الوظيفة |
|-------|---------|
| `CTAButton.tsx` | زر CTA قابل لإعادة الاستخدام مع href |
| `LanguageToggle.tsx` | تبديل اللغة (عربي/English) |
| `WhatsAppFAB.ktx` | زر عائم للواتساب |
| `BackToTop.tsx` | زر الرجوع للأعلى |
| `LoadingScreen.tsx` | شاشة التحميل |
| `ScrollProgress.tsx` | شريط تقدم التمرير |
| `ThemeSelector.ktx` |主题 (dark/light) |
| `LegalDisclaimer.tsx` | إخلاء المسؤولية |
| `AvailabilityIndicator.tsx` | مؤشر التوفر |
| `SchemaJsonLd.tsx` | بيانات Schema.org |

---

## مجلد src/lib — المكتبات

### `src/lib/gsap.ts`
**الوظيفة:** إعداد GSAP + التسجيل الإضافات

```typescript
// الاستيراد ALWAYS من هنا
import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap"

// NOT: import { gsap } from "gsap"
```

**المسؤوليات:**
- تسجيلScrollTrigger
- Flip plugin
- SplitText (للحروف)

---

### `src/lib/lenis.ts`
**الوظيفة:** إعداد Lenis للتمرير السلس

```typescript
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// مزامنة مع GSAP
lenis.on("scroll", ScrollTrigger.update)
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})
```

---

## مجلد src/i18n — إعداداتLanguages

### `src/i18n/routing.ts`
```typescript
export const routing = defineRouting({
  locales: ["ar", "en"],
  defaultLocale: "ar",  // اللغة الافتراضية
  localeDetection: false // لاكتشاف تلقائي
})
```

### `src/i18n/request.ts`
```typescript
export default getRequestConfig(async ({ requestLocale }) => {
  // جلب اللغة من الطلب أو استخدام الافتراضية
  let locale = await requestLocale
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale
  }
  
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  }
})
```

---

## مجلد src/messages — ملفات الترجمة

### `src/messages/ar.json`
جميع النصوص العربية (مفتاح `hero`, `services`, `about`, إلخ)

### `src/messages/en.json`
جميع النصوص الإنجليزية — **يجب أن يكون له نفس المفاتيح**

**قاعدة ذهبية:**
> إذا وُجد مفتاح في `ar.json` يجب أن يوجد في `en.json`

---

## سير البيانات الكامل

```
┌─────────────────────────────────────────────────────┐
│          طلب المستخدم (موقع/الصفحة)              │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌──────────────────────────────────────────────────────┐
│  [locale]/layout.tsx                                │
│  ↓                                                  │
│  next-intl/server → request.ts                      │
│  ↓                                                  │
│  جلب الـ locale من الـ routing                     │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌──────────────────────────────────────────────────────┐
│  استيراد_messages المناسبة                         │
│  messages/ar.json أو messages/en.json               │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌──────────────────────────────────────────────────────┐
│  تمرير messages لكل المكونات عبر useTranslations()  │
│  const t = useTranslations("hero")                  │
│  t("name") → "الدكتور حسن هاشم المالكي"          │
└──────────────────────┬──────────────────────────────┘
                       ↓
┌──────────────────────────────────────────────────────┐
│  المكونات تُعرض البيانات مع RTL/LTR                  │
│  ← div dir="rtl" ← Arabic                          │
│  ← div dir="ltr" ← English                       │
└──────────────────────────────────────────────────────┘
```

---

## مجلد .opencode — إعدادات OpenCode

### `.opencode/agents/`
| الوكيل | الوظيفة |
|--------|---------|
| `orchestrator.md` | المدير العام — يوزع المهام |
| `plan-agent.md` | مخطط — يحدد scope قبل البناء |
| `build-agent.md` | منفذ — ينفذ المهام |
| `ui-builder.md` | يبني مكونات React |
| `content-writer.ktx` | يكتب المحتوى |
| `animator.ktx` | يضيف الحركات (GSAP/Motion) |
| `i18n-agent.md` | يتأكد من sincronización الترجمات |
| `security-auditor.md` | يفحص الأمان (mandatory) |

### `.opencode/commands/`
| الأمر | الوظيفة |
|-------|---------|
| `build-hero.md` | بناء قسم Hero الكامل |
| `build-services.md` | بناء قسم الخدمات |
| `security-check.md` | فحص أمني شامل |
| `translate-en.md` | مزامنة الترجمات |
| `deploy-preview.md` | نشر على Vercel |

### `.opencode/skills/`
| المهارة | الوظيفة |
|---------|---------|
| `frontend-design/` | تصميم واجهات مميزة |
| `context-optimization/` | تحسين السياق |

---

## مجلد .next — الـ Build Cache

هذا المجلد يحتوي على ملفات البناء المُحزّنة من Next.js. يُنشأ تلقائيًا عند تشغيل `npm run build`.

**لا يُدعم:**

- نقل الـ cache بين أنظمة مختلفة
- استخدام building مختلف

عند نقل المجلد، قد تحتاج لتشغيل:
```bash
npm run dev    # أو
npm run build  # لإعادة البناء
```

---

## القواعد الأمنية

### ❌ ممنوع
```typescript
// 1. أرقام الهواتف كنص واضح
<span>+966508089886</span>    // ❌ RED

// 2. نموذج لجمع البيانات
<form>...</form>        // ❌ RED

// 3. استيراد خاطئ
import { motion } from "framer-motion"  // ❌

// 4. مفاتيح API في الكود
const API_KEY = "sk-..."     // ❌ RED
```

### ✅ مسموح
```typescript
// 1. روابط واتساب/هاتفي فقط
<a href="https://wa.me/966508089886">...</a>  // ✅
<a href="tel:+966508089886">...</a>          // ✅

// 2. استيراد صحيح
import { motion } from "motion/react"      // ✅
import { gsap } from "@/lib/gsap"      // ✅

// 3. ألوان CSS variables
className="bg-[var(--color-primary)]"   // ✅
```

---

## بدء المشروع

```bash
# تطوير
npm run dev

# بناء
npm run build

# فحص أمني
npm audit
npx tsc --noEmit
npx eslint src/ --ext .ts,.tsx
```

---

## ملخص سير العمل

1. **طلب** → `layout.tsx` → `i18n/request.ts`
2. **تحديد اللغة** → `routing.ts` (default: ar)
3. **جلب الترجمات** → `messages/ar.json` أو `en.json`
4. **تمرير للمكونات** → `useTranslations("section")`
5. **عرض المحتوى** → مكونات React + CSS variables
6. **الحركات** → GSAP/Motion (مع prefers-reduced-motion)
7. **فحص أمني** → @security-auditor (mandatory)