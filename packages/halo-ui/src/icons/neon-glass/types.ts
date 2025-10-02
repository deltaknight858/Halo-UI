/**
 * Neon-Glass Icon System Types
 * Core type definitions for the provenance-aware icon system
 */

export type ProvenanceTier = 'bronze' | 'silver' | 'gold';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type IconVariant = 'filled' | 'outline' | 'minimal' | 'glass';

export interface ProvenanceMetadata {
  id: string;
  name: string;
  tier: ProvenanceTier;
  ownership: 'self-created' | 'licensed' | 'reference';
  created: string;
  creator: string;
  version: string;
  tags: string[];
  usage: string[];
}

export interface NeonGlassIconProps {
  children: React.ReactNode;
  tier: ProvenanceTier;
  size?: IconSize;
  variant?: IconVariant;
  interactive?: boolean;
  animated?: boolean;
  className?: string;
  'aria-label'?: string;
}

export interface TierColors {
  glow: string;
  border: string;
  background: string;
  accent: string;
}