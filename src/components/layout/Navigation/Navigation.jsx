import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Handle scroll effects and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Skip automatic section detection if user is actively navigating
      if (isNavigating) return;

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavigating]);

  const handleNavClick = (href, id) => {
    console.log('Navigation clicked:', { href, id, isOpen }); // Debug log
    
    // Immediately set active state and navigation flag
    setActiveSection(id);
    setIsNavigating(true);
    setIsOpen(false);
    
    // Add a small delay to ensure mobile menu closes first
    setTimeout(() => {
      const element = document.querySelector(href);
      console.log('Target element found:', element); // Debug log
      
      if (element) {
        // Get actual header height dynamically
        const header = document.querySelector('.advanced-header');
        const headerHeight = header ? header.offsetHeight : 80;
        const additionalOffset = window.innerWidth <= 768 ? 20 : 40; // Extra padding for mobile
        const totalOffset = headerHeight + additionalOffset;
        
        const elementPosition = element.offsetTop - totalOffset;
        
        console.log('Scrolling to:', { 
          elementPosition, 
          headerHeight, 
          totalOffset, 
          windowWidth: window.innerWidth 
        }); // Debug log
        
        window.scrollTo({
          top: Math.max(0, elementPosition), // Prevent negative scroll
          behavior: 'smooth'
        });
        
        // Reset navigation flag after scroll completes
        setTimeout(() => {
          setIsNavigating(false);
        }, 1000); // Smooth scroll typically takes ~500-800ms
      } else {
        console.error('Element not found for href:', href);
        setIsNavigating(false);
      }
    }, isOpen ? 350 : 0); // Delay only if menu is open (mobile)
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`advanced-header ${isScrolled ? 'scrolled' : ''}`}
    >
      <nav className="luxury-nav">
        <div className="nav-container">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => handleNavClick('#home', 'home')}
            className="logo-container"
          >
            <div className="logo-icon">
              <img src="logo.svg" alt="Personal tech logo" width="100%" height="100%" />
            </div>
            <div className="logo-text">Dimitris Siganos</div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                onClick={() => handleNavClick(item.href, item.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* CTA Button */}
            <motion.button
              onClick={() => handleNavClick('#contact', 'contact')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button"
            >
              <Sparkles size={16} />
              Let's Talk
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mobile-menu-button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mobile-menu"
            >
              <div className="mobile-nav-links">
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    onClick={() => handleNavClick(item.href, item.id)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.button
                  onClick={() => handleNavClick('#contact', 'contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mobile-cta-button"
                >
                  <Sparkles size={16} />
                  Let's Talk
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;