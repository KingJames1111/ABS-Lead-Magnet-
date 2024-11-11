export const TYPOGRAPHY = {
  fonts: {
    heading: 'Orbitron',
    body: 'Inter',
  },
  weights: {
    normal: '400',
    medium: '500', 
    semibold: '600',
    bold: '700',
  },
  sizes: {
    h1: '4.5rem',
    h2: '3rem', 
    h3: '2.25rem',
    h4: '1.5rem',
    body: '1rem',
  }
} as const;

Object.freeze(TYPOGRAPHY);