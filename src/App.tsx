
import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation/Navigation';
import Features from './components/Features/Features';
import AboutHaqq from './components/AboutHaqq/AboutHaqq';
import TechnicalSpecs from './components/TechnicalSpecs/TechnicalSpecs';
import Partnership from './components/Partnership/Partnership';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Roadmap from './components/Roadmap/Roadmap';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">
            <div className="haqq-symbol">ℌ</div>
          </div>
          <div className="loading-text">Loading HAQQ Network...</div>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <AboutHaqq />
      <Features />
      <TechnicalSpecs />
      <Partnership />
      <Tokenomics />
      <Roadmap />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
