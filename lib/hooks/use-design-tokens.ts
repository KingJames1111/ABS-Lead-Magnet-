import { useCallback } from 'react';
import { DESIGN_TOKENS } from '../core';
import type { DesignTokens } from '../core';

export function useDesignTokens() {
  const getToken = useCallback(<
    T extends keyof DesignTokens,
    K extends keyof DesignTokens[T]
  >(
    category: T,
    token: K
  ): DesignTokens[T][K] => {
    return DESIGN_TOKENS[category][token];
  }, []);

  return { getToken };
}