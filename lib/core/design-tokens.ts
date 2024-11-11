// IMMUTABLE DESIGN TOKENS
export const DESIGN_TOKENS = {
  colors: {
    // Base Colors (HSL values)
    primary: {
      royalPurpleDark: 'hsl(270 50% 20%)',
      royalPurpleLight: 'hsl(270 50% 40%)',
      flameOrange: 'hsl(25 100% 50%)',
      flameRed: 'hsl(0 100% 50%)',
      electricGreen: 'hsl(120 100% 50%)',
    },
    background: {
      dark: 'hsl(270 50% 5%)',
      light: 'hsl(0 0% 100%)',
    },
    text: {
      light: 'hsl(0 0% 100%)',
      muted: 'hsl(0 0% 70%)',
      dark: 'hsl(270 50% 5%)',
    },
    // Semantic Colors
    state: {
      success: 'hsl(120 100% 50%)',
      error: 'hsl(0 100% 50%)',
      warning: 'hsl(25 100% 50%)',
      info: 'hsl(270 50% 40%)',
    }
  },

  typography: {
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
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    lineHeights: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
      loose: '2',
    }
  },

  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },

  gradients: {
    primary: 'from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))]',
    secondary: 'from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--royal-purple-light))]',
    accent: 'from-[hsl(var(--electric-green))] to-[hsl(var(--flame-orange))]',
  },

  effects: {
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
    blur: {
      sm: '4px',
      base: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    },
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  animation: {
    durations: {
      fast: '150ms',
      base: '300ms',
      slow: '500ms',
      slower: '700ms',
    },
    timingFunctions: {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    }
  }
} as const;

// Make tokens immutable
Object.freeze(DESIGN_TOKENS);
Object.freeze(DESIGN_TOKENS.colors);
Object.freeze(DESIGN_TOKENS.typography);
Object.freeze(DESIGN_TOKENS.spacing);
Object.freeze(DESIGN_TOKENS.gradients);
Object.freeze(DESIGN_TOKENS.effects);
Object.freeze(DESIGN_TOKENS.breakpoints);
Object.freeze(DESIGN_TOKENS.animation);