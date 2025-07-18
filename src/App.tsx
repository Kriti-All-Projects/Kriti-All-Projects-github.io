import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Activities from './components/Activities';
import IndustrialTour from './components/IndustrialTour';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <Header />
      <Navigation />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Training />
      <Activities />
      <IndustrialTour />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;