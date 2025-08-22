import { Inter, Merriweather } from 'next/font/google';

// Primary font for body text and UI
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// Secondary font for headings and emphasis
export const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['300', '400', '700', '900'],
  display: 'swap',
});

// Font combinations for different use cases
export const fontClasses = {
  // Headings
  heading: 'font-merriweather font-bold tracking-tight',
  subheading: 'font-inter font-semibold',
  
  // Body text
  body: 'font-inter font-normal',
  bodyLarge: 'font-inter font-normal text-lg',
  
  // UI elements
  ui: 'font-inter font-medium',
  button: 'font-inter font-semibold tracking-wide',
  nav: 'font-inter font-medium',
  
  // Special cases
  hero: 'font-inter font-black tracking-tight',
  accent: 'font-merriweather font-semibold italic',
  
  // Executive roles (special typography)
  executive: 'font-merriweather font-medium italic',
} as const;