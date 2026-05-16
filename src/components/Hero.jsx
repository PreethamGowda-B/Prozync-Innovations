import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

import ThreeHero from './ThreeHero';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5, delay: 0.8 }
    )
    .fromTo(subRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=1'
    )
    .fromTo(btnRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.8'
    );
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <ThreeHero />
      <div className="grid-bg"></div>
      
      <div className="hero-content container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="floating-glow"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, var(--glow-color) 0%, transparent 70%)',
            zIndex: -1,
            filter: 'blur(120px)',
            opacity: 0.6
          }}
        />

        <h1 ref={titleRef} className="hero-title">
          <span className="syncopate">PROZYNC</span><br />
          <span className="text-gradient">INNOVATIONS</span>
        </h1>
        
        <p ref={subRef} className="hero-sub" style={{ fontSize: '1.2rem', maxWidth: '800px' }}>
          Building <span style={{ color: 'var(--text-color)', fontWeight: '600' }}>Smart ERP, AI & Enterprise Solutions</span> for the Future. 
          Prozync Innovations develops intelligent ERP systems, AI-powered platforms, SaaS applications, and futuristic digital experiences for businesses and industries.
        </p>

        <div ref={btnRef} className="hero-btns" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
          <a href="#smarterp" className="btn-premium btn-primary">
            SmartERP Demo <ArrowRight size={20} />
          </a>
          <a href="#work" className="btn-premium btn-secondary">
            Explore Solutions
          </a>
        </div>
      </div>

      {/* Placeholder for 3D Elements */}
      <div className="hero-3d-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 5, pointerEvents: 'none' }}>
        {/* Three.js Canvas will go here */}
      </div>

      <div className="scroll-indicator" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: '2px', height: '50px', background: 'linear-gradient(to bottom, var(--accent-blue), transparent)' }}
        />
      </div>
    </section>
  );
};

export default Hero;
