import React from 'react';

export function StyledDescription() {
  return (
    <p className="text-lg leading-relaxed">
      A <span className="text-[hsl(var(--electric-green))]">revolutionary system</span> that becomes the{' '}
      <span className="text-2xl bg-gradient-to-r from-[hsl(var(--flame-orange))] via-[hsl(var(--flame-orange)/0.9)] to-[hsl(var(--flame-red))] bg-clip-text text-transparent font-bold">
        cognitive core
      </span>{' '}
      of your brand, expertly aligning your unique voice, audience insights, and brand language for cohesive,{' '}
      <span className="text-[hsl(var(--flame-orange))] italic">high-impact content.</span>
    </p>
  );
}