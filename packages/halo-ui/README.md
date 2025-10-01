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
