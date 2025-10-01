/**
 * Test file to verify all Halo UI primitives can be imported from @eco/halo-ui
 * This ensures Eco apps can successfully import components via the package alias
 */

import {
  // Core Primitives
  HaloButton,
  HaloCard,
  HaloBadge,
  HaloTabs,
  
  // Input Components
  HaloInput,
  HaloTextarea,
  HaloSelect,
  HaloCheckbox,
  HaloSlider,
  HaloToggle,
  
  // Specialized Inputs
  ApiKeyInput,
  PromptInput,
  
  // Feedback Components
  HaloDialog,
  HaloTooltip,
  HaloProgress,
  HaloAlert,
  HaloSpinner,
  
  // Layout Components
  HaloAvatar,
  HaloErrorBoundary,
  HaloErrorBoundaryProvider,
  useErrorBoundaryContext,
  
  // Navigation Components
  GlobalBottomNavBar,
  CommandCenter,
  
  // Complex Components
  ChatInterface,
  StepWizard,
  ThemeToggle,
  
  // Command Registry
  commandRegistry,
  registerCommand,
  
  // Types
  type HaloButtonProps,
  type HaloCardProps,
  type HaloBadgeProps,
  type HaloTabsProps,
  type HaloTab,
  type HaloInputProps,
  type HaloTextareaProps,
  type HaloSelectProps,
  type HaloSelectOption,
  type HaloCheckboxProps,
  type HaloSliderProps,
  type HaloToggleProps,
  type ApiKeyInputProps,
  type PromptInputProps,
  type HaloDialogProps,
  type HaloTooltipProps,
  type HaloProgressProps,
  type HaloAlertProps,
  type HaloSpinnerProps,
  type HaloAvatarProps,
  type HaloErrorBoundaryProps,
  type GlobalBottomNavBarProps,
  type NavBarItem,
  type CommandCenterProps,
  type ChatInterfaceProps,
  type Message,
  type StepWizardProps,
  type StepDefinition,
  type StepComponentProps,
  type ValidationError,
  type CommandDefinition,
  type CommandGroup,
} from "@eco/halo-ui";

// Verify all exports are defined
const verifyExports = () => {
  // Components
  const components = {
    HaloButton,
    HaloCard,
    HaloBadge,
    HaloTabs,
    HaloInput,
    HaloTextarea,
    HaloSelect,
    HaloCheckbox,
    HaloSlider,
    HaloToggle,
    ApiKeyInput,
    PromptInput,
    HaloDialog,
    HaloTooltip,
    HaloProgress,
    HaloAlert,
    HaloSpinner,
    HaloAvatar,
    HaloErrorBoundary,
    HaloErrorBoundaryProvider,
    useErrorBoundaryContext,
    GlobalBottomNavBar,
    CommandCenter,
    ChatInterface,
    StepWizard,
    ThemeToggle,
  };
  
  // Utilities
  const utilities = {
    commandRegistry,
    registerCommand,
  };
  
  // Check all components are defined
  Object.entries(components).forEach(([name, component]) => {
    if (!component) {
      throw new Error(`Component ${name} is not exported from @eco/halo-ui`);
    }
  });
  
  // Check all utilities are defined
  Object.entries(utilities).forEach(([name, utility]) => {
    if (!utility) {
      throw new Error(`Utility ${name} is not exported from @eco/halo-ui`);
    }
  });
  
  console.log("✅ All exports verified successfully!");
  console.log(`✅ ${Object.keys(components).length} components exported`);
  console.log(`✅ ${Object.keys(utilities).length} utilities exported`);
  
  return true;
};

export default verifyExports;
