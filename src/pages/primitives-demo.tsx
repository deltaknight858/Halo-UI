"use client";

import React from 'react';
import { Code } from 'lucide-react';

// Import primitives directly from the package source for local development
import { FlexBox } from '../../packages/halo-ui/src/primitives/layout/FlexBox';
import { GridBox } from '../../packages/halo-ui/src/primitives/layout/GridBox';
import { Container } from '../../packages/halo-ui/src/primitives/layout/Container';
import { Stack } from '../../packages/halo-ui/src/primitives/layout/Stack';
import { Text } from '../../packages/halo-ui/src/primitives/typography/Text';

export default function PrimitivesDemoPage() {
  return (
    <div className="min-h-screen bg-[rgb(var(--halo-bg))] text-[rgb(var(--halo-fg))]">
      <Container size="lg" padding="lg" className="py-10">
        {/* Header */}
        <Stack gap="md" align="center" className="mb-8">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(79,70,229,0.25)]">
            <Code className="w-7 h-7" />
          </div>
          <Text as="h1" variant="h2" weight="semibold">Layout & Typography Primitives</Text>
          <Text color="muted">Composable, typed, and responsive foundations for building layouts fast.</Text>
        </Stack>

        {/* Container variants */}
        <Stack gap="md" className="mb-10">
          <Text as="h2" variant="h4" weight="medium">Container</Text>
          <Container variant="glass" padding="md">
            <Text>Glass container with padding and rounded corners.</Text>
          </Container>
          <Container variant="elevated" padding="md">
            <Text>Elevated container for surfaces and cards.</Text>
          </Container>
        </Stack>

        {/* FlexBox examples */}
        <Stack gap="md" className="mb-10">
          <Text as="h2" variant="h4" weight="medium">FlexBox</Text>
          <FlexBox gap="md" padding="md" variant="glass" rounded="lg">
            <Text>Item A</Text>
            <Text>Item B</Text>
            <Text>Item C</Text>
          </FlexBox>

          <FlexBox
            direction="row"
            gap="md"
            padding="md"
            rounded="lg"
            variant="neon"
            responsive={{
              md: { direction: 'row' },
              sm: { direction: 'column', gap: 'sm' },
            }}
          >
            <Text>Responsive A</Text>
            <Text>Responsive B</Text>
            <Text>Responsive C</Text>
          </FlexBox>
        </Stack>

        {/* GridBox examples */}
        <Stack gap="md" className="mb-10">
          <Text as="h2" variant="h4" weight="medium">GridBox</Text>
          <GridBox cols="auto" gap="md" padding="md" rounded="lg" variant="glass">
            {Array.from({ length: 6 }).map((_, i) => (
              <Container key={i} variant="glass" padding="sm">
                <Text>Auto grid item {i + 1}</Text>
              </Container>
            ))}
          </GridBox>

          <GridBox
            cols="2"
            gap="md"
            padding="md"
            rounded="lg"
            variant="elevated"
            responsive={{ sm: { cols: '1' }, lg: { cols: '3' } }}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <Container key={n} variant="elevated" padding="sm">
                <Text>Col {n}</Text>
              </Container>
            ))}
          </GridBox>
        </Stack>

        {/* Stack examples */}
        <Stack gap="md" className="mb-10">
          <Text as="h2" variant="h4" weight="medium">Stack</Text>
          <Container variant="glass" padding="md">
            <Stack direction="vertical" gap="sm" divider="subtle">
              <Text>Line 1</Text>
              <Text>Line 2</Text>
              <Text>Line 3</Text>
            </Stack>
          </Container>
          <Container variant="elevated" padding="md">
            <Stack direction="horizontal" gap="md" divider="subtle">
              <Text>Left</Text>
              <Text>Center</Text>
              <Text>Right</Text>
            </Stack>
          </Container>
        </Stack>

        {/* Text examples */}
        <Stack gap="md" className="mb-10">
          <Text as="h2" variant="h4" weight="medium">Text</Text>
          <Text variant="display" weight="bold">Display H1</Text>
          <Text variant="h2" gradient="rainbow">Gradient H2</Text>
          <Text as="p">Body text with default styling.</Text>
          <Text as="p" color="muted">Muted body text for secondary information.</Text>
          <Text as="blockquote" variant="blockquote">Design beautiful layouts quickly.</Text>
          <Text as="code" variant="code">const halo = "neon glass";</Text>
        </Stack>
      </Container>
    </div>
  );
}
