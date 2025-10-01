"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Check, Circle } from "lucide-react";

const haloTimelineVariants = cva(
  "relative flex flex-col gap-6",
  {
    variants: {
      variant: {
        default: "border-l-2 border-[rgba(var(--halo-fg),0.2)] pl-6",
        glass: "border-l-2 border-[rgba(var(--halo-primary),0.3)] pl-6",
        minimal: "pl-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface HaloTimelineItem {
  id: string;
  title: string;
  description?: string;
  date?: string;
  status?: "completed" | "active" | "pending";
  icon?: React.ReactNode;
}

export interface HaloTimelineProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof haloTimelineVariants> {
  items: HaloTimelineItem[];
}

const HaloTimeline = React.forwardRef<HTMLDivElement, HaloTimelineProps>(
  ({ className, variant, items, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(haloTimelineVariants({ variant }), className)}
        {...props}
      >
        {items.map((item, index) => {
          const isCompleted = item.status === "completed";
          const isActive = item.status === "active";
          
          return (
            <div key={item.id} className="relative">
              {/* Timeline marker */}
              <div
                className={cn(
                  "absolute -left-[1.875rem] top-1 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-200",
                  isCompleted && "bg-eco-orange border-eco-orange text-eco-black",
                  isActive && "bg-eco-purple border-eco-purple text-white",
                  !isCompleted && !isActive && "bg-[rgb(var(--halo-bg-elev))] border-[rgba(var(--halo-fg),0.3)] text-[rgb(var(--halo-muted))]"
                )}
              >
                {item.icon || (
                  isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Circle className="w-3 h-3" />
                  )
                )}
              </div>

              {/* Timeline content */}
              <div className={cn(
                "pb-6 transition-all duration-200",
                isActive && "opacity-100",
                !isActive && "opacity-70 hover:opacity-100"
              )}>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={cn(
                    "font-semibold text-[rgb(var(--halo-fg))]",
                    isActive && "text-eco-purple"
                  )}>
                    {item.title}
                  </h3>
                  {item.date && (
                    <span className="text-xs text-[rgb(var(--halo-muted))]">
                      {item.date}
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-sm text-[rgb(var(--halo-muted))]">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

HaloTimeline.displayName = "HaloTimeline";

export default HaloTimeline;
