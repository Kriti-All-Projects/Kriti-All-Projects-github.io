import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const fullText = "Hi, I am Kriti Uchchhal Mozumder. I am a dedicated Electrical and Electronic Engineering student at Sylhet Engineering College with a strong passion for technology and innovation. Currently pursuing my Bachelor's degree with a CGPA of 3.68/4.0, I specialize in embedded systems, IoT applications, and deep learning technologies.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          let index = 0;
          const timer = setInterval(() => {
            if (index <= fullText.length) {
              setDisplayText(fullText.slice(0, index));
              index++;
            } else {
              clearInterval(timer);
              setIsTypingComplete(true);
            }
          }, 30);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, [isVisible, fullText]);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Floating cyber elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-full opacity-30 transform translate-x-48 -translate-y-48 animate-pulse-neon"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-500/20 to-yellow-400/20 rounded-full opacity-30 transform -translate-x-48 translate-y-48 animate-pulse-neon animation-delay-2000"></div>
      
      {/* Holographic overlay */}
      <div className="absolute inset-0 holographic opacity-30"></div>
      
      <div className="container mx-auto px-5 relative z-10">
        <SectionTitle title="About Me" />
        <div className="max-w-4xl mx-auto text-center text-lg leading-relaxed text-gray-300">
          <div className="mb-8">
            <div className="typing-container">
              <p className={`text-xl min-h-[120px] text-cyan-300 ${isVisible && !isTypingComplete ? 'border-r-2 border-cyan-400' : ''}`}>
                {displayText}
                {isVisible && !isTypingComplete && (
                  <span className="animate-pulse text-cyan-400">|</span>
                )}
              </p>
            </div>
          </div>
          
          <div className={`transition-opacity duration-1000 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
            <div className="glass-dark p-8 rounded-2xl neon-border mb-6 bloom-hover">
              <p className="mb-6 text-gray-300">
                My thesis focuses on developing a lightweight skin disease classifier using deep learning and transfer learning techniques. I have hands-on experience with various microcontrollers, programming languages, and engineering software, combined with active participation in robotics competitions and technical projects.
              </p>
              <p className="text-gray-300">
                I am passionate about exploring cutting-edge technologies and applying theoretical knowledge to solve real-world engineering challenges through innovative project development and collaborative research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;