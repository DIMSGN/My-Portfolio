import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/DIMSGN',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/dimitris-siganos',
      icon: Linkedin
    },
    {
      name: 'Email',
      url: 'mailto:dimitris.siganos@example.com',
      icon: Mail
    }
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="footer-content"
        >
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Code2 size={24} />
            </div>
            <h3 className="footer-name">Dimitris Siganos</h3>
            <p className="footer-role">Full-Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <IconComponent size={20} />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            <p className="copyright-text">
              © {currentYear} Dimitris Siganos. Built with
              <Heart size={14} className="heart-icon" />
              using React & Framer Motion.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;