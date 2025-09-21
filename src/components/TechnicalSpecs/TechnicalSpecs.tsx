
import React, { useEffect, useRef } from 'react';
import './TechnicalSpecs.css';

const TechnicalSpecs: React.FC = () => {
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

  const technicalData = [
    {
      category: 'Производительность',
      specs: [
        { label: 'Скорость транзакций', value: '10,000+ TPS', icon: '⚡' },
        { label: 'Время блока', value: '3 секунды', icon: '⏱️' },
        { label: 'Финальность', value: '6 секунд', icon: '✅' },
        { label: 'Пропускная способность', value: '1M+ tx/день', icon: '📊' }
      ]
    },
    {
      category: 'Безопасность',
      specs: [
        { label: 'Алгоритм консенсуса', value: 'Tendermint BFT', icon: '🔐' },
        { label: 'Валидаторы', value: '150+ активных', icon: '🛡️' },
        { label: 'Время аптайма', value: '99.9%+', icon: '🔄' },
        { label: 'Аудиты безопасности', value: '5+ компаний', icon: '🔍' }
      ]
    },
    {
      category: 'Совместимость',
      specs: [
        { label: 'EVM совместимость', value: '100%', icon: '🔗' },
        { label: 'Cosmos SDK', value: 'v0.47+', icon: '🌌' },
        { label: 'IBC Protocol', value: 'Поддержка', icon: '🌐' },
        { label: 'API интеграции', value: 'REST/GraphQL', icon: '🔌' }
      ]
    }
  ];

  return (
    <section id="technology" className="tech-section" ref={sectionRef}>
      <div className="tech-container">
        <div className="tech-header">
          <h2 className="section-title gradient-text">Технические характеристики</h2>
          <p className="section-subtitle">
            Передовая технология для современного исламского финансирования
          </p>
        </div>

        <div className="tech-grid">
          {technicalData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="tech-category">
              <div className="category-header">
                <h3 className="category-title">{category.category}</h3>
                <div className="category-line"></div>
              </div>
              
              <div className="specs-grid">
                {category.specs.map((spec, specIndex) => (
                  <div key={specIndex} className="spec-item">
                    <div className="spec-icon">{spec.icon}</div>
                    <div className="spec-content">
                      <div className="spec-label">{spec.label}</div>
                      <div className="spec-value">{spec.value}</div>
                    </div>
                    <div className="spec-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-architecture">
          <h3 className="architecture-title">Архитектура сети</h3>
          <div className="architecture-diagram">
            <div className="layer layer-1">
              <div className="layer-title">Application Layer</div>
              <div className="layer-content">
                <div className="layer-item">DApps</div>
                <div className="layer-item">Wallets</div>
                <div className="layer-item">APIs</div>
              </div>
            </div>
            
            <div className="layer layer-2">
              <div className="layer-title">Sharia Oracle Layer</div>
              <div className="layer-content">
                <div className="layer-item">Compliance Check</div>
                <div className="layer-item">Fatwa Validation</div>
                <div className="layer-item">Islamic Rules</div>
              </div>
            </div>
            
            <div className="layer layer-3">
              <div className="layer-title">Consensus Layer</div>
              <div className="layer-content">
                <div className="layer-item">Tendermint BFT</div>
                <div className="layer-item">Validators</div>
                <div className="layer-item">Staking</div>
              </div>
            </div>
            
            <div className="layer layer-4">
              <div className="layer-title">Network Layer</div>
              <div className="layer-content">
                <div className="layer-item">P2P Network</div>
                <div className="layer-item">IBC Protocol</div>
                <div className="layer-item">Cross-chain</div>
              </div>
            </div>
          </div>
        </div>

        <div className="tech-comparison">
          <h3 className="comparison-title">Сравнение с традиционными решениями</h3>
          <div className="comparison-table">
            <div className="table-header">
              <div className="header-cell">Характеристика</div>
              <div className="header-cell">HAQQ Network</div>
              <div className="header-cell">Традиционный банкинг</div>
              <div className="header-cell">Обычный DeFi</div>
            </div>
            
            <div className="table-row">
              <div className="table-cell">Шариат-совместимость</div>
              <div className="table-cell success">✅ 100%</div>
              <div className="table-cell partial">⚠️ Частично</div>
              <div className="table-cell error">❌ Нет</div>
            </div>
            
            <div className="table-row">
              <div className="table-cell">Скорость транзакций</div>
              <div className="table-cell success">⚡ 10,000+ TPS</div>
              <div className="table-cell error">🐌 100-1000 TPS</div>
              <div className="table-cell partial">⚡ 100-10,000 TPS</div>
            </div>
            
            <div className="table-row">
              <div className="table-cell">Комиссии</div>
              <div className="table-cell success">💰 Низкие</div>
              <div className="table-cell error">💸 Высокие</div>
              <div className="table-cell partial">💰 Переменные</div>
            </div>
            
            <div className="table-row">
              <div className="table-cell">Прозрачность</div>
              <div className="table-cell success">🔍 Полная</div>
              <div className="table-cell error">🔒 Ограниченная</div>
              <div className="table-cell success">🔍 Полная</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
