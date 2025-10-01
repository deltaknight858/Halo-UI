// Halo UI Design System - Component Exports
// Tree-shakeable component library with glassmorphism and neon aesthetics

// Re-export all components from the main halo components directory
export { default as HaloButton } from "../../src/components/halo/HaloButton";
export type { HaloButtonProps } from "../../src/components/halo/HaloButton";

export { default as HaloCard } from "../../src/components/halo/HaloCard";
export type { HaloCardProps } from "../../src/components/halo/HaloCard";

export { default as HaloInput } from "../../src/components/halo/HaloInput";
export type { HaloInputProps } from "../../src/components/halo/HaloInput";

export { default as ApiKeyInput } from "../../src/components/halo/ApiKeyInput";
export type { ApiKeyInputProps } from "../../src/components/halo/ApiKeyInput";

export { default as HaloTextarea } from "../../src/components/halo/HaloTextarea";
export type { HaloTextareaProps } from "../../src/components/halo/HaloTextarea";

export { default as PromptInput } from "../../src/components/halo/PromptInput";
export type { PromptInputProps } from "../../src/components/halo/PromptInput";

export { default as HaloSelect } from "../../src/components/halo/HaloSelect";
export type { HaloSelectProps, HaloSelectOption } from "../../src/components/halo/HaloSelect";

export { default as HaloDialog } from "../../src/components/halo/HaloDialog";
export type { HaloDialogProps } from "../../src/components/halo/HaloDialog";

export { default as HaloModal } from "../../src/components/halo/HaloModal";
export type { HaloModalProps } from "../../src/components/halo/HaloModal";

export { default as HaloBadge } from "../../src/components/halo/HaloBadge";
export type { HaloBadgeProps } from "../../src/components/halo/HaloBadge";

export { default as HaloTooltip } from "../../src/components/halo/HaloTooltip";
export type { HaloTooltipProps } from "../../src/components/halo/HaloTooltip";

export { default as HaloToggle } from "../../src/components/halo/HaloToggle";
export type { HaloToggleProps } from "../../src/components/halo/HaloToggle";

export { default as HaloProgress } from "../../src/components/halo/HaloProgress";
export type { HaloProgressProps } from "../../src/components/halo/HaloProgress";

export { default as HaloCheckbox } from "../../src/components/halo/HaloCheckbox";
export type { HaloCheckboxProps } from "../../src/components/halo/HaloCheckbox";

export { default as HaloSlider } from "../../src/components/halo/HaloSlider";
export type { HaloSliderProps } from "../../src/components/halo/HaloSlider";

export { default as HaloTabs } from "../../src/components/halo/HaloTabs";
export type { HaloTabsProps, HaloTab } from "../../src/components/halo/HaloTabs";

export { default as HaloAccordion } from "../../src/components/halo/HaloAccordion";
export type { HaloAccordionProps, HaloAccordionItem } from "../../src/components/halo/HaloAccordion";

export { default as HaloAlert } from "../../src/components/halo/HaloAlert";
export type { HaloAlertProps } from "../../src/components/halo/HaloAlert";

export { default as HaloSpinner } from "../../src/components/halo/HaloSpinner";
export type { HaloSpinnerProps } from "../../src/components/halo/HaloSpinner";

export { default as HaloAvatar } from "../../src/components/halo/HaloAvatar";
export type { HaloAvatarProps } from "../../src/components/halo/HaloAvatar";

export { default as HaloErrorBoundary } from "../../src/components/halo/HaloErrorBoundary";
export type { HaloErrorBoundaryProps } from "../../src/components/halo/HaloErrorBoundary";

export { default as HaloErrorBoundaryProvider, useErrorBoundaryContext } from "../../src/components/halo/HaloErrorBoundaryProvider";

export { default as GlobalBottomNavBar } from "../../src/components/halo/GlobalBottomNavBar";
export type { GlobalBottomNavBarProps, NavBarItem } from "../../src/components/halo/GlobalBottomNavBar";

export { default as CommandCenter } from "../../src/components/halo/CommandCenter";
export type { CommandCenterProps } from "../../src/components/halo/CommandCenter";

export { default as ChatInterface } from "../../src/components/halo/ChatInterface";
export type { ChatInterfaceProps, Message } from "../../src/components/halo/ChatInterface";

export { default as ThemeToggle } from "../../src/components/halo/ThemeToggle";

export { default as StepWizard } from "../../src/components/halo/StepWizard";
export type { StepWizardProps, StepDefinition, StepComponentProps, ValidationError } from "../../src/components/halo/StepWizard";

export { default as HaloNavbar } from "../../src/components/halo/HaloNavbar";
export { default as HaloSidebar } from "../../src/components/halo/HaloSidebar";
export { default as HaloFileUpload } from "../../src/components/halo/HaloFileUpload";
export { default as HaloDatePicker } from "../../src/components/halo/HaloDatePicker";
export { default as HaloLoginForm } from "../../src/components/halo/HaloLoginForm";
export { default as HaloRegisterForm } from "../../src/components/halo/HaloRegisterForm";
export { default as HaloRating } from "../../src/components/halo/HaloRating";
export { default as HaloThumbs } from "../../src/components/halo/HaloThumbs";

// Command Registry
export { commandRegistry, registerCommand } from "../../src/lib/commandRegistry";
export type { CommandDefinition, CommandGroup } from "../../src/lib/commandRegistry";
/**
 * Halo UI - Eco Theme Package
 * 
 * Export all theme configuration and tokens
 */

export { ecoTheme, ecoTokens, getEcoColor } from './theme';
export type { EcoTheme } from './theme';
