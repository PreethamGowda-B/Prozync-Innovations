import React, { useEffect, useRef, Suspense, lazy, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, ChevronDown, Zap, Shield, Globe } from 'lucide-react';

const ThreeHero = lazy(() => import('./ThreeHero'));

const TYPED_WORDS = ['ERP Systems', 'AI Platforms', 'SaaS Products', 'Web Apps', 'Automation'];

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);
  const btnPrimaryRef = useRef(null);
  const btnSecondaryRef = useRef(null);
  const badgeRef = useRef(null);
  const statsRef = useRef(null);

  const [typedIndex, setTypedIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const word = TYPED_WORDS[typedIndex];
    let timeout;
    if (!isDeleting) {
      if (displayText.length < word.length) {
        timeout = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 45);
      } else {
        setIsDeleting(false);
        setTypedIndex((i) => (i + 1) % TYPED_WORDS.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, typedIndex]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(badgeRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3 }
    )
    .fromTo(
      titleRef.current.querySelectorAll('.title-word'),
      { y: '110%', rotate: 3, opacity: 0 },
      { y: '0%', rotate: 0, opacity: 1, duration: 1.4, stagger: 0.12 },
      '-=0.6'
    )
    .fromTo(subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1 },
      '-=0.8'
    )
    .fromTo(btnRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9 },
      '-=0.7'
    )
    .fromTo(statsRef.current?.children ?? [],
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
      '-=0.5'
    );

    const initMagnetic = (btn) => {
      if (!btn || window.matchMedia('(pointer: coarse)').matches) return;
      const handleMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, { x: x * 0.3, y: y * 0.3, scale: 1.06, duration: 0.3, ease: 'power2.out' });
      };
      const handleLeave = () => gsap.to(btn, { x: 0, y: 0, scale: 1, duration: 0.7, ease: 'elastic.out(1.1, 0.4)' });
      btn.addEventListener('mousemove', handleMove);
      btn.addEventListener('mouseleave', handleLeave);
      return () => { btn.removeEventListener('mousemove', handleMove); btn.removeEventListener('mouseleave', handleLeave); };
    };

    const c1 = initMagnetic(btnPrimaryRef.current);
    const c2 = initMagnetic(btnSecondaryRef.current);
    return () => { c1?.(); c2?.(); };
  }, []);

  const heroStats = [
    { icon: <Zap size={14} />, label: '25+ Projects' },
    { icon: <Shield size={14} />, label: 'Enterprise Grade' },
    { icon: <Globe size={14} />, label: 'Global Ready' },
  ];

  return (
    <section className="hero" ref={heroRef} style={{ minHeight: '100vh' }}>
      <Suspense fallback={<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />}>
        <ThreeHero />
      </Suspense>
      <div className="grid-bg" />

      {/* Ambient glow pulse */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px', height: '900px',
          background: 'radial-gradient(circle, rgba(0,114,255,0.12) 0%, rgba(140,30,255,0.06) 50%, transparent 70%)',
          zIndex: 2, filter: 'blur(80px)', pointerEvents: 'none',
        }}
      />

      <div className="hero-content container" style={{ position: 'relative', zIndex: 10, paddingTop: '8rem', paddingBottom: '4rem' }}>

        {/* Launch Badge */}
        <div ref={badgeRef} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem', opacity: 0 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            padding: '0.5rem 1.4rem', borderRadius: '50px',
            border: '1px solid rgba(0,114,255,0.4)',
            background: 'rgba(0,114,255,0.08)',
            backdropFilter: 'blur(10px)',
            fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-blue)',
            letterSpacing: '0.05em',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)', display: 'inline-block', animation: 'pulse-dot 2s ease-in-out infinite' }} />
            NEXT-GEN SOFTWARE INNOVATION STUDIO
          </div>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="hero-title"
          style={{ fontSize: 'clamp(3.2rem, 9vw, 7.5rem)', lineHeight: 0.92, marginBottom: '1.5rem', overflow: 'hidden' }}
        >
          <span style={{ display: 'block', overflow: 'hidden', marginBottom: '0.3rem' }}>
            <span className="title-word syncopate" style={{ display: 'inline-block', opacity: 0 }}>PROZYNC</span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span className="title-word text-gradient" style={{ display: 'inline-block', opacity: 0 }}>INNOVATIONS</span>
          </span>
        </h1>

        {/* Typewriter subtitle */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
          <span style={{ color: 'var(--muted-text)', fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', fontWeight: 400 }}>We build</span>
          <span style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', fontWeight: 700,
            color: 'var(--accent-cyan)',
            borderRight: '2px solid var(--accent-cyan)',
            paddingRight: '4px',
            minWidth: '200px', textAlign: 'left',
            animation: 'blink-cursor 0.8s step-end infinite',
          }}>
            {displayText}
          </span>
        </div>

        {/* Description */}
        <p ref={subRef} style={{
          color: 'var(--muted-text)', fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
          maxWidth: '680px', margin: '0 auto 3rem', lineHeight: 1.8, opacity: 0
        }}>
          Prozync Innovations engineers <strong style={{ color: 'var(--text-color)' }}>intelligent ERP systems, AI-powered platforms, SaaS applications</strong> and futuristic digital experiences for forward-thinking businesses.
        </p>

        {/* CTA Buttons */}
        <div ref={btnRef} className="hero-btns" style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', opacity: 0 }}>
          <a ref={btnPrimaryRef} href="#smarterp" className="btn-premium btn-primary" style={{ padding: '1.1rem 2.8rem', fontSize: '1rem' }}>
            Explore SmartERP <ArrowRight size={18} />
          </a>
          <a ref={btnSecondaryRef} href="#work" className="btn-premium btn-secondary" style={{ padding: '1.1rem 2.8rem', fontSize: '1rem' }}>
            View Our Work
          </a>
        </div>

        {/* Hero Stats Row */}
        <div ref={statsRef} style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', marginTop: '4rem', flexWrap: 'wrap' }}>
          {heroStats.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted-text)', fontSize: '0.85rem', fontWeight: 500 }}>
              <span style={{ color: 'var(--accent-blue)' }}>{s.icon}</span>
              {s.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          color: 'var(--muted-text)', textDecoration: 'none', zIndex: 10, fontSize: '0.7rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
        }}
      >
        <span>Scroll</span>
        <ChevronDown size={18} strokeWidth={1.5} />
      </motion.a>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        @keyframes blink-cursor {
          0%, 100% { border-color: var(--accent-cyan); }
          50% { border-color: transparent; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
