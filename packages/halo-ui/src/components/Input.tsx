import React from "react";
import { cn } from "../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "glass" | "minimal";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "default", type, ...props }, ref) => {
    const baseClasses = 
      "flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background transition-colors " +
      "file:border-0 file:bg-transparent file:text-sm file:font-medium " +
      "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 " +
      "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    const variantClasses = {
      default: "border-input bg-background",
      glass: "bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder:text-white/70",
      minimal: "border-transparent bg-transparent hover:border-input focus:border-input"
    };

    return (
      <input
        type={type}
        className={cn(
          baseClasses,
          variantClasses[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };