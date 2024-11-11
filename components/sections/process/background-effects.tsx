'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { BACKGROUND_CONFIG, generateBackgroundDot } from '@/lib/constants/background';

interface BackgroundDot {
  readonly id: number;
  readonly left: number;
  readonly top: number;
  readonly delay: number;
  readonly opacity: number;
  readonly scale: number;
}

export function BackgroundEffects() {
  const [dots, setDots] = useState<ReadonlyArray<BackgroundDot>>([]);

  const generateDots = useCallback(() => {
    const newDots = Array.from(
      { length: BACKGROUND_CONFIG.dots.count },
      (_, i) => generateBackgroundDot(i, BACKGROUND_CONFIG.dots.count)
    );
    setDots(Object.freeze(newDots));
  }, []);

  useEffect(() => {
    generateDots();
  }, [generateDots]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b" 
        style={{
          backgroundImage: `linear-gradient(to bottom, 
            ${BACKGROUND_CONFIG.gradients.base.from},
            ${BACKGROUND_CONFIG.gradients.base.via},
            ${BACKGROUND_CONFIG.gradients.base.to}
          )`
        }}
      />
      
      {/* Glow Effects */}
      <motion.div 
        className="absolute top-0 left-0 w-[800px] h-[800px] -translate-x-1/4 -translate-y-1/4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div 
          className="absolute inset-0 rounded-full animate-pulse-glow"
          style={{
            background: `radial-gradient(circle at center,
              ${BACKGROUND_CONFIG.gradients.glow.orange.color}/${BACKGROUND_CONFIG.gradients.glow.orange.opacity},
              transparent 70%
            )`
          }}
        />
      </motion.div>

      <motion.div 
        className="absolute bottom-0 right-0 w-[800px] h-[800px] translate-x-1/4 translate-y-1/4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div 
          className="absolute inset-0 rounded-full animate-pulse-glow"
          style={{
            background: `radial-gradient(circle at center,
              ${BACKGROUND_CONFIG.gradients.glow.green.color}/${BACKGROUND_CONFIG.gradients.glow.green.opacity},
              transparent 70%
            )`
          }}
        />
      </motion.div>

      {/* Animated Dots */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute w-1 h-1 bg-[hsl(var(--flame-orange))] rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: dot.opacity,
            scale: dot.scale,
            y: [0, -10, 0]
          }}
          transition={{
            opacity: { duration: 0.5, delay: dot.delay },
            scale: { duration: 0.5, delay: dot.delay },
            y: {
              duration: 5,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
          }}
        />
      ))}
    </div>
  );
}