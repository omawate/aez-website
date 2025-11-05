'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types';

export interface ScrollerItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface HorizontalScrollerProps extends ComponentProps {
  items: ScrollerItem[];
  title?: string;
  subtitle?: string;
  height?: 'sm' | 'md' | 'lg' | 'xl';
  itemWidth?: number; // width of each item in pixels
  gap?: number; // gap between items in pixels
  showArrows?: boolean;
  visibleItems?: number; // number of items visible at once
}

const HorizontalScroller = React.forwardRef<HTMLElement, HorizontalScrollerProps>(
  ({ 
    className, 
    items, 
    title,
    subtitle,
    height = 'md',
    itemWidth = 300,
    gap = 16,
    showArrows = true,
    visibleItems = 3,
    ...props 
  }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollerRef = useRef<HTMLDivElement>(null);

    const heightClasses = {
      sm: 'h-48',
      md: 'h-64',
      lg: 'h-80',
      xl: 'h-96',
    };

    const nextSlide = useCallback(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, []);

    const prevSlide = useCallback(() => {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }, []);

    // Handle infinite scroll reset
    useEffect(() => {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const handleTransitionEnd = () => {
        if (currentIndex >= items.length) {
          // Reset to beginning without animation
          scroller.style.transition = 'none';
          setCurrentIndex(0);
          // Force reflow
          scroller.offsetHeight;
          // Re-enable transition
          scroller.style.transition = '';
        } else if (currentIndex < 0) {
          // Reset to end without animation
          scroller.style.transition = 'none';
          setCurrentIndex(items.length - 1);
          // Force reflow
          scroller.offsetHeight;
          // Re-enable transition
          scroller.style.transition = '';
        }
      };

      scroller.addEventListener('transitionend', handleTransitionEnd);
      return () => scroller.removeEventListener('transitionend', handleTransitionEnd);
    }, [currentIndex, items.length]);

    if (!items || items.length === 0) {
      return null;
    }

    // Duplicate items for seamless infinite scroll
    const duplicatedItems = [...items, ...items];

    return (
      <section
        ref={ref}
        className={cn(
          'relative w-full overflow-hidden py-16 bg-white',
          className
        )}
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
        
        {/* Scroller Container */}
        <div className="relative w-full">
          <div 
            className={cn(
              'relative overflow-hidden w-full',
              heightClasses[height]
            )}
          >
            {/* Scrolling Items */}
            <div 
              ref={scrollerRef}
              className="flex transition-transform duration-700 ease-in-out h-full items-center"
              style={{
                transform: `translateX(-${currentIndex * (itemWidth + gap)}px)`,
                gap: `${gap}px`
              }}
            >
              {duplicatedItems.map((item, index) => (
                <div
                  key={`${item.src}-${index}`}
                  className="relative flex-shrink-0 h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={0}
                    height={0}
                    className="h-full w-auto object-cover"
                    sizes="100vw"
                  />
                  {item.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium">{item.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {showArrows && duplicatedItems.length > visibleItems && (
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
        </div>
      </section>
    );
  }
);

HorizontalScroller.displayName = 'HorizontalScroller';

export { HorizontalScroller };
