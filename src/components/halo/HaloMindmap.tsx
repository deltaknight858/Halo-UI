"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const haloMindmapVariants = cva(
  "relative flex items-center justify-center min-h-[400px] w-full",
  {
    variants: {
      variant: {
        default: "bg-[rgba(var(--halo-bg-elev),0.5)] rounded-lg border border-[rgba(var(--halo-fg),0.1)]",
        glass: "halo-glass rounded-lg border border-[rgba(var(--halo-fg),0.2)]",
        minimal: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface HaloMindmapNode {
  id: string;
  label: string;
  children?: HaloMindmapNode[];
  color?: string;
}

export interface HaloMindmapProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof haloMindmapVariants> {
  data: HaloMindmapNode;
  onNodeClick?: (node: HaloMindmapNode) => void;
}

const NodeComponent: React.FC<{
  node: HaloMindmapNode;
  level: number;
  onNodeClick?: (node: HaloMindmapNode) => void;
}> = ({ node, level, onNodeClick }) => {
  const isRoot = level === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: level * 0.1 }}
      className="flex flex-col items-center gap-4"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onNodeClick?.(node)}
        className={cn(
          "relative px-4 py-2 rounded-lg border-2 transition-all duration-200 font-medium",
          isRoot && "px-6 py-3 text-lg font-bold",
          node.color
            ? `bg-[${node.color}]/10 border-[${node.color}] text-[${node.color}]`
            : "bg-eco-purple/10 border-eco-purple text-eco-purple hover:bg-eco-purple/20",
          !isRoot && "text-sm"
        )}
      >
        {node.label}
      </motion.button>

      {node.children && node.children.length > 0 && (
        <div className={cn(
          "flex gap-6",
          isRoot ? "flex-row" : "flex-col"
        )}>
          {node.children.map((child) => (
            <div key={child.id} className="relative">
              {/* Connection line */}
              <div className={cn(
                "absolute bg-[rgba(var(--halo-fg),0.2)]",
                isRoot ? "-top-4 left-1/2 w-0.5 h-4 -translate-x-1/2" : "-left-3 top-1/2 h-0.5 w-3 -translate-y-1/2"
              )} />
              <NodeComponent
                node={child}
                level={level + 1}
                onNodeClick={onNodeClick}
              />
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const HaloMindmap = React.forwardRef<HTMLDivElement, HaloMindmapProps>(
  ({ className, variant, data, onNodeClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(haloMindmapVariants({ variant }), className)}
        {...props}
      >
        <div className="p-8">
          <NodeComponent node={data} level={0} onNodeClick={onNodeClick} />
        </div>
      </div>
    );
  }
);

HaloMindmap.displayName = "HaloMindmap";

export default HaloMindmap;
