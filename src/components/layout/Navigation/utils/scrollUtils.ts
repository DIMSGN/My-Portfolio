
import { SCROLL_CONFIG } from '@config/constants';

export interface ScrollOptions {
  additionalOffset?: number;
  onComplete?: (() => void) | null;
}

const isValidSectionId = (id: string): boolean => {
  return typeof id === 'string' && id.trim().length > 0;
};

export const scrollToSection = (
  sectionId: string,
  options: ScrollOptions = {}
): void => {

  if (!isValidSectionId(sectionId)) {
    console.warn('[scrollToSection] Invalid section ID provided');
    return;
  }

  const { additionalOffset = 0, onComplete = null } = options;

  try {

    const element = document.getElementById(sectionId);

    if (!element) {
      console.warn(
        `[scrollToSection] Section with id "${sectionId}" not found`
      );
      return;
    }
    const header = document.querySelector('header');
    const headerHeight = header?.offsetHeight ?? SCROLL_CONFIG.HEADER_OFFSET;
    const totalOffset = headerHeight + additionalOffset;
    const targetPosition = Math.max(0, element.offsetTop - totalOffset);
    const scrollContainer = document.querySelector('.mobile-scroll-snap') as HTMLElement | null;
    const isScrollContainer = scrollContainer && scrollContainer.scrollHeight > scrollContainer.clientHeight;
    if (isScrollContainer) {
      scrollContainer.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
    if (onComplete && typeof onComplete === 'function') {
      setTimeout(onComplete, SCROLL_CONFIG.SMOOTH_DURATION);
    }
  } catch (error) {
    console.error(
      `[scrollToSection] Error scrolling to "${sectionId}":`,
      error
    );
  }
};

export const scrollToSelector = (
  selector: string,
  options: ScrollOptions = {}
): void => {

  if (!selector || typeof selector !== 'string') {
    console.warn('[scrollToSelector] Invalid selector provided');
    return;
  }

  try {

    const sectionId = selector.startsWith('#') ? selector.slice(1) : selector;
    scrollToSection(sectionId, options);
  } catch (error) {
    console.error(`[scrollToSelector] Error with selector "${selector}":`, error);
  }
};
