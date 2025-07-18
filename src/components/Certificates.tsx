import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Certificates: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const certificates = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c3.jpg-qPTCn9z0wrRdB91CPidociOhqejAHF.jpeg",
      title: "Ignition 2023 - National Mechanical Festival",
      description: "Certificate of Participation in Line Follower Robot segment at Ignition 2023, organized by Department of Mechanical Engineering, KUET"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c1.jpg-ZtrRh1zHf25VpF7YltHY46Jlp0Hru3.jpeg",
      title: "Robo Carnival 2024 - Industrial Line Tracker",
      description: "Certificate of Participation in Industrial Line Tracker event at Robo Carnival 2024, organized by BUET Robotics Society"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flctc.jpg-EqvbkkKJCZOff4OimTiqbiSShnPguc.jpeg",
      title: "Lab-Based Communicative English Course (Grade A)",
      description: "Certificate from Government of Bangladesh (FLTC-II Project) for completing English Language Training Course from November 2018 to April 2019"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c2.jpg-TC4ZCcl7gJpkiivFDAcaR5q9S2JUGQ.jpeg",
      title: "Technoventure 3.0 - Line Follower Robot",
      description: "Certificate of Participation in Line Follower Robot Contest at Technoventure 3.0, organized by Department of EEE, Sylhet Engineering College"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bohubrihi%20certificate_page-0001.jpg-cFdZ2RzF68hsCH0XzRKbZM1gvid79z.jpeg",
      title: "Introduction to Python Programming",
      description: "Certificate for successfully completing all steps of the Introduction to Python Programming course."
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/certificate_page-0001.jpg-eap7od2NPDlaN4GUwkatlC5FgGpt9W.jpeg",
      title: "Control Design Onramp with Simulink",
      description: "Course Completion Certificate for Control Design Onramp with Simulink, MATLAB Academy, completed 100% on January 31, 2024."
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c4.jpg-mTu9vVLcx2KqKyPCSc78yyJGeJeYuK.jpeg",
      title: "Single Phase Electrical Wiring & Installation",
      description: "Certificate of Completion for workshop on Single Phase Electrical Wiring and Installation, organized by EEE Association, Sylhet Engineering College"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c5.jpg-1HLvnT15nDm8HFJ9wFYd66UNngM3cR.jpeg",
      title: "Industrial Technology Training (Grade A+)",
      description: "Certificate of Completion for Industrial Technology on Electrical Engineering & Instrumentation Training, Training Institute for Chemical Industries (TICI)"
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kriti%20Uchchhal%20Mozumder%20_Internship_Completion_Certificate_page-0001.jpg-C167RUYAfg22zFV2YONtyxMmHIMfkm.jpeg",
      title: "Growth Hacking Internship",
      description: "Certificate for successfully completing the Growth Hacking internship with Introtuce Pvt Ltd from June 16 to September 16, 2020."
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plc_page-0001.jpg-Clk0rVu32QuSi6OICrgd1rkw1EUxR5.jpeg",
      title: "30-Day Webinar on PLC, VFD, HMI",
      description: "Certificate of Achievement for 30-day webinar participation on PLC, VFD, and HMI at Gobeshona Learning Academy, issued April 1, 2024."
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PS-ML1-2022-0706%20%281%29.jpg-DeW3VjIdC2lUp1ADQ0lyXLyI15FX9N.jpeg",
      title: "Master Class on Machine Learning",
      description: "Certificate of Participation for Master Class on Machine Learning (30 Days) at Pantech Prolabs India Pvt Ltd, from Sep 19, 2022 to Oct 30, 2022."
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/technoxian_page-0001.jpg-vBwGYxqzrtMkDYVUWXXsX3VKrB3FOa.jpeg",
      title: "1st Technoxian Bangladesh National Round-2024",
      description: "Certificate of Participation in the 1st Technoxian Bangladesh National Round 2024 organized by Bangladesh Open Source Network (BDOSN) and Frontech Limited."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Matrix rain effect */}
      <div className="matrix-bg opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="matrix-char animate-matrix"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              color: i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#ff00ff' : '#ffff00'
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mix-blend-screen filter blur-xl animate-pulse-neon"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mix-blend-screen filter blur-xl animate-pulse-neon animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-5 relative z-10">
        <SectionTitle title="Certificates" />
        <div className="max-w-4xl mx-auto">
          <div className="glass-dark rounded-3xl shadow-2xl overflow-hidden neon-border relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-400 animate-pulse-neon"></div>
            
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {certificates.map((certificate, index) => (
                  <div key={index} className="min-w-full h-full flex items-center justify-center p-10">
                    <img 
                      src={certificate.image} 
                      alt={certificate.title}
                      className="max-w-full max-h-full object-contain rounded-xl shadow-2xl neon-border"
                    />
                  </div>
                ))}
              </div>
              
              <button 
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 cyber-button p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 cyber-button p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="flex justify-center gap-3 py-6 glass flex-wrap">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-cyan-500 to-pink-500 transform scale-125 shadow-lg animate-pulse-neon' 
                      : 'bg-gray-600 hover:bg-gray-500 hover:scale-110'
                  }`}
                />
              ))}
            </div>
            
            <div className="p-8 glass text-center">
              <h3 className="text-2xl font-semibold gradient-text mb-3 animate-glow">
                {certificates[currentSlide].title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {certificates[currentSlide].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;