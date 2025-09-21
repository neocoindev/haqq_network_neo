
import React, { useEffect, useRef } from 'react';
import './Partnership.css';

const Partnership: React.FC = () => {
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

  const partners = [
    {
      name: 'Binance',
      logo: '🟡',
      description: 'Стратегическое партнерство с ведущей криптобиржей',
      category: 'Exchange'
    },
    {
      name: 'Polygon',
      logo: '🟣',
      description: 'Интеграция с Layer 2 решениями',
      category: 'Infrastructure'
    },
    {
      name: 'Chainlink',
      logo: '🔗',
      description: 'Oracle-решения для получения внешних данных',
      category: 'Oracle'
    },
    {
      name: 'Cosmos',
      logo: '⚛️',
      description: 'Мультичейн-совместимость через IBC',
      category: 'Blockchain'
    },
    {
      name: 'Islamic Coin',
      logo: '🌙',
      description: 'Партнерство в области исламских финансов',
      category: 'Islamic Finance'
    },
    {
      name: 'Aave',
      logo: '👻',
      description: 'Протокол для децентрализованного кредитования',
      category: 'DeFi'
    }
  ];

  const integrations = [
    {
      title: 'Ethereum Ecosystem',
      description: 'Полная совместимость с EVM и всей экосистемой Ethereum',
      icon: '🔷',
      details: ['Smart Contracts', 'ERC-20/721 Tokens', 'Web3 Integration']
    },
    {
      title: 'Cosmos Network',
      description: 'Интеграция с межблокчейн-протоколом IBC',
      icon: '🌌',
      details: ['IBC Protocol', 'Cross-chain Assets', 'Sovereign Chains']
    },
    {
      title: 'Traditional Finance',
      description: 'Мосты с традиционными финансовыми институтами',
      icon: '🏦',
      details: ['Banking APIs', 'Payment Systems', 'Compliance Tools']
    }
  ];

  return (
    <section id="partnerships" className="partnership-section" ref={sectionRef}>
      <div className="partnership-container">
        <div className="partnership-header">
          <h2 className="section-title gradient-text">Партнерства и интеграции</h2>
          <p className="section-subtitle">
            Сотрудничество с ведущими компаниями блокчейн-индустрии
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card" data-category={partner.category}>
              <div className="partner-logo">{partner.logo}</div>
              <div className="partner-content">
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-description">{partner.description}</p>
                <div className="partner-category">{partner.category}</div>
              </div>
              <div className="partner-glow"></div>
            </div>
          ))}
        </div>

        <div className="integrations-section">
          <h3 className="integrations-title">Ключевые интеграции</h3>
          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <div key={index} className="integration-card">
                <div className="integration-icon">{integration.icon}</div>
                <div className="integration-content">
                  <h4 className="integration-title">{integration.title}</h4>
                  <p className="integration-description">{integration.description}</p>
                  <div className="integration-details">
                    {integration.details.map((detail, detailIndex) => (
                      <span key={detailIndex} className="detail-tag">{detail}</span>
                    ))}
                  </div>
                </div>
                <div className="integration-border"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="ecosystem-map">
          <h3 className="ecosystem-title">Экосистема HAQQ</h3>
          <div className="ecosystem-visual">
            <div className="ecosystem-center">
              <div className="center-logo">ℌ</div>
              <div className="center-title">HAQQ Network</div>
            </div>
            
            <div className="ecosystem-orbit orbit-1">
              <div className="orbit-item">DeFi</div>
              <div className="orbit-item">NFT</div>
              <div className="orbit-item">Gaming</div>
            </div>
            
            <div className="ecosystem-orbit orbit-2">
              <div className="orbit-item">Banking</div>
              <div className="orbit-item">Payments</div>
              <div className="orbit-item">Insurance</div>
              <div className="orbit-item">Real Estate</div>
            </div>
            
            <div className="ecosystem-orbit orbit-3">
              <div className="orbit-item">Education</div>
              <div className="orbit-item">Healthcare</div>
              <div className="orbit-item">Charity</div>
              <div className="orbit-item">Trade</div>
              <div className="orbit-item">Investment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
