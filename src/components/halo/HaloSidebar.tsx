"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const haloSidebarVariants = cva(
  "flex flex-col h-full backdrop-blur-lg border-r transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-[rgba(var(--halo-bg-elev),0.8)] border-[rgba(var(--halo-fg),0.1)]",
        glass: "halo-glass border-[rgba(var(--halo-fg),0.2)]",
        solid: "bg-[rgb(var(--halo-bg-elev))] border-[rgba(var(--halo-fg),0.1)]",
      },
      width: {
        sm: "w-48",
        md: "w-64",
        lg: "w-80",
      },
    },
    defaultVariants: {
      variant: "default",
      width: "md",
    },
  }
);

export interface HaloSidebarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof haloSidebarVariants> {}

const HaloSidebar = React.forwardRef<HTMLElement, HaloSidebarProps>(
  ({ className, variant, width, children, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(haloSidebarVariants({ variant, width }), className)}
        {...props}
      >
        {children}
      </aside>
    );
  }
);

HaloSidebar.displayName = "HaloSidebar";

export default HaloSidebar;
