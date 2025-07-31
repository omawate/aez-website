'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ComponentProps, CounterData } from '@/types';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export interface CounterProps extends ComponentProps, CounterData {}

const Counter = React.forwardRef<HTMLDivElement, CounterProps>(
  ({ 
    className, 
    value, 
    label, 
    prefix = '', 
    suffix = '', 
    animationDuration = 2000,
    ...props 
  }, ref) => {
    const [currentValue, setCurrentValue] = useState(0);
    const { ref: observerRef, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
      threshold: 0.5,
    });

    useEffect(() => {
      if (!isIntersecting) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / animationDuration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const animatedValue = Math.floor(easeOutQuart * value);
        
        setCurrentValue(animatedValue);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [isIntersecting, value, animationDuration]);

    // Combine refs
    const combinedRef = (node: HTMLDivElement) => {
      observerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    return (
      <div
        ref={combinedRef}
        className={cn(
          'flex flex-col items-center text-center space-y-3',
          'min-w-[180px] p-4',
          className
        )}
        {...props}
      >
        {/* Counter Number */}
        <div className={cn(
          'text-4xl md:text-5xl font-black text-neutral-900',
          'leading-none tracking-tight',
          isIntersecting && 'animate-counter'
        )}>
          {prefix}{currentValue}{suffix}
        </div>

        {/* Counter Label */}
        <div className="text-sm md:text-base font-medium text-neutral-600 leading-tight whitespace-pre-line">
          {label}
        </div>
      </div>
    );
  }
);

Counter.displayName = 'Counter';

export { Counter };