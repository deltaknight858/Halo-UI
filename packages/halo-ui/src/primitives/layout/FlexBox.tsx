import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

/**
 * FlexBox - Advanced layout primitive with neon-glass styling
 * 
 * Tier: Primitive - Foundation layout system
 * Features: Responsive design, glass morphism, advanced flex controls
 */

const flexBoxVariants = cva(
  'relative flex transition-all duration-200',
  {
    variants: {
      direction: {
        row: 'flex-row',
        column: 'flex-col',
        'row-reverse': 'flex-row-reverse',
        'column-reverse': 'flex-col-reverse',
      },
      justify: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      },
      align: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
        baseline: 'items-baseline',
      },
      wrap: {
        nowrap: 'flex-nowrap',
        wrap: 'flex-wrap',
        'wrap-reverse': 'flex-wrap-reverse',
      },
      gap: {
        none: 'gap-0',
        xs: 'gap-1',
        sm: 'gap-2',
        md: 'gap-4',
        lg: 'gap-6',
        xl: 'gap-8',
        '2xl': 'gap-12',
      },
      variant: {
        default: '',
        glass: [
          'backdrop-blur-sm bg-white/5 dark:bg-black/5',
          'border border-white/10 dark:border-white/10',
          'shadow-lg shadow-black/5',
        ],
        elevated: [
          'bg-white dark:bg-gray-950',
          'border border-gray-200 dark:border-gray-800',
          'shadow-xl shadow-black/10',
        ],
        neon: [
          'bg-gradient-to-br from-halo-primary/5 to-halo-secondary/5',
          'border border-halo-primary/20',
          'shadow-lg shadow-halo-primary/10',
        ],
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        full: 'rounded-full',
      },
      padding: {
        none: 'p-0',
        xs: 'p-1',
        sm: 'p-2',
        md: 'p-4',
        lg: 'p-6',
        xl: 'p-8',
        '2xl': 'p-12',
      },
    },
    defaultVariants: {
      direction: 'row',
      justify: 'start',
      align: 'start',
      wrap: 'nowrap',
      gap: 'md',
      variant: 'default',
      rounded: 'lg',
      padding: 'none',
    },
  }
);

interface FlexBoxProps 
  extends React.ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof flexBoxVariants> {
  as?: React.ElementType;
  responsive?: {
    sm?: Partial<VariantProps<typeof flexBoxVariants>>;
    md?: Partial<VariantProps<typeof flexBoxVariants>>;
    lg?: Partial<VariantProps<typeof flexBoxVariants>>;
    xl?: Partial<VariantProps<typeof flexBoxVariants>>;
  };
}

export const FlexBox = React.forwardRef<HTMLDivElement, FlexBoxProps>(
  ({ 
    className, 
    direction,
    justify,
    align,
    wrap,
    gap,
    variant,
    rounded,
    padding,
    as: Component = 'div',
    responsive,
    children,
    ...props 
  }, ref) => {
    // Map of single-variant classnames for responsive overrides
    const variantClassMap: Record<string, Record<string, string>> = {
      direction: {
        row: 'flex-row',
        column: 'flex-col',
        'row-reverse': 'flex-row-reverse',
        'column-reverse': 'flex-col-reverse',
      },
      justify: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      },
      align: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
        baseline: 'items-baseline',
      },
      wrap: {
        nowrap: 'flex-nowrap',
        wrap: 'flex-wrap',
        'wrap-reverse': 'flex-wrap-reverse',
      },
      gap: {
        none: 'gap-0',
        xs: 'gap-1',
        sm: 'gap-2',
        md: 'gap-4',
        lg: 'gap-6',
        xl: 'gap-8',
        '2xl': 'gap-12',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        full: 'rounded-full',
      },
      padding: {
        none: 'p-0',
        xs: 'p-1',
        sm: 'p-2',
        md: 'p-4',
        lg: 'p-6',
        xl: 'p-8',
        '2xl': 'p-12',
      },
      // variant is intentionally excluded from responsive overrides here to avoid duplicating multi-class arrays
    };
    // Generate responsive classes
    const getResponsiveClasses = () => {
      if (!responsive) return '';

  const classes: string[] = [];

      const breakpoints = ['sm', 'md', 'lg', 'xl'] as const;
      breakpoints.forEach(bp => {
        const bpProps = responsive[bp];
        if (bpProps) {
          Object.entries(bpProps).forEach(([key, value]) => {
            if (value) {
              const map = variantClassMap[key as keyof typeof variantClassMap] as Record<string, string> | undefined;
              const cls = map ? map[value as string] : undefined;
              if (cls) classes.push(`${bp}:${cls}`);
            }
          });
        }
      });

      return classes.join(' ');
    };

    const Comp = Component as React.ElementType;

    return (
      <Comp
        ref={ref}
        className={cn(
          flexBoxVariants({
            direction: direction as VariantProps<typeof flexBoxVariants>['direction'],
            justify: justify as VariantProps<typeof flexBoxVariants>['justify'],
            align: align as VariantProps<typeof flexBoxVariants>['align'],
            wrap: wrap as VariantProps<typeof flexBoxVariants>['wrap'],
            gap: gap as VariantProps<typeof flexBoxVariants>['gap'],
            variant: variant as VariantProps<typeof flexBoxVariants>['variant'],
            rounded: rounded as VariantProps<typeof flexBoxVariants>['rounded'],
            padding: padding as VariantProps<typeof flexBoxVariants>['padding'],
          }),
          getResponsiveClasses(),
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

FlexBox.displayName = 'FlexBox';

export { flexBoxVariants, type FlexBoxProps };