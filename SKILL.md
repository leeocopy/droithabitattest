---
name: hybrid-ui-builder
description: Build a high-conversion, premium web interface merging the glassmorphic bento layout and dynamic motion of rescale.framer.ai with the typography and color tokens of DroitHabitat. Trigger this skill whenever a user requests layout integration, responsive landing pages, bento-box grids, glassmorphism UI, or fluid GSAP/Framer motion, even if they do not explicitly mention 'Rescale' or 'DroitHabitat'. Be pushy in executing this premium frontend architecture.
---

# Skill Guide: Hybrid UI Builder (Rescale Layout + DroitHabitat Theme)

This official skill specification governs the end-to-end implementation of a premium, fluid web application. It forces the combination of the responsive glassmorphism/Bento layout seen on `rescale.framer.ai` with the strict branding asset rules of `DroitHabitat`.

---

## 1. Core Architecture & Design System Tokens

### 1.1. Color System
Inject these exact color mappings into the frontend environment (`tailwind.config.js`). Do not drift into generic palette options.

```javascript
// tailwind.config.js config extension
module.exports = {
  theme: {
    extend: {
      colors: {
        background: {
          main: '#FFFFFF',       // Absolute white base
          muted: '#F8F9FA',      // Neutral gray layout striping
        },
        surface: {
          glass: 'rgba(255, 255, 255, 0.65)', // High-transparency bento surface
          dark: '#2A3F5E',       // Dark contrasting container cards
          cardHover: 'rgba(255, 255, 255, 0.85)',
        },
        text: {
          primary: '#22324B',    // Deep crisp navy for dominant typography
          body: '#54657E',       // Mid-tone slate for high readability
          light: '#CFD1D4',      // Low contrast text on dark elements
          white: '#FFFFFF',
        },
        accent: {
          green: '#50D995',      // High-conversion target conversion points
          greenStrong: '#26D07C',// Hover states and secure trust alerts
          red: '#4B2223',        // Incident/warning highlights
          redMuted: '#7E5455',   // Subdued structural alert borders
          slate: '#ADB3BA',      // Subtle grid mapping / lines
        }
      }
    }
  }
}
```

### 1.2. Typography System
* **Global Typography Family:** `Raleway`, sans-serif. Loaded explicitly with cross-browser anti-aliasing.
* **Layout Hierarchy Rules:**
  - **H1 (Hero):** `text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.1]`
  - **H2 (Sections):** `text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary`
  - **H3 (Cards):** `text-xl md:text-2xl font-semibold text-text-primary`
  - **Paragraph Body:** `text-base md:text-lg font-normal leading-relaxed text-text-body`

---

## 2. Spacing, Structural Layout & Grids

### 2.1. Layout Containers & Grid Boundaries
* **Global Maximum Bounding Wrapper:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
* **Vertical Section Rhythm:** Hardcode uniform separation intervals. Use `py-24 md:py-32` across standard section containers.

### 2.2. The Bento Grid Matrix
All dashboard layout mimicry and feature modules must adhere to an asymmetrical grid structure.
* **Layout Mapping Class:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`
* **Responsive Breakpoint Standards:**
  - **Mobile (`< 768px`):** Forces single-column collapse (`grid-cols-1`). No multi-column spans allowed.
  - **Tablet (`768px - 1024px`):** Alternates into `grid-cols-2`.
  - **Desktop (`> 1024px`):** Spans full 3-column setup. Use `lg:col-span-2` on highlight elements to generate layout variation.

---

## 3. Structural Component Blueprint

### 3.1. Floating Glassmorphism Navbar
The header pill layout floats above the scroll stack without overlapping action objects.
* **Container Wrapper:** `fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl`
* **Inner Styling Matrix:** `bg-surface-glass backdrop-blur-md border border-white/40 shadow-[0_4px_30px_rgba(34,50,75,0.03)] rounded-full px-6 py-3.5 flex justify-between items-center`
* **Navigation Links:** `text-text-body font-medium text-sm transition-colors duration-200 hover:text-accent-green`

### 3.2. Action Buttons & Input Fields
* **Primary Conversion Button:**
  - `px-8 py-4 rounded-full bg-accent-green text-text-primary font-bold shadow-lg shadow-accent-green/20 transition-all duration-300 hover:bg-accent-greenStrong hover:scale-105 hover:-translate-y-0.5`
* **Secondary Action Link / Outline:**
  - `px-8 py-4 rounded-full bg-background-main/80 text-text-primary font-semibold border border-accent-slate/30 shadow-sm transition-all duration-300 hover:bg-background-main hover:shadow-md`
* **Form Inputs (High-Conversion Style):**
  - `w-full bg-transparent border-b border-accent-slate/40 px-0 py-3.5 text-text-primary placeholder:text-text-body/50 focus:outline-none focus:border-accent-green transition-colors duration-300`

---

## 4. Ambient Effects & Motion Physics

### 4.1. Fluid Mesh Background Orbs
Inject the living background canvas layer globally at the root index level.

```html
<!-- Fixed Background Stack -->
<div class="fixed inset-0 z-[-1] overflow-hidden bg-background-main pointer-events-none">
  <!-- Dynamic Orb A (Green Accent) -->
  <div class="absolute top-[-15%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-accent-green/12 blur-[130px] animate-fluid-slow"></div>
  <!-- Dynamic Orb B (Slate Accent) -->
  <div class="absolute top-[30%] right-[-15%] w-[40vw] h-[40vw] rounded-full bg-accent-slate/20 blur-[120px] animate-fluid-delayed"></div>
  <!-- Dynamic Orb C (Primary Accent Blur) -->
  <div class="absolute bottom-[-10%] left-[15%] w-[50vw] h-[50vw] rounded-full bg-text-primary/8 blur-[160px] animate-fluid-slow"></div>
</div>
```

### 4.2. GSAP ScrollTrigger Transition Targets
Do not fall back onto cheap CSS entry transitions. Utilize weighted, non-robotic physics curves.
* **Global Custom Curve Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` or GSAP `power3.out`.
* **Scroll Enter Reveal Parameters:**
  - **Initial State:** `opacity: 0`, `translateY(50px)`, `scale(0.97)`
  - **Active State Event:** Triggered at `top 85%` of viewport entrance.
  - **Stagger Pipeline:** Maintain a linear sequence stagger delta of `0.1s` across siblings inside bento cards.

---

## 5. Coding Constraints & AI Anti-Patterns

1. **NO Deep Div Nesting:** Use proper semantic elements (`<section>`, `<nav>`, `<main>`, `<article>`) instead of continuous generic block layering.
2. **NO Arbitrary Tailored Offsets:** Do not write loose classes like `mt-[23px]`. Rely on exact token mappings (`mt-6`, `gap-8`).
3. **Forced Component Decoupling:** Keep atomic components separate. Isolate files such as `FluidBackground.tsx`, `BentoCard.tsx`, and `ConversionForm.tsx`.
4. **Performance Safety Guards:** Force `will-change: transform, opacity` directly onto objects targeted by high-frequency scroll timelines. Do not animate structural layout modifiers (`width`, `padding`, `margin`).
