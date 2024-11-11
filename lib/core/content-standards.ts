// IMMUTABLE ACCESSIBILITY STANDARDS
export const A11Y_STANDARDS = {
  aria: {
    landmarks: {
      banner: 'banner',
      navigation: 'navigation',
      main: 'main',
      complementary: 'complementary',
      contentinfo: 'contentinfo',
      search: 'search',
    },
    roles: {
      button: 'button',
      link: 'link',
      article: 'article',
      dialog: 'dialog',
      alert: 'alert',
      alertDialog: 'alertdialog',
      menu: 'menu',
      menuItem: 'menuitem',
      tab: 'tab',
      tabPanel: 'tabpanel',
    }
  },

  focus: {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'hsl(var(--flame-orange))',
    outlineOffset: '2px',
  },

  motion: {
    reducedMotion: {
      transform: 'none',
      animation: 'none',
      transition: 'none',
    }
  },

  contrast: {
    minimumRatio: 4.5,
    enhancedRatio: 7,
    largeTextRatio: 3,
  },

  timing: {
    tooltipDelay: 1000,
    notificationDuration: 5000,
    animationDuration: 200,
  }
} as const;

// Make accessibility standards immutable
Object.freeze(A11Y_STANDARDS);
Object.freeze(A11Y_STANDARDS.aria);
Object.freeze(A11Y_STANDARDS.focus);
Object.freeze(A11Y_STANDARDS.motion);
Object.freeze(A11Y_STANDARDS.contrast);
Object.freeze(A11Y_STANDARDS.timing);