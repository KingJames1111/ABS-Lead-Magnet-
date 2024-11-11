import { TestimonialCarousel } from "./carousel";
import { Metadata } from "next";
import { DESIGN_TOKENS } from "@/lib/design-tokens";

export const metadata: Metadata = {
  title: "Client Success Stories - AI Marketing Automation Results | ABS Studios",
  description: "Discover how businesses achieve 110X growth with our AI marketing automation. Real success stories showcase engagement increases up to 300% and conversion rates of 85%.",
  keywords: "AI marketing automation results, marketing ROI, content automation success, brand voice optimization case studies, marketing automation testimonials",
};

export function Testimonials() {
  return (
    <section 
      className="relative py-16 md:py-32 overflow-hidden" 
      aria-labelledby="testimonials-title"
    >
      {/* Background gradients using immutable design tokens */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--royal-purple-dark))] via-[hsl(var(--royal-purple-dark)/0.8)] to-[hsl(var(--bg-dark))]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--flame-orange)/0.3),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--flame-red)/0.3),transparent_70%)]" />
        </div>
      </div>

      <div className="container mx-auto relative px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 
            id="testimonials-title"
            className="font-orbitron text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-[hsl(var(--flame-orange))] to-[hsl(var(--text-light)/0.9)] bg-clip-text text-transparent leading-tight"
          >
            Success Stories
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-orbitron bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] bg-clip-text text-transparent mb-4 md:mb-6 leading-snug">
            Real Results. Real Growth. Real Impact.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[hsl(var(--text-muted))] max-w-3xl mx-auto leading-relaxed px-4">
            Discover how our{" "}
            <span className="text-[hsl(var(--flame-orange))] font-semibold">
              AI-powered marketing automation
            </span>{" "}
            helps businesses achieve{" "}
            <span className="text-[hsl(var(--flame-red))] font-semibold">
              110X growth
            </span>{" "}
            and unprecedented engagement
          </p>
        </div>

        <TestimonialCarousel />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(var(--bg-dark))] to-transparent" />
    </section>
  );
}