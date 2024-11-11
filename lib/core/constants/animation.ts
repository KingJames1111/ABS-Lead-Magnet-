export const ANIMATION = {
  durations: {
    fast: '150ms',
    base: '300ms',
    slow: '500ms',
  },
  curves: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
  hover: {
    scale: 'hover:scale-[1.02]',
    transition: 'transition-all duration-300',
  }
} as const;

Object.freeze(ANIMATION);