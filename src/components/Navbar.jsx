import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'اساتید', href: '#teachers' },
  { label: 'خدمات ما', href: '#services' },
  { label: 'روش کاری ', href: '#how' },
  { label: 'مجله والدین', href: '#parents' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <div className="navbar__logo">
          <span className="navbar__logo-icon">🎓</span>
          <span className="navbar__logo-text">مدرسه آنلاین</span>
        </div>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="navbar__link" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button className="navbar__cta">تماس با ما  </button>

        <button
          className={`navbar__hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="منو"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
