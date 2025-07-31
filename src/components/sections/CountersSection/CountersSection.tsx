import React from 'react';
import { cn } from '@/lib/utils';
import { ComponentProps, CounterData } from '@/types';
import { Counter } from './Counter';

export interface CountersSectionProps extends ComponentProps {
  counters: CounterData[];
  title?: string;
  description?: string;
}

const CountersSection = React.forwardRef<HTMLElement, CountersSectionProps>(
  ({ className, counters, title, description, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'py-16 md:py-24 bg-white',
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          {(title || description) && (
            <div className="text-center mb-12 md:mb-16">
              {title && (
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Counters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {counters.map((counter, index) => (
              <Counter
                key={index}
                {...counter}
                className="justify-self-center"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
);

CountersSection.displayName = 'CountersSection';

export { CountersSection };