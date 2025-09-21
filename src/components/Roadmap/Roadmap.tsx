
import React, { useEffect, useRef } from 'react';
import './Roadmap.css';

const Roadmap: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate roadmap items with stagger
            const items = entry.target.querySelectorAll('.roadmap-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, index * 300);
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

  const roadmapData = [
    {
      quarter: 'Q1 2024',
      title: 'Запуск Mainnet',
      status: 'completed',
      items: [
        'Запуск основной сети HAQQ',
        'Интеграция с Cosmos Hub',
        'Запуск мобильного кошелька',
        'Партнерство с Islamic Coin'
      ]
    },
    {
      quarter: 'Q2 2024',
      title: 'DeFi Протоколы',
      status: 'completed',
      items: [
        'Запуск DEX платформы',
        'Протокол кредитования',
        'Yield farming программы',
        'Liquid staking решения'
      ]
    },
    {
      quarter: 'Q3 2024',
      title: 'NFT и Gaming',
      status: 'in-progress',
      items: [
        'Платформа исламских NFT',
        'Gaming экосистема',
        'Метавселенная проекты',
        'Социальные токены'
      ]
    },
    {
      quarter: 'Q4 2024',
      title: 'Глобальная экспансия',
      status: 'planned',
      items: [
        'Запуск в 50+ странах',
        'Партнерства с банками',
        'Регуляторные лицензии',
        'Институциональные продукты'
      ]
    },
    {
      quarter: 'Q1 2025',
      title: 'Масштабирование',
      status: 'planned',
      items: [
        'Layer 2 решения',
        'Мультичейн-мосты',
        'ИИ-орacles',
        'Автоматизированный шариат-аудит'
      ]
    },
    {
      quarter: 'Q2 2025',
      title: 'Экосистема 2.0',
      status: 'planned',
      items: [
        'Полная автономия DAO',
        'Квантово-устойчивая безопасность',
        'Глобальная интеграция',
        '10M+ активных пользователей'
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'in-progress':
        return '🔄';
      case 'planned':
        return '📋';
      default:
        return '⏳';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#00ff88';
      case 'in-progress':
        return '#ffd700';
      case 'planned':
        return '#00ffff';
      default:
        return '#8a2be2';
    }
  };

  return (
    <section id="roadmap" className="roadmap-section" ref={sectionRef}>
      <div className="roadmap-container">
        <div className="roadmap-header">
          <h2 className="section-title gradient-text">Дорожная карта развития</h2>
          <p className="section-subtitle">
            Пошаговый план развития экосистемы HAQQ Network
          </p>
        </div>

        <div className="roadmap-timeline">
          {roadmapData.map((phase, index) => (
            <div 
              key={index} 
              className={`roadmap-item ${phase.status}`}
              data-index={index}
            >
              <div className="timeline-connector">
                <div className="connector-line"></div>
                <div 
                  className="timeline-marker"
                  style={{ backgroundColor: getStatusColor(phase.status) }}
                >
                  <span>{getStatusIcon(phase.status)}</span>
                </div>
              </div>

              <div className="roadmap-content">
                <div className="roadmap-header-content">
                  <div className="quarter-badge">{phase.quarter}</div>
                  <h3 className="phase-title">{phase.title}</h3>
                  <div 
                    className="status-indicator"
                    style={{ color: getStatusColor(phase.status) }}
                  >
                    {phase.status === 'completed' && 'Завершено'}
                    {phase.status === 'in-progress' && 'В процессе'}
                    {phase.status === 'planned' && 'Запланировано'}
                  </div>
                </div>

                <ul className="roadmap-items">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="roadmap-item-detail">
                      <span className="item-icon">▶</span>
                      <span className="item-text">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="roadmap-glow"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="roadmap-cta">
          <div className="cta-content">
            <h3>Готовы присоединиться к революции?</h3>
            <p>Станьте частью первой шариат-совместимой блокчейн-экосистемы</p>
            <button className="cta-button glow">
              <span>Начать инвестирование</span>
              <div className="button-sparkle"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
