'use client';

import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { CONTENT_STANDARDS } from "@/lib/core/content-standards";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  type: keyof typeof CONTENT_STANDARDS.testimonials.types;
  content: {
    quote: string;
    results: string;
    implementation: string;
    impact: string;
  };
  attribution: {
    name: string;
    title: string;
    company: string;
  };
  media: {
    headshot: string;
    logo: string;
  };
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

export function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 5000
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, autoPlayInterval]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <Card className="bg-white p-8 rounded-xl shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.media.headshot} 
                    alt={testimonial.attribution.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-xl">{testimonial.attribution.name}</h3>
                    <p className="text-gray-600">{testimonial.attribution.title}</p>
                    <p className="text-gray-500">{testimonial.attribution.company}</p>
                  </div>
                  <img 
                    src={testimonial.media.logo} 
                    alt={testimonial.attribution.company}
                    className="h-8 ml-auto"
                  />
                </div>

                <blockquote className="mb-6">
                  <p className="text-xl italic text-gray-800 mb-4">{testimonial.content.quote}</p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Results:</strong> {testimonial.content.results}</p>
                    <p><strong>Implementation:</strong> {testimonial.content.implementation}</p>
                    <p><strong>Impact:</strong> {testimonial.content.impact}</p>
                  </div>
                </blockquote>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "w-8 bg-[hsl(var(--flame-orange))]" 
                : "w-2 bg-gray-300"
            }`}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index);
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}