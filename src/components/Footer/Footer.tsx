
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const footerLinks = {
    'Продукт': [
      'Whitepaper',
      'Технологии',
      'Безопасность',
      'API документация'
    ],
    'Экосистема': [
      'DeFi протоколы',
      'NFT платформа',
      'Мобильный кошелек',
      'Партнеры'
    ],
    'Сообщество': [
      'Discord',
      'Telegram',
      'Twitter',
      'Reddit'
    ],
    'Компания': [
      'О нас',
      'Команда',
      'Карьера',
      'Пресс-центр'
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/HAQQNetwork' },
    { name: 'Telegram', icon: '💬', url: 'https://t.me/HAQQNetwork' },
    { name: 'Discord', icon: '💾', url: 'https://discord.gg/haqq' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/haqq-network' },
    { name: 'GitHub', icon: '👨‍💻', url: 'https://github.com/haqq-network' },
    { name: 'Medium', icon: '📝', url: 'https://medium.com/@haqq-network' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">ℌ</div>
              <span className="logo-text">HAQQ Network</span>
            </div>
            <p className="footer-description">
              Первая в мире шариат-совместимая блокчейн-платформа, 
              объединяющая исламские финансовые принципы с 
              инновационными Web3 технологиями.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <div key={index} className="link-group">
                <h4 className="link-group-title">{category}</h4>
                <ul className="link-list">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="footer-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-stats">
            <div className="stat-item">
              <span className="stat-icon">📈</span>
              <span className="stat-text">TVL: $2.5B</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">👥</span>
              <span className="stat-text">Users: 1M+</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🌍</span>
              <span className="stat-text">Countries: 30+</span>
            </div>
          </div>

          <div className="footer-legal">
            <div className="legal-links">
              <a href="#" className="legal-link">Политика конфиденциальности</a>
              <a href="#" className="legal-link">Условия использования</a>
              <a href="#" className="legal-link">Правовая информация</a>
            </div>
            <div className="copyright">
              <p>&copy; 2024 HAQQ Network. Все права защищены.</p>
            </div>
          </div>
        </div>

        <div className="footer-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
