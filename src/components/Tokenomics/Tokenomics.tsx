
import React, { useEffect, useRef, useState } from 'react';
import './Tokenomics.css';

const Tokenomics: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('distribution');

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

  const distributionData = [
    { label: 'Публичная продажа', percentage: 20, color: '#00ffff', amount: '200M ISLM' },
    { label: 'Развитие экосистемы', percentage: 25, color: '#ffd700', amount: '250M ISLM' },
    { label: 'Команда и советники', percentage: 15, color: '#8a2be2', amount: '150M ISLM' },
    { label: 'Маркетинг и партнерства', percentage: 10, color: '#ff6b6b', amount: '100M ISLM' },
    { label: 'Резерв фонда', percentage: 20, color: '#4ecdc4', amount: '200M ISLM' },
    { label: 'Ликвидность', percentage: 10, color: '#45b7d1', amount: '100M ISLM' }
  ];

  const vestingData = [
    { label: 'Мгновенная разблокировка', percentage: 10, period: 'TGE' },
    { label: 'Линейная разблокировка', percentage: 60, period: '24 месяца' },
    { label: 'Поэтапная разблокировка', percentage: 30, period: '36 месяцев' }
  ];

  const stakingData = [
    { validator: 'HAQQ Foundation', stake: '12.5%', apy: '15%', status: 'Активный' },
    { validator: 'Islamic Finance Hub', stake: '8.3%', apy: '14%', status: 'Активный' },
    { validator: 'Sharia Compliance', stake: '7.2%', apy: '13%', status: 'Активный' },
    { validator: 'Global Islamic Bank', stake: '6.8%', apy: '12%', status: 'Активный' },
    { validator: 'Halal Ventures', stake: '5.9%', apy: '11%', status: 'Активный' }
  ];

  return (
    <section id="tokenomics" className="tokenomics-section" ref={sectionRef}>
      <div className="tokenomics-container">
        <div className="tokenomics-header">
          <h2 className="section-title gradient-text">Токеномика ISLM</h2>
          <p className="section-subtitle">
            Устойчивая экономическая модель для долгосрочного роста экосистемы
          </p>
        </div>

        <div className="tokenomics-stats">
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <div className="stat-value">1,000,000,000</div>
              <div className="stat-label">Общее предложение ISLM</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-content">
              <div className="stat-value">2%</div>
              <div className="stat-label">Годовая дефляция</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-content">
              <div className="stat-value">12-15%</div>
              <div className="stat-label">Доходность стейкинга</div>
            </div>
          </div>
        </div>

        <div className="tokenomics-tabs">
          <div className="tab-buttons">
            <button 
              className={`tab-button ${activeTab === 'distribution' ? 'active' : ''}`}
              onClick={() => setActiveTab('distribution')}
            >
              Распределение токенов
            </button>
            <button 
              className={`tab-button ${activeTab === 'vesting' ? 'active' : ''}`}
              onClick={() => setActiveTab('vesting')}
            >
              График разблокировки
            </button>
            <button 
              className={`tab-button ${activeTab === 'staking' ? 'active' : ''}`}
              onClick={() => setActiveTab('staking')}
            >
              Стейкинг
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'distribution' && (
              <div className="distribution-tab">
                <div className="distribution-chart">
                  <div className="chart-container">
                    <div className="pie-chart">
                      {distributionData.map((item, index) => (
                        <div 
                          key={index}
                          className="pie-slice"
                          style={{
                            '--percentage': item.percentage,
                            '--color': item.color,
                            '--rotation': distributionData.slice(0, index).reduce((acc, curr) => acc + curr.percentage, 0) * 3.6
                          } as React.CSSProperties}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="distribution-legend">
                    {distributionData.map((item, index) => (
                      <div key={index} className="legend-item">
                        <div 
                          className="legend-color" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <div className="legend-content">
                          <div className="legend-label">{item.label}</div>
                          <div className="legend-value">{item.percentage}% • {item.amount}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vesting' && (
              <div className="vesting-tab">
                <div className="vesting-timeline">
                  {vestingData.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h4>{item.label}</h4>
                        <p>{item.percentage}% токенов</p>
                        <span className="timeline-period">{item.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'staking' && (
              <div className="staking-tab">
                <div className="staking-table">
                  <div className="table-header">
                    <div className="header-cell">Валидатор</div>
                    <div className="header-cell">Доля стейка</div>
                    <div className="header-cell">APY</div>
                    <div className="header-cell">Статус</div>
                  </div>
                  
                  {stakingData.map((validator, index) => (
                    <div key={index} className="table-row">
                      <div className="table-cell">{validator.validator}</div>
                      <div className="table-cell">{validator.stake}</div>
                      <div className="table-cell">{validator.apy}</div>
                      <div className="table-cell">
                        <span className="status-badge active">{validator.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="tokenomics-features">
          <div className="feature-item">
            <div className="feature-icon">🔄</div>
            <h4>Дефляционная модель</h4>
            <p>Автоматическое сжигание токенов для поддержания ценности</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h4>Utility Token</h4>
            <p>Множественные случаи использования в экосистеме</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">🏛️</div>
            <h4>Governance</h4>
            <p>Участие в управлении протоколом через голосование</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
