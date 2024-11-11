// Design tokens - IMMUTABLE
export const DESIGN_TOKENS = {
  colors: {
    // Base Colors (HSL values)
    royalPurpleDark: 'hsl(270 50% 20%)',
    royalPurpleLight: 'hsl(270 50% 40%)',
    flameOrange: 'hsl(25 100% 50%)',
    flameRed: 'hsl(0 100% 50%)',
    electricGreen: 'hsl(120 100% 50%)',
    bgDark: 'hsl(270 50% 5%)',
    textMuted: 'hsl(0 0% 70%)',
    textLight: 'hsl(0 0% 100%)',
  },
  
  // Component Specific
  components: {
    heading: {
      discover: 'text-[hsl(var(--flame-orange))]',
      imagine: 'text-[hsl(var(--electric-green))] italic',
      amplify: 'text-[hsl(var(--flame-orange))]',
      optimize: 'text-[hsl(var(--flame-orange))]',
    },
  },

  // Gradients
  gradients: {
    primary: 'from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))]',
    secondary: 'from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--royal-purple-light))]',
    accent: 'from-[hsl(var(--electric-green))] to-[hsl(var(--flame-orange))]',
  },

  // Spacing
  spacing: {
    section: 'py-32',
    container: 'px-4 md:px-8',
    card: 'p-8',
    button: 'px-8 py-6',
  },
} as const;

// Make tokens immutable
Object.freeze(DESIGN_TOKENS);