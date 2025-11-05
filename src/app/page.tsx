'use client';

import { Hero, InfoSection, CountersSection, AlumniDestinationsSection, ImageCarousel, HorizontalScroller } from '@/components/sections';
import { Button } from '@/components/ui';
import { statsCounters, slideshowImages } from '@/lib/constants';
import Image from 'next/image';
import { useMemo } from 'react';

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Home() {
  // Randomize the order of images in the carousel
  const randomizedImages = useMemo(() => shuffleArray(slideshowImages), []);

  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="ALPHA EPSILON ZETA"
        subtitle="Berkeley's Premier Multidisciplinary Professional Fraternity"
        backgroundImage="https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6823a2530009ab7af361bb37_2M0A9552.jpg"
        height="full"
        className="[&_h1]:font-serif"
        actions={
          <>
            <Button
              href="/brothers"
              size="lg"
              className="bg-ink/95 backdrop-blur-sm text-white hover:bg-white hover:text-neutral-900 px-8 py-4 text-lg font-semibold rounded-none border border-white/20 shadow-lg"
              style={{color: '#ffffff !important', textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}}
            >
              Meet Our Brothers
            </Button>
            <Button
              href="https://airtable.com/appoEeyrE51PL5szS/pagzqgUqNe5oEKFy7/form"
              size="lg"
              className="bg-ink/95 backdrop-blur-sm text-white hover:bg-white hover:text-neutral-900 px-8 py-4 text-lg font-semibold rounded-none border border-white/20 shadow-lg"
              style={{color: '#ffffff !important', textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}}
            >
              Apply Now
            </Button>
          </>
        }
      />

      {/* Who We Are Section */}
      <InfoSection
        title="Who We Are"
        content={[
          "Alpha Epsilon Zeta (AEZ) is an undergraduate professional fraternity at the University of California, Berkeley. AEZ distinguishes itself from traditional professional fraternities by embracing a multidisciplinary focus. The brothers of AEZ come from a wide variety of majors, ranging from biology to business to engineering, and each brother strives to be well-versed in all aspects of every academic discipline. We are dedicated to promoting and fostering professionalism, brotherhood, unity, and tradition.",
          "Since its establishment in 2003, AEZ has grown substantially and currently has more than 200 active and alumni brothers. AEZ's alumni have leveraged the skills gained during their time as actives to excel at top firms such as Meta, Google, McKinsey, and Goldman Sachs and renowned graduate schools including Stanford Medical School and Harvard Business School."
        ]}
        image={{
          src: "https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6823a38453f092e654701b3e_2M0A0260-p-2600.jpg",
          alt: "AEZ Brothers at Berkeley",
          priority: true
        }}
        layout="right"
      />

      {/* Statistics Section */}
      <CountersSection
        counters={statsCounters}
        className="bg-neutral-50"
      />

      {/* Alumni Destinations Section */}
      <AlumniDestinationsSection className="[&_.rounded-lg]:rounded-none" />

      {/* Horizontal Scroller Section */}
      <HorizontalScroller
        title="Our Community"
        subtitle="Experience the brotherhood and lifelong connections of AEZ"
        items={randomizedImages}
        height="lg"
        itemWidth={350}
        gap={20}
        visibleItems={3}
        showArrows={true}
        className="bg-neutral-50"
      />

    </main>
  );
}
