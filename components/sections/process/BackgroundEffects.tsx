'use client';

import { motion } from 'framer-motion';
import { useCallback, useMemo } from 'react';
import { SeededRandom } from '@/lib/utils/seeded-random';

interface Dot {
  id: number;
  left: string;
  top: string;
  delay: number;
  opacity: number;
  scale: number;
}

export function BackgroundEffects() {
  const dots = useMemo(() => {
    const random = new SeededRandom(42); // Consistent seed for server/client match
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${random.range(0, 100)}%`,
      top: `${random.range(0, 100)}%`,
      delay: random.range(0, 2),
      opacity: random.range(0.2, 0.4),
      scale: random.range(0.9, 1.1)
    }));
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[#1C0B29]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A0E4F] to-[#1C0B29]" />
      
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute w-1 h-1 bg-[hsl(var(--flame-orange))] rounded-full"
          style={{
            left: dot.left,
            top: dot.top,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [dot.opacity, dot.opacity * 2, dot.opacity],
            scale: [dot.scale, dot.scale * 1.2, dot.scale],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,hsl(var(--flame-orange)/0.15),transparent_70%)] blur-2xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,hsl(var(--flame-red)/0.15),transparent_70%)] blur-2xl" />
    </div>
  );
}