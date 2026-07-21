import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg-shape" />
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            پیشرفت تحصیلی فرزندتان،<br />
            یکپارچه با گزارش منظم
          </h1>
          <ul className="hero__features">
            <li>
              <span className="hero__check">✓</span>
              کلاس های تقویتی مناسب با سطح دانش آموزان
            </li>
            <li>
              <span className="hero__check">✓</span>
               آینده ی درخشان فرزندتان    
            </li>
          </ul>
          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary">مشاوره رایگان</button>
            <button className="hero__btn hero__btn--outline">روش آموزش ما</button>
          </div>
        </div>
        <div className="hero__image-wrap">
          <div className="hero__image-placeholder">
            <div className="hero__img-inner">
              <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="160" rx="16" fill="#e8f0fc"/>
                <circle cx="80" cy="58" r="22" fill="#b8ccf0"/>
                <ellipse cx="80" cy="100" rx="34" ry="18" fill="#c8d8f4"/>
                <circle cx="138" cy="70" r="16" fill="#d4e3fa"/>
                <ellipse cx="138" cy="104" rx="26" ry="14" fill="#ddeafb"/>
                <rect x="50" y="115" width="100" height="8" rx="4" fill="#b8ccf0" opacity="0.5"/>
              </svg>
              <p>تصویر آموزشی</p>
            </div>
          </div>
          <div className="hero__badge hero__badge--1">
            <span>📈</span> پیشرفت مستمر
          </div>
          <div className="hero__badge hero__badge--2">
            <span>⭐</span> ۵۰۰+ دانش‌آموز
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
