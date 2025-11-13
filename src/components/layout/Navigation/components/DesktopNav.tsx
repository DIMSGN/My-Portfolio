
import { FC } from 'react';
import { Sparkles } from 'lucide-react';
import { NAV_ITEMS } from '@constants/index';
import styles from '../Navigation.module.css';

interface DesktopNavProps {
  activeSection: string;
  onNavClick: (href: string, id: string) => void;
}

export const DesktopNav: FC<DesktopNavProps> = ({ activeSection, onNavClick }) => {
  return (
    <nav className={styles.desktopNav}>
      {NAV_ITEMS.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            onNavClick(item.href, item.id);
          }}
          className={`${styles.navLink} ${
            activeSection === item.id ? styles.active : ''
          }`}
          aria-current={activeSection === item.id ? 'page' : undefined}
        >
          {item.label}
        </a>
      ))}

      <button
        onClick={() => onNavClick('#contact', 'contact')}
        className={styles.ctaButton}
        aria-label="Navigate to contact section"
      >
        <Sparkles size={18} aria-hidden="true" />
        <span>Let's Talk</span>
      </button>
    </nav>
  );
};
