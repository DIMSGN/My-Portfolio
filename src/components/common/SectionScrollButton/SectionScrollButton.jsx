import React from 'react';
import { ChevronDown } from 'lucide-react';

const SectionScrollButton = ({ 
  text = "Continue Exploring", 
  targetSection,
  onClick 
}) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120; // Increased offset to account for header + padding
      const elementPosition = element.offsetTop - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (targetSection) {
      scrollToSection(targetSection);
    }
  };

  return (
    <button className="scroll-button" onClick={handleClick}>
      <span className="button-text">{text}</span>
      <div className="arrow-icon">
        <ChevronDown size={20} />
      </div>
    </button>
  );
};

export default SectionScrollButton;