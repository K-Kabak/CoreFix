# CoreFix - Design Specification

## Color Palette

### Primary Colors
- **Blue Primary**: `#3B82F6` (rgb(59, 130, 246))
  - Usage: Primary CTA buttons, links, active states
  - Hover: `#2563EB`
  - Light variant: `#60A5FA`

- **Blue Dark**: `#1E40AF` (rgb(30, 64, 175))
  - Usage: Headers, emphasis text, dark mode accents

### Neutral Colors
- **Gray 50**: `#F9FAFB` - Backgrounds (light sections)
- **Gray 100**: `#F3F4F6` - Card backgrounds
- **Gray 200**: `#E5E7EB` - Borders, dividers
- **Gray 400**: `#9CA3AF` - Placeholder text
- **Gray 600**: `#4B5563` - Secondary text
- **Gray 900**: `#111827` - Primary text, headings

### Accent Colors
- **Green Success**: `#10B981` - Success messages, checkmarks
- **Red Error**: `#EF4444` - Error states, alerts
- **Yellow Warning**: `#F59E0B` - Warnings, highlights
- **Orange Accent**: `#F97316` - Secondary CTA, badges

## Typography

### Font Family
- **Primary**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Monospace**: `'Fira Code', 'Courier New', monospace` (for technical details)

### Font Scale
```
Display (Hero): 48px / 3rem (mobile: 32px / 2rem)
H1: 36px / 2.25rem (mobile: 28px / 1.75rem)
H2: 30px / 1.875rem (mobile: 24px / 1.5rem)
H3: 24px / 1.5rem (mobile: 20px / 1.25rem)
H4: 20px / 1.25rem (mobile: 18px / 1.125rem)
Body Large: 18px / 1.125rem
Body: 16px / 1rem
Body Small: 14px / 0.875rem
Caption: 12px / 0.75rem
```

### Font Weights
- **Light**: 300 - Subtle text, decorative
- **Regular**: 400 - Body text, paragraphs
- **Medium**: 500 - Emphasis, button text
- **Semi-bold**: 600 - Subheadings, card titles
- **Bold**: 700 - Headings, primary emphasis

### Line Heights
- **Tight**: 1.25 - Headings
- **Normal**: 1.5 - Body text
- **Relaxed**: 1.75 - Long-form content

## Spacing System

Based on 4px grid:
```
xs: 4px (0.25rem)
sm: 8px (0.5rem)
md: 16px (1rem)
lg: 24px (1.5rem)
xl: 32px (2rem)
2xl: 48px (3rem)
3xl: 64px (4rem)
4xl: 96px (6rem)
```

### Component Spacing
- **Section Padding**: 64px top/bottom (mobile: 32px)
- **Card Padding**: 24px (mobile: 16px)
- **Button Padding**: 12px 24px (mobile: 10px 20px)
- **Input Padding**: 12px 16px

## Border Radius

```
sm: 4px - Badges, small buttons
md: 8px - Cards, inputs, regular buttons
lg: 12px - Large cards, modal windows
xl: 16px - Hero sections, feature blocks
full: 9999px - Pills, circular buttons
```

## Shadows

```css
/* Elevation levels */
sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

### Shadow Usage
- **Cards**: `shadow-md` (default), `shadow-lg` (hover)
- **Buttons**: `shadow-sm` (default), `shadow-md` (hover)
- **Modals**: `shadow-2xl`
- **Dropdowns**: `shadow-xl`

## Animation Timing

### Durations
```
instant: 75ms - Icon state changes, toggles
fast: 150ms - Hover effects, button states
normal: 300ms - Page transitions, modal open/close
slow: 500ms - Complex animations, page loads
```

### Easing Functions
```css
/* Standard easing */
ease-in: cubic-bezier(0.4, 0, 1, 1)
ease-out: cubic-bezier(0, 0, 0.2, 1)
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)

/* Custom easing */
bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55) - Playful buttons
smooth: cubic-bezier(0.4, 0, 0.6, 1) - Smooth transitions
```

### Common Animations
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
duration: 300ms, easing: ease-out

/* Slide Up */
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
duration: 300ms, easing: ease-out

/* Scale */
@keyframes scale {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
duration: 200ms, easing: ease-out
```

## Component Styling Notes

### Buttons
- **Primary**: Blue background, white text, shadow-sm, hover: darken + shadow-md
- **Secondary**: Transparent background, blue border, blue text, hover: light blue bg
- **Padding**: 12px 24px (md), 10px 20px (sm), 14px 32px (lg)
- **Border radius**: 8px (md)
- **Transition**: all 150ms ease-out

### Cards
- **Background**: white (light mode), gray-800 (dark mode)
- **Border**: 1px solid gray-200
- **Border radius**: 12px (lg)
- **Padding**: 24px
- **Shadow**: shadow-md, hover: shadow-lg
- **Transition**: shadow 300ms ease-out

### Input Fields
- **Border**: 1px solid gray-300, focus: 2px solid blue-500
- **Border radius**: 8px
- **Padding**: 12px 16px
- **Font size**: 16px (prevent mobile zoom)
- **Transition**: border-color 150ms ease-out

### Icons
- **Size**: 24px (default), 20px (small), 32px (large)
- **Stroke width**: 2px
- **Color**: Inherits from parent or gray-600
- **Hover**: Scale 1.1, color shift to blue-500

### Navigation
- **Height**: 64px (desktop), 56px (mobile)
- **Background**: white with shadow-sm, scroll: shadow-md
- **Links**: gray-700, hover: blue-600, active: blue-600 with underline
- **Sticky**: position: sticky, top: 0, z-index: 50

### Hero Section
- **Min height**: 600px (desktop), 500px (mobile)
- **Background**: Gradient from blue-50 to white
- **Heading**: Display size, bold, gray-900
- **Subheading**: Body large, gray-600
- **CTA spacing**: 16px gap between buttons

### Section Headers
- **Alignment**: Center
- **Title**: H2, bold, gray-900
- **Subtitle**: Body large, gray-600, max-width: 600px
- **Margin bottom**: 48px (desktop), 32px (mobile)

### Testimonials
- **Card style**: Bordered card with shadow-sm
- **Rating**: Yellow stars (5-star display)
- **Avatar**: 48px circle or initials badge
- **Quote**: Italic, gray-700
- **Name**: Semi-bold, gray-900

### FAQ Accordion
- **Item**: Border bottom, padding 20px 0
- **Question**: Semi-bold, gray-900, clickable area
- **Answer**: Body, gray-600, padding-top: 12px
- **Icon**: Chevron rotate transition (300ms)
- **Hover**: Background gray-50

### Footer
- **Background**: gray-900
- **Text**: gray-400, headings: gray-100
- **Links**: Hover: white, transition: 150ms
- **Padding**: 48px 0 24px

## Responsive Breakpoints

```
sm: 640px - Small devices
md: 768px - Tablets
lg: 1024px - Small laptops
xl: 1280px - Desktops
2xl: 1536px - Large screens
```

### Layout Behavior
- **Container max-width**: 1280px (xl)
- **Grid columns**: 12 (desktop), 4-6 (tablet), 1 (mobile)
- **Section padding**: 64px (desktop) → 32px (mobile)
- **Font scaling**: -2 to -4px on mobile for headings

## Accessibility

- **Focus states**: 2px solid blue-500 outline, 2px offset
- **Color contrast**: Minimum WCAG AA (4.5:1 for normal text, 3:1 for large text)
- **Touch targets**: Minimum 44x44px for mobile
- **Keyboard navigation**: Full support, visible focus indicators

## Dark Mode (Optional - Future)

- **Background**: gray-900
- **Card background**: gray-800
- **Text**: gray-100 (primary), gray-400 (secondary)
- **Border**: gray-700
- **Primary color**: Lighter blue (#60A5FA) for better contrast

---

**Last updated**: December 30, 2024
**Version**: 1.0
