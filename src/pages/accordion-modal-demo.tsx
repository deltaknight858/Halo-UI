import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HaloAccordion,
  HaloModal,
  HaloCard,
  HaloButton,
  HaloBadge,
  ThemeToggle
} from "@/components/halo";
import ThemeLayout from "@/components/layout/ThemeLayout";
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Users, 
  Code, 
  Layers,
  Rocket,
  Settings,
  HelpCircle
} from "lucide-react";

export default function AccordionModalDemo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [largeModalOpen, setLargeModalOpen] = useState(false);

  // Accordion items for different variants
  const accordionItems = [
    {
      id: "item-1",
      title: "What is Halo UI?",
      content: (
        <div className="space-y-3">
          <p>
            Halo UI is a cutting-edge design system featuring glassmorphism and neon aesthetics. 
            It combines modern UI patterns with cinematic visual effects powered by Eco design tokens.
          </p>
          <div className="flex gap-2">
            <HaloBadge variant="primary" size="sm">Design System</HaloBadge>
            <HaloBadge variant="secondary" size="sm">Glassmorphism</HaloBadge>
            <HaloBadge variant="tertiary" size="sm">Framer Motion</HaloBadge>
          </div>
        </div>
      ),
    },
    {
      id: "item-2",
      title: "Key Features",
      content: (
        <div className="space-y-3">
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Sparkles size={16} className="text-[rgb(var(--halo-primary))]" />
              <span>Glassmorphism effects with backdrop blur</span>
            </li>
            <li className="flex items-center gap-2">
              <Zap size={16} className="text-[rgb(var(--halo-secondary))]" />
              <span>Smooth animations powered by Framer Motion</span>
            </li>
            <li className="flex items-center gap-2">
              <Shield size={16} className="text-[rgb(var(--halo-tertiary))]" />
              <span>Accessible components with ARIA support</span>
            </li>
            <li className="flex items-center gap-2">
              <Users size={16} className="text-[rgb(var(--halo-primary))]" />
              <span>Fully typed with TypeScript</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "item-3",
      title: "Getting Started",
      content: (
        <div className="space-y-3">
          <p>Install the package and start building beautiful interfaces:</p>
          <div className="bg-[rgba(var(--halo-fg),0.05)] rounded-halo p-4 font-mono text-sm">
            <code className="text-[rgb(var(--halo-primary))]">
              npm install @halo-ui/react
            </code>
          </div>
          <p className="text-sm">
            Import components and use them in your React application with full TypeScript support.
          </p>
        </div>
      ),
    },
    {
      id: "item-4",
      title: "Component Library",
      content: (
        <div className="space-y-3">
          <p>Comprehensive collection of UI primitives:</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 text-sm">
              <Code size={14} className="text-[rgb(var(--halo-primary))]" />
              <span>Buttons & Inputs</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Layers size={14} className="text-[rgb(var(--halo-secondary))]" />
              <span>Cards & Modals</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Rocket size={14} className="text-[rgb(var(--halo-tertiary))]" />
              <span>Tabs & Accordions</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Settings size={14} className="text-[rgb(var(--halo-primary))]" />
              <span>Forms & Controls</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const faqItems = [
    {
      id: "faq-1",
      title: "Is it accessible?",
      content: "Yes! All components follow WAI-ARIA standards and include keyboard navigation support.",
    },
    {
      id: "faq-2",
      title: "Can I customize the theme?",
      content: "Absolutely! Halo UI uses CSS custom properties for easy theming. You can override Eco tokens to match your brand.",
    },
    {
      id: "faq-3",
      title: "Does it support dark mode?",
      content: "Yes, dark mode is built-in and automatically switches based on system preferences or manual toggle.",
    },
    {
      id: "faq-4",
      title: "What about bundle size?",
      content: "The library is tree-shakeable, so you only bundle the components you use. Each component is optimized for performance.",
    },
  ];

  return (
    <ThemeLayout>
      <div className="min-h-screen halo-noise relative">
        <ThemeToggle />
        
        <div className="pt-16 pb-24 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <HaloBadge variant="primary" className="mb-4">
                <Layers size={14} className="mr-1" />
                New Primitives
              </HaloBadge>
              
              <h1 className="text-4xl font-bold text-[rgb(var(--halo-fg))] mb-4">
                Accordion & Modal Components
              </h1>
              <p className="text-lg text-[rgb(var(--halo-muted))] max-w-2xl mx-auto">
                Explore the new HaloAccordion and HaloModal components with glassmorphism effects and smooth animations.
              </p>
            </motion.div>

            {/* Accordion Variants */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8 mb-12"
            >
              <div>
                <h2 className="text-2xl font-bold text-[rgb(var(--halo-fg))] mb-2">
                  Accordion Component
                </h2>
                <p className="text-[rgb(var(--halo-muted))] mb-6">
                  Three variants with smooth animations and Eco tokens
                </p>

                <div className="grid grid-cols-1 gap-6">
                  {/* Glass Variant */}
                  <div>
                    <h3 className="text-lg font-semibold text-[rgb(var(--halo-fg))] mb-3 flex items-center gap-2">
                      <Sparkles size={18} className="text-[rgb(var(--halo-primary))]" />
                      Glass Variant
                    </h3>
                    <HaloAccordion
                      items={accordionItems}
                      variant="glass"
                      type="single"
                      defaultValue="item-1"
                    />
                  </div>

                  {/* Elevated Variant */}
                  <div>
                    <h3 className="text-lg font-semibold text-[rgb(var(--halo-fg))] mb-3 flex items-center gap-2">
                      <Layers size={18} className="text-[rgb(var(--halo-secondary))]" />
                      Elevated Variant
                    </h3>
                    <HaloAccordion
                      items={faqItems}
                      variant="elevated"
                      type="multiple"
                      defaultValue={["faq-1", "faq-3"]}
                    />
                  </div>

                  {/* Minimal Variant */}
                  <div>
                    <h3 className="text-lg font-semibold text-[rgb(var(--halo-fg))] mb-3 flex items-center gap-2">
                      <Code size={18} className="text-[rgb(var(--halo-tertiary))]" />
                      Minimal Variant
                    </h3>
                    <HaloAccordion
                      items={accordionItems.slice(0, 3)}
                      variant="minimal"
                      type="single"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Modal Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-[rgb(var(--halo-fg))] mb-2">
                  Modal Component
                </h2>
                <p className="text-[rgb(var(--halo-muted))] mb-6">
                  Enhanced modal with multiple sizes, variants, and features
                </p>

                <HaloCard variant="glass" className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <HaloButton
                        variant="primary"
                        onClick={() => setModalOpen(true)}
                        className="w-full"
                      >
                        <Sparkles size={16} className="mr-2" />
                        Basic Modal
                      </HaloButton>
                      <p className="text-xs text-[rgb(var(--halo-muted))] mt-2">
                        Simple modal with title and description
                      </p>
                    </div>

                    <div className="text-center">
                      <HaloButton
                        variant="secondary"
                        onClick={() => setConfirmModalOpen(true)}
                        className="w-full"
                      >
                        <Shield size={16} className="mr-2" />
                        Confirmation
                      </HaloButton>
                      <p className="text-xs text-[rgb(var(--halo-muted))] mt-2">
                        Modal with footer actions
                      </p>
                    </div>

                    <div className="text-center">
                      <HaloButton
                        variant="tertiary"
                        onClick={() => setLargeModalOpen(true)}
                        className="w-full"
                      >
                        <Layers size={16} className="mr-2" />
                        Large Content
                      </HaloButton>
                      <p className="text-xs text-[rgb(var(--halo-muted))] mt-2">
                        XL size with more content
                      </p>
                    </div>
                  </div>
                </HaloCard>
              </div>

              {/* Features */}
              <HaloCard variant="elevated" className="p-6">
                <h3 className="text-lg font-semibold text-[rgb(var(--halo-fg))] mb-4 flex items-center gap-2">
                  <HelpCircle size={18} className="text-[rgb(var(--halo-primary))]" />
                  Component Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-[rgb(var(--halo-fg))] mb-2">Accordion</h4>
                    <ul className="text-sm text-[rgb(var(--halo-muted))] space-y-1">
                      <li>• Single or multiple open items</li>
                      <li>• Controlled or uncontrolled state</li>
                      <li>• Smooth expand/collapse animations</li>
                      <li>• Glass, elevated, minimal variants</li>
                      <li>• Keyboard accessible</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-[rgb(var(--halo-fg))] mb-2">Modal</h4>
                    <ul className="text-sm text-[rgb(var(--halo-muted))] space-y-1">
                      <li>• Multiple size options (sm to full)</li>
                      <li>• Optional footer section</li>
                      <li>• Glass and elevated variants</li>
                      <li>• Configurable close behavior</li>
                      <li>• Backdrop blur effect</li>
                    </ul>
                  </div>
                </div>
              </HaloCard>
            </motion.div>
          </div>
        </div>

        {/* Modals */}
        <HaloModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          title="Welcome to Halo UI"
          description="This is a basic modal with title and description"
          variant="glass"
          size="md"
        >
          <div className="space-y-4">
            <p className="text-[rgb(var(--halo-muted))]">
              This modal uses the glass variant with a medium size. It includes smooth animations,
              backdrop blur, and keyboard navigation support.
            </p>
            <div className="flex gap-2">
              <HaloBadge variant="primary">Glassmorphism</HaloBadge>
              <HaloBadge variant="secondary">Animated</HaloBadge>
              <HaloBadge variant="tertiary">Accessible</HaloBadge>
            </div>
          </div>
        </HaloModal>

        <HaloModal
          open={confirmModalOpen}
          onOpenChange={setConfirmModalOpen}
          title="Confirm Action"
          description="Are you sure you want to proceed?"
          variant="elevated"
          size="sm"
          footer={
            <div className="flex justify-end gap-3">
              <HaloButton
                variant="ghost"
                onClick={() => setConfirmModalOpen(false)}
              >
                Cancel
              </HaloButton>
              <HaloButton
                variant="primary"
                onClick={() => {
                  setConfirmModalOpen(false);
                  // Handle confirmation
                }}
              >
                <Shield size={16} className="mr-2" />
                Confirm
              </HaloButton>
            </div>
          }
        >
          <div className="space-y-3">
            <p className="text-[rgb(var(--halo-muted))]">
              This modal includes a footer with action buttons. The elevated variant
              provides a solid background for better contrast.
            </p>
          </div>
        </HaloModal>

        <HaloModal
          open={largeModalOpen}
          onOpenChange={setLargeModalOpen}
          title="Large Modal Example"
          description="This modal uses the XL size for more content"
          variant="glass"
          size="xl"
          footer={
            <div className="flex justify-between items-center">
              <HaloBadge variant="success" size="sm">Pro Feature</HaloBadge>
              <HaloButton
                variant="primary"
                onClick={() => setLargeModalOpen(false)}
              >
                Got it!
              </HaloButton>
            </div>
          }
        >
          <div className="space-y-4">
            <p className="text-[rgb(var(--halo-muted))]">
              This larger modal can accommodate more complex content. It maintains the same
              smooth animations and glassmorphism effects.
            </p>
            
            <HaloCard variant="minimal" className="p-4">
              <h4 className="font-medium text-[rgb(var(--halo-fg))] mb-2">Usage Example</h4>
              <div className="bg-[rgba(var(--halo-fg),0.05)] rounded-halo p-3 font-mono text-xs overflow-x-auto">
                <pre className="text-[rgb(var(--halo-primary))]">
{`<HaloModal
  open={isOpen}
  onOpenChange={setIsOpen}
  title="Modal Title"
  size="xl"
  variant="glass"
  footer={<Actions />}
>
  <Content />
</HaloModal>`}
                </pre>
              </div>
            </HaloCard>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Sparkles, label: "Glassmorphism", colorClass: "text-[rgb(var(--halo-primary))]" },
                { icon: Zap, label: "Fast Animations", colorClass: "text-[rgb(var(--halo-secondary))]" },
                { icon: Shield, label: "Accessible", colorClass: "text-[rgb(var(--halo-tertiary))]" },
                { icon: Code, label: "TypeScript", colorClass: "text-[rgb(var(--halo-primary))]" },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-halo bg-[rgba(var(--halo-fg),0.03)] border border-[rgba(var(--halo-fg),0.1)]"
                  >
                    <IconComponent size={18} className={item.colorClass} />
                    <span className="text-sm text-[rgb(var(--halo-fg))]">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </HaloModal>
      </div>
    </ThemeLayout>
  );
}
