'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { executives, regularBrothers } from '@/data/brothers';
import { Brother } from '@/types';
import { brotherClasses } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function BrothersPage() {
  const [selectedClass, setSelectedClass] = useState<string>('all');

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
    <div className="min-h-screen bg-paper">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: 'url(https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/68a8ff34a04275a564363165_IMG_6035.jpeg)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'contain',
            backgroundPosition: 'center top'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tightish text-white" style={{color: '#ffffff !important'}}>Brothers</h1>
          <p className="text-lg md:text-xl font-sans font-light max-w-2xl mx-auto leading-relaxed">
          Meet the driven individuals who make up Alpha Epsilon Zeta
          </p>
        </div>
      </section>


      {/* Filters Section */}
      <section className="py-4 bg-paper">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant='outline'
                onClick={() => setSelectedClass('all')}
                size="sm"
                className={`rounded-none ${selectedClass === 'all' ? 'bg-[#3d0f19] text-white border-[#3d0f19] ring-2 ring-[#3d0f19]/50 shadow-lg' : ''}`}
              >
                All Classes
              </Button>
              {availableClasses.map((className) => (
                <Button
                  key={className}
                  variant='outline'
                  onClick={() => setSelectedClass(className)}
                  size="sm"
                  className={`rounded-none ${selectedClass === className ? 'bg-[#3d0f19] text-white border-[#3d0f19] ring-2 ring-[#3d0f19]/50 shadow-lg' : ''}`}
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
      <section className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-3">
          {selectedClass === 'all' ? (
            <h2 className="text-4xl font-merriweather font-bold text-center mb-12">All Brothers</h2>
          ) : (
            <h2 className="text-4xl font-merriweather font-bold text-center mb-12">
              {brotherClasses[selectedClass as keyof typeof brotherClasses]?.fullName || selectedClass}
            </h2>
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
    <Card className="card-hover-overlay group hover:shadow-soft transition-all duration-300 border-0 p-0">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={brother.image}
          alt={`${brother.name} headshot`}
          fill
          className="object-cover transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        
        {/* Executive Tag */}
        {showExecutiveTag && brother.isExecutive && brother.executiveRole && (
          <div className="absolute top-3 left-3 z-10 m-1">
            <span className="bg-ink/95 backdrop-blur-sm text-white px-2 py-1 text-sm font-medium uppercase tracking-caps shadow-lg border border-white/20" style={{color: '#ffffff !important', textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}}>
              {brother.executiveRole}
            </span>
          </div>
        )}
        
        {/* Basic Info Overlay (Always Visible, Hidden on Hover) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-300" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)'}}>
          <div className="text-2xl font-serif font-semibold mb-2 text-white" style={{color: '#ffffff !important', WebkitTextFillColor: '#ffffff !important', textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'}}>{brother.name}</div>
          <div className="space-y-1 text-sm">
            <p className="text-xs uppercase tracking-caps text-gray-400 font-medium">{brother.class}</p>
            <p className="text-white/90">{brother.major}</p>
          </div>
        </div>
        
        {/* Summary Overlay (Shows on Hover) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)'}}>
          <div className="text-2xl font-serif font-semibold mb-2 text-white" style={{color: '#ffffff !important', WebkitTextFillColor: '#ffffff !important', textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>{brother.name}</div>
          <div className="space-y-1 text-sm mb-3">
            <p className="text-xs uppercase tracking-caps text-gray-400 font-medium">{brother.class}</p>
            <p className="text-white/95 font-medium">{brother.major}</p>
          </div>
          <p className="text-sm text-white/95 leading-relaxed line-clamp-12" style={{textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'}}>{brother.bio}</p>
        </div>
      </div>
    </Card>
  );
}

function ProfessionalBrotherListCard({ brother, showExecutiveTag }: BrotherCardProps) {
  return (
    <Card className="hover:shadow-soft transition-all duration-200">
      <div className="flex items-center gap-4 p-4">
        <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden">
          <Image
            src={brother.image}
            alt={`${brother.name} headshot`}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-lg font-serif font-semibold text-ink">{brother.name}</h3>
            {showExecutiveTag && brother.isExecutive && brother.executiveRole && (
              <span className="bg-ink text-white px-2 py-1 text-sm font-medium uppercase tracking-caps" style={{color: '#ffffff !important', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'}}>
                {brother.executiveRole}
              </span>
            )}
          </div>
          <div className="flex items-center gap-4 text-sm text-stone mb-2">
            <span className="text-editorial-label">{brother.class}</span>
            <span>•</span>
            <span>{brother.major}</span>
          </div>
          <p className="text-sm text-stone line-clamp-2 leading-relaxed">{brother.bio}</p>
        </div>
      </div>
    </Card>
  );
}
