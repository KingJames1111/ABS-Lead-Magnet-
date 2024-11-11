export const gestaltPatterns = {
  layout: {
    grid: {
      columns: 12,
      gutter: '2rem',
      margins: '1rem',
      areas: {
        hero: 'col-span-full',
        main: 'col-span-8',
        sidebar: 'col-span-4'
      }
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '2rem',
      xl: '4rem',
      sections: {
        vertical: '8rem',
        horizontal: '2rem'
      }
    },
    containers: {
      max: 'max-w-7xl',
      padding: 'px-4 md:px-8',
      center: 'mx-auto'
    }
  },
  
  components: {
    cards: {
      padding: '2rem',
      borderRadius: '1rem',
      shadow: 'shadow-xl',
      hover: {
        transform: 'hover:scale-105',
        transition: 'transition-transform duration-300'
      }
    },
    buttons: {
      padding: {
        default: 'px-8 py-4',
        large: 'px-12 py-6'
      },
      radius: 'rounded-lg',
      states: {
        hover: 'hover:bg-opacity-90',
        active: 'active:scale-95'
      }
    },
    navigation: {
      spacing: '2rem',
      alignment: 'center',
      interaction: {
        hover: 'hover:text-primary',
        active: 'text-primary font-medium'
      }
    },
    forms: {
      spacing: '1.5rem',
      layout: 'grid gap-6',
      fields: {
        padding: '1rem',
        radius: 'rounded-md'
      }
    }
  },

  iconography: {
    sizes: {
      xs: {
        height: 'h-3',
        width: 'w-3',
        usage: 'Tiny indicators, subscript icons'
      },
      sm: {
        height: 'h-4',
        width: 'w-4',
        usage: 'Small inline icons'
      },
      base: {
        height: 'h-5',
        width: 'w-5',
        usage: 'Default size, button icons'
      },
      md: {
        height: 'h-6',
        width: 'w-6',
        usage: 'Medium emphasis icons'
      },
      lg: {
        height: 'h-8',
        width: 'w-8',
        usage: 'Large feature icons'
      },
      xl: {
        height: 'h-12',
        width: 'w-12',
        usage: 'Extra large, hero section icons'
      }
    },
    arrows: {
      navigation: {
        next: {
          icon: 'ArrowRight',
          animation: 'group-hover:translate-x-1',
          transition: 'transition-transform duration-300'
        },
        previous: {
          icon: 'ArrowLeft',
          animation: 'group-hover:-translate-x-1',
          transition: 'transition-transform duration-300'
        },
        up: {
          icon: 'ArrowUp',
          animation: 'group-hover:-translate-y-1',
          transition: 'transition-transform duration-300'
        },
        down: {
          icon: 'ArrowDown',
          animation: 'group-hover:translate-y-1',
          transition: 'transition-transform duration-300'
        }
      },
      chevrons: {
        next: {
          icon: 'ChevronRight',
          animation: 'group-hover:translate-x-0.5',
          transition: 'transition-transform duration-200'
        },
        previous: {
          icon: 'ChevronLeft',
          animation: 'group-hover:-translate-x-0.5',
          transition: 'transition-transform duration-200'
        },
        up: {
          icon: 'ChevronUp',
          animation: 'group-hover:-translate-y-0.5',
          transition: 'transition-transform duration-200'
        },
        down: {
          icon: 'ChevronDown',
          animation: 'group-hover:translate-y-0.5',
          transition: 'transition-transform duration-200'
        }
      },
      curved: {
        upRight: {
          icon: 'ArrowUpRight',
          animation: 'group-hover:translate-x-1 group-hover:-translate-y-1',
          transition: 'transition-transform duration-300'
        },
        downRight: {
          icon: 'ArrowDownRight',
          animation: 'group-hover:translate-x-1 group-hover:translate-y-1',
          transition: 'transition-transform duration-300'
        }
      },
      decorative: {
        long: {
          icon: 'ArrowRightLong',
          animation: 'group-hover:translate-x-2',
          transition: 'transition-transform duration-500'
        },
        curved: {
          icon: 'ArrowRightCurved',
          animation: 'group-hover:translate-x-2 group-hover:-translate-y-1',
          transition: 'transition-all duration-500'
        }
      }
    },
    alignment: {
      withText: {
        spacing: 'ml-2',
        vertical: 'align-middle'
      },
      button: {
        left: 'mr-2',
        right: 'ml-2',
        vertical: 'align-middle'
      }
    },
    states: {
      default: 'text-current',
      hover: 'text-primary',
      active: 'text-primary-dark',
      disabled: 'text-gray-300'
    }
  },

  animation: {
    transitions: {
      default: '300ms ease-in-out',
      fast: '150ms ease-in-out',
      slow: '500ms ease-in-out'
    },
    transforms: {
      hover: 'scale(1.05)',
      active: 'scale(0.95)',
      slide: 'translateY(-0.5rem)'
    },
    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      slideUp: {
        from: { transform: 'translateY(1rem)' },
        to: { transform: 'translateY(0)' }
      }
    }
  },

  effects: {
    shadows: {
      sm: '0 2px 4px rgba(0,0,0,0.1)',
      md: '0 4px 6px rgba(0,0,0,0.1)',
      lg: '0 10px 15px rgba(0,0,0,0.1)'
    },
    gradients: {
      primary: 'from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))]',
      secondary: 'from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--royal-purple-light))]',
      overlay: 'from-black/50 to-transparent'
    },
    blur: {
      backdrop: 'backdrop-blur-lg',
      overlay: 'backdrop-blur-sm'
    }
  },

  responsive: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    containers: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  }
} as const;

// Make patterns immutable
Object.freeze(gestaltPatterns);