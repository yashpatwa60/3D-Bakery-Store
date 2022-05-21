import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/baday_cake.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.07, 0, 0.17]} rotation={[Math.PI, -0.75, Math.PI]} scale={[1, 0.32, 1]}>
        <mesh geometry={nodes.Cylinder003_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cylinder003_2.geometry} material={materials['Material.005']} />
      </group>
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.002']} position={[-0.07, 0, 0.17]} rotation={[Math.PI, -0.75, Math.PI]} scale={[1.03, 0.33, 1.03]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.002']} position={[-0.07, 0.66, 0.17]} rotation={[0, 0.33, 0]} scale={[0.88, 0.28, 0.88]} />
      <mesh geometry={nodes.Cylinder003.geometry} material={materials['Material.002']} position={[-0.07, 1.34, 0.17]} rotation={[0, -1.25, 0]} scale={[0.68, 0.22, 0.68]} />
      <group position={[-0.07, 1.74, 0.17]} rotation={[Math.PI, -0.75, Math.PI]} scale={[0.02, 0.19, 0.02]}>
        <mesh geometry={nodes.Cylinder008_1.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.Cylinder008_2.geometry} material={materials['Material.014']} />
      </group>
      <group position={[0.22, 1.74, -0.09]} rotation={[Math.PI, -0.75, Math.PI]} scale={[0.02, 0.19, 0.02]}>
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cylinder001_2.geometry} material={materials['Material.006']} />
      </group>
      <group position={[0.22, 1.74, 0.21]} rotation={[Math.PI, -0.75, Math.PI]} scale={[0.02, 0.19, 0.02]}>
        <mesh geometry={nodes.Cylinder002_1.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Cylinder002_2.geometry} material={materials['Material.012']} />
      </group>
      <group position={[-0.07, 1.74, 0.49]} rotation={[Math.PI, -0.75, Math.PI]} scale={[0.02, 0.19, 0.02]}>
        <mesh geometry={nodes.Cylinder005_1.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Cylinder005_2.geometry} material={materials['Material.010']} />
      </group>
      <group position={[-0.38, 1.74, 0.17]} rotation={[Math.PI, -0.75, Math.PI]} scale={[0.02, 0.19, 0.02]}>
        <mesh geometry={nodes.Cylinder009_1.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Cylinder009_2.geometry} material={materials['Material.012']} />
      </group>
      <group position={[-0.32, 1.74, -0.11]} rotation={[Math.PI, -0.75, Math.PI]} scale={[0.02, 0.19, 0.02]}>
        <mesh geometry={nodes.Cylinder010_1.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Cylinder010_2.geometry} material={materials['Material.008']} />
      </group>
      <group position={[-0.04, 1.74, -0.12]} rotation={[Math.PI, -0.75, Math.PI]} scale={[0.02, 0.19, 0.02]}>
        <mesh geometry={nodes.Cylinder011_1.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Cylinder011_2.geometry} material={materials['Material.010']} />
      </group>
      <group position={[0.22, 1.74, 0.45]} rotation={[Math.PI, -0.75, Math.PI]} scale={[0.02, 0.19, 0.02]}>
        <mesh geometry={nodes.Cylinder012_1.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Cylinder012_2.geometry} material={materials['Material.008']} />
      </group>
      <group position={[-0.36, 1.74, 0.45]} rotation={[Math.PI, -0.75, Math.PI]} scale={[0.02, 0.19, 0.02]}>
        <mesh geometry={nodes.Cylinder013.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cylinder013_1.geometry} material={materials['Material.006']} />
      </group>
      <mesh geometry={nodes.Cylinder015.geometry} material={materials.Material} position={[0.02, 0.33, 0.17]} rotation={[1.57, 0, -0.77]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder016.geometry} material={materials.Material} position={[0.43, 0.33, 0.69]} rotation={[1.59, -0.02, 0.28]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder017.geometry} material={materials.Material} position={[0.34, 0.33, 0.69]} rotation={[1.59, -0.01, 0.78]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder018.geometry} material={materials.Material} position={[0.42, 0.33, 0.52]} rotation={[1.58, -0.02, -0.18]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder019.geometry} material={materials.Material} position={[0.48, 0.33, 0.51]} rotation={[1.58, -0.02, 1.33]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder020.geometry} material={materials.Material} position={[0.58, 0.33, 0.48]} rotation={[1.59, -0.03, -0.39]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder021.geometry} material={materials.Material} position={[0.48, 0.33, 0.42]} rotation={[1.58, -0.02, -0.76]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder022.geometry} material={materials.Material} position={[0.53, 0.33, 0.4]} rotation={[1.58, -0.02, -0.71]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder023.geometry} material={materials.Material} position={[0.63, 0.33, 0.35]} rotation={[1.58, -0.03, -1.52]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder024.geometry} material={materials.Material} position={[0.41, 0.33, 0.05]} rotation={[1.57, -0.01, -1.8]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder025.geometry} material={materials.Material} position={[0.52, 0.33, -0.02]} rotation={[1.57, -0.02, -0.56]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder026.geometry} material={materials.Material} position={[0.57, 0.33, -0.01]} rotation={[1.57, -0.02, -0.76]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder027.geometry} material={materials.Material} position={[0.42, 0.33, 0.04]} rotation={[1.57, -0.01, 0.48]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder028.geometry} material={materials.Material} position={[0.54, 0.33, -0.21]} rotation={[1.55, -0.03, -2.32]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder029.geometry} material={materials.Material} position={[0.42, 0.33, -0.15]} rotation={[1.56, -0.01, -1.79]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder030.geometry} material={materials.Material} position={[0.38, 0.33, -0.05]} rotation={[1.57, -0.01, -1.56]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder031.geometry} material={materials.Material} position={[0.4, 0.33, -0.23]} rotation={[1.56, -0.02, -0.36]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder032.geometry} material={materials.Material} position={[0.37, 0.33, -0.4]} rotation={[1.55, -0.02, -1.53]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder033.geometry} material={materials.Material} position={[0.18, 0.33, -0.38]} rotation={[1.55, -0.01, -2.24]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder034.geometry} material={materials.Material} position={[-0.05, 0.33, -0.55]} rotation={[1.54, 0, -2.47]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder035.geometry} material={materials.Material} position={[-0.06, 0.33, -0.42]} rotation={[1.55, 0, -2.36]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder036.geometry} material={materials.Material} position={[0, 0.33, -0.33]} rotation={[1.56, 0, -1.33]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder037.geometry} material={materials.Material} position={[-0.14, 0.33, -0.44]} rotation={[1.55, 0, -1.87]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder038.geometry} material={materials.Material} position={[-0.24, 0.33, -0.47]} rotation={[1.55, 0.01, -3.14]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder039.geometry} material={materials.Material} position={[-0.36, 0.33, -0.23]} rotation={[1.56, 0.01, -1.95]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder040.geometry} material={materials.Material} position={[-0.67, 0.33, -0.06]} rotation={[1.56, 0.02, -1.9]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder041.geometry} material={materials.Material} position={[-0.76, 0.33, -0.01]} rotation={[1.56, 0.03, 2.6]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder042.geometry} material={materials.Material} position={[-0.65, 0.33, 0.03]} rotation={[1.57, 0.02, -2.24]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder043.geometry} material={materials.Material} position={[-0.66, 0.33, 0]} rotation={[1.56, 0.02, 1.72]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder044.geometry} material={materials.Material} position={[-0.78, 0.33, 0.13]} rotation={[1.56, 0.03, 1.67]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder045.geometry} material={materials.Material} position={[-0.56, 0.33, 0.11]} rotation={[1.57, 0.01, 2.64]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder046.geometry} material={materials.Material} position={[-0.77, 0.33, 0.29]} rotation={[1.58, 0.03, 2.67]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder047.geometry} material={materials.Material} position={[-0.73, 0.33, 0.22]} rotation={[1.57, 0.02, 1.5]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder048.geometry} material={materials.Material} position={[-0.51, 0.33, 0.58]} rotation={[1.58, 0.01, 2.7]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder049.geometry} material={materials.Material} position={[-0.36, 0.33, 0.82]} rotation={[1.6, 0.01, 0.33]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder050.geometry} material={materials.Material} position={[-0.07, 0.33, 0.75]} rotation={[1.59, 0, 1.75]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder051.geometry} material={materials.Material} position={[-0.13, 0.33, 0.66]} rotation={[1.58, 0, 2.71]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder052.geometry} material={materials.Material} position={[0.05, 0.33, 0.87]} rotation={[1.6, -0.01, 1.92]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder053.geometry} material={materials.Material} position={[0.04, 0.33, 0.74]} rotation={[1.59, 0, 1.65]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder054.geometry} material={materials.Material} position={[0.14, 0.33, 0.73]} rotation={[1.59, -0.01, 2.05]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder055.geometry} material={materials.Material} position={[0.19, 0.33, 0.84]} rotation={[1.6, -0.01, -0.83]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder056.geometry} material={materials.Material} position={[0.56, 0.16, -0.64]} rotation={[0, -0.66, -1.79]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder057.geometry} material={materials.Material} position={[-0.8, 0.14, -0.54]} rotation={[0, 0.8, -1.86]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder058.geometry} material={materials.Material} position={[0.53, 0.33, 0.9]} rotation={[2.02, -0.33, 0.15]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder059.geometry} material={materials.Material} position={[0.5, 0.33, 0.9]} rotation={[1.84, -0.2, 0.79]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder060.geometry} material={materials.Material} position={[0.41, 0.33, 0.73]} rotation={[1.6, -0.02, 1.87]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder061.geometry} material={materials.Material} position={[0.4, 0.33, 0.81]} rotation={[1.62, -0.04, 1.18]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder062.geometry} material={materials.Material} position={[0.4, 0.33, 0.91]} rotation={[1.68, -0.07, 0.08]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder063.geometry} material={materials.Material} position={[0.4, 0.33, 1.02]} rotation={[2.62, -0.44, 2.02]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder064.geometry} material={materials.Material} position={[0.31, 0.33, 0.88]} rotation={[1.63, -0.02, 1.97]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder065.geometry} material={materials.Material} position={[0.23, 0.33, 0.85]} rotation={[1.6, -0.02, -1.01]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder066.geometry} material={materials.Material} position={[0.24, 0.33, 0.81]} rotation={[1.6, -0.01, 1.77]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder067.geometry} material={materials.Material} position={[0.24, 0.33, 0.93]} rotation={[1.63, -0.03, 1.69]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder068.geometry} material={materials.Material} position={[0.25, 0.33, 0.98]} rotation={[1.69, -0.05, 1.14]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder069.geometry} material={materials.Material} position={[0.29, 0.33, 1.02]} rotation={[1.83, -0.12, 0.93]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder070.geometry} material={materials.Material} position={[0.12, 0.33, 0.94]} rotation={[1.63, -0.02, 2.07]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder071.geometry} material={materials.Material} position={[0.03, 0.33, 0.92]} rotation={[1.61, 0, 1.82]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder072.geometry} material={materials.Material} position={[0.02, 0.33, 0.9]} rotation={[1.61, 0, 0.81]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder073.geometry} material={materials.Material} position={[-0.08, 0.33, 0.99]} rotation={[1.64, -0.01, 1.06]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder074.geometry} material={materials.Material} position={[-0.09, 0.33, 1.04]} rotation={[1.7, 0, 0.02]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder075.geometry} material={materials.Material} position={[-0.06, 0.33, 1.03]} rotation={[1.67, -0.02, -0.12]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder076.geometry} material={materials.Material} position={[-0.21, 0.33, 1.1]} rotation={[2.12, 0.08, 1.54]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder077.geometry} material={materials.Material} position={[-0.28, 0.33, 1.11]} rotation={[2.35, 0.16, 0.29]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder078.geometry} material={materials.Material} position={[-0.11, 0.33, 1.13]} rotation={[2.31, 0.03, 2.12]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder079.geometry} material={materials.Material} position={[-0.19, 0.33, 0.96]} rotation={[1.63, 0, 1.86]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder080.geometry} material={materials.Material} position={[-0.24, 0.33, 0.94]} rotation={[1.62, 0.01, 1.12]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder081.geometry} material={materials.Material} position={[-0.39, 0.33, 1.09]} rotation={[2.65, 0.3, 2.56]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder082.geometry} material={materials.Material} position={[-0.33, 0.33, 1.02]} rotation={[1.75, 0.06, -0.03]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder083.geometry} material={materials.Material} position={[-0.32, 0.33, 1.06]} rotation={[1.9, 0.1, 2.56]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder084.geometry} material={materials.Material} position={[-0.27, 0.33, 1.01]} rotation={[1.68, 0.03, 0.43]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder085.geometry} material={materials.Material} position={[-0.3, 0.33, 0.93]} rotation={[1.63, 0.03, 0.16]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder086.geometry} material={materials.Material} position={[-0.34, 0.33, 0.86]} rotation={[1.61, 0.01, 2.43]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder087.geometry} material={materials.Material} position={[-0.3, 0.33, 0.84]} rotation={[1.6, 0.01, 1.23]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder088.geometry} material={materials.Material} position={[-0.54, 0.31, 1.04]} rotation={[3.04, 0.5, 2.16]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder089.geometry} material={materials.Material} position={[-0.64, 0.31, 0.99]} rotation={[3.07, 0.61, -0.05]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder090.geometry} material={materials.Material} position={[-0.46, 0.33, 0.93]} rotation={[1.65, 0.06, 0.3]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder091.geometry} material={materials.Material} position={[-0.48, 0.33, 1.02]} rotation={[2.09, 0.24, 1.87]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder092.geometry} material={materials.Material} position={[-0.52, 0.33, 0.81]} rotation={[1.61, 0.03, 1.89]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder093.geometry} material={materials.Material} position={[-0.65, 0.33, 0.89]} rotation={[1.79, 0.19, 2.8]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder094.geometry} material={materials.Material} position={[-0.67, 0.33, 0.83]} rotation={[1.71, 0.12, 0.72]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder095.geometry} material={materials.Material} position={[-0.66, 0.33, 0.79]} rotation={[1.66, 0.07, 3.11]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder096.geometry} material={materials.Material} position={[-0.6, 0.33, 0.83]} rotation={[1.64, 0.07, 2.03]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder097.geometry} material={materials.Material} position={[-0.64, 0.33, 0.86]} rotation={[1.71, 0.13, 1.55]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder098.geometry} material={materials.Material} position={[-0.6, 0.33, 0.85]} rotation={[1.66, 0.08, 0.68]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder099.geometry} material={materials.Material} position={[-0.54, 0.33, 0.7]} rotation={[1.59, 0.02, 1.99]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder100.geometry} material={materials.Material} position={[-0.74, 0.33, 0.83]} rotation={[1.99, 0.39, 1.78]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder101.geometry} material={materials.Material} position={[-0.8, 0.33, 0.74]} rotation={[1.78, 0.26, 2.98]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder102.geometry} material={materials.Material} position={[-0.74, 0.33, 0.68]} rotation={[1.63, 0.07, 1.61]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder103.geometry} material={materials.Material} position={[-0.76, 0.33, 0.73]} rotation={[1.68, 0.15, 1.11]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder104.geometry} material={materials.Material} position={[-0.77, 0.33, 0.78]} rotation={[1.79, 0.27, -3.14]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder105.geometry} material={materials.Material} position={[-0.7, 0.33, 0.76]} rotation={[1.64, 0.08, 2.72]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder106.geometry} material={materials.Material} position={[-0.74, 0.33, 0.77]} rotation={[1.7, 0.16, 0.66]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder107.geometry} material={materials.Material} position={[-0.64, 0.33, 0.62]} rotation={[1.59, 0.03, -3.09]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder108.geometry} material={materials.Material} position={[-0.63, 0.33, 0.59]} rotation={[1.59, 0.02, 1.52]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder109.geometry} material={materials.Material} position={[-0.93, 0.3, 0.68]} rotation={[3.05, 1.04, 2.6]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder110.geometry} material={materials.Material} position={[-0.94, 0.33, 0.61]} rotation={[2.34, 0.94, 2.29]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder111.geometry} material={materials.Material} position={[-0.83, 0.33, 0.54]} rotation={[1.61, 0.08, 2.38]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder112.geometry} material={materials.Material} position={[-0.9, 0.33, 0.51]} rotation={[1.66, 0.18, 1.6]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder113.geometry} material={materials.Material} position={[-0.94, 0.33, 0.5]} rotation={[1.71, 0.33, -2.88]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder114.geometry} material={materials.Material} position={[-0.88, 0.33, 0.38]} rotation={[1.59, 0.08, 0.98]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder115.geometry} material={materials.Material} position={[-0.92, 0.33, 0.42]} rotation={[1.62, 0.18, -2.83]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder116.geometry} material={materials.Material} position={[-1.01, 0.33, 0.33]} rotation={[1.74, 0.78, 2.23]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder117.geometry} material={materials.Material} position={[-0.88, 0.33, 0.47]} rotation={[1.61, 0.1, 0.86]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder118.geometry} material={materials.Material} position={[-0.87, 0.33, 0.32]} rotation={[1.59, 0.07, 1.06]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder119.geometry} material={materials.Material} position={[-0.93, 0.33, 0.32]} rotation={[1.6, 0.12, -2.5]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder120.geometry} material={materials.Material} position={[-0.91, 0.33, 0.22]} rotation={[1.58, 0.09, -3.05]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder121.geometry} material={materials.Material} position={[-0.88, 0.33, 0.29]} rotation={[1.58, 0.07, -2.33]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder122.geometry} material={materials.Material} position={[-1.04, 0.33, 0.1]} rotation={[1.41, 1.13, 1.61]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder123.geometry} material={materials.Material} position={[-1.03, 0.33, 0.03]} rotation={[1.3, 1.09, -2.85]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder124.geometry} material={materials.Material} position={[-1.04, 0.31, -0.03]} rotation={[0.41, 1.35, -1.43]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder125.geometry} material={materials.Material} position={[-0.99, 0.33, 0.05]} rotation={[1.53, 0.33, 2.19]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder126.geometry} material={materials.Material} position={[-0.99, 0.33, 0.09]} rotation={[1.53, 0.28, -2.3]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder127.geometry} material={materials.Material} position={[-0.95, 0.33, 0.03]} rotation={[1.55, 0.19, -2.7]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder128.geometry} material={materials.Material} position={[-0.91, 0.33, 0.06]} rotation={[1.55, 0.11, -3.02]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder129.geometry} material={materials.Material} position={[-0.93, 0.33, 0.13]} rotation={[1.56, 0.11, 2.88]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder130.geometry} material={materials.Material} position={[-0.86, 0.33, 0.09]} rotation={[1.56, 0.06, 3.08]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder131.geometry} material={materials.Material} position={[-0.79, 0.33, 0.08]} rotation={[1.56, 0.04, 2.28]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder132.geometry} material={materials.Material} position={[-0.77, 0.33, 0.07]} rotation={[1.57, 0.03, 1.37]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder133.geometry} material={materials.Material} position={[-1.03, 0.28, -0.13]} rotation={[0.08, 1.27, -1.9]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder134.geometry} material={materials.Material} position={[-1.01, 0.29, -0.19]} rotation={[0.09, 1.2, -0.81]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder135.geometry} material={materials.Material} position={[-1.02, 0.32, -0.11]} rotation={[0.43, 1.26, 3.08]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder136.geometry} material={materials.Material} position={[-0.91, 0.33, -0.14]} rotation={[1.51, 0.18, -3.08]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder137.geometry} material={materials.Material} position={[-0.88, 0.33, -0.1]} rotation={[1.53, 0.1, -2]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder138.geometry} material={materials.Material} position={[-0.91, 0.33, -0.03]} rotation={[1.54, 0.11, -2.26]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder139.geometry} material={materials.Material} position={[-0.83, 0.33, -0.07]} rotation={[1.54, 0.06, 2.49]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder140.geometry} material={materials.Material} position={[-0.76, 0.33, -0.11]} rotation={[1.56, 0.04, -2.09]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder141.geometry} material={materials.Material} position={[-0.73, 0.33, -0.06]} rotation={[1.56, 0.03, 2.77]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder142.geometry} material={materials.Material} position={[-0.88, 0.33, -0.22]} rotation={[1.47, 0.18, -2.32]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder143.geometry} material={materials.Material} position={[-0.7, 0.33, -0.19]} rotation={[1.55, 0.03, 2.25]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder144.geometry} material={materials.Material} position={[-0.68, 0.33, -0.19]} rotation={[1.56, 0.03, -2.74]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder145.geometry} material={materials.Material} position={[-0.81, 0.33, -0.34]} rotation={[1.46, 0.17, -2.49]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder146.geometry} material={materials.Material} position={[-0.78, 0.33, -0.33]} rotation={[1.5, 0.11, 3.06]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder147.geometry} material={materials.Material} position={[-0.82, 0.27, -0.5]} rotation={[0.03, 0.84, -2.93]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder148.geometry} material={materials.Material} position={[-0.79, 0.32, -0.5]} rotation={[0.25, 0.81, -2.08]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder149.geometry} material={materials.Material} position={[-0.61, 0.33, -0.4]} rotation={[1.53, 0.04, -1.94]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder150.geometry} material={materials.Material} position={[-0.75, 0.27, -0.57]} rotation={[0.03, 0.74, -1.48]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder151.geometry} material={materials.Material} position={[-0.73, 0.31, -0.57]} rotation={[0.12, 0.73, -2.54]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder152.geometry} material={materials.Material} position={[-0.59, 0.33, -0.65]} rotation={[0.5, 0.51, 2.71]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder153.geometry} material={materials.Material} position={[-0.62, 0.33, -0.57]} rotation={[1.35, 0.17, 2.5]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder154.geometry} material={materials.Material} position={[-0.62, 0.33, -0.59]} rotation={[1.11, 0.32, 2.53]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder155.geometry} material={materials.Material} position={[-0.64, 0.33, -0.56]} rotation={[1.31, 0.2, -1.72]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder156.geometry} material={materials.Material} position={[-0.65, 0.33, -0.47]} rotation={[1.49, 0.07, -1.59]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder157.geometry} material={materials.Material} position={[-0.62, 0.33, -0.44]} rotation={[1.51, 0.04, 3.13]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder158.geometry} material={materials.Material} position={[-0.57, 0.33, -0.4]} rotation={[1.53, 0.02, 2.92]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder159.geometry} material={materials.Material} position={[-0.48, 0.33, -0.45]} rotation={[1.54, 0.03, -3.03]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder160.geometry} material={materials.Material} position={[-0.51, 0.33, -0.67]} rotation={[1.07, 0.24, 3.02]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder161.geometry} material={materials.Material} position={[-0.45, 0.33, -0.59]} rotation={[1.47, 0.04, -2.77]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder162.geometry} material={materials.Material} position={[-0.57, 0.33, -0.65]} rotation={[0.91, 0.36, -2.87]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder163.geometry} material={materials.Material} position={[-0.53, 0.33, -0.61]} rotation={[1.39, 0.1, -1.33]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder164.geometry} material={materials.Material} position={[-0.45, 0.33, -0.49]} rotation={[1.53, 0.02, 2.57]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder165.geometry} material={materials.Material} position={[-0.48, 0.33, -0.5]} rotation={[1.53, 0.02, -2.72]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder166.geometry} material={materials.Material} position={[-0.37, 0.33, -0.59]} rotation={[1.51, 0.03, 2.38]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder167.geometry} material={materials.Material} position={[-0.35, 0.33, -0.57]} rotation={[1.52, 0.02, -1.32]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder168.geometry} material={materials.Material} position={[-0.26, 0.33, -0.78]} rotation={[0.47, 0.18, -1.91]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder169.geometry} material={materials.Material} position={[-0.25, 0.32, -0.8]} rotation={[0.17, 0.19, 3.1]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder170.geometry} material={materials.Material} position={[-0.25, 0.33, -0.67]} rotation={[1.46, 0.04, -2.2]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder171.geometry} material={materials.Material} position={[-0.35, 0.33, -0.75]} rotation={[0.86, 0.19, -1.68]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder172.geometry} material={materials.Material} position={[-0.3, 0.33, -0.6]} rotation={[1.51, 0.01, -0.93]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder173.geometry} material={materials.Material} position={[-0.04, 0.24, -0.85]} rotation={[0.01, -0.02, -1.71]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder174.geometry} material={materials.Material} position={[-0.22, 0.33, -0.79]} rotation={[0.47, 0.14, -2.35]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder175.geometry} material={materials.Material} position={[-0.15, 0.33, -0.77]} rotation={[1.02, 0.04, -2.61]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder176.geometry} material={materials.Material} position={[-0.09, 0.33, -0.69]} rotation={[1.46, 0.02, -1.6]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder177.geometry} material={materials.Material} position={[-0.21, 0.33, -0.75]} rotation={[1.27, 0.04, -2.86]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder178.geometry} material={materials.Material} position={[-0.18, 0.33, -0.65]} rotation={[1.5, 0, -3.11]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder179.geometry} material={materials.Material} position={[-0.04, 0.33, -0.7]} rotation={[1.44, 0, -2.42]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder180.geometry} material={materials.Material} position={[0.07, 0.21, -0.84]} rotation={[0.01, -0.14, -1.19]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder181.geometry} material={materials.Material} position={[-0.01, 0.22, -0.85]} rotation={[0.01, -0.05, -1.97]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder182.geometry} material={materials.Material} position={[0.11, 0.29, -0.82]} rotation={[0.03, -0.17, -1.93]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder183.geometry} material={materials.Material} position={[0.12, 0.29, -0.82]} rotation={[0.03, -0.19, -2.4]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder184.geometry} material={materials.Material} position={[0.09, 0.31, -0.82]} rotation={[0.09, -0.15, -0.76]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder185.geometry} material={materials.Material} position={[0.01, 0.32, -0.82]} rotation={[0.12, -0.07, -1.85]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder186.geometry} material={materials.Material} position={[-0.03, 0.32, -0.82]} rotation={[0.13, -0.04, -2.08]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder187.geometry} material={materials.Material} position={[-0.01, 0.32, -0.82]} rotation={[0.17, -0.06, 3.11]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder188.geometry} material={materials.Material} position={[0.01, 0.32, -0.81]} rotation={[0.24, -0.07, -2.48]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder189.geometry} material={materials.Material} position={[0.05, 0.33, -0.67]} rotation={[1.48, -0.01, -0.83]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder190.geometry} material={materials.Material} position={[-0.02, 0.33, -0.65]} rotation={[1.5, -0.01, 2.98]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder191.geometry} material={materials.Material} position={[0.07, 0.33, -0.56]} rotation={[1.53, 0, -1.59]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder192.geometry} material={materials.Material} position={[0.08, 0.33, -0.56]} rotation={[1.53, 0, -1.46]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder193.geometry} material={materials.Material} position={[0.33, 0.28, -0.76]} rotation={[0.03, -0.4, -2.26]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder194.geometry} material={materials.Material} position={[0.35, 0.24, -0.76]} rotation={[0.01, -0.42, -2.36]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder195.geometry} material={materials.Material} position={[0.26, 0.32, -0.77]} rotation={[0.14, -0.33, -2.76]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder196.geometry} material={materials.Material} position={[0.24, 0.33, -0.67]} rotation={[1.39, -0.06, -2.88]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder197.geometry} material={materials.Material} position={[0.25, 0.33, -0.63]} rotation={[1.46, -0.03, -2.47]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder198.geometry} material={materials.Material} position={[0.17, 0.33, -0.65]} rotation={[1.48, -0.04, -2.61]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder199.geometry} material={materials.Material} position={[0.4, 0.33, -0.69]} rotation={[0.36, -0.47, -2.86]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder200.geometry} material={materials.Material} position={[0.35, 0.33, -0.57]} rotation={[1.48, -0.05, -2.4]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder201.geometry} material={materials.Material} position={[0.46, 0.33, -0.63]} rotation={[0.93, -0.37, -3]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder202.geometry} material={materials.Material} position={[0.44, 0.33, -0.66]} rotation={[0.66, -0.45, -2.66]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder203.geometry} material={materials.Material} position={[0.29, 0.33, -0.46]} rotation={[1.54, -0.02, -0.68]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder204.geometry} material={materials.Material} position={[0.4, 0.33, -0.55]} rotation={[1.48, -0.04, -2.99]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder205.geometry} material={materials.Material} position={[0.44, 0.33, -0.58]} rotation={[1.4, -0.1, -2.76]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder206.geometry} material={materials.Material} position={[0.47, 0.33, -0.59]} rotation={[1.27, -0.2, -1.5]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder207.geometry} material={materials.Material} position={[0.53, 0.21, -0.65]} rotation={[0.01, -0.63, -0.99]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder208.geometry} material={materials.Material} position={[0.54, 0.25, -0.64]} rotation={[0.02, -0.64, -1.62]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder209.geometry} material={materials.Material} position={[0.56, 0.27, -0.63]} rotation={[0.02, -0.66, -1.63]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder210.geometry} material={materials.Material} position={[0.53, 0.27, -0.65]} rotation={[0.02, -0.63, 2.88]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder211.geometry} material={materials.Material} position={[0.6, 0.33, -0.55]} rotation={[0.43, -0.7, -0.72]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder212.geometry} material={materials.Material} position={[0.53, 0.33, -0.45]} rotation={[1.48, -0.07, -0.31]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder213.geometry} material={materials.Material} position={[0.47, 0.33, -0.5]} rotation={[1.51, -0.07, -0.15]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder214.geometry} material={materials.Material} position={[0.51, 0.33, -0.52]} rotation={[1.43, -0.13, -2.12]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder215.geometry} material={materials.Material} position={[0.4, 0.33, -0.43]} rotation={[1.54, -0.03, -1.63]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder216.geometry} material={materials.Material} position={[0.39, 0.33, -0.46]} rotation={[1.53, -0.03, -2.54]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder217.geometry} material={materials.Material} position={[0.58, 0.33, -0.46]} rotation={[1.42, -0.14, -0.16]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder218.geometry} material={materials.Material} position={[0.69, 0.33, -0.36]} rotation={[1.36, -0.27, -0.96]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder219.geometry} material={materials.Material} position={[0.64, 0.33, -0.42]} rotation={[1.4, -0.23, -0.44]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder220.geometry} material={materials.Material} position={[0.55, 0.33, -0.34]} rotation={[1.54, -0.05, -2.11]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder221.geometry} material={materials.Material} position={[0.55, 0.33, -0.25]} rotation={[1.54, -0.03, -2.28]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder222.geometry} material={materials.Material} position={[0.5, 0.33, -0.26]} rotation={[1.55, -0.02, -1.44]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder223.geometry} material={materials.Material} position={[0.62, 0.33, -0.28]} rotation={[1.52, -0.06, 0.13]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder224.geometry} material={materials.Material} position={[0.72, 0.33, -0.18]} rotation={[1.51, -0.1, -1.37]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder225.geometry} material={materials.Material} position={[0.75, 0.33, -0.33]} rotation={[1.13, -0.61, 0.21]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder226.geometry} material={materials.Material} position={[0.71, 0.33, -0.29]} rotation={[1.47, -0.18, -0.87]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder227.geometry} material={materials.Material} position={[0.62, 0.33, -0.13]} rotation={[1.55, -0.03, -2.36]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder228.geometry} material={materials.Material} position={[0.62, 0.33, -0.11]} rotation={[1.55, -0.03, -1.06]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder229.geometry} material={materials.Material} position={[0.8, 0.33, -0.04]} rotation={[1.52, -0.18, 0.39]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder230.geometry} material={materials.Material} position={[0.76, 0.33, -0.06]} rotation={[1.55, -0.1, -0.67]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder231.geometry} material={materials.Material} position={[0.75, 0.33, -0.09]} rotation={[1.56, -0.1, -1.6]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder232.geometry} material={materials.Material} position={[0.7, 0.33, -0.06]} rotation={[1.56, -0.06, -1.82]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder233.geometry} material={materials.Material} position={[0.63, 0.33, -0.02]} rotation={[1.56, -0.03, 0.05]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder234.geometry} material={materials.Material} position={[0.63, 0.33, -0.06]} rotation={[1.57, -0.04, 0.34]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder235.geometry} material={materials.Material} position={[0.82, 0.33, 0]} rotation={[1.52, -0.2, 0.4]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder236.geometry} material={materials.Material} position={[0.79, 0.33, 0.02]} rotation={[1.55, -0.12, -2.14]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder237.geometry} material={materials.Material} position={[0.85, 0.33, 0.12]} rotation={[1.55, -0.27, -0.72]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder238.geometry} material={materials.Material} position={[0.83, 0.33, 0.13]} rotation={[1.56, -0.19, -0.84]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder239.geometry} material={materials.Material} position={[0.66, 0.33, 0.12]} rotation={[1.57, -0.04, -1.26]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder240.geometry} material={materials.Material} position={[0.66, 0.33, 0.08]} rotation={[1.57, -0.04, -1.8]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder241.geometry} material={materials.Material} position={[0.75, 0.33, 0.18]} rotation={[1.56, -0.07, 0.11]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder242.geometry} material={materials.Material} position={[0.9, 0.33, 0.29]} rotation={[1.83, -1.12, -0.92]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder243.geometry} material={materials.Material} position={[0.72, 0.33, 0.2]} rotation={[1.57, -0.05, 0.9]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder244.geometry} material={materials.Material} position={[0.73, 0.33, 0.25]} rotation={[1.59, -0.06, -0.56]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder245.geometry} material={materials.Material} position={[0.7, 0.33, 0.34]} rotation={[1.58, -0.05, -0.81]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder246.geometry} material={materials.Material} position={[0.84, 0.33, 0.39]} rotation={[1.65, -0.29, 1.05]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder247.geometry} material={materials.Material} position={[0.68, 0.33, 0.44]} rotation={[1.59, -0.06, 1.17]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder248.geometry} material={materials.Material} position={[0.63, 0.33, 0.44]} rotation={[1.58, -0.04, -1.6]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder249.geometry} material={materials.Material} position={[0.62, 0.33, 0.46]} rotation={[1.58, -0.04, -0.9]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder250.geometry} material={materials.Material} position={[0.68, 0.33, 0.52]} rotation={[1.61, -0.06, 0.46]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder251.geometry} material={materials.Material} position={[0.56, 0.33, 0.57]} rotation={[1.59, -0.04, -1.17]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder252.geometry} material={materials.Material} position={[0.54, 0.33, 0.53]} rotation={[1.59, -0.03, 0.88]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder253.geometry} material={materials.Material} position={[0.61, 0.33, 0.63]} rotation={[1.61, -0.06, 0.71]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder254.geometry} material={materials.Material} position={[0.65, 0.33, 0.67]} rotation={[1.64, -0.11, 0.89]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder255.geometry} material={materials.Material} position={[0.69, 0.33, 0.78]} rotation={[2.47, -0.77, -0.51]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder256.geometry} material={materials.Material} position={[0.62, 0.33, 0.87]} rotation={[2.7, -0.73, -0.73]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder257.geometry} material={materials.Material} position={[0.56, 0.33, 0.76]} rotation={[1.64, -0.09, 1.23]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder258.geometry} material={materials.Material} position={[0.65, 0.33, 0.81]} rotation={[2.1, -0.51, -0.36]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder259.geometry} material={materials.Material} position={[0.68, 0.33, 0.79]} rotation={[2.33, -0.69, -0.31]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder260.geometry} material={materials.Material} position={[0.67, 0.33, 0.74]} rotation={[1.8, -0.26, 0.92]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder261.geometry} material={materials.Material} position={[0.46, 0.33, 0.64]} rotation={[1.59, -0.02, 0.38]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder262.geometry} material={materials.Material} position={[0.51, 0.33, 0.76]} rotation={[1.62, -0.06, -0.27]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder263.geometry} material={materials.Material} position={[-0.63, 0.31, -0.59]} rotation={[-0.28, 0.63, 1.19]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.Cylinder264.geometry} material={materials.Material} position={[0.06, 0.31, -0.77]} rotation={[-0.11, -0.13, 0.01]} scale={[0.01, 0.04, 0.01]} />
      <mesh geometry={nodes.flame001.geometry} material={materials.flame} position={[-0.35, 1.95, 0.45]} rotation={[Math.PI, -0.75, Math.PI]} scale={8.64} />
      <mesh geometry={nodes.flame002.geometry} material={materials.flame} position={[-0.37, 1.95, 0.16]} rotation={[Math.PI, -0.75, Math.PI]} scale={7.43} />
      <mesh geometry={nodes.flame003.geometry} material={materials.flame} position={[-0.06, 1.95, 0.17]} rotation={[Math.PI, -0.75, Math.PI]} scale={9.02} />
      <mesh geometry={nodes.flame004.geometry} material={materials.flame} position={[-0.07, 1.95, 0.49]} rotation={[Math.PI, -0.75, Math.PI]} scale={8.32} />
      <mesh geometry={nodes.flame005.geometry} material={materials.flame} position={[0.22, 1.95, 0.46]} rotation={[Math.PI, -0.75, Math.PI]} scale={8.43} />
      <mesh geometry={nodes.flame006.geometry} material={materials.flame} position={[0.22, 1.95, 0.21]} rotation={[Math.PI, -0.75, Math.PI]} scale={7.66} />
      <mesh geometry={nodes.flame007.geometry} material={materials.flame} position={[0.23, 1.95, -0.09]} rotation={[Math.PI, -0.75, Math.PI]} scale={7.18} />
      <mesh geometry={nodes.flame008.geometry} material={materials.flame} position={[-0.04, 1.95, -0.12]} rotation={[Math.PI, -0.75, Math.PI]} scale={7.33} />
      <mesh geometry={nodes.flame009.geometry} material={materials.flame} position={[-0.32, 1.95, -0.11]} rotation={[Math.PI, -0.75, Math.PI]} scale={9.18} />
      <mesh geometry={nodes.Fire.geometry} material={materials['Procedural Animated Candle Flame']} position={[14.07, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/baday_cake.glb')
