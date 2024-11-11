export const PROCESS_STYLES = {
  header: {
    title: {
      base: "font-orbitron font-bold text-white",
      size: "text-5xl md:text-6xl",
      spacing: "mb-4"
    },
    growth: {
      base: "font-orbitron font-bold tracking-tight",
      size: "text-6xl md:text-7xl",
      color: "text-[hsl(var(--electric-green))]",
      spacing: "mb-6"
    },
    subtitle: {
      base: "font-orbitron italic",
      size: "text-2xl md:text-3xl",
      color: "text-[hsl(var(--flame-orange))]",
      spacing: "mb-8"
    },
    description: {
      base: "text-white/90 leading-relaxed",
      size: "text-xl",
      maxWidth: "max-w-3xl mx-auto"
    }
  },
  cards: {
    container: {
      base: "bg-gradient-to-br from-[hsl(270,50%,15%)] to-[hsl(var(--royal-purple-dark)/0.9)]",
      border: "border-[hsl(var(--royal-purple-light)/0.3)]",
      hover: "transform transition-all duration-500 hover:scale-[1.02]",
      padding: {
        default: "p-8",
        large: "p-12"
      }
    },
    number: {
      base: "font-orbitron font-bold opacity-10",
      gradient: "bg-gradient-to-r from-[hsl(var(--flame-orange))] to-transparent bg-clip-text text-transparent",
      size: {
        default: "text-6xl",
        large: "text-8xl"
      }
    },
    icon: {
      container: {
        base: "rounded-full relative",
        size: {
          default: "w-16 h-16 p-4",
          large: "w-24 h-24 p-6"
        },
        gradient: "bg-gradient-to-r from-[hsl(var(--electric-green))] to-[hsl(var(--flame-orange))]"
      },
      glow: "absolute inset-0 bg-gradient-to-r from-[hsl(var(--electric-green))] to-[hsl(var(--flame-orange))] rounded-full blur-xl opacity-50"
    },
    content: {
      title: {
        base: "font-bold text-white",
        size: {
          default: "text-2xl",
          large: "text-4xl"
        },
        spacing: "mb-2"
      },
      subtitle: {
        base: "text-[hsl(var(--flame-orange))] italic",
        size: {
          default: "text-lg",
          large: "text-xl"
        }
      },
      heading: {
        base: "font-bold font-orbitron text-[hsl(var(--electric-green))]",
        size: {
          default: "text-4xl",
          large: "text-6xl"
        },
        spacing: "mb-6"
      }
    }
  }
} as const;

export const PROCESS_ANIMATIONS = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
} as const;

export const PROCESS_LAYOUT = {
  section: "relative py-32 overflow-hidden",
  container: "container px-4 mx-auto relative",
  header: "text-center mb-24",
  grid: {
    container: "flex flex-col gap-8",
    twoColumns: "grid grid-cols-1 md:grid-cols-2 gap-8"
  }
} as const;