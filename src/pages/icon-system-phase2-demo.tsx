import React, { useState } from 'react';
import { NeonIconProvider } from '../../packages/halo-ui/src/icons/neon-glass/NeonIconProvider';

// Import all our new icons
import { HomeIcon, LogoIcon, SettingsIcon, ProfileIcon } from '../../packages/halo-ui/src/icons/brand';
import { SearchIcon, FilterIcon, NotificationIcon } from '../../packages/halo-ui/src/icons/utility';
import { ArrowIcon, CloseIcon, MenuIcon, CheckIcon } from '../../packages/halo-ui/src/icons/bronze';

/**
 * Phase 2 Icon System Demo
 * 
 * Comprehensive showcase of the expanded neon-glass icon system
 * Features all three tiers with dynamic theming and performance options
 */

const IconSystemPhase2Demo = () => {
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark' | 'auto'>('auto');
  const [performanceMode, setPerformanceMode] = useState<'optimal' | 'minimal'>('optimal');
  const [globalAnimated, setGlobalAnimated] = useState(true);
  const [globalSize, setGlobalSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>('md');

  return (
    <NeonIconProvider
      theme={selectedTheme}
      performanceMode={performanceMode}
      animated={globalAnimated}
      size={globalSize}
      interactive={true}
    >
      <div className="min-h-screen bg-gradient-to-br from-[rgb(var(--halo-bg))] via-[rgb(var(--halo-bg))] to-[rgb(var(--halo-muted))]/20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <LogoIcon size="xl" variant="filled" animated />
              <h1 className="text-3xl font-bold text-[rgb(var(--halo-fg))]">
                Phase 2: Complete Icon System
              </h1>
            </div>
            <p className="text-[rgb(var(--halo-muted))] max-w-3xl mx-auto">
              Experience the full neon-glass icon ecosystem with 3-tier provenance system, 
              dynamic theming, performance optimization, and comprehensive variant support.
            </p>
          </div>

          {/* Global Controls */}
          <div className="max-w-4xl mx-auto mb-12 p-6 border border-[rgba(var(--halo-fg),0.1)] rounded-xl bg-[rgb(var(--halo-bg))]/50 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-[rgb(var(--halo-fg))] mb-4 flex items-center">
              <SettingsIcon size="sm" className="mr-2" />
              Global Icon Configuration
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label htmlFor="theme-select" className="block text-sm font-medium text-[rgb(var(--halo-fg))] mb-2">Theme</label>
                <select 
                  id="theme-select"
                  value={selectedTheme} 
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setSelectedTheme(e.target.value as 'light' | 'dark' | 'auto')
                  }
                  className="w-full p-2 border border-[rgba(var(--halo-fg),0.1)] rounded-lg bg-[rgb(var(--halo-bg))] text-[rgb(var(--halo-fg))]"
                  aria-label="Theme"
                >
                  <option value="auto">Auto</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="performance-select" className="block text-sm font-medium text-[rgb(var(--halo-fg))] mb-2">Performance</label>
                <select 
                  id="performance-select"
                  value={performanceMode} 
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setPerformanceMode(e.target.value as 'optimal' | 'minimal')
                  }
                  className="w-full p-2 border border-[rgba(var(--halo-fg),0.1)] rounded-lg bg-[rgb(var(--halo-bg))] text-[rgb(var(--halo-fg))]"
                  aria-label="Performance"
                >
                  <option value="optimal">Optimal</option>
                  <option value="minimal">Minimal</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[rgb(var(--halo-fg))] mb-2">Animation</label>
                <button
                  onClick={() => setGlobalAnimated(!globalAnimated)}
                  className={`w-full p-2 rounded-lg border transition-colors ${
                    globalAnimated 
                      ? 'bg-[rgb(var(--halo-primary))] text-white border-[rgb(var(--halo-primary))]' 
                      : 'bg-[rgb(var(--halo-bg))] text-[rgb(var(--halo-fg))] border-[rgba(var(--halo-fg),0.1)]'
                  }`}
                >
                  {globalAnimated ? 'Enabled' : 'Disabled'}
                </button>
              </div>
              
              <div>
                <label htmlFor="size-select" className="block text-sm font-medium text-[rgb(var(--halo-fg))] mb-2">Size</label>
                <select 
                  id="size-select"
                  value={globalSize} 
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setGlobalSize(e.target.value as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl')
                  }
                  className="w-full p-2 border border-[rgba(var(--halo-fg),0.1)] rounded-lg bg-[rgb(var(--halo-bg))] text-[rgb(var(--halo-fg))]"
                  aria-label="Size"
                >
                  <option value="xs">XS</option>
                  <option value="sm">SM</option>
                  <option value="md">MD</option>
                  <option value="lg">LG</option>
                  <option value="xl">XL</option>
                  <option value="2xl">2XL</option>
                </select>
              </div>
            </div>
          </div>

          {/* Gold Tier - Brand Icons */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[rgb(var(--halo-fg))] mb-6 flex items-center">
              <div className="w-3 h-3 bg-amber-400 rounded-full mr-3"></div>
              Gold Tier - Brand Icons
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border border-amber-200 rounded-lg bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20">
                <div className="text-center">
                  <HomeIcon size="xl" variant="filled" animated />
                  <h3 className="font-medium text-amber-700 dark:text-amber-300 mt-4">HomeIcon</h3>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">Navigation core</p>
                  <div className="flex justify-center space-x-2 mt-3">
                    <HomeIcon size="sm" variant="outline" />
                    <HomeIcon size="sm" variant="glass" />
                    <HomeIcon size="sm" variant="minimal" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 border border-amber-200 rounded-lg bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20">
                <div className="text-center">
                  <LogoIcon size="xl" variant="filled" animated />
                  <h3 className="font-medium text-amber-700 dark:text-amber-300 mt-4">LogoIcon</h3>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">Brand identity</p>
                  <div className="flex justify-center space-x-2 mt-3">
                    <LogoIcon size="sm" variant="outline" />
                    <LogoIcon size="sm" variant="glass" />
                    <LogoIcon size="sm" variant="minimal" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 border border-amber-200 rounded-lg bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20">
                <div className="text-center">
                  <SettingsIcon size="xl" variant="outline" animated />
                  <h3 className="font-medium text-amber-700 dark:text-amber-300 mt-4">SettingsIcon</h3>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">Configuration</p>
                  <div className="flex justify-center space-x-2 mt-3">
                    <SettingsIcon size="sm" variant="filled" />
                    <SettingsIcon size="sm" variant="glass" />
                    <SettingsIcon size="sm" variant="minimal" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 border border-amber-200 rounded-lg bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20">
                <div className="text-center">
                  <ProfileIcon size="xl" variant="filled" />
                  <h3 className="font-medium text-amber-700 dark:text-amber-300 mt-4">ProfileIcon</h3>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">User identity</p>
                  <div className="flex justify-center space-x-2 mt-3">
                    <ProfileIcon size="sm" variant="outline" />
                    <ProfileIcon size="sm" variant="glass" />
                    <ProfileIcon size="sm" variant="minimal" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Silver Tier - Utility Icons */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[rgb(var(--halo-fg))] mb-6 flex items-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
              Silver Tier - Enhanced Utility Icons
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-50/50 dark:border-gray-600 dark:bg-gray-900/20">
                <div className="text-center">
                  <SearchIcon size="xl" variant="glass" animated />
                  <h3 className="font-medium text-gray-700 dark:text-gray-300 mt-4">SearchIcon</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Discovery & filters</p>
                  <div className="flex justify-center space-x-2 mt-3">
                    <SearchIcon size="sm" variant="filled" />
                    <SearchIcon size="sm" variant="outline" />
                    <SearchIcon size="sm" variant="minimal" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-50/50 dark:border-gray-600 dark:bg-gray-900/20">
                <div className="text-center">
                  <FilterIcon size="xl" variant="outline" animated />
                  <h3 className="font-medium text-gray-700 dark:text-gray-300 mt-4">FilterIcon</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Data organization</p>
                  <div className="flex justify-center space-x-2 mt-3">
                    <FilterIcon size="sm" variant="filled" />
                    <FilterIcon size="sm" variant="glass" />
                    <FilterIcon size="sm" variant="minimal" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-50/50 dark:border-gray-600 dark:bg-gray-900/20">
                <div className="text-center">
                  <NotificationIcon size="xl" variant="filled" animated />
                  <h3 className="font-medium text-gray-700 dark:text-gray-300 mt-4">NotificationIcon</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Alerts & updates</p>
                  <div className="flex justify-center space-x-2 mt-3">
                    <NotificationIcon size="sm" variant="outline" />
                    <NotificationIcon size="sm" variant="glass" />
                    <NotificationIcon size="sm" variant="minimal" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bronze Tier - Standard Icons */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[rgb(var(--halo-fg))] mb-6 flex items-center">
              <div className="w-3 h-3 bg-orange-600 rounded-full mr-3"></div>
              Bronze Tier - Standard Functional Icons
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border border-orange-200 rounded-lg bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/20">
                <div className="text-center">
                  <ArrowIcon size="lg" direction="right" variant="minimal" animated />
                  <h3 className="font-medium text-orange-700 dark:text-orange-300 mt-4">ArrowIcon</h3>
                  <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">Navigation</p>
                  <div className="flex justify-center space-x-2 mt-3">
                    <ArrowIcon size="sm" direction="up" />
                    <ArrowIcon size="sm" direction="down" />
                    <ArrowIcon size="sm" direction="left" />
                    <ArrowIcon size="sm" direction="right" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 border border-orange-200 rounded-lg bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/20">
                <div className="text-center">
                  <CloseIcon size="lg" variant="minimal" />
                  <h3 className="font-medium text-orange-700 dark:text-orange-300 mt-4">CloseIcon</h3>
                  <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">Dismissal</p>
                  <div className="flex justify-center space-x-2 mt-3">
                    <CloseIcon size="sm" variant="filled" />
                    <CloseIcon size="sm" variant="outline" />
                    <CloseIcon size="sm" variant="glass" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 border border-orange-200 rounded-lg bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/20">
                <div className="text-center">
                  <MenuIcon size="lg" variant="minimal" animated />
                  <h3 className="font-medium text-orange-700 dark:text-orange-300 mt-4">MenuIcon</h3>
                  <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">Navigation</p>
                  <div className="flex justify-center space-x-2 mt-3">
                    <MenuIcon size="sm" variant="filled" />
                    <MenuIcon size="sm" variant="outline" />
                    <MenuIcon size="sm" variant="glass" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 border border-orange-200 rounded-lg bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/20">
                <div className="text-center">
                  <CheckIcon size="lg" variant="filled" animated />
                  <h3 className="font-medium text-orange-700 dark:text-orange-300 mt-4">CheckIcon</h3>
                  <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">Confirmation</p>
                  <div className="flex justify-center space-x-2 mt-3">
                    <CheckIcon size="sm" variant="outline" />
                    <CheckIcon size="sm" variant="glass" />
                    <CheckIcon size="sm" variant="minimal" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Demo Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[rgb(var(--halo-fg))] mb-6">Real-World Usage Examples</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Navigation Bar Example */}
              <div className="p-6 border border-[rgba(var(--halo-fg),0.1)] rounded-lg bg-[rgb(var(--halo-bg))]">
                <h3 className="font-medium text-[rgb(var(--halo-fg))] mb-4">Navigation Bar</h3>
                <div className="flex items-center justify-between p-4 bg-[rgb(var(--halo-bg))] rounded-lg border border-[rgba(var(--halo-fg),0.1)]">
                  <div className="flex items-center space-x-4">
                    <LogoIcon size="md" variant="filled" />
                    <span className="font-medium text-[rgb(var(--halo-fg))]">Eco App</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <SearchIcon size="sm" variant="outline" interactive />
                    <NotificationIcon size="sm" variant="filled" interactive />
                    <ProfileIcon size="sm" variant="outline" interactive />
                    <MenuIcon size="sm" variant="minimal" interactive />
                  </div>
                </div>
              </div>

              {/* Form Example */}
              <div className="p-6 border border-[rgba(var(--halo-fg),0.1)] rounded-lg bg-[rgb(var(--halo-bg))]">
                <h3 className="font-medium text-[rgb(var(--halo-fg))] mb-4">Interactive Form</h3>
                <div className="space-y-4">
                  <div className="relative">
                    <SearchIcon size="sm" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[rgb(var(--halo-muted))]" />
                    <input 
                      type="text"
                      placeholder="Search with silver-tier icon..."
                      className="w-full pl-10 pr-4 py-2 border border-[rgba(var(--halo-fg),0.1)] rounded-lg bg-[rgb(var(--halo-bg))] text-[rgb(var(--halo-fg))]"
                    />
                    <FilterIcon size="sm" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[rgb(var(--halo-muted))]" interactive />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckIcon size="sm" variant="filled" />
                      <span className="text-sm text-[rgb(var(--halo-fg))]">Terms accepted</span>
                    </div>
                    <div className="flex space-x-2">
                      <CloseIcon size="sm" variant="outline" interactive />
                      <ArrowIcon size="sm" direction="right" variant="filled" interactive />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="text-center">
            <div className="p-6 border border-[rgba(var(--halo-fg),0.1)] rounded-lg bg-gradient-to-r from-halo-primary/10 to-halo-secondary/10">
              <h3 className="text-lg font-semibold text-[rgb(var(--halo-fg))] mb-4">Phase 2 Achievements</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-halo-primary">11</div>
                  <div className="text-[rgb(var(--halo-muted))]">Total Icons</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-halo-primary">3</div>
                  <div className="text-[rgb(var(--halo-muted))]">Tier System</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-halo-primary">4</div>
                  <div className="text-[rgb(var(--halo-muted))]">Variant Styles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-halo-primary">6</div>
                  <div className="text-[rgb(var(--halo-muted))]">Size Options</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </NeonIconProvider>
  );
};

export default IconSystemPhase2Demo;