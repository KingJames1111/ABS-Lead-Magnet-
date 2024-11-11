// IMMUTABLE MOBILE OPTIMIZATION CONFIGURATION
export const MOBILE_OPTIMIZATION = {
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px"
  },

  touchTargets: {
    minWidth: "44px",
    minHeight: "44px",
    spacing: "8px"
  },

  fontSizes: {
    minimum: "16px",
    bodyMobile: "16px",
    bodyDesktop: "18px"
  },

  performance: {
    imageOptimization: {
      mobileSizes: [320, 375, 425, 768],
      formats: ["webp", "avif"],
      quality: 80
    },
    lazyLoading: {
      enabled: true,
      threshold: "50px"
    }
  }
} as const;

Object.freeze(MOBILE_OPTIMIZATION);