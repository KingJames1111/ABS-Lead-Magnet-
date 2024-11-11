// Immutable visual journey patterns
export const VISUAL_JOURNEY = {
  arrows: {
    swoosh: {
      small: {
        path: "M2 2C50 25,50 75,98 98",
        width: 100,
        height: 40,
        className: "text-[hsl(var(--electric-green))] opacity-40"
      },
      medium: {
        path: "M2 2C65 25,65 75,148 98",
        width: 150,
        height: 60,
        className: "text-[hsl(var(--electric-green))] opacity-30"
      },
      large: {
        path: "M2 2C80 25,80 75,198 98",
        width: 200,
        height: 80,
        className: "text-[hsl(var(--electric-green))] opacity-20"
      }
    },
    animation: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 0.2,
      repeat: Infinity
    }
  },
  containers: {
    transitions: {
      duration: 0.6,
      stagger: 0.15,
      ease: "easeOut"
    },
    hover: {
      scale: 1.02,
      duration: 0.3
    }
  },
  responsive: {
    breakpoints: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    },
    scaling: {
      arrows: {
        sm: 0.6,
        md: 0.8,
        lg: 1
      }
    }
  }
} as const;

Object.freeze(VISUAL_JOURNEY);