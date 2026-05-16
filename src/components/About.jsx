import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="premium-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
              Engineered for <span className="text-gradient">Innovation</span>
            </h2>
            <p style={{ color: 'var(--text-color)', fontSize: '1.4rem', marginBottom: '2rem', lineHeight: '1.5', fontWeight: '500' }}>
              Prozync Innovations is a modern software innovation company focused on building intelligent ERP systems, SaaS platforms, AI-powered business solutions, and futuristic web applications.
            </p>
            <p style={{ color: 'var(--muted-text)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              We emphasize enterprise software engineering, scalable architecture, and automation systems. Our mission is to integrate AI into modern business technology, creating premium digital experiences that drive growth and efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass"
            style={{ 
              height: '400px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Abstract background effect */}
            <div style={{ 
              position: 'absolute', 
              width: '150%', 
              height: '150%', 
              background: 'radial-gradient(circle, var(--glow-color) 0%, transparent 70%)',
              animation: 'rotate 20s linear infinite'
            }} />
            <div style={{ zIndex: 1, textAlign: 'center' }}>
              <h4 className="syncopate" style={{ fontSize: '2rem', marginBottom: '1rem' }}>SINCE 2026</h4>
              <p style={{ color: 'var(--muted-text)', textTransform: 'uppercase', letterSpacing: '0.3em' }}>Prozync Core</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default About;
