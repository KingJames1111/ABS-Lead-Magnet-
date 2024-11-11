'use client';

interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="relative p-6 rounded-xl bg-[hsl(var(--royal-purple-dark)/0.5)] border border-[hsl(var(--royal-purple-light)/0.2)] group hover:border-[hsl(var(--flame-orange)/0.3)] transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--flame-orange)/0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      <h5 className="text-[hsl(var(--electric-green))] text-lg font-semibold mb-2">{title}</h5>
      <p className="text-white/80">{description}</p>
    </div>
  );
}