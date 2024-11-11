export * from './design-tokens';
export * from './seo-standards';
export * from './accessibility-standards';
export * from './performance-standards';

// Type definitions for design system
export type DesignTokens = typeof import('./design-tokens').DESIGN_TOKENS;
export type SeoStandards = typeof import('./seo-standards').SEO_STANDARDS;
export type A11yStandards = typeof import('./accessibility-standards').A11Y_STANDARDS;
export type PerformanceStandards = typeof import('./performance-standards').PERFORMANCE_STANDARDS;