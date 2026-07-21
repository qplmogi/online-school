import React from 'react';
import './HowWeHelp.css';

const steps = [
  { num: 1, label: 'بررسی وضعیت تحصیلی' },
  { num: 2, label: 'طرح برنامه آموزشی' },
  { num: 3, label: 'اجرای برنامه' },
  { num: 4, label: 'گزارش  به والدین' },
];

const HowWeHelp = () => {
  return (
    <section className="howwe" id="how">
      <div className="container">
        <h2 className="section-title">ما چطور کمک می‌کنیم</h2>
        <div className="howwe__steps">
          <div className="howwe__line" />
          {steps.slice().reverse().map((step, i) => (
            <div className="howwe__step" key={step.num} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="howwe__circle">{step.num}</div>
              <p className="howwe__label">{step.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
