import React from 'react';
import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types';

export interface PageWrapperProps extends ComponentProps {
  title?: string;
  description?: string;
  heroSection?: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  paddingTop?: boolean;
}

const PageWrapper = React.forwardRef<HTMLDivElement, PageWrapperProps>(
  ({ 
    className, 
    children, 
    title,
    description,
    heroSection,
    maxWidth = 'full',
    paddingTop = true,
    ...props 
  }, ref) => {
    const maxWidthClasses = {
      sm: 'max-w-sm',
      md: 'max-w-2xl',
      lg: 'max-w-4xl',
      xl: 'max-w-6xl',
      '2xl': 'max-w-7xl',
      full: '',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'min-h-screen flex flex-col',
          paddingTop && 'pt-16', // Account for fixed header
          className
        )}
        {...props}
      >
        {/* Hero Section */}
        {heroSection && (
          <div className="flex-shrink-0">
            {heroSection}
          </div>
        )}

        {/* Page Header (if no hero section) */}
        {!heroSection && (title || description) && (
          <div className="bg-neutral-50 py-12">
            <div className={cn(
              'mx-auto px-4 sm:px-6 lg:px-8',
              maxWidthClasses[maxWidth]
            )}>
              {title && (
                <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                  {title}
                </h1>
              )}
              {description && (
                <p className="text-lg text-neutral-600 max-w-3xl">
                  {description}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-grow">
          <div className={cn(
            maxWidth === 'full' ? '' : 'mx-auto px-4 sm:px-6 lg:px-8',
            maxWidth !== 'full' && maxWidthClasses[maxWidth]
          )}>
            {children}
          </div>
        </main>
      </div>
    );
  }
);

PageWrapper.displayName = 'PageWrapper';

export { PageWrapper };