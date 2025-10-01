"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ThumbsUp, ThumbsDown } from "lucide-react";

const haloThumbsVariants = cva(
  "inline-flex items-center gap-2",
  {
    variants: {
      variant: {
        default: "",
        glass: "halo-glass rounded-lg p-2",
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

export interface HaloThumbsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
    VariantProps<typeof haloThumbsVariants> {
  value?: "up" | "down" | null;
  onChange?: (value: "up" | "down" | null) => void;
  readonly?: boolean;
  showCount?: boolean;
  upCount?: number;
  downCount?: number;
}

const HaloThumbs = React.forwardRef<HTMLDivElement, HaloThumbsProps>(
  ({ 
    className, 
    variant, 
    size, 
    value = null, 
    onChange, 
    readonly = false,
    showCount = false,
    upCount = 0,
    downCount = 0,
    ...props 
  }, ref) => {
    const handleClick = (thumbValue: "up" | "down") => {
      if (!readonly && onChange) {
        // Toggle: if clicking the same thumb, set to null; otherwise set to the clicked value
        onChange(value === thumbValue ? null : thumbValue);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(haloThumbsVariants({ variant, size }), className)}
        {...props}
      >
        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-1 p-2 rounded-lg transition-all duration-150",
            !readonly && "cursor-pointer hover:bg-[rgba(var(--halo-fg),0.1)]",
            readonly && "cursor-default",
            value === "up" && "bg-green-500/20 text-green-400"
          )}
          onClick={() => handleClick("up")}
          disabled={readonly}
        >
          <ThumbsUp
            className={cn(
              "w-5 h-5 transition-all",
              value === "up" ? "fill-current" : "fill-none"
            )}
          />
          {showCount && <span className="text-sm">{upCount}</span>}
        </button>
        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-1 p-2 rounded-lg transition-all duration-150",
            !readonly && "cursor-pointer hover:bg-[rgba(var(--halo-fg),0.1)]",
            readonly && "cursor-default",
            value === "down" && "bg-red-500/20 text-red-400"
          )}
          onClick={() => handleClick("down")}
          disabled={readonly}
        >
          <ThumbsDown
            className={cn(
              "w-5 h-5 transition-all",
              value === "down" ? "fill-current" : "fill-none"
            )}
          />
          {showCount && <span className="text-sm">{downCount}</span>}
        </button>
      </div>
    );
  }
);

HaloThumbs.displayName = "HaloThumbs";

export default HaloThumbs;
