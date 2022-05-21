import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import DonutsModel from "../models/Donuts";


const Donuts = () => {
    return (
      <Canvas>
        {/* <ambientLight /> */}
        <directionalLight />
        <spotLight
          intensity={0.9}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        
        <Suspense fallback={null}>
          <DonutsModel />
        </Suspense>

        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    );
}

export default Donuts
