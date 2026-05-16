import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [isLight, setIsLight] = React.useState(document.documentElement.getAttribute('data-theme') === 'light');

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
          <div>
            <h2 className="premium-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
              Let's Build <span className="text-gradient">Something Great</span>
            </h2>
            <p style={{ color: 'var(--muted-text)', fontSize: '1.2rem', marginBottom: '4rem' }}>
              Have a visionary project in mind? We'd love to help you bring it to life with our premium engineering and design expertise.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="glass" style={{ padding: '1rem', color: 'var(--accent-blue)' }}><Mail size={24} /></div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)', textTransform: 'uppercase' }}>Email Us</p>
                  <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>prozyncinnovations@gmail.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="glass" style={{ padding: '1rem', color: 'var(--accent-purple)' }}><Phone size={24} /></div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)', textTransform: 'uppercase' }}>Call Us</p>
                  <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>+91 9535134351</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
              <a href="https://wa.me/919535134351" target="_blank" rel="noopener noreferrer" className="btn-premium btn-secondary" style={{ padding: '1rem 2rem' }}>
                WhatsApp Us
              </a>
              <a href="https://prozync.in" target="_blank" rel="noopener noreferrer" className="btn-premium btn-primary" style={{ padding: '1rem 2rem' }}>
                Book SmartERP Demo
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{ padding: '3rem', borderRadius: '30px' }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="form-group">
                  <input type="text" placeholder="Full Name" style={inputStyle(isLight)} />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" style={inputStyle(isLight)} />
                </div>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" style={inputStyle(isLight)} />
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your project" rows="5" style={{ ...inputStyle(isLight), resize: 'none' }}></textarea>
              </div>
              <button type="submit" className="btn-premium btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const inputStyle = (isLight) => ({
  width: '100%',
  padding: '1.2rem',
  background: isLight ? '#fff' : 'rgba(255,255,255,0.05)',
  border: '1px solid var(--glass-border)',
  borderRadius: '12px',
  color: 'var(--text-color)',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 0.3s ease',
  boxShadow: isLight ? '0 2px 10px rgba(0,0,0,0.02)' : 'none'
});

export default Contact;
