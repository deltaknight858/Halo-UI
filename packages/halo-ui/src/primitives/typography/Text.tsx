import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

/**
 * Text - Advanced typography primitive with neon effects
 * 
 * Tier: Primitive - Foundation text system
 * Features: Responsive typography, neon effects, semantic elements
 */

const textVariants = cva(
  'transition-all duration-200',
  {
    variants: {
      variant: {
        // Display variants
        display: 'text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight',
        h1: 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
        h2: 'text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight',
        h3: 'text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight',
        h4: 'text-lg md:text-xl lg:text-2xl font-semibold tracking-tight',
        h5: 'text-base md:text-lg lg:text-xl font-medium tracking-tight',
        h6: 'text-sm md:text-base lg:text-lg font-medium tracking-tight',
        
        // Body variants
        large: 'text-lg font-normal',
        body: 'text-base font-normal',
        small: 'text-sm font-normal',
        xs: 'text-xs font-normal',
        
        // Special variants
        lead: 'text-xl font-normal leading-relaxed',
        muted: 'text-sm text-muted-foreground',
        caption: 'text-xs text-muted-foreground uppercase tracking-wide',
        code: 'text-sm font-mono bg-muted px-2 py-1 rounded-md',
        blockquote: 'text-lg italic border-l-4 border-primary pl-6',
      },
      weight: {
        thin: 'font-thin',
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
        black: 'font-black',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
      },
      color: {
        default: 'text-foreground',
        muted: 'text-muted-foreground',
        primary: 'text-primary',
        secondary: 'text-secondary',
        accent: 'text-accent-foreground',
        destructive: 'text-destructive',
        success: 'text-green-600 dark:text-green-400',
        warning: 'text-orange-600 dark:text-orange-400',
        info: 'text-blue-600 dark:text-blue-400',
      },
      glow: {
        none: '',
        subtle: 'drop-shadow-sm',
        medium: [
          'drop-shadow-md',
          'text-shadow-[0_0_10px_currentColor]',
        ],
        strong: [
          'drop-shadow-lg',
          'text-shadow-[0_0_20px_currentColor,0_0_40px_currentColor]',
        ],
        neon: [
          'drop-shadow-xl',
          'text-shadow-[0_0_5px_currentColor,0_0_10px_currentColor,0_0_20px_currentColor,0_0_40px_currentColor]',
        ],
      },
      gradient: {
        none: '',
        primary: 'bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent',
        secondary: 'bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent',
        rainbow: 'bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent',
        eco: 'bg-gradient-to-r from-halo-primary via-halo-secondary to-halo-accent bg-clip-text text-transparent',
        gold: 'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent',
      },
      truncate: {
        none: '',
        single: 'truncate',
        multiple: 'line-clamp-3',
        '2': 'line-clamp-2',
        '4': 'line-clamp-4',
        '5': 'line-clamp-5',
        '6': 'line-clamp-6',
      },
    },
    defaultVariants: {
      variant: 'body',
      weight: 'normal',
      align: 'left',
      color: 'default',
      glow: 'none',
      gradient: 'none',
      truncate: 'none',
    },
  }
);

interface TextProps 
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote' | 'code' | 'pre';
  animated?: boolean;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ 
    className, 
    variant,
    weight,
    align,
    color,
    glow,
    gradient,
    truncate,
    as,
    animated = false,
    children,
    ...props 
  }, ref) => {
    // Auto-determine semantic element based on variant
    const getComponent = () => {
      if (as) return as;
      
      switch (variant) {
        case 'display':
        case 'h1': return 'h1';
        case 'h2': return 'h2';
        case 'h3': return 'h3';
        case 'h4': return 'h4';
        case 'h5': return 'h5';
        case 'h6': return 'h6';
        case 'blockquote': return 'blockquote';
        case 'code': return 'code';
        default: return 'p';
      }
    };

    const Component = getComponent() as any;

    return (
      <Component
        ref={ref}
        className={cn(
          textVariants({ 
            variant, 
            weight, 
            align, 
            color, 
            glow, 
            gradient, 
            truncate 
          }),
          animated && 'transition-all duration-300 ease-in-out',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';

export { textVariants, type TextProps };