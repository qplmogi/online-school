import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'مادر مریم کلاس یازدهم',
    quote: 'امیدبخش! آینده فرزندم روشن‌تر از قبل به نظر می‌رسد. کلاس‌ها عالی هستند!',
    rating: 5,
  },
  {
    name: 'مدیر',
    quote: 'امیدبخش! آینده فرزندم روشن‌تر از قبل به نظر می‌رسد. کلاس‌ها عالی هستند!',
    rating: 5,
  },
  {
    name: 'مادر فاطمه کلاس دوازدهم',
    quote: 'امیدبخش! آینده فرزندم روشن‌تر از قبل به نظر می‌رسد. کلاس‌ها عالی هستند!',
    rating: 5,
  },
];

const TestimonialCard = ({ name, quote, rating }) => (
  <div className="testimonial-card">
    <div className="testimonial-card__quote-icon">"</div>
    <p className="testimonial-card__text">{quote}</p>
    <div className="testimonial-card__footer">
      <span className="testimonial-card__stars">{'★'.repeat(rating)}</span>
      <span className="testimonial-card__name">{name}</span>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">خانواده‌ها چه می‌گویند؟</h2>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
