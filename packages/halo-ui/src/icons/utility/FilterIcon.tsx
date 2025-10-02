import React from 'react';
import { NeonGlassIcon } from '../neon-glass/NeonGlassIcon';
import type { NeonGlassIconProps } from '../neon-glass/types';

/**
 * FilterIcon - Silver-tier utility icon for data filtering
 * 
 * Provenance: Enhanced from standard funnel design
 * Tier: Silver - Enhanced utility with glass effects
 * Usage: Data tables, search filters, content organization
 */

export const FilterIcon: React.FC<Omit<NeonGlassIconProps, 'children' | 'tier'>> = ({ 
  size = 'sm',
  variant = 'outline',
  interactive = true,
  animated = true,
  'aria-label': ariaLabel = 'Filter',
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
        {/* Filter funnel shape */}
        <path
          d="M4 6H20L16 12V18L8 20V12L4 6Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="rgba(192, 192, 192, 0.1)"
          strokeLinejoin="round"
        />
        
        {/* Filter lines/content */}
        <path
          d="M6 6H18M8 9H16M10 12H14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
        
        {/* Active filter indicator */}
        <circle
          cx="18"
          cy="4"
          r="2"
          fill="rgba(192, 192, 192, 0.8)"
          stroke="currentColor"
          strokeWidth="1"
        />
        
        {/* Flow lines */}
        <path
          d="M12 15V18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </NeonGlassIcon>
  );
};