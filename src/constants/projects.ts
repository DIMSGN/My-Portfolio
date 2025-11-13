
import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "PropFlow",
    subtitle: "Property & Client Management CRM",
    shortDescription:
      "Full-stack CRM for real estate agencies managing 100+ properties with <200ms response times. Features appointment scheduling, document management, and property listings with role-based access control.",
    highlights: [
      "Handles 100+ concurrent property listings",
      "Role-based access (Admin/Agent) with JWT auth",
      "Document upload & management with cloud storage",
    ],
    technologies: [
      "React",
      "Node.js",
      "MySQL",
      "Express",
      "Material-UI",
      "Sequelize",
    ],
    demoUrl: "https://prop-flow-two.vercel.app/dashboard",
    codeUrl: "https://github.com/DIMSGN/PropFlow",
  },
  {
    id: 2,
    title: "Algorithm Visualizer",
    subtitle: "Interactive Learning Tool",
    shortDescription:
      "Educational platform visualizing 12+ algorithms across sorting, searching, hashing, and recursion with step-by-step execution controls and editable datasets.",
    highlights: [
      "12+ algorithms with animated visualizations",
      "Step-by-step execution with pause/resume",
      "Real-time input editing and complexity analysis",
    ],
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    demoUrl: "https://dimsgn.github.io/Algorithm_Project/",
    codeUrl: "https://github.com/DIMSGN/Algorithm_Project",
  },
  {
    id: 3,
    title: "Restaurant Manager",
    subtitle: "Operations Management System",
    shortDescription:
      "Enterprise-grade TypeScript application with ACID-compliant SERIALIZABLE transactions, inventory tracking with automatic stock deduction, and real-time recipe cost calculation.",
    highlights: [
      "SERIALIZABLE isolation preventing race conditions",
      "JWT authentication with role-based authorization",
      "Automatic inventory management across transactions",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Prisma",
      "MySQL",
      "React",
      "TailwindCSS",
    ],
    demoUrl: null,
    codeUrl: "https://github.com/DIMSGN/restaurant-management-system",
  },
  {
    id: 4,
    title: "Portfolio Site",
    subtitle: "Modern React Portfolio",
    shortDescription:
      "Personal portfolio built with React 19, TypeScript, and Vite. Features custom design token system, Intersection Observer-based navigation, comprehensive responsive breakpoints (1600-360px), and code-split architecture achieving 68KB gzipped bundle size.",
    highlights: [
      "8 responsive breakpoints with mobile-first design",
      "Custom hooks (useNavigation, useMediaQuery, useScrollLock)",
      "CSS Modules + design tokens for maintainability",
    ],
    technologies: ["React 19", "TypeScript", "Vite", "CSS Modules", "Lucide Icons"],
    demoUrl: "https://dimsgn.github.io/My-Portfolio/",
    codeUrl: "https://github.com/DIMSGN/My-Portfolio",
  },
];
