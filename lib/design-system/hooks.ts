import { useCallback } from 'react';
import { DESIGN_SYSTEM } from './index';

// Custom hook for accessing design tokens with type safety
export const useDesignSystem = () => {
  const getToken = useCallback(<
    T extends keyof typeof DESIGN_SYSTEM,
    K extends keyof typeof DESIGN_SYSTEM[T]
  >(
    category: T,
    token: K
  ): typeof DESIGN_SYSTEM[T][K] => {
    return DESIGN_SYSTEM[category][token];
  }, []);

  return { getToken };
};