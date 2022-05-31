
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/ice_cream_chocklate.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.005']} position={[0.02, -0.07, 0.16]} rotation={[-3, -0.4, -3.13]} scale={[0.34, 1.53, 0.69]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.004']} position={[0, -0.07, 0.13]} rotation={[-3, -0.4, -3.13]} scale={[0.4, 1.81, 0.81]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.003']} position={[-0.02, -2.39, -0.21]} rotation={[-3, -0.4, 1.58]} scale={[0.81, 0.81, 0.11]} />
      <spotLight intensity={1} angle={Math.PI / 10} decay={2} position={[5, 10, 7.5]} />
      <pointLight intensity={1} decay={2} position={[-0.55, 2.89, -1.42]} />
    </group>
  )
}

useGLTF.preload('/ice_cream_chocklate.gltf')
