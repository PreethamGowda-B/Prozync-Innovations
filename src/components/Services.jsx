import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Box, Cpu, Rocket, Layout, Globe, ArrowRight } from 'lucide-react';

const BentoCard = ({ children, className, style, glowColor = 'rgba(0, 114, 255, 0.15)', isBorderGlow = false }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.3 }}
      className={`bento-item glass ${className || ''}`}
      style={{
        ...style,
        border: isBorderGlow ? '1px solid var(--accent-blue)' : '1px solid var(--glass-border)'
      }}
    >
      <div 
        className="glow-overlay" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${glowColor}, transparent 70%)`,
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.4s ease',
          zIndex: 0
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
        {children}
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [isLight, setIsLight] = useState(document.documentElement.getAttribute('data-theme') === 'light');

  useEffect(() => {
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
          <p style={{ color: 'var(--muted-text)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            A comprehensive suite of high-end digital solutions designed for the world's most ambitious companies.
          </p>
        </div>

        <div className="bento-grid">
          {/* Item 1: Large Feature - SmartERP */}
          <BentoCard 
            className="bento-item-large"
            style={{ padding: '3.5rem' }}
            glowColor={isLight ? "rgba(0, 102, 255, 0.08)" : "rgba(0, 114, 255, 0.18)"}
            isBorderGlow={true}
          >
            <div>
              <div style={{ color: 'var(--accent-blue)', marginBottom: '2.5rem' }}>
                <Rocket size={48} />
              </div>
              <h3 style={{ fontSize: '2.2rem', marginBottom: '1.2rem', fontWeight: 800 }}>SmartERP Solutions</h3>
              <p style={{ color: 'var(--muted-text)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '2rem' }}>
                Full-featured enterprise ERP and SaaS platform designed for business automation, analytics, inventory management, and production tracking. Built to scale for millions of operations.
              </p>
            </div>
            <div style={{ background: 'var(--accent-blue)', height: '4px', width: '60px', borderRadius: '2px' }} />
          </BentoCard>

          {/* Item 2: AI Automation */}
          <BentoCard 
            className="bento-item-wide"
            style={{ padding: '2.5rem', justifyContent: 'center' }}
            glowColor={isLight ? "rgba(130, 39, 227, 0.08)" : "rgba(140, 30, 255, 0.18)"}
          >
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <div style={{ color: 'var(--accent-purple)' }}><Cpu size={40} /></div>
              <div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.6rem', fontWeight: 700 }}>AI Automation & LLMs</h3>
                <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Intelligent AI-powered platforms that automate complex business workflows, parse document semantics, and integrate custom model pipelines.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Item 3: SaaS Platform Development */}
          <BentoCard 
            style={{ padding: '2.5rem', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
            glowColor={isLight ? "rgba(42, 191, 176, 0.08)" : "rgba(0, 242, 258, 0.18)"}
          >
            <div style={{ color: 'var(--accent-cyan)', marginBottom: '1.2rem' }}><Box size={32} /></div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>SaaS Platforms</h4>
          </BentoCard>

          {/* Item 4: Dashboard Systems */}
          <BentoCard 
            style={{ padding: '2.5rem', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
            glowColor="rgba(255, 189, 46, 0.15)"
          >
            <div style={{ color: '#ffbd2e', marginBottom: '1.2rem' }}><Layout size={32} /></div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Enterprise Dashboards</h4>
          </BentoCard>

          {/* Item 5: Web Apps & 3D */}
          <BentoCard 
            className="bento-item-wide"
            style={{ padding: '2.5rem', justifyContent: 'center' }}
            glowColor={isLight ? "rgba(42, 191, 176, 0.08)" : "rgba(0, 242, 258, 0.18)"}
          >
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <div style={{ color: 'var(--accent-cyan)' }}><Globe size={40} /></div>
              <div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.6rem', fontWeight: 700 }}>Modern Web Applications</h3>
                <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Scalable, high-performance web systems and 3D interactive experiences engineered with React and ThreeJS.
                </p>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>

      <style>{`
        .bento-item:hover .glow-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Services;
