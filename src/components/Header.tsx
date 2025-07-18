import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-20 text-center overflow-hidden">
      {/* Matrix rain effect */}
      <div className="matrix-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="matrix-char animate-matrix"
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
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-xl animate-pulse-neon"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-xl animate-pulse-neon animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-screen filter blur-xl animate-pulse-neon animation-delay-4000"></div>
      </div>
      
      {/* Cyber grid pattern */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="container mx-auto px-5 relative z-10">
        <div className="relative inline-block mb-8">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/formal%20photo2-eqPZGhypTmBFi0pCgcWg4kk498B6hX.png" 
            alt="Kriti Uchchhal Mozumder" 
            className="w-56 h-56 rounded-full border-4 border-cyan-400 mb-8 mx-auto object-cover shadow-2xl relative z-10 neon-border animate-pulse-neon"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 opacity-20 animate-pulse"></div>
        </div>
        
        <h1 className="text-6xl font-light mb-4 relative z-10 gradient-text animate-glow">
          Kriti Uchchhal Mozumder
        </h1>
        <p className="text-2xl opacity-90 mb-8 relative z-10 font-light text-cyan-300">
          Electrical & Electronic Engineering Student
        </p>
        
        <div className="flex justify-center gap-8 flex-wrap relative z-10">
          <div className="flex items-center gap-2 glass-dark p-3 rounded-lg neon-border">
            <Mail size={18} className="text-cyan-400" />
            <span className="text-gray-300">kritiuchchhal@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 glass-dark p-3 rounded-lg neon-border-pink">
            <Phone size={18} className="text-pink-400" />
            <span className="text-gray-300">+8801890100677</span>
          </div>
          <div className="flex items-center gap-2 glass-dark p-3 rounded-lg neon-border-yellow">
            <MapPin size={18} className="text-yellow-400" />
            <span className="text-gray-300">Sylhet, Bangladesh</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;