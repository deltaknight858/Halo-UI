"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const haloStepperVariants = cva(
  "relative flex w-full",
  {
    variants: {
      variant: {
        default: "",
        glass: "",
        minimal: "",
      },
      orientation: {
        horizontal: "flex-row items-center",
        vertical: "flex-col items-start",
      },
    },
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
    },
  }
);

export interface HaloStep {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface HaloStepperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof haloStepperVariants> {
  steps: HaloStep[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
}

const HaloStepper = React.forwardRef<HTMLDivElement, HaloStepperProps>(
  ({ className, variant, orientation, steps, currentStep, onStepClick, ...props }, ref) => {
    const isHorizontal = orientation === "horizontal";

    return (
      <div
        ref={ref}
        className={cn(haloStepperVariants({ variant, orientation }), className)}
        {...props}
      >
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          const isClickable = onStepClick && (isCompleted || isActive);

          return (
            <React.Fragment key={step.id}>
              {/* Step Item */}
              <div
                className={cn(
                  "flex items-center gap-3",
                  isHorizontal ? "flex-row" : "flex-col",
                  !isHorizontal && "pb-6"
                )}
              >
                {/* Step Circle */}
                <button
                  onClick={() => isClickable && onStepClick(index)}
                  disabled={!isClickable}
                  className={cn(
                    "relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 font-semibold",
                    isCompleted && "bg-eco-orange border-eco-orange text-eco-black",
                    isActive && "bg-eco-purple border-eco-purple text-white",
                    !isCompleted && !isActive && "bg-[rgb(var(--halo-bg-elev))] border-[rgba(var(--halo-fg),0.3)] text-[rgb(var(--halo-muted))]",
                    isClickable && "cursor-pointer hover:scale-110",
                    !isClickable && "cursor-default"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : step.icon ? (
                    step.icon
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </button>

                {/* Step Content */}
                <div className={cn(
                  "flex flex-col",
                  !isHorizontal && "ml-3"
                )}>
                  <span
                    className={cn(
                      "font-semibold text-sm transition-colors duration-200",
                      isActive && "text-eco-purple",
                      isCompleted && "text-[rgb(var(--halo-fg))]",
                      !isCompleted && !isActive && "text-[rgb(var(--halo-muted))]"
                    )}
                  >
                    {step.label}
                  </span>
                  {step.description && (
                    <span className="text-xs text-[rgb(var(--halo-muted))] mt-0.5">
                      {step.description}
                    </span>
                  )}
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "transition-all duration-200",
                    isHorizontal
                      ? "flex-1 h-0.5 mx-2"
                      : "w-0.5 h-6 ml-5",
                    isCompleted
                      ? "bg-eco-orange"
                      : "bg-[rgba(var(--halo-fg),0.2)]"
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
);

HaloStepper.displayName = "HaloStepper";

export default HaloStepper;
