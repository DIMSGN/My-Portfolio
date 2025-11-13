
import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "PropFlow",
    subtitle: "Property & Client Management CRM",
    shortDescription:
      "A CRM I built for managing real estate properties and clients. It handles property listings, appointments, and document uploads. I learned a lot about database relationships and authentication while building this.",
    highlights: [
      "Manages 100+ properties with fast search",
      "Admin and Agent roles with JWT authentication",
      "File uploads for property documents",
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
      "Built this to help me (and others) understand algorithms better through visualization. You can see sorting, searching, and other algorithms work step-by-step. It's actually pretty fun to watch!",
    highlights: [
      "Visualizes 12+ different algorithms",
      "Step controls to pause and analyze each step",
      "Edit the data and see how it affects the algorithm",
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
      "My first real TypeScript project! It manages restaurant inventory, recipes, and orders. Had to figure out database transactions to prevent inventory issues when multiple orders happen at once. Learned a ton about Prisma ORM.",
    highlights: [
      "Handles concurrent orders without inventory conflicts",
      "User authentication and different permission levels",
      "Auto-calculates recipe costs based on current inventory",
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
    subtitle: "This Website!",
    shortDescription:
      "You're looking at it! Built with React 19 and TypeScript. I wanted to create something responsive that works well on all screen sizes. Spent a lot of time getting the mobile view just right.",
    highlights: [
      "Fully responsive across all devices",
      "Custom hooks for navigation and mobile menu",
      "Fast loading with code splitting",
    ],
    technologies: ["React 19", "TypeScript", "Vite", "CSS Modules", "Lucide Icons"],
    demoUrl: "https://dimsgn.github.io/My-Portfolio/",
    codeUrl: "https://github.com/DIMSGN/My-Portfolio",
  },
];
