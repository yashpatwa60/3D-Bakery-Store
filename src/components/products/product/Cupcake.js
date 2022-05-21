import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CupcakeModel from "../models/Cupcake";

const Cupcake = ({ show_cherry}) => {
  return (
    <Canvas>
      <ambientLight intensity={0.8} />
      <spotLight
        intensity={0.9}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />

      <Suspense fallback={null}>
        <CupcakeModel show_cherry={show_cherry} />
      </Suspense>

      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
};

export default Cupcake;
