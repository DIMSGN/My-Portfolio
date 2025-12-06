/**
 * NAVIGATION COMPONENT
 * 
 * Main navigation bar with desktop and mobile views
 * 
 * Architecture:
 * - Modular structure with separate components and hooks
 * - Intersection Observer for active section detection
 * - WCAG AAA accessibility compliance
 * - Mobile-first responsive design
 * 
 * @author Dimitris Siganos
 * @version 2.0.0
 */

import { FC } from 'react';
import { Logo } from './components/Logo';
import { DesktopNav } from './components/DesktopNav';
import { HamburgerButton } from './components/HamburgerButton';
import styles from './Navigation.module.css';

interface NavigationProps {
  isMobile: boolean;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  activeSection: string;
  isScrolled: boolean;
  handleNavClick: (href: string, id: string) => void;
}

const Navigation: FC<NavigationProps> = ({ isMobile, isMobileMenuOpen, toggleMobileMenu, activeSection, isScrolled, handleNavClick }) => {
  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <nav className={styles.nav} role="navigation" aria-label="Main navigation">
        <div className={styles.navContainer}>
          <Logo onClick={() => handleNavClick('#home', 'home')} />
          <DesktopNav 
            activeSection={activeSection} 
            onNavClick={handleNavClick} 
          />
          {isMobile && (
            <HamburgerButton 
              isOpen={isMobileMenuOpen} 
              onClick={toggleMobileMenu} 
            />
          )}
        </div>
      </nav>
    </header>
  );
};

Navigation.displayName = 'Navigation';

export default Navigation;
