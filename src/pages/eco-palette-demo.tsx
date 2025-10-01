import React from "react";
import { HaloButton, HaloBadge, HaloCard } from "@/components/halo";

export default function EcoPaletteDemo() {
  return (
    <div className="min-h-screen bg-[rgb(var(--halo-bg))] text-[rgb(var(--halo-fg))] p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Eco Palette Demo</h1>
          <p className="text-lg text-[rgb(var(--halo-muted))]">
            Showcasing the new Eco palette with Orbitron headings and Inter body text
          </p>
        </div>

        <HaloCard className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Buttons with Eco Orange</h2>
          <div className="flex flex-wrap gap-4">
            <HaloButton variant="primary">Primary Button (Orange)</HaloButton>
            <HaloButton variant="secondary">Secondary Button</HaloButton>
            <HaloButton variant="tertiary">Tertiary Button</HaloButton>
            <HaloButton variant="ghost">Ghost Button</HaloButton>
            <HaloButton variant="glass">Glass Button</HaloButton>
            <HaloButton variant="outline">Outline Button</HaloButton>
          </div>
        </HaloCard>

        <HaloCard className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Badges with Gradient Variants</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Medal Badges (New!)</h3>
              <div className="flex flex-wrap gap-3">
                <HaloBadge variant="bronze">Bronze Tier</HaloBadge>
                <HaloBadge variant="silver">Silver Tier</HaloBadge>
                <HaloBadge variant="gold">Gold Tier</HaloBadge>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Standard Badges</h3>
              <div className="flex flex-wrap gap-3">
                <HaloBadge variant="primary">Primary</HaloBadge>
                <HaloBadge variant="secondary">Secondary</HaloBadge>
                <HaloBadge variant="tertiary">Tertiary</HaloBadge>
                <HaloBadge variant="success">Success</HaloBadge>
                <HaloBadge variant="warning">Warning</HaloBadge>
                <HaloBadge variant="destructive">Destructive</HaloBadge>
              </div>
            </div>
          </div>
        </HaloCard>

        <HaloCard className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Typography</h2>
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold">Heading 1 - Orbitron Font</h1>
              <h2 className="text-3xl font-bold">Heading 2 - Orbitron Font</h2>
              <h3 className="text-2xl font-semibold">Heading 3 - Orbitron Font</h3>
              <h4 className="text-xl font-semibold">Heading 4 - Orbitron Font</h4>
            </div>
            <div>
              <p className="text-base">
                This is body text using the Inter font. It provides excellent readability
                and a modern, clean look that pairs well with the Orbitron headings.
              </p>
              <p className="text-sm text-[rgb(var(--halo-muted))]">
                This is smaller body text, also using Inter for consistency.
              </p>
            </div>
          </div>
        </HaloCard>
      </div>
    </div>
  );
}
