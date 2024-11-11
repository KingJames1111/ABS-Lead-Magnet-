'use client';

import { BackgroundEffects } from './BackgroundEffects';
import { ProcessHeader } from './ProcessHeader';
import { processSteps } from './data';
import { ProcessCard } from './ProcessCard';

export function Process() {
  return (
    <section className="relative py-32 overflow-hidden">
      <BackgroundEffects />
      
      <div className="container px-4 mx-auto relative z-10">
        <ProcessHeader />
        
        <div className="flex flex-col gap-12">
          {/* Container 02 - Build Your Brand's Big Brain */}
          <ProcessCard {...processSteps[1]} isLarge />
          
          {/* Container 01 and 03 side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProcessCard {...processSteps[0]} />
            <ProcessCard {...processSteps[2]} />
          </div>
          
          {/* Container 04 - Measure & Refine */}
          <ProcessCard {...processSteps[3]} />
        </div>
      </div>
    </section>
  );
}