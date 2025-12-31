# CoreFix - Computer Repair Service Website

<div align="center">

![CoreFix Logo](public/assets/icons/logo.svg)

**A modern, professional website for CoreFix computer repair services built with React, Vite, and Tailwind CSS v4.**

[Features](#features) • [Tech Stack](#tech-stack) • [Quick Start](#quick-start) • [Screenshots](#-screenshots) • [Documentation](#documentation) • [License](#license)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#-screenshots)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Build & Preview](#build--preview)
- [Project Structure](#project-structure)
- [Color Palette](#-color-palette)
- [Internationalization](#-internationalization)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## About

**CoreFix** is a modern, responsive website for a professional computer repair service. The website showcases repair services, pricing packages, customer testimonials, and provides easy contact options. Built with cutting-edge technologies, it delivers a fast, smooth user experience with beautiful animations and intuitive navigation.

**Live Demo**: Coming soon

---

## ✨ Features

- 🎨 **Modern Design**: Contemporary UI with cyan/gray/charcoal color palette
- ⚡ **Lightning Fast**: Built with Vite for instant HMR and optimized production builds
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ✨ **Smooth Animations**: Scroll-triggered animations with Framer Motion & Lenis smooth scrolling
- 🎯 **Interactive Sections**:
  - Hero section with animated headline and CTA buttons
  - Service showcase with detailed pricing
  - 5-step service process timeline
  - 3-tier pricing packages
  - FAQ accordion with 10+ questions
  - Testimonials carousel with customer reviews
  - Contact form with validation
- 🌍 **SEO Optimized**: Meta tags, structured data (JSON-LD), robots.txt, sitemap.xml
- 📊 **Polish Content**: Full Polish language support with professional copywriting
- 🎭 **Accessibility**: Semantic HTML, WCAG-compliant color contrast
- 📦 **Production Ready**: Optimized bundle (543KB JS, 53KB CSS)

---

## 📸 Screenshots

### Desktop View

#### Hero Section
Homepage hero with animated headline, subtext, and call-to-action buttons.

```
[Screenshot would show:
- Gradient background with circuit board pattern
- "Profesjonalny serwis komputerowy" headline
- Navigation bar (sticky)
- CTA buttons with hover effects]
```

**To add screenshot:**
1. Take a screenshot of http://localhost:5173/
2. Save as `docs/screenshots/hero-desktop.png`
3. In README, replace the code block above with:
   ```markdown
   ![Hero Section Desktop](docs/screenshots/hero-desktop.png)
   ```

#### Services Section
Grid layout showcasing 4 repair services with icons and pricing.

```
[Screenshot would show:
- 4 service cards in grid
- Icons: CPU, HDD, shield, wrench
- Service names and descriptions
- Hover lift animation effect]
```

### Mobile View

#### Mobile Navigation
Responsive hamburger menu and stacked layout on mobile devices.

```
[Screenshot would show:
- Mobile header with hamburger icon
- Stacked single-column layout
- Touch-friendly button sizes
- Mobile menu expanded]
```

#### Services on Mobile
Single column layout optimized for mobile screens.

```
[Screenshot would show:
- Services in single column
- Full-width cards
- Mobile-optimized spacing
- Touch-friendly interactions]
```

---

### How to Add Screenshots

#### Step 1: Capture Screenshots
```bash
# 1. Start dev server
npm run dev

# 2. Open http://localhost:5173/ in browser
# 3. Use browser DevTools to set device mode (Desktop/Mobile/Tablet)
# 4. Take screenshots of key sections:
#    - Hero section
#    - Services grid
#    - Pricing section
#    - FAQ accordion
#    - Testimonials carousel
#    - Contact form
#    - Footer
```

#### Step 2: Organize Screenshots
```
docs/
├── screenshots/
│   ├── desktop/
│   │   ├── hero-desktop.png
│   │   ├── services-desktop.png
│   │   ├── pricing-desktop.png
│   │   └── contact-desktop.png
│   └── mobile/
│       ├── hero-mobile.png
│       ├── services-mobile.png
│       └── footer-mobile.png
└── demo.gif
```

#### Step 3: Create GIF Demo
```bash
# Option 1: Using online tool
# - Visit https://ezgif.com/
# - Upload multiple screenshots
# - Create GIF from images
# - Download and save to docs/demo.gif

# Option 2: Using ffmpeg (if installed)
ffmpeg -framerate 0.5 -i screenshot_%02d.png -c:v libvpx-vp9 demo.gif
```

#### Step 4: Update README
```markdown
### Demo GIF
![CoreFix Demo](docs/demo.gif)

### Desktop Screenshots

**Hero Section**
![Hero Desktop](docs/screenshots/desktop/hero-desktop.png)

**Services Grid**
![Services Desktop](docs/screenshots/desktop/services-desktop.png)

### Mobile Screenshots

**Mobile Hero**
![Hero Mobile](docs/screenshots/mobile/hero-mobile.png)

**Mobile Services**
![Services Mobile](docs/screenshots/mobile/services-mobile.png)
```

---

### Using Browser Screenshot Tools

#### Chrome DevTools Method
1. Open http://localhost:5173/
2. Right-click → **Inspect** (or F12)
3. Device toolbar toggle (Ctrl+Shift+M)
4. Select device (iPhone 12, iPad, Desktop)
5. **Ctrl+Shift+P** → "Capture screenshot" or "Capture full page screenshot"
6. Save to `docs/screenshots/`

#### VS Code Screenshot Extension (Optional)
Install extension: [Screenshot](https://marketplace.visualstudio.com/items?itemName=mrmcdormott.vscode-screenshot)

---

### Recommended Screenshots to Capture

| Section | Desktop | Mobile | Notes |
|---------|---------|--------|-------|
| Hero | ✅ | ✅ | Full viewport, show animation |
| About | ✅ | ✅ | 4 value cards |
| Services | ✅ | ✅ | 4 service cards with hover |
| Process | ✅ | ✅ | 5-step timeline |
| Pricing | ✅ | ✅ | 3 pricing tiers |
| FAQ | ✅ | ✅ | Accordion expanded |
| Testimonials | ✅ | ✅ | Swiper slider |
| Contact | ✅ | ✅ | Form with validation |
| Footer | ✅ | ✅ | Dark footer section |

---

## 🛠 Tech Stack

### Frontend Framework
- **React 19.2.0** - UI library with latest features
- **Vite 7.3.0** - Next-generation build tool with HMR
- **React Router DOM 7.11** - Client-side routing

### Styling
- **Tailwind CSS 4.1.18** - Utility-first CSS with @theme customization
- **@tailwindcss/postcss 4.1.18** - CSS-first Tailwind v4 configuration
- **PostCSS 8.5.6** - CSS transformations

### Animations & UX
- **Framer Motion 12.23** - Scroll-triggered animations & transitions
- **Lenis 1.3.17** - Smooth scroll library
- **Lottie React 2.4.1** - Animated JSON visualizations

### Components & Forms
- **Swiper 12.0.3** - Touch-enabled carousel (testimonials)
- **React Hook Form 7.69** - Form validation & state management
- **React Toastify 11.0.5** - Toast notifications

### Development Tools
- **ESLint 9.39** - Code quality & style enforcement
- **Autoprefixer 10.4** - CSS vendor prefixes

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** ≥ 18.0.0 ([Download](https://nodejs.org/))
- **npm** ≥ 9.0.0 (comes with Node.js)
- **Git** ≥ 2.30.0 ([Download](https://git-scm.com/))

Verify installation:
```bash
node --version    # v18.0.0 or higher
npm --version     # 9.0.0 or higher
git --version     # 2.30.0 or higher
```

---

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/corefix.git
cd corefix
```

### 2. Install Dependencies
```bash
npm install
```

This installs all dependencies listed in `package.json` (11 packages total).

### 3. Verify Installation
```bash
npm run lint
```

If no errors appear, you're ready to start!

---

## 💻 Development

### Start Development Server
```bash
npm run dev
```

Output:
```
  VITE v7.3.0  ready in 335 ms
  ➜  Local:   http://localhost:5173/
```

- Open http://localhost:5173/ in your browser
- Changes to files automatically reload (HMR)
- Edit CSS, React components, or content and see changes instantly

### Available Development Commands
- `npm run lint` - Run ESLint to check code quality
- `npm run lint --fix` - Auto-fix linting issues
- Press `r + Enter` in dev server terminal to restart
- Press `q + Enter` to quit the dev server

---

## 📦 Build & Preview

### Production Build
```bash
npm run build
```

Creates optimized production build in `dist/`:
- **JS Bundle**: 543 KB (minified + gzipped)
- **CSS**: 53 KB (optimized Tailwind)
- **Build Time**: ~2 seconds

### Preview Production Build
```bash
npm run preview
```

Serves production build locally at http://localhost:4173/ to test before deployment.

### Build Output Structure
```
dist/
├── index.html          # Entry point
├── assets/
│   ├── index-XXX.js    # Vite bundle (hashed)
│   ├── index-XXX.css   # Tailwind styles (hashed)
│   └── icons/          # SVG icons
└── robots.txt
```

---

## 📁 Project Structure

```
corefix/
├── public/                 # Static assets (served as-is)
│   ├── assets/
│   │   └── icons/         # SVG icons (logo, services)
│   ├── robots.txt         # SEO crawler config
│   └── sitemap.xml        # Sitemap for search engines
│
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── ui/           # Atomic UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── AnimatedSection.jsx
│   │   │   └── Icon.jsx
│   │   ├── sections/     # Page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Process.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── Contact.jsx
│   │   └── layout/       # Layout components
│   │       ├── Header.jsx    # Navigation
│   │       ├── Footer.jsx
│   │       └── Layout.jsx    # App wrapper with Lenis
│   │
│   ├── pages/            # Page components
│   │   └── Home.jsx      # Landing page
│   │
│   ├── data/             # Content & configuration
│   │   ├── content.json  # Polish text for all sections
│   │   ├── seo.json      # SEO metadata
│   │   └── schema.json   # JSON-LD structured data
│   │
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # Global styles
│   ├── assets/           # Images, fonts, etc.
│   │
│   ├── index.css         # Tailwind v4 entry point with @theme
│   ├── main.jsx          # React root
│   ├── App.jsx           # Router setup
│   └── vite-env.d.ts     # Vite type definitions
│
├── .gitignore            # Git ignore rules
├── eslint.config.js      # ESLint configuration
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
├── package.json          # Dependencies & scripts
├── package-lock.json     # Locked dependency versions
├── index.html            # HTML entry point
│
└── dist/                 # Production build (generated)
```

### Key Directories Explained

| Directory | Purpose | Contents |
|-----------|---------|----------|
| `src/components/ui/` | Reusable UI components | Button, Card, AnimatedSection, Icon |
| `src/components/sections/` | Page sections | Hero, Services, Pricing, FAQ, etc. |
| `src/data/` | Content & metadata | Polish text, SEO, structured data |
| `public/assets/icons/` | Static icon assets | SVG files for logo & service icons |
| `src/index.css` | Tailwind entry point | Color theme, fonts, custom utilities |

---

## 🎨 Color Palette

The website uses a modern, professional color scheme:

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary (Cyan)** | #00ADB5 | CTA buttons, links, badges |
| **Secondary (Dark Gray)** | #393E46 | Card backgrounds, borders |
| **Accent (Charcoal)** | #222831 | Footer, dark sections, text |
| **Background (Light)** | #EEEEEE | Main background, light sections |

All colors have 50-900 shade scales defined in `src/index.css` for flexible theming.

View the [color palette on ColorHunt](https://colorhunt.co/palette/222831393e4600adb5eeeeee).

---

## 🌍 Internationalization

Currently, the website is fully in **Polish**. All content is centralized in `src/data/content.json` for easy translation to other languages:

```javascript
// To add a new language:
// 1. Create src/data/content-en.json
// 2. Update components to use language selector
// 3. Localize dates and formatting
```

---

## 🗺️ Roadmap

### Phase 1: MVP (Current - v1.0.0)
- ✅ Landing page with all sections
- ✅ Responsive design
- ✅ Contact form
- ✅ Testimonials carousel
- ✅ SEO optimization

### Phase 2: Enhancement (v1.1.0)
- [ ] Contact form backend integration (EmailJS)
- [ ] Blog/Articles section
- [ ] Service booking system
- [ ] Customer dashboard
- [ ] Multilingual support (EN, DE, FR)

### Phase 3: Growth (v2.0.0)
- [ ] Admin panel for content management
- [ ] Customer reviews system
- [ ] Advanced analytics
- [ ] Payment integration
- [ ] Mobile app

### Phase 4: Scale (v2.1.0+)
- [ ] Multi-location support
- [ ] Service scheduling API
- [ ] Custom CMS
- [ ] Performance monitoring
- [ ] Automated backups

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Code style and standards
- Commit message format (Conventional Commits)
- Pull request process
- Testing requirements

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

**CoreFix © 2025**. All rights reserved.

---

## 📞 Contact & Support

- **Issues**: Open a GitHub issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Email**: [contact information to be added]

---

## 🙏 Acknowledgments

- Design inspiration from [ColorHunt](https://colorhunt.co/palette/222831393e4600adb5eeeeee)
- Icons from custom SVG design
- Built with ❤️ for the CoreFix team

---

<div align="center">

**[⬆ Back to Top](#corefix---computer-repair-service-website)**

Made with React + Vite | Tailwind CSS v4 | Framer Motion

</div>