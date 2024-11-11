'use client';

import { motion } from 'framer-motion';

export function SectionHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-24"
    >
      <h2 className="font-orbitron text-5xl md:text-6xl font-bold text-white mb-4">
        Our Proven Process
      </h2>
      <div className="mb-6">
        <span className="font-orbitron text-6xl md:text-7xl font-bold text-[hsl(var(--electric-green))] tracking-tight">
          110X Growth
        </span>
      </div>
      <h3 className="text-2xl md:text-3xl font-orbitron text-[hsl(var(--flame-orange))] italic mb-8">
        From Concept to Conversion: Your Journey to Success
      </h3>
      <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
        From defining your unique voice to optimizing your content reach, our process integrates AI-powered precision with human creativity to grow your brand's impact and ROI exponentially.
      </p>
    </motion.div>
  );
}