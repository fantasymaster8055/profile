import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, scale, rotationSpeed }: {
  position: [number, number, number];
  color: string;
  scale: number;
  rotationSpeed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed * 0.01;
      meshRef.current.rotation.y += rotationSpeed * 0.015;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function TorusKnot({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={0.4}>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <meshStandardMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 100;
  const particlesRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#60a5fa"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function SceneContent() {
  const shapes = useMemo(() => [
    { position: [-3, 2, -2] as [number, number, number], color: '#60a5fa', scale: 0.5, rotationSpeed: 1 },
    { position: [3, -1, -3] as [number, number, number], color: '#a78bfa', scale: 0.4, rotationSpeed: 1.2 },
    { position: [-2, -2, -1] as [number, number, number], color: '#34d399', scale: 0.35, rotationSpeed: 0.8 },
    { position: [2, 2, -2] as [number, number, number], color: '#f472b6', scale: 0.45, rotationSpeed: 1.5 },
    { position: [0, -3, -4] as [number, number, number], color: '#fbbf24', scale: 0.3, rotationSpeed: 0.9 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#8b5cf6" />
      
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
      
      <TorusKnot position={[0, 0, -5]} />
      <Particles />
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0f172a']} />
        <SceneContent />
      </Canvas>
    </div>
  );
}
