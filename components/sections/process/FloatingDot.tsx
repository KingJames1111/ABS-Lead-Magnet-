'use client';

import { motion } from 'framer-motion';

interface FloatingDotProps {
  index: number;
}

export function FloatingDot({ index }: FloatingDotProps) {
  // Use seeded random numbers for consistent positioning
  const left = Math.abs(Math.sin(index * 0.1)) * 100;
  const top = Math.abs(Math.cos(index * 0.1)) * 100;
  const delay = Math.abs(Math.sin(index * 0.3)) * 2;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-[hsl(var(--flame-orange))] rounded-full"
      style={{
        left: `${left}%`,
        top: `${top}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: 1,
        y: [0, -10, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    />
  );
}