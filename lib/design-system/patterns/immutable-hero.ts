// IMMUTABLE HERO PATTERN
// This pattern serves as the core reference for all hero sections
// DO NOT MODIFY THIS FILE

export const HERO_PATTERN = {
  structure: {
    layout: {
      container: "relative min-h-screen flex items-center justify-center overflow-hidden",
      content: "container px-4 mx-auto relative z-10",
      maxWidth: "max-w-4xl mx-auto text-center"
    },
    background: {
      base: "absolute inset-0",
      gradient: "absolute inset-0 bg-gradient-to-b from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--bg-dark))]",
      effects: {
        dots: {
          class: "absolute w-1 h-1 bg-[hsl(var(--flame-orange))] rounded-full animate-twinkle",
          count: 50
        },
        glows: {
          top: "absolute top-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,hsl(var(--flame-orange)/0.15),transparent_70%)] blur-2xl",
          bottom: "absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle_at_center,hsl(var(--flame-red)/0.15),transparent_70%)] blur-2xl"
        }
      }
    },
    badge: {
      container: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--royal-purple-light)/0.3)] backdrop-blur-sm mb-8 border border-[hsl(var(--royal-purple-light)/0.2)]",
      icon: "h-5 w-5 text-[hsl(var(--electric-green))]",
      text: "text-base font-medium tracking-wide text-white"
    },
    heading: {
      container: "font-orbitron text-5xl md:text-7xl font-bold leading-tight mb-8",
      gradient: "inline-block bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] bg-clip-text text-transparent",
      underline: "absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--electric-green))] to-transparent"
    },
    subheading: {
      container: "text-xl md:text-2xl mb-12 text-[hsl(var(--text-muted))] max-w-3xl mx-auto leading-relaxed font-light",
      highlight: "text-[hsl(var(--flame-orange))] font-medium"
    },
    cta: {
      container: "flex flex-col sm:flex-row gap-6 justify-center items-center",
      primary: {
        base: "cta-primary text-lg px-8 py-6 group relative overflow-hidden",
        hover: "group-hover:translate-x-1 transition-transform"
      },
      secondary: {
        base: "text-lg px-8 py-6 border-[hsl(var(--royal-purple-light)/0.3)] hover:bg-[hsl(var(--royal-purple-light)/0.1)] text-white group relative overflow-hidden",
        hover: "group-hover:rotate-12 transition-transform"
      }
    }
  },

  animation: {
    dots: {
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
          "50%": { opacity: 0.6, transform: "scale(1.05)" }
        }
      },
      config: {
        duration: "4s",
        timing: "ease-in-out",
        iteration: "infinite"
      }
    },
    content: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    }
  },

  accessibility: {
    landmarks: {
      main: "main",
      heading: "h1"
    },
    aria: {
      hidden: "true",
      labelledby: "hero-title"
    }
  }
} as const;

// Make entire pattern deeply immutable
Object.freeze(HERO_PATTERN);
Object.freeze(HERO_PATTERN.structure);
Object.freeze(HERO_PATTERN.structure.layout);
Object.freeze(HERO_PATTERN.structure.background);
Object.freeze(HERO_PATTERN.structure.background.effects);
Object.freeze(HERO_PATTERN.structure.badge);
Object.freeze(HERO_PATTERN.structure.heading);
Object.freeze(HERO_PATTERN.structure.subheading);
Object.freeze(HERO_PATTERN.structure.cta);
Object.freeze(HERO_PATTERN.animation);
Object.freeze(HERO_PATTERN.animation.dots);
Object.freeze(HERO_PATTERN.animation.content);
Object.freeze(HERO_PATTERN.accessibility);
Object.freeze(HERO_PATTERN.accessibility.landmarks);
Object.freeze(HERO_PATTERN.accessibility.aria);