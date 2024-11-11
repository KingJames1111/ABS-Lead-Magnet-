export const gestaltPrinciples = {
  proximity: {
    name: 'Proximity',
    description: 'Group related elements to create visual relationships and hierarchy',
    implementation: {
      spacing: {
        related: '0.5rem',
        groups: '2rem'
      },
      layout: {
        cardGroups: 'gap-8',
        contentSections: 'space-y-12',
        formElements: 'space-y-4'
      }
    }
  },

  similarity: {
    name: 'Similarity',
    description: 'Use consistent visual patterns to establish relationships between elements',
    implementation: {
      colors: {
        primary: 'hsl(var(--flame-orange))',
        secondary: 'hsl(var(--royal-purple-light))',
        accent: 'hsl(var(--electric-green))'
      },
      typography: {
        headings: 'font-orbitron',
        body: 'font-inter'
      },
      components: {
        cards: 'rounded-xl bg-gradient-to-br',
        buttons: 'px-8 py-6 rounded-lg'
      }
    }
  },

  continuity: {
    name: 'Continuity',
    description: 'Create visual flow and direction through aligned elements',
    implementation: {
      layout: {
        grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        flow: 'flex flex-col space-y-8'
      },
      animation: {
        transitions: 'transition-all duration-300',
        transforms: 'hover:scale-105'
      }
    }
  },

  closure: {
    name: 'Closure',
    description: 'Allow users to complete visual patterns mentally',
    implementation: {
      shapes: {
        partial: 'overflow-hidden rounded-xl',
        gradient: 'bg-gradient-to-br opacity-80'
      },
      animations: {
        reveal: 'group-hover:opacity-100',
        fade: 'transition-opacity duration-300'
      }
    }
  },

  figureGround: {
    name: 'Figure/Ground',
    description: 'Create clear distinction between foreground and background elements',
    implementation: {
      contrast: {
        text: 'text-white bg-[hsl(var(--royal-purple-dark))]',
        elements: 'shadow-lg border border-white/10'
      },
      depth: {
        layers: 'relative z-10',
        backdrop: 'backdrop-blur-lg'
      }
    }
  },

  symmetry: {
    name: 'Symmetry',
    description: 'Balance visual elements to create harmony and order',
    implementation: {
      layout: {
        center: 'flex items-center justify-center',
        grid: 'grid place-items-center'
      },
      spacing: {
        even: 'p-8',
        balanced: 'mx-auto max-w-7xl'
      }
    }
  },

  commonFate: {
    name: 'Common Fate',
    description: 'Elements moving or changing together are perceived as related',
    implementation: {
      animation: {
        group: 'group-hover:translate-y-2',
        shared: 'transition-all duration-300'
      },
      interaction: {
        hover: 'hover:bg-opacity-90',
        active: 'active:scale-95'
      }
    }
  }
} as const;

// Make principles immutable
Object.freeze(gestaltPrinciples);