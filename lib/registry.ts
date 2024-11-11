// IMMUTABLE CORE REGISTRY
import { Process } from '@/components/sections/process';
import { Hero } from '@/components/sections/hero';
import { FAQ } from '@/components/sections/faq';
import { CTA } from '@/components/sections/cta';
import { Testimonials } from '@/components/sections/testimonials';
import { DESIGN_SYSTEM } from './design-system';

// Core components that should not be modified
export const CORE_COMPONENTS = {
  Process,
  Hero,
  FAQ,
  CTA,
  Testimonials
} as const;

// Prevent modifications to core components
Object.freeze(CORE_COMPONENTS);

// Export design system for global use
export { DESIGN_SYSTEM };