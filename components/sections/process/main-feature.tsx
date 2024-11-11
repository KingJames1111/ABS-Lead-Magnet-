'use client';

import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { FeatureCard } from './feature-card';

export function MainFeature() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className={cn(
        "bg-gradient-to-br from-[hsl(270,50%,15%)] to-[hsl(var(--royal-purple-dark)/0.9)]",
        "border-[hsl(var(--royal-purple-light)/0.3)] p-12 relative overflow-hidden group",
        "transform transition-all duration-500 hover:scale-[1.02]"
      )}>
        <div className="absolute top-8 right-8">
          <span className="font-orbitron text-8xl font-bold opacity-10 bg-gradient-to-r from-[hsl(var(--flame-orange))] to-transparent bg-clip-text text-transparent">
            02
          </span>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-8">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--electric-green))] to-[hsl(var(--flame-orange))] rounded-full blur-xl opacity-50" />
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[hsl(var(--electric-green))] to-[hsl(var(--flame-orange))] p-6 relative">
                  <Brain className="w-full h-full text-white" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-4xl font-bold text-white mb-4">Build Your Brand's Big Brain</h3>
                <p className="text-[hsl(var(--flame-orange))] text-xl italic">ABS's Neural Codex System - Your Own AI Mini Neural Network</p>
              </div>
            </div>

            <h4 className="text-6xl font-bold text-[hsl(var(--electric-green))] mb-6 font-orbitron">
              IMAGINE
            </h4>

            <p className="text-white/90 text-xl leading-relaxed max-w-3xl">
              A revolutionary system that becomes the cognitive core of your brand, expertly weaving together your unique voice, audience insights, and brand lexicon into a harmonious whole.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <FeatureCard
                title="Pattern Recognition"
                description="Decode and amplify winning communication patterns"
              />
              <FeatureCard
                title="Perceptual Integration"
                description="Transform insights into engagement strategies"
              />
              <FeatureCard
                title="Semantic Harmony"
                description="Craft messages that resonate with precision"
              />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}