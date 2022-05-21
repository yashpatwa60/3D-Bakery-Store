import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/pink_donut.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={40}>
      <mesh geometry={nodes.Donut.geometry} material={materials['Material.003']} position={[0, 0.03, 0]}>
        <mesh geometry={nodes.Icing.geometry} material={materials['Material.002']} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/pink_donut.gltf')
