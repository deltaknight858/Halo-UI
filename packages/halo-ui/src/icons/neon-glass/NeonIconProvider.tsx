import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import type { ProvenanceTier } from './types';

/**
 * NeonIconProvider - Context provider for neon-glass icon theming
 * Allows for app-wide icon configuration and theme consistency
 * Enhanced with dynamic theming and performance optimization
 */

export interface NeonIconContextType {
  defaultTier?: ProvenanceTier;
  animated?: boolean;
  interactive?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'filled' | 'outline' | 'minimal' | 'glass';
  theme?: 'light' | 'dark' | 'auto';
  performanceMode?: 'optimal' | 'minimal';
  animationDuration?: number;
}

export interface NeonIconProviderProps extends NeonIconContextType {
  /** Optional preset for simplified configuration */
  themePreset?: 'default' | 'lightweight';
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
  themePreset = 'default',
}) => {
  // Apply preset defaults first, then allow explicit props to override
  const presetDefaults: NeonIconContextType = useMemo(() => {
    if (themePreset === 'lightweight') {
      return {
        defaultTier: 'silver',
        animated: false,
        interactive: false,
        size: 'sm',
        variant: 'minimal',
        theme: 'auto',
        performanceMode: 'minimal',
        animationDuration: 120,
      };
    }
    return {};
  }, [themePreset]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    defaultTier: defaultTier ?? presetDefaults.defaultTier,
    animated: (performanceMode ?? presetDefaults.performanceMode) === 'minimal' 
      ? false 
      : (animated ?? presetDefaults.animated),
    interactive: interactive ?? presetDefaults.interactive,
    size: size ?? presetDefaults.size,
    variant: variant ?? presetDefaults.variant,
    theme: theme ?? presetDefaults.theme,
    performanceMode: performanceMode ?? presetDefaults.performanceMode,
    animationDuration: animationDuration ?? presetDefaults.animationDuration,
  }), [
    defaultTier,
    animated,
    interactive,
    size,
    variant,
    theme,
    performanceMode,
    animationDuration,
    presetDefaults
  ]);

  return (
    <NeonIconContext.Provider value={contextValue}>
      {children}
    </NeonIconContext.Provider>
  );
};

export default NeonIconProvider;