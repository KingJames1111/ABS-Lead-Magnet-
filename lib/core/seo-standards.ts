// IMMUTABLE SEO STANDARDS
export const SEO_STANDARDS = {
  metadata: {
    titleTemplate: '%s | ABS Studios - AI Marketing Automation',
    defaultTitle: 'AI Marketing Automation | Neural Pattern Recognition for 110X Growth',
    defaultDescription: 'Transform your marketing with AI-powered automation and neural pattern recognition. Achieve 110X content reach with automated content creation and distribution.',
    defaultKeywords: [
      'AI marketing automation',
      'neural pattern recognition',
      'marketing automation platform',
      'AI content strategy',
      'automated content distribution',
      'content scaling automation',
      'AI brand voice optimization',
      'marketing pattern recognition',
      'automated marketing analytics',
      'content multiplication',
      'organic content reach',
      'AI-powered analytics',
      'marketing ROI optimization',
      'brand voice automation',
      'content strategy automation'
    ].join(', '),
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://absstudios.com',
    siteName: 'ABS Studios',
    images: [
      {
        url: 'https://absstudios.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ABS Studios - AI Marketing Automation Platform',
      },
    ],
  },

  twitter: {
    handle: '@absstudios',
    site: '@absstudios',
    cardType: 'summary_large_image',
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

// Make SEO standards immutable
Object.freeze(SEO_STANDARDS);
Object.freeze(SEO_STANDARDS.metadata);
Object.freeze(SEO_STANDARDS.openGraph);
Object.freeze(SEO_STANDARDS.twitter);
Object.freeze(SEO_STANDARDS.robots);