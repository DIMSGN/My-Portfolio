import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Calendar, MapPin } from 'lucide-react';
import SectionScrollButton from '../../common/SectionScrollButton/SectionScrollButton';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      title: 'Full Stack Web Development Bootcamp',
      organization: 'AUEB Coding Factory',
      location: 'Athens, Greece',
      period: '2024 - Present',
      status: 'In Progress',
      description: 'Intensive full-stack development program focusing on modern web technologies, software engineering principles, and industry best practices.',
      skills: ['React.js', 'Node.js', 'Database Design', 'RESTful APIs', 'Agile Development'],
      icon: GraduationCap
    },
    {
      type: 'education',
      title: 'The Complete Web Development Bootcamp',
      organization: 'Dr. Angela Yu - Udemy',
      location: 'Online',
      period: '2023 - 2024',
      status: 'Completed',
      description: 'Comprehensive web development course covering full-stack technologies from frontend to backend development.',
      skills: ['HTML5/CSS3', 'JavaScript', 'React.js', 'Node.js', 'MongoDB'],
      icon: GraduationCap
    },
    {
      type: 'experience',
      title: 'Freelance Web Developer',
      organization: 'Self-Employed',
      location: 'Remote',
      period: '2023 - Present',
      status: 'Active',
      description: 'Developing custom web solutions for small businesses and startups, focusing on responsive design and modern web technologies.',
      skills: ['Custom Websites', 'E-commerce', 'SEO', 'Client Management', 'Maintenance'],
      icon: Briefcase
    },
    {
      type: 'certification',
      title: 'JavaScript Algorithms and Data Structures',
      organization: 'freeCodeCamp',
      location: 'Online',
      period: '2023',
      status: 'Certified',
      description: 'Comprehensive certification covering JavaScript fundamentals, algorithms, and data structures.',
      skills: ['ES6+', 'Algorithms', 'Data Structures', 'Problem Solving', 'Functional Programming'],
      icon: Award
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="experience-header"
        >
          <h2 className="experience-title">Experience & Education</h2>
          <p className="experience-subtitle">
            My journey in web development through continuous learning, hands-on experience, 
            and professional development in modern technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}
              >
                {/* Timeline Icon */}
                <div className="timeline-icon">
                  <IconComponent size={20} />
                </div>

                {/* Experience Card */}
                <div className="experience-card">
                  <div className="experience-header-info">
                    <div className="experience-meta">
                      <div className="experience-period">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="experience-location">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <span className={`status-badge status-${exp.status.toLowerCase().replace(' ', '-')}`}>
                        {exp.status}
                      </span>
                    </div>
                    
                    <h3 className="experience-card-title">{exp.title}</h3>
                    <p className="experience-organization">{exp.organization}</p>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <div className="skills-section">
                    <h4 className="experience-skills-title">Key Skills & Technologies:</h4>
                    <div className="skills-list">
                      {exp.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="experience-cta"
        >
          <div className="cta-card">
            <h3 className="cta-title">Ready to Collaborate?</h3>
            <p className="cta-description">
              I'm always excited to work on new projects and learn from experienced developers. 
              Let's build something amazing together!
            </p>
            <a href="#contact" className="cta-button">
              Get In Touch
            </a>
          </div>
        </motion.div>
        
        <SectionScrollButton 
          text="Let's Connect" 
          targetSection="contact" 
        />
      </div>
    </section>
  );
};

export default Experience;