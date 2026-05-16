import React from 'react';
import { motion } from 'framer-motion';
import { Code, Send, Briefcase, Mail, MapPin, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="section-padding" style={{ background: 'var(--surface)', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          <div>
            <a href="/" className="logo" style={{ marginBottom: '1.5rem', display: 'block' }}>
              PRO<span className="text-gradient">ZYNC</span>
            </a>
            <p style={{ color: 'var(--muted-text)', lineHeight: '1.6', marginBottom: '2rem' }}>
              Prozync Innovations is a modern software company focused on building intelligent ERP systems, SaaS platforms, and futuristic enterprise applications.
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Solutions</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['SmartERP', 'AI Automation', 'SaaS Platforms', 'Web Systems'].map((link, i) => (
                <li key={i} style={{ marginBottom: '0.8rem' }}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} style={{ color: 'var(--muted-text)', textDecoration: 'none', transition: 'color 0.3s' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--muted-text)', marginBottom: '1rem' }}>
                <Mail size={18} /> prozyncinnovations@gmail.com
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--muted-text)', marginBottom: '1rem' }}>
                <Phone size={18} /> +91 9535134351
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--muted-text)', marginBottom: '1rem' }}>
                <Globe size={18} /> https://prozync.in
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Newsletter</h4>
            <p style={{ color: 'var(--muted-text)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Subscribe to stay updated with our latest innovations.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="glass" 
                style={{ padding: '0.8rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', flex: 1, borderRadius: '10px' }} 
              />
              <button className="btn-premium btn-primary" style={{ padding: '0.8rem 1.5rem' }}>
                Join
              </button>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--muted-text)', fontSize: '0.8rem' }}>
          <p>© 2026 Prozync Innovations. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
