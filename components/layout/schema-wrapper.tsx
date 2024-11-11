'use client';

import { SCHEMA_CONFIG } from '@/lib/core/seo';

interface SchemaWrapperProps {
  type: keyof typeof SCHEMA_CONFIG;
  children: React.ReactNode;
  data?: Record<string, any>;
}

export function SchemaWrapper({
  type,
  children,
  data
}: SchemaWrapperProps) {
  const schema = {
    ...SCHEMA_CONFIG[type],
    ...data
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />
      {children}
    </>
  );
}