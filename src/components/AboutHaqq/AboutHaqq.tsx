
import React, { useEffect, useRef } from 'react';
import './AboutHaqq.css';

const AboutHaqq: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title gradient-text">О HAQQ Network</h2>
          <p className="section-subtitle">
            Революционная блокчейн-платформа, созданная для исламского сообщества
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="text-block">
              <h3>Шариат-совместимая технология</h3>
              <p>
                HAQQ Network - это первая в мире блокчейн-платформа, полностью соответствующая 
                принципам исламского права (шариат). Наша платформа была разработана в тесном 
                сотрудничестве с ведущими исламскими учеными и экспертами по шариату.
              </p>
            </div>

            <div className="text-block">
              <h3>Инновационные решения</h3>
              <p>
                Мы предлагаем полный спектр финансовых услуг, включая децентрализованные 
                финансы (DeFi), NFT, мультичейн-решения и многое другое, при этом строго 
                соблюдая исламские принципы и запреты.
              </p>
            </div>

            <div className="text-block">
              <h3>Глобальная миссия</h3>
              <p>
                Наша цель - предоставить 1.8 миллиарда мусульман по всему миру доступ к 
                современным финансовым технологиям, которые полностью соответствуют их 
                религиозным убеждениям и ценностям.
              </p>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-grid">
              <div className="grid-item item-1">
                <div className="item-icon">🕌</div>
                <div className="item-title">Шариат Oracle</div>
                <div className="item-description">Умные контракты с проверкой шариата</div>
              </div>
              
              <div className="grid-item item-2">
                <div className="item-icon">🔗</div>
                <div className="item-title">Multi-Chain</div>
                <div className="item-description">Совместимость с Ethereum и Cosmos</div>
              </div>
              
              <div className="grid-item item-3">
                <div className="item-icon">💎</div>
                <div className="item-title">Halal NFT</div>
                <div className="item-description">Исламские NFT и цифровые активы</div>
              </div>
              
              <div className="grid-item item-4">
                <div className="item-icon">⚖️</div>
                <div className="item-title">DeFi Protocols</div>
                <div className="item-description">Децентрализованные финансы по шариату</div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-metrics">
          <div className="metric-card">
            <div className="metric-number">50+</div>
            <div className="metric-label">Партнерских проектов</div>
          </div>
          
          <div className="metric-card">
            <div className="metric-number">30+</div>
            <div className="metric-label">Стран присутствия</div>
          </div>
          
          <div className="metric-card">
            <div className="metric-number">$2.5B</div>
            <div className="metric-label">Общая стоимость активов</div>
          </div>
          
          <div className="metric-card">
            <div className="metric-number">1M+</div>
            <div className="metric-label">Активных пользователей</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHaqq;
