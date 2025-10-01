// Halo UI Design System - Component Exports v0.1.0
"use client";

// Core Components
export { Button, type ButtonProps } from './src/components/Button';
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, type CardProps } from './src/components/Card';
export { Input, type InputProps } from './src/components/Input';
export { Badge, type BadgeProps } from './src/components/Badge';

// Utilities
export { cn } from './src/lib/utils';

// Theme and colors
export * from './theme';

// Package info
export const version = '0.1.0';

export const HaloUI = {
  version: '0.1.0',
  name: '@eco/halo-ui',
  description: 'Glassmorphism components with neon accents'
};
