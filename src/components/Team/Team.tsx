
import React, { useEffect, useRef } from 'react';
import './Team.css';

const Team: React.FC = () => {
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

  const teamMembers = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'CEO & Founder',
      bio: 'Эксперт в области исламских финансов с 15-летним опытом в блокчейн-технологиях',
      avatar: '👨‍💼',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. Fatima Hassan',
      position: 'Chief Sharia Officer',
      bio: 'Ведущий исламский ученый, специалист по шариат-соответствию в финтехе',
      avatar: '👩‍🎓',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dmitri Volkov',
      position: 'CTO',
      bio: 'Архитектор блокчейн-решений, бывший инженер Ethereum Foundation',
      avatar: '👨‍💻',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Sarah Johnson',
      position: 'Head of Product',
      bio: 'Product-лидер с опытом запуска DeFi протоколов в ведущих компаниях',
      avatar: '👩‍💼',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Omar Bin Talal',
      position: 'Head of Business Development',
      bio: 'Эксперт по развитию бизнеса в регионе MENA и исламском банкинге',
      avatar: '🤵',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Maria Rodriguez',
      position: 'Head of Marketing',
      bio: 'Специалист по криптомаркетингу с опытом в глобальных блокчейн-проектах',
      avatar: '👩‍🎨',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const advisors = [
    {
      name: 'Sheikh Abdullah Al-Manea',
      position: 'Senior Sharia Advisor',
      organization: 'Islamic Fiqh Academy'
    },
    {
      name: 'Dr. Hussam Al-Othman',
      position: 'Islamic Finance Expert',
      organization: 'AAOIFI'
    },
    {
      name: 'Viktor Radchenko',
      position: 'Blockchain Advisor',
      organization: 'Cosmos Network'
    },
    {
      name: 'Emily Chen',
      position: 'DeFi Strategy Advisor',
      organization: 'Binance Labs'
    }
  ];

  return (
    <section id="team" className="team-section" ref={sectionRef}>
      <div className="team-container">
        <div className="team-header">
          <h2 className="section-title gradient-text">Наша команда</h2>
          <p className="section-subtitle">
            Опытные профессионалы, объединившие исламские финансы и блокчейн
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-avatar">
                <div className="avatar-icon">{member.avatar}</div>
                <div className="avatar-glow"></div>
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <div className="member-position">{member.position}</div>
                <p className="member-bio">{member.bio}</p>
                
                <div className="member-social">
                  <a href={member.linkedin} className="social-link">
                    <span>💼</span>
                  </a>
                  <a href={member.twitter} className="social-link">
                    <span>🐦</span>
                  </a>
                </div>
              </div>

              <div className="card-overlay"></div>
            </div>
          ))}
        </div>

        <div className="advisors-section">
          <h3 className="advisors-title">Консультационный совет</h3>
          <div className="advisors-grid">
            {advisors.map((advisor, index) => (
              <div key={index} className="advisor-card">
                <div className="advisor-content">
                  <h4 className="advisor-name">{advisor.name}</h4>
                  <div className="advisor-position">{advisor.position}</div>
                  <div className="advisor-organization">{advisor.organization}</div>
                </div>
                <div className="advisor-icon">🎓</div>
              </div>
            ))}
          </div>
        </div>

        <div className="team-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Членов команды</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Лет опыта</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Стран происхождения</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Исламских ученых</div>
            </div>
          </div>
        </div>

        <div className="join-team">
          <div className="join-content">
            <h3>Присоединяйтесь к нашей команде</h3>
            <p>Мы ищем талантливых специалистов для развития исламской финтех-экосистемы</p>
            <button className="join-button">
              <span>Открытые вакансии</span>
              <div className="button-arrow">→</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
