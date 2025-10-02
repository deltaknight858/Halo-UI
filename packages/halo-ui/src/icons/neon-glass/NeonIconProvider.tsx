import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import type { ProvenanceTier } from './types';

/**
 * NeonIconProvider - Context provider for neon-glass icon theming
 * Allows for app-wide icon configuration and theme consistency
 * Enhanced with dynamic theming and performance optimization
 */

interface NeonIconContextType {
  defaultTier?: ProvenanceTier;
  animated?: boolean;
  interactive?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'filled' | 'outline' | 'minimal' | 'glass';
  theme?: 'light' | 'dark' | 'auto';
  performanceMode?: 'optimal' | 'minimal';
  animationDuration?: number;
}

interface NeonIconProviderProps extends NeonIconContextType {
  children: ReactNode;
}

const NeonIconContext = createContext<NeonIconContextType>({});

export const useNeonIconContext = () => {
  return useContext(NeonIconContext);
};

export const NeonIconProvider: React.FC<NeonIconProviderProps> = ({
  children,
  defaultTier = 'silver',
  animated = true,
  interactive = true,
  size = 'md',
  variant = 'outline',
  theme = 'auto',
  performanceMode = 'optimal',
  animationDuration = 200,
}) => {
  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    defaultTier,
    animated: performanceMode === 'minimal' ? false : animated,
    interactive,
    size,
    variant,
    theme,
    performanceMode,
    animationDuration,
  }), [
    defaultTier, 
    animated, 
    interactive, 
    size, 
    variant, 
    theme, 
    performanceMode, 
    animationDuration
  ]);

  return (
    <NeonIconContext.Provider value={contextValue}>
      {children}
    </NeonIconContext.Provider>
  );
};

export default NeonIconProvider;