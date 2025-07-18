import React from 'react';
import SectionTitle from './SectionTitle';

const Training: React.FC = () => {
  const trainings = [
    {
      title: 'Lab-Based Communicative English Course (Grade A)',
      organization: 'Govt. of Bangladesh (FLTC-II Project)',
      duration: 'Nov 2018 – Apr 2019',
      location: 'Cox\'s Bazar Govt. College'
    },
    {
      title: 'Industrial Technology on Electrical Engineering & Instrumentation Training (Grade A+)',
      organization: 'Training Institute for Chemical Industries (TICI)',
      location: 'Narsingdi, Bangladesh'
    },
    {
      title: 'Control Design Onramp with Simulink',
      organization: 'MATLAB Academy',
      duration: '2024'
    },
    {
      title: '30-Day Webinar on PLC, VFD, HMI',
      organization: 'Gobeshona Learning Academy',
      duration: '2024'
    },
    {
      title: 'Master Class on Machine Learning',
      organization: 'Pantech Prolabs India Pvt Ltd',
      duration: '2022'
    },
    {
      title: 'Single Phase Electrical Wiring & Installation',
      organization: 'Sylhet Engineering College',
      duration: '2022'
    }
  ];

  return (
    <section id="training" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Floating cyber elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-full opacity-30 animate-pulse-neon neon-border"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full opacity-30 animate-pulse-neon animation-delay-1000 neon-border-pink"></div>
      
      {/* Matrix effect */}
      <div className="matrix-bg opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="matrix-char animate-matrix text-cyan-400"
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
        <SectionTitle title="Professional Training & Courses" />
        <div className="max-w-4xl mx-auto space-y-6">
          {trainings.map((training, index) => (
            <div key={index} className="glass-dark p-8 rounded-2xl shadow-2xl bloom-hover neon-border-pink relative overflow-hidden">
              <div className="absolute inset-0 holographic opacity-20"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 rounded-full transform translate-x-16 -translate-y-16"></div>
              <h4 className="font-semibold text-cyan-300 mb-3 text-lg relative z-10">{training.title}</h4>
              <p className="text-gray-300 relative z-10">
                <span className="text-pink-400">{training.organization}</span>
                {training.duration && <span className="text-gray-400"> | {training.duration}</span>}
                {training.location && <span className="text-gray-400"> | {training.location}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;