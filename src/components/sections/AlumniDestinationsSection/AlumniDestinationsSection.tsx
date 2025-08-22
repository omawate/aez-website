import Image from 'next/image';

export interface AlumniDestinationsSectionProps {
  className?: string;
}

export const AlumniDestinationsSection = ({ className = '' }: AlumniDestinationsSectionProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-merriweather font-bold text-center mb-12">Alumni Destinations</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Our brothers have gone on to excel worldwide—in Silicon Valley tech, Wall Street finance, top graduate programs, and innovative startups.
        </p>
        <div className="max-w-4xl mx-auto">
          <Image
            src="https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/65b24201cf035e83b6b9f75e_Screenshot%202024-01-25%20at%203.11.29%E2%80%AFAM.jpg"
            alt="Alumni Destinations Map"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}; 