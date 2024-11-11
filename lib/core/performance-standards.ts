// IMMUTABLE PERFORMANCE STANDARDS
export const PERFORMANCE_STANDARDS = {
  metrics: {
    fcp: {
      good: 1800,
      needsImprovement: 3000,
      poor: 4000,
    },
    lcp: {
      good: 2500,
      needsImprovement: 4000,
      poor: 6000,
    },
    fid: {
      good: 100,
      needsImprovement: 300,
      poor: 600,
    },
    cls: {
      good: 0.1,
      needsImprovement: 0.25,
      poor: 0.5,
    },
    ttfb: {
      good: 600,
      needsImprovement: 1000,
      poor: 1500,
    },
  },

  images: {
    formats: ['webp', 'avif', 'png', 'jpeg'],
    maxWidth: 1920,
    quality: 80,
    placeholderSize: 10,
  },

  caching: {
    staticAssets: 31536000, // 1 year
    dynamicAssets: 86400,   // 1 day
    api: 300,               // 5 minutes
  },

  budgets: {
    javascript: 300000,     // 300kb
    css: 100000,           // 100kb
    images: 500000,        // 500kb
    fonts: 100000,         // 100kb
    total: 1000000,        // 1mb
  }
} as const;

// Make performance standards immutable
Object.freeze(PERFORMANCE_STANDARDS);
Object.freeze(PERFORMANCE_STANDARDS.metrics);
Object.freeze(PERFORMANCE_STANDARDS.images);
Object.freeze(PERFORMANCE_STANDARDS.caching);
Object.freeze(PERFORMANCE_STANDARDS.budgets);