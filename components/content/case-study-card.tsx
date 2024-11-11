'use client';

import { Card } from "@/components/ui/card";
import { CONTENT_STANDARDS } from "@/lib/core/content-standards";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  challenge: string;
  solution: string;
  results: {
    growthPercentage: number;
    timeframe: string;
    roi: string;
    costSavings?: string;
    efficiencyGains?: string;
  };
  testimonial: {
    quote: string;
    author: string;
    title: string;
    company: string;
    image: string;
  };
  className?: string;
}

export function CaseStudyCard({
  challenge,
  solution,
  results,
  testimonial,
  className
}: CaseStudyCardProps) {
  return (
    <Card className={cn("bg-[hsl(var(--royal-purple-dark))] border-[hsl(var(--royal-purple-light)/0.2)] p-8 relative overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--flame-orange)/0.1)] to-[hsl(var(--flame-red)/0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Challenge</h3>
          <p className="text-white/80">{challenge}</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Solution</h3>
          <p className="text-white/80">{solution}</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Results</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[hsl(var(--flame-orange))] text-4xl font-bold">{results.growthPercentage}%</p>
              <p className="text-white/60">Growth in {results.timeframe}</p>
            </div>
            <div>
              <p className="text-[hsl(var(--electric-green))] text-4xl font-bold">{results.roi}</p>
              <p className="text-white/60">Return on Investment</p>
            </div>
            {results.costSavings && (
              <div>
                <p className="text-[hsl(var(--flame-orange))] text-4xl font-bold">{results.costSavings}</p>
                <p className="text-white/60">Cost Savings</p>
              </div>
            )}
            {results.efficiencyGains && (
              <div>
                <p className="text-[hsl(var(--electric-green))] text-4xl font-bold">{results.efficiencyGains}</p>
                <p className="text-white/60">Efficiency Gains</p>
              </div>
            )}
          </div>
        </div>

        <blockquote className="border-l-4 border-[hsl(var(--flame-orange))] pl-4 italic">
          <p className="text-white/90 text-lg mb-4">{testimonial.quote}</p>
          <footer className="flex items-center gap-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <cite className="text-white font-semibold not-italic">{testimonial.author}</cite>
              <p className="text-white/60">{testimonial.title}, {testimonial.company}</p>
            </div>
          </footer>
        </blockquote>
      </div>
    </Card>
  );
}