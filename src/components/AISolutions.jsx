import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Network, Sparkles } from 'lucide-react';

const AISolutions = () => {
  return (
    <section id="ai" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="premium-title" style={{ fontSize: '3.5rem' }}>
            AI <span className="text-gradient">Automation</span>
          </h2>
        </div>

        <div className="grid-4-col">
          {[
            { title: 'Neural Networks', icon: <Brain />, desc: 'Deep learning models for complex data analysis.' },
            { title: 'Workflow Automation', icon: <Cpu />, desc: 'Intelligent systems to automate repetitive tasks.' },
            { title: 'Cognitive Computing', icon: <Network />, desc: 'Machines that think and learn like humans.' },
            { title: 'Generative AI', icon: <Sparkles />, desc: 'Creative AI solutions for content and design.' }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass"
              style={{
                padding: '3rem 2rem',
                textAlign: 'center',
                border: '1px solid var(--accent-cyan)',
                background: 'linear-gradient(180deg, rgba(0, 242, 254, 0.05) 0%, transparent 100%)'
              }}
            >
              <div style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem' }}>
                {React.cloneElement(item.icon, { size: 48 })}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>{item.title}</h3>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Neural Elements */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.1,
        pointerEvents: 'none'
      }}>
        <div style={{ width: '100%', height: '100%', border: '1px dashed var(--accent-cyan)', borderRadius: '50%', opacity: 0.15 }} />
      </div>
    </section>
  );
};

export default AISolutions;

