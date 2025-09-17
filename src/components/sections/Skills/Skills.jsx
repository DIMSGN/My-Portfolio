import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Settings } from 'lucide-react';
import './Skills.css';
import SectionScrollButton from '../../common/SectionScrollButton/SectionScrollButton';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "JavaScript (ES6+)", level: "Expert" },
        { name: "React.js", level: "Expert" },
        { name: "HTML5 & CSS3", level: "Expert" },
        { name: "Framer Motion", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "Responsive Design", level: "Expert" }
      ]
    },
    {
      title: "Backend Development", 
      icon: Server,
      description: "Creating robust and scalable server-side solutions",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "Java", level: "Advanced" },
        { name: "Spring Boot", level: "Intermediate" },
        { name: "RESTful APIs", level: "Advanced" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      description: "Data management and cloud infrastructure",
      skills: [
        { name: "MySQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Firebase", level: "Advanced" },
        { name: "AWS", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" }
      ]
    },
    {
      title: "Tools & Workflow",
      icon: Settings,
      description: "Development tools and collaboration platforms",
      skills: [
        { name: "Git & GitHub", level: "Expert" },
        { name: "VS Code", level: "Expert" },
        { name: "Webpack/Vite", level: "Advanced" },
        { name: "Jest/Testing", level: "Intermediate" },
        { name: "Agile/Scrum", level: "Advanced" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-subtitle">
            A comprehensive toolkit of modern technologies and frameworks, 
            constantly evolving with the latest industry standards and best practices.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-category"
              >
                <div className="category-header">
                  <div className="category-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="category-info">
                    <h3 className="category-title">{category.title}</h3>
                    <p className="category-description">{category.description}</p>
                  </div>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level level-${skill.level.toLowerCase()}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <SectionScrollButton 
          text="View My Projects" 
          targetSection="projects" 
        />
      </div>
    </section>
  );
};

export default Skills;