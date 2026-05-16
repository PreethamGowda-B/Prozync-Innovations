import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import SmartERP from './components/SmartERP';
import AISolutions from './components/AISolutions';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import TrustedBy from './components/TrustedBy';
import ContactCTA from './components/ContactCTA';
import GithubShowcase from './components/GithubShowcase';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#030303',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ position: 'relative', width: '300px', height: '2px', background: 'rgba(255,255,255,0.05)', marginBottom: '2rem' }}>
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            background: 'var(--accent-blue)',
            width: `${percent}%`,
            boxShadow: '0 0 20px var(--accent-blue)'
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
      >
        <h1 className="syncopate" style={{ fontSize: '1.2rem', letterSpacing: '0.8em', color: '#fff', fontWeight: '900' }}>
          PROZYNC
        </h1>
        <div style={{ fontSize: '0.7rem', color: 'var(--muted-text)', fontFamily: 'monospace' }}>
          INITIALIZING CORE SYSTEM... {percent}%
        </div>
      </motion.div>
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <SmoothScroll />
          <Navbar />
          <main>
            <Hero />
            <TrustedBy />
            <About />
            <Services />
            <Portfolio />
            <GithubShowcase />
            <SmartERP />
            <AISolutions />
            <Stats />
            <Contact />
            <ContactCTA />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
