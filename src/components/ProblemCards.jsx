import React from 'react';
import './ProblemCards.css';

const problems = [
  {
    icon: '📉',
    title: 'حل مشکل افت تحصیلی',
    description: 'کاهش مداوم نمرات و تکرار',
  },
  {
    icon: '💡',
    title: 'حل بی‌انگیزگی',
    description: '   عدم پیشرفت ',
  },
  {
    icon: '🎯',
    title: 'ارائه برنامه برای بی‌هدفی',
    description: 'نبود چشم‌انداز و برنامه‌ریزی',
  },
];

const ProblemCards = () => {
  return (
    <section className="problems">
      <div className="container">
        <div className="problems__grid">
          {problems.map((p, i) => (
            <div className="problems__card" key={i} style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="problems__icon">{p.icon}</div>
              <h3 className="problems__title">{p.title}</h3>
              <p className="problems__desc">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemCards;
