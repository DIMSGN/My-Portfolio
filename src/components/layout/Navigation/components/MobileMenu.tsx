
import { FC, useEffect, useCallback } from 'react';
import { NAV_ITEMS } from '@constants/index';
import { NAVIGATION_TIMING } from '@config/constants';
import styles from '../Navigation.module.css';

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

  useEffect(() => {
    // When closing, restore focus to hamburger button for accessibility
    if (!isOpen) {
      const btn = document.querySelector('[aria-controls="mobile-menu"]') as HTMLButtonElement | null;
      btn?.focus();
      return;
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains(styles.mobileMenu)) {
        onClose(true);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, onClose]);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent, href: string, id: string) => {
      e.preventDefault();
      e.stopPropagation();
      

      onClose(false);
      

      setTimeout(() => {
        onNavClick(href, id);
      }, NAVIGATION_TIMING.MENU_CLOSE_DELAY);
    },
    [onNavClick, onClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, href: string, id: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        

        onClose(false);
        

        setTimeout(() => {
          onNavClick(href, id);
        }, NAVIGATION_TIMING.NAV_DELAY);
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
      </div>
    </div>
  );
};
