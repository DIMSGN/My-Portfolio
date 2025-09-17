import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, Github, Linkedin, Send, Clock } from 'lucide-react';
import './Contact.css';
import SectionScrollButton from '../../common/SectionScrollButton/SectionScrollButton';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'Drop me a line anytime',
      value: 'siganos.dimitrios@gmail.com',
      href: 'mailto:siganos.dimitrios@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      subtitle: 'Available for remote work',
      value: 'Athens, Greece',
      href: null
    },
    {
      icon: Calendar,
      title: 'Schedule a Call',
      subtitle: 'Let\'s discuss your project',
      value: 'Book a meeting',
      href: 'mailto:siganos.dimitrios@gmail.com?subject=Schedule%20a%20Call'
    }
  ];

  const services = [
    'Full-stack web development',
    'Modern, responsive design',
    'Performance optimization',
    'Ongoing support & maintenance'
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/DIMSGN' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/dimitris-siganos-20ab3316a' }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? I'm always excited to collaborate on 
            innovative projects and discuss new opportunities.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="contact-cards">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="contact-card"
              >
                {info.href ? (
                  <a href={info.href} className="contact-card-link">
                    <div className="contact-icon">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="contact-card-title">{info.title}</h3>
                    <p className="contact-card-subtitle">{info.subtitle}</p>
                    <p className="contact-card-value">{info.value}</p>
                  </a>
                ) : (
                  <>
                    <div className="contact-icon">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="contact-card-title">{info.title}</h3>
                    <p className="contact-card-subtitle">{info.subtitle}</p>
                    <p className="contact-card-value">{info.value}</p>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="contact-cta"
        >
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-description">
              Whether you're looking for a full-time developer, need help with a specific project, 
              or just want to discuss ideas, I'm here to help. Let's create something amazing together.
            </p>
            
            <div className="services-list">
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <div className="service-dot"></div>
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <div className="cta-buttons">
              <a href="mailto:siganos.dimitrios@gmail.com" className="btn-primary">
                <Send size={18} />
                Send Message
              </a>
              <a href="mailto:siganos.dimitrios@gmail.com?subject=Schedule%20a%20Call" className="btn-secondary">
                <Calendar size={18} />
                Schedule Call
              </a>
            </div>
          </div>

          <div className="contact-info">
            {/* Social Links */}
            <div className="social-section">
              <h4 className="social-title">Connect with me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Response Time */}
            <div className="response-card">
              <div className="response-icon">
                <Clock size={20} />
              </div>
              <div className="response-info">
                <h4 className="response-title">Response Time</h4>
                <p className="response-text">
                  I typically respond within <span className="highlight">24 hours</span>
                </p>
                <p className="response-note">
                  For urgent matters, mention "Urgent" in the subject line
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <SectionScrollButton 
          text="Back to Top" 
          targetSection="home" 
        />
      </div>
    </section>
  );
};

export default Contact;