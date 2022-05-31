import React, { Suspense } from "react";
import BadayCakeModel from "../models/Baday_cake";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as dat from "dat.gui";

const Cake = () => {
  const gui = new dat.GUI();
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
        <BadayCakeModel />
      </Suspense>

      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

export default Cake;
