import React from 'react';
import SectionTitle from './SectionTitle';

const IndustrialTour: React.FC = () => {
  const tours = [
    {
      year: '2024',
      title: 'Ghorasal Polash Urea Fertilizer Factory',
      location: 'Narsingdi, Bangladesh',
      description: 'Comprehensive industrial visit to one of Bangladesh\'s largest urea fertilizer manufacturing facilities, gaining insights into large-scale industrial electrical systems and process automation.',
      highlights: [
        'Power distribution systems and load management',
        'Safety protocols in chemical manufacturing'
      ]
    },
    {
      year: '2025',
      title: 'Kanaighat Electrical Substation',
      location: 'Sylhet, Bangladesh',
      description: 'Technical visit to a modern electrical substation, exploring high-voltage power transmission, distribution networks, and advanced grid management technologies.',
      highlights: [
        'High-voltage transmission systems',
        'Substation protection and control',
        'Power system reliability and maintenance'
      ]
    }
  ];

  return (
    <section id="industrial-tour" className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Floating cyber elements */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-gradient-to-br from-yellow-400 to-green-400 rounded-full opacity-30 animate-pulse-neon neon-border-yellow"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full opacity-30 animate-pulse-neon animation-delay-2000 neon-border"></div>
      
      {/* Matrix effect */}
      <div className="matrix-bg opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="matrix-char animate-matrix text-yellow-400"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-5 relative z-10">
        <SectionTitle title="Industrial Tour" />
        <div className="max-w-4xl mx-auto space-y-8">
          {tours.map((tour, index) => (
            <div key={index} className="glass-dark p-10 rounded-2xl shadow-2xl bloom-hover neon-border-yellow relative overflow-hidden">
              <div className="absolute inset-0 holographic opacity-20"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500 to-yellow-500 opacity-20 rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-yellow-400 mb-3 animate-glow">{tour.title}</h3>
                  <p className="text-gray-300 mb-4">
                    <span className="font-medium text-cyan-400">{tour.location}</span> 
                    <span className="text-gray-400"> | {tour.year}</span>
                  </p>
                </div>
                <div className="glass p-3 rounded-full text-yellow-400 font-bold text-lg neon-border-yellow">
                  {tour.year}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">{tour.description}</p>
              
              <div className="space-y-3 relative z-10">
                <h4 className="font-semibold text-cyan-400 text-sm uppercase tracking-wide">Key Learning Areas:</h4>
                <ul className="space-y-2">
                  {tour.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-center text-gray-300">
                      <span className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full mr-4 flex-shrink-0 animate-pulse-neon"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialTour;