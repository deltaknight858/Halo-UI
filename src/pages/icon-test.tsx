import React from 'react';
import { NeonIconProvider } from '../../packages/halo-ui/src/icons/neon-glass/NeonIconProvider';
import { HomeIcon } from '../../packages/halo-ui/src/icons/brand';
import { SearchIcon } from '../../packages/halo-ui/src/icons/utility';
import { ArrowIcon } from '../../packages/halo-ui/src/icons/bronze';

const IconTestPage = () => {
  return (
    <div className="min-h-screen bg-halo-background text-halo-foreground p-8">
      <h1 className="text-2xl font-semibold mb-6">Icon System Test</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 border border-halo-border rounded-lg">
          <h2 className="font-medium mb-3">Default (optimal)</h2>
          <NeonIconProvider>
            <div className="flex items-center gap-4">
              <HomeIcon size="md" variant="filled" animated />
              <SearchIcon size="sm" variant="outline" interactive />
              <ArrowIcon size="sm" direction="right" variant="minimal" />
            </div>
          </NeonIconProvider>
        </div>

        <div className="p-4 border border-halo-border rounded-lg">
          <h2 className="font-medium mb-3">Lightweight preset</h2>
          <NeonIconProvider themePreset="lightweight">
            <div className="flex items-center gap-4">
              <HomeIcon />
              <SearchIcon />
              <ArrowIcon direction="right" />
            </div>
          </NeonIconProvider>
        </div>

        <div className="p-4 border border-halo-border rounded-lg">
          <h2 className="font-medium mb-3">Dark theme, silver tier</h2>
          <NeonIconProvider theme="dark" defaultTier="silver" animated>
            <div className="flex items-center gap-6">
              <HomeIcon size="lg" variant="glass" />
              <SearchIcon size="lg" variant="glass" />
              <ArrowIcon size="lg" direction="left" variant="glass" />
            </div>
          </NeonIconProvider>
        </div>

        <div className="p-4 border border-halo-border rounded-lg">
          <h2 className="font-medium mb-3">Gold tier accents</h2>
          <NeonIconProvider defaultTier="gold" animated>
            <div className="flex items-center gap-6">
              <HomeIcon size="md" variant="filled" />
              <SearchIcon size="md" variant="outline" />
              <ArrowIcon size="md" direction="up" variant="minimal" />
            </div>
          </NeonIconProvider>
        </div>
      </div>
    </div>
  );
};

export default IconTestPage;
