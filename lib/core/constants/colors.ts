export const COLORS = {
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
  },
  gradients: {
    primary: 'from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))]',
    secondary: 'from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--royal-purple-light))]',
    accent: 'from-[hsl(var(--electric-green))] to-[hsl(var(--flame-orange))]',
  }
} as const;

Object.freeze(COLORS);