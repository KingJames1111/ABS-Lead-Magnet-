'use client';

import { motion } from 'framer-motion';
import { HERO_PATTERN } from '@/lib/design-system/patterns';

export function HeaderContent() {
  const { animation, structure } = HERO_PATTERN;

  return (
    <motion.div 
      className={structure.layout.maxWidth}
      initial={animation.content.initial}
      animate={animation.content.animate}
      transition={animation.content.transition}
    >
      <h2 className="font-orbitron text-5xl md:text-6xl font-bold text-white mb-4">
        Our Proven Process
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-6"
      >
        <span className="font-orbitron text-6xl md:text-7xl font-bold text-[hsl(var(--electric-green))] tracking-tight">
          110X Growth
        </span>
      </motion.div>

      <h3 className="text-2xl md:text-3xl font-orbitron text-[hsl(var(--flame-orange))] italic mb-8">
        From Concept to Conversion: Your Journey to Success
      </h3>

      <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
        From defining your unique voice to optimizing your content reach, our process
        integrates AI-powered precision with human creativity to grow your brand's
        impact and ROI exponentially.
      </p>
    </motion.div>
  );
}