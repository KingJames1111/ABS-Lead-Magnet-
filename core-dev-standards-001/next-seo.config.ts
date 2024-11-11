import { SEO_SYSTEM } from './seo-system';

// Next.js specific SEO configuration
export const defaultSEOConfig = {
  titleTemplate: SEO_SYSTEM.defaults.metadata.titleTemplate,
  defaultTitle: SEO_SYSTEM.defaults.metadata.defaultTitle,
  description: SEO_SYSTEM.defaults.metadata.defaultDescription,
  openGraph: {
    type: 'website',
    locale: SEO_SYSTEM.defaults.metadata.locale,
    url: SEO_SYSTEM.defaults.metadata.siteUrl,
    site_name: 'ABS Studios',
    images: [
      {
        url: SEO_SYSTEM.defaults.metadata.defaultOgImage,
        width: 1200,
        height: 630,
        alt: 'ABS Studios'
      }
    ]
  },
  twitter: {
    handle: SEO_SYSTEM.defaults.metadata.twitterHandle,
    site: SEO_SYSTEM.defaults.metadata.twitterHandle,
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: SEO_SYSTEM.metaTags.viewport
    },
    {
      name: 'theme-color',
      content: SEO_SYSTEM.metaTags.themeColor
    }
  ],
  additionalLinkTags: [
    ...SEO_SYSTEM.technical.preconnect.map(href => ({
      rel: 'preconnect',
      href
    })),
    ...SEO_SYSTEM.technical.preload.fonts.map(font => ({
      rel: 'preload',
      href: font.href,
      as: 'font',
      type: font.type,
      crossOrigin: font.crossOrigin
    }))
  ]
} as const;