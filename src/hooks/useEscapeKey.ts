
import { useEffect } from 'react';

interface UseEscapeKeyOptions {
  isEnabled: boolean;
  onEscape: () => void;
}

export const useEscapeKey = ({ isEnabled, onEscape }: UseEscapeKeyOptions) => {
  useEffect(() => {
    if (!isEnabled) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscape();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isEnabled, onEscape]);
};
