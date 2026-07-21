import React from 'react';
import './ArticleCard.css';

const features = [
  { icon: '🎓', label: 'گزارش به‌طرفت' },
  { icon: '✉️', label: 'ارتباط منظم' },
  { icon: '💬', label: 'پاسخگو نقاط' },
];

const ArticleCard = () => {
  return (
    <section className="parent-features" id="parents">
      <div className="container">
        <h2 className="section-title">مجله ی والدین   </h2>
        <div className="parent-features__grid">
          {features.map((f, i) => (
            <div className="parent-feature" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="parent-feature__icon">{f.icon}</div>
              <p className="parent-feature__label">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
