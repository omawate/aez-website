'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types';

export interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ImageCarouselProps extends ComponentProps {
  images: CarouselImage[];
  title?: string;
  subtitle?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  height?: 'sm' | 'md' | 'lg' | 'xl';
  visibleImages?: number; // Number of images visible at once
}

const ImageCarousel = React.forwardRef<HTMLElement, ImageCarouselProps>(
  ({ 
    className, 
    images, 
    title,
    subtitle,
    autoPlay = true,
    autoPlayInterval = 5000,
    showDots = true,
    showArrows = true,
    height = 'lg',
    visibleImages = 3,
    ...props 
  }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const heightClasses = {
      sm: 'h-64',
      md: 'h-96',
      lg: 'h-[500px]',
      xl: 'h-[600px]',
    };

    const nextSlide = useCallback(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= images.length - visibleImages ? 0 : prevIndex + 1
      );
    }, [images.length, visibleImages]);

    const prevSlide = useCallback(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? Math.max(0, images.length - visibleImages) : prevIndex - 1
      );
    }, [images.length, visibleImages]);

    const goToSlide = useCallback((index: number) => {
      setCurrentIndex(index);
    }, []);

    // Auto-play functionality
    useEffect(() => {
      if (!isPlaying || !autoPlay) return;

      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }, [isPlaying, autoPlay, autoPlayInterval, nextSlide]);

    // Pause on hover
    const handleMouseEnter = () => setIsPlaying(false);
    const handleMouseLeave = () => setIsPlaying(autoPlay);

    if (!images || images.length === 0) {
      return null;
    }

    return (
      <section
        ref={ref}
        className={cn(
          'relative w-full overflow-hidden py-16 bg-neutral-50',
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
            {title && (
              <h2 className="text-4xl font-merriweather font-bold text-neutral-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        {/* Horizontal Scroller Container - Full Width */}
        <div className="relative w-full">
          <div 
            ref={scrollContainerRef}
            className={cn(
              'relative overflow-hidden w-full',
              heightClasses[height]
            )}
          >
            {/* Images Container */}
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleImages}%)`,
                width: `${(images.length * 100) / visibleImages}%`
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 h-full"
                  style={{ width: `${100 / images.length}%` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    priority={index < visibleImages}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {showArrows && images.length > visibleImages && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10
                           bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900
                           p-3 rounded-full transition-all duration-200 shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-white/50
                           border border-gray-200"
                aria-label="Previous images"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10
                           bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900
                           p-3 rounded-full transition-all duration-200 shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-white/50
                           border border-gray-200"
                aria-label="Next images"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator - No Border */}
          {showDots && images.length > visibleImages && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10
                            flex space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
              {Array.from({ length: Math.max(1, images.length - visibleImages + 1) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    'w-3 h-3 rounded-full transition-all duration-200 focus:outline-none',
                    index === currentIndex 
                      ? 'bg-gray-800 scale-110' 
                      : 'bg-gray-400 hover:bg-gray-600'
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
);

ImageCarousel.displayName = 'ImageCarousel';

export { ImageCarousel };
