'use client';

import { SEMANTIC_STRUCTURE } from '@/lib/core/seo';
import { cn } from '@/lib/utils';

interface SemanticSectionProps {
  as?: keyof typeof SEMANTIC_STRUCTURE.contentSections;
  children: React.ReactNode;
  className?: string;
  title?: string;
  titleLevel?: keyof typeof SEMANTIC_STRUCTURE.headingLevels;
  landmark?: keyof typeof SEMANTIC_STRUCTURE.landmarks;
}

export function SemanticSection({
  as = 'section',
  children,
  className,
  title,
  titleLevel = 'sectionTitle',
  landmark
}: SemanticSectionProps) {
  const Element = as;
  const HeadingElement = SEMANTIC_STRUCTURE.headingLevels[titleLevel];
  
  return (
    <Element 
      className={cn('relative', className)}
      role={landmark ? SEMANTIC_STRUCTURE.landmarks[landmark] : undefined}
    >
      {title && (
        <HeadingElement className="mb-8 font-bold">
          {title}
        </HeadingElement>
      )}
      {children}
    </Element>
  );
}