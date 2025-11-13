
import { GraduationCap, BookOpen } from 'lucide-react';
import { Experience } from '../types';

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    type: "education",
    title: "Coding Factory Full-Stack Developer Bootcamp",
    organization: "Athens University of Economics and Business (AUEB) - Coding Factory",
    location: "Athens, Greece",
    period: "March 2025 - Present (Pending Graduation)",
    current: true,
    description:
      "Intensive bootcamp focused on full-stack development, covering both frontend and backend technologies, database design, and modern software engineering practices.",
    achievements: [
      "Completed 500+ hours of intensive coding and project work",
      "Built 4 full-stack applications with modern tech stacks",
      "Collaborated in Agile teams on real-world projects"
    ],
    skills: [
      "Java",
      "C# .NET Core",
      "Python",
      "React.js",
      "Angular",
      "Node.js",
      "RESTful APIs",
      "Spring Boot",
      "ASP.NET Core",
      "JPA/Hibernate",
      "SQL/NoSQL Databases",
      "Android Development",
      "Git/GitHub",
      "UX/UI Design",
      "Agile/Scrum",
      "Testing (JUnit, Selenium)",
    ],
    icon: GraduationCap,
  },
  {
    id: 2,
    type: "education",
    title: "The Complete Full-Stack Web Development Bootcamp",
    organization: "Udemy (Dr. Angela Yu)",
    location: "Online",
    period: "2023 - 2024",
    current: false,
    description:
      "Comprehensive full-stack bootcamp covering HTML, CSS, JavaScript, Node.js, React, MongoDB, and modern web development practices.",
    achievements: [
      "Completed 60+ hours of video content and hands-on projects",
      "Built multiple web applications from scratch",
      "Learned fundamental web development concepts and best practices"
    ],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js Basics",
      "Node.js",
      "Express",
      "MongoDB",
      "RESTful APIs",
      "Git/GitHub",
    ],
    icon: BookOpen,
  },
];
