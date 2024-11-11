// Site-wide constants
export const SITE_CONFIG = {
  layout: {
    // Section spacing
    sectionPadding: 'py-32',
    containerPadding: 'px-4 md:px-8',
    cardPadding: 'p-8',
    buttonPadding: 'px-8 py-6',
    
    // Margins
    sectionSpacing: 'mb-20',
    elementSpacing: 'mb-8',
    smallSpacing: 'mb-4',
  },

  // Breakpoints (in pixels)
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },

  // Animation timings
  animation: {
    fast: '300ms',
    medium: '500ms',
    slow: '800ms',
  },
} as const;

// Make config immutable
Object.freeze(SITE_CONFIG);