import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import type { NeonGlassIconProps, ProvenanceTier, IconSize, IconVariant, TierColors } from './types';

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

// Tier-based color system with cinematic neon palette
const tierColors: Record<ProvenanceTier, TierColors> = {
  bronze: {
    glow: '#FF8C42',
    border: 'rgba(255, 140, 66, 0.4)',
    background: 'rgba(255, 140, 66, 0.08)',
    accent: '#FF6B1A'
  },
  silver: {
    glow: '#B8BCC8',
    border: 'rgba(184, 188, 200, 0.4)',
    background: 'rgba(184, 188, 200, 0.08)',
    accent: '#9CA3AF'
  },
  gold: {
    glow: '#FFD700',
    border: 'rgba(255, 215, 0, 0.5)',
    background: 'rgba(255, 215, 0, 0.12)',
    accent: '#FFC107'
  }
};

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
  const colors = tierColors[tier];
  const sizing = sizeMapping[size];

  // Dynamic styling based on variant
  const getVariantStyles = () => {
    const baseStyles = {
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)', // Safari support
    };

    switch (variant) {
      case 'filled':
        return {
          ...baseStyles,
          background: `linear-gradient(135deg, ${colors.background}, rgba(0,0,0,0.1))`,
          border: `1px solid ${colors.border}`,
        };
      case 'outline':
        return {
          ...baseStyles,
          background: 'rgba(0,0,0,0.1)',
          border: `2px solid ${colors.border}`,
        };
      case 'glass':
        return {
          ...baseStyles,
          background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(0,0,0,0.05))`,
          border: `1px solid ${colors.border}`,
        };
      case 'minimal':
        return {
          background: 'transparent',
          border: 'none',
        };
      default:
        return baseStyles;
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <motion.div
      className={cn(
        'relative flex items-center justify-center rounded-xl',
        'transition-all duration-200 ease-out',
        sizing.container,
        sizing.padding,
        interactive && 'cursor-pointer',
        className
      )}
      style={variantStyles}
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
          'relative z-10 flex items-center justify-center',
          sizing.icon,
          'text-foreground'
        )}
        style={{ 
          color: tier === 'gold' ? colors.accent : undefined 
        }}
      >
        {children}
      </div>

      {/* Neon Glow Effect */}
      {variant !== 'minimal' && (
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            boxShadow: `${sizing.glow} ${colors.glow}`,
          }}
          variants={glowAnimations}
          initial="idle"
          animate={animated ? "pulse" : interactive ? "idle" : "idle"}
          whileHover={interactive ? "hover" : undefined}
        />
      )}

      {/* Tier Indicator Badge */}
      {tier === 'gold' && (
        <div 
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-background shadow-lg"
          style={{ 
            backgroundColor: colors.glow,
            boxShadow: `0 0 6px ${colors.glow}`
          }}
          aria-hidden="true"
        />
      )}

      {/* Interactive Focus Ring */}
      {interactive && (
        <div 
          className="absolute inset-0 rounded-xl border-2 border-transparent focus-within:border-current opacity-0 focus-within:opacity-50 transition-opacity"
          style={{ borderColor: colors.glow }}
        />
      )}
    </motion.div>
  );
};

export default NeonGlassIcon;