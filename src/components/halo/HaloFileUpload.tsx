"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

const haloFileUploadVariants = cva(
  "flex flex-col items-center justify-center w-full border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200 hover:border-[rgba(var(--halo-primary),0.5)]",
  {
    variants: {
      variant: {
        default: "bg-[rgba(var(--halo-bg-elev),0.5)] border-[rgba(var(--halo-fg),0.2)]",
        glass: "halo-glass border-[rgba(var(--halo-fg),0.3)]",
      },
      size: {
        sm: "h-32 p-4",
        md: "h-48 p-6",
        lg: "h-64 p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface HaloFileUploadProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof haloFileUploadVariants> {
  onFileSelect?: (files: FileList | null) => void;
  label?: string;
  description?: string;
}

const HaloFileUpload = React.forwardRef<HTMLInputElement, HaloFileUploadProps>(
  ({ className, variant, size, onFileSelect, label, description, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onFileSelect) {
        onFileSelect(e.target.files);
      }
      props.onChange?.(e);
    };

    return (
      <label className={cn(haloFileUploadVariants({ variant, size }), className)}>
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <Upload className="w-8 h-8 text-[rgb(var(--halo-muted))]" />
          {label && (
            <p className="text-sm font-medium text-[rgb(var(--halo-fg))]">
              {label}
            </p>
          )}
          {description && (
            <p className="text-xs text-[rgb(var(--halo-muted))]">
              {description}
            </p>
          )}
        </div>
        <input
          ref={ref}
          type="file"
          className="hidden"
          onChange={handleChange}
          {...props}
        />
      </label>
    );
  }
);

HaloFileUpload.displayName = "HaloFileUpload";

export default HaloFileUpload;
