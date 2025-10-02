import React from 'react';
import { NeonGlassIcon } from '../neon-glass/NeonGlassIcon';
import type { NeonGlassIconProps } from '../neon-glass/types';

/**
 * CheckIcon - Bronze-tier standard checkmark
 * 
 * Provenance: Standard checkmark design
 * Tier: Bronze - Essential confirmation element
 * Usage: Form validation, success states, selections
 */

export const CheckIcon: React.FC<Omit<NeonGlassIconProps, 'children' | 'tier'>> = ({ 
  size = 'sm',
  variant = 'filled',
  interactive = false,
  animated = true,
  'aria-label': ariaLabel = 'Check',
  ...props 
}) => {
  return (
    <NeonGlassIcon 
      tier="bronze" 
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
        {/* Checkmark */}
        <path
          d="M9 12L11 14L15 10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Optional circle background */}
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="rgba(46, 160, 67, 0.1)"
          opacity="0.8"
        />
      </svg>
    </NeonGlassIcon>
  );
};