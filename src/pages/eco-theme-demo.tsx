import React from 'react';
import { ecoTheme } from '@/../../packages/halo-ui';

export default function EcoThemeDemo() {
  return (
    <div className="min-h-screen bg-halo-bg text-halo-fg p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: ecoTheme.fonts.heading }}
          >
            Eco Theme
          </h1>
          <p 
            className="text-lg text-halo-muted"
            style={{ fontFamily: ecoTheme.fonts.body }}
          >
            Core palette with purple, cyan, orange, and gold colors
          </p>
        </div>

        {/* Font Showcase */}
        <section className="space-y-6">
          <h2 
            className="text-3xl font-semibold"
            style={{ fontFamily: ecoTheme.fonts.heading }}
          >
            Typography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-halo bg-halo-bg-elev border border-halo-fg/10">
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: ecoTheme.fonts.heading }}>
                Orbitron - Headings
              </h3>
              <div className="space-y-2" style={{ fontFamily: ecoTheme.fonts.heading }}>
                <p className="text-4xl">Heading 1</p>
                <p className="text-3xl">Heading 2</p>
                <p className="text-2xl">Heading 3</p>
                <p className="text-xl">Heading 4</p>
              </div>
            </div>
            
            <div className="p-6 rounded-halo bg-halo-bg-elev border border-halo-fg/10">
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: ecoTheme.fonts.heading }}>
                Inter - Body Text
              </h3>
              <div className="space-y-2" style={{ fontFamily: ecoTheme.fonts.body }}>
                <p className="text-base">
                  This is body text in Inter font. It's designed for readability and works great for longer form content.
                </p>
                <p className="text-sm text-halo-muted">
                  Inter is a variable font family carefully crafted & designed for computer screens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette Showcase */}
        <section className="space-y-6">
          <h2 
            className="text-3xl font-semibold"
            style={{ fontFamily: ecoTheme.fonts.heading }}
          >
            Eco Core Palette
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Purple */}
            <div className="space-y-3">
              <div 
                className="h-32 rounded-halo shadow-lg flex items-center justify-center text-white font-semibold"
                style={{ backgroundColor: ecoTheme.colors.purple.default }}
              >
                Purple
              </div>
              <div className="space-y-2">
                <div 
                  className="h-10 rounded-halo-sm"
                  style={{ backgroundColor: ecoTheme.colors.purple.light }}
                />
                <div 
                  className="h-10 rounded-halo-sm"
                  style={{ backgroundColor: ecoTheme.colors.purple.default }}
                />
                <div 
                  className="h-10 rounded-halo-sm"
                  style={{ backgroundColor: ecoTheme.colors.purple.dark }}
                />
              </div>
            </div>

            {/* Cyan */}
            <div className="space-y-3">
              <div 
                className="h-32 rounded-halo shadow-lg flex items-center justify-center text-white font-semibold"
                style={{ backgroundColor: ecoTheme.colors.cyan.default }}
              >
                Cyan
              </div>
              <div className="space-y-2">
                <div 
                  className="h-10 rounded-halo-sm"
                  style={{ backgroundColor: ecoTheme.colors.cyan.light }}
                />
                <div 
                  className="h-10 rounded-halo-sm"
                  style={{ backgroundColor: ecoTheme.colors.cyan.default }}
                />
                <div 
                  className="h-10 rounded-halo-sm"
                  style={{ backgroundColor: ecoTheme.colors.cyan.dark }}
                />
              </div>
            </div>

            {/* Orange */}
            <div className="space-y-3">
              <div 
                className="h-32 rounded-halo shadow-lg flex items-center justify-center text-white font-semibold"
                style={{ backgroundColor: ecoTheme.colors.orange.default }}
              >
                Orange
              </div>
              <div className="space-y-2">
                <div 
                  className="h-10 rounded-halo-sm"
                  style={{ backgroundColor: ecoTheme.colors.orange.light }}
                />
                <div 
                  className="h-10 rounded-halo-sm"
                  style={{ backgroundColor: ecoTheme.colors.orange.default }}
                />
                <div 
                  className="h-10 rounded-halo-sm"
                  style={{ backgroundColor: ecoTheme.colors.orange.dark }}
                />
              </div>
            </div>

            {/* Gold */}
            <div className="space-y-3">
              <div 
                className="h-32 rounded-halo shadow-lg flex items-center justify-center text-gray-900 font-semibold"
                style={{ backgroundColor: ecoTheme.colors.gold.default }}
              >
                Gold
              </div>
              <div className="space-y-2">
                <div 
                  className="h-10 rounded-halo-sm"
                  style={{ backgroundColor: ecoTheme.colors.gold.light }}
                />
                <div 
                  className="h-10 rounded-halo-sm"
                  style={{ backgroundColor: ecoTheme.colors.gold.default }}
                />
                <div 
                  className="h-10 rounded-halo-sm"
                  style={{ backgroundColor: ecoTheme.colors.gold.dark }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="space-y-6">
          <h2 
            className="text-3xl font-semibold"
            style={{ fontFamily: ecoTheme.fonts.heading }}
          >
            Usage Examples
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-halo bg-halo-bg-elev border border-halo-fg/10">
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: ecoTheme.fonts.heading }}>
                CSS Variables
              </h3>
              <pre className="bg-black/20 p-4 rounded-halo-sm text-sm overflow-x-auto">
                <code>{`/* In your CSS */
.element {
  color: rgb(var(--eco-purple));
  background: rgb(var(--eco-cyan));
}`}</code>
              </pre>
            </div>
            
            <div className="p-6 rounded-halo bg-halo-bg-elev border border-halo-fg/10">
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: ecoTheme.fonts.heading }}>
                TypeScript/React
              </h3>
              <pre className="bg-black/20 p-4 rounded-halo-sm text-sm overflow-x-auto">
                <code>{`import { ecoTheme } from '@/packages/halo-ui';

<div style={{
  color: ecoTheme.colors.purple.default
}}>
  Eco Purple
</div>`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Color CSS Variables Reference */}
        <section className="space-y-6">
          <h2 
            className="text-3xl font-semibold"
            style={{ fontFamily: ecoTheme.fonts.heading }}
          >
            CSS Variables Reference
          </h2>
          
          <div className="p-6 rounded-halo bg-halo-bg-elev border border-halo-fg/10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm" style={{ fontFamily: 'monospace' }}>
              <div>
                <p className="font-semibold mb-2">Purple:</p>
                <ul className="space-y-1 text-halo-muted">
                  <li>--eco-purple</li>
                  <li>--eco-purple-light</li>
                  <li>--eco-purple-dark</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Cyan:</p>
                <ul className="space-y-1 text-halo-muted">
                  <li>--eco-cyan</li>
                  <li>--eco-cyan-light</li>
                  <li>--eco-cyan-dark</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Orange:</p>
                <ul className="space-y-1 text-halo-muted">
                  <li>--eco-orange</li>
                  <li>--eco-orange-light</li>
                  <li>--eco-orange-dark</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Gold:</p>
                <ul className="space-y-1 text-halo-muted">
                  <li>--eco-gold</li>
                  <li>--eco-gold-light</li>
                  <li>--eco-gold-dark</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
