
import React, { useEffect, useRef } from 'react';
import './Features.css';

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate feature cards with stagger
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate');
              }, index * 200);
            });
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

  const features = [
    {
      icon: '🕌',
      title: 'Шариат Oracle',
      description: 'Умные контракты с автоматической проверкой соответствия принципам шариата',
      highlight: 'Oracle System'
    },
    {
      icon: '💰',
      title: 'Halal DeFi',
      description: 'Децентрализованные финансовые продукты, полностью соответствующие исламским принципам',
      highlight: 'DeFi Protocols'
    },
    {
      icon: '🌐',
      title: 'Multi-Chain',
      description: 'Совместимость с Ethereum, Cosmos и другими блокчейн-сетями',
      highlight: 'Interoperability'
    },
    {
      icon: '💎',
      title: 'Islamic NFT',
      description: 'Платформа для создания и торговли NFT, соответствующими исламским ценностям',
      highlight: 'Digital Assets'
    },
    {
      icon: '⚡',
      title: 'Fast Transactions',
      description: 'Высокая скорость обработки транзакций с низкими комиссиями',
      highlight: 'Performance'
    },
    {
      icon: '🔒',
      title: 'Security First',
      description: 'Максимальный уровень безопасности с применением передовых криптографических методов',
      highlight: 'Security'
    }
  ];

  return (
    <section id="features" className="features-section" ref={sectionRef}>
      <div className="features-container">
        <div className="features-header">
          <h2 className="section-title gradient-text">Ключевые особенности</h2>
          <p className="section-subtitle">
            Инновационные решения для исламских финансов и Web3
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" data-index={index}>
              <div className="card-header">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-highlight">{feature.highlight}</div>
              </div>
              
              <div className="card-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>

              <div className="card-glow"></div>
              <div className="card-border"></div>
            </div>
          ))}
        </div>

        <div className="features-showcase">
          <div className="showcase-item">
            <div className="showcase-icon">📊</div>
            <div className="showcase-content">
              <h4>Аналитика в реальном времени</h4>
              <p>Полная прозрачность и отчетность по всем операциям</p>
            </div>
          </div>
          
          <div className="showcase-item">
            <div className="showcase-icon">🌍</div>
            <div className="showcase-content">
              <h4>Глобальная доступность</h4>
              <p>Доступ из любой точки мира 24/7</p>
            </div>
          </div>
          
          <div className="showcase-item">
            <div className="showcase-icon">🤝</div>
            <div className="showcase-content">
              <h4>Сообщество</h4>
              <p>Управление через DAO и участие сообщества</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
