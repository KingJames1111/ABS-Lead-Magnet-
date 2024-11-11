"use client";

import { Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

export function MainStep() {
  const features = [
    { 
      title: "Perceptual Mapping", 
      desc: "Create comprehensive audience profiles that capture the complete Gestalt of your ideal customer's journey, needs, and aspirations" 
    },
    { 
      title: "Value Pattern Recognition", 
      desc: "Develop unified product narratives that highlight the holistic value proposition of your offerings" 
    },
    { 
      title: "Coherent Voice Architecture", 
      desc: "Establish a harmonious brand voice that maintains continuity across all touchpoints" 
    },
    { 
      title: "Semantic Framework", 
      desc: "Build a cohesive lexicon that reinforces your brand's unified message and identity" 
    }
  ];

  return (
    <div className="mb-32 relative max-w-[1600px] mx-auto">
      <div className="absolute -inset-40 bg-gradient-to-tr from-[hsl(var(--flame-orange)/0.15)] via-[hsl(var(--royal-purple-dark)/0.2)] to-[hsl(var(--flame-red)/0.15)] blur-3xl opacity-50" />
      
      <Card className="relative bg-gradient-to-br from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--royal-purple-dark)/0.9)] border-[hsl(var(--royal-purple-light)/0.3)] shadow-2xl shadow-[hsl(var(--flame-orange)/0.1)] transform transition-all duration-500 hover:scale-[1.01] overflow-hidden">
        <div className="absolute top-0 right-0 w-[1200px] h-[1200px]">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--flame-orange)/0.2)] to-transparent rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--flame-red)/0.15)] to-transparent rounded-full blur-2xl transform translate-y-1/4 -translate-x-1/4" />
        </div>
        
        <div className="relative z-10 p-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12 mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--flame-orange)/0.4)] to-[hsl(var(--flame-red)/0.4)] rounded-full blur-2xl" />
              <div className="w-36 h-36 rounded-full bg-gradient-to-r from-[hsl(var(--royal-purple-dark))] via-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] p-8 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <Brain className="w-20 h-20 text-[hsl(var(--electric-green))]" />
              </div>
            </div>
            <div>
              <h3 className="text-6xl font-bold font-orbitron bg-gradient-to-r from-white via-[hsl(var(--flame-orange))] to-[hsl(var(--text-light)/0.9)] bg-clip-text text-transparent mb-4">
                Build Your Brand's Big Brain
              </h3>
              <p className="text-[hsl(var(--flame-orange))] text-3xl italic">
                ABS's Neural Codex System
              </p>
            </div>
          </div>
          
          <div className="text-[hsl(var(--text-light))] max-w-6xl">
            <p className="mb-8 text-xl leading-relaxed">
              <span className="text-5xl font-medium italic text-[hsl(var(--flame-orange))] font-orbitron block mb-6">
                Imagine
              </span>
              a revolutionary system that becomes the{" "}
              <span className="text-2xl font-bold text-[hsl(var(--electric-green))]">cognitive core</span>{" "}
              of your brand, expertly{" "}
              <span className="italic text-[hsl(var(--flame-orange))]">weaving together</span>:
            </p>

            <div className="pl-6 border-l-4 border-[hsl(var(--flame-orange))] mb-8">
              <p className="text-xl leading-relaxed">
                Your{" "}
                <span className="font-semibold text-[hsl(var(--electric-green))]">unique voice</span>,{" "}
                <span className="italic text-[hsl(var(--flame-orange))]">audience insights</span>,{" "}
                <span className="font-semibold text-[hsl(var(--electric-green))]">product details</span>, and{" "}
                <span className="italic text-[hsl(var(--flame-orange))]">brand lexicon</span>{" "}
                into a harmonious whole.
              </p>
            </div>

            <p className="text-xl leading-relaxed mb-12">
              Our{" "}
              <span className="text-2xl font-bold text-[hsl(var(--flame-orange))]">Neural Codex System</span>{" "}
              builds this{" "}
              <span className="italic font-medium">transformative foundation</span>,{" "}
              ensuring every piece of content achieves:
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center p-4 border border-[hsl(var(--flame-orange))/0.2] rounded-lg backdrop-blur-sm">
                <span className="text-xl font-bold text-[hsl(var(--electric-green))]">Consistency</span>
                <p className="text-[hsl(var(--text-light))/80]">Unified brand voice</p>
              </div>
              <div className="text-center p-4 border border-[hsl(var(--flame-orange))/0.2] rounded-lg backdrop-blur-sm">
                <span className="text-xl font-bold text-[hsl(var(--flame-orange))]">Precision</span>
                <p className="text-[hsl(var(--text-light))/80]">Targeted messaging</p>
              </div>
              <div className="text-center p-4 border border-[hsl(var(--flame-orange))/0.2] rounded-lg backdrop-blur-sm">
                <span className="text-xl font-bold text-[hsl(var(--flame-red))]">Impact</span>
                <p className="text-[hsl(var(--text-light))/80]">Optimized results</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}