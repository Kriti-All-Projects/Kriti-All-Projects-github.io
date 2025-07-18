import React from 'react';
import SectionTitle from './SectionTitle';

const Skills: React.FC = () => {
  const skills = [
    {
      category: 'Microcontrollers',
      items: 'ESP32, Arduino',
      icon: '🔧',
      borderColor: 'neon-border'
    },
    {
      category: 'Software Tools',
      items: 'Proteus, AutoCAD, Simulink',
      icon: '💻',
      borderColor: 'neon-border-pink'
    },
    {
      category: 'Programming',
      items: 'Python, C Language, MATLAB',
      icon: '⚡',
      borderColor: 'neon-border-yellow'
    },
    {
      category: 'Office Suite',
      items: 'PowerPoint, Excel',
      icon: '📊',
      borderColor: 'neon-border'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Floating cyber elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-full opacity-30 animate-bounce neon-border"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full opacity-30 animate-bounce animation-delay-1000 neon-border-pink"></div>
      
      {/* Matrix effect */}
      <div className="matrix-bg opacity-20">
        {[...Array(10)].map((_, i) => (
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
        <SectionTitle title="Technical Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`group glass-dark p-8 rounded-2xl shadow-2xl text-center bloom-hover transition-all duration-500 ${skill.borderColor} relative overflow-hidden`}
            >
              <div className="absolute inset-0 holographic opacity-20"></div>
              <div className="text-4xl mb-4 relative z-10 animate-glow">{skill.icon}</div>
              <h4 className="font-semibold text-cyan-300 mb-4 text-lg relative z-10">{skill.category}</h4>
              <p className="text-gray-400 relative z-10">{skill.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;