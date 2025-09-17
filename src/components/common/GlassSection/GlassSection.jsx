import React from 'react';

const GlassSection = ({ 
  children, 
  id, 
  className = ''
}) => {
  return (
    <section
      id={id}
      className={`glass-section-wrapper ${className}`}
    >
      <div className="glass-container">
        <div className="content-wrapper">
          {children}
        </div>
      </div>
    </section>
  );
};

export default GlassSection;