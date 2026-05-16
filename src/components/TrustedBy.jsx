import React from 'react';

const logos = [
  'APPLE', 'STRIPE', 'VERCEL', 'TESLA', 'META', 'GOOGLE', 'MICROSOFT', 'ADOBE'
];

const TrustedBy = () => {
  return (
    <div style={{ background: 'var(--bg-color)', borderY: '1px solid var(--glass-border)', overflow: 'hidden' }}>
      <div className="marquee">
        <div className="marquee-content">
          {logos.concat(logos).map((logo, i) => (
            <span 
              key={i} 
              className="syncopate" 
              style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                opacity: 0.3,
                letterSpacing: '0.2em',
                color: 'var(--text-color)'
              }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
