// Halo UI Design System - Component Exports v0.1.0
"use client";

// Core Components
export { Button, type ButtonProps } from './src/components/Button';
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, type CardProps } from './src/components/Card';
export { Input, type InputProps } from './src/components/Input';
export { Badge, type BadgeProps } from './src/components/Badge';

// Icon System (Neon-Glass)
export * from './src/icons';

// Utilities
export { cn } from './src/lib/utils';

// Theme and colors
export * from './theme';

// Primitives (Phase 3)
export { FlexBox, type FlexBoxProps } from './src/primitives/layout/FlexBox';
export { GridBox, type GridBoxProps } from './src/primitives/layout/GridBox';
export { Stack, type StackProps } from './src/primitives/layout/Stack';
export { Text, type TextProps } from './src/primitives/typography/Text';
export { Container, type ContainerProps } from './src/primitives/layout/Container';

// Package info
export const version = '0.2.0';

export const HaloUI = {
  version: '0.2.0',
  name: '@eco/halo-ui',
  description: 'Glassmorphism components with neon accents and comprehensive icon system'
};
