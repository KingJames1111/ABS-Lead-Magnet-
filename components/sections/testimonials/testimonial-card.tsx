"use client";

import { Card } from "@/components/ui/card";
import { Quote, TrendingUp, Users, Target } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  metrics: {
    engagement: string;
    reach: string;
    conversion: string;
  };
}

export function TestimonialCard({
  quote,
  author,
  position,
  company,
  image,
  rating,
  metrics
}: TestimonialCardProps) {
  return (
    <Card 
      className="bg-white p-6 sm:p-8 rounded-xl shadow-xl relative group hover:transform hover:scale-105 transition-all duration-500"
      role="article"
      aria-label={`Testimonial from ${author}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--flame-orange)/0.05)] to-[hsl(var(--flame-red)/0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      
      <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-[hsl(var(--flame-orange))] mb-6 sm:mb-8" />
      
      <div className="flex mb-4 sm:mb-6" aria-label={`Rating: ${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 sm:w-6 sm:h-6 ${i < rating ? "text-[hsl(var(--flame-orange))]" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="text-base sm:text-xl text-gray-800 font-medium leading-relaxed mb-6 sm:mb-8">
        "{quote}"
      </p>

      <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
        <div className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg group/metric hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-colors duration-300">
          <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6 text-[hsl(var(--flame-orange))] mx-auto mb-1 sm:mb-2" />
          <p className="text-xs sm:text-sm text-gray-600 font-medium">Engagement</p>
          <p className="text-lg sm:text-2xl font-bold text-[hsl(var(--flame-orange))]">{metrics.engagement}</p>
        </div>
        <div className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg group/metric hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-colors duration-300">
          <Users className="h-4 w-4 sm:h-6 sm:w-6 text-[hsl(var(--flame-red))] mx-auto mb-1 sm:mb-2" />
          <p className="text-xs sm:text-sm text-gray-600 font-medium">Reach</p>
          <p className="text-lg sm:text-2xl font-bold text-[hsl(var(--flame-red))]">{metrics.reach}</p>
        </div>
        <div className="text-center p-2 sm:p-4 bg-gray-50 rounded-lg group/metric hover:bg-gradient-to-br hover:from-white hover:to-gray-50 transition-colors duration-300">
          <Target className="h-4 w-4 sm:h-6 sm:w-6 text-[hsl(var(--electric-green))] mx-auto mb-1 sm:mb-2" />
          <p className="text-xs sm:text-sm text-gray-600 font-medium">Conversion</p>
          <p className="text-lg sm:text-2xl font-bold text-[hsl(var(--electric-green))]">{metrics.conversion}</p>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))] rounded-full blur-sm opacity-75" />
          <img
            src={image}
            alt={`${author} - ${position} at ${company}`}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover relative"
            loading="lazy"
          />
        </div>
        <div className="ml-3 sm:ml-4">
          <p className="text-lg sm:text-xl font-bold text-gray-900">{author}</p>
          <p className="text-sm sm:text-base text-gray-600 font-medium">{position}</p>
          <p className="text-sm sm:text-base text-[hsl(var(--flame-orange))] font-semibold">{company}</p>
        </div>
      </div>
    </Card>
  );
}