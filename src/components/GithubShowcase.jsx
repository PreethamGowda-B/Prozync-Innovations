import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, GitBranch, GitPullRequest, Star } from 'lucide-react';

const repos = [
  { name: 'SmartERP-BackendEnd', lang: 'Node.js / Express', stars: '12', desc: 'Enterprise-grade backend for production tracking and inventory management.' },
  { name: 'SmartERP-FrontEnd', lang: 'React / Vite', stars: '8', desc: 'Modern dashboard interface for SmartERP enterprise operations.' },
  { name: 'Master-Time-Table-Portal', lang: 'Full Stack', stars: '15', desc: 'Advanced automation portal for intelligent educational scheduling.' }
];

const GithubShowcase = () => {
  return (
    <section className="section-padding" style={{ background: '#050505', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <div style={{ background: 'var(--accent-blue)', padding: '0.8rem', borderRadius: '12px' }}><Terminal size={24} /></div>
          <div>
            <h2 className="premium-title" style={{ fontSize: '2.5rem' }}>Enterprise <span className="text-gradient">Engineering</span></h2>
            <p style={{ color: 'var(--muted-text)' }}>Exploring our core infrastructure and repositories.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {repos.map((repo, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass"
              style={{
                padding: '2.5rem',
                border: '1px solid rgba(255,255,255,0.05)',
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.02), transparent)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <Code size={24} style={{ color: 'var(--accent-blue)' }} />
                <div style={{ display: 'flex', gap: '1rem', color: 'var(--muted-text)', fontSize: '0.8rem' }}>
                   <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Star size={14} /> {repo.stars}</span>
                   <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><GitBranch size={14} /> main</span>
                </div>
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontFamily: 'monospace' }}>{repo.name}</h3>
              <p style={{ color: 'var(--muted-text)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>{repo.desc}</p>
              <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {repo.lang}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Code Background Effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40%',
        height: '100%',
        opacity: 0.05,
        pointerEvents: 'none',
        fontFamily: 'monospace',
        fontSize: '0.8rem',
        padding: '2rem',
        overflow: 'hidden',
        color: 'var(--accent-blue)'
      }}>
        {`class EnterpriseSystem {
  constructor() {
    this.core = "SmartERP";
    this.status = "production";
  }
  
  async deploy(module) {
    console.log("Deploying " + module);
    return await this.automation.process();
  }
}

// Initializing Prozync Core
const system = new EnterpriseSystem();
system.deploy("AI_ENGINE");
system.deploy("ERP_ANALYTICS");`}
      </div>
    </section>
  );
};

export default GithubShowcase;
