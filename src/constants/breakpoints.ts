
export const BREAKPOINTS = {
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1440,
  xl: 1920,
} as const;

export const MEDIA_QUERIES = {
  xs: `(max-width: ${BREAKPOINTS.xs}px)`,
  sm: `(max-width: ${BREAKPOINTS.sm}px)`,
  md: `(max-width: ${BREAKPOINTS.md}px)`,
  lg: `(max-width: ${BREAKPOINTS.lg}px)`,
  xl: `(max-width: ${BREAKPOINTS.xl}px)`,
  

  minXs: `(min-width: ${BREAKPOINTS.xs}px)`,
  minSm: `(min-width: ${BREAKPOINTS.sm}px)`,
  minMd: `(min-width: ${BREAKPOINTS.md}px)`,
  minLg: `(min-width: ${BREAKPOINTS.lg}px)`,
  minXl: `(min-width: ${BREAKPOINTS.xl}px)`,
} as const;
