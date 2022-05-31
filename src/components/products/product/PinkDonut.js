import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PinkDonutModel from "../models/Pink_donut";

const PinkDonut = () => {
  return (
    <Canvas>
      <ambientLight />
      <spotLight
        intensity={0.9}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      
      <Suspense fallback={null}>
        <PinkDonutModel />
      </Suspense>

      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

export default PinkDonut;
