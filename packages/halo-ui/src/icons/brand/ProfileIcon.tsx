import React from 'react';
import { NeonGlassIcon } from '../neon-glass/NeonGlassIcon';
import type { NeonGlassIconProps } from '../neon-glass/types';

/**
 * ProfileIcon - Gold-tier brand icon for user identity
 * 
 * Provenance: Self-created original design with Eco aesthetics
 * Tier: Gold - Core user experience icon
 * Usage: Profile pages, user menus, authentication
 */

export const ProfileIcon: React.FC<Omit<NeonGlassIconProps, 'children' | 'tier'>> = ({ 
  size = 'md',
  variant = 'filled',
  interactive = true,
  animated = false,
  'aria-label': ariaLabel = 'User Profile',
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
        {/* Outer profile circle */}
        <circle
          cx="12"
          cy="12"
          r="11"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="rgba(255, 215, 0, 0.05)"
        />
        
        {/* User head/avatar */}
        <circle
          cx="12"
          cy="9"
          r="3.5"
          stroke="currentColor"
          strokeWidth="2"
          fill="rgba(255, 215, 0, 0.2)"
        />
        
        {/* User body/shoulders */}
        <path
          d="M5 20C5 16.5 8 14 12 14C16 14 19 16.5 19 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="rgba(255, 215, 0, 0.1)"
        />
        
        {/* Inner glow accent */}
        <circle
          cx="12"
          cy="9"
          r="2"
          fill="currentColor"
          opacity="0.6"
        />
        
        {/* Status indicator */}
        <circle
          cx="18"
          cy="6"
          r="2"
          fill="rgba(0, 255, 128, 0.8)"
          stroke="currentColor"
          strokeWidth="1"
        />
        
        {/* Decorative accent lines */}
        <path
          d="M7 6L9 4M17 6L15 4"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
          strokeLinecap="round"
        />
      </svg>
    </NeonGlassIcon>
  );
};