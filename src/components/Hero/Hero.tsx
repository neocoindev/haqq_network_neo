
import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">Islamic Finance & Web3</span>
            <div className="badge-glow"></div>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Первая в мире</span>
            <span className="title-line gradient-text">шариат-совместимая</span>
            <span className="title-line">блокчейн-платформа</span>
          </h1>

          <p className="hero-description">
            HAQQ Network объединяет исламские финансовые принципы с передовой технологией блокчейн, 
            создавая этичную и инновационную экосистему для 1.8 миллиарда мусульман по всему миру.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1.8B+</div>
              <div className="stat-label">Мусульман в мире</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$4.9T</div>
              <div className="stat-label">Исламская экономика</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Шариат-совместимость</div>
            </div>
          </div>

          <div className="hero-actions">
            <button className="cta-primary glow">
              <span>Изучить платформу</span>
              <div className="button-glow"></div>
            </button>
            <button className="cta-secondary">
              <span>Скачать Whitepaper</span>
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">💰</div>
            <div className="card-title">Halal DeFi</div>
            <div className="card-description">100% Шариат-совместимые финансы</div>
          </div>
          
          <div className="floating-card card-2">
            <div className="card-icon">🌙</div>
            <div className="card-title">Islamic Banking</div>
            <div className="card-description">Соответствие исламским принципам</div>
          </div>
          
          <div className="floating-card card-3">
            <div className="card-icon">⚡</div>
            <div className="card-title">Fast & Secure</div>
            <div className="card-description">Высокая скорость транзакций</div>
          </div>

          <div className="central-orb">
            <div className="orb-core"></div>
            <div className="orb-ring ring-1"></div>
            <div className="orb-ring ring-2"></div>
            <div className="orb-ring ring-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
