import React from 'react';
import SectionTitle from './SectionTitle';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Geometric background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-cyan-500 rotate-45 animate-pulse-neon"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-pink-500 rotate-12 animate-pulse-neon animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full animate-pulse-neon animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-5 relative z-10">
        <SectionTitle title="Education" />
        <div className="max-w-4xl mx-auto">
          <div className="glass-dark p-10 rounded-2xl shadow-2xl bloom-hover neon-border relative overflow-hidden">
            <div className="absolute inset-0 holographic opacity-20"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500 to-pink-500 opacity-20 rounded-full transform translate-x-16 -translate-y-16"></div>
            <h3 className="text-2xl font-semibold gradient-text mb-4 relative z-10 animate-glow">
              Bachelor of Science in Electrical and Electronic Engineering
            </h3>
            <div className="text-gray-300 mb-6 relative z-10">
              <strong className="text-cyan-400">Sylhet Engineering College</strong> | 2020 - 2025 | <span className="text-pink-400">CGPA: 3.68/4.0</span>
            </div>
            <p className="mb-3 relative z-10 text-gray-300">
              <strong className="text-cyan-400">Thesis:</strong> A Deep Learning Approach to Build a Lightweight Skin Diseases Classifier by Means of Transfer Learning
            </p>
            <p className="relative z-10 text-gray-300">
              <strong className="text-cyan-400">Credits Completed:</strong> <span className="text-pink-400">160 out of 163</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;