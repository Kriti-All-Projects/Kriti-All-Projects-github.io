import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-5 relative z-10">
        <SectionTitle title="Get In Touch" />
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-dark p-8 rounded-2xl neon-border mb-8 bloom-hover">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects, and collaborations in the field of electrical engineering and technology.
            </p>
          </div>
          
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-3 glass-dark p-4 rounded-lg shadow-md neon-border bloom-hover">
              <Mail className="text-cyan-400" size={20} />
              <a 
                href="mailto:kritiuchchhal@gmail.com" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                kritiuchchhal@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-3 glass-dark p-4 rounded-lg shadow-md neon-border-pink bloom-hover">
              <Phone className="text-pink-400" size={20} />
              <span className="text-gray-300">+8801890100677</span>
            </div>
            
            <div className="flex items-center gap-3 glass-dark p-4 rounded-lg shadow-md neon-border-yellow bloom-hover">
              <MapPin className="text-yellow-400" size={20} />
              <span className="text-gray-300">Baluchor Point, Notunbazar, Sylhet, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;