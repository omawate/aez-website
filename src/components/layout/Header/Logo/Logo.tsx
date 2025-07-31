import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types';

export interface LogoProps extends ComponentProps {
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(
  ({ className, size = 'md', href = '/', ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-8 w-8',
      md: 'h-12 w-12',
      lg: 'h-16 w-16',
    };

    const logoElement = (
      <Image
        src="https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/63741e15608f0b87b4561559_final_logo-2.png"
        alt="Alpha Epsilon Zeta Logo"
        width={size === 'lg' ? 64 : size === 'md' ? 48 : 32}
        height={size === 'lg' ? 64 : size === 'md' ? 48 : 32}
        className={cn(
          'object-contain transition-transform duration-200 hover:scale-105',
          sizeClasses[size]
        )}
        priority
      />
    );

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          'inline-flex items-center justify-center rounded-lg p-1 transition-all duration-200',
          'hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50',
          className
        )}
        aria-label="Alpha Epsilon Zeta Home"
        {...props}
      >
        {logoElement}
      </Link>
    );
  }
);

Logo.displayName = 'Logo';

export { Logo };