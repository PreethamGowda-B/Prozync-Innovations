import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, Globe, CheckCircle2, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [isLight, setIsLight] = useState(document.documentElement.getAttribute('data-theme') === 'light');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate premium backend ingestion pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="grid-2-col">
          <div>
            <h2 className="premium-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
              Let's Build <span className="text-gradient">Something Great</span>
            </h2>
            <p style={{ color: 'var(--muted-text)', fontSize: '1.2rem', marginBottom: '4rem', lineHeight: '1.7' }}>
              Have a visionary project in mind? We'd love to help you bring it to life with our premium engineering and design expertise.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <motion.div 
                whileHover={{ x: 5 }}
                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
              >
                <div className="glass" style={{ padding: '1.2rem', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px', border: '1px solid rgba(0, 114, 255, 0.2)' }}><Mail size={24} /></div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email Us</p>
                  <a href="mailto:prozyncinnovations@gmail.com" style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-color)', textDecoration: 'none' }}>prozyncinnovations@gmail.com</a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
              >
                <div className="glass" style={{ padding: '1.2rem', color: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px', border: '1px solid rgba(140, 30, 255, 0.2)' }}><Phone size={24} /></div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Call Us</p>
                  <a href="tel:+919535134351" style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--text-color)', textDecoration: 'none' }}>+91 9535134351</a>
                </div>
              </motion.div>
            </div>

            <div style={{ marginTop: '4rem', display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
              <a href="https://wa.me/919535134351" target="_blank" rel="noopener noreferrer" className="btn-premium btn-secondary" style={{ padding: '1.1rem 2.2rem' }}>
                WhatsApp Us
              </a>
              <a href="https://prozync.in" target="_blank" rel="noopener noreferrer" className="btn-premium btn-primary" style={{ padding: '1.1rem 2.2rem' }}>
                Book SmartERP Demo
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{ 
              padding: '3.5rem', 
              borderRadius: '30px', 
              border: '1px solid var(--glass-border)',
              position: 'relative',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.02), transparent)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
            }}
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleSubmit} 
                  style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="grid-2-col-mobile">
                    <div className="form-group" style={{ position: 'relative' }}>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Full Name" 
                        style={inputStyle(isLight)} 
                      />
                    </div>
                    <div className="form-group">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email Address" 
                        style={inputStyle(isLight)} 
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject" 
                      style={inputStyle(isLight)} 
                    />
                  </div>
                  <div className="form-group">
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project" 
                      rows="5" 
                      style={{ ...inputStyle(isLight), resize: 'none' }}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-premium btn-primary" 
                    style={{ 
                      width: '100%', 
                      justifyContent: 'center', 
                      padding: '1.2rem',
                      fontSize: '1rem',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isSubmitting ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <span className="spinner" /> Syncing Pipeline...
                      </span>
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        Send Proposal <Send size={18} />
                      </span>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    textAlign: 'center', 
                    padding: '3rem 1rem',
                    minHeight: '350px'
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    style={{ color: 'var(--accent-cyan)', marginBottom: '2rem' }}
                  >
                    <CheckCircle2 size={64} />
                  </motion.div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem' }}>
                    Proposal Received
                  </h3>
                  <p style={{ color: 'var(--muted-text)', lineHeight: '1.6', fontSize: '1.05rem', maxWidth: '350px' }}>
                    Our engineering architects are reviewing your specifications. Expect a response in under 12 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          border-top-color: #fff;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 580px) {
          .grid-2-col-mobile {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

const inputStyle = (isLight) => ({
  width: '100%',
  padding: '1.3rem',
  background: isLight ? '#ffffff' : 'rgba(255,255,255,0.03)',
  border: '1px solid var(--glass-border)',
  borderRadius: '16px',
  color: 'var(--text-color)',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  fontSize: '0.95rem',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: isLight ? '0 2px 10px rgba(0,0,0,0.02)' : 'none',
  ':focus': {
    borderColor: 'var(--accent-blue)',
    background: isLight ? '#ffffff' : 'rgba(255,255,255,0.05)',
    boxShadow: '0 0 20px rgba(0, 114, 255, 0.15)'
  }
});

export default Contact;
