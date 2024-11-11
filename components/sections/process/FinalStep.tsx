{/* Previous imports remain the same */}

export function FinalStep() {
  return (
    <div className="relative">
      {/* Previous background styles remain the same */}
      
      <Card className="relative bg-gradient-to-br from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--royal-purple-dark)/0.9)] border-[hsl(var(--royal-purple-light)/0.3)] shadow-2xl shadow-[hsl(var(--flame-orange)/0.1)] transform transition-all duration-500 hover:scale-[1.01] overflow-hidden">
        {/* Previous background effects remain the same */}
        
        <div className="relative z-10 p-12">
          <div className="flex items-start gap-8">
            {/* Previous icon section remains the same */}

            <div className="flex-grow">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold font-orbitron bg-gradient-to-r from-white to-[hsl(var(--text-light)/0.9)] bg-clip-text text-transparent">
                    Perceptual Harmony
                  </h3>
                  <p className="text-[hsl(var(--flame-orange))] text-xl italic">
                    Continuous Pattern Optimization
                  </p>
                </div>
                <span className="font-orbitron text-4xl font-bold opacity-20 bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] bg-clip-text text-transparent">
                  04
                </span>
              </div>

              <div className="text-[hsl(var(--text-light))]">
                <p className="mb-8 text-xl leading-relaxed">
                  <span className="text-3xl font-bold text-[hsl(var(--flame-orange))] block mb-3">
                    Harmonize
                  </span>
                  Your brand's presence through our{" "}
                  <span className="text-xl font-semibold text-[hsl(var(--electric-green))]">
                    Pattern Recognition Engine
                  </span>. 
                  We continuously refine your content's{" "}
                  <span className="italic font-medium">perceptual coherence</span>{" "}
                  to maximize:
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-[hsl(var(--flame-orange))]">
                      Pattern Analysis
                    </h4>
                    <p className="text-lg text-[hsl(var(--text-light))/90] leading-relaxed">
                      Identify emerging trends and optimize engagement patterns
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-[hsl(var(--flame-orange))]">
                      Unified Metrics
                    </h4>
                    <p className="text-lg text-[hsl(var(--text-light))/90] leading-relaxed">
                      Measure holistic performance across all channels
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-[hsl(var(--flame-orange))]">
                      Adaptive Resonance
                    </h4>
                    <p className="text-lg text-[hsl(var(--text-light))/90] leading-relaxed">
                      Evolve naturally with your audience's changing patterns
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}