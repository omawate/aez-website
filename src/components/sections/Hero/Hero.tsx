'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ComponentProps, HeroHeight } from '@/types';

export interface HeroProps extends ComponentProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  overlay?: boolean;
  height?: HeroHeight;
  actions?: React.ReactNode;
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ 
    className, 
    title, 
    subtitle, 
    backgroundImage, 
    overlay = true, 
    height = 'full',
    actions,
    ...props 
  }, ref) => {
    const heightClasses = {
      sm: 'h-64',
      md: 'h-96',
      lg: 'h-screen',
      full: 'min-h-screen',
    };

    const backgroundStyles = backgroundImage ? {
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center 80%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    } : {};

    return (
      <section
        ref={ref}
        className={cn(
          'relative flex items-center justify-center overflow-hidden',
          heightClasses[height],
          className
        )}
        style={backgroundStyles}
        {...props}
      >
        {/* Background Overlay */}
        {overlay && (
          <div className="absolute inset-0 bg-black/60 z-10" />
        )}

        {/* Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Title */}
            <h1 className={cn(
              'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white',
              'tracking-tight leading-tight',
              'animate-fade-in-up opacity-0',
              '[animation-delay:0.1s] [animation-fill-mode:forwards]'
            )}>
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className={cn(
                'text-lg sm:text-xl md:text-2xl text-white/90 font-normal',
                'max-w-3xl mx-auto leading-relaxed',
                'animate-fade-in-up opacity-0',
                '[animation-delay:0.4s] [animation-fill-mode:forwards]'
              )}>
                {subtitle}
              </p>
            )}

            {/* Actions */}
            {actions && (
              <div className={cn(
                'flex flex-col sm:flex-row gap-4 justify-center items-center pt-4',
                'animate-fade-in-up opacity-0',
                '[animation-delay:0.7s] [animation-fill-mode:forwards]'
              )}>
                {actions}
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    );
  }
);

Hero.displayName = 'Hero';

export { Hero };