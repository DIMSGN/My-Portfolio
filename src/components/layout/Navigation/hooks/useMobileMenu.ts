
import { useState, useCallback, useRef } from 'react';
import { useScrollLock } from '@hooks/useScrollLock';
import { useEscapeKey } from '@hooks/useEscapeKey';

export const useMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldRestoreScrollRef = useRef(true);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    shouldRestoreScrollRef.current = true;
  }, []);

  const closeMobileMenu = useCallback((restoreScroll = true) => {
    shouldRestoreScrollRef.current = restoreScroll;
    setIsMobileMenuOpen(false);
  }, []);
  useScrollLock({
    isLocked: isMobileMenuOpen,
    restoreScroll: shouldRestoreScrollRef.current,
  });
  useEscapeKey({
    isEnabled: isMobileMenuOpen,
    onEscape: () => closeMobileMenu(true),
  });

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
};
