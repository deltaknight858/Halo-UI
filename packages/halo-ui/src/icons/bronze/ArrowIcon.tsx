import React from 'react';
import { NeonGlassIcon } from '../neon-glass/NeonGlassIcon';
import type { NeonGlassIconProps } from '../neon-glass/types';

/**
 * ArrowIcon - Bronze-tier standard navigation icon
 * 
 * Provenance: Standard directional design
 * Tier: Bronze - Functional navigation element
 * Usage: Navigation, pagination, direction indicators
 */

interface ArrowIconProps extends Omit<NeonGlassIconProps, 'children' | 'tier'> {
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({ 
  direction = 'right',
  size = 'sm',
  variant = 'minimal',
  interactive = true,
  animated = false,
  'aria-label': ariaLabel = `Arrow ${direction}`,
  ...props 
}) => {
  const getRotation = () => {
    switch (direction) {
      case 'up': return 'rotate-[-90deg]';
      case 'down': return 'rotate-90';
      case 'left': return 'rotate-180';
      case 'right': 
      default: return '';
    }
  };

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
        className={`w-full h-full ${getRotation()}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Arrow shaft */}
        <path
          d="M5 12H19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Arrow head */}
        <path
          d="M12 5L19 12L12 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </NeonGlassIcon>
  );
};