export const SPACING = {
  section: {
    padding: 'py-32',
    margin: 'mb-20',
  },
  container: {
    padding: 'px-4 md:px-8',
    maxWidth: 'max-w-7xl',
  },
  card: {
    padding: 'p-8',
    gap: 'gap-8',
  }
} as const;

Object.freeze(SPACING);