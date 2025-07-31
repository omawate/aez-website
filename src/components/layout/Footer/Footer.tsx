import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ComponentProps } from '@/types';
import { socialLinks } from '@/lib/constants';

export interface FooterProps extends ComponentProps {
  variant?: 'default';
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, ...props }, ref) => {
    const currentYear = new Date().getFullYear();

    return (
      <footer
        ref={ref}
        className={cn(
          'bg-neutral-900 text-white py-8',
          className
        )}
        {...props}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Icons */}
            <div className="flex items-center space-x-6">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-neutral-800"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-neutral-800"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={socialLinks.email}
                className="p-2 text-neutral-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-neutral-800"
                aria-label="Send us an email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-sm text-neutral-400">
                © {currentYear} — Alpha Epsilon Zeta | UC Berkeley
              </p>
            </div>

            {/* Additional Info */}
            <div className="text-center text-xs text-neutral-500 max-w-md">
              <p>
                Berkeley&apos;s Premier Multidisciplinary Professional Fraternity
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = 'Footer';

export { Footer };