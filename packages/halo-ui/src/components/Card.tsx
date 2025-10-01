import React from "react";
import { cn } from "../lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "elevated" | "minimal";
  glow?: "primary" | "secondary" | "tertiary" | "none";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "glass", glow = "none", children, className, ...props }, ref) => {
    const baseClasses = "relative rounded-lg transition-all duration-200 ease-in-out";
    
    const variantClasses = {
      glass: "bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg",
      elevated: "bg-white shadow-xl border border-gray-200 dark:bg-gray-800 dark:border-gray-700",
      minimal: "bg-transparent border border-gray-200 dark:border-gray-700"
    };

    const glowClasses = {
      primary: "hover:shadow-[0_0_40px_rgba(255,140,50,0.2)]",
      secondary: "hover:shadow-[0_0_40px_rgba(0,216,255,0.2)]",
      tertiary: "hover:shadow-[0_0_40px_rgba(140,92,255,0.2)]",
      none: ""
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          glowClasses[glow],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };