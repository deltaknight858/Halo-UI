"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import HaloInput from "./HaloInput";
import HaloButton from "./HaloButton";

const haloRegisterFormVariants = cva(
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

export interface HaloRegisterFormProps
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit">,
    VariantProps<typeof haloRegisterFormVariants> {
  onSubmit?: (data: { name: string; email: string; password: string }) => void;
  isLoading?: boolean;
  title?: string;
}

const HaloRegisterForm = React.forwardRef<HTMLFormElement, HaloRegisterFormProps>(
  ({ className, variant, onSubmit, isLoading, title = "Register", children, ...props }, ref) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (onSubmit) {
        onSubmit({ name, email, password });
      }
    };

    return (
      <form
        ref={ref}
        className={cn(haloRegisterFormVariants({ variant }), className)}
        onSubmit={handleSubmit}
        {...props}
      >
        <h2 className="text-2xl font-bold text-center text-[rgb(var(--halo-fg))]">
          {title}
        </h2>
        <div className="flex flex-col gap-3">
          <HaloInput
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          {isLoading ? "Registering..." : "Register"}
        </HaloButton>
      </form>
    );
  }
);

HaloRegisterForm.displayName = "HaloRegisterForm";

export default HaloRegisterForm;
