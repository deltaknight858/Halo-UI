# 🌌 Halo‑UI

**Halo‑UI** is the official design system and component library for [OurSynth Eco](https://github.com/deltaknight858/Eco).  
It provides a cinematic, glassmorphic, and neon‑inspired UI foundation for all Eco apps, ensuring consistency, accessibility, and contributor delight.

---

## ✨ Features
- 🎨 **Eco Palette** — purple, cyan, orange, and prestige gold tokens
- 🧩 **Primitives** — Buttons, Inputs, Cards, Badges, Tabs, Modals, Tooltips, etc.
- ⚡ **Advanced Components** — StepWizard, CommandCenter, ChatInterface, Navbar, Sidebar, FileUpload, DatePicker, Rating, Thumbs
- 📊 **Visualization** — Timeline, Mindmap, MediaPlayer, StatCards
- 🛠️ **TypeScript + CVA** — full typing, variant‑based styling, and tree‑shakeable exports
- 🔒 **Provenance‑aware** — designed for reproducibility and contributor trust

---

## 📦 Installation
Halo‑UI is published as a package inside the Eco monorepo. To install in an Eco app:

```bash
pnpm add @eco/halo-ui
```

---

## 🚀 Usage
Import components directly from the package:

```tsx
import { HaloButton, HaloCard, HaloTimeline } from "@eco/halo-ui";

export default function Example() {
  return (
    <div className="space-y-4">
      <HaloButton variant="glass">Click Me</HaloButton>
      <HaloCard>Eco‑themed card</HaloCard>
      <HaloTimeline
        steps={[
          { id: "1", label: "Start" },
          { id: "2", label: "Build", completed: true },
          { id: "3", label: "Launch" },
        ]}
        currentStep="2"
      />
    </div>
  );
}
```

---

## 📚 Component Gallery

### 🎨 Primitives

| Component      | Purpose                                 |
| -------------- | --------------------------------------- |
| HaloButton     | Primary action button with Eco palette variants |
| HaloCard       | Glassmorphic content container          |
| HaloInput      | Text input field                        |
| HaloTextarea   | Multi‑line text input                   |
| HaloSelect     | Dropdown select menu                    |
| HaloCheckbox   | Checkbox input                          |
| HaloToggle     | Toggle switch                           |
| HaloSlider     | Horizontal/vertical slider              |
| HaloBadge      | Bronze/Silver/Gold provenance badges    |
| HaloTooltip    | Contextual hover tooltips               |
| HaloAlert      | Alert/notification box                  |
| HaloSpinner    | Loading spinner                         |
| HaloAvatar     | User avatar display                     |

### ⚡ Advanced Components

| Component          | Purpose                                  |
| ------------------ | ---------------------------------------- |
| HaloNavbar         | Top navigation bar with glass/solid variants |
| HaloSidebar        | Sidebar navigation with width + variant props |
| HaloDialog         | Modal dialog with Eco styling            |
| HaloTabs           | Tabbed navigation                        |
| HaloFileUpload     | Drag‑and‑drop file uploader              |
| HaloDatePicker     | Styled date input                        |
| HaloLoginForm      | Auth form with email/password fields     |
| HaloRegisterForm   | Registration form with name/email/password |
| HaloRating         | Star rating component                    |
| HaloThumbs         | Thumbs up/down voting with counts        |
| StepWizard         | Multi‑step guided flow                   |
| CommandCenter      | Command palette / registry               |
| ChatInterface      | Conversational UI component              |
| ThemeToggle        | Light/dark theme switcher                |
| GlobalBottomNavBar | Mobile‑style bottom navigation bar       |

### 📊 Visualization

| Component      | Purpose                                     |
| -------------- | ------------------------------------------- |
| HaloTimeline   | Step‑based timeline for provenance or onboarding |
| HaloMindmap    | Visual graph for agents, capsules, or knowledge trees |
| HaloMediaPlayer| Audio/video player with playlist support     |
| HaloStepper    | Lightweight step progress indicator         |
| HaloStatCard   | Dashboard metric card                       |
| HaloProgress   | Progress bar                                |

### 🛡️ Utilities

| Component / Export         | Purpose                          |
| -------------------------- | -------------------------------- |
| HaloErrorBoundary          | Error boundary wrapper           |
| HaloErrorBoundaryProvider  | Context provider for error handling |
| commandRegistry            | Command registry for CommandCenter |
| ecoTheme / ecoTokens       | Eco palette + theme configuration |

---

## 🏗️ Development

Monorepo managed with Turborepo + pnpm

Components live in `src/components/halo/`

Exports are re‑exported from `packages/halo-ui/index.ts`

Run Storybook locally to preview components:

```bash
pnpm dev
```

---

## 🤝 Contributing

Fork the repo and create a feature branch.

Add new components under `src/components/halo/`.

Follow Eco palette + typography guidelines.

Ensure TypeScript types and CVA variants are included.

Add a demo page for each new component.

Submit a pull request with a clear description.

---

## 📜 License

MIT © deltaknight858
