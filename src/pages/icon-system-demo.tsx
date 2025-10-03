import React from 'react';
import StepWizard from '../components/halo/StepWizard';
import type { StepDefinition, StepComponentProps } from '../components/halo/StepWizard';
import { HomeIcon } from '../../packages/halo-ui/src/icons/brand/HomeIcon';
import { SearchIcon } from '../../packages/halo-ui/src/icons/utility/SearchIcon';
import { NeonIconProvider } from '../../packages/halo-ui/src/icons/neon-glass/NeonIconProvider';

/**
 * Icon System Integration Demo
 * 
 * Tests the new Neon-Glass Icon System with existing Halo components
 * Demonstrates Gold/Silver tier icons with motion and interactivity
 */

// Step Components
const WelcomeStep: React.FC<StepComponentProps> = ({ onNext }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <HomeIcon 
          size="xl" 
          variant="filled" 
          animated={true}
          interactive={true}
          className="mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-halo-foreground">
          Gold-Tier Brand Icon
        </h3>
        <p className="text-halo-muted-foreground mt-2">
          Self-created original design with neon-glass effects
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg bg-halo-background/50">
          <HomeIcon size="sm" variant="outline" />
          <span className="text-sm ml-2">Small Outline</span>
        </div>
        <div className="p-4 border rounded-lg bg-halo-background/50">
          <HomeIcon size="md" variant="filled" />
          <span className="text-sm ml-2">Medium Filled</span>
        </div>
        <div className="p-4 border rounded-lg bg-halo-background/50">
          <HomeIcon size="lg" variant="glass" />
          <span className="text-sm ml-2">Large Glass</span>
        </div>
        <div className="p-4 border rounded-lg bg-halo-background/50">
          <HomeIcon size="xl" variant="minimal" />
          <span className="text-sm ml-2">XL Minimal</span>
        </div>
      </div>
      
      <div className="text-center">
        <button 
          onClick={() => onNext()}
          className="px-6 py-2 bg-halo-primary text-halo-primary-foreground rounded-lg hover:bg-halo-primary/90 transition-colors"
        >
          Continue to Search Demo
        </button>
      </div>
    </div>
  );
};

const SearchStep: React.FC<StepComponentProps> = ({ onNext, onBack }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <SearchIcon 
          size="xl" 
          variant="outline" 
          animated={true}
          interactive={true}
          className="mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-halo-foreground">
          Silver-Tier Utility Icon
        </h3>
        <p className="text-halo-muted-foreground mt-2">
          Modified standard design with enhanced glass effects
        </p>
      </div>
      
      <div className="relative">
        <SearchIcon 
          size="sm" 
          variant="filled" 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-halo-muted-foreground"
        />
        <input 
          type="text" 
          placeholder="Try searching with our Silver-tier icon..."
          className="w-full pl-10 pr-4 py-2 border border-halo-border rounded-lg bg-halo-background/50 text-halo-foreground placeholder-halo-muted-foreground focus:outline-none focus:ring-2 focus:ring-halo-primary"
        />
      </div>
      
      <div className="flex justify-center space-x-4">
        <SearchIcon size="sm" variant="outline" interactive animated />
        <SearchIcon size="md" variant="filled" interactive animated />
        <SearchIcon size="lg" variant="glass" interactive animated />
      </div>
      
      <div className="flex justify-center space-x-4">
        <button 
          onClick={onBack}
          className="px-6 py-2 border border-halo-border text-halo-foreground rounded-lg hover:bg-halo-muted/50 transition-colors"
        >
          Back
        </button>
        <button 
          onClick={() => onNext()}
          className="px-6 py-2 bg-halo-primary text-halo-primary-foreground rounded-lg hover:bg-halo-primary/90 transition-colors"
        >
          Continue to Features
        </button>
      </div>
    </div>
  );
};

const FeaturesStep: React.FC<StepComponentProps> = ({ onBack }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-halo-foreground text-center">
        Neon-Glass System Features
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border border-halo-border rounded-lg bg-halo-card">
          <h4 className="font-medium text-halo-foreground mb-3 flex items-center">
            <HomeIcon size="sm" className="mr-2" />
            Tier System
          </h4>
          <ul className="space-y-2 text-sm text-halo-muted-foreground">
            <li>🥇 <strong>Gold:</strong> Brand-defining icons</li>
            <li>🥈 <strong>Silver:</strong> Enhanced utilities</li>
            <li>🥉 <strong>Bronze:</strong> Standard functions</li>
          </ul>
        </div>
        
        <div className="p-6 border border-halo-border rounded-lg bg-halo-card">
          <h4 className="font-medium text-halo-foreground mb-3 flex items-center">
            <SearchIcon size="sm" className="mr-2" />
            Variant System
          </h4>
          <ul className="space-y-2 text-sm text-halo-muted-foreground">
            <li><strong>Filled:</strong> Solid with glow</li>
            <li><strong>Outline:</strong> Stroke-based</li>
            <li><strong>Glass:</strong> Translucent depth</li>
            <li><strong>Minimal:</strong> Subtle presence</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center p-6 border border-halo-border rounded-lg bg-gradient-to-r from-halo-primary/10 to-halo-secondary/10">
        <div className="flex justify-center space-x-6 mb-4">
          <HomeIcon size="lg" variant="filled" animated interactive />
          <SearchIcon size="lg" variant="glass" animated interactive />
        </div>
        <p className="text-halo-muted-foreground">
          Hover over icons to see interactive animations and neon-glass effects
        </p>
      </div>
      
      <div className="text-center">
        <button 
          onClick={onBack}
          className="px-6 py-2 border border-halo-border text-halo-foreground rounded-lg hover:bg-halo-muted/50 transition-colors"
        >
          Back to Search Demo
        </button>
      </div>
    </div>
  );
};

type StepPayload = unknown;

const IconSystemDemo = () => {

  const demoSteps: StepDefinition[] = [
    {
      id: 'welcome',
      title: 'Welcome Home',
      component: WelcomeStep
    },
    {
      id: 'search',
      title: 'Discovery & Search',
      component: SearchStep
    },
    {
      id: 'features',
      title: 'Interactive Features',
      component: FeaturesStep
    }
  ];

  const handleNext = (stepId: string, data?: StepPayload) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug('Next from step', stepId, 'with', data);
    }
  };

  const handleBack = (stepId: string) => {
    console.log('Back from step:', stepId);
  };

  const handleFinish = (data: Record<string, unknown>) => {
    console.log('Wizard finished with data:', data);
  };

  return (
    <NeonIconProvider>
      <div className="min-h-screen bg-gradient-to-br from-halo-background via-halo-background to-halo-muted/20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-halo-foreground mb-4">
              Neon-Glass Icon System Demo
            </h1>
            <p className="text-halo-muted-foreground max-w-2xl mx-auto">
              Experience the new comprehensive icon system with tier-based provenance, 
              cinematic styling, and seamless integration with existing Halo UI components.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <StepWizard
              steps={demoSteps}
              onNext={handleNext}
              onBack={handleBack}
              onFinish={handleFinish}
              variant="glass"
              showProgressBar={true}
              allowBackNavigation={true}
              className="bg-halo-card/50 backdrop-blur-sm border border-halo-border rounded-xl"
            />
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-halo-foreground mb-6">
              Icon Comparison Grid
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {/* Gold Tier Examples */}
              <div className="p-6 border border-amber-200 rounded-lg bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20">
                <div className="text-center">
                  <HomeIcon size="lg" variant="filled" animated />
                  <h4 className="font-medium text-amber-700 dark:text-amber-300 mt-3">Gold Tier</h4>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">Brand Icons</p>
                </div>
              </div>
              
              {/* Silver Tier Examples */}
              <div className="p-6 border border-gray-300 rounded-lg bg-gray-50/50 dark:border-gray-600 dark:bg-gray-900/20">
                <div className="text-center">
                  <SearchIcon size="lg" variant="glass" animated />
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mt-3">Silver Tier</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Enhanced Utility</p>
                </div>
              </div>
              
              {/* Variant Showcase */}
              <div className="p-6 border border-halo-border rounded-lg bg-halo-card/50">
                <div className="text-center">
                  <HomeIcon size="lg" variant="outline" />
                  <h4 className="font-medium text-halo-foreground mt-3">Outline</h4>
                  <p className="text-xs text-halo-muted-foreground mt-1">Stroke Based</p>
                </div>
              </div>
              
              <div className="p-6 border border-halo-border rounded-lg bg-halo-card/50">
                <div className="text-center">
                  <SearchIcon size="lg" variant="minimal" />
                  <h4 className="font-medium text-halo-foreground mt-3">Minimal</h4>
                  <p className="text-xs text-halo-muted-foreground mt-1">Subtle Presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NeonIconProvider>
  );
};

export default IconSystemDemo;