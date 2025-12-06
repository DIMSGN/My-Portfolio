/**
 * Animation utility functions
 */

/**
 * Get delay class name for animations
 * Clamps delay value to valid CSS classes (100-900ms)
 */
export const getDelayClass = (index: number, offset: number = 0): string => {
  const delay = Math.min((index + offset) * 100, 900);
  return `delay-${delay}`;
};

