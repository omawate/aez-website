'use client';

import { useState, useMemo } from 'react';
import { alumni, alumniByClass } from '@/data/alumni';
import { Button } from '@/components/ui/Button';


export default function AlumniPage() {
  const [selectedClass, setSelectedClass] = useState<string>('all');

  const filteredAlumni = useMemo(() => {
    let filtered = alumni;
    
    if (selectedClass !== 'all') {
      filtered = filtered.filter(alumnus => alumnus.class === selectedClass);
    }
    
    return filtered;
  }, [selectedClass]);

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
          <h1 className="text-6xl md:text-8xl font-merriweather font-bold mb-4">Our Alumni</h1>
                      <p className="text-xl md:text-2xl font-inter max-w-2xl mx-auto px-4">
              Our brothers have gone on to excel worldwide—in Silicon Valley tech, Wall Street finance, top graduate programs, and innovative startups
            </p>
        </div>
      </section>





      {/* Class Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Class Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
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
        </div>
      </section>

      {/* Alumni Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Company</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Position</th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    // Group alumni by class
                    const groupedAlumni = filteredAlumni.reduce((acc, alumnus) => {
                      if (!acc[alumnus.class]) {
                        acc[alumnus.class] = [];
                      }
                      acc[alumnus.class].push(alumnus);
                      return acc;
                    }, {} as Record<string, typeof filteredAlumni>);

                    // Get ordered class names
                    const classOrder = [
                      'Founder', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota',
                      'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon',
                      'Phi', 'Chi', 'Psi', 'Alpha Alpha', 'Alpha Beta', 'Alpha Gamma'
                    ];

                    const orderedClasses = Object.keys(groupedAlumni).sort((a, b) => {
                      const indexA = classOrder.indexOf(a);
                      const indexB = classOrder.indexOf(b);
                      return indexA - indexB;
                    });

                    // Render grouped alumni with dividers
                    const rows: React.ReactElement[] = [];
                    
                    orderedClasses.forEach((className, classIndex) => {
                      const classAlumni = groupedAlumni[className];
                      
                      // Add class header row
                      rows.push(
                        <tr key={`class-header-${className}`} className="bg-gray-100 border-t-2 border-gray-300">
                          <td colSpan={3} className="px-4 py-2">
                            <h3 className="text-lg font-semibold font-merriweather text-gray-900">
                              {className} Class
                            </h3>
                          </td>
                        </tr>
                      );
                      
                      // Add a small spacer row between classes for better visual separation
                      if (classIndex < orderedClasses.length - 1) {
                        rows.push(
                          <tr key={`spacer-${className}`} className="h-1 bg-gray-50">
                            <td colSpan={3}></td>
                          </tr>
                        );
                      }
                      
                      // Add alumni rows for this class
                      classAlumni.forEach((alumnus, index) => {
                        rows.push(
                          <tr 
                            key={`${alumnus.name}-${index}`}
                            className="hover:bg-gray-50 transition-colors duration-150"
                          >
                            <td className="px-4 py-2 text-sm font-medium text-gray-900">
                              {alumnus.name}
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600">
                              {alumnus.company}
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600">
                              {alumnus.position}
                            </td>
                          </tr>
                        );
                      });
                    });
                    
                    return rows;
                  })()}
                </tbody>
              </table>
            </div>
            
            {filteredAlumni.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No alumni found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => setSelectedClass('all')}
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
          <h2 className="text-4xl font-merriweather font-bold text-center mb-12">
            Making Impact Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 text-center shadow-lg">
              <div className="text-3xl font-bold mb-2 text-gray-900">500M+</div>
              <div className="text-lg font-semibold mb-2 font-inter">Capital Raised</div>
              <div className="text-gray-600 font-inter">By alumni-founded startups</div>
            </div>
            <div className="bg-white p-6 text-center shadow-lg">
              <div className="text-3xl font-bold mb-2 text-gray-900">15+</div>
              <div className="text-lg font-semibold mb-2 font-inter">Startups Founded</div>
              <div className="text-gray-600 font-inter">By our entrepreneurial alumni</div>
            </div>
            <div className="bg-white p-6 text-center shadow-lg">
              <div className="text-3xl font-bold mb-2 text-gray-900">92%</div>
              <div className="text-lg font-semibold mb-2 font-inter">Haas Acceptance</div>
              <div className="text-gray-600 font-inter">Success rate for business school</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}