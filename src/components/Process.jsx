import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Cpu, Rocket } from 'lucide-react';

const steps = [
  {
    phase: '01',
    title: 'Discovery & Analytics',
    desc: 'Deep exploration of existing pipelines, bottlenecks, and operational requirements. We audit workflows to specify quantitative performance indicators.',
    icon: <Search size={28} />,
    color: 'var(--accent-blue)'
  },
  {
    phase: '02',
    title: 'Custom Architecture',
    desc: 'Engineering scalable backend systems, database schemas, and tailored integrations. We prototype UI designs to align on visual direction.',
    icon: <Compass size={28} />,
    color: 'var(--accent-purple)'
  },
  {
    phase: '03',
    title: 'Core Development & Integration',
    desc: 'Coding custom solutions, scheduling nodes, and connecting AI models. Continuous quality controls and automated pipelines ensure robust code.',
    icon: <Cpu size={28} />,
    color: 'var(--accent-cyan)'
  },
  {
    phase: '04',
    title: 'Deployment & Scale',
    desc: 'Deploying optimized builds to AWS / Cloud systems, setting up analytics monitoring, and training operational staff to drive business growth.',
    icon: <Rocket size={28} />,
    color: '#ffbd2e'
  }
];

const Process = () => {
  return (
    <section id="process" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 className="premium-title" style={{ fontSize: '3.5rem', marginBottom: '1.2rem' }}>
            Our <span className="text-gradient">Engineering Process</span>
          </h2>
          <p style={{ color: 'var(--muted-text)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            A systematic, high-fidelity development cycle engineered to transform enterprise operations.
          </p>
        </div>

        <div className="grid-4-col">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass"
              style={{
                padding: '3rem 2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                border: `1px solid var(--glass-border)`
              }}
            >
              {/* Outer boundary shadow indicator */}
              <div 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '4px', 
                  background: step.color,
                  borderRadius: '20px 20px 0 0'
                }} 
              />
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ color: step.color }}>
                  {step.icon}
                </div>
                <span className="syncopate" style={{ fontSize: '2.5rem', fontWeight: '800', opacity: 0.15 }}>
                  {step.phase}
                </span>
              </div>
              
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginTop: '1rem' }}>
                {step.title}
              </h3>
              
              <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
