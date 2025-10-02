import React from 'react';
import { NeonGlassIcon } from '../neon-glass/NeonGlassIcon';
import type { NeonGlassIconProps } from '../neon-glass/types';

/**
 * MenuIcon - Bronze-tier standard hamburger menu
 * 
 * Provenance: Standard three-line design
 * Tier: Bronze - Essential navigation control
 * Usage: Mobile menus, navigation toggles, sidebar controls
 */

export const MenuIcon: React.FC<Omit<NeonGlassIconProps, 'children' | 'tier'>> = ({ 
  size = 'md',
  variant = 'minimal',
  interactive = true,
  animated = true,
  'aria-label': ariaLabel = 'Menu',
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
        {/* Three horizontal lines */}
        <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </NeonGlassIcon>
  );
};