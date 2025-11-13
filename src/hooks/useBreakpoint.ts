
import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const getMatches = (query: string): boolean => {

    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(getMatches(query));
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia(query);
    

    setMatches(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);
  
  return matches;
};

export const useIsMobile = (): boolean => {
  const MEDIA_QUERIES = {
    sm: '(max-width: 768px)',
  };
  return useMediaQuery(MEDIA_QUERIES.sm);
};

export const useIsTablet = (): boolean => {

  return useMediaQuery('(min-width: 769px) and (max-width: 1023px)');
};

export const useIsDesktop = (): boolean => {
  return useMediaQuery('(min-width: 1024px)');
};
