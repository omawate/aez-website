import { Montserrat, Playfair_Display, Inter } from 'next/font/google';

// Primary font for body text and UI
export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

// Secondary font for headings and emphasis
export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

// Fallback system font
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// Font combinations for different use cases
export const fontClasses = {
  // Headings
  heading: 'font-playfair font-bold tracking-tight',
  subheading: 'font-montserrat font-semibold',
  
  // Body text
  body: 'font-montserrat font-normal',
  bodyLarge: 'font-montserrat font-normal text-lg',
  
  // UI elements
  ui: 'font-montserrat font-medium',
  button: 'font-montserrat font-semibold tracking-wide',
  nav: 'font-montserrat font-medium',
  
  // Special cases
  hero: 'font-montserrat font-black tracking-tight',
  accent: 'font-playfair font-semibold italic',
  
  // Executive roles (special typography)
  executive: 'font-playfair font-medium italic',
} as const;