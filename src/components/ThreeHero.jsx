import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';

const AnimatedSphere = () => {
  const meshRef = useRef();
  const [isLight, setIsLight] = React.useState(document.documentElement.getAttribute('data-theme') === 'light');

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  useFrame((state) => {
    const { clock, mouse } = state;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    
    // Smooth mouse follow
    meshRef.current.position.x = (mouse.x * 0.5);
    meshRef.current.position.y = (mouse.y * 0.5);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color={isLight ? "#0066ff" : "#0070f3"}
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={isLight ? 0.2 : 0}
          metalness={isLight ? 0.8 : 1}
          opacity={isLight ? 0.9 : 1}
          transparent
        />
      </Sphere>
    </Float>
  );
};

const ThreeHero = () => {
  const [isLight, setIsLight] = React.useState(document.documentElement.getAttribute('data-theme') === 'light');

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={isLight ? 1.5 : 0.5} />
        <pointLight position={[10, 10, 10]} intensity={isLight ? 1 : 1.5} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={isLight ? 1 : 1.5} />
        <AnimatedSphere />
        {!isLight && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />}
      </Canvas>
    </div>
  );
};

export default ThreeHero;
