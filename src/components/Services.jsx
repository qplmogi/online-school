import React from 'react';
import './Services.css';

const services = [
  { icon: '🎯', title: 'آکادمی درسی', desc: 'مسیر روشن و هدفمند برای تحصیل موفق.' },
  { icon: '📚', title: 'مشاوره تحصیلی', desc: 'راهنمایی تخصصی توسط مشاوران مجرب.' },
  { icon: '🏫', title: 'کلاس‌های تقویتی', desc: 'کلاس‌های بازآموزی و تقویتی مؤثر.' },
  { icon: '🚀', title: 'آموزش دروس تخصصی و عمومی', desc: 'برنامه ویژه پایه‌های دهم تا دوازدهم.' },
];

const ServiceCard = ({ icon, title, desc }) => (
  <div className="service-card">
    <div className="service-card__icon">{icon}</div>
    <h3 className="service-card__title">{title}</h3>
    <p className="service-card__desc">{desc}</p>
  </div>
);

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">خدمات آموزش ما</h2>
        <div className="services__grid">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
