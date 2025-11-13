
import { Code, Server, Database, Settings } from 'lucide-react';
import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: Code,
    description: 'Building user interfaces and making things look good across different devices',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Experienced' },
      { name: 'React.js', level: 'Experienced' },
      { name: 'TypeScript', level: 'Experienced' },
      { name: 'HTML5 & CSS3', level: 'Experienced' },
      { name: 'Responsive Design', level: 'Experienced' },
      { name: 'Angular', level: 'Learning' },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    description: 'Creating APIs and handling server-side logic',
    skills: [
      { name: 'Node.js', level: 'Experienced' },
      { name: 'Express.js', level: 'Experienced' },
      { name: 'RESTful APIs', level: 'Experienced' },
      { name: 'Java & Spring Boot', level: 'Familiar' },
      { name: 'C# & .NET Core', level: 'Familiar' },
    ],
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    description: 'Working with databases to store and manage data',
    skills: [
      { name: 'MySQL', level: 'Experienced' },
      { name: 'PostgreSQL', level: 'Familiar' },
      { name: 'Prisma ORM', level: 'Familiar' },
      { name: 'MongoDB', level: 'Familiar' },
      { name: 'Firebase', level: 'Familiar' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: Settings,
    description: 'Tools I use daily for development and collaboration',
    skills: [
      { name: 'Git & GitHub', level: 'Experienced' },
      { name: 'VS Code', level: 'Experienced' },
      { name: 'Vite & Webpack', level: 'Experienced' },
      { name: 'Docker', level: 'Familiar' },
    ],
  },
];
