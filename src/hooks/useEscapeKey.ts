
import { useEffect, useRef } from 'react';

interface UseEscapeKeyOptions {
  isEnabled: boolean;
  onEscape: () => void;
}

export const useEscapeKey = ({ isEnabled, onEscape }: UseEscapeKeyOptions) => {
  const onEscapeRef = useRef(onEscape);
  
  // Keep ref updated without causing re-renders
  useEffect(() => {
    onEscapeRef.current = onEscape;
  }, [onEscape]);

  useEffect(() => {
    if (!isEnabled) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscapeRef.current();
      }
    };

    document.addEventListener('keydown', handleEscape, { passive: true });
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isEnabled]);
};
