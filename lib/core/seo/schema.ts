// IMMUTABLE SCHEMA CONFIGURATION
export const SCHEMA_CONFIG = {
  organization: {
    "@type": "Organization",
    "@context": "https://schema.org",
    name: "ABS Studios",
    url: "https://absstudios.com",
    logo: "https://absstudios.com/logo.png",
    sameAs: [
      "https://twitter.com/absstudios",
      "https://linkedin.com/company/abs-studios"
    ]
  },

  website: {
    "@type": "WebSite",
    "@context": "https://schema.org",
    name: "ABS Studios - AI Marketing Automation",
    description: "Transform your marketing with AI-powered automation and neural pattern recognition",
    url: "https://absstudios.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://absstudios.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },

  breadcrumbList: {
    "@type": "BreadcrumbList",
    "@context": "https://schema.org",
    itemListElement: []
  }
} as const;

Object.freeze(SCHEMA_CONFIG);