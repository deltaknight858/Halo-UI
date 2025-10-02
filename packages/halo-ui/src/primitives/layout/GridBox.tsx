import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

/**
 * GridBox - Advanced CSS Grid primitive with neon-glass styling
 * 
 * Tier: Primitive - Foundation grid system
 * Features: Responsive grids, auto-fit/fill, glass morphism effects
 */

const gridBoxVariants = cva(
  'relative grid transition-all duration-200',
  {
    variants: {
      cols: {
        '1': 'grid-cols-1',
        '2': 'grid-cols-2',
        '3': 'grid-cols-3',
        '4': 'grid-cols-4',
        '5': 'grid-cols-5',
        '6': 'grid-cols-6',
        '7': 'grid-cols-7',
        '8': 'grid-cols-8',
        '9': 'grid-cols-9',
        '10': 'grid-cols-10',
        '11': 'grid-cols-11',
        '12': 'grid-cols-12',
        'auto': 'grid-cols-[repeat(auto-fit,minmax(250px,1fr))]',
        'auto-sm': 'grid-cols-[repeat(auto-fit,minmax(200px,1fr))]',
        'auto-lg': 'grid-cols-[repeat(auto-fit,minmax(300px,1fr))]',
      },
      rows: {
        '1': 'grid-rows-1',
        '2': 'grid-rows-2',
        '3': 'grid-rows-3',
        '4': 'grid-rows-4',
        '5': 'grid-rows-5',
        '6': 'grid-rows-6',
        'auto': 'grid-rows-[repeat(auto-fit,minmax(100px,1fr))]',
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
      place: {
        start: 'place-items-start',
        center: 'place-items-center',
        end: 'place-items-end',
        stretch: 'place-items-stretch',
      },
      variant: {
        default: '',
        glass: [
          'backdrop-blur-md bg-white/5 dark:bg-black/5',
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
        masonry: [
          'columns-1 md:columns-2 lg:columns-3 xl:columns-4',
          'column-gap-4',
          'break-inside-avoid',
        ],
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
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
      cols: '1',
      gap: 'md',
      place: 'stretch',
      variant: 'default',
      rounded: 'lg',
      padding: 'none',
    },
  }
);

interface GridBoxProps 
  extends React.ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof gridBoxVariants> {
  as?: React.ElementType;
  responsive?: {
    sm?: Partial<VariantProps<typeof gridBoxVariants>>;
    md?: Partial<VariantProps<typeof gridBoxVariants>>;
    lg?: Partial<VariantProps<typeof gridBoxVariants>>;
    xl?: Partial<VariantProps<typeof gridBoxVariants>>;
  };
  areas?: string; // CSS grid-template-areas
}

export const GridBox = React.forwardRef<HTMLDivElement, GridBoxProps>(
  ({ 
    className, 
    cols,
    rows,
    gap,
    place,
    variant,
    rounded,
    padding,
    as: Component = 'div',
    responsive,
    areas,
    style,
    children,
    ...props 
  }, ref) => {
    // Map for generating responsive classes without rebuilding full variant set
    const variantClassMap: Record<string, Record<string, string>> = {
      cols: {
        '1': 'grid-cols-1', '2': 'grid-cols-2', '3': 'grid-cols-3', '4': 'grid-cols-4', '5': 'grid-cols-5', '6': 'grid-cols-6',
        '7': 'grid-cols-7', '8': 'grid-cols-8', '9': 'grid-cols-9', '10': 'grid-cols-10', '11': 'grid-cols-11', '12': 'grid-cols-12',
        'auto': 'grid-cols-[repeat(auto-fit,minmax(250px,1fr))]',
        'auto-sm': 'grid-cols-[repeat(auto-fit,minmax(200px,1fr))]',
        'auto-lg': 'grid-cols-[repeat(auto-fit,minmax(300px,1fr))]',
      },
      rows: {
        '1': 'grid-rows-1', '2': 'grid-rows-2', '3': 'grid-rows-3', '4': 'grid-rows-4', '5': 'grid-rows-5', '6': 'grid-rows-6',
        'auto': 'grid-rows-[repeat(auto-fit,minmax(100px,1fr))]'
      },
      gap: {
        none: 'gap-0', xs: 'gap-1', sm: 'gap-2', md: 'gap-4', lg: 'gap-6', xl: 'gap-8', '2xl': 'gap-12'
      },
      place: {
        start: 'place-items-start', center: 'place-items-center', end: 'place-items-end', stretch: 'place-items-stretch'
      },
      rounded: {
        none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl', '2xl': 'rounded-2xl'
      },
      padding: {
        none: 'p-0', xs: 'p-1', sm: 'p-2', md: 'p-4', lg: 'p-6', xl: 'p-8', '2xl': 'p-12'
      },
    };

    const getResponsiveClasses = () => {
      if (!responsive) return '';
      const classes: string[] = [];
      Object.entries(responsive).forEach(([breakpoint, variants]) => {
        if (variants) {
          Object.entries(variants).forEach(([key, value]) => {
            if (value) {
              const map = variantClassMap[key as keyof typeof variantClassMap] as Record<string, string> | undefined;
              const cls = map ? map[value as string] : undefined;
              if (cls) classes.push(`${breakpoint}:${cls}`);
            }
          });
        }
      });
      return classes.join(' ');
    };

    const gridStyle = areas ? { 
      gridTemplateAreas: areas,
      ...style 
    } : style;

    const Comp = Component as React.ElementType;

    return (
      <Comp
        ref={ref}
        className={cn(
          gridBoxVariants({ 
            cols, 
            rows, 
            gap, 
            place, 
            variant, 
            rounded, 
            padding 
          }),
          variant === 'masonry' ? '' : getResponsiveClasses(),
          className
        )}
        style={gridStyle}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

GridBox.displayName = 'GridBox';

export { gridBoxVariants, type GridBoxProps };