import { Hero, InfoSection, CountersSection, AlumniDestinationsSection } from '@/components/sections';
import { Button } from '@/components/ui';
import { statsCounters } from '@/lib/constants';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="ALPHA EPSILON ZETA"
        subtitle="Berkeley's Premier Multidisciplinary Professional Fraternity"
        backgroundImage="https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6823a2530009ab7af361bb37_2M0A9552.jpg"
        height="full"
        actions={
          <>
            <Button
              href="/brothers"
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Meet Our Brothers
            </Button>
            <Button
              href="https://airtable.com/appyWVJTerxEykO4A/pagzqgUqNe5oEKFy7/form"
              external
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-4 text-lg font-semibold"
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
      <AlumniDestinationsSection />
    </main>
  );
}
