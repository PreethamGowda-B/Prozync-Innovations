import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-menu-active' : ''}`}>
        <div className="container nav-content">
          <a href="#" className="logo" onClick={closeMobileMenu}>PROZYNC</a>
          
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#smarterp">SmartERP</a>
            <a href="#ai">AI Solutions</a>
            <a href="#contact" className="btn-premium btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}>
              Get Started
            </a>
            <ThemeToggle />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="mobile-only-controls">
            <div className="desktop-hidden" style={{ display: 'none' }}>
              <ThemeToggle />
            </div>
            {/* Custom styled CSS media media queries will target these */}
            <button 
              className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`} 
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu} />
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#services" onClick={closeMobileMenu}>Services</a>
        <a href="#work" onClick={closeMobileMenu}>Work</a>
        <a href="#smarterp" onClick={closeMobileMenu}>SmartERP</a>
        <a href="#ai" onClick={closeMobileMenu}>AI Solutions</a>
        <a href="#process" onClick={closeMobileMenu}>Our Process</a>
        <a href="#faq" onClick={closeMobileMenu}>FAQs</a>
        <a 
          href="#contact" 
          onClick={closeMobileMenu} 
          className="btn-premium btn-primary" 
          style={{ padding: '1rem 2rem', width: '100%', textAlign: 'center', marginTop: '2rem', justifyContent: 'center' }}
        >
          Get Started
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-hidden {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
