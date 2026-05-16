import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'SmartERP Enterprise',
    category: 'Enterprise SaaS Platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['SaaS', 'ERP', 'Automation', 'Cloud']
  },
  {
    title: 'Master Time Table Portal',
    category: 'Educational Automation',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Intelligent Scheduling', 'Automation', 'Admin Controls']
  }
];

const Portfolio = () => {
  const [isLight, setIsLight] = React.useState(document.documentElement.getAttribute('data-theme') === 'light');

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="section-padding">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <h2 className="premium-title" style={{ fontSize: '3.5rem' }}>
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p style={{ color: 'var(--muted-text)', marginTop: '1rem' }}>Our finest work across various industries.</p>
          </div>
          <a href="#" className="btn-premium btn-secondary">View All Projects</a>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
          gap: '3rem' 
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="portfolio-card"
              style={{ 
                position: 'relative', 
                cursor: 'pointer',
                background: isLight ? '#fff' : 'transparent',
                borderRadius: '30px',
                padding: isLight ? '1rem' : '0',
                boxShadow: isLight ? '0 20px 40px rgba(0,0,0,0.05)' : 'none',
                border: isLight ? '1px solid var(--glass-border)' : 'none'
              }}
            >
              <div style={{
                width: '100%',
                height: '400px',
                borderRadius: '30px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '2.5rem',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }} className="card-overlay">
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{ 
                        fontSize: '0.7rem', 
                        padding: '0.3rem 0.8rem', 
                        background: 'var(--accent-blue)', 
                        borderRadius: '20px' 
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '700' }}>{project.title}</h3>
                  <p style={{ color: 'var(--muted-text)', marginTop: '0.3rem' }}>{project.category}</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <motion.div whileHover={{ scale: 1.2 }} style={{ color: 'var(--text-color)' }}><ExternalLink size={20} /></motion.div>
                  <motion.div whileHover={{ scale: 1.2 }} style={{ color: 'var(--text-color)' }}><Code size={20} /></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .portfolio-card:hover .card-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
