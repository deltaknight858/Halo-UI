import React from 'react';
import { NeonGlassIcon } from '../neon-glass/NeonGlassIcon';
import type { NeonGlassIconProps } from '../neon-glass/types';

/**
 * NotificationIcon - Silver-tier utility icon for alerts
 * 
 * Provenance: Enhanced bell design with eco aesthetics
 * Tier: Silver - High-quality notification system
 * Usage: Alert systems, message notifications, updates
 */

export const NotificationIcon: React.FC<Omit<NeonGlassIconProps, 'children' | 'tier'>> = ({ 
  size = 'md',
  variant = 'filled',
  interactive = true,
  animated = true,
  'aria-label': ariaLabel = 'Notifications',
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
        {/* Bell body */}
        <path
          d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="rgba(192, 192, 192, 0.15)"
          strokeLinejoin="round"
        />
        
        {/* Bell clapper */}
        <circle
          cx="12"
          cy="8"
          r="1.5"
          fill="currentColor"
          opacity="0.7"
        />
        
        {/* Sound waves */}
        <path
          d="M9 21H15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Notification badge */}
        <circle
          cx="18"
          cy="6"
          r="3"
          fill="rgba(255, 64, 64, 0.9)"
          stroke="currentColor"
          strokeWidth="1"
        />
        
        {/* Badge count indicator */}
        <circle
          cx="18"
          cy="6"
          r="1"
          fill="white"
        />
        
        {/* Sound effect lines */}
        <path
          d="M19 10C19 10 20 11 20 13M20 6C20 6 22 7 22 10"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
          strokeLinecap="round"
        />
      </svg>
    </NeonGlassIcon>
  );
};