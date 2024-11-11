'use client';

import { Brain, Target, Rocket, Sparkles, Zap, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Your Brand's Big Brain",
    description: "AI-powered content creation that captures your unique voice and brand personality.",
    gradient: "from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))]",
    features: [
      "Neural pattern recognition",
      "Brand voice optimization",
      "Content scaling automation"
    ]
  },
  {
    icon: Target,
    title: "Strategic Distribution",
    description: "Multi-channel content distribution optimized for maximum organic reach.",
    gradient: "from-[hsl(var(--electric-green))] to-[hsl(var(--flame-orange))]",
    features: [
      "Channel optimization",
      "Audience targeting",
      "Engagement analytics"
    ]
  },
  {
    icon: Rocket,
    title: "Growth Automation",
    description: "Automated systems that scale your marketing efforts while maintaining quality.",
    gradient: "from-[hsl(var(--flame-red))] to-[hsl(var(--royal-purple-light))]",
    features: [
      "Process automation",
      "Performance tracking",
      "Growth optimization"
    ]
  },
  {
    icon: Sparkles,
    title: "Content Enhancement",
    description: "AI-powered content optimization for maximum impact and engagement.",
    gradient: "from-[hsl(var(--royal-purple-light))] to-[hsl(var(--electric-green))]",
    features: [
      "SEO optimization",
      "Engagement boosting",
      "Content refinement"
    ]
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Quick implementation of marketing strategies across all channels.",
    gradient: "from-[hsl(var(--flame-orange))] to-[hsl(var(--electric-green))]",
    features: [
      "Fast execution",
      "Multi-channel deployment",
      "Real-time adjustments"
    ]
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Deep analytics and actionable insights for continuous improvement.",
    gradient: "from-[hsl(var(--electric-green))] to-[hsl(var(--flame-red))]",
    features: [
      "Performance metrics",
      "Audience insights",
      "ROI tracking"
    ]
  }
];

export function Services() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--bg-dark))]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--flame-orange)/0.3),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--flame-red)/0.3),transparent_70%)]" />
        </div>
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-orbitron">
            Transform Your Marketing
          </h2>
          <p className="text-2xl font-orbitron bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] bg-clip-text text-transparent mb-8">
            AI-Powered Solutions for 110X Growth
          </p>
          <p className="text-xl text-[hsl(var(--text-muted))] max-w-3xl mx-auto">
            Leverage our comprehensive suite of AI-powered marketing tools to automate, optimize, and scale your content strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-xl relative group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--flame-orange)/0.1)] to-[hsl(var(--flame-red)/0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--flame-orange)/0.3)] to-[hsl(var(--flame-red)/0.3)] rounded-full blur-xl" />
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} p-4 flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-[hsl(var(--text-muted))] mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}