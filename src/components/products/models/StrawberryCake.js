import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/strawberry_cake.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-1.99, 6.51, -0.62]} rotation={[3.13, 0, -0.04]}>
            <group position={[-17.86, 4.9, -4.1]}>
              <mesh geometry={nodes['default001_Material_#37_0'].geometry} material={materials.Material_37} />
              <mesh geometry={nodes['default001_Material_#37_0_1'].geometry} material={materials.Material_37} />
              <mesh geometry={nodes['default001_Material_#37_0_2'].geometry} material={materials.Material_37} />
            </group>
          </group>
          <group position={[-1.49, -0.61, -0.56]} rotation={[-Math.PI / 2, 0, 0]} scale={0.93}>
            <mesh geometry={nodes.Cone001__0.geometry} material={materials.Cone001__0} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/strawberry_cake.gltf");
