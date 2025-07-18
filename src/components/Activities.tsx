import React from 'react';
import SectionTitle from './SectionTitle';

const Activities: React.FC = () => {
  const activities = [
    {
      title: '🏆 2nd Runner Up - Technoventure 2.0',
      description: 'Sylhet Engineering College | 2020'
    },
    {
      title: '🤖 Robotics Competitions Participant',
      description: 'Robo Carnival 2024, Technoxian Bangladesh, Technoventure 3.0, Ignition 2023'
    },
    {
      title: '🔬 Bangladesh Physics Olympiad',
      description: '7th Bangladesh Physics Olympiad | 2017'
    },
    {
      title: '💼 Growth Hacking Internship',
      description: 'Introtuce Pvt Ltd | June 2020 - September 2020'
    },
    {
      title: '🤖 Robotics Club Member',
      description: 'Active member of Sylhet Engineering College Robotics Club'
    }
  ];

  return (
    <section id="activities" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Floating cyber elements */}
      <div className="absolute top-20 left-20 w-16 h-16 border-2 border-cyan-500 rotate-45 animate-pulse-neon"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-yellow-400 rotate-12 animate-pulse-neon animation-delay-1000"></div>
      
      {/* Matrix effect */}
      <div className="matrix-bg opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="matrix-char animate-matrix text-pink-400"
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
        <SectionTitle title="Extracurricular Activities" />
        <div className="max-w-4xl mx-auto space-y-6">
          {activities.map((activity, index) => (
            <div key={index} className="glass-dark p-8 rounded-2xl shadow-2xl bloom-hover neon-border relative overflow-hidden">
              <div className="absolute inset-0 holographic opacity-20"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20 rounded-full transform translate-x-16 -translate-y-16"></div>
              <h4 className="font-semibold text-cyan-300 mb-3 text-lg relative z-10">{activity.title}</h4>
              <p className="text-gray-300 relative z-10">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;