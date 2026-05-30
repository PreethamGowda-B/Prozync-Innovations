import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, BarChart, ArrowRight, Server, Database, TrendingUp } from 'lucide-react';

const SmartERP = () => {
  const [isLight, setIsLight] = useState(document.documentElement.getAttribute('data-theme') === 'light');
  const [activeTab, setActiveTab] = useState('analytics');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="smarterp" className="section-padding" style={{ background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="grid-2-col">
          <div>
            <h2 className="premium-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
              <span className="text-gradient">SmartERP</span> Enterprise
            </h2>
            <p style={{ color: 'var(--muted-text)', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              SmartERP is the flag-ship enterprise platform developed by Prozync Innovations. A fully-featured SaaS dashboard designed to automate inventory control, production pipelines, database queries, and custom financial tracking.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { icon: <Activity />, text: 'Production Tracking', desc: 'Real-time bottleneck alerts' },
                { icon: <ShieldCheck />, text: 'Inventory Management', desc: 'Secure database logs' },
                { icon: <Zap />, text: 'Workflow Automation', desc: 'Dynamic scheduling pipes' },
                { icon: <BarChart />, text: 'Real-time Analytics', desc: 'Interactive ROI forecasts' }
              ].map((item, i) => (
                <div key={i} className="glass" style={{ padding: '1.5rem', border: '1px solid var(--glass-border)' }}>
                  <div style={{ color: 'var(--accent-cyan)', marginBottom: '0.8rem' }}>{item.icon}</div>
                  <h4 style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.3rem' }}>{item.text}</h4>
                  <p style={{ color: 'var(--muted-text)', fontSize: '0.75rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <a href="https://prozync.in" target="_blank" rel="noopener noreferrer" className="btn-premium btn-primary">
                Visit SmartERP <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Dashboard Visual Placeholder */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="glass"
              style={{
                width: '100%',
                borderRadius: '30px',
                padding: '2.5rem',
                position: 'relative',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                border: '1px solid var(--accent-blue)',
                minHeight: '480px'
              }}
            >
              {/* Header bar controls */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {['analytics', 'nodes'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        padding: '0.3rem 0.8rem',
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        borderRadius: '20px',
                        border: 'none',
                        cursor: 'pointer',
                        background: activeTab === tab ? 'var(--accent-blue)' : 'rgba(255,255,255,0.05)',
                        color: '#fff',
                        fontWeight: '700'
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {activeTab === 'analytics' ? (
                <>
                  {/* Top quick stats widgets */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    {[
                      { label: 'Uptime', val: '99.98%', indicator: '#27c93f' },
                      { label: 'Active Tasks', val: '2,840/s', indicator: 'var(--accent-cyan)' },
                      { label: 'Query Speed', val: '14ms', indicator: 'var(--accent-purple)' }
                    ].map((w, idx) => (
                      <div key={idx} style={{ padding: '0.8rem', background: isLight ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                        <div style={{ fontSize: '0.65rem', color: 'var(--muted-text)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: w.indicator }} />
                          {w.label}
                        </div>
                        <div style={{ fontSize: '1.1rem', fontWeight: '800', marginTop: '0.3rem', fontFamily: 'monospace' }}>{w.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Dynamic Graphic SVG Line Chart */}
                  <div style={{ flex: 1, minHeight: '180px', background: isLight ? 'rgba(0,0,0,0.02)' : 'rgba(255,255,255,0.03)', borderRadius: '15px', padding: '1.2rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Performance telemetry</div>
                      <div style={{ color: '#27c93f', display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.7rem', fontWeight: '800' }}>
                        <TrendingUp size={12} /> +12.4%
                      </div>
                    </div>
                    <svg viewBox="0 0 400 150" style={{ width: '100%', height: '80%', overflow: 'visible' }}>
                      <defs>
                        <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.4"/>
                          <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      {/* Gradient fill */}
                      <path 
                        d="M 0 120 C 50 110, 80 50, 130 60 C 180 70, 220 20, 270 30 C 320 40, 350 110, 400 100 L 400 150 L 0 150 Z" 
                        fill="url(#chart-glow)" 
                      />
                      {/* Grid helper lines */}
                      <line x1="0" y1="37" x2="400" y2="37" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                      <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                      <line x1="0" y1="112" x2="400" y2="112" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                      {/* Plot line */}
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        d="M 0 120 C 50 110, 80 50, 130 60 C 180 70, 220 20, 270 30 C 320 40, 350 110, 400 100" 
                        fill="none" 
                        stroke="var(--accent-blue)" 
                        strokeWidth="3" 
                      />
                      {/* Pulse point indicators */}
                      <circle cx="270" cy="30" r="4" fill="var(--accent-cyan)" />
                      <circle cx="270" cy="30" r="10" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" opacity="0.6">
                        <animate attributeName="r" values="4;12;4" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  </div>
                </>
              ) : (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
                  {[
                    { node: 'US-East AWS Node', status: 'Healthy', load: '45%' },
                    { node: 'AP-South Database', status: 'Healthy', load: '12%' },
                    { node: 'EU-West Processing Unit', status: 'Overload', load: '92%', warn: true }
                  ].map((n, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <div style={{ color: n.warn ? '#ff5f56' : 'var(--accent-cyan)' }}>
                          {n.warn ? <Server size={18} /> : <Database size={18} />}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>{n.node}</div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--muted-text)' }}>CPU usage: {n.load}</div>
                        </div>
                      </div>
                      <span style={{
                        fontSize: '0.65rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '20px',
                        background: n.warn ? 'rgba(255,95,86,0.1)' : 'rgba(39,201,63,0.1)',
                        color: n.warn ? '#ff5f56' : '#27c93f',
                        fontWeight: '800'
                      }}>
                        {n.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom footer status details */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--muted-text)', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                <div>SYSTEM LOGS: OK</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f', display: 'inline-block', boxShadow: '0 0 10px #27c93f' }} />
                  SECURE ENDPOINT PIPELINE ACTIVE
                </div>
              </div>

              {/* Floating blur circles background overlay */}
              <motion.div
                animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  background: 'var(--accent-purple)',
                  opacity: 0.15,
                  filter: 'blur(50px)',
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
