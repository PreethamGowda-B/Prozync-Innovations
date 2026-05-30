import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    // Parse the numeric target and any suffix
    const numericTarget = parseInt(value.replace(/[^0-9]/g, ''), 10);
    const suffix = value.replace(/[0-9]/g, '');

    let start = 0;
    const end = numericTarget;
    if (start === end) {
      setCount(numericTarget);
      return;
    }

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, isInView, duration]);

  // Return the count along with the parsed suffix (e.g., '+')
  const suffix = value.replace(/[0-9]/g, '');
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  { label: 'Enterprise SaaS Platforms', value: '4' },
  { label: 'AI-Powered Systems', value: '12' },
  { label: 'Full Stack Engineering', value: '5+' },
  { label: 'Automation Solutions', value: '25+' }
];

const Stats = () => {
  const [isLight, setIsLight] = useState(document.documentElement.getAttribute('data-theme') === 'light');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding" style={{ background: 'var(--bg-color)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 className="premium-title" style={{ fontSize: '3.5rem' }}>Why <span className="text-gradient">Choose Us</span></h2>
          <p style={{ color: 'var(--muted-text)', marginTop: '1rem', fontSize: '1.1rem' }}>High-fidelity systems engineered for scalable growth.</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '3rem' 
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ textAlign: 'center' }}
            >
              <h3 style={{ 
                fontSize: '5rem', 
                fontWeight: '900', 
                marginBottom: '0.8rem',
                fontFamily: 'var(--font-main)',
                color: isLight ? 'var(--silver)' : 'var(--text-color)',
                letterSpacing: '-0.05em'
              }}>
                <AnimatedCounter value={stat.value} />
              </h3>
              <p style={{ color: 'var(--muted-text)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: '600' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div style={{ 
          marginTop: '7rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.8rem'
        }}>
          {[
            { title: 'Modern Tech Stack', desc: 'React, Node, ThreeJS, high-performance execution.' },
            { title: 'High Performance', desc: 'Sub-millisecond query optimization and dynamic asset loading.' },
            { title: 'Premium UX Design', desc: 'Crafting responsive, immersive pixel-perfect interactions.' },
            { title: 'Animation Expertise', desc: 'GSAP pipelines, Framer Motion transitions, and canvas scenes.' },
            { title: 'Scalable Architecture', desc: 'Microservice clusters, robust APIs, secure database structures.' },
            { title: 'Future-Ready Systems', desc: 'Seamlessly integrate cutting-edge LLMs and neural solutions.' }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{
                padding: '2rem 1.5rem',
                border: '1px solid var(--glass-border)',
                borderRadius: '20px',
                textAlign: 'left',
                background: 'var(--surface)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
              }}
            >
              <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-color)' }}>
                {feature.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted-text)', lineHeight: '1.5' }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
