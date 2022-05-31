import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/donuts.gltf')
  return <group ref={group} {...props} dispose={null}></group>
}

useGLTF.preload('/donuts.gltf')
