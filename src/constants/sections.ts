
import { lazy, FC } from 'react';
const About = lazy(() => import('../components/sections/About/About'));
const Skills = lazy(() => import('../components/sections/Skills/Skills'));
const Projects = lazy(() => import('../components/sections/Projects/Projects'));
const Experience = lazy(() => import('../components/sections/Experience/Experience'));
const Contact = lazy(() => import('../components/sections/Contact/Contact'));

export interface SectionConfig {
  id: string;
  label: string;
  Component: FC;
  showDecorations?: boolean;
}

export const SECTIONS: SectionConfig[] = [
  { id: 'about', label: 'About', Component: About },
  { id: 'skills', label: 'Skills', Component: Skills },
  { id: 'projects', label: 'Projects', Component: Projects },
  { id: 'experience', label: 'Experience', Component: Experience },
  { id: 'contact', label: 'Contact', Component: Contact, showDecorations: false },
];
