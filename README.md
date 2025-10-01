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
🚀 Usage
Import components directly from the package:

tsx
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
📚 Component Gallery
Component	Purpose
HaloButton	Primary action button with Eco palette variants
HaloCard	Glassmorphic content container
HaloBadge	Bronze/Silver/Gold provenance badges
HaloTabs	Tabbed navigation
HaloDialog	Modal dialog with Eco styling
HaloTooltip	Contextual hover tooltips
HaloNavbar	Top navigation bar with glass/solid variants
HaloSidebar	Sidebar navigation with width + variant props
HaloFileUpload	Drag‑and‑drop file uploader
HaloDatePicker	Styled date input
HaloLoginForm / HaloRegisterForm	Auth forms composed of Halo primitives
HaloRating	Star rating component
HaloThumbs	Thumbs up/down voting with counts
HaloTimeline	Step‑based timeline for provenance or onboarding
HaloMindmap	Visual graph for agents, capsules, or knowledge trees
HaloMediaPlayer	Audio/video player with playlist support
HaloStepper	Lightweight step progress indicator
HaloStatCard	Dashboard metric card
StepWizard	Multi‑step guided flow
CommandCenter	Command palette / registry
ChatInterface	Conversational UI component
🏗️ Development
Monorepo managed with Turborepo + pnpm

Components live in src/components/halo/

Exports are re‑exported from packages/halo-ui/index.ts

Run Storybook locally to preview components:

bash
pnpm dev
🤝 Contributing
Fork the repo and create a feature branch.

Add new components under src/components/halo/.

Follow Eco palette + typography guidelines.

Ensure TypeScript types and CVA variants are included.

Add a demo page for each new component.

Submit a pull request with a clear description.

📜 License
MIT © deltaknight858
Components live in src/components/halo/

Exports are re‑exported from packages/halo-ui/index.ts

📜 License
MIT © deltaknight858
