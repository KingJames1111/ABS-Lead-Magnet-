import React from 'react';
import { Card } from "@/components/ui/card";
import { ProcessStep } from "./types";

interface ProcessCardProps extends ProcessStep {
  className?: string;
}

export function ProcessCard({
  number,
  icon: Icon,
  title,
  subtitle,
  heading,
  description,
  features,
  className
}: ProcessCardProps) {
  return (
    <Card className={`bg-gradient-to-br from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--royal-purple-dark)/0.9)] border-[hsl(var(--royal-purple-light)/0.2)] p-8 ${className}`}>
      <div className="relative z-10">
        <div className="flex items-start gap-6 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--electric-green))] to-[hsl(var(--flame-orange))] rounded-full blur-xl opacity-50" />
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[hsl(var(--electric-green))] to-[hsl(var(--flame-orange))] p-4">
              <Icon className="w-full h-full text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-[hsl(var(--flame-orange))] text-lg italic">{subtitle}</p>
          </div>
        </div>

        <h4 className="text-4xl font-bold text-[hsl(var(--electric-green))] font-orbitron mb-6">
          {heading}
        </h4>

        <p className="text-lg text-white/90 leading-relaxed mb-8">
          {description}
        </p>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="space-y-2">
              <h5 className="text-[hsl(var(--electric-green))] font-semibold text-lg">{feature.title}</h5>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}