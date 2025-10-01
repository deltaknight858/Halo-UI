import React from "react";
import { 
  HaloTimeline, 
  HaloMindmap, 
  HaloMediaPlayer, 
  HaloStepper, 
  HaloStatCard 
} from "@/components/halo";
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

export default function NewComponentsDemo() {
  const [currentStep, setCurrentStep] = React.useState(0);

  const timelineItems = [
    {
      id: "1",
      title: "Project Started",
      description: "Initial setup and planning phase",
      date: "Jan 2024",
      status: "completed" as const,
    },
    {
      id: "2",
      title: "Development Phase",
      description: "Building core features",
      date: "Feb 2024",
      status: "active" as const,
    },
    {
      id: "3",
      title: "Testing",
      description: "QA and bug fixes",
      date: "Mar 2024",
      status: "pending" as const,
    },
  ];

  const mindmapData = {
    id: "root",
    label: "Halo UI",
    children: [
      {
        id: "1",
        label: "Components",
        children: [
          { id: "1-1", label: "Timeline" },
          { id: "1-2", label: "Stepper" },
        ],
      },
      {
        id: "2",
        label: "Features",
        children: [
          { id: "2-1", label: "Glassmorphism" },
          { id: "2-2", label: "Animations" },
        ],
      },
    ],
  };

  const steps = [
    { id: "1", label: "Select Plan", description: "Choose your subscription" },
    { id: "2", label: "Payment", description: "Enter payment details" },
    { id: "3", label: "Confirm", description: "Review and confirm" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-[rgb(var(--halo-fg))] mb-2">
            New Eco Components Demo
          </h1>
          <p className="text-[rgb(var(--halo-muted))]">
            Showcasing the 5 new advanced components
          </p>
        </div>

        {/* Stat Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-4">HaloStatCard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <HaloStatCard
              title="Total Users"
              value="12,543"
              change={12.5}
              icon={<Users className="w-6 h-6" />}
            />
            <HaloStatCard
              title="Revenue"
              value="$45,231"
              change={8.2}
              variant="glass"
              icon={<DollarSign className="w-6 h-6" />}
            />
            <HaloStatCard
              title="Orders"
              value="1,234"
              change={-3.1}
              variant="elevated"
              icon={<ShoppingCart className="w-6 h-6" />}
            />
            <HaloStatCard
              title="Growth Rate"
              value="23%"
              change={5.3}
              icon={<TrendingUp className="w-6 h-6" />}
            />
          </div>
        </section>

        {/* Stepper */}
        <section>
          <h2 className="text-2xl font-bold mb-4">HaloStepper</h2>
          <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg">
            <HaloStepper
              steps={steps}
              currentStep={currentStep}
              onStepClick={setCurrentStep}
            />
            <div className="mt-6 flex gap-2">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="px-4 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                disabled={currentStep === steps.length - 1}
                className="px-4 py-2 bg-eco-orange text-eco-black rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Timeline */}
          <section>
            <h2 className="text-2xl font-bold mb-4">HaloTimeline</h2>
            <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg">
              <HaloTimeline items={timelineItems} />
            </div>
          </section>

          {/* Mindmap */}
          <section>
            <h2 className="text-2xl font-bold mb-4">HaloMindmap</h2>
            <HaloMindmap
              data={mindmapData}
              onNodeClick={(node) => console.log("Clicked:", node.label)}
            />
          </section>
        </div>

        {/* Media Player */}
        <section>
          <h2 className="text-2xl font-bold mb-4">HaloMediaPlayer</h2>
          <div className="max-w-3xl mx-auto">
            <HaloMediaPlayer
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              title="Sample Video"
              type="video"
              poster="https://www.w3schools.com/html/pic_trulli.jpg"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
