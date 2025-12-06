/**
 * Mobile Menu Component
 */

import { FC, useEffect, useCallback } from 'react';
import { Sparkles } from 'lucide-react';
import { NAV_ITEMS } from '@constants/index';
import styles from '../Navigation.module.css';

const MENU_CLOSE_DELAY = 300;
const NAV_DELAY = 100;

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onNavClick: (href: string, id: string) => void;
  onClose: (restoreScroll?: boolean) => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({
  isOpen,
  activeSection,
  onNavClick,
  onClose,
}) => {
  // Click outside to close
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains(styles.mobileMenu)) {
        onClose(true); // Restore scroll when clicking outside
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, onClose]);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent, href: string, id: string) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Close menu WITHOUT restoring scroll
      onClose(false);
      
      // Wait for menu close animation and body unlock
      setTimeout(() => {
        onNavClick(href, id);
      }, MENU_CLOSE_DELAY);
    },
    [onNavClick, onClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, href: string, id: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        
        // Close menu WITHOUT restoring scroll
        onClose(false);
        
        // Then navigate after a small delay to allow body unlock
        setTimeout(() => {
          onNavClick(href, id);
        }, NAV_DELAY);
      }
    },
    [onNavClick, onClose]
  );

  return (
    <div
      id="mobile-menu"
      className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div 
        className={styles.mobileMenuContent} 
        onClick={(e) => e.stopPropagation()}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => handleLinkClick(e, item.href, item.id)}
            onKeyDown={(e) => handleKeyDown(e, item.href, item.id)}
            className={`${styles.mobileNavLink} ${
              activeSection === item.id ? styles.active : ''
            }`}
            tabIndex={isOpen ? 0 : -1}
            aria-current={activeSection === item.id ? 'page' : undefined}
          >
            {item.label}
          </a>
        ))}

        <button
          onClick={(e) => {
            e.stopPropagation();
            
            // Close menu WITHOUT restoring scroll
            onClose(false);
            
            // Then navigate after a small delay to allow body unlock
            setTimeout(() => {
              onNavClick('#contact', 'contact');
            }, NAV_DELAY);
          }}
          className={styles.mobileCtaButton}
          aria-label="Navigate to contact section"
          tabIndex={isOpen ? 0 : -1}
        >
          <Sparkles size={18} aria-hidden="true" />
          <span>Let's Talk</span>
        </button>
      </div>
    </div>
  );
};
