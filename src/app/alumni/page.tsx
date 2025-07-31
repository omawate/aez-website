'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { alumni, alumniByClass, uniqueCompanies, notableCompanies } from '@/data/alumni';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function AlumniPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('all');

  const filteredAlumni = useMemo(() => {
    let filtered = alumni;
    
    if (selectedClass !== 'all') {
      filtered = filtered.filter(alumnus => alumnus.class === selectedClass);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(alumnus => 
        alumnus.name.toLowerCase().includes(term) ||
        alumnus.company.toLowerCase().includes(term) ||
        alumnus.position.toLowerCase().includes(term)
      );
    }
    
    return filtered;
  }, [searchTerm, selectedClass]);

  const availableClasses = useMemo(() => {
    const classes = Object.keys(alumniByClass);
    // Define the order of classes
    const classOrder = [
      'Founder', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota',
      'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon',
      'Phi', 'Chi', 'Psi', 'Alpha Alpha', 'Alpha Beta', 'Alpha Gamma'
    ];
    
    return classes.sort((a, b) => {
      const indexA = classOrder.indexOf(a);
      const indexB = classOrder.indexOf(b);
      return indexA - indexB;
    });
  }, []);

  const stats = useMemo(() => {
    const companiesWithNotable = alumni.filter(a => 
      notableCompanies.some(notable => a.company.toLowerCase().includes(notable.toLowerCase()))
    );
    
    const founders = alumni.filter(a => 
      a.position.toLowerCase().includes('founder') || 
      a.position.toLowerCase().includes('ceo')
    );

    return {
      totalAlumni: alumni.length,
      uniqueCompanies: uniqueCompanies.length,
      notableCompanies: companiesWithNotable.length,
      founders: founders.length
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/alumni/alumni_background.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-4">Our Alumni</h1>
          <p className="text-xl md:text-2xl font-montserrat max-w-2xl mx-auto px-4">
            Trailblazers making their mark across industries and the world
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stats.totalAlumni}+</div>
              <div className="text-gray-600 font-medium">Alumni Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stats.uniqueCompanies}+</div>
              <div className="text-gray-600 font-medium">Unique Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stats.notableCompanies}+</div>
              <div className="text-gray-600 font-medium">At Top Tech Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stats.founders}+</div>
              <div className="text-gray-600 font-medium">Founders & CEOs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Destinations Image */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">Alumni Destinations</h2>
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

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search by name, company, or position..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md mx-auto block px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Class Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
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
                size="sm"
              >
                {className}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-center text-gray-600 mb-8">
            Showing {filteredAlumni.length} alumni
            {selectedClass !== 'all' && ` from ${selectedClass} class`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>
      </section>

      {/* Alumni Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Company</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Position</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Class</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredAlumni.map((alumnus, index) => (
                    <tr 
                      key={`${alumnus.name}-${index}`}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {alumnus.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <span className={notableCompanies.some(notable => 
                          alumnus.company.toLowerCase().includes(notable.toLowerCase())
                        ) ? 'font-semibold text-blue-600' : ''}>
                          {alumnus.company}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {alumnus.position}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {alumnus.class}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredAlumni.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No alumni found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedClass('all');
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Notable Alumni Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12">
            Making Impact Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500M+</div>
              <div className="text-lg font-semibold mb-2">Capital Raised</div>
              <div className="text-gray-600">By alumni-founded startups</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-lg font-semibold mb-2">Startups Founded</div>
              <div className="text-gray-600">By our entrepreneurial alumni</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-lg font-semibold mb-2">Haas Acceptance</div>
              <div className="text-gray-600">Success rate for business school</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}