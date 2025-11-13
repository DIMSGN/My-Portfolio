import { Suspense, FC, Fragment } from 'react';
import './App.css';
import { Navigation, Footer, Hero, GlassSection } from './components';
import SkeletonLoader from './components/common/SkeletonLoader/SkeletonLoader';
import FloatingElements from './components/common/FloatingElements/FloatingElements';
import ErrorBoundary from './components/common/ErrorBoundary/ErrorBoundary';
import { useMediaQuery } from '@hooks/useBreakpoint';
import { MEDIA_QUERIES } from '@constants/breakpoints';
import { useNavigation } from './components/layout/Navigation/hooks/useNavigation';
import { useMobileMenu } from './components/layout/Navigation/hooks/useMobileMenu';
import { MobileMenu } from './components/layout/Navigation/components/MobileMenu';
import { SECTIONS } from '@constants/sections';

const App: FC = () => {
  const isMobile = useMediaQuery(MEDIA_QUERIES.sm);
  const isNavCompact = useMediaQuery(MEDIA_QUERIES.md);
  const { activeSection, isScrolled, handleNavClick } = useNavigation();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();

  return (
    <ErrorBoundary>
      <div className="app-background">
        {!isMobile && <FloatingElements variant="default" density="dense" />}
        <Navigation
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          activeSection={activeSection}
          isScrolled={isScrolled}
          handleNavClick={handleNavClick}
        />

        <MobileMenu
          isOpen={isMobileMenuOpen}
          activeSection={activeSection}
          onNavClick={handleNavClick}
          onClose={closeMobileMenu}
        />

        <main id="main-content" className="main-content">
          <section id="home" className="scroll-snap-section">
            <Hero />
          </section>

          {SECTIONS.map(({ id, Component: SectionComponent, showDecorations }, idx) => (
            <Fragment key={id}>
              <section id={id} className="scroll-snap-section">
                <Suspense fallback={<SkeletonLoader />}>
                  <GlassSection {...(showDecorations !== undefined && { showDecorations })}>
                    <SectionComponent />
                  </GlassSection>
                </Suspense>
              </section>
              {idx < SECTIONS.length - 1 && (
                <div className="section-separator" aria-hidden="true"></div>
              )}
            </Fragment>
          ))}
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
