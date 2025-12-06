# Dimitris Siganos – Portfolio

> React + TypeScript portfolio showcasing full‑stack skills, performance optimization discipline, and clean component architecture.

[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-4078c0?logo=github)](https://dimsgn.github.io/My-Portfolio/) [![React](https://img.shields.io/badge/React-19-61dafb?logo=react)](#tech-stack) [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript)](#tech-stack) [![Build Tool](https://img.shields.io/badge/Vite-7.1-646cff?logo=vite)](#tech-stack)

## Overview
A fast, accessible, mobile‑first single page application built with React 19, Vite, and TypeScript strict mode. Designed to highlight projects, experience, and core engineering philosophy with attention to performance (reduced bundle size, optimized animations, compositing) and UX polish.

## Live Demo
- Production: https://dimsgn.github.io/My-Portfolio/
- Branch: `main` (auto‑deployed via GitHub Actions)

## Sections
| Section | Purpose |
|---------|---------|
| Hero | Identity, availability badge, quick intro |
| About | Background, values, location |
| Skills | Categorized technical competencies with responsive grid |
| Experience | Timeline of roles / work history |
| Projects | Selected portfolio work with links |
| Contact | Direct call‑to‑action & social links |

## Key Features
- Reactive navigation highlighting via IntersectionObserver
- Mobile menu with scroll locking (requestAnimationFrame deferred writes)
- Strict TypeScript (no implicit any, improved maintainability)
- Error boundaries for resilience (`react-error-boundary`)
- Design tokens + CSS modules for scoped styling
- Responsive layout with fluid typography (`clamp()` usage)
- Animated availability badge (GPU‑safe transforms)
- Glassmorphism aesthetic with performance‑aware effects

## Tech Stack
- Framework: React 19 / JSX / Hooks
- Language: TypeScript 5.9 (strict)
- Bundler: Vite 7 (esbuild + manual chunk splitting)
- Icons: `lucide-react` (code‑split vendor chunk)
- Styles: CSS Modules + design tokens + utility layers
- Linting: ESLint (TypeScript + a11y + hooks rules)

## Performance Optimizations
| Optimization | Impact |
|--------------|--------|
| Manual chunk splitting (`react-vendor`, `icons`) | Smaller initial JS payload |
| Removed unused CSS & comments | Reduced parsing + bundle size |
| GPU‑composited animations (`translate3d`, `will-change`) | Lower main thread animation cost |
| Replaced expensive `box-shadow` animation with opacity | Reduced paint complexity |
| Deferred scroll lock writes via rAF | Improved INP responsiveness |
| Eliminated `transition: all` in hotspots | More predictable rendering |
| Reduced animated element density | Lower style & layout cost |

## Accessibility
- Semantic headings & landmark structure
- ARIA labels where appropriate
- High‑contrast text gradients and legible sizes
- Focus on avoiding layout shift, predictable motion

## Project Structure (Excerpt)
```
src/
  components/
    layout/Navigation/...
    sections/{Hero,About,Skills,Experience,Projects,Contact}/
    common/{GlassSection,FloatingElements,SkeletonLoader,ErrorBoundary}/
  hooks/{useBreakpoint,useScrollLock,useEscapeKey,useMobileMenu}
  config/{constants,floatingAnimations}
  styles/{design-tokens,variables,components,utilities}
  constants/{sections,skills,projects,experience}
```

## Getting Started
```bash
# Clone
git clone https://github.com/DIMSGN/My-Portfolio.git
cd My-Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev

# Lint
npm run lint

# Build production
npm run build

# Preview build locally
npm run preview
```

## Scripts
| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build (Vite) |
| `npm run preview` | Preview built site locally |
| `npm run lint` | Run ESLint across codebase |

## Deployment
- Automated via GitHub Actions to GitHub Pages (`homepage` field set)
- SPA redirect handling included in `index.html`

## Contributing
This portfolio reflects personal work; feature suggestions via Issues are welcome, but large PRs should be discussed first.

## Roadmap / Potential Enhancements
- Add unit tests (Vitest + React Testing Library)
- Image optimization (next‑gen formats, lazy placeholders)
- Service worker for offline caching
- More granular code splitting per section
- Lighthouse CI integration in workflow

## License
No explicit open source license at present. All rights reserved. Contact for reuse permissions.

---
Feel free to explore the code and reach out for collaboration or opportunities.
