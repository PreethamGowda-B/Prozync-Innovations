import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch-based or has low capability pointer
    const checkTouch = () => {
      const hasTouch = 
        window.matchMedia('(pointer: coarse)').matches || 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0;
      setIsTouchDevice(hasTouch);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    const moveCursor = (e) => {
      if (hasTouchDevice()) return;
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
      });
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5
      });
    };

    const hasTouchDevice = () => {
      return window.matchMedia('(pointer: coarse)').matches || 
             'ontouchstart' in window || 
             navigator.maxTouchPoints > 0;
    };

    if (!hasTouchDevice()) {
      window.addEventListener('mousemove', moveCursor);
    }

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--accent-blue)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference'
        }}
      />
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          width: '30px',
          height: '30px',
          border: '1px solid var(--accent-blue)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: 'difference'
        }}
      />
    </>
  );
};

export default CustomCursor;
