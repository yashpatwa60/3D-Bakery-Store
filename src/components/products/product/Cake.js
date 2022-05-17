import React, { Suspense } from 'react'
import BadayCakeModel from '../models/Baday_cake'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Cake = () => {
    return (
      <Canvas>
        <Suspense fallback={null}></Suspense>
        {/* <ambientLight intensity={0.2} /> */}
        <directionalLight />

        <spotLight
          intensity={0.9}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <BadayCakeModel />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    );
}

export default Cake
