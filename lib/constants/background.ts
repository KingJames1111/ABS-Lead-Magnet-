// Immutable background configuration
export const BACKGROUND_CONFIG = {
  dots: {
    count: 50,
    radius: 45,
    center: {
      x: 50,
      y: 50
    },
    animation: {
      minDelay: 0.5,
      maxDelay: 3.5,
      minOpacity: 0.3,
      maxOpacity: 0.8,
      minScale: 0.75,
      maxScale: 1.25
    }
  },
  gradients: {
    base: {
      from: 'hsl(270,50%,8%)',
      via: 'hsl(270,50%,12%)',
      to: 'hsl(270,50%,5%)'
    },
    glow: {
      orange: {
        color: 'hsl(var(--flame-orange))',
        opacity: 0.15
      },
      green: {
        color: 'hsl(var(--electric-green))',
        opacity: 0.1
      }
    }
  }
} as const;

// Type-safe background dot generator
export const generateBackgroundDot = (index: number, total: number) => {
  const angle = (index / total) * Math.PI * 2;
  const { radius, center, animation } = BACKGROUND_CONFIG.dots;

  return {
    id: index,
    left: center.x + radius * Math.cos(angle),
    top: center.y + radius * Math.sin(angle),
    delay: (Math.sin(index * 0.3) + 1) * 
      ((animation.maxDelay - animation.minDelay) / 2) + animation.minDelay,
    opacity: (Math.cos(index * 0.5) + 1) * 
      ((animation.maxOpacity - animation.minOpacity) / 2) + animation.minOpacity,
    scale: (Math.sin(index * 0.7) + 1) * 
      ((animation.maxScale - animation.minScale) / 2) + animation.minScale
  } as const;
};