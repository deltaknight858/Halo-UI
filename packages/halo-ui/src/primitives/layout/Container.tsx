import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

/**
 * Container - Responsive container primitive with max-width controls
 * 
 * Tier: Primitive - Foundation container system
 * Features: Responsive breakpoints, centering, neon-glass variants
 */

const containerVariants = cva(
  'relative mx-auto transition-all duration-200',
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl',
        '6xl': 'max-w-6xl',
        '7xl': 'max-w-7xl',
        full: 'max-w-full',
        screen: 'max-w-screen-2xl',
        responsive: 'max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl',
      },
      padding: {
        none: 'px-0',
        xs: 'px-2',
        sm: 'px-4',
        md: 'px-6',
        lg: 'px-8',
        xl: 'px-12',
        '2xl': 'px-16',
      },
      variant: {
        default: '',
        glass: [
          'backdrop-blur-lg bg-white/10 dark:bg-black/10',
          'border border-white/20 dark:border-white/20',
          'shadow-2xl shadow-black/10',
          'rounded-2xl',
        ],
        elevated: [
          'bg-white dark:bg-gray-950',
          'border border-gray-200 dark:border-gray-800',
          'shadow-2xl shadow-black/25',
          'rounded-xl',
        ],
        neon: [
          'bg-gradient-to-br from-halo-primary/10 to-halo-secondary/10',
          'border border-halo-primary/30',
          'shadow-2xl shadow-halo-primary/20',
          'rounded-2xl',
        ],
        fluid: [
          'bg-gradient-to-r from-transparent via-white/5 to-transparent',
          'border-y border-white/10',
        ],
      },
      center: {
        true: 'mx-auto',
        false: '',
      },
    },
    defaultVariants: {
      size: 'responsive',
      padding: 'md',
      variant: 'default',
      center: true,
    },
  }
);

interface ContainerProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: keyof JSX.IntrinsicElements;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ 
    className, 
    size,
    padding,
    variant,
    center,
    as: Component = 'div',
    children,
    ...props 
  }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          containerVariants({ 
            size, 
            padding, 
            variant, 
            center 
          }),
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

export { containerVariants, type ContainerProps };