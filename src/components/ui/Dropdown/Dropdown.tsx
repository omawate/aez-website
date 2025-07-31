'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ComponentProps, NavItem } from '@/types';

export interface DropdownProps extends ComponentProps {
  trigger: React.ReactNode;
  items: NavItem[];
  align?: 'left' | 'right';
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ className, trigger, items, align = 'left', ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }, []);

    return (
      <div
        ref={ref || dropdownRef}
        className={cn('relative inline-block', className)}
        {...props}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 transition-colors duration-200"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {trigger}
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
          />
        </button>

        {isOpen && (
          <div
            className={cn(
              'absolute top-full z-50 mt-2 min-w-48 rounded-lg border border-neutral-200 bg-white py-2 shadow-lg',
              align === 'right' ? 'right-0' : 'left-0'
            )}
          >
            {items.map((item, index) => (
              <React.Fragment key={`${item.href}-${index}`}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export { Dropdown };