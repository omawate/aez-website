'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { executives, regularBrothers } from '@/data/brothers';
import { Brother } from '@/types';
import { brotherClasses } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function BrothersPage() {
  const [selectedClass, setSelectedClass] = useState<string>('all');
  // const [showExecutives, setShowExecutives] = useState(true);

  const allBrothers = useMemo(() => [...executives, ...regularBrothers], []);

  const filteredBrothers = useMemo(() => {
    let filtered = allBrothers;
    
    if (selectedClass !== 'all') {
      filtered = filtered.filter(brother => brother.class === selectedClass);
    }
    
    // if (!showExecutives) {
    //   filtered = filtered.filter(brother => !brother.isExecutive);
    // }
    
    return filtered.sort((a, b) => {
      // Sort by executive status first, then by class order
      if (a.isExecutive !== b.isExecutive) {
        return a.isExecutive ? -1 : 1;
      }
      
      const classA = brotherClasses[a.class as keyof typeof brotherClasses]?.order ?? 999;
      const classB = brotherClasses[b.class as keyof typeof brotherClasses]?.order ?? 999;
      
      return classA - classB;
    });
  }, [allBrothers, selectedClass]);

  const availableClasses = useMemo(() => {
    const classes = Array.from(new Set(allBrothers.map(brother => brother.class)));
    return classes.sort((a, b) => {
      const orderA = brotherClasses[a as keyof typeof brotherClasses]?.order ?? 999;
      const orderB = brotherClasses[b as keyof typeof brotherClasses]?.order ?? 999;
      return orderA - orderB;
    });
  }, [allBrothers]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://lh3.googleusercontent.com/pw/AP1GczNeV9GeZNAIpb5tQy_nF9d2f0yvnp-f_nSmVwW-0EC-jWua6Sth5jc9oojpktckkjCAhimJuU-LV8xIXYiBsCzLzP1fP_Ko1Cg3aZ4Ne1z7tUmqn72kKv2-jYnRTvTY-vagqkNdRNLfGOJmOjfqHi0DoQ=w2626-h1750-s-no-gm)'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-4">Brothers</h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto px-4">
            Meet the driven individuals who make up Alpha Epsilon Zeta
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            <div className="flex flex-wrap gap-3">
              <Button
                variant={selectedClass === 'all' ? 'primary' : 'outline'}
                onClick={() => setSelectedClass('all')}
              >
                All Classes
              </Button>
              {availableClasses.map((className) => (
                <Button
                  key={className}
                  variant={selectedClass === className ? 'primary' : 'outline'}
                  onClick={() => setSelectedClass(className)}
                >
                  {brotherClasses[className as keyof typeof brotherClasses]?.fullName || className}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mb-8">
            {/* Showing {filteredBrothers.length} brother{filteredBrothers.length !== 1 ? 's' : ''} */}
            {selectedClass !== 'all' && ` from ${brotherClasses[selectedClass as keyof typeof brotherClasses]?.fullName || selectedClass}`}
          </p>
        </div>
      </section>

      {/* Executive Board Section */}
      {selectedClass === 'all' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-playfair font-bold text-center mb-12">Executive Board</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {executives.map((brother) => (
                <BrotherCard key={brother.id} brother={brother} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Brothers Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedClass === 'all' && (
            <h2 className="text-4xl font-playfair font-bold text-center mb-12">All Brothers</h2>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBrothers.map((brother) => (
              <BrotherCard key={brother.id} brother={brother} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

interface BrotherCardProps {
  brother: Brother;
}

function BrotherCard({ brother }: BrotherCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={brother.image}
          alt={`${brother.name} headshot`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {brother.isExecutive && brother.executiveRole && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {brother.executiveRole}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-playfair font-bold mb-2">{brother.name}</h3>
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <p className="font-medium">{brother.class} • {brother.year}</p>
          <p>{brother.major}</p>
          <p>{brother.hometown}</p>
        </div>
        
        <p className="text-sm text-gray-700 mb-4 line-clamp-4">{brother.bio}</p>
        
        {brother.interests && brother.interests.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {brother.interests.slice(0, 3).map((interest, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
              >
                {interest}
              </span>
            ))}
            {brother.interests.length > 3 && (
              <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                +{brother.interests.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}