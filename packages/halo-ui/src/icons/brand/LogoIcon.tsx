import React from 'react';
import { NeonGlassIcon } from '../neon-glass/NeonGlassIcon';
import type { NeonGlassIconProps } from '../neon-glass/types';

/**
 * LogoIcon - Gold-tier brand icon for company identity
 * 
 * Provenance: Self-created original design
 * Tier: Gold - Brand-defining logo representation
 * Usage: Headers, splash screens, branding elements
 */

export const LogoIcon: React.FC<Omit<NeonGlassIconProps, 'children' | 'tier'>> = ({ 
  size = 'lg',
  variant = 'filled',
  interactive = false,
  animated = true,
  'aria-label': ariaLabel = 'Eco Logo',
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
        {/* Outer ring - Eco ecosystem */}
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="rgba(255, 215, 0, 0.05)"
          className="drop-shadow-sm"
        />
        
        {/* Inner hexagon - Structure and stability */}
        <path
          d="M12 4L17.5 8V16L12 20L6.5 16V8L12 4Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="rgba(255, 215, 0, 0.1)"
          strokeLinejoin="round"
        />
        
        {/* Central diamond - Core value */}
        <path
          d="M12 8L15 12L12 16L9 12Z"
          fill="currentColor"
          opacity="0.8"
          className="drop-shadow-md"
        />
        
        {/* Connecting nodes - Network effect */}
        <circle cx="12" cy="6" r="1" fill="currentColor" opacity="0.6" />
        <circle cx="12" cy="18" r="1" fill="currentColor" opacity="0.6" />
        <circle cx="6" cy="12" r="1" fill="currentColor" opacity="0.6" />
        <circle cx="18" cy="12" r="1" fill="currentColor" opacity="0.6" />
        
        {/* Orbital accent - Innovation */}
        <circle
          cx="12"
          cy="12"
          r="7"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.3"
          strokeDasharray="2 4"
          fill="none"
        />
      </svg>
    </NeonGlassIcon>
  );
};