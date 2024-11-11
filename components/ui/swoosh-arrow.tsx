'use client';

import { motion } from 'framer-motion';
import { VISUAL_JOURNEY } from '@/lib/design-system/patterns/visual-journey';

interface SwooshArrowProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  reverse?: boolean;
}

export function SwooshArrow({ 
  size = 'medium',
  className = '',
  reverse = false
}: SwooshArrowProps) {
  const { swoosh } = VISUAL_JOURNEY.arrows;
  const config = swoosh[size];

  return (
    <motion.svg
      width={config.width}
      height={config.height}
      viewBox={`0 0 ${config.width} ${config.height}`}
      fill="none"
      className={`${config.className} ${className}`}
      style={{ transform: reverse ? 'scaleX(-1)' : undefined }}
    >
      <motion.path
        d={config.path}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: VISUAL_JOURNEY.arrows.animation.duration,
          ease: VISUAL_JOURNEY.arrows.animation.ease,
          repeat: VISUAL_JOURNEY.arrows.animation.repeat,
          delay: VISUAL_JOURNEY.arrows.animation.delay
        }}
      />
    </motion.svg>
  );
}