"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function WaterAnimation({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a simpler water plane with subtle waves
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(20, 20, 64, 64);
    const positions = geo.attributes.position.array as Float32Array;
    
    // Add subtle wave displacement
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      positions[i + 2] = Math.sin(x * 0.5) * Math.cos(y * 0.5) * 0.1;
    }
    
    return geo;
  }, []);

  // Simple water material with subtle color and transparency
  const waterMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color(0.1, 0.2, 0.4),
      transparent: true,
      opacity: 0.3,
      wireframe: false,
    });
  }, []);

  // Animation loop for subtle wave movement
  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();
    
    if (meshRef.current) {
      // Subtle rotation for visual interest
      meshRef.current.rotation.z = Math.sin(time * 0.2) * 0.02;
      
      // Mouse interaction (reduced sensitivity)
      meshRef.current.rotation.x = mousePosition.y * 0.00005;
      meshRef.current.rotation.y = mousePosition.x * 0.00005;
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[0, -2, 0]}
    >
      <primitive object={geometry} />
      <primitive object={waterMaterial} />
    </mesh>
  );
}