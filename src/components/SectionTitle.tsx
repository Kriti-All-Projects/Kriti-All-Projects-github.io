import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="text-center mb-16 relative">
      <h2 className="text-5xl font-light text-gray-100 relative inline-block gradient-text">
        <span className="relative z-10">{title}</span>
      </h2>
      <div className="flex justify-center mt-4">
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full animate-pulse-neon"></div>
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
    </div>
  );
};

export default SectionTitle;