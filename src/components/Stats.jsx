import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stats = [
  { label: 'Enterprise SaaS Platforms', value: '4' },
  { label: 'AI-Powered Systems', value: '12' },
  { label: 'Full Stack Engineering', value: '5+' },
  { label: 'Automation Solutions', value: '25+' }
];

const Stats = () => {
  const [isLight, setIsLight] = React.useState(document.documentElement.getAttribute('data-theme') === 'light');

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding" style={{ background: 'var(--bg-color)', borderY: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="premium-title">Why <span className="text-gradient">Choose Us</span></h2>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem' 
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <h3 style={{ 
                fontSize: '4.5rem', 
                fontWeight: '800', 
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-main)',
                color: isLight ? 'var(--silver)' : 'var(--text-color)',
                letterSpacing: '-0.05em'
              }}>
                {stat.value}
              </h3>
              <p style={{ color: 'var(--muted-text)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div style={{ 
          marginTop: '6rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {[
            'Modern Technology Stack',
            'High Performance Development',
            'Premium UI/UX Experience',
            'Advanced Animation Expertise',
            'Scalable Software Architecture',
            'Future-Ready Solutions'
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              style={{
                padding: '1.5rem',
                border: '1px solid var(--glass-border)',
                borderRadius: '15px',
                textAlign: 'center',
                fontSize: '0.9rem',
                fontWeight: '600',
                background: 'var(--surface)'
              }}
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
