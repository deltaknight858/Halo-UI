import React from 'react';
import { NeonGlassIcon } from '../neon-glass/NeonGlassIcon';
import type { NeonGlassIconProps } from '../neon-glass/types';

/**
 * HomeIcon - Gold-tier brand icon for navigation
 * 
 * Provenance: Self-created original design
 * Tier: Gold - Highest quality, brand-defining icon
 * Usage: Primary navigation, home states, dashboard entry
 */

export const HomeIcon: React.FC<Omit<NeonGlassIconProps, 'children' | 'tier'>> = ({ 
  size = 'md',
  variant = 'filled',
  interactive = true,
  animated = false,
  'aria-label': ariaLabel = 'Home',
  ...props 
}) => {
  return (
    <NeonGlassIcon 
      tier="gold" 
      size={size}
      variant={variant}
      interactive={interactive}
      animated={animated}
      aria-label={ariaLabel}
      {...props}
    >
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* House outline with neon-optimized paths */}
        <path
          d="M3 12L12 3L21 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-sm"
        />
        
        {/* House body with glass effect */}
        <path
          d="M5 12V19C5 19.55 5.45 20 6 20H18C18.55 20 19 19.55 19 19V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="rgba(255, 215, 0, 0.1)"
        />
        
        {/* Door with subtle glow */}
        <rect
          x="9"
          y="14"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="rgba(255, 215, 0, 0.2)"
        />
        
        {/* Central focal point - glowing core */}
        <circle 
          cx="12" 
          cy="16" 
          r="1.5" 
          fill="currentColor" 
          opacity="0.8"
          className="drop-shadow-md"
        />
        
        {/* Subtle accent lines for depth */}
        <path
          d="M8 12V20M16 12V20"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
          strokeLinecap="round"
        />
      </svg>
    </NeonGlassIcon>
  );
};

export default HomeIcon;