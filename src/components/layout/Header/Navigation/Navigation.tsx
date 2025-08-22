'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ComponentProps, NavItem } from '@/types';
import { Dropdown } from '@/components/ui';
import { navigation, socialLinks } from '@/lib/constants';

export interface NavigationProps extends ComponentProps {
  items?: NavItem[];
  variant?: 'desktop' | 'mobile';
  isScrolled?: boolean;
  isTransparent?: boolean;
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className, items = navigation, variant = 'desktop', isScrolled = false, isTransparent = false, ...props }, ref) => {
    const pathname = usePathname();

    if (variant === 'mobile') {
      return (
        <nav
          ref={ref}
          className={cn(
            'flex flex-col space-y-1 p-4',
            className
          )}
          {...props}
        >
          {items.map((item, index) => (
            <React.Fragment key={`${item.href}-${index}`}>
              {item.dropdown ? (
                <div className="space-y-1">
                  <div className="px-3 py-2 text-sm font-medium text-neutral-500">
                    {item.label}
                  </div>
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <React.Fragment key={`${dropdownItem.href}-${dropdownIndex}`}>
                      {dropdownItem.external ? (
                        <a
                          href={dropdownItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-lg px-6 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                        >
                          {dropdownItem.label}
                        </a>
                      ) : (
                        <Link
                          href={dropdownItem.href}
                          className={cn(
                            'block rounded-lg px-6 py-2 text-sm transition-colors hover:bg-neutral-100',
                            pathname === dropdownItem.href
                              ? 'bg-primary-50 text-primary-700'
                              : 'text-neutral-700 hover:text-neutral-900'
                          )}
                        >
                          {dropdownItem.label}
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ) : item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-neutral-100',
                    pathname === item.href
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-neutral-700 hover:text-neutral-900'
                  )}
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          ))}
          
          {/* Mobile Social Links */}
          <div className="flex items-center justify-center space-x-4 pt-4 mt-4 border-t border-neutral-200">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-600 hover:text-primary-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-600 hover:text-primary-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </nav>
      );
    }

    return (
      <nav
        ref={ref}
        className={cn(
          'flex items-center space-x-6',
          className
        )}
        {...props}
      >
        {items.map((item, index) => (
          <React.Fragment key={`${item.href}-${index}`}>
            {item.dropdown ? (
              <Dropdown
                trigger={
                  <span className={cn(
                    'text-sm font-medium transition-colors',
                    pathname === item.href 
                      ? 'text-[#3d0f19] font-semibold' 
                      : isTransparent && !isScrolled ? 'text-white hover:text-white/80' : 'text-neutral-900 hover:text-neutral-600'
                  )}>
                    {item.label}
                  </span>
                }
                items={item.dropdown}
                align="right"
              />
            ) : item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'text-sm font-medium transition-colors',
                  isTransparent && !isScrolled ? 'text-white hover:text-white/80' : 'text-neutral-900 hover:text-neutral-600'
                )}
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors',
                  pathname === item.href 
                    ? 'text-[#3d0f19] font-semibold' 
                    : isTransparent && !isScrolled ? 'text-white hover:text-white/80' : 'text-neutral-900 hover:text-neutral-600'
                )}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        ))}
        
        {/* Desktop Social Icons */}
        <div className="flex items-center space-x-3 ml-6">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'p-1 transition-colors',
              isTransparent && !isScrolled ? 'text-white hover:text-white/80' : 'text-neutral-900 hover:text-neutral-600'
            )}
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'p-1 transition-colors',
              isTransparent && !isScrolled ? 'text-white hover:text-white/80' : 'text-neutral-900 hover:text-neutral-600'
            )}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </nav>
    );
  }
);

Navigation.displayName = 'Navigation';

export { Navigation };