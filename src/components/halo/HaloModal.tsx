"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface HaloModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  variant?: "glass" | "elevated";
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
  className?: string;
}

export default function HaloModal({
  open,
  onOpenChange,
  children,
  title,
  description,
  footer,
  size = "md",
  variant = "glass",
  closeOnOverlayClick = true,
  showCloseButton = true,
  className
}: HaloModalProps) {
  const handleEscape = React.useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onOpenChange(false);
    }
  }, [onOpenChange]);

  React.useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, handleEscape]);

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-[95vw] max-h-[95vh]"
  };

  const variantClasses = {
    glass: "halo-glass-strong shadow-[var(--halo-shadow)] border border-[rgba(var(--halo-fg),0.1)]",
    elevated: "bg-[rgb(var(--halo-bg-elev))] shadow-[var(--halo-shadow)] border border-[rgba(var(--halo-fg),0.1)]"
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => closeOnOverlayClick && onOpenChange(false)}
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className={cn(
                "relative w-full pointer-events-auto rounded-halo-lg overflow-hidden",
                sizeClasses[size],
                variantClasses[variant],
                className
              )}
              initial={{ 
                opacity: 0, 
                scale: 0.95, 
                y: 20,
                filter: "blur(4px)"
              }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                filter: "blur(0px)"
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.95, 
                y: 20,
                filter: "blur(4px)"
              }}
              transition={{ 
                duration: 0.25, 
                ease: [0.22, 1, 0.36, 1]
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? "modal-title" : undefined}
              aria-describedby={description ? "modal-description" : undefined}
            >
              {/* Close Button */}
              {showCloseButton && (
                <button
                  onClick={() => onOpenChange(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-halo-sm text-[rgb(var(--halo-muted))] hover:text-[rgb(var(--halo-fg))] hover:bg-[rgba(var(--halo-fg),0.1)] transition-all duration-[var(--halo-duration)] halo-focus-ring z-10"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              )}

              {/* Header */}
              {(title || description) && (
                <div className="px-6 pt-6 pb-4 border-b border-[rgba(var(--halo-fg),0.1)]">
                  {title && (
                    <motion.h2
                      id="modal-title"
                      className="text-xl font-semibold text-[rgb(var(--halo-fg))] mb-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                    >
                      {title}
                    </motion.h2>
                  )}

                  {description && (
                    <motion.p
                      id="modal-description"
                      className="text-sm text-[rgb(var(--halo-muted))]"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.2 }}
                    >
                      {description}
                    </motion.p>
                  )}
                </div>
              )}

              {/* Content */}
              <motion.div
                className="px-6 py-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
              >
                {children}
              </motion.div>

              {/* Footer */}
              {footer && (
                <motion.div
                  className="px-6 py-4 border-t border-[rgba(var(--halo-fg),0.1)] bg-[rgba(var(--halo-fg),0.02)]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.2 }}
                >
                  {footer}
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
