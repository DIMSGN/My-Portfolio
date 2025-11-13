
import { useState, useEffect, useCallback, useRef } from 'react';
import { scrollToSelector } from '../utils/scrollUtils';
import { NAV_ITEMS } from '@constants/index';
import { SCROLL_CONFIG, NAVIGATION_TIMING, INTERSECTION_OBSERVER_CONFIG } from '@config/constants';

const getHeaderHeight = (): number => {
  const header = document.querySelector('header') as HTMLElement | null;
  return header?.offsetHeight || SCROLL_CONFIG.HEADER_OFFSET;
};

export const useNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > NAVIGATION_TIMING.SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: `-${getHeaderHeight()}px 0px ${INTERSECTION_OBSERVER_CONFIG.ROOT_MARGIN_BOTTOM} 0px`,
      threshold: INTERSECTION_OBSERVER_CONFIG.THRESHOLD,
    };

    observerRef.current = new IntersectionObserver((entries) => {

      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));

      if (visible[0]?.target?.id) {
        setActiveSection(visible[0].target.id);
      }
    }, options);

    NAV_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  const handleNavClick = useCallback((href: string, id: string) => {

    if (!href || !id || typeof href !== 'string' || typeof id !== 'string') {
      console.warn('[useNavigation] Invalid navigation parameters');
      return;
    }

    setActiveSection(id);

    scrollToSelector(href);
  }, []);

  return {
    activeSection,
    isScrolled,
    handleNavClick,
  };
};
