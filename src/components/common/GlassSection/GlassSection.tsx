import { FC, ReactNode } from 'react';
import FloatingElements from '../FloatingElements/FloatingElements';
import styles from './GlassSection.module.css';

type FloatingVariant = 'default' | 'tech' | 'social' | 'creative';
type FloatingDensity = 'minimal' | 'normal' | 'dense';

interface GlassSectionProps {
  children: ReactNode;
  showDecorations?: boolean;
  floatingVariant?: FloatingVariant;
  floatingDensity?: FloatingDensity;
}

const GlassSection: FC<GlassSectionProps> = ({ 
  children, 
  showDecorations = true, 
  floatingVariant = 'default', 
  floatingDensity = 'minimal' 
}) => {
  return (
    <div className={styles.glassSection}>
      {showDecorations && (
        <FloatingElements variant={floatingVariant} density={floatingDensity} />
      )}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default GlassSection;
