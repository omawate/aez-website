import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date for display
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

// Format date for timeline (shorter format)
export function formatTimelineDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(date);
}

// Slugify string for URLs
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Capitalize first letter
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Generate initials from name
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// Debounce function
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Check if date is in the past
export function isPastDate(date: Date): boolean {
  return date < new Date();
}

// Check if date is today
export function isToday(date: Date): boolean {
  const today = new Date();
  return date.toDateString() === today.toDateString();
}

// Get relative time string
export function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((date.getTime() - now.getTime()) / 1000);
  
  if (diffInSeconds < 0) {
    const absDiff = Math.abs(diffInSeconds);
    if (absDiff < 60) return 'just now';
    if (absDiff < 3600) return `${Math.floor(absDiff / 60)} minutes ago`;
    if (absDiff < 86400) return `${Math.floor(absDiff / 3600)} hours ago`;
    return `${Math.floor(absDiff / 86400)} days ago`;
  }
  
  if (diffInSeconds < 60) return 'in a few moments';
  if (diffInSeconds < 3600) return `in ${Math.floor(diffInSeconds / 60)} minutes`;
  if (diffInSeconds < 86400) return `in ${Math.floor(diffInSeconds / 3600)} hours`;
  return `in ${Math.floor(diffInSeconds / 86400)} days`;
}

// Animation utility for scroll-triggered effects
export function animateOnScroll(
  element: Element,
  callback: () => void,
  threshold: number = 0.1
): IntersectionObserver {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );
  
  observer.observe(element);
  return observer;
}