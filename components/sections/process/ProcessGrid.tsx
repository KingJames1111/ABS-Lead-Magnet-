'use client';

import { Brain, Target, Rocket, Sparkles } from "lucide-react";
import { ProcessCard } from "./ProcessCard";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Define Your Voice",
    subtitle: "Unleash Your Brand's True Power",
    heading: "DISCOVER",
    description: "Unleash your brand's raw power through our AI-Powered Analysis. We don't just capture your voice—we amplify it into a force that commands attention.",
    features: [
      {
        title: "Voice Mastery",
        description: "Forge a signature voice that thunders above the noise"
      },
      {
        title: "Audience Connection",
        description: "Strike deep, lasting chords with your target market"
      },
      {
        title: "Brand Impact",
        description: "Build a presence that ignites action and drives results"
      }
    ]
  },
  {
    number: "02",
    icon: Brain,
    title: "Build Your Brand's Big Brain",
    subtitle: "ABS's Neural Codex System - Your AI-powered network",
    heading: "IMAGINE",
    description: "A revolutionary system that becomes the cognitive core of your brand, expertly aligning your unique voice, audience insights, and brand language for cohesive, high-impact content.",
    features: [
      {
        title: "Pattern Recognition",
        description: "Decode and amplify winning communication patterns"
      },
      {
        title: "Perceptual Integration",
        description: "Transform insights into engagement strategies"
      },
      {
        title: "Semantic Harmony",
        description: "Craft messages that resonate with precision"
      }
    ]
  },
  {
    number: "03",
    icon: Rocket,
    title: "Create & Multiply",
    subtitle: "Scale Your Impact",
    heading: "AMPLIFY",
    description: "Transform every content piece into a multi-channel powerhouse. Turn one spark into 100,000 to 1,000,000+ targeted viewer touchpoints through pure organic reach.",
    features: [
      {
        title: "Content Transformation",
        description: "Turn every idea into an arsenal of high-impact content formats"
      },
      {
        title: "Strategic Distribution",
        description: "Dominate social media, high-traffic platforms, and earned media channels"
      },
      {
        title: "Organic Growth",
        description: "Explode your reach through organic content, not paid ads"
      }
    ]
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Measure & Refine",
    subtitle: "Optimize for Growth",
    heading: "OPTIMIZE",
    description: "Supercharge your content performance with AI-Powered Analytics. Transform data into unstoppable market dominance.",
    features: [
      {
        title: "Performance Mastery",
        description: "Track and amplify every engagement metric"
      },
      {
        title: "Audience Intelligence",
        description: "Turn audience insights into strategic advantages"
      },
      {
        title: "Growth Acceleration",
        description: "Scale your impact with data-driven precision"
      }
    ]
  }
];

export function ProcessGrid() {
  return (
    <div className="flex flex-col gap-8">
      {/* Top Container (02) */}
      <div className="relative">
        <ProcessCard {...steps[1]} isLarge />
      </div>

      {/* Middle Row (01 and 03) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProcessCard {...steps[0]} />
        <ProcessCard {...steps[2]} />
      </div>

      {/* Bottom Container (04) */}
      <div className="relative">
        <ProcessCard {...steps[3]} />
      </div>
    </div>
  );
}