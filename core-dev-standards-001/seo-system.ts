// SEO Configuration System
// Version: 1.0.0
// Last Updated: 2024-01-09

export const seoDefaults = {
  metadata: {
    titleTemplate: '%s | ABS Studios - AI Marketing + Human Expertise',
    defaultTitle: 'ABS Studios - AI Marketing + Human Expertise | 110X Your Content Power',
    defaultDescription: 'Transform your marketing with AI-powered solutions and human expertise. Get personalized, scalable content that drives real results.',
    defaultKeywords: [
      'AI marketing',
      'content automation',
      'marketing automation',
      'personalized marketing',
      'content scaling',
      'digital marketing AI',
      'marketing technology',
      'content strategy'
    ],
    defaultOgImage: '/images/og-default.jpg',
    siteUrl: 'https://absstudios.com',
    twitterHandle: '@absstudios',
    locale: 'en_US'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
} as const;

export const structuredData = {
  organization: {
    '@type': 'Organization',
    name: 'ABS Studios',
    url: 'https://absstudios.com',
    logo: 'https://absstudios.com/images/logo.png',
    sameAs: [
      'https://twitter.com/absstudios',
      'https://linkedin.com/company/absstudios'
    ]
  },
  breadcrumbDefaults: {
    '@type': 'BreadcrumbList',
    itemListElement: []
  }
} as const;

export const technicalSEO = {
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ],
  preload: {
    fonts: [
      {
        href: '/fonts/inter-var.woff2',
        type: 'font/woff2',
        crossOrigin: 'anonymous'
      },
      {
        href: '/fonts/orbitron.woff2',
        type: 'font/woff2',
        crossOrigin: 'anonymous'
      }
    ],
    criticalImages: [
      '/images/hero-background.webp',
      '/images/logo.svg'
    ]
  },
  security: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com;",
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  }
} as const;

export const requiredMetaTags = {
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  charSet: 'utf-8',
  colorScheme: 'dark light',
  themeColor: '#270532' // Royal Purple Dark
} as const;

// Implementation guide
export const seoImplementation = {
  preDeployment: {
    validation: [
      'Verify all pages have unique titles and descriptions',
      'Check canonical URLs are correctly set',
      'Validate structured data using Google's testing tool',
      'Ensure all images have alt text',
      'Verify meta robots tags are correct'
    ],
    optimization: [
      'Compress and convert images to WebP format',
      'Minify CSS, JavaScript, and HTML',
      'Implement lazy loading for images and iframes',
      'Set up proper caching headers',
      'Configure CDN settings'
    ]
  },
  monitoring: {
    tools: [
      'Google Search Console',
      'Google Analytics 4',
      'Core Web Vitals monitoring',
      'SEMrush/Ahrefs for rankings'
    ],
    metrics: [
      'Page load time',
      'First Contentful Paint',
      'Largest Contentful Paint',
      'Cumulative Layout Shift',
      'First Input Delay'
    ]
  }
} as const;

// Export complete SEO system
export const SEO_SYSTEM = {
  defaults: seoDefaults,
  structuredData: structuredData,
  technical: technicalSEO,
  metaTags: requiredMetaTags,
  implementation: seoImplementation
} as const;