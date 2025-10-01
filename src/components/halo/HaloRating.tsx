"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const haloRatingVariants = cva(
  "inline-flex items-center gap-1",
  {
    variants: {
      variant: {
        default: "text-[rgb(var(--halo-primary))]",
        gold: "text-yellow-400",
        orange: "text-eco-orange",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface HaloRatingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
    VariantProps<typeof haloRatingVariants> {
  value?: number;
  max?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
}

const HaloRating = React.forwardRef<HTMLDivElement, HaloRatingProps>(
  ({ className, variant, size, value = 0, max = 5, onChange, readonly = false, ...props }, ref) => {
    const [hoveredValue, setHoveredValue] = React.useState<number | null>(null);

    const handleClick = (rating: number) => {
      if (!readonly && onChange) {
        onChange(rating);
      }
    };

    const displayValue = hoveredValue !== null ? hoveredValue : value;

    return (
      <div
        ref={ref}
        className={cn(haloRatingVariants({ variant, size }), className)}
        {...props}
      >
        {Array.from({ length: max }, (_, i) => i + 1).map((rating) => (
          <button
            key={rating}
            type="button"
            className={cn(
              "transition-all duration-150",
              !readonly && "cursor-pointer hover:scale-110",
              readonly && "cursor-default"
            )}
            onClick={() => handleClick(rating)}
            onMouseEnter={() => !readonly && setHoveredValue(rating)}
            onMouseLeave={() => !readonly && setHoveredValue(null)}
            disabled={readonly}
          >
            <Star
              className={cn(
                "w-5 h-5 transition-all",
                rating <= displayValue ? "fill-current" : "fill-none"
              )}
            />
          </button>
        ))}
      </div>
    );
  }
);

HaloRating.displayName = "HaloRating";

export default HaloRating;
