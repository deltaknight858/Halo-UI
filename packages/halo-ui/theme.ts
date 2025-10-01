/**
 * Eco Theme Configuration
 * 
 * This module exports the Eco theme with the core palette
 * (purple, cyan, orange, gold) and font configuration.
 */

export interface EcoTheme {
  colors: {
    purple: {
      default: string;
      light: string;
      dark: string;
    };
    cyan: {
      default: string;
      light: string;
      dark: string;
    };
    orange: {
      default: string;
      light: string;
      dark: string;
    };
    gold: {
      default: string;
      light: string;
      dark: string;
    };
  };
  fonts: {
    heading: string;
    body: string;
  };
}

/**
 * Eco Theme - Core palette with purple, cyan, orange, and gold colors
 * Fonts: Orbitron for headings, Inter for body text
 */
export const ecoTheme: EcoTheme = {
  colors: {
    purple: {
      default: 'rgb(140 92 255)',
      light: 'rgb(160 120 255)',
      dark: 'rgb(120 72 220)',
    },
    cyan: {
      default: 'rgb(0 216 255)',
      light: 'rgb(51 230 255)',
      dark: 'rgb(0 180 220)',
    },
    orange: {
      default: 'rgb(255 140 50)',
      light: 'rgb(255 165 80)',
      dark: 'rgb(230 120 30)',
    },
    gold: {
      default: 'rgb(255 200 50)',
      light: 'rgb(255 220 100)',
      dark: 'rgb(230 170 20)',
    },
  },
  fonts: {
    heading: "'Orbitron', sans-serif",
    body: "'Inter', sans-serif",
  },
};

/**
 * CSS variable names for the Eco palette
 */
export const ecoTokens = {
  purple: {
    default: '--eco-purple',
    light: '--eco-purple-light',
    dark: '--eco-purple-dark',
  },
  cyan: {
    default: '--eco-cyan',
    light: '--eco-cyan-light',
    dark: '--eco-cyan-dark',
  },
  orange: {
    default: '--eco-orange',
    light: '--eco-orange-light',
    dark: '--eco-orange-dark',
  },
  gold: {
    default: '--eco-gold',
    light: '--eco-gold-light',
    dark: '--eco-gold-dark',
  },
} as const;

/**
 * Utility function to get Eco color CSS variable reference
 */
export function getEcoColor(
  color: keyof typeof ecoTokens,
  variant: 'default' | 'light' | 'dark' = 'default'
): string {
  return `rgb(var(${ecoTokens[color][variant]}))`;
}
