import React from 'react';
import { NeonGlassIcon } from '../neon-glass/NeonGlassIcon';
import type { NeonGlassIconProps } from '../neon-glass/types';

/**
 * CloseIcon - Bronze-tier standard close/dismiss icon
 * 
 * Provenance: Standard X design
 * Tier: Bronze - Essential UI control
 * Usage: Modal closes, dismissals, cancellations
 */

export const CloseIcon: React.FC<Omit<NeonGlassIconProps, 'children' | 'tier'>> = ({ 
  size = 'sm',
  variant = 'minimal',
  interactive = true,
  animated = false,
  'aria-label': ariaLabel = 'Close',
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
        {/* X mark */}
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </NeonGlassIcon>
  );
};