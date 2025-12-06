/**
 * APP COMPONENT
 * Root component with responsive layout
 * 
 * Architecture:
 * - Unified vertical scroll layout (desktop + mobile)
 * - Mobile: Scroll snap for smooth section transitions
 * - Lazy loading for optimal performance
 * - Error Boundary for error handling
 * 
 * Performance Features:
 * - Native scroll behavior (no complex touch handlers)
 * - CSS scroll-snap for smooth navigation
 * - Hardware-accelerated transforms
 * - Optimized re-renders with useMemo
 */

import { lazy, Suspense, useMemo, FC, Fragment } from 'react';
import './App.css';
import { Navigation, Footer, Hero, GlassSection } from './components';
import FloatingElements from './components/common/FloatingElements/FloatingElements';
import StickyContact from './components/common/StickyContact/StickyContact';
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary';
import { useMediaQuery } from '@hooks/useBreakpoint';
import { MEDIA_QUERIES } from '@constants/breakpoints';
import { useNavigation } from './components/layout/Navigation/hooks/useNavigation';
import { useMobileMenu } from './components/layout/Navigation/hooks/useMobileMenu';
import { MobileMenu } from './components/layout/Navigation/components/MobileMenu';

// Lazy load sections for performance
const About = lazy(() => import('./components/sections/About/About'));
const Skills = lazy(() => import('./components/sections/Skills/Skills')); 
const Projects = lazy(() => import('./components/sections/Projects/Projects'));
const Experience = lazy(() => import('./components/sections/Experience/Experience'));
const Contact = lazy(() => import('./components/sections/Contact/Contact'));

interface Section {
  id: string;
  label: string;
  Component: FC;
  showDecorations?: boolean;
}

const App: FC = () => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.md);
  const { activeSection, isScrolled, handleNavClick } = useNavigation();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();

  // Hide sticky contact when on contact section or on mobile
  const showStickyContact = !isMobile && activeSection !== 'contact';

  // Section configuration
  const sections = useMemo<Section[]>(() => [
    { id: 'about', label: 'About', Component: About },
    { id: 'skills', label: 'Skills', Component: Skills },
    { id: 'projects', label: 'Projects', Component: Projects },
    { id: 'experience', label: 'Experience', Component: Experience },
    { id: 'contact', label: 'Contact', Component: Contact, showDecorations: false }
  ], []);

  return (
    <ErrorBoundary>
      <div className={`app-background ${isMobile ? 'mobile-scroll-snap' : ''}`}>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-content sr-only">
          Skip to main content
        </a>

        {/* Global floating elements - Background decoration */}
        {!isMobile && <FloatingElements variant="default" density="dense" />}

        {/* Sticky Contact - Shows on larger screens except contact section */}
        <StickyContact isVisible={showStickyContact} />

        {/* Navigation - Sticky header (desktop only) */}
        <Navigation
          isMobile={isMobile}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          activeSection={activeSection}
          isScrolled={isScrolled}
          handleNavClick={handleNavClick}
        />

        {/* MobileMenu rendered at app level for mobile */}
        {isMobile && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            activeSection={activeSection}
            onNavClick={handleNavClick}
            onClose={closeMobileMenu}
          />
        )}

        <main id="main-content" className="main-content">
          {/* Hero Section - Always loaded (above fold) */}
          <section id="home" className="scroll-snap-section">
            <Hero />
          </section>

          {/* Lazy-loaded Sections with separator */}
          {sections.map(({ id, Component: SectionComponent, showDecorations }, idx) => (
            <Fragment key={id}>
              <section id={id} className="scroll-snap-section">
                <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
                  <GlassSection {...(showDecorations !== undefined && { showDecorations })}>
                    <SectionComponent />
                  </GlassSection>
                </Suspense>
              </section>
              {/* Add separator except after last section */}
              {idx < sections.length - 1 && (
                <div className="section-separator" aria-hidden="true"></div>
              )}
            </Fragment>
          ))}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
