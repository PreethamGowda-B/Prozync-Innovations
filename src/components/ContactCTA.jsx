import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            padding: '6rem 2rem',
            borderRadius: '40px',
            background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', filter: 'blur(50px)' }} />
          <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', filter: 'blur(50px)' }} />

          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#fff', marginBottom: '2rem', fontWeight: '900' }}>
            READY TO BUILD THE FUTURE?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Join the ranks of world-class companies building with Prozync Innovations.
          </p>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium"
            style={{ 
              background: '#fff', 
              color: '#000', 
              fontSize: '1.2rem', 
              padding: '1.5rem 3.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}
          >
            Start Your Project <ArrowRight size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
