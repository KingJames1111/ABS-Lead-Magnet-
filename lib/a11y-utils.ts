// Utility functions for accessibility
export const a11yUtils = {
  // Announce messages to screen readers
  announce: (message: string) => {
    const event = new CustomEvent('a11y-announce', { detail: message });
    window.dispatchEvent(event);
  },

  // Focus management
  focusFirst: (containerRef: React.RefObject<HTMLElement>) => {
    const focusableElements = containerRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    (focusableElements?.[0] as HTMLElement)?.focus();
  },

  // Keyboard navigation
  handleKeyboardNav: (e: KeyboardEvent, containerRef: React.RefObject<HTMLElement>) => {
    const focusableElements = containerRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements?.[0] as HTMLElement;
    const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  }
};