import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types';

export interface InfoSectionProps extends ComponentProps {
  title: string;
  content: string | string[];
  image?: {
    src: string;
    alt: string;
    priority?: boolean;
  };
  layout?: 'left' | 'right';
  background?: 'white' | 'gray';
}

const InfoSection = React.forwardRef<HTMLElement, InfoSectionProps>(
  ({ 
    className, 
    title, 
    content, 
    image, 
    layout = 'right',
    background = 'white',
    ...props 
  }, ref) => {
    const contentArray = Array.isArray(content) ? content : [content];
    
    const backgroundClasses = {
      white: 'bg-white',
      gray: 'bg-neutral-50',
    };

    return (
      <section
        ref={ref}
        className={cn(
          'py-16 md:py-24',
          backgroundClasses[background],
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={cn(
            'grid lg:grid-cols-2 gap-12 lg:gap-16 items-center',
            layout === 'left' && 'lg:grid-flow-col-dense'
          )}>
            {/* Text Content */}
            <div className={cn(
              'space-y-6',
              layout === 'right' ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'
            )}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 font-playfair leading-tight">
                {title}
              </h2>
              
              <div className="space-y-4">
                {contentArray.map((paragraph, index) => (
                  <p 
                    key={index}
                    className="text-base md:text-lg text-neutral-700 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Image */}
            {image && (
              <div className={cn(
                'relative',
                layout === 'right' ? 'lg:pl-8' : 'lg:pr-8 lg:col-start-1 lg:row-start-1'
              )}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={image.priority}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
);

InfoSection.displayName = 'InfoSection';

export { InfoSection };