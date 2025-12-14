import React from 'react';
import { Icon } from './ui/Icon';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: "language",
      title: "Input URL",
      desc: "We scan your digital footprint and current semantic authority."
    },
    {
      icon: "auto_fix_high",
      title: "Generate Prompts",
      desc: "We create 100+ buyer intent prompts relevant to your niche."
    },
    {
      icon: "model_training",
      title: "Query AI Models",
      desc: "We test your brand against competitors in real-time environments."
    },
    {
      icon: "assignment_turned_in",
      title: "Deliver Blueprint",
      desc: "Receive actionable steps to dominate the answer engine results."
    }
  ];

  return (
    <section className="py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d141b] mb-4">How We Engineer Visibility</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Our proprietary engine turns your content into the preferred data source for AI training.</p>
        </div>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-gray-200 shadow-sm flex items-center justify-center text-primary mb-6 group-hover:border-primary group-hover:shadow-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon name={step.icon} className="text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-[#0d141b] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};