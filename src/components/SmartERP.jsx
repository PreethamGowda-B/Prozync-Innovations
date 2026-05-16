import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, BarChart, Activity, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const SmartERP = () => {
  const [isLight, setIsLight] = React.useState(document.documentElement.getAttribute('data-theme') === 'light');

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="smarterp" className="section-padding" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <h2 className="premium-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
              <span className="text-gradient">SmartERP</span> Enterprise
            </h2>
            <p style={{ color: 'var(--muted-text)', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              SmartERP is the enterprise ERP and SaaS platform developed by Prozync Innovations. A fully-featured platform designed for business automation, analytics, inventory management, workflow systems, and enterprise operations.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                { icon: <Activity />, text: 'Production Tracking' },
                { icon: <ShieldCheck />, text: 'Inventory Management' },
                { icon: <Zap />, text: 'Workflow Automation' },
                { icon: <BarChart />, text: 'Real-time Analytics' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ color: 'var(--accent-cyan)' }}>{item.icon}</div>
                  <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>{item.text}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem' }}>
              <a href="https://prozync.in" target="_blank" rel="noopener noreferrer" className="btn-premium btn-primary">
                Visit SmartERP <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Dashboard Visual Placeholder */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="glass"
              style={{
                width: '100%',
                height: '450px',
                borderRadius: '30px',
                padding: '2rem',
                position: 'relative',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                border: '1px solid var(--accent-blue)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>SmartERP v2.4</div>
              </div>
              
              <div style={{ flex: 1, display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 2, background: isLight ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)', borderRadius: '15px', padding: '1rem' }}>
                  {/* Image Placeholder */}
                  <div style={{ width: '100%', height: '100%', background: isLight ? 'rgba(0,102,255,0.05)' : 'linear-gradient(45deg, rgba(0,112,243,0.1), transparent)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LineChart size={64} style={{ opacity: isLight ? 0.4 : 0.2, color: 'var(--accent-blue)' }} />
                  </div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ flex: 1, background: isLight ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)', borderRadius: '15px' }} />
                  <div style={{ flex: 1, background: isLight ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)', borderRadius: '15px' }} />
                </div>
              </div>
              
              <div style={{ height: '80px', background: isLight ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)', borderRadius: '15px' }} />
              
              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '150px',
                  height: '150px',
                  borderRadius: '20px',
                  background: 'var(--accent-purple)',
                  opacity: 0.8,
                  filter: 'blur(40px)',
                  zIndex: -1
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartERP;
