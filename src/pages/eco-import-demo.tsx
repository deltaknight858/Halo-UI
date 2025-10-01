"use client";

import React from "react";
import {
  HaloButton,
  HaloCard,
  HaloBadge,
  HaloTabs,
  HaloInput,
  HaloSelect,
  HaloCheckbox,
  HaloSlider,
  HaloToggle,
  HaloTooltip,
  HaloProgress,
  HaloAlert,
  HaloSpinner,
  HaloAvatar,
  ThemeToggle,
  type HaloSelectOption,
} from "@eco/halo-ui";
import ThemeLayout from "@/components/layout/ThemeLayout";
import { Sparkles } from "lucide-react";

/**
 * Demo page to verify all primitives can be imported and used from @eco/halo-ui
 * This demonstrates that Eco apps can successfully use the component library
 */
export default function EcoImportDemo() {
  const [inputValue, setInputValue] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);
  const [toggleChecked, setToggleChecked] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState(50);
  const [showAlert, setShowAlert] = React.useState(true);

  const selectOptions: HaloSelectOption[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <ThemeLayout>
      <div className="min-h-screen bg-halo-bg text-halo-fg p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                <span className="halo-text-glow-primary">@eco/halo-ui</span> Import Test
              </h1>
              <p className="text-halo-muted">
                Verifying all primitives can be imported from @eco/halo-ui
              </p>
            </div>
            <div className="flex items-center gap-4">
              <HaloBadge variant="success">
                <Sparkles size={14} className="mr-1" />
                All Imports Working
              </HaloBadge>
              <ThemeToggle />
            </div>
          </div>

          {/* Alert */}
          {showAlert && (
            <HaloAlert
              variant="success"
              title="Import Success"
              description="All components are successfully imported from @eco/halo-ui"
              dismissible
              onDismiss={() => setShowAlert(false)}
            />
          )}

          {/* Component Showcase using Tabs */}
          <HaloTabs
            tabs={[
              {
                id: "button",
                label: "Buttons",
                content: (
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <HaloButton variant="primary">Primary</HaloButton>
                      <HaloButton variant="secondary">Secondary</HaloButton>
                      <HaloButton variant="tertiary">Tertiary</HaloButton>
                      <HaloButton variant="ghost">Ghost</HaloButton>
                      <HaloButton variant="glass">Glass</HaloButton>
                      <HaloButton variant="outline">Outline</HaloButton>
                    </div>
                    <div className="flex gap-3">
                      <HaloButton size="sm">Small</HaloButton>
                      <HaloButton size="default">Default</HaloButton>
                      <HaloButton size="lg">Large</HaloButton>
                      <HaloButton size="xl">Extra Large</HaloButton>
                    </div>
                    <div className="flex gap-3">
                      <HaloButton loading>Loading</HaloButton>
                      <HaloButton disabled>Disabled</HaloButton>
                    </div>
                  </div>
                ),
              },
              {
                id: "card",
                label: "Cards",
                content: (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <HaloCard variant="glass">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Glass Card</h3>
                        <p className="text-halo-muted">
                          Beautiful glassmorphism effect
                        </p>
                      </div>
                    </HaloCard>
                    <HaloCard variant="elevated" glow="primary">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Elevated Card</h3>
                        <p className="text-halo-muted">
                          With primary glow effect
                        </p>
                      </div>
                    </HaloCard>
                    <HaloCard variant="minimal" glow="secondary">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Minimal Card</h3>
                        <p className="text-halo-muted">
                          Clean and simple design
                        </p>
                      </div>
                    </HaloCard>
                  </div>
                ),
              },
              {
                id: "badge",
                label: "Badges",
                content: (
                  <div className="flex flex-wrap gap-3">
                    <HaloBadge variant="primary">Primary</HaloBadge>
                    <HaloBadge variant="secondary">Secondary</HaloBadge>
                    <HaloBadge variant="tertiary">Tertiary</HaloBadge>
                    <HaloBadge variant="success">Success</HaloBadge>
                    <HaloBadge variant="warning">Warning</HaloBadge>
                    <HaloBadge variant="destructive">Destructive</HaloBadge>
                    <HaloBadge variant="outline">Outline</HaloBadge>
                    <HaloBadge variant="ghost">Ghost</HaloBadge>
                    <HaloBadge variant="glass">Glass</HaloBadge>
                    <HaloBadge variant="primary" pulse>
                      Pulse
                    </HaloBadge>
                  </div>
                ),
              },
              {
                id: "inputs",
                label: "Inputs",
                content: (
                  <div className="space-y-6 max-w-xl">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Text Input</label>
                      <HaloInput
                        placeholder="Enter text..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Select</label>
                      <HaloSelect
                        options={selectOptions}
                        value={selectValue}
                        onChange={setSelectValue}
                        placeholder="Choose an option"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Checkbox</label>
                      <HaloCheckbox
                        checked={checkboxChecked}
                        onChange={(e) => setCheckboxChecked(e.target.checked)}
                        label="I agree to the terms"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Toggle</label>
                      <HaloToggle
                        checked={toggleChecked}
                        onChange={setToggleChecked}
                        label="Enable notifications"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Slider (Value: {sliderValue})
                      </label>
                      <HaloSlider
                        value={sliderValue}
                        onChange={setSliderValue}
                        max={100}
                        step={1}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Progress</label>
                      <HaloProgress value={sliderValue} />
                    </div>
                  </div>
                ),
              },
            ]}
          />

          {/* Additional Components Below Tabs */}
          <div className="space-y-6">
            <HaloCard variant="glass" glow="primary">
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Additional Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Tooltip</h3>
                    <HaloTooltip content="This is a tooltip">
                      <HaloButton variant="outline">Hover me</HaloButton>
                    </HaloTooltip>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Spinner</h3>
                    <HaloSpinner size="lg" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Avatar</h3>
                    <div className="flex gap-2">
                      <HaloAvatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
                      <HaloAvatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
                      <HaloAvatar fallback="AB" />
                    </div>
                  </div>
                </div>
              </div>
            </HaloCard>
          </div>
        </div>
      </div>
    </ThemeLayout>
  );
}
