import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="grid-2-col">
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
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass"
            style={{ 
              height: '420px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              padding: '2rem',
              border: '1px solid var(--accent-blue)'
            }}
          >
            {/* Ambient background glow */}
            <div style={{ 
              position: 'absolute', 
              width: '100%', 
              height: '100%', 
              background: 'radial-gradient(circle, var(--glow-color) 0%, transparent 80%)',
              top: 0,
              left: 0,
              pointerEvents: 'none'
            }} />

            {/* Futuristic Architecture Node Cluster */}
            <svg viewBox="0 0 400 350" style={{ width: '100%', height: '100%', overflow: 'visible', zIndex: 1 }}>
              <defs>
                <linearGradient id="neon-line" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-blue)" />
                  <stop offset="50%" stopColor="var(--accent-purple)" />
                  <stop offset="100%" stopColor="var(--accent-cyan)" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Grid Connection Lines */}
              <line x1="200" y1="175" x2="70" y2="90" stroke="url(#neon-line)" strokeWidth="1.5" opacity="0.4" />
              <line x1="200" y1="175" x2="330" y2="90" stroke="url(#neon-line)" strokeWidth="1.5" opacity="0.4" />
              <line x1="200" y1="175" x2="70" y2="260" stroke="url(#neon-line)" strokeWidth="1.5" opacity="0.4" />
              <line x1="200" y1="175" x2="330" y2="260" stroke="url(#neon-line)" strokeWidth="1.5" opacity="0.4" />

              <line x1="70" y1="90" x2="330" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="70" y1="260" x2="330" y2="260" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="70" y1="90" x2="70" y2="260" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              <line x1="330" y1="90" x2="330" y2="260" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

              {/* Data streams (animated dashes) */}
              <path d="M 200 175 L 70 90" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" strokeDasharray="15, 120" strokeDashoffset="0" filter="url(#glow)">
                <animate attributeName="strokeDashoffset" values="135;0" dur="3s" repeatCount="indefinite" />
              </path>
              <path d="M 200 175 L 330 90" fill="none" stroke="var(--accent-purple)" strokeWidth="2.5" strokeDasharray="15, 120" strokeDashoffset="0" filter="url(#glow)">
                <animate attributeName="strokeDashoffset" values="0;135" dur="3.5s" repeatCount="indefinite" />
              </path>
              <path d="M 200 175 L 70 260" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5" strokeDasharray="15, 120" strokeDashoffset="0" filter="url(#glow)">
                <animate attributeName="strokeDashoffset" values="0;135" dur="4s" repeatCount="indefinite" />
              </path>
              <path d="M 200 175 L 330 260" fill="none" stroke="#ffbd2e" strokeWidth="2.5" strokeDasharray="15, 120" strokeDashoffset="0" filter="url(#glow)">
                <animate attributeName="strokeDashoffset" values="135;0" dur="2.8s" repeatCount="indefinite" />
              </path>

              {/* Outer Pulsing Rings */}
              <circle cx="200" cy="175" r="45" fill="none" stroke="rgba(0,114,255,0.15)" strokeWidth="1">
                <animate attributeName="r" values="35;60;35" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="175" r="70" fill="none" stroke="rgba(140,30,255,0.1)" strokeWidth="1" strokeDasharray="5, 5">
                <animate attributeName="rotation" values="0;360" dur="15s" repeatCount="indefinite" />
              </circle>

              {/* Center Core Node */}
              <circle cx="200" cy="175" r="22" fill="#030303" stroke="url(#neon-line)" strokeWidth="3" filter="url(#glow)" />
              <text x="200" y="179" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="900" fontFamily="var(--font-accent)">CORE</text>

              {/* Outer Module Nodes */}
              {/* Module 1: AI */}
              <g>
                <circle cx="70" cy="90" r="16" fill="#030303" stroke="var(--accent-blue)" strokeWidth="2" />
                <circle cx="70" cy="90" r="24" fill="none" stroke="var(--accent-blue)" strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" values="16;28;16" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x="70" y="93" textAnchor="middle" fill="var(--accent-blue)" fontSize="8" fontWeight="800" fontFamily="var(--font-body)">AI</text>
              </g>

              {/* Module 2: ERP */}
              <g>
                <circle cx="330" cy="90" r="16" fill="#030303" stroke="var(--accent-purple)" strokeWidth="2" />
                <circle cx="330" cy="90" r="24" fill="none" stroke="var(--accent-purple)" strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" values="16;28;16" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <text x="330" y="93" textAnchor="middle" fill="var(--accent-purple)" fontSize="8" fontWeight="800" fontFamily="var(--font-body)">ERP</text>
              </g>

              {/* Module 3: CLOUD */}
              <g>
                <circle cx="70" cy="260" r="16" fill="#030303" stroke="var(--accent-cyan)" strokeWidth="2" />
                <circle cx="70" cy="260" r="24" fill="none" stroke="var(--accent-cyan)" strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" values="16;28;16" dur="4s" repeatCount="indefinite" />
                </circle>
                <text x="70" y="263" textAnchor="middle" fill="var(--accent-cyan)" fontSize="7" fontWeight="800" fontFamily="var(--font-body)">SaaS</text>
              </g>

              {/* Module 4: API */}
              <g>
                <circle cx="330" cy="260" r="16" fill="#030303" stroke="#ffbd2e" strokeWidth="2" />
                <circle cx="330" cy="260" r="24" fill="none" stroke="#ffbd2e" strokeWidth="1" opacity="0.3">
                  <animate attributeName="r" values="16;28;16" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <text x="330" y="263" textAnchor="middle" fill="#ffbd2e" fontSize="8" fontWeight="800" fontFamily="var(--font-body)">API</text>
              </g>
            </svg>

            {/* Subtle center overlays */}
            <div style={{ position: 'absolute', bottom: '1.5rem', textAlign: 'center', zIndex: 2 }}>
              <p style={{ color: 'var(--text-color)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: '700' }}>
                Prozync Modular Architecture
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
