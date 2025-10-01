"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const haloBadgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-[rgba(var(--halo-primary),0.15)] text-[rgb(var(--halo-primary))] border-[rgba(var(--halo-primary),0.3)]",
        secondary:
          "border-transparent bg-[rgba(var(--halo-secondary),0.15)] text-[rgb(var(--halo-secondary))] border-[rgba(var(--halo-secondary),0.3)]",
        tertiary:
          "border-transparent bg-[rgba(var(--halo-tertiary),0.15)] text-[rgb(var(--halo-tertiary))] border-[rgba(var(--halo-tertiary),0.3)]",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        ghost: "bg-transparent text-[rgb(var(--halo-fg))] border border-[rgba(var(--halo-fg),0.2)]",
        glass: "halo-glass text-[rgb(var(--halo-fg))]",
        success: "border-transparent bg-emerald-500/20 text-emerald-300",
        warning: "border-transparent bg-amber-500/20 text-amber-300",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface HaloBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof haloBadgeVariants> {
  pulse?: boolean;
}

function HaloBadge({ className, variant, pulse, ...props }: HaloBadgeProps) {
  return (
    <div
      className={cn(
        haloBadgeVariants({ variant }),
        pulse && "animate-pulse",
        className
      )}
      {...props}
    />
  );
}

export default HaloBadge;
