// Base component props
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Brother data types
export interface Brother {
  id: string;
  name: string;
  class: string;
  major: string;
  year: 'freshman' | 'sophomore' | 'junior' | 'senior';
  hometown: string;
  bio: string;
  image: string;
  email: string;
  interests: string[];
  isExecutive?: boolean;
  executiveRole?: string;
}

// Alumni data types
export interface Alumni {
  name: string;
  class: string;
  company: string;
  position: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  dropdown?: NavItem[];
}

// Timeline types
export interface TimelineEvent {
  id: string;
  title: string;
  date: Date;
  description: string;
  type: 'info' | 'event' | 'deadline';
  status?: 'upcoming' | 'current' | 'completed';
}

// Counter types
export interface CounterData {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  animationDuration?: number;
}

// Image types
export interface ImageData {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}

// SEO and metadata types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

// Page props
export interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Component variant types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type CardVariant = 'default' | 'elevated' | 'outline';
export type HeroHeight = 'sm' | 'md' | 'lg' | 'full';