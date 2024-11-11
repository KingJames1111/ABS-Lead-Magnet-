// Typography System Reference
// Version: 1.0.0
// Last Updated: 2024-01-09

export const fontFamilies = {
  primary: {
    family: 'Inter var',
    fallback: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    usage: 'Primary (body text)'
  },
  display: {
    family: 'Orbitron',
    fallback: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    usage: 'Display (headings, hero text)'
  }
} as const;

export const fontSizes = {
  desktop: {
    heroTitle: {
      size: '4.5rem', // 72px
      lineHeight: '1.1',
      usage: 'Hero sections'
    },
    sectionHeaders: {
      size: '3rem', // 48px
      lineHeight: '1.2',
      usage: 'Major section headers'
    },
    bodyLarge: {
      size: '1.25rem', // 20px
      lineHeight: '1.5',
      usage: 'Featured body text'
    },
    bodyText: {
      size: '1rem', // 16px
      lineHeight: '1.5',
      usage: 'Standard body text'
    }
  },
  mobile: {
    heroTitle: {
      size: '3rem', // 48px
      lineHeight: '1.1'
    },
    sectionHeaders: {
      size: '2.25rem', // 36px
      lineHeight: '1.2'
    },
    bodyLarge: {
      size: '1rem', // 16px
      lineHeight: '1.5'
    },
    bodyText: {
      size: '1rem', // 16px
      lineHeight: '1.5'
    }
  }
} as const;

export const fontWeights = {
  regular: {
    weight: 400,
    usage: 'Body text, regular content'
  },
  medium: {
    weight: 500,
    usage: 'Emphasis, subheadings'
  },
  semibold: {
    weight: 600,
    usage: 'Section headers'
  },
  bold: {
    weight: 700,
    usage: 'Hero titles, strong emphasis'
  }
} as const;

export const iconography = {
  sizes: {
    large: {
      height: 'h-12',
      width: 'w-12',
      usage: 'Hero sections, featured areas'
    },
    medium: {
      height: 'h-8',
      width: 'w-8',
      usage: 'Main navigation, primary actions'
    },
    small: {
      height: 'h-6',
      width: 'w-6',
      usage: 'Inline text, secondary actions'
    },
    extraSmall: {
      height: 'h-4',
      width: 'w-4',
      usage: 'Indicators, tight spaces'
    }
  },
  sets: {
    primary: {
      name: 'Lucide React Icons',
      icons: ['Brain', 'Target', 'Rocket', 'Sparkles', 'Quote', 'TrendingUp', 'Users'],
      usage: 'Primary interface icons'
    }
  }
} as const;

// Utility classes for typography
export const typographyClasses = {
  heroTitle: {
    desktop: `
      font-${fontFamilies.display.family}
      text-${fontSizes.desktop.heroTitle.size}
      font-${fontWeights.bold.weight}
      leading-${fontSizes.desktop.heroTitle.lineHeight}
    `,
    mobile: `
      font-${fontFamilies.display.family}
      text-${fontSizes.mobile.heroTitle.size}
      font-${fontWeights.bold.weight}
      leading-${fontSizes.mobile.heroTitle.lineHeight}
    `
  },
  sectionHeader: {
    desktop: `
      font-${fontFamilies.display.family}
      text-${fontSizes.desktop.sectionHeaders.size}
      font-${fontWeights.semibold.weight}
      leading-${fontSizes.desktop.sectionHeaders.lineHeight}
    `,
    mobile: `
      font-${fontFamilies.display.family}
      text-${fontSizes.mobile.sectionHeaders.size}
      font-${fontWeights.semibold.weight}
      leading-${fontSizes.mobile.sectionHeaders.lineHeight}
    `
  },
  bodyLarge: {
    desktop: `
      font-${fontFamilies.primary.family}
      text-${fontSizes.desktop.bodyLarge.size}
      font-${fontWeights.regular.weight}
      leading-${fontSizes.desktop.bodyLarge.lineHeight}
    `,
    mobile: `
      font-${fontFamilies.primary.family}
      text-${fontSizes.mobile.bodyLarge.size}
      font-${fontWeights.regular.weight}
      leading-${fontSizes.mobile.bodyLarge.lineHeight}
    `
  },
  bodyText: {
    desktop: `
      font-${fontFamilies.primary.family}
      text-${fontSizes.desktop.bodyText.size}
      font-${fontWeights.regular.weight}
      leading-${fontSizes.desktop.bodyText.lineHeight}
    `,
    mobile: `
      font-${fontFamilies.primary.family}
      text-${fontSizes.mobile.bodyText.size}
      font-${fontWeights.regular.weight}
      leading-${fontSizes.mobile.bodyText.lineHeight}
    `
  }
} as const;

// Export complete typography system
export const TYPOGRAPHY_SYSTEM = {
  families: fontFamilies,
  sizes: fontSizes,
  weights: fontWeights,
  iconography: iconography,
  classes: typographyClasses
} as const;