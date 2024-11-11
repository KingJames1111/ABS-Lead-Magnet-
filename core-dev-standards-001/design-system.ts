// Typography System
export const typographySystem = {
  fontFamilies: {
    primary: {
      family: ['Inter var', ...fontFamily.sans],
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },
      usage: 'Main body text, UI elements, and general content'
    },
    display: {
      family: ['Orbitron', ...fontFamily.sans],
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },
      usage: 'Headings, hero sections, and feature titles'
    }
  },
  fontSizes: {
    base: '16px',
    heading1: '3rem',
    heading2: '2.5rem',
    heading3: '2rem',
    body: '1rem',
    small: '0.875rem'
  },
  lineHeights: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.75'
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.05em'
  }
} as const;