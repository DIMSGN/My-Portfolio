
import { Code, Server, Database, Settings } from 'lucide-react';
import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: Code,
    description: 'Building modern, responsive user interfaces with component-driven architecture',
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
    description: 'Developing RESTful APIs and server-side applications',
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
    description: 'Working with SQL and NoSQL databases for data persistence',
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
    description: 'Development tools and version control for efficient collaboration',
    skills: [
      { name: 'Git & GitHub', level: 'Experienced' },
      { name: 'VS Code', level: 'Experienced' },
      { name: 'Vite & Webpack', level: 'Experienced' },
      { name: 'Docker', level: 'Familiar' },
    ],
  },
];
