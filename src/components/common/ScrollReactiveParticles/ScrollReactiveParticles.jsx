import React, { useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollReactiveParticles.css';

// Enhanced Lighting Particle Component
const ScrollReactiveParticle = ({ particle }) => {
  const { scrollY } = useScroll();
  
  // Enhanced movement with more dynamic ranges
  const scrollBasedY = useTransform(
    scrollY,
    [0, 3000],
    [particle.y, particle.y - particle.amplitude * 1.5]
  );
  
  const scrollBasedX = useTransform(
    scrollY,
    [0, 3000],
    [particle.x, particle.x + (particle.speedX * 300)]
  );
  
  // Enhanced opacity with better lighting curves
  const opacity = useTransform(
    scrollY,
    [0, 500, 1500, 2500, 3000],
    [0.3, 0.9, 1, 0.8, 0.4]
  );

  // Dynamic scale for breathing effect
  const scale = useTransform(
    scrollY,
    [0, 1000, 2000, 3000],
    [particle.baseScale, particle.baseScale * 1.3, particle.baseScale * 0.8, particle.baseScale * 1.1]
  );

  // Rotation for dynamic movement
  const rotate = useTransform(
    scrollY,
    [0, 3000],
    [0, particle.rotationRange]
  );

  return (
    <motion.div
      className={`light-particle ${particle.colorClass} ${particle.sizeClass} ${particle.lightingType}`}
      style={{
        x: scrollBasedX,
        y: scrollBasedY,
        opacity,
        scale,
        rotate,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.3, 0.9, 0.6, 1],
        scale: [particle.baseScale * 0.5, particle.baseScale * 1.2, particle.baseScale]
      }}
      transition={{
        duration: particle.pulseSpeed,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  );
};

const ScrollReactiveParticles = () => {
  const [particles, setParticles] = useState([]);

  const particleConfig = useMemo(() => {
    const lightingTypes = [
      { color: 'color-electric-blue', lighting: 'glow-intense', name: 'Electric Blue' },
      { color: 'color-neon-purple', lighting: 'glow-soft', name: 'Neon Purple' },
      { color: 'color-plasma-white', lighting: 'glow-pulse', name: 'Plasma White' },
      { color: 'color-cyber-cyan', lighting: 'glow-shimmer', name: 'Cyber Cyan' },
      { color: 'color-aurora-pink', lighting: 'glow-wave', name: 'Aurora Pink' },
      { color: 'color-stellar-gold', lighting: 'glow-flicker', name: 'Stellar Gold' }
    ];
    return lightingTypes;
  }, []);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      const particleCount = Math.min(window.innerWidth / 120, 12); // Increased count for better lighting effect
      
      for (let i = 0; i < particleCount; i++) {
        const lightingConfig = particleConfig[i % particleConfig.length];
        const size = Math.round(Math.random() * 3 + 3); // Larger sizes for better glow (3-6)
        const baseScale = 0.8 + Math.random() * 0.4; // Random base scale (0.8-1.2)
        
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          colorClass: lightingConfig.color,
          lightingType: lightingConfig.lighting,
          sizeClass: `size-${size}`,
          speedX: (Math.random() - 0.5) * 0.7, // More dynamic movement
          speedY: (Math.random() - 0.5) * 0.5,
          amplitude: Math.random() * 150 + 80, // Increased amplitude
          frequency: Math.random() * 0.03 + 0.015,
          delay: Math.random() * 3,
          baseScale: baseScale,
          rotationRange: (Math.random() - 0.5) * 720, // Full rotation range
          pulseSpeed: 2 + Math.random() * 4, // Varied pulse speeds (2-6s)
        });
      }
      
      setParticles(newParticles);
    };

    generateParticles();
    
    const handleResize = () => {
      generateParticles();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [particleConfig]);

  return (
    <div className="particle-container">
      {particles.map((particle) => (
        <ScrollReactiveParticle 
          key={particle.id} 
          particle={particle} 
        />
      ))}
    </div>
  );
};

export default ScrollReactiveParticles;