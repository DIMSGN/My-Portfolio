
import { Github, Linkedin, Mail, LucideIcon } from 'lucide-react';
import { SocialLinks, PersonalInfo, NavItem } from '../types';

export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com/DIMSGN',
  linkedin: 'https://linkedin.com/in/dimitris-siganos-20ab3316a',
  email: 'siganos.dimitrios@gmail.com',
};

export interface SocialLinkConfig {
  name: string;
  url: string;
  icon: LucideIcon;
  ariaLabel: string;
}

export const SOCIAL_LINKS_CONFIG: SocialLinkConfig[] = [
  {
    name: 'GitHub',
    url: SOCIAL_LINKS.github,
    icon: Github,
    ariaLabel: 'Visit my GitHub profile',
  },
  {
    name: 'LinkedIn',
    url: SOCIAL_LINKS.linkedin,
    icon: Linkedin,
    ariaLabel: 'Connect with me on LinkedIn',
  },
  {
    name: 'Email',
    url: `mailto:${SOCIAL_LINKS.email}`,
    icon: Mail,
    ariaLabel: 'Send me an email',
  },
];

export const RESUME_FILES = {
  greek: {
    path: "/My-Portfolio/CV-SiganosDimitris-2025-GR.pdf",
    downloadName: "Dimitris_Siganos_Resume_GR.pdf",
    label: "🇬🇷 Greek Version"
  },
  english: {
    path: "/My-Portfolio/CV-SiganosDimitris-2025-EN.pdf",
    downloadName: "Dimitris_Siganos_Resume_EN.pdf",
    label: "🇬🇧 English Version"
  }
} as const;

export const PERSONAL_INFO: PersonalInfo = {
  name: "Dimitris Siganos",
  role: "Entry-Level Full Stack Developer",
  location: "Athens, Greece",
  email: "siganos.dimitrios@gmail.com",
  availability: "Immediately available",
};

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const TECH_STACK: string[] = [
  "React",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "HTML/CSS",
  "MySQL",
  "Java",
  "Spring Boot",
  "MongoDB",
  "Git",
];

export { PROJECTS } from './projects';
export { EXPERIENCES } from './experience';
export { SKILL_CATEGORIES } from './skills';
export { CORE_VALUES } from './about';
export { BREAKPOINTS, MEDIA_QUERIES } from './breakpoints';
