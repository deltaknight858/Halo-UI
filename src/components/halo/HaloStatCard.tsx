"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const haloStatCardVariants = cva(
  "relative flex flex-col gap-2 p-6 rounded-lg transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-[rgba(var(--halo-bg-elev),0.8)] border border-[rgba(var(--halo-fg),0.1)] hover:border-[rgba(var(--halo-fg),0.2)]",
        glass: "halo-glass border border-[rgba(var(--halo-fg),0.2)] hover:border-[rgba(var(--halo-fg),0.3)]",
        elevated: "bg-[rgb(var(--halo-bg-elev))] shadow-lg hover:shadow-xl",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface HaloStatCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof haloStatCardVariants> {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
}

const HaloStatCard = React.forwardRef<HTMLDivElement, HaloStatCardProps>(
  ({ className, variant, title, value, change, changeLabel, icon, footer, ...props }, ref) => {
    const getTrendIcon = () => {
      if (change === undefined || change === 0) return <Minus className="w-4 h-4" />;
      return change > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />;
    };

    const getTrendColor = () => {
      if (change === undefined || change === 0) return "text-[rgb(var(--halo-muted))]";
      return change > 0 ? "text-green-500" : "text-red-500";
    };

    return (
      <div
        ref={ref}
        className={cn(haloStatCardVariants({ variant }), className)}
        {...props}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-[rgb(var(--halo-muted))] font-medium">
              {title}
            </p>
            <h3 className="text-3xl font-bold text-[rgb(var(--halo-fg))] mt-2">
              {value}
            </h3>
          </div>
          {icon && (
            <div className="p-3 rounded-lg bg-eco-purple/10 text-eco-purple">
              {icon}
            </div>
          )}
        </div>

        {/* Trend Indicator */}
        {change !== undefined && (
          <div className={cn("flex items-center gap-1 text-sm font-medium", getTrendColor())}>
            {getTrendIcon()}
            <span>
              {Math.abs(change)}% {changeLabel || "from last period"}
            </span>
          </div>
        )}

        {/* Footer */}
        {footer && (
          <div className="mt-2 pt-3 border-t border-[rgba(var(--halo-fg),0.1)]">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

HaloStatCard.displayName = "HaloStatCard";

export default HaloStatCard;
