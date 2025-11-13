import { FC } from 'react';
import { ICON_SETS, DENSITY_COUNTS, getIconSize } from '@config/floatingAnimations';
import styles from './FloatingElements.module.css';

type FloatingVariant = 'default' | 'tech' | 'social' | 'creative';
type FloatingDensity = 'minimal' | 'normal' | 'dense';

interface FloatingElementsProps {
  variant?: FloatingVariant;
  density?: FloatingDensity;
}

const FloatingElements: FC<FloatingElementsProps> = ({ variant = 'default', density = 'normal' }) => {

  const icons = ICON_SETS[variant] ?? ICON_SETS.default;
  if (!icons) return null;
  

  const elementCount = DENSITY_COUNTS[density] ?? DENSITY_COUNTS.normal ?? 6;
  const elements = Array.from({ length: elementCount }, (_, index) => {
    const IconComponent = icons[index % icons.length];
    const iconSize = getIconSize(index);
    const elementClass = `floatingElement${index + 1}`;
    
    return {
      id: `${variant}-${density}-${index}`,
      IconComponent,
      iconSize,
      elementClass
    };
  });

  return (
    <div className={`${styles.floatingElements} ${styles[variant]} ${styles[density]}`}>
      {elements.map(({ id, IconComponent, iconSize, elementClass }) => {
        if (!IconComponent) return null;
        
        return (
          <div 
            key={id}
            className={`${styles.floatingElement} ${styles[elementClass]}`}
          >
            <IconComponent size={iconSize} />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingElements;
