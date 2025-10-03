# 🌟 Halo UI - Neon-Glass Design System

> **A comprehensive glassmorphism component library with tier-based provenance system and cinematic neon effects**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)

---

## 🎯 **Vision**

Halo UI represents the evolution of modern web interfaces, combining **glassmorphism aesthetics** with **neon-glass effects** and a **sophisticated provenance-based tier system**. Built for the Eco ecosystem, it delivers cinematic experiences while maintaining exceptional performance and accessibility.

## ✨ **Features**

### 🏗️ **Comprehensive Component System**

- **Core Components**: Button, Card, Input, Badge with glassmorphism styling
- **Icon System**: 11+ icons across 3 tiers (Gold/Silver/Bronze)
- **Layout Primitives**: Flex, Grid, Stack, Container components
- **Typography**: Responsive text system with neon accents

### 🎨 **Neon-Glass Design Language**

- **Tier-Based Provenance**: Gold (Brand) → Silver (Enhanced) → Bronze (Standard)
- **4 Variant Styles**: Filled, Outline, Glass, Minimal
- **6 Size Options**: xs, sm, md, lg, xl, 2xl
- **Dynamic Theming**: Light/Dark/Auto with CSS variables

### ⚡ **Performance & Accessibility**

- **Tree-Shakeable**: Optimized bundle size (34KB ESM)
- **Performance Modes**: Optimal vs Minimal animation control
- **Full TypeScript**: Complete type safety and IntelliSense
- **ARIA Compliant**: Keyboard navigation and screen reader support

### 🔧 **Developer Experience**

- **Monorepo Architecture**: Organized workspace with pnpm
- **Hot Reload**: Next.js with Turbopack for instant feedback
- **Live Demos**: Interactive showcases for all components
- **Git-Based Distribution**: Private package installation via GitHub

---

## 📦 **Installation**

### **Option 1: From Git Repository (Recommended)**

```bash
npm install git+https://github.com/deltaknight858/eco-halo-ui.git
```

### **Option 2: Local Development**

```bash
# Clone the repository
git clone https://github.com/deltaknight858/Halo-UI.git
cd Halo-UI

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

---

## 🚀 **Quick Start**

### **Basic Usage**

```tsx
import { Button, Card, NeonIconProvider, HomeIcon } from '@eco/halo-ui';

function App() {
  return (
    <NeonIconProvider theme="auto" performanceMode="optimal">
      <Card variant="glass" glow="primary">
        <div className="p-6">
          <HomeIcon size="lg" variant="filled" animated />
          <h1>Welcome to Halo UI</h1>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </div>
      </Card>
    </NeonIconProvider>
  );
}
```

### **Icon System**

```tsx
// Gold Tier - Brand Icons
import { HomeIcon, LogoIcon, SettingsIcon, ProfileIcon } from '@eco/halo-ui';

// Silver Tier - Enhanced Utilities  
import { SearchIcon, FilterIcon, NotificationIcon } from '@eco/halo-ui';

// Bronze Tier - Standard Functions
import { ArrowIcon, CloseIcon, MenuIcon, CheckIcon } from '@eco/halo-ui';

<HomeIcon size="xl" variant="filled" tier="gold" animated />
<SearchIcon size="md" variant="glass" tier="silver" interactive />
<ArrowIcon size="sm" direction="right" tier="bronze" />
```

---

## 🎭 **Live Demos**

Our comprehensive demo pages showcase the full power of the Halo UI system:

### 🏠 **Development Server**

```bash
pnpm dev
# Visit http://localhost:3000
```

### 📑 **Demo Pages**

- **`/icon-system-demo`** - Phase 1 foundation showcase
- **`/icon-system-phase2-demo`** - Complete 3-tier system

---

## 🏗️ **Architecture**

### **Monorepo Structure**

```
Halo-UI/
├── packages/halo-ui/           # Core component library
│   ├── src/
│   │   ├── components/         # Core components
│   │   ├── icons/             # 3-tier icon system
│   │   │   ├── brand/         # Gold tier (4 icons)
│   │   │   ├── utility/       # Silver tier (3 icons)
│   │   │   ├── bronze/        # Bronze tier (4 icons)
│   │   │   └── neon-glass/    # Core system
│   │   └── lib/               # Utilities
│   ├── dist/                  # Built assets
│   └── package.json           # Standalone package
├── src/                       # Demo application
│   ├── components/            # Demo components
│   ├── pages/                 # Demo pages
│   └── styles/                # Global styles
└── README.md                  # This file
```

### **Tier System Hierarchy**

```
🥇 Gold Tier (Brand Icons)
├── HomeIcon       - Navigation core
├── LogoIcon       - Brand identity  
├── SettingsIcon   - Configuration
└── ProfileIcon    - User identity

🥈 Silver Tier (Enhanced Utilities)
├── SearchIcon     - Discovery system
├── FilterIcon     - Data organization
└── NotificationIcon - Alert system

🥉 Bronze Tier (Standard Functions)
├── ArrowIcon      - Directional navigation
├── CloseIcon      - Dismissal control
├── MenuIcon       - Menu toggle
└── CheckIcon      - Confirmation state
```

---

## 🎨 **Design Tokens**

### **Eco Color Palette**

```css
:root {
  /* Core Eco Colors */
  --eco-purple: #8B5CF6;
  --eco-cyan: #06B6D4;
  --eco-orange: #F59E0B;
  --eco-gold: #EAB308;
  
  /* Tier-Based Colors */
  --tier-gold: #FFD700;
  --tier-silver: #C0C0C0;
  --tier-bronze: #CD7F32;
  
  /* Glass Effects */
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --neon-glow: 0 0 20px currentColor;
}
```

### **Component Variants**

- **Filled**: Solid background with neon glow
- **Outline**: Border-based with glass accents
- **Glass**: Translucent with depth effects
- **Minimal**: Subtle presence for clean interfaces

---

## 🛠️ **Development Journey**

### **Phase 1: Foundation** ✅

- Core neon-glass wrapper system
- TypeScript architecture
- NeonIconProvider context
- HomeIcon & SearchIcon prototypes

### **Phase 2: Comprehensive Expansion** ✅

- 3-tier provenance system (Gold/Silver/Bronze)
- 11 total icons across all tiers
- Dynamic theming & performance modes
- Interactive demo showcases

### **Phase 3: Advanced Primitives** 🚧

- Layout primitives (Flex, Grid, Stack)
- Typography system with neon effects
- Animation presets & micro-interactions
- Theme extension framework

---

## 📊 **Performance Metrics**

| Metric | Value | Status |
|--------|--------|--------|
| Bundle Size (ESM) | 34.54 KB | ✅ Optimized |
| Bundle Size (CJS) | 39.29 KB | ✅ Optimized |
| Tree Shaking | Full Support | ✅ Enabled |
| TypeScript Coverage | 100% | ✅ Complete |
| Animation Performance | 60fps | ✅ Smooth |
| Build Time | ~2.4s | ✅ Fast |

---

## 📚 **Component Gallery**

### 🎨 **Core Components**

| Component | Purpose | Variants |
|-----------|---------|----------|
| Button | Primary actions | primary, secondary, tertiary, ghost, glass, outline |
| Card | Content containers | glass, elevated, minimal |
| Input | Text input fields | default, glass, minimal |
| Badge | Status indicators | default, secondary, glass, outline, destructive, eco |

### 🏗️ **Layout Primitives**

| Component | Purpose | Features |
|-----------|---------|----------|
| Flex | Flexbox layouts | Direction, wrap, alignment, gap |
| Grid | CSS Grid layouts | Columns, rows, responsive breakpoints |
| Stack | Vertical/horizontal stacking | Spacing, alignment, responsive |
| Container | Page containers | Max-width, padding, centering |

### ⚡ **Advanced Components**

| Component | Purpose | Features |
|-----------|---------|----------|
| StepWizard | Multi-step flows | Progress, validation, skipping |
| CommandCenter | Command palette | Search, registry, keyboard nav |
| ChatInterface | Conversational UI | Messages, typing, avatars |
| HaloNavbar | Navigation bars | Glass/solid variants, responsive |
| HaloSidebar | Side navigation | Collapsible, overlay modes |

### 📊 **Visualization**

| Component | Purpose | Features |
|-----------|---------|----------|
| HaloTimeline | Step sequences | Completed states, descriptions |
| HaloMindmap | Node graphs | Interactive, zoomable |
| HaloMediaPlayer | Audio/video | Playlists, controls, responsive |
| HaloProgress | Progress indicators | Circular, linear, animated |

---

## 🤝 **Contributing**

### **Development Setup**

```bash
# Clone and setup
git clone https://github.com/deltaknight858/Halo-UI.git
cd Halo-UI
pnpm install

# Development workflow
pnpm dev          # Start demo server
pnpm build        # Build library
pnpm type-check   # TypeScript validation
```

### **Creating New Components**

1. **Follow tier-based architecture** for icons
2. **Use neon-glass wrapper** for consistency
3. **Include TypeScript definitions** with full exports
4. **Add demo page** showcasing variants
5. **Document provenance** and usage patterns

---

## 📜 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 **Acknowledgments**

- **Glassmorphism Inspiration**: Modern UI trends and Apple's design language
- **Neon Aesthetics**: Cyberpunk and futuristic design movements
- **Tier System**: Video game progression and rarity systems
- **Performance Focus**: React ecosystem best practices

---

## 🔗 **Links**

- **Live Demo**: [localhost:3000](http://localhost:3000) (when running locally)
- **Component Showcase**: `/icon-system-phase2-demo`
- **GitHub Repository**: [Halo-UI](https://github.com/deltaknight858/Halo-UI)
- **Distribution Package**: [eco-halo-ui](https://github.com/deltaknight858/eco-halo-ui)

---

<div align="center">
  <strong>Built with ❤️ for the Eco ecosystem</strong><br>
  <em>Delivering cinematic experiences through glassmorphism and neon-glass effects</em>
</div>
