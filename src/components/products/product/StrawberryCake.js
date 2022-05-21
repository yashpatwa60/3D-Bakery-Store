import React, { Suspense } from "react";
import StrawberryCakeModel from "../models/StrawberryCake";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const StrawberryCake = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight />
      <spotLight
        intensity={0.9}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      
      <Suspense fallback={null}>
        <StrawberryCakeModel />
      </Suspense>

      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

export default StrawberryCake;
