import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-10 border-t border-cyan-500/30 relative overflow-hidden">
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-5 relative z-10">
        <p className="text-gray-300">
          &copy; 2025 <span className="text-cyan-400 animate-glow">Kriti Uchchhal Mozumder</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;