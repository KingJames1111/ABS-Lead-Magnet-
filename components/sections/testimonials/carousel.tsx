"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "./testimonial-card";
import { testimonialData } from "./data";
import { useMediaQuery } from "@/hooks/use-media-query";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  
  const itemsPerView = isMobile ? 1 : isTablet ? 2 : 3;
  const totalSlides = Math.ceil(testimonialData.length / itemsPerView);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoPlaying(false);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);
    
    if (carouselRef.current) {
      const delta = touchStart - e.targetTouches[0].clientX;
      const maxDelta = window.innerWidth / 4;
      const percentage = (delta / maxDelta) * 100;
      const offset = Math.max(Math.min(percentage, 100), -100);
      
      carouselRef.current.style.transform = `translateX(calc(-${currentIndex * (100 / itemsPerView)}% - ${offset}px))`;
    }
  };

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isSignificantSwipe = Math.abs(distance) > 50;

    if (isSignificantSwipe) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }
    
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * (100 / itemsPerView)}%)`;
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  }, [touchStart, touchEnd, currentIndex, isDragging]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => 
        current === totalSlides - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((current) => 
      current === 0 ? totalSlides - 1 : current - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((current) => 
      current === totalSlides - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="relative max-w-[90rem] mx-auto px-4 md:px-8">
      <div 
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-out will-change-transform"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            width: `${(testimonialData.length / itemsPerView) * 100}%`
          }}
        >
          {testimonialData.map((testimonial, index) => (
            <div 
              key={index}
              className="px-4"
              style={{ width: `${100 / testimonialData.length}%` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 w-12 h-12 rounded-full bg-white shadow-lg border-gray-200 hover:bg-gray-50 text-gray-800"
        onClick={handlePrevious}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 w-12 h-12 rounded-full bg-white shadow-lg border-gray-200 hover:bg-gray-50 text-gray-800"
        onClick={handleNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="flex justify-center items-center mt-12 gap-3">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-12 bg-gradient-to-r from-[hsl(var(--flame-orange))] to-[hsl(var(--flame-red))]"
                : "w-3 bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index);
            }}
            aria-label={`Go to testimonial group ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}