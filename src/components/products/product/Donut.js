import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DonutModel from "../models/Donut";

const Donut = () => {
  return (
    <Canvas>
      <Suspense fallback={null}></Suspense>
      <ambientLight />

      <spotLight
        intensity={0.9}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <DonutModel />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

export default Donut;
