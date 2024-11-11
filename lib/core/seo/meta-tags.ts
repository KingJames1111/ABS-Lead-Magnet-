// IMMUTABLE META TAG CONFIGURATION
export const META_TAGS = {
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  
  robots: {
    default: "index, follow",
    noindex: "noindex, follow",
    none: "noindex, nofollow"
  },

  openGraph: {
    type: "website",
    site_name: "ABS Studios",
    locale: "en_US"
  },

  twitter: {
    card: "summary_large_image",
    site: "@absstudios",
    creator: "@absstudios"
  }
} as const;

Object.freeze(META_TAGS);