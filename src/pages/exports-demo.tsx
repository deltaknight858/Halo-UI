import React, { useState } from "react";
import {
  HaloButton,
  HaloBadge,
  HaloAccordion,
  HaloModal,
  HaloCard,
  ecoTheme,
} from "@eco/halo-ui";
import { Sparkles } from "lucide-react";

/**
 * Demo page showcasing the newly exported components from @eco/halo-ui
 */
export default function ExportsDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accordionItems = [
    {
      id: "1",
      title: "✨ HaloAccordion",
      content: "Accordion component with smooth animations and glassmorphism design.",
    },
    {
      id: "2",
      title: "🪟 HaloModal",
      content: "Modal dialog with backdrop blur and responsive sizing options.",
    },
    {
      id: "3",
      title: "🎨 ecoTheme",
      content: `Theme configuration with Eco colors: ${ecoTheme.colors.purple.default}, ${ecoTheme.colors.cyan.default}, ${ecoTheme.colors.orange.default}, ${ecoTheme.colors.gold.default}`,
    },
  ];

  return (
    <div className="min-h-screen bg-[rgb(var(--halo-bg))] text-[rgb(var(--halo-fg))] p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 
            className="text-5xl font-bold"
            style={{ fontFamily: ecoTheme.fonts.heading }}
          >
            <Sparkles className="inline mr-2" />
            New Exports Demo
          </h1>
          <p 
            className="text-lg text-[rgb(var(--halo-muted))]"
            style={{ fontFamily: ecoTheme.fonts.body }}
          >
            Showcasing HaloAccordion, HaloModal, and ecoTheme from @eco/halo-ui
          </p>
          <HaloBadge variant="primary" size="lg">
            All Components Exported ✅
          </HaloBadge>
        </div>

        {/* Import Examples */}
        <HaloCard className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Import Examples</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-[rgb(var(--halo-muted))] mb-2">All components from single import:</p>
              <pre className="bg-black/20 p-4 rounded-halo-sm text-sm overflow-x-auto">
                <code>{`import {
  HaloButton,
  HaloBadge,
  HaloAccordion,
  HaloModal,
  ecoTheme
} from '@eco/halo-ui';`}</code>
              </pre>
            </div>
            <div>
              <p className="text-sm text-[rgb(var(--halo-muted))] mb-2">Or use path aliases:</p>
              <pre className="bg-black/20 p-4 rounded-halo-sm text-sm overflow-x-auto">
                <code>{`import { ecoTheme } from '@halo-ui/theme';`}</code>
              </pre>
            </div>
          </div>
        </HaloCard>

        {/* Accordion Demo */}
        <HaloCard className="p-6">
          <h2 className="text-2xl font-semibold mb-4">HaloAccordion Component</h2>
          <HaloAccordion items={accordionItems} />
        </HaloCard>

        {/* Modal Demo */}
        <HaloCard className="p-6">
          <h2 className="text-2xl font-semibold mb-4">HaloModal Component</h2>
          <div className="space-y-4">
            <p className="text-[rgb(var(--halo-muted))]">
              Click the button below to open a modal dialog with glassmorphism effect.
            </p>
            <HaloButton variant="primary" onClick={() => setIsModalOpen(true)}>
              Open Modal
            </HaloButton>
          </div>
        </HaloCard>

        {/* Theme Demo */}
        <HaloCard className="p-6">
          <h2 className="text-2xl font-semibold mb-4">ecoTheme Configuration</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">Colors</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded" style={{ backgroundColor: ecoTheme.colors.purple.default }} />
                  <span className="text-sm">Purple</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded" style={{ backgroundColor: ecoTheme.colors.cyan.default }} />
                  <span className="text-sm">Cyan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded" style={{ backgroundColor: ecoTheme.colors.orange.default }} />
                  <span className="text-sm">Orange</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded" style={{ backgroundColor: ecoTheme.colors.gold.default }} />
                  <span className="text-sm">Gold</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Fonts</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-sm text-[rgb(var(--halo-muted))]">Heading:</span>
                  <p style={{ fontFamily: ecoTheme.fonts.heading }}>Orbitron</p>
                </div>
                <div>
                  <span className="text-sm text-[rgb(var(--halo-muted))]">Body:</span>
                  <p style={{ fontFamily: ecoTheme.fonts.body }}>Inter</p>
                </div>
              </div>
            </div>
          </div>
        </HaloCard>
      </div>

      {/* Modal */}
      <HaloModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title="HaloModal Example"
        size="md"
        variant="glass"
      >
        <div className="space-y-4">
          <p>
            This modal is imported from <code className="bg-black/20 px-2 py-1 rounded">@eco/halo-ui</code>
          </p>
          <p className="text-[rgb(var(--halo-muted))]">
            It features glassmorphism design, backdrop blur, and responsive sizing.
          </p>
          <div className="flex gap-2">
            <HaloBadge variant="primary">Glassmorphism</HaloBadge>
            <HaloBadge variant="secondary">Backdrop Blur</HaloBadge>
            <HaloBadge variant="tertiary">Responsive</HaloBadge>
          </div>
          <HaloButton variant="primary" onClick={() => setIsModalOpen(false)} className="w-full">
            Close Modal
          </HaloButton>
        </div>
      </HaloModal>
    </div>
  );
}
