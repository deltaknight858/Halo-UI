import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2020',
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    // Explicitly ignore the main project's components
    options.external = [
      ...(options.external || []),
      '@/lib/utils',
      '@/components/*',
      '@/contexts/*',
      '@/hooks/*',
      '@/lib/commandRegistry'
    ];
  }
})