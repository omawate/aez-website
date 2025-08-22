'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { executives, regularBrothers } from '@/data/brothers';
import { Brother } from '@/types';
import { brotherClasses } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export default function BrothersPage() {
  const [selectedClass, setSelectedClass] = useState<string>('all');
  // const [showExecutives, setShowExecutives] = useState(true);

  const allBrothers = useMemo(() => [...executives, ...regularBrothers], []);

  const filteredBrothers = useMemo(() => {
    let filtered = allBrothers;
    
    if (selectedClass !== 'all') {
      filtered = filtered.filter(brother => brother.class === selectedClass);
    }
    
    const sorted = filtered.sort((a, b) => {
      // First sort by class order
      const classA = brotherClasses[a.class as keyof typeof brotherClasses]?.order ?? 1000;
      const classB = brotherClasses[b.class as keyof typeof brotherClasses]?.order ?? 1000;
      
      if (classA !== classB) {
        return classA - classB;
      }
      
      // If same class, sort by last name alphabetically
      const lastNameA = a.name.split(' ').pop() || '';
      const lastNameB = b.name.split(' ').pop() || '';
      
      return lastNameA.localeCompare(lastNameB);
    });
    
    return sorted;
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
            backgroundImage: 'url(https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/68a8ff34a04275a564363165_IMG_6035.jpeg)'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-merriweather font-bold mb-4">Brothers</h1>
                      <p className="text-xl md:text-2xl font-inter max-w-2xl mx-auto px-4">
              Meet the driven individuals who make up Alpha Epsilon Zeta
            </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant={selectedClass === 'all' ? 'primary' : 'outline'}
                onClick={() => setSelectedClass('all')}
                className={selectedClass === 'all' ? 'bg-[#3d0f19] hover:bg-[#2a0a12] border-[#3d0f19]' : ''}
              >
                All Classes
              </Button>
              {availableClasses.map((className) => (
                <Button
                  key={className}
                  variant={selectedClass === className ? 'primary' : 'outline'}
                  onClick={() => setSelectedClass(className)}
                  className={selectedClass === className ? 'bg-[#3d0f19] hover:bg-[#2a0a12] border-[#3d0f19]' : ''}
                >
                  {brotherClasses[className as keyof typeof brotherClasses]?.fullName || className}
                </Button>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Executive Board Section */}
      {selectedClass === 'all' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-3">
            <h2 className="text-4xl font-merriweather font-bold text-center mb-12">Executive Board</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {executives.map((brother) => (
                <BrotherCard key={brother.id} brother={brother} showExecutiveTag={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Brothers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-3">
          {selectedClass === 'all' && (
            <h2 className="text-4xl font-merriweather font-bold text-center mb-12">All Brothers</h2>
          )}
          
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredBrothers.map((brother) => (
                <BrotherCard key={brother.id} brother={brother} showExecutiveTag={false} />
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}

interface BrotherCardProps {
  brother: Brother;
  showExecutiveTag: boolean;
}

function BrotherCard({ brother, showExecutiveTag }: BrotherCardProps) {
  return (
    <div className="overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={brother.image}
          alt={`${brother.name} headshot`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      
      <div className="p-2">
        <h3 className="text-xl font-merriweather font-bold mb-2">{brother.name}</h3>
        {showExecutiveTag && brother.isExecutive && brother.executiveRole && (
          <div className="mb-2">
            <span className="text-white px-2 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#3d0f19' }}>
              {brother.executiveRole}
            </span>
          </div>
        )}
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <p className="font-medium">{brother.class}</p>
          <p>{brother.major}</p>
        </div>
        
        <p className="text-sm text-gray-700">{brother.bio}</p>
      </div>
    </div>
  );
}