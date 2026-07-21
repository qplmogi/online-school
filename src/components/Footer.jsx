import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <p className="cta-banner__text">
            برای پیگیری وضعیت تحصیلی فرزندتان با ما در تماس باشید 
          </p>
          <button className="cta-banner__btn">مشاوره رایگان</button>
        </div>
      </section>

      <footer className="footer" id="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <span className="footer__logo">🎓 مدرسه آنلاین</span>
            <p className="footer__tagline">همراه تحصیلی خانواده‌های ایرانی</p>
          </div>
          <div className="footer__links">
            <a href="#services">خدمات</a>
            <a href="#teachers">استادها</a>
            <a href="#how">روش کار</a>
            <a href="#parents">والدین</a>
          </div>
          <p className="footer__copy">© ۱۴۰۳ مدرسه آنلاین. تمام حقوق محفوظ است.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
