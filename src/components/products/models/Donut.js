import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Donut.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={40}>
      <mesh
        geometry={nodes.Donat.geometry}
        material={materials["Material.003"]}
        position={[0, 0.02, 0]}
        rotation={[Math.PI, -0.72, Math.PI]}
      >
        <mesh
          geometry={nodes.Es.geometry}
          material={materials["Material.002"]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Donut.gltf");
