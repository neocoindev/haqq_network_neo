
import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <div className="logo-icon">ℌ</div>
          <span className="logo-text">HAQQ Network</span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <a className="nav-link" onClick={() => scrollToSection('about')}>
            About
          </a>
          <a className="nav-link" onClick={() => scrollToSection('features')}>
            Features
          </a>
          <a className="nav-link" onClick={() => scrollToSection('technology')}>
            Technology
          </a>
          <a className="nav-link" onClick={() => scrollToSection('partnerships')}>
            Partners
          </a>
          <a className="nav-link" onClick={() => scrollToSection('tokenomics')}>
            Tokenomics
          </a>
          <a className="nav-link" onClick={() => scrollToSection('roadmap')}>
            Roadmap
          </a>
          <a className="nav-link" onClick={() => scrollToSection('team')}>
            Team
          </a>
          <a className="nav-link" onClick={() => scrollToSection('contact')}>
            Contact
          </a>
        </div>

        <div className="nav-actions">
          <button className="nav-cta-button glow">
            Get Started
          </button>
          <button 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
