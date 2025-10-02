import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

/**
 * Stack - Simple vertical or horizontal stack with gap and optional divider
 * Part of Phase 3 primitives
 */

const stackVariants = cva('relative flex', {
  variants: {
    direction: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
    gap: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
    },
    divider: {
      none: '',
      subtle: 'divide-y divide-halo-border/60 data-[dir=horizontal]:divide-y-0 data-[dir=horizontal]:divide-x',
    }
  },
  defaultVariants: {
    direction: 'vertical',
    gap: 'md',
    align: 'stretch',
    justify: 'start',
    divider: 'none',
  }
});

export interface StackProps extends React.ComponentPropsWithoutRef<'div'>, VariantProps<typeof stackVariants> {
  as?: React.ElementType;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(({ 
  as: Component = 'div',
  className,
  direction,
  gap,
  align,
  justify,
  divider,
  children,
  ...props
}, ref) => {
  const Comp = Component as React.ElementType;
  return (
    <Comp
      ref={ref}
      data-dir={direction === 'horizontal' ? 'horizontal' : 'vertical'}
      className={cn(stackVariants({ direction, gap, align, justify, divider }), className)}
      {...props}
    >
      {children}
    </Comp>
  );
});

Stack.displayName = 'Stack';

export { stackVariants };
