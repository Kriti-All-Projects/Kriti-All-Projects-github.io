import React from 'react';
import { Github } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Three Phase Inverter',
      description: 'This project is a three-phase inverter system that uses IGBTs and an Arduino for control. It takes a three-phase AC input, which is first converted into DC using a three-phase rectifier. The resulting DC is then fed into a three-phase inverter built with IGBTs to generate a controlled AC output. An Arduino is programmed to generate the gate signals required to switch the IGBTs and control the inverter operation. The system includes four push buttons connected to the Arduino: one for starting the inverter, one for stopping it, and two for adjusting the output frequency (increase and decrease). This setup allows basic control over the inverter\'s output, making it suitable for applications like variable frequency drives or motor control.',
      icon: '⚡',
      gradient: 'from-yellow-400 to-orange-500',
      borderColor: 'neon-border-yellow'
    },
    {
      title: 'Audio Analyzer',
      description: 'This project uses an ESP32 microcontroller and an INMP441 microphone to capture and analyze audio signals, displaying the results on an OLED screen. It calculates the sound level in decibels, determines the fundamental frequency, and analyzes additional parameters like time period and magnitude. A button allows users to switch between three views on the OLED display: decibel levels, frequency, and a list of other parameters. The system is designed for real-time audio analysis, making it versatile for sound monitoring and educational purposes.',
      icon: '🎵',
      gradient: 'from-purple-400 to-pink-500',
      borderColor: 'neon-border-pink'
    },
    {
      title: 'IoT-Based Biometric Attendance System',
      description: 'Developed an attendance system using ESP8266 and JM101 fingerprint sensor for secure, wireless data logging with IoT connectivity.',
      icon: '👆',
      gradient: 'from-blue-400 to-cyan-500',
      borderColor: 'neon-border'
    },
    {
      title: 'Smart Light Switch',
      description: 'The Smart Light Switch using Arduino allows both manual and automatic control of brightness. In manual mode, a potentiometer adjusts the brightness, and a switch turns the light on or off. In automatic mode, a light sensor (BH1750) detects ambient brightness and adjusts the light intensity accordingly, while two ultrasonic sensors (HC-SR04) detect human presence to turn the light on or off. A toggle switch allows switching between these modes. The system uses TRIAC to control the light output, making it an efficient and smart lighting solution.',
      icon: '💡',
      gradient: 'from-green-400 to-blue-500',
      borderColor: 'neon-border'
    },
    {
      title: 'Line Following Robot',
      description: 'I have participated in numerous Line Follower Robot competitions, where the challenge is to build a robot that follows a black line to the finish point as quickly as possible while avoiding obstacles and penalties for going off-track. My robot is a two-wheel car powered by an Arduino Nano and sensors. Although I didn\'t win most of the competitions, I did achieve 2nd runner-up in one of them. I\'ve documented each experience with videos and enjoyed every moment of these events.',
      icon: '🤖',
      gradient: 'from-red-400 to-pink-500',
      borderColor: 'neon-border-pink'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm-20-18c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-5 relative z-10">
        <SectionTitle title="Academic Projects" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group glass-dark p-10 rounded-2xl shadow-2xl bloom-hover transition-all duration-500 ${project.borderColor} relative overflow-hidden`}
            >
              <div className="absolute inset-0 holographic opacity-10"></div>
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-20 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500`}></div>
              <div className="flex items-center mb-6 relative z-10">
                <div className="text-3xl mr-4 animate-glow">{project.icon}</div>
                <h3 className="text-2xl font-semibold gradient-text">{project.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed relative z-10 mb-4">{project.description}</p>
              
              <div className="absolute bottom-4 right-4 z-20">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cyber-button flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  title="View on GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;