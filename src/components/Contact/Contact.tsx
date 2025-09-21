
import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'partners@haqq.network',
      link: 'mailto:partners@haqq.network'
    },
    {
      icon: '💬',
      title: 'Telegram',
      value: '@HAQQNetwork',
      link: 'https://t.me/HAQQNetwork'
    },
    {
      icon: '🐦',
      title: 'Twitter',
      value: '@HAQQNetwork',
      link: 'https://twitter.com/HAQQNetwork'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'HAQQ Network',
      link: 'https://linkedin.com/company/haqq-network'
    }
  ];

  const offices = [
    {
      city: 'Dubai',
      address: 'DIFC, Gate Village 2',
      country: 'UAE',
      flag: '🇦🇪'
    },
    {
      city: 'London',
      address: 'Canary Wharf',
      country: 'UK',
      flag: '🇬🇧'
    },
    {
      city: 'Singapore',
      address: 'Marina Bay Financial Centre',
      country: 'Singapore',
      flag: '🇸🇬'
    }
  ];

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title gradient-text">Свяжитесь с нами</h2>
          <p className="section-subtitle">
            Готовы начать сотрудничество? Мы всегда открыты для диалога
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <div className="form-container">
              <h3 className="form-title">Отправить сообщение</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                  <div className="input-glow"></div>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email адрес"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                  <div className="input-glow"></div>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="company"
                    placeholder="Компания (необязательно)"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                  <div className="input-glow"></div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows={5}
                    required
                  ></textarea>
                  <div className="input-glow"></div>
                </div>

                <button type="submit" className="submit-button glow">
                  <span>Отправить сообщение</span>
                  <div className="button-sparkle"></div>
                </button>
              </form>
            </div>
          </div>

          <div className="contact-info-section">
            <div className="contact-info">
              <h3 className="info-title">Контактная информация</h3>
              
              <div className="info-grid">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index} 
                    href={info.link}
                    className="info-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <div className="info-label">{info.title}</div>
                      <div className="info-value">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="offices-section">
                <h4 className="offices-title">Наши офисы</h4>
                <div className="offices-grid">
                  {offices.map((office, index) => (
                    <div key={index} className="office-item">
                      <div className="office-flag">{office.flag}</div>
                      <div className="office-content">
                        <div className="office-city">{office.city}</div>
                        <div className="office-address">{office.address}</div>
                        <div className="office-country">{office.country}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <div className="cta-content">
            <h3>Готовы инвестировать в будущее исламских финансов?</h3>
            <p>Присоединяйтесь к революции в сфере шариат-совместимых технологий</p>
            <div className="cta-buttons">
              <button className="cta-primary">Стать инвестором</button>
              <button className="cta-secondary">Партнерство</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
