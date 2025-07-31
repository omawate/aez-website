import { Metadata } from 'next';
import { PageMetadata } from '@/types';

const siteConfig = {
  name: 'Alpha Epsilon Zeta',
  description: "Berkeley's Premier Multidisciplinary Professional Fraternity",
  url: 'https://aezberkeley.com',
  ogImage: '/images/og-image.jpg',
  links: {
    instagram: 'https://www.instagram.com/aezberkeley/',
    linkedin: 'https://www.linkedin.com/company/alpha-epsilon-zeta/',
    email: 'mailto:aezberkeley@gmail.com',
  },
};

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage,
  canonicalUrl,
}: PageMetadata): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const fullDescription = description || siteConfig.description;
  const imageUrl = ogImage || siteConfig.ogImage;
  const url = canonicalUrl || siteConfig.url;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [
      'Alpha Epsilon Zeta',
      'AEZ',
      'UC Berkeley',
      'Professional Fraternity',
      'Multidisciplinary',
      'Berkeley',
      'Business',
      'Engineering',
      'Pre-med',
      'Networking',
      ...keywords,
    ],
    authors: [{ name: 'Alpha Epsilon Zeta' }],
    creator: 'Alpha Epsilon Zeta',
    publisher: 'Alpha Epsilon Zeta',
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${fullDescription}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}

export { siteConfig };