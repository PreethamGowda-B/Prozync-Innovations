import React, { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Torus, Ring, MeshWobbleMaterial } from '@react-three/drei';

const CoreSphere = () => {
  const meshRef = useRef();
  const [isLight, setIsLight] = useState(document.documentElement.getAttribute('data-theme') === 'light');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  useFrame((state) => {
    const { clock, mouse } = state;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.12;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.09;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 0.5, 0.08);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 0.5, 0.08);
  });

  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1, 128, 256]} scale={2.0}>
        <MeshDistortMaterial
          color={isLight ? '#1a66ff' : '#00aaff'}
          attach="material"
          distort={0.38}
          speed={2.2}
          roughness={isLight ? 0.2 : 0.0}
          metalness={isLight ? 0.6 : 1.0}
          opacity={isLight ? 0.8 : 0.92}
          transparent
          envMapIntensity={1.5}
        />
      </Sphere>
    </Float>
  );
};

const OrbitRing = ({ radius, speed, tilt, color }) => {
  const groupRef = useRef();

  useFrame((state) => {
    groupRef.current.rotation.z = state.clock.getElapsedTime() * speed;
  });

  return (
    <group ref={groupRef} rotation={[tilt, 0, 0]}>
      <Torus args={[radius, 0.015, 16, 120]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} transparent opacity={0.6} />
      </Torus>
      {/* Orbiting dot */}
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
      </mesh>
    </group>
  );
};

const FloatingCrystals = () => {
  const crystals = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 4,
      ],
      scale: Math.random() * 0.25 + 0.08,
      speed: Math.random() * 0.5 + 0.1,
      rotSpeed: (Math.random() - 0.5) * 0.02,
    }));
  }, []);

  const refs = useRef(crystals.map(() => React.createRef()));

  useFrame((state) => {
    refs.current.forEach((r, i) => {
      if (!r.current) return;
      r.current.rotation.x += crystals[i].rotSpeed;
      r.current.rotation.y += crystals[i].rotSpeed * 0.7;
      r.current.position.y += Math.sin(state.clock.getElapsedTime() * crystals[i].speed + i) * 0.003;
    });
  });

  return (
    <>
      {crystals.map((c, i) => (
        <mesh key={i} ref={refs.current[i]} position={c.position} scale={c.scale}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#0072ff' : '#8c1eff'}
            emissive={i % 2 === 0 ? '#0072ff' : '#8c1eff'}
            emissiveIntensity={0.5}
            roughness={0.05}
            metalness={0.9}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </>
  );
};

const FloatingParticles = ({ count = 500 }) => {
  const pointsRef = useRef();
  const [isLight] = useState(document.documentElement.getAttribute('data-theme') === 'light');

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorA = new THREE.Color('#0072ff');
    const colorB = new THREE.Color('#8c1eff');
    const colorC = new THREE.Color('#00f2fe');

    for (let i = 0; i < count; i++) {
      // Sphere distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 6;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const t = Math.random();
      const color = t < 0.33 ? colorA : t < 0.66 ? colorB : colorC;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    const { clock, mouse } = state;
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.025;
    pointsRef.current.rotation.x = clock.getElapsedTime() * 0.01;
    pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, mouse.x * 0.3, 0.04);
    pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, mouse.y * 0.3, 0.04);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        vertexColors
        sizeAttenuation
        transparent
        opacity={isLight ? 0.35 : 0.6}
        depthWrite={false}
      />
    </points>
  );
};

const ThreeHero = () => {
  const [isLight, setIsLight] = useState(document.documentElement.getAttribute('data-theme') === 'light');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.getAttribute('data-theme') === 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 65 }} dpr={[1, 1.5]}>
        <ambientLight intensity={isLight ? 1.2 : 0.3} />
        <pointLight position={[10, 10, 10]} intensity={isLight ? 1.5 : 2.5} color="#0072ff" />
        <pointLight position={[-10, -5, -10]} intensity={isLight ? 0.8 : 1.5} color="#8c1eff" />
        <spotLight position={[0, 15, 5]} angle={0.25} penumbra={1} intensity={isLight ? 1 : 2} color="#00f2fe" />

        <CoreSphere />
        <OrbitRing radius={2.8} speed={0.4} tilt={Math.PI / 4} color="#0072ff" />
        <OrbitRing radius={3.5} speed={-0.25} tilt={Math.PI / 6} color="#8c1eff" />
        <OrbitRing radius={4.2} speed={0.18} tilt={Math.PI / 3} color="#00f2fe" />
        <FloatingCrystals />
        <FloatingParticles count={600} />
      </Canvas>
    </div>
  );
};

export default ThreeHero;
