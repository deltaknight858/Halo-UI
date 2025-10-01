"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface HaloAccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface HaloAccordionProps {
  items: HaloAccordionItem[];
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  variant?: "glass" | "elevated" | "minimal";
  className?: string;
}

export default function HaloAccordion({
  items,
  type = "single",
  defaultValue,
  value: controlledValue,
  onValueChange,
  variant = "glass",
  className
}: HaloAccordionProps) {
  const [internalValue, setInternalValue] = React.useState<string | string[]>(
    defaultValue || (type === "single" ? "" : [])
  );

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const isOpen = (itemId: string): boolean => {
    if (type === "single") {
      return value === itemId;
    }
    return Array.isArray(value) && value.includes(itemId);
  };

  const toggleItem = (itemId: string) => {
    let newValue: string | string[];
    
    if (type === "single") {
      newValue = value === itemId ? "" : itemId;
    } else {
      const currentArray = Array.isArray(value) ? value : [];
      newValue = currentArray.includes(itemId)
        ? currentArray.filter((id) => id !== itemId)
        : [...currentArray, itemId];
    }

    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const variantClasses = {
    glass: {
      container: "halo-glass rounded-halo",
      item: "border-b border-[rgba(var(--halo-fg),0.1)] last:border-b-0",
      trigger: "hover:bg-[rgba(var(--halo-fg),0.05)]",
      content: "bg-[rgba(var(--halo-fg),0.02)]"
    },
    elevated: {
      container: "bg-[rgb(var(--halo-bg-elev))] rounded-halo shadow-[var(--halo-shadow)] border border-[rgba(var(--halo-fg),0.1)]",
      item: "border-b border-[rgba(var(--halo-fg),0.1)] last:border-b-0",
      trigger: "hover:bg-[rgba(var(--halo-fg),0.05)]",
      content: "bg-[rgba(var(--halo-fg),0.02)]"
    },
    minimal: {
      container: "",
      item: "border-b border-[rgba(var(--halo-fg),0.15)] last:border-b-0",
      trigger: "hover:bg-[rgba(var(--halo-fg),0.03)]",
      content: ""
    }
  };

  return (
    <div
      className={cn(
        "w-full overflow-hidden",
        variantClasses[variant].container,
        className
      )}
    >
      {items.map((item) => {
        const itemIsOpen = isOpen(item.id);
        
        return (
          <div
            key={item.id}
            className={cn("relative", variantClasses[variant].item)}
          >
            <button
              className={cn(
                "flex w-full items-center justify-between px-6 py-4 text-left transition-all duration-[var(--halo-duration)] ease-[var(--halo-ease)] halo-focus-ring",
                variantClasses[variant].trigger,
                item.disabled && "opacity-50 cursor-not-allowed"
              )}
              onClick={() => !item.disabled && toggleItem(item.id)}
              disabled={item.disabled}
              aria-expanded={itemIsOpen}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-trigger-${item.id}`}
            >
              <span className="text-base font-medium text-[rgb(var(--halo-fg))]">
                {item.title}
              </span>
              
              <motion.div
                animate={{ rotate: itemIsOpen ? 180 : 0 }}
                transition={{ 
                  duration: 0.2, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="flex-shrink-0"
              >
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 transition-colors duration-[var(--halo-duration)]",
                    itemIsOpen 
                      ? "text-[rgb(var(--halo-primary))]" 
                      : "text-[rgb(var(--halo-muted))]"
                  )}
                />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {itemIsOpen && (
                <motion.div
                  id={`accordion-content-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-trigger-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: "auto", 
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1]
                      },
                      opacity: {
                        duration: 0.25,
                        delay: 0.05,
                        ease: "easeOut"
                      }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1]
                      },
                      opacity: {
                        duration: 0.2,
                        ease: "easeIn"
                      }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <div 
                    className={cn(
                      "px-6 py-4 text-[rgb(var(--halo-muted))]",
                      variantClasses[variant].content
                    )}
                  >
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ 
                        y: 0, 
                        opacity: 1,
                        transition: {
                          duration: 0.25,
                          delay: 0.1,
                          ease: "easeOut"
                        }
                      }}
                    >
                      {item.content}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
