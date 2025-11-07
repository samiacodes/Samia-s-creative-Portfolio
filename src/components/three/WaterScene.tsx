"use client";

import { Canvas } from "@react-three/fiber";
import { WaterAnimation } from "./WaterAnimation";

export function WaterScene({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 3, 5], fov: 50 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <WaterAnimation mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}