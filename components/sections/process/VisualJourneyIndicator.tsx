'use client';

import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { VISUAL_JOURNEY } from '@/lib/design-system/patterns/visual-journey';

export function VisualJourneyIndicator() {
  const { arrows } = VISUAL_JOURNEY;

  return (
    <motion.div 
      className="absolute left-1/2 bottom-8 transform -translate-x-1/2"
      animate={{ 
        y: [0, 10, 0],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{ 
        duration: arrows.animation.duration,
        repeat: Infinity,
        ease: arrows.animation.ease,
        delay: arrows.animation.delay
      }}
    >
      <ArrowDownRight 
        className="w-8 h-8 text-[hsl(var(--electric-green))] drop-shadow-[0_0_8px_rgba(0,255,0,0.3)]"
      />
    </motion.div>
  );
}