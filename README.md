# Dimitris Siganos - Portfolio

![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646cff?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, responsive portfolio website showcasing full-stack development projects and skills. Built with React 19, TypeScript, and Vite, featuring accessibility-first design, lazy loading, and glassmorphism UI.

## 🚀 Live Demo

**[View Live Portfolio](https://dimsgn.github.io/My-Portfolio/)**

## ✨ Features

- **Modern React Architecture**: Functional components with hooks, lazy loading, and Suspense boundaries
- **TypeScript Strict Mode**: Full type safety with zero `any` types
- **Responsive Design**: Mobile-first approach with smooth scroll-snap navigation
- **Accessibility (WCAG AAA)**: Semantic HTML, ARIA labels, keyboard navigation, screen reader support
- **Performance Optimized**: Code splitting, lazy loading, optimized bundle size (68KB gzipped)
- **Design System**: Comprehensive CSS design tokens for colors, spacing, typography, and animations
- **Error Boundaries**: Graceful error handling with user-friendly fallback UI
- **Glass Morphism UI**: Modern glassmorphism design with floating elements and smooth animations

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Latest React with modern hooks and patterns
- **TypeScript 5.9.3** - Strict type checking enabled
- **Vite 7.1.2** - Fast build tool and development server
- **CSS Modules** - Scoped component styling
- **Lucide React** - Beautiful icon system

### Development Tools
- **ESLint** - Code quality and consistency
- **React Error Boundary** - Production-grade error handling
- **Path Aliases** - Clean imports with `@` prefixes

### Architecture Highlights
- Custom hooks for state management (`useNavigation`, `useMediaQuery`, `useScrollLock`)
- Intersection Observer for scroll-based active section detection
- Centralized constants and configuration
- Feature-based modular folder structure

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/DIMSGN/My-Portfolio.git
cd My-Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:3000/My-Portfolio/`

## 🚀 Build & Deployment

### Build for Production
```bash
npm run build
```

Build output will be in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

### Deploy to GitHub Pages
This project is configured for GitHub Pages deployment. Push to the `main` branch to trigger automatic deployment via GitHub Actions (if configured), or manually deploy the `dist/` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   │   ├── ErrorBoundary/
│   │   ├── FloatingElements/
│   │   ├── GlassSection/
│   │   └── SkeletonLoader/
│   ├── layout/          # Layout components
│   │   ├── Footer/
│   │   └── Navigation/
│   │       ├── components/
│   │       ├── hooks/
│   │       └── utils/
│   └── sections/        # Page sections
│       ├── About/
│       ├── Contact/
│       ├── Experience/
│       ├── Hero/
│       ├── Projects/
│       └── Skills/
├── config/              # Application configuration
├── constants/           # Static data and constants
├── hooks/               # Custom React hooks
├── styles/              # Global styles and design tokens
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── App.tsx              # Root component
└── main.tsx             # Application entry point
```

## 🎨 Design System

The project uses a comprehensive design token system defined in `design-tokens.css`:

- **Colors**: Brand colors, semantic colors, glass effects
- **Typography**: Fluid type scale with `clamp()`
- **Spacing**: Consistent spacing rhythm (4px base)
- **Shadows**: Depth hierarchy with layered shadows
- **Breakpoints**: Mobile-first responsive (480px, 768px, 1024px, 1440px, 1920px)
- **Animations**: Smooth transitions and micro-interactions

## 🔑 Key Components

### Custom Hooks
- `useNavigation` - Scroll-based navigation with Intersection Observer
- `useMediaQuery` - Responsive breakpoint detection
- `useScrollLock` - Body scroll prevention for modals
- `useEscapeKey` - ESC key handler for dismissible UI
- `useMobileMenu` - Mobile menu state management

### Lazy Loaded Sections
All sections (About, Skills, Projects, Experience, Contact) are lazy loaded with Suspense boundaries for optimal performance.

### Error Handling
Production-ready error boundaries with development/production mode distinction and user-friendly fallback UI.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📧 Contact

**Dimitris Siganos**
- Email: siganos.dimitrios@gmail.com
- GitHub: [@DIMSGN](https://github.com/DIMSGN)
- LinkedIn: [Dimitris Siganos](https://linkedin.com/in/dimitris-siganos-20ab3316a)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)
- Hosted on [GitHub Pages](https://pages.github.com/)

---

**Built with ❤️ by Dimitris Siganos**
# My-Portfolio
