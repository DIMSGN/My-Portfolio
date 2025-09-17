import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Star, MapPin, Award, Users, Coffee } from 'lucide-react';
import './About.css';
import SectionScrollButton from '../../common/SectionScrollButton/SectionScrollButton';

const About = () => {
  const values = [
    {
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code that stands the test of time.',
      icon: Code2
    },
    {
      title: 'User-Centric',
      description: 'Designing with the user in mind, creating intuitive and accessible experiences.',
      icon: Users
    },
    {
      title: 'Continuous Learning',
      description: 'Staying current with emerging technologies and best practices in development.',
      icon: Award
    }
  ];

  const technologies = ['React', 'Node.js', 'JavaScript', 'HTML5/CSS3', 'MySQL', 'Git'];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="about-header"
        >
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">
            Passionate Full Stack Developer with a love for creating innovative digital solutions.
            I combine technical expertise with creative problem-solving to build exceptional web experiences.
          </p>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="about-content"
        >
          <div className="personal-card">
            <div className="avatar-section">
              <div className="avatar">
                <span>DS</span>
              </div>
              <div className="location">
                <MapPin size={16} />
                <span>Athens, Greece</span>
              </div>
            </div>
            
            <div className="personal-info">
              <h3 className="personal-name">Dimitris Siganos</h3>
              <p className="personal-description">
                Currently pursuing Full Stack Web Development at AUEB's Coding Factory. 
                I'm passionate about modern web technologies and creating user-centered solutions 
                that make a real impact. Always eager to learn, collaborate, and push the boundaries 
                of what's possible with code.
              </p>
              
              <div className="tech-stack">
                <h4 className="tech-title">Current Tech Stack:</h4>
                <div className="tech-tags">
                  {technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="values-section"
        >
          <h3 className="values-title">My Core Values</h3>
          <div className="values-grid">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="value-card"
                >
                  <div className="value-icon">
                    <IconComponent size={24} />
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
        <SectionScrollButton 
          text="Explore My Skills" 
          targetSection="skills" 
        />
      </div>
    </section>
  );
};

export default About;