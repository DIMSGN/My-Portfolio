
export const getDelayClass = (index: number, offset: number = 0): string => {
  const delay = Math.min((index + offset) * 100, 900);
  return `delay-${delay}`;
};

