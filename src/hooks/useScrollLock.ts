
import { useEffect, useRef } from 'react';

interface UseScrollLockOptions {
  isLocked: boolean;
  restoreScroll?: boolean;
}

export const useScrollLock = ({ isLocked, restoreScroll = true }: UseScrollLockOptions) => {
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (isLocked) {
      scrollYRef.current = window.scrollY;
      

      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {

      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      

      if (restoreScroll) {
        requestAnimationFrame(() => {
          window.scrollTo(0, scrollYRef.current);
        });
      }
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isLocked, restoreScroll]);
};
