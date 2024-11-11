import { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { Process } from '@/components/sections/process';
import { FAQ } from '@/components/sections/faq';
import { Testimonials } from '@/components/sections/testimonials';
import { CTA } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'AI Marketing Automation | Neural Pattern Recognition for 110X Growth',
  description: 'Transform your marketing with AI-powered automation and neural pattern recognition. Achieve 110X content reach with automated content creation and distribution.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="sr-only">
        AI Marketing Automation Platform - Transform Your Marketing with Neural Pattern Recognition
      </h1>
      <Hero />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}