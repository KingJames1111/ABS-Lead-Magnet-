// IMMUTABLE SEMANTIC STRUCTURE CONFIGURATION
export const SEMANTIC_STRUCTURE = {
  headingLevels: {
    mainTitle: "h1",
    sectionTitle: "h2",
    subsectionTitle: "h3",
    componentTitle: "h4"
  },

  landmarks: {
    header: "banner",
    nav: "navigation",
    main: "main",
    footer: "contentinfo",
    search: "search",
    complementary: "complementary"
  },

  contentSections: {
    article: "article",
    section: "section",
    aside: "aside",
    figure: "figure",
    details: "details"
  }
} as const;

Object.freeze(SEMANTIC_STRUCTURE);