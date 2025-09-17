// Hero.jsx - Modern hero section with glass morphism design
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Download, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  // Navigation helper
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Resume download handler
  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Dimitris_Siganos_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Configuration data
  const skills = ['React', 'Node.js', 'TypeScript', 'Python', 'UI/UX Design', 'AWS'];
  
  const socialLinks = [
    { href: 'https://github.com/DIMSGN', icon: Github, label: 'GitHub', color: '#333' },
    { href: 'https://linkedin.com/in/dimitris-siganos-20ab3316a', icon: Linkedin, label: 'LinkedIn', color: '#0077b5' },
    { href: 'mailto:siganos.dimitrios@gmail.com', icon: Mail, label: 'Email', color: '#ea4335' }
  ];

  return (
    <section id="home" className="hero-section">
      {/* Background gradients */}
      <div className="hero-background">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-gradient-3"></div>
      </div>

      {/* Floating animated elements */}
      <div className="floating-elements">
        <motion.div 
          className="floating-element floating-element-1"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Github size={24} />
        </motion.div>
        
        <motion.div 
          className="floating-element floating-element-2"
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <ExternalLink size={20} />
        </motion.div>
        
        <motion.div 
          className="floating-element floating-element-3"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, -180, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Mail size={22} />
        </motion.div>

        <motion.div 
          className="floating-element floating-element-4"
          animate={{ 
            y: [0, 10, 0],
            x: [0, -15, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <Sparkles size={18} />
        </motion.div>

        <motion.div 
          className="floating-element floating-element-5"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 180, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <Download size={20} />
        </motion.div>

        <motion.div 
          className="floating-element floating-element-6"
          animate={{ 
            y: [0, 20, 0],
            x: [0, 8, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <Linkedin size={22} />
        </motion.div>
      </div>

      {/* Main content container */}
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="hero-greeting"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="greeting-text">
              <Sparkles size={16} />
              Welcome to my digital space
            </span>
          </motion.div>

          <motion.div 
            className="status-indicator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="status-dot"></div>
            <span className="status-text">Available for work</span>
          </motion.div>

          <motion.div 
            className="hero-glass-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="hero-main">
              <motion.div 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <span className="title-name">Dimitris Siganos</span>
                <span className="title-role">Full Stack Developer</span>
              </motion.div>

              <motion.div 
                className="hero-skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                Building digital experiences with modern web technologies. Passionate about creating elegant, 
                functional, and user-friendly applications that make a difference.
              </motion.p>

              <motion.div 
                className="hero-cta"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <button
                  onClick={() => scrollToSection('projects')}
                  className="cta-primary"
                >
                  <span>View My Work</span>
                  <ExternalLink size={18} className="cta-icon" />
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="cta-secondary"
                >
                  <span>Get In Touch</span>
                  <Mail size={18} className="cta-icon" />
                </button>

                <button
                  onClick={handleDownloadResume}
                  className="cta-download"
                >
                  <span>Download Resume</span>
                  <Download size={18} className="cta-icon" />
                </button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-social"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <p className="social-label">Let's Connect</p>
            <div className="social-links">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="social-link"
                    target={link.href.includes('mailto') ? undefined : '_blank'}
                    rel={link.href.includes('mailto') ? undefined : 'noopener noreferrer'}
                    style={{ '--social-color': link.color }}
                    aria-label={link.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button 
        className="scroll-indicator"
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div className="scroll-content">
          <span className="scroll-text">Scroll Down</span>
          <motion.div 
            className="scroll-arrow"
            animate={{ 
              y: [0, 2, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;