import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollingGlassContainers.css';

const ScrollingGlassContainers = () => {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight);
      setDocumentHeight(document.documentElement.scrollHeight);
    };
    
    updateDimensions();
    
    const handleResize = () => updateDimensions();
    const handleLoad = () => updateDimensions();
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleLoad);
    
    // Update dimensions after content changes
    const observer = new MutationObserver(updateDimensions);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleLoad);
      observer.disconnect();
    };
  }, []);

  // Create complex glass containers with scroll animations
  const glassContainers = [
    {
      id: 1,
      type: 'morphing-sphere',
      initialX: '10%',
      initialY: '20%',
      size: 'extra-large',
      scrollDirection: 1,
      rotationSpeed: 0.5,
      shimmerDelay: 0
    },
    {
      id: 2,
      type: 'floating-cube',
      initialX: '18%',
      initialY: '45%',
      size: 'medium',
      scrollDirection: -1,
      rotationSpeed: -0.7,
      shimmerDelay: 2
    },
    {
      id: 3,
      type: 'morphing-sphere',
      initialX: '25%',
      initialY: '70%',
      size: 'medium',
      scrollDirection: 1,
      rotationSpeed: 0.8,
      shimmerDelay: 4
    },
    {
      id: 4,
      type: 'geometric-prism',
      initialX: '75%',
      initialY: '60%',
      size: 'large',
      scrollDirection: -1,
      rotationSpeed: -0.6,
      shimmerDelay: 1
    },
    {
      id: 5,
      type: 'floating-cube',
      initialX: '5%',
      initialY: '80%',
      size: 'small',
      scrollDirection: 1,
      rotationSpeed: 1.2,
      shimmerDelay: 3
    },
    {
      id: 6,
      type: 'morphing-sphere',
      initialX: '90%',
      initialY: '85%',
      size: 'medium',
      scrollDirection: -1,
      rotationSpeed: -0.4,
      shimmerDelay: 5
    }
  ];

  return (
    <div className="advanced-glass-background">
      {glassContainers.map((container) => {
        // Scroll-based transformations using full document height
        const maxScroll = Math.max(documentHeight - windowHeight, windowHeight * 4);
        
        const yTransform = useTransform(
          scrollY,
          [0, maxScroll * 0.3, maxScroll * 0.6, maxScroll],
          [0, container.scrollDirection * 150, container.scrollDirection * 300, container.scrollDirection * 500]
        );
        
        const rotateTransform = useTransform(
          scrollY,
          [0, maxScroll],
          [0, container.scrollDirection * 720 * container.rotationSpeed]
        );
        
        const scaleTransform = useTransform(
          scrollY,
          [0, maxScroll * 0.2, maxScroll * 0.5, maxScroll * 0.8, maxScroll],
          [1, 1.3, 0.9, 1.2, 0.8]
        );

        const opacityTransform = useTransform(
          scrollY,
          [0, maxScroll * 0.1, maxScroll * 0.4, maxScroll * 0.7, maxScroll],
          [0.6, 1, 0.8, 0.9, 0.5]
        );

        return (
          <motion.div
            key={container.id}
            className={`glass-container-advanced glass-${container.type} glass-size-${container.size}`}
            style={{
              left: container.initialX,
              top: container.initialY,
              y: yTransform,
              rotate: rotateTransform,
              scale: scaleTransform,
              opacity: opacityTransform,
              '--shimmer-delay': `${container.shimmerDelay}s`
            }}
          >
            {/* Inner glow effect */}
            <div className="glass-inner-glow"></div>
            
            {/* Shimmer overlay */}
            <div className="glass-shimmer-overlay"></div>
            
            {/* Border glow */}
            <div className="glass-border-glow"></div>
          </motion.div>
        );
      })}
      
      {/* Additional particle effects */}
      <div className="particle-field">
        {Array.from({ length: 20 }).map((_, i) => {
          const maxScroll = Math.max(documentHeight - windowHeight, windowHeight * 4);
          
          const particleYTransform = useTransform(
            scrollY,
            [0, maxScroll],
            [0, (i % 2 === 0 ? -1 : 1) * 300]
          );
          
          const particleOpacity = useTransform(
            scrollY,
            [0, maxScroll * 0.2, maxScroll * 0.5, maxScroll * 0.8, maxScroll],
            [0, 1, 0.8, 0.6, 0.3]
          );

          return (
            <motion.div
              key={`particle-${i}`}
              className="floating-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                y: particleYTransform,
                opacity: particleOpacity,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScrollingGlassContainers;