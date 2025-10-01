import React from 'react';
import { Button, Card, CardHeader, CardTitle, CardContent, Input, Badge, HaloUI } from '@eco/halo-ui';

export default function ComponentLibraryDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            {HaloUI.name} v{HaloUI.version}
          </h1>
          <p className="text-gray-300">{HaloUI.description}</p>
        </div>

        {/* Button Examples */}
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Button Components</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="tertiary">Tertiary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="glass">Glass Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Card Examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="glass" glow="primary">
            <CardHeader>
              <CardTitle>Glass Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Glass morphism effect with primary glow</p>
              <Badge variant="eco" className="mt-2">Eco</Badge>
            </CardContent>
          </Card>

          <Card variant="elevated" glow="secondary">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Elevated shadow with secondary glow</p>
              <Badge variant="secondary" className="mt-2">Secondary</Badge>
            </CardContent>
          </Card>

          <Card variant="minimal" glow="tertiary">
            <CardHeader>
              <CardTitle>Minimal Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Clean minimal design with tertiary glow</p>
              <Badge variant="glass" className="mt-2">Glass</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Input Examples */}
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Input Components</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Default input" />
              <Input placeholder="Glass input" variant="glass" />
              <Input placeholder="Minimal input" variant="minimal" />
              <Input placeholder="Disabled input" disabled />
            </div>
          </CardContent>
        </Card>

        {/* Badge Examples */}
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Badge Components</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="eco">Eco</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="glass">Glass</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="default">Default</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-gray-500 text-sm">
          Components imported from: <code className="bg-gray-800 px-2 py-1 rounded">@eco/halo-ui</code>
        </div>
      </div>
    </div>
  );
}