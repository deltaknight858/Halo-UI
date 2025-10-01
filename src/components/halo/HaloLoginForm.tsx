"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import HaloInput from "./HaloInput";
import HaloButton from "./HaloButton";

const haloLoginFormVariants = cva(
  "flex flex-col gap-4 w-full max-w-md p-6 rounded-lg backdrop-blur-lg border",
  {
    variants: {
      variant: {
        default: "bg-[rgba(var(--halo-bg-elev),0.8)] border-[rgba(var(--halo-fg),0.1)]",
        glass: "halo-glass border-[rgba(var(--halo-fg),0.2)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface HaloLoginFormProps
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit">,
    VariantProps<typeof haloLoginFormVariants> {
  onSubmit?: (data: { email: string; password: string }) => void;
  isLoading?: boolean;
  title?: string;
}

const HaloLoginForm = React.forwardRef<HTMLFormElement, HaloLoginFormProps>(
  ({ className, variant, onSubmit, isLoading, title = "Login", children, ...props }, ref) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (onSubmit) {
        onSubmit({ email, password });
      }
    };

    return (
      <form
        ref={ref}
        className={cn(haloLoginFormVariants({ variant }), className)}
        onSubmit={handleSubmit}
        {...props}
      >
        <h2 className="text-2xl font-bold text-center text-[rgb(var(--halo-fg))]">
          {title}
        </h2>
        <div className="flex flex-col gap-3">
          <HaloInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <HaloInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {children}
        <HaloButton type="submit" loading={isLoading} className="w-full">
          {isLoading ? "Logging in..." : "Login"}
        </HaloButton>
      </form>
    );
  }
);

HaloLoginForm.displayName = "HaloLoginForm";

export default HaloLoginForm;
