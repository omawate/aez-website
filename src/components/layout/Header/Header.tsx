'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export interface HeaderProps extends ComponentProps {
  transparent?: boolean;
  fixed?: boolean;
  showLogo?: boolean;
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ 
    className, 
    transparent = false, 
    fixed = true, 
    showLogo = true,
    ...props 
  }, ref) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }

      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isMobileMenuOpen]);

    const headerClasses = cn(
      'w-full z-50 transition-all duration-300',
      fixed && 'fixed top-0 left-0 right-0',
      transparent && !isScrolled
        ? 'bg-transparent'
        : 'bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm',
      className
    );

    const containerClasses = cn(
      'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
      'flex items-center justify-between h-16'
    );

    return (
      <header ref={ref} className={headerClasses} {...props}>
        <div className={containerClasses}>
          {/* Logo */}
          {showLogo && (
            <div className="flex-shrink-0">
              <Logo 
                size="md" 
                className={cn(
                  transparent && !isScrolled 
                    ? 'hover:bg-white/10' 
                    : 'hover:bg-neutral-100'
                )}
              />
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation 
              variant="desktop"
              isScrolled={isScrolled}
              isTransparent={transparent}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'inline-flex items-center justify-center p-2 rounded-lg transition-colors',
                transparent && !isScrolled
                  ? 'text-white hover:bg-white/10'
                  : 'text-neutral-700 hover:bg-neutral-100'
              )}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="fixed top-16 left-0 right-0 z-50 bg-white border-b border-neutral-200 shadow-lg">
              <Navigation variant="mobile" />
            </div>
          </div>
        )}
      </header>
    );
  }
);

Header.displayName = 'Header';

export { Header };