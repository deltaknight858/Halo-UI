import React from 'react';
import { NeonGlassIcon } from '../neon-glass/NeonGlassIcon';
import type { NeonGlassIconProps } from '../neon-glass/types';

/**
 * SearchIcon - Silver-tier utility icon for search functionality
 * 
 * Provenance: Modified from standard magnifying glass design
 * Tier: Silver - High quality utility icon
 * Usage: Search inputs, filters, discovery interfaces
 */

export const SearchIcon: React.FC<Omit<NeonGlassIconProps, 'children' | 'tier'>> = ({ 
  size = 'md',
  variant = 'outline',
  interactive = true,
  animated = true,
  'aria-label': ariaLabel = 'Search',
  ...props 
}) => {
  return (
    <NeonGlassIcon 
      tier="silver" 
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
        {/* Main search circle */}
        <circle
          cx="11"
          cy="11"
          r="8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="rgba(192, 192, 192, 0.1)"
        />
        
        {/* Search handle with motion hint */}
        <path
          d="m21 21-4.35-4.35"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-sm"
        />
        
        {/* Inner glow circle for glass effect */}
        <circle
          cx="11"
          cy="11"
          r="4"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.4"
          fill="rgba(192, 192, 192, 0.05)"
        />
      </svg>
    </NeonGlassIcon>
  );
};