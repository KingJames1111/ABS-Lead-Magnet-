'use client';

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain } from "lucide-react";

interface Dot {
  id: number;
  left: number;
  top: number;
  delay: number;
  opacity: number;
  scale: number;
}

export function Hero() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.floor((Math.sin(i * 0.1) + 1) * 50),
        top: Math.floor((Math.cos(i * 0.1) + 1) * 50),
        delay: (Math.sin(i * 0.3) + 1) * 2.5,
        opacity: (Math.cos(i * 0.5) + 1) * 0.25 + 0.3,
        scale: (Math.sin(i * 0.7) + 1) * 0.25 + 0.5
      }));
      setDots(newDots);
    };

    generateDots();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--bg-dark))]" />
        
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1 h-1 bg-[hsl(var(--flame-orange))] rounded-full animate-twinkle"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animationDelay: `${dot.delay}s`,
              opacity: dot.opacity,
              transform: `scale(${dot.scale})`
            }}
          />
        ))}

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,hsl(var(--flame-orange)/0.15),transparent_70%)] blur-2xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,hsl(var(--flame-red)/0.15),transparent_70%)] blur-2xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--royal-purple-light)/0.3)] backdrop-blur-sm mb-8 border border-[hsl(var(--royal-purple-light)/0.2)]">
            <Brain className="h-5 w-5 text-[hsl(var(--electric-green))]" />
            <span className="text-base font-medium tracking-wide text-white">AI-Powered Automation Solutions</span>
          </div>

          <h1 className="font-orbitron text-5xl md:text-7xl font-bold leading-tight mb-8">
            <span className="text-white">Unlock{" "}</span>
            <span className="inline-block bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] bg-clip-text text-transparent">
              110X Marketing Power
            </span>
            {" "}
            <span className="text-white">with{" "}</span>
            <span className="relative inline-block text-white">
              AI + Human Expertise
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--electric-green))] to-transparent" />
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl mb-12 text-[hsl(var(--text-muted))] max-w-3xl mx-auto leading-relaxed font-light">
            Transform your brand with AI-powered content that feels human and{" "}
            <span className="text-[hsl(var(--flame-orange))] font-medium">reaches your audience everywhere</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              className="cta-primary text-lg px-8 py-6 group relative overflow-hidden"
              onClick={() => window.location.href = '#contact'}
            >
              <span className="relative z-10">Get Started Now</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>

            <Button 
              variant="outline"
              className="text-lg px-8 py-6 border-[hsl(var(--royal-purple-light)/0.3)] 
                       hover:bg-[hsl(var(--royal-purple-light)/0.1)] text-white
                       group relative overflow-hidden"
              onClick={() => window.location.href = '#demo'}
            >
              <span className="relative z-10">Watch Demo</span>
              <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--royal-purple-light)/0.1)] to-[hsl(var(--royal-purple-light)/0.2)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(var(--bg-dark))] to-transparent" />
    </section>
  );
}