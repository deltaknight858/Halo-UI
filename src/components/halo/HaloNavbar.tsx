"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const haloNavbarVariants = cva(
  "flex items-center justify-between w-full px-4 py-3 backdrop-blur-lg border-b transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-[rgba(var(--halo-bg-elev),0.8)] border-[rgba(var(--halo-fg),0.1)]",
        glass: "halo-glass border-[rgba(var(--halo-fg),0.2)]",
        solid: "bg-[rgb(var(--halo-bg-elev))] border-[rgba(var(--halo-fg),0.1)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface HaloNavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof haloNavbarVariants> {}

const HaloNavbar = React.forwardRef<HTMLElement, HaloNavbarProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(haloNavbarVariants({ variant }), className)}
        {...props}
      >
        {children}
      </nav>
    );
  }
);

HaloNavbar.displayName = "HaloNavbar";

export default HaloNavbar;
