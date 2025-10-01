# @eco/halo-ui

A comprehensive design system featuring glassmorphism components with neon accents. Built with React, TypeScript, and accessibility-first principles.

## Installation

This package is part of the Halo-UI monorepo. To use it in your Eco applications, import components directly from `@eco/halo-ui`.

## Usage

### Importing Components

```typescript
import {
  HaloButton,
  HaloCard,
  HaloBadge,
  HaloInput,
  HaloTabs,
  // ... and more
} from "@eco/halo-ui";
```

### Available Components

#### Core Primitives

- **HaloButton** - Versatile button component with multiple variants and sizes
- **HaloCard** - Card component with glassmorphism effects
- **HaloBadge** - Badge/tag component for status indicators
- **HaloTabs** - Tab navigation component

#### Input Components

- **HaloInput** - Text input with validation support
- **HaloTextarea** - Multi-line text input
- **HaloSelect** - Dropdown select component
- **HaloCheckbox** - Checkbox with custom styling
- **HaloSlider** - Range slider component
- **HaloToggle** - Toggle/switch component

#### Specialized Inputs

- **ApiKeyInput** - Secure API key input with validation
- **PromptInput** - AI prompt input with enhanced features

#### Feedback Components

- **HaloDialog** - Modal dialog component
- **HaloTooltip** - Tooltip for additional context
- **HaloProgress** - Progress bar component
- **HaloAlert** - Alert/notification banner
- **HaloSpinner** - Loading spinner

#### Layout & Display

- **HaloAvatar** - User avatar component
- **HaloErrorBoundary** - Error boundary for graceful error handling
- **HaloErrorBoundaryProvider** - Context provider for error boundaries

#### Navigation

- **GlobalBottomNavBar** - Bottom navigation bar
- **CommandCenter** - Command palette component
- **ThemeToggle** - Theme switcher component

#### Complex Components

- **ChatInterface** - Complete chat UI component
- **StepWizard** - Multi-step wizard/form component

## Example Usage

### Basic Button

```tsx
import { HaloButton } from "@eco/halo-ui";

function MyComponent() {
  return (
    <HaloButton variant="primary" size="lg">
      Click Me
    </HaloButton>
  );
}
```

### Card with Content

```tsx
import { HaloCard } from "@eco/halo-ui";

function MyComponent() {
  return (
    <HaloCard variant="glass" glow="primary">
      <h2>Card Title</h2>
      <p>Card content goes here</p>
    </HaloCard>
  );
}
```

### Form with Inputs

```tsx
import { HaloInput, HaloSelect, HaloCheckbox } from "@eco/halo-ui";

function MyForm() {
  return (
    <form>
      <HaloInput 
        placeholder="Enter your name"
        label="Name"
      />
      
      <HaloSelect
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" }
        ]}
        placeholder="Choose an option"
      />
      
      <HaloCheckbox
        label="I agree to the terms"
      />
    </form>
  );
}
```

## TypeScript Support

All components are fully typed with TypeScript. Import types alongside components:

```typescript
import { 
  HaloButton, 
  type HaloButtonProps 
} from "@eco/halo-ui";
```

## Features

- 🎨 **Glassmorphism Design** - Beautiful glass-like effects
- ✨ **Neon Accents** - Eye-catching glow effects
- ♿ **Accessibility First** - WCAG compliant components
- 🎭 **Dark Mode Support** - Seamless theme switching
- 📱 **Responsive** - Mobile-first design approach
- 🔧 **Customizable** - Extensive prop-based customization
- 🚀 **Tree-shakeable** - Import only what you need
- 📦 **TypeScript** - Full type safety

## Demo

Check out the live demo at `/eco-import-demo` in your local development environment to see all components in action.

## Contributing

This package is part of the Halo-UI design system. For contributions, please refer to the main repository guidelines.

## License

MIT
# Halo UI - Eco Theme

Eco theme package with a vibrant color palette and custom font configuration.

## Colors

The Eco theme includes four core colors, each with light, default, and dark variants:

- **Purple** 🟣 - Primary brand color (140 92 255)
- **Cyan** 🔵 - Accent color (0 216 255)
- **Orange** 🟠 - Warm accent (255 140 50)
- **Gold** 🟡 - Premium highlight (255 200 50)

## Fonts

- **Orbitron** - Futuristic sans-serif for headings
- **Inter** - Modern variable font for body text

## Usage

### Import the theme

```typescript
import { ecoTheme } from '@halo-ui/index';
```

### Use in React components

```tsx
<div style={{ 
  color: ecoTheme.colors.purple.default,
  fontFamily: ecoTheme.fonts.heading 
}}>
  Eco Purple Heading
</div>
```

### CSS Variables

All colors are available as CSS variables:

```css
.element {
  color: rgb(var(--eco-purple));
  background: rgb(var(--eco-cyan-light));
}
```

### Available CSS Variables

**Purple:**
- `--eco-purple`
- `--eco-purple-light`
- `--eco-purple-dark`

**Cyan:**
- `--eco-cyan`
- `--eco-cyan-light`
- `--eco-cyan-dark`

**Orange:**
- `--eco-orange`
- `--eco-orange-light`
- `--eco-orange-dark`

**Gold:**
- `--eco-gold`
- `--eco-gold-light`
- `--eco-gold-dark`

### Tailwind Classes

The theme is integrated with Tailwind CSS:

```tsx
<div className="text-eco-purple bg-eco-cyan font-heading">
  Styled with Eco theme
</div>
```

Available Tailwind utilities:
- Colors: `text-eco-purple`, `bg-eco-cyan`, `border-eco-orange`, etc.
- Fonts: `font-heading`, `font-body`

## Demo

Visit `/eco-theme-demo` in your application to see the full theme showcase.

## Files

- `tokens.css` - CSS variable definitions
- `theme.ts` - TypeScript theme configuration and utilities
- `index.ts` - Package entry point
