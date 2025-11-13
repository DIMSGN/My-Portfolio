
import { LucideIcon } from 'lucide-react';

export interface SocialLinkConfig {
  name: string;
  url: string;
  icon: LucideIcon;
  ariaLabel: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: Skill[];
}

export interface CoreValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  shortDescription: string;
  highlights: string[];
  technologies: string[];
  demoUrl: string | null;
  codeUrl: string | null;
}

export interface Experience {
  id: number;
  type: 'education' | 'work';
  title: string;
  organization: string;
  location: string;
  period: string;
  current: boolean;
  description: string;
  achievements: string[];
  skills: string[];
  icon?: React.ComponentType<{ size?: number }>;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Section {
  id: string;
  label: string;
  Component: React.FC;
  showDecorations?: boolean;
}

export interface Slide {
  id: string;
  label: string;
  Component: React.ComponentType;
}

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email?: string;
  phone?: string;
  availability?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface AnimationVariant {
  initial?: object;
  animate?: object;
  whileInView?: object;
  transition?: object;
  viewport?: object;
}

export interface ScrollConfig {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
  offset?: number;
}
