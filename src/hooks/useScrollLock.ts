
import { useEffect, useRef } from 'react';

interface UseScrollLockOptions {
  isLocked: boolean;
  restoreScroll?: boolean;
}

export const useScrollLock = ({ isLocked, restoreScroll = true }: UseScrollLockOptions) => {
  const scrollYRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Cancel any pending animation frame
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    if (isLocked) {
      scrollYRef.current = window.scrollY;
      
      // Defer scroll lock to next frame for better INP
      rafIdRef.current = requestAnimationFrame(() => {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
        rafIdRef.current = null;
      });
    } else {
      // Defer unlock as well
      rafIdRef.current = requestAnimationFrame(() => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        
        if (restoreScroll) {
          window.scrollTo(0, scrollYRef.current);
        }
        rafIdRef.current = null;
      });
    }

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isLocked, restoreScroll]);
};
