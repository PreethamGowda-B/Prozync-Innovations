import React from 'react';
import { motion } from 'framer-motion';
import { Code, Box, Cpu, Rocket, Factory, Layout, Database, Smartphone, Sparkles, Globe, Shield } from 'lucide-react';

const Services = () => {
  const [isLight, setIsLight] = React.useState(document.documentElement.getAttribute('data-theme') === 'light');

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="premium-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            Elevating <span className="text-gradient">Possibilities</span>
          </h2>
          <p style={{ color: 'var(--muted-text)', maxWidth: '600px', margin: '0 auto' }}>
            A comprehensive suite of high-end digital solutions designed for the world's most ambitious companies.
          </p>
        </div>

        <div className="bento-grid">
          {/* Item 1: Large Feature - SmartERP */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bento-item bento-item-large glass"
            style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid var(--accent-blue)' }}
          >
            <div>
              <div style={{ color: 'var(--accent-blue)', marginBottom: '2rem' }}><Rocket size={48} /></div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>SmartERP Solutions</h3>
              <p style={{ color: 'var(--muted-text)', lineHeight: '1.6' }}>
                Full-featured enterprise ERP and SaaS platform designed for business automation, analytics, inventory management, and production tracking.
              </p>
            </div>
            <div style={{ background: 'var(--accent-blue)', height: '4px', width: '60px', borderRadius: '2px' }} />
          </motion.div>

          {/* Item 2: AI Automation */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bento-item bento-item-wide glass"
            style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}
          >
            <div style={{ color: 'var(--accent-purple)' }}><Cpu size={40} /></div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>AI Automation</h3>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.9rem' }}>Intelligent AI-powered platforms that automate complex business workflows.</p>
            </div>
          </motion.div>

          {/* Item 3: SaaS Platform Development */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bento-item glass"
            style={{ padding: '2rem', textAlign: 'center' }}
          >
            <div style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}><Box size={32} /></div>
            <h4 style={{ fontSize: '1.1rem' }}>SaaS Platforms</h4>
          </motion.div>

          {/* Item 4: Dashboard Systems */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bento-item glass"
            style={{ padding: '2rem', textAlign: 'center' }}
          >
            <div style={{ color: '#ffbd2e', marginBottom: '1rem' }}><Layout size={32} /></div>
            <h4 style={{ fontSize: '1.1rem' }}>Enterprise Dashboards</h4>
          </motion.div>

          {/* Item 5: Web Apps & 3D */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bento-item bento-item-wide glass"
            style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', background: 'linear-gradient(135deg, rgba(80, 227, 194, 0.05), transparent)' }}
          >
            <div style={{ color: 'var(--accent-cyan)' }}><Globe size={40} /></div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Modern Web Applications</h3>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.9rem' }}>Scalable, high-performance web systems and 3D interactive experiences.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
