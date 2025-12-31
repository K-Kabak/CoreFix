# CoreFix - Zadania dla Agentów

## 🎯 Główne Zadania

### 1. ✅ Setup & Konfiguracja (DONE)
- [x] Utworzenie projektu Vite + React
- [x] Instalacja zależności (Tailwind, Framer Motion, Lenis, Swiper, etc.)
- [x] Konfiguracja Tailwind CSS z custom colors
- [x] Struktura folderów

---

## 👨‍🎨 DESIGNER - Zadania Projektowe

### Priorytety
1. **Design System** (1-2h)
   - [ ] Palette kolorów (primary, secondary, accent) w Figma
   - [ ] Typography scale (Inter font family)
   - [ ] Spacing & grid system
   - [ ] Component library (buttons, cards, inputs)

2. **Mockupy** (4-6h)
   - [ ] Hero section (desktop + mobile)
   - [ ] About section z kartami
   - [ ] Services grid (3-4 usługi)
   - [ ] Pricing table
   - [ ] FAQ accordion
   - [ ] Testimonials slider
   - [ ] Contact form
   - [ ] Footer

3. **Assets** (2-3h)
   - [ ] Logo CoreFix (SVG)
   - [ ] Ikony usług (4-6 ikon): CPU, HDD, Wrench, Shield, Clock
   - [ ] Hero illustration LUB gradient background
   - [ ] Process timeline diagram
   - [ ] Placeholder avatars dla testimonials

4. **Animation Specs** (1-2h)
   - [ ] Scroll animations (fade-in, slide-up timings)
   - [ ] Hover states (cards lift, button glow)
   - [ ] Loading states
   - [ ] Transition specs (duration, easing)

### Deliverables
- [ ] Figma file z kompletem mockupów
- [ ] Exported assets (SVG, PNG @2x)
- [ ] Animation specification document
- [ ] CSS variables export (opcjonalnie)

**Zależności:** Brak  
**Deadline:** Dzień 1-2

---

## ✍️ COPY + SEO - Content Strategy

### Priorytety
1. **SEO Strategy** (1h)
   - [ ] Keywords research (serwis komputerowy, naprawa laptopów, etc.)
   - [ ] H1/H2/H3 structure
   - [ ] Internal linking strategy
   - [ ] URL structure

2. **Copy Writing** (3-4h)
   - [ ] Hero: Headline + subheadline + CTA
   - [ ] About: Misja, wizja, wartości (4 karty)
   - [ ] Services: 4-6 usług z opisami + pricing
   - [ ] Process: 5 kroków workflow
   - [ ] Pricing: 2-3 pakiety z feature lists
   - [ ] FAQ: 7-10 pytań + odpowiedzi
   - [ ] Testimonials: 5-6 opinii klientów
   - [ ] Footer: Linki, copyright, policy

3. **Meta Tags** (1h)
   - [ ] Title tags (per page)
   - [ ] Meta descriptions
   - [ ] Open Graph tags
   - [ ] Alt text guidelines dla images

4. **Schema Markup** (1h)
   - [ ] LocalBusiness JSON-LD
   - [ ] ServiceArea
   - [ ] Review / Rating
   - [ ] BreadcrumbList

5. **Blog Content** (nice-to-have, 2-3h)
   - [ ] 3-4 artykuły: porady, bezpieczeństwo danych, etc.

### Deliverables
- [ ] content.json z wszystkimi tekstami (PL)
- [ ] seo-config.json z meta tags
- [ ] schema.json z structured data
- [ ] blog-posts.md (opcjonalnie)

**Zależności:** Designer mockupy (dla kontekstu)  
**Deadline:** Dzień 1-2

---

## 💻 FRONT-END - React Development

### Priorytety

#### Phase 1: Core Setup (2-3h)
- [ ] **Layout Components**
  - [ ] Layout.jsx (wrapper)
  - [ ] Header.jsx (sticky nav)
  - [ ] Navbar.jsx (responsive menu)
  - [ ] Footer.jsx (links, copyright)

- [ ] **UI Components**
  - [ ] Button.jsx (variants: primary, secondary, outline)
  - [ ] Card.jsx (generic reusable card)
  - [ ] Container.jsx (max-width wrapper)
  - [ ] AnimatedSection.jsx (Framer Motion wrapper)
  - [ ] Icon.jsx (Lottie support)

#### Phase 2: Sections (4-6h)
- [ ] **Hero.jsx**
  - [ ] Headline + CTA
  - [ ] Fade-in animation
  - [ ] Background gradient/illustration

- [ ] **About.jsx**
  - [ ] Company description
  - [ ] 4 value cards (grid)
  - [ ] Staggered fade-in animation

- [ ] **Services.jsx**
  - [ ] Services grid (responsive)
  - [ ] Animated icons (Lottie)
  - [ ] Hover lift effect
  - [ ] CTA buttons

- [ ] **Process.jsx**
  - [ ] Timeline/steps visualization
  - [ ] Step-by-step animation
  - [ ] Counter animation (optional)

- [ ] **Pricing.jsx**
  - [ ] Package cards (2-3)
  - [ ] Feature lists
  - [ ] Highlight recommended
  - [ ] Hover effects

- [ ] **FAQ.jsx**
  - [ ] Accordion component
  - [ ] Smooth expand/collapse
  - [ ] Chevron rotate animation

- [ ] **Testimonials.jsx**
  - [ ] Swiper slider setup
  - [ ] Auto-play + pause on hover
  - [ ] Avatar + rating stars

- [ ] **Contact.jsx**
  - [ ] React Hook Form integration
  - [ ] Validation (yup/zod)
  - [ ] Focus states
  - [ ] Success toast (React Toastify)
  - [ ] Fake submit handler (console.log)

#### Phase 3: Animations & Polish (2-3h)
- [ ] **Scroll Animations**
  - [ ] useInView hook (Framer Motion)
  - [ ] Trigger animations on scroll
  - [ ] Staggered children animations

- [ ] **Lenis Smooth Scroll**
  - [ ] Setup Lenis wrapper
  - [ ] Smooth scrolling behavior
  - [ ] Anchor link smooth scroll

- [ ] **Hover Effects**
  - [ ] Cards: scale + shadow
  - [ ] Buttons: glow/highlight
  - [ ] Images: zoom on hover

#### Phase 4: Responsiveness (2h)
- [ ] Mobile-first breakpoints (sm, md, lg, xl)
- [ ] Test all sections on mobile
- [ ] Hamburger menu for mobile nav
- [ ] Touch-friendly interactions

#### Phase 5: Accessibility (1-2h)
- [ ] Keyboard navigation
- [ ] Focus states (outline visible)
- [ ] ARIA labels
- [ ] Color contrast check (WCAG AA)
- [ ] Screen reader testing

#### Phase 6: SEO & Performance (1-2h)
- [ ] Lazy load images (loading="lazy")
- [ ] Optimize Lottie files (compress JSON)
- [ ] Meta tags per page (via data prop)
- [ ] Sitemap generation (nice-to-have)
- [ ] Lighthouse audit (aim for 90+ scores)

#### Phase 7: Nice-to-Have (2-3h)
- [ ] Dark mode toggle (Tailwind dark: classes)
- [ ] Blog page with article cards
- [ ] Email integration (EmailJS/Formspree)
- [ ] Loading states & skeletons
- [ ] 404 page

### Deliverables
- [ ] Fully functional React app
- [ ] All sections implemented
- [ ] Responsive design (mobile + desktop)
- [ ] Animations working smoothly
- [ ] Production-ready build

**Zależności:**
- Designer: mockupy + assets (blokuje Phase 2)
- Copy+SEO: content data (blokuje Phase 2)

**Deadline:** Dzień 2-4

---

## 📦 Data Structure

### Example: src/data/content.json
```json
{
  "hero": {
    "headline": "Profesjonalny serwis komputerowy",
    "subheadline": "Szybko, uczciwie, bezpiecznie",
    "cta": "Skontaktuj się z nami"
  },
  "services": [
    {
      "id": 1,
      "title": "Naprawa laptopów",
      "description": "Wymiana matryc, zawiasów, naprawa po zalaniu",
      "price": "Od 100 zł",
      "icon": "laptop"
    }
  ],
  "testimonials": [
    {
      "id": 1,
      "name": "Paweł K.",
      "rating": 5,
      "text": "Szybko, profesjonalnie, uczciwie. Polecam!",
      "avatar": "/avatars/1.jpg"
    }
  ]
}
```

---

## 🔄 Workflow & Zależności

```
┌─────────────────────────────────────────┐
│  DESIGNER                               │
│  - Design system (Dzień 1)             │
│  - Mockupy (Dzień 1-2)                 │
│  - Assets export (Dzień 2)             │
└─────────────┬───────────────────────────┘
              │
              ├──────────────────┐
              │                  │
              ▼                  ▼
┌─────────────────────┐  ┌─────────────────────┐
│  COPY + SEO         │  │  FRONT-END Phase 1  │
│  - Keywords (D1)    │  │  - Setup (D1)       │
│  - Content (D1-2)   │  │  - Layout (D1)      │
│  - SEO config (D2)  │  │  - UI Components    │
└──────────┬──────────┘  └──────────┬──────────┘
           │                        │
           └────────┬───────────────┘
                    │
                    ▼
         ┌─────────────────────┐
         │  FRONT-END Phase 2  │
         │  - Sections (D2-3)  │
         │  - Animations (D3)  │
         │  - Polish (D3-4)    │
         └──────────┬──────────┘
                    │
                    ▼
         ┌─────────────────────┐
         │  QA & DEPLOY        │
         │  - Testing (D4)     │
         │  - Build (D4)       │
         │  - Deploy (D5)      │
         └─────────────────────┘
```

---

## ⚡ Quick Start dla Agentów

### Designer
1. Otwórz Figma
2. Import design system z tailwind.config.js (kolory)
3. Stwórz mockupy dla każdej sekcji
4. Export assets do `src/assets/`

### Copy+SEO
1. Stwórz `src/data/content.json`
2. Wypełnij wszystkie teksty (PL)
3. Stwórz `src/data/seo.json` z meta tags
4. Przygotuj schema markup

### Front-end
1. Zainstaluj zależności: `npm install` (✅ DONE)
2. Uruchom dev server: `npm run dev`
3. Zaimplementuj komponenty zgodnie z Phase 1-7
4. Testuj na każdym kroku
5. Build: `npm run build`

---

## 📊 Progress Tracking

- [ ] Design System Created
- [ ] All Mockups Ready
- [ ] Assets Exported
- [ ] Content Written (PL)
- [ ] SEO Config Ready
- [ ] Layout Components Built
- [ ] UI Components Built
- [ ] All Sections Implemented
- [ ] Animations Working
- [ ] Mobile Responsive
- [ ] Accessibility Checked
- [ ] Performance Optimized
- [ ] Production Build Ready

---

## 🚀 Ready to Deploy?

Checklist:
- [ ] All sections implemented & styled
- [ ] Content populated (real data)
- [ ] Images optimized
- [ ] Lighthouse score 90+
- [ ] Mobile tested
- [ ] Cross-browser tested
- [ ] Forms working
- [ ] SEO meta tags present
- [ ] No console errors

---

**Last Updated:** December 30, 2025  
**Project Status:** 🟡 In Progress (Setup Complete)
