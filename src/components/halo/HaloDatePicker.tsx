"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

const haloDatePickerVariants = cva(
  "flex items-center gap-2 w-full rounded-lg border px-3 py-2 text-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-[rgba(var(--halo-primary),0.3)]",
  {
    variants: {
      variant: {
        default: "bg-[rgba(var(--halo-bg-elev),0.5)] border-[rgba(var(--halo-fg),0.2)]",
        glass: "halo-glass border-[rgba(var(--halo-fg),0.3)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface HaloDatePickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">,
    VariantProps<typeof haloDatePickerVariants> {
  label?: string;
}

const HaloDatePicker = React.forwardRef<HTMLInputElement, HaloDatePickerProps>(
  ({ className, variant, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-[rgb(var(--halo-fg))]">
            {label}
          </label>
        )}
        <div className={cn(haloDatePickerVariants({ variant }), className)}>
          <Calendar className="w-4 h-4 text-[rgb(var(--halo-muted))]" />
          <input
            ref={ref}
            type="date"
            className="flex-1 bg-transparent border-none outline-none text-[rgb(var(--halo-fg))]"
            {...props}
          />
        </div>
      </div>
    );
  }
);

HaloDatePicker.displayName = "HaloDatePicker";

export default HaloDatePicker;
