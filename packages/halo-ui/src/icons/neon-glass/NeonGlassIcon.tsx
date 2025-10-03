import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import type { NeonGlassIconProps, IconSize } from './types';

/**
 * NeonGlassIcon - Core wrapper component for the Halo UI icon system
 * 
 * Features:
 * - Provenance-aware tier system (Bronze/Silver/Gold)
 * - Cinematic neon-glass styling
 * - Interactive animations
 * - Accessibility compliant
 * - Size and variant flexibility
 */


// Responsive size mapping
const sizeMapping: Record<IconSize, { container: string; icon: string; padding: string; glow: string }> = {
  xs: { 
    container: 'w-6 h-6', 
    icon: 'w-3 h-3', 
    padding: 'p-1.5',
    glow: '0 0 8px 1px'
  },
  sm: { 
    container: 'w-8 h-8', 
    icon: 'w-4 h-4', 
    padding: 'p-2',
    glow: '0 0 10px 1px'
  },
  md: { 
    container: 'w-12 h-12', 
    icon: 'w-6 h-6', 
    padding: 'p-3',
    glow: '0 0 12px 2px'
  },
  lg: { 
    container: 'w-16 h-16', 
    icon: 'w-8 h-8', 
    padding: 'p-4',
    glow: '0 0 16px 2px'
  },
  xl: { 
    container: 'w-20 h-20', 
    icon: 'w-10 h-10', 
    padding: 'p-5',
    glow: '0 0 20px 3px'
  },
  '2xl': { 
    container: 'w-24 h-24', 
    icon: 'w-12 h-12', 
    padding: 'p-6',
    glow: '0 0 24px 3px'
  }
};

// Animation variants for interactive states
const iconAnimations = {
  idle: { 
    scale: 1, 
    rotate: 0,
    filter: 'brightness(1)'
  },
  hover: { 
    scale: 1.05, 
    rotate: 2,
    filter: 'brightness(1.1)',
    transition: { 
      type: 'spring' as const, 
      stiffness: 400, 
      damping: 10 
    }
  },
  tap: { 
    scale: 0.95, 
    rotate: -1,
    filter: 'brightness(1.2)',
    transition: { 
      type: 'spring' as const, 
      stiffness: 600, 
      damping: 15 
    }
  }
};

const glowAnimations = {
  idle: { opacity: 0.6 },
  hover: { opacity: 0.9 },
  pulse: {
    opacity: [0.6, 0.9, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut' as const
    }
  }
};

export const NeonGlassIcon: React.FC<NeonGlassIconProps> = ({
  children,
  tier,
  size = 'md',
  variant = 'filled',
  interactive = false,
  animated = false,
  className = '',
  'aria-label': ariaLabel,
  ...props
}) => {
  const sizing = sizeMapping[size];

  // Variant-specific legacy styles are now handled via CSS modules.

  return (
    <motion.div
      className={cn(
        'halo-icon',
        sizing.container,
        sizing.padding,
        interactive && 'cursor-pointer',
        // Variant classes
        variant === 'filled' && 'halo-icon--variant-filled',
        variant === 'outline' && 'halo-icon--variant-outline',
        variant === 'glass' && 'halo-icon--variant-glass',
        variant === 'minimal' && 'halo-icon--variant-minimal',
        // Tier classes (also set CSS variables)
        tier === 'bronze' && 'halo-icon--tier-bronze',
        tier === 'silver' && 'halo-icon--tier-silver',
        tier === 'gold' && 'halo-icon--tier-gold',
        // Size class for glow shape
        size === 'xs' && 'halo-icon--size-xs',
        size === 'sm' && 'halo-icon--size-sm',
        size === 'md' && 'halo-icon--size-md',
        size === 'lg' && 'halo-icon--size-lg',
        size === 'xl' && 'halo-icon--size-xl',
        size === '2xl' && 'halo-icon--size-2xl',
        className
      )}
      // preserve motion variants
      variants={interactive ? iconAnimations : undefined}
      initial="idle"
      whileHover={interactive ? "hover" : undefined}
      whileTap={interactive ? "tap" : undefined}
      role={interactive ? 'button' : 'img'}
      aria-label={ariaLabel}
      tabIndex={interactive ? 0 : undefined}
      {...props}
    >
      {/* Icon Content Container */}
      <div 
        className={cn(
          'halo-icon__content',
          sizing.icon,
          tier === 'gold' && 'halo-icon__content--accented'
        )}
      >
        {children}
      </div>

      {/* Neon Glow Effect */}
      {variant !== 'minimal' && (
        <motion.div
          className={cn('halo-icon__glow')}
          variants={glowAnimations}
          initial="idle"
          animate={animated ? "pulse" : interactive ? "idle" : "idle"}
          whileHover={interactive ? "hover" : undefined}
        />
      )}

      {/* Tier Indicator Badge */}
      {tier === 'gold' && (
        <div className={'halo-icon__tier-badge'} aria-hidden="true" />
      )}

      {/* Interactive Focus Ring */}
      {interactive && (
        <div className={cn('halo-icon__focus-ring', 'focus-within:border-current opacity-0 focus-within:opacity-50 transition-opacity')} />
      )}
    </motion.div>
  );
};

export default NeonGlassIcon;