import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "The AI-powered solutions have transformed our marketing strategy completely. We've seen a 300% increase in engagement and our content resonates more authentically with our audience than ever before.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      quote: "The blend of AI precision and human expertise is remarkable. Our content strategy has never been more effective, and the ROI speaks for itself - we've seen a 110X increase in our content reach.",
      author: "Michael Chen",
      position: "Marketing Director, Growth Co.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      quote: "Their Neural Codex System captured our brand voice perfectly. Now every piece of content feels authentically us, while reaching a much wider audience. Game-changing results.",
      author: "Emily Rodriguez",
      position: "Brand Manager, Future Dynamics",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--bg-dark))]" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--flame-orange)/0.3),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--flame-red)/0.3),transparent_70%)]" />
        </div>
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[hsl(var(--text-light)/0.9)] bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-xl text-[hsl(var(--text-muted))] max-w-2xl mx-auto">
            Real results from businesses that have experienced the power of our AI-driven marketing solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-xl relative group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--flame-orange)/0.1)] to-[hsl(var(--flame-red)/0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <Quote className="h-10 w-10 text-[hsl(var(--flame-orange))] mb-6" />
              
              <p className="text-lg text-white/90 font-medium leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] rounded-full blur-sm" />
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover relative"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-[hsl(var(--text-muted))]">{testimonial.position}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[hsl(var(--bg-dark))] to-transparent" />
    </section>
  );
}