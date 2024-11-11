"use client";

import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  icon: LucideIcon;
  number: string;
  title: string;
  subtitle: string;
  description: React.ReactNode;
  gradient: string;
  iconColor: string;
}

export function ProcessStep({
  icon: Icon,
  number,
  title,
  subtitle,
  description,
  gradient,
  iconColor
}: ProcessStepProps) {
  return (
    <div className="relative group h-full">
      <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--flame-orange)/0.15)] via-[hsl(var(--royal-purple-dark)/0.2)] to-[hsl(var(--flame-red)/0.15)] blur-3xl" />
      </div>

      <Card className="relative bg-gradient-to-br from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--royal-purple-dark)/0.9)] border-[hsl(var(--royal-purple-light)/0.2)] transform transition-all duration-500 hover:scale-105 overflow-hidden h-full p-8">
        <div className="absolute top-4 right-4 font-orbitron text-4xl font-bold opacity-20 bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] bg-clip-text text-transparent">
          {number}
        </div>

        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--flame-orange)/0.3)] to-[hsl(var(--flame-red)/0.3)] rounded-full blur-xl" />
          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${gradient} p-4 flex items-center justify-center`}>
            <Icon className={`w-8 h-8 ${iconColor}`} />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-2 font-orbitron bg-gradient-to-r from-white to-[hsl(var(--text-light)/0.9)] bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-[hsl(var(--flame-orange))] text-lg mb-6 italic">
          {subtitle}
        </p>
        <div className="text-[hsl(var(--text-light))] space-y-4">
          {description}
        </div>
      </Card>
    </div>
  );
}