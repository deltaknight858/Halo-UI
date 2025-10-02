import React from 'react';
import { NeonGlassIcon } from '../neon-glass/NeonGlassIcon';
import type { NeonGlassIconProps } from '../neon-glass/types';

/**
 * SettingsIcon - Gold-tier brand icon for configuration
 * 
 * Provenance: Self-created original design with Eco branding
 * Tier: Gold - Essential system control icon
 * Usage: Settings panels, configuration, system controls
 */

export const SettingsIcon: React.FC<Omit<NeonGlassIconProps, 'children' | 'tier'>> = ({ 
  size = 'md',
  variant = 'outline',
  interactive = true,
  animated = true,
  'aria-label': ariaLabel = 'Settings',
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
        {/* Main gear outer ring */}
        <path
          d="M12 1L15.09 8.26L22 9L17 14L18.18 21L12 17.27L5.82 21L7 14L2 9L8.91 8.26L12 1Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="rgba(255, 215, 0, 0.1)"
          strokeLinejoin="round"
        />
        
        {/* Inner gear mechanism */}
        <circle
          cx="12"
          cy="12"
          r="6"
          stroke="currentColor"
          strokeWidth="2"
          fill="rgba(255, 215, 0, 0.05)"
        />
        
        {/* Central hub with glow */}
        <circle 
          cx="12" 
          cy="12" 
          r="3" 
          fill="currentColor" 
          opacity="0.7"
          className="drop-shadow-lg"
        />
        
        {/* Gear teeth details */}
        <path
          d="M12 3V5M12 19V21M21 12H19M5 12H3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Diagonal gear teeth */}
        <path
          d="M18.36 5.64L17.07 6.93M6.93 17.07L5.64 18.36M18.36 18.36L17.07 17.07M6.93 6.93L5.64 5.64"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        
        {/* Central control indicator */}
        <circle cx="12" cy="12" r="1" fill="rgba(255, 215, 0, 0.9)" />
      </svg>
    </NeonGlassIcon>
  );
};