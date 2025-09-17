import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionScrollButton from '../../common/SectionScrollButton/SectionScrollButton';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce platform with user authentication, payment integration, and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/400/240",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App", 
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "TypeScript", "Firebase"],
      image: "/api/placeholder/400/240",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Weather Analytics API",
      description: "RESTful API for weather data analysis and forecasting with comprehensive documentation.",
      technologies: ["Node.js", "Express", "PostgreSQL"],
      image: "/api/placeholder/400/240",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design and optimized performance.",
      technologies: ["React", "CSS", "Framer Motion"],
      image: "/api/placeholder/400/240",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="projects-header"
        >
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">
            A collection of projects showcasing my skills in web development and design.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demoUrl} className="project-link">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.codeUrl} className="project-link">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <SectionScrollButton 
          text="View My Experience" 
          targetSection="experience" 
        />
      </div>
    </section>
  );
};

export default Projects;