import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "How does Your Brand's Big Brain boost my marketing impact?",
      answer: "Your Brand's Big Brain is designed to amplify every aspect of your content, capturing your unique voice and ensuring each piece connects with your audience. By creating high-quality, publish-ready content aligned with your brand values, it boosts engagement and helps build authority. It's a transformative tool within our broader suite of services, but you can still leverage our automation, strategic marketing, and content repurposing options independently."
    },
    {
      question: "What's behind the 110X power of Your Brand's Big Brain and your content approach?",
      answer: "The 110X power combines Your Brand's Big Brain with strategic content repurposing and AI-driven insights. This approach transforms each idea, article, or video into multiple high-impact assets, so you're everywhere your audience is without constantly creating new content. Even if you're not using Your Brand's Big Brain, our content pool and repurposing services help maximize your reach and visibility."
    },
    {
      question: "Is Your Brand's Big Brain required to benefit from your services?",
      answer: "Not at all. While Your Brand's Big Brain is a unique and powerful option for personalized, publish-ready content, we offer other services that don't require it. Our business automation solutions, strategic marketing services, and content pool make a significant impact on their own, allowing you to choose what best fits your brand's current needs and goals."
    },
    {
      question: "How does Your Brand's Big Brain keep my unique voice intact?",
      answer: "Your Brand's Big Brain is built to capture the nuances of your brand's voice, tone, and values, ensuring every piece of content sounds authentically you. It's like having a customized guide for consistency, whether it's a social post, blog, or email. If you want a cohesive brand presence, this service delivers—but you can still enjoy high-quality content through our other solutions."
    },
    {
      question: "Do I have to use AI for everything, or can I choose specific services?",
      answer: "Our services are designed to be flexible. You can invest in just the parts that make sense for you, whether that's business automation, strategic marketing, or our content pool. AI-powered tools like Your Brand's Big Brain are available to amplify results, but you're free to choose what fits your strategy best."
    },
    {
      question: "Will I still control my content if I use Your Brand's Big Brain?",
      answer: "Absolutely. Think of Your Brand's Big Brain as a partner that brings your ideas to life and keeps everything aligned with your vision. It works as an extension of your brand, handling the heavy lifting while you guide the strategy, tone, and final direction of each piece. Plus, our other services, like automation and strategic marketing, are also designed to integrate smoothly with your input and preferences."
    },
    {
      question: "How can I get more out of my existing content without using Your Brand's Big Brain?",
      answer: "That's where our content pool and repurposing services shine. We help you take existing articles, videos, or ideas and transform them into fresh formats—like social posts, podcasts, or videos—so you reach new audiences without constantly creating from scratch. It's an efficient way to amplify your content and stay top of mind with your audience."
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--royal-purple-dark))] to-[hsl(var(--bg-dark))]" />
        <div className="absolute inset-0 flame-effect opacity-20" />
        
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[hsl(var(--flame-orange))] rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.3,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--royal-purple-light)/0.3)] backdrop-blur-sm mb-6">
            <HelpCircle className="h-5 w-5 text-[hsl(var(--electric-green))]" />
            <span className="text-sm font-medium text-white">Common Questions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-orbitron">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Everything you need to know about how our services, including Your Brand's Big Brain, can elevate your brand.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-[radial-gradient(circle_at_center,hsl(var(--flame-orange)/0.15),transparent_70%)] blur-2xl" />
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-[radial-gradient(circle_at_center,hsl(var(--flame-red)/0.15),transparent_70%)] blur-2xl" />

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-white hover:bg-white/5 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-white/90 text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}