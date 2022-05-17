import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ cherry, ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/cupcake.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={10}>
      <mesh
        geometry={nodes.cherry001.geometry}
        material={materials.cherry}
        position={[0.11, 0.36, 0.15]}
        rotation={[-2.85, 0.99, 2.57]}
        scale={0}
      />
      {cherry && (
        <mesh
          geometry={nodes.cherry.geometry}
          material={materials.cherry}
          position={[0.11, 0.34, 0.15]}
          rotation={[-2.82, -1.06, 3.1]}
          scale={0.04}
        />
      )}

      <mesh
        geometry={nodes.cup.geometry}
        material={materials.cup}
        position={[0.09, 0.15, 0.15]}
        rotation={[-Math.PI, Math.PI / 6, -Math.PI]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.cake.geometry}
        material={materials.cake}
        position={[0.09, 0.16, 0.15]}
        rotation={[-Math.PI, Math.PI / 6, -Math.PI]}
        scale={0.11}
      />
      <mesh
        geometry={nodes.cream.geometry}
        material={materials.cream}
        position={[0.11, 0.09, 0.13]}
        rotation={[-Math.PI, Math.PI / 6, -Math.PI]}
        scale={0.19}
      />
      <mesh
        geometry={nodes.Cylinder011.geometry}
        material={materials.sugar1}
        position={[0.22, 0.26, 0.08]}
        rotation={[1.74, 0.21, -2.92]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder019.geometry}
        material={materials.sugar1}
        position={[0.22, 0.25, 0.07]}
        rotation={[1.15, 0.17, -2.75]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder030.geometry}
        material={materials.sugar1}
        position={[0.2, 0.27, 0.07]}
        rotation={[1.83, -0.44, 2.95]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder045.geometry}
        material={materials.sugar1}
        position={[0.11, 0.21, -0.02]}
        rotation={[1.76, 0.35, 2.06]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder048.geometry}
        material={materials.sugar1}
        position={[0, 0.24, 0.21]}
        rotation={[1.23, 0.18, -1.54]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder053.geometry}
        material={materials.sugar1}
        position={[0.15, 0.27, 0.18]}
        rotation={[1.48, -0.07, 2.94]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder070.geometry}
        material={materials.sugar1}
        position={[0.09, 0.24, 0]}
        rotation={[2.05, -0.1, -1.28]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder084.geometry}
        material={materials.sugar1}
        position={[0.24, 0.25, 0.09]}
        rotation={[2.17, 0.29, -1.94]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder092.geometry}
        material={materials.sugar1}
        position={[0.05, 0.33, 0.12]}
        rotation={[1.85, 0.02, -1.33]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder115.geometry}
        material={materials.sugar1}
        position={[-0.04, 0.22, 0.17]}
        rotation={[1.27, -0.61, -2.7]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder125.geometry}
        material={materials.sugar1}
        position={[0.1, 0.27, 0.25]}
        rotation={[1.73, 0.31, -2.08]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder133.geometry}
        material={materials.sugar1}
        position={[0.01, 0.25, 0.09]}
        rotation={[1.76, -0.65, -1.48]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder143.geometry}
        material={materials.sugar1}
        position={[0.15, 0.07, 0.27]}
        rotation={[1.43, -0.19, -2.59]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder144.geometry}
        material={materials.sugar1}
        position={[0.22, 0.27, 0.15]}
        rotation={[1.67, 0, -1.64]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder160.geometry}
        material={materials.sugar1}
        position={[0.17, 0.25, 0.14]}
        rotation={[2.1, 0.09, -1.45]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder173.geometry}
        material={materials.sugar1}
        position={[0.04, 0.3, 0.2]}
        rotation={[1.82, -0.48, -2.44]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder185.geometry}
        material={materials.sugar1}
        position={[0.03, 0.3, 0.19]}
        rotation={[1.18, 0.03, -2.93]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder199.geometry}
        material={materials.sugar1}
        position={[0.12, 0.33, 0.06]}
        rotation={[1.5, 0.16, -2]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder217.geometry}
        material={materials.sugar1}
        position={[-0.04, 0.22, 0.18]}
        rotation={[1.63, -0.31, 2.45]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder225.geometry}
        material={materials.sugar1}
        position={[0.01, 0.24, 0.04]}
        rotation={[1.9, 0.15, -2.68]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder232.geometry}
        material={materials.sugar1}
        position={[0.06, 0.29, 0.22]}
        rotation={[0.91, 0.27, 2.95]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder237.geometry}
        material={materials.sugar1}
        position={[0.19, 0.24, 0.24]}
        rotation={[1.16, 0.01, -1.78]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder246.geometry}
        material={materials.sugar1}
        position={[0.03, 0.32, 0.15]}
        rotation={[1.7, -0.15, -2.9]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder256.geometry}
        material={materials.sugar1}
        position={[0.06, 0.25, 0.01]}
        rotation={[1.18, 0.03, -2.02]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder278.geometry}
        material={materials.sugar1}
        position={[0.17, 0.29, 0.2]}
        rotation={[1.88, 0.17, -1.93]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder284.geometry}
        material={materials.sugar1}
        position={[0.19, 0.28, 0.19]}
        rotation={[1.63, 0.01, 3.04]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder297.geometry}
        material={materials.sugar1}
        position={[0, 0.26, 0.11]}
        rotation={[1.75, -0.75, -2.19]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder301.geometry}
        material={materials.sugar1}
        position={[0.18, 0.27, 0.22]}
        rotation={[1.85, 0.07, 2.06]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder324.geometry}
        material={materials.sugar1}
        position={[0.1, 0.07, 0.11]}
        rotation={[1.38, 0.66, 2.94]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder345.geometry}
        material={materials.sugar1}
        position={[-0.01, 0.24, 0.17]}
        rotation={[2.21, 0.03, -1.83]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder363.geometry}
        material={materials.sugar1}
        position={[0.14, 0.35, 0.16]}
        rotation={[1.75, 0.08, -1.88]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder373.geometry}
        material={materials.sugar1}
        position={[0.13, 0.24, 0.27]}
        rotation={[0.92, 0.08, 2.76]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder384.geometry}
        material={materials.sugar1}
        position={[0.16, 0.26, 0.04]}
        rotation={[0.94, -0.26, 3.03]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder385.geometry}
        material={materials.sugar1}
        position={[-0.03, 0.23, 0.11]}
        rotation={[1.86, 0.53, -1.63]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder402.geometry}
        material={materials.sugar1}
        position={[0.2, 0.26, 0.23]}
        rotation={[0.93, -0.35, -1.98]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder413.geometry}
        material={materials.sugar1}
        position={[0.06, 0.25, 0.03]}
        rotation={[1.1, -0.15, 2.91]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder414.geometry}
        material={materials.sugar1}
        position={[0.01, 0.3, 0.11]}
        rotation={[0.8, 0.25, -1.27]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder418.geometry}
        material={materials.sugar1}
        position={[0.12, 0.26, 0.04]}
        rotation={[1.08, -0.09, -2.79]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder427.geometry}
        material={materials.sugar1}
        position={[0.05, 0.29, 0.06]}
        rotation={[2.07, -0.62, -2.43]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder435.geometry}
        material={materials.sugar1}
        position={[0.11, 0.3, 0.22]}
        rotation={[1.85, -0.14, -2.97]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder460.geometry}
        material={materials.sugar1}
        position={[0.01, 0.23, 0.22]}
        rotation={[1.92, -0.3, -2.33]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder461.geometry}
        material={materials.sugar1}
        position={[0.04, 0.32, 0.13]}
        rotation={[1.95, 0.11, 2.97]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder484.geometry}
        material={materials.sugar1}
        position={[0.13, 0.25, 0.26]}
        rotation={[1.7, -0.03, -1.36]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder497.geometry}
        material={materials.sugar1}
        position={[0.17, 0.27, 0.24]}
        rotation={[1.75, 0.34, -2.31]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder505.geometry}
        material={materials.sugar1}
        position={[0, 0.24, 0.2]}
        rotation={[1.64, -0.48, -2.51]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder512.geometry}
        material={materials.sugar1}
        position={[0.1, 0.07, 0.18]}
        rotation={[1.09, -0.06, 2.93]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder516.geometry}
        material={materials.sugar1}
        position={[0.04, 0.22, -0.01]}
        rotation={[1.96, -0.3, -3.14]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder519.geometry}
        material={materials.sugar1}
        position={[0.14, 0.3, 0.22]}
        rotation={[2.37, -0.05, 2.72]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder525.geometry}
        material={materials.sugar1}
        position={[0.09, 0.32, 0.06]}
        rotation={[1.16, -0.59, -1.64]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder527.geometry}
        material={materials.sugar1}
        position={[-0.06, 0.22, 0.17]}
        rotation={[1.24, -0.07, 2.57]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder530.geometry}
        material={materials.sugar1}
        position={[0.17, 0.28, 0.16]}
        rotation={[1.34, -0.31, -2.05]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder533.geometry}
        material={materials.sugar1}
        position={[0.22, 0.27, 0.15]}
        rotation={[1.28, -0.43, -2.72]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder535.geometry}
        material={materials.sugar1}
        position={[0.02, 0.23, 0.23]}
        rotation={[1.61, -0.06, -1.28]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder539.geometry}
        material={materials.sugar1}
        position={[0.14, 0.34, 0.09]}
        rotation={[1.55, 0.01, 2.92]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder541.geometry}
        material={materials.sugar1}
        position={[0.05, 0.33, 0.1]}
        rotation={[2.11, -0.01, -1.52]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder544.geometry}
        material={materials.sugar1}
        position={[0.22, 0.27, 0.14]}
        rotation={[1.53, 0.49, 2.26]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder550.geometry}
        material={materials.sugar1}
        position={[0, 0.24, 0.05]}
        rotation={[2.07, 0.09, -3.07]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder553.geometry}
        material={materials.sugar1}
        position={[0.19, 0.29, 0.2]}
        rotation={[1.6, 0.22, -2.03]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder555.geometry}
        material={materials.sugar1}
        position={[0.06, 0.31, 0.19]}
        rotation={[1.53, 0.07, -3.1]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder558.geometry}
        material={materials.sugar1}
        position={[0.19, 0.28, 0.14]}
        rotation={[1.83, 0.23, -2.33]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder561.geometry}
        material={materials.sugar1}
        position={[0.06, 0.32, 0.14]}
        rotation={[1.43, 0.05, 2.76]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder565.geometry}
        material={materials.sugar1}
        position={[0.18, 0.27, 0.06]}
        rotation={[1.06, -0.47, -2.12]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder568.geometry}
        material={materials.sugar1}
        position={[0.13, 0.25, 0.27]}
        rotation={[1.23, 0.12, 2.63]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder571.geometry}
        material={materials.sugar1}
        position={[-0.01, 0.24, 0.2]}
        rotation={[2.12, 0.22, -2.28]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder572.geometry}
        material={materials.sugar1}
        position={[0.15, 0.26, 0.03]}
        rotation={[1.98, -0.11, -2.22]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder575.geometry}
        material={materials.sugar1}
        position={[0.07, 0.24, 0.26]}
        rotation={[1.65, 0.26, -2.99]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder578.geometry}
        material={materials.sugar1}
        position={[0.11, 0.26, 0.04]}
        rotation={[1.57, -0.06, -3.1]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder581.geometry}
        material={materials.sugar1}
        position={[-0.05, 0.23, 0.14]}
        rotation={[1.83, -0.34, 2.87]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder584.geometry}
        material={materials.sugar1}
        position={[0.08, 0.29, 0.18]}
        rotation={[2.01, -0.3, -2.41]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder588.geometry}
        material={materials.sugar1}
        position={[-0.02, 0.24, 0.11]}
        rotation={[1.71, 0.29, -1.12]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder591.geometry}
        material={materials.sugar1}
        position={[0, 0.25, 0.12]}
        rotation={[2.21, -0.04, -2.07]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder594.geometry}
        material={materials.sugar1}
        position={[0.06, 0.33, 0.09]}
        rotation={[1.88, 0.03, 2.23]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder595.geometry}
        material={materials.sugar1}
        position={[0.15, 0.29, 0.2]}
        rotation={[1.14, -0.15, -2.88]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder599.geometry}
        material={materials.sugar1}
        position={[0.01, 0.25, 0.1]}
        rotation={[1.68, -0.08, -1.82]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder602.geometry}
        material={materials.sugar1}
        position={[-0.01, 0.22, 0.05]}
        rotation={[1.19, -0.34, -2.31]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder605.geometry}
        material={materials.sugar1}
        position={[0.17, 0.07, 0.25]}
        rotation={[1.6, 0.59, 3.12]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder608.geometry}
        material={materials.sugar1}
        position={[0.13, 0.35, 0.16]}
        rotation={[1.69, 0, -3.08]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder610.geometry}
        material={materials.sugar1}
        position={[0.19, 0.28, 0.13]}
        rotation={[2.33, 0.13, 2.85]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder613.geometry}
        material={materials.sugar1}
        position={[-0.01, 0.24, 0.17]}
        rotation={[2.03, 0.36, -1.11]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder615.geometry}
        material={materials.sugar1}
        position={[0.07, 0.25, 0.15]}
        rotation={[1.32, -0.14, -2.88]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder617.geometry}
        material={materials.sugar1}
        position={[0.12, 0.3, 0.22]}
        rotation={[1.8, -0.33, -2.18]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder619.geometry}
        material={materials.sugar1}
        position={[0.08, 0.3, 0.22]}
        rotation={[1.7, -0.27, -3.05]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder622.geometry}
        material={materials.sugar1}
        position={[0.05, 0.3, 0.07]}
        rotation={[1.51, -0.62, -1.77]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder625.geometry}
        material={materials.sugar1}
        position={[-0.04, 0.23, 0.14]}
        rotation={[2.18, 0.12, -2.72]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder628.geometry}
        material={materials.sugar1}
        position={[0.06, 0.33, 0.11]}
        rotation={[1.39, 0.26, 3]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder631.geometry}
        material={materials.sugar1}
        position={[0.08, 0.3, 0.05]}
        rotation={[1.34, -0.48, -2.62]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder633.geometry}
        material={materials.sugar1}
        position={[0.04, 0.31, 0.16]}
        rotation={[1.89, -0.62, -2.14]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder635.geometry}
        material={materials.sugar1}
        position={[0.15, 0.35, 0.16]}
        rotation={[1.97, -0.32, -1.15]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder637.geometry}
        material={materials.sugar1}
        position={[0.23, 0.27, 0.15]}
        rotation={[2.01, 0.6, -1.08]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder639.geometry}
        material={materials.sugar1}
        position={[0.09, 0.3, 0.23]}
        rotation={[2.14, 0.59, -2.12]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder642.geometry}
        material={materials.sugar1}
        position={[-0.01, 0.25, 0.12]}
        rotation={[1.87, 0.66, -1.97]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder647.geometry}
        material={materials.sugar1}
        position={[0.12, 0.28, 0.13]}
        rotation={[1.34, -0.11, -1.16]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder650.geometry}
        material={materials.sugar1}
        position={[0, 0.29, 0.13]}
        rotation={[1.52, 0.35, -3.09]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder652.geometry}
        material={materials.sugar1}
        position={[0.18, 0.27, 0.08]}
        rotation={[1.21, 0.04, -1.78]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder657.geometry}
        material={materials.sugar1}
        position={[0.11, 0.07, 0.18]}
        rotation={[1.65, 0.51, -2.57]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder659.geometry}
        material={materials.sugar1}
        position={[0.23, 0.21, 0.07]}
        rotation={[1.64, 0.63, 2.73]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder662.geometry}
        material={materials.sugar1}
        position={[0.04, 0.32, 0.1]}
        rotation={[1.25, 0.41, -2.19]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder668.geometry}
        material={materials.sugar1}
        position={[0.08, 0.32, 0.11]}
        rotation={[1.06, 0.37, -2.86]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder670.geometry}
        material={materials.sugar1}
        position={[0.14, 0.33, 0.17]}
        rotation={[1.51, -0.49, 2.88]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder674.geometry}
        material={materials.sugar1}
        position={[0.07, 0.27, 0.25]}
        rotation={[2.08, 0.17, -3.08]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder677.geometry}
        material={materials.sugar1}
        position={[0.02, 0.31, 0.16]}
        rotation={[1.87, -0.5, -0.63]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder680.geometry}
        material={materials.sugar1}
        position={[0.11, 0.26, 0.03]}
        rotation={[1.77, 0.3, -2.93]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder681.geometry}
        material={materials.sugar1}
        position={[0.16, 0.34, 0.09]}
        rotation={[1.43, -0.34, -1.79]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder684.geometry}
        material={materials.sugar1}
        position={[-0.01, 0.24, 0.2]}
        rotation={[2.29, 0.13, 2.91]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder685.geometry}
        material={materials.sugar1}
        position={[0.21, 0.29, 0.13]}
        rotation={[1.12, -0.27, -2.12]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder690.geometry}
        material={materials.sugar1}
        position={[0.01, 0.22, 0.03]}
        rotation={[1.22, 0.52, -0.87]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder692.geometry}
        material={materials.sugar1}
        position={[0.13, 0.26, 0.18]}
        rotation={[1.96, 0.48, -1.16]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder696.geometry}
        material={materials.sugar1}
        position={[0.05, 0.24, 0.24]}
        rotation={[0.94, 0.21, -2.96]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder699.geometry}
        material={materials.sugar1}
        position={[0.24, 0.26, 0.12]}
        rotation={[1.7, -0.14, -1.64]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder701.geometry}
        material={materials.sugar1}
        position={[0.16, 0.07, 0.26]}
        rotation={[2.06, 0.03, -1.89]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder704.geometry}
        material={materials.sugar1}
        position={[0.09, 0.24, 0.27]}
        rotation={[1.43, -0.77, -1.48]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder706.geometry}
        material={materials.sugar1}
        position={[0.14, 0.26, 0.03]}
        rotation={[1.56, 0.56, -1.8]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder709.geometry}
        material={materials.sugar1}
        position={[0.04, 0.25, 0.23]}
        rotation={[1.96, -0.06, -1.37]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder711.geometry}
        material={materials.sugar1}
        position={[0.06, 0.32, 0.17]}
        rotation={[2.08, -0.01, 2.61]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder714.geometry}
        material={materials.sugar1}
        position={[0.13, 0.27, 0.03]}
        rotation={[1.52, 0.15, -1.89]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder717.geometry}
        material={materials.sugar1}
        position={[-0.03, 0.23, 0.08]}
        rotation={[1.28, 0.09, -1.91]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder720.geometry}
        material={materials.sugar1}
        position={[0.1, 0.25, 0.26]}
        rotation={[1.38, -0.34, -2.8]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder722.geometry}
        material={materials.sugar1}
        position={[0.09, 0.31, 0.2]}
        rotation={[2.06, -0.33, 2.86]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder724.geometry}
        material={materials.sugar1}
        position={[0.22, 0.24, 0.05]}
        rotation={[1.3, -0.59, -1.5]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder727.geometry}
        material={materials.sugar1}
        position={[0.11, 0.25, 0.28]}
        rotation={[1.44, 0.48, -2.97]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder730.geometry}
        material={materials.sugar1}
        position={[0.07, 0.31, 0.2]}
        rotation={[1.55, 0.02, -1.14]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder734.geometry}
        material={materials.sugar1}
        position={[0.09, 0.25, 0.01]}
        rotation={[1.27, -0.73, -3.06]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder737.geometry}
        material={materials.sugar1}
        position={[0.13, 0.22, -0.01]}
        rotation={[1.8, -0.12, -1.81]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder739.geometry}
        material={materials.sugar1}
        position={[0.15, 0.07, 0.27]}
        rotation={[1.23, 0.2, -0.97]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder742.geometry}
        material={materials.sugar1}
        position={[-0.02, 0.21, 0.05]}
        rotation={[1.96, -0.49, -1.83]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder744.geometry}
        material={materials.sugar1}
        position={[0.09, 0.07, 0.15]}
        rotation={[1.15, 0.24, -1.6]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder747.geometry}
        material={materials.sugar1}
        position={[0.24, 0.25, 0.12]}
        rotation={[1.95, 0.01, 2.3]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder014.geometry}
        material={materials.sugar2}
        position={[0.1, 0.33, 0.17]}
        rotation={[1.29, -0.3, -2.68]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder020.geometry}
        material={materials.sugar2}
        position={[-0.02, 0.21, 0.05]}
        rotation={[1.79, 0.09, -1.41]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder051.geometry}
        material={materials.sugar2}
        position={[0.15, 0.34, 0.1]}
        rotation={[1.14, 0.02, 3.07]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder058.geometry}
        material={materials.sugar2}
        position={[0.03, 0.31, 0.11]}
        rotation={[1.94, 0.62, -2.89]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder077.geometry}
        material={materials.sugar2}
        position={[0.06, 0.23, -0.01]}
        rotation={[0.91, 0.08, -2.12]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder091.geometry}
        material={materials.sugar2}
        position={[0.09, 0.28, 0.24]}
        rotation={[1.75, 0, -1.39]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder101.geometry}
        material={materials.sugar2}
        position={[0.22, 0.26, 0.11]}
        rotation={[1.49, 0.05, 1.99]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder116.geometry}
        material={materials.sugar2}
        position={[0.01, 0.3, 0.13]}
        rotation={[1.75, 0.13, -1.98]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder126.geometry}
        material={materials.sugar2}
        position={[0.14, 0.34, 0.09]}
        rotation={[1.88, -0.31, 2.46]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder134.geometry}
        material={materials.sugar2}
        position={[0.04, 0.26, 0.05]}
        rotation={[2.08, 0.65, -1.75]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder141.geometry}
        material={materials.sugar2}
        position={[0.07, 0.31, 0.17]}
        rotation={[1.49, 0.49, 1.9]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder152.geometry}
        material={materials.sugar2}
        position={[-0.01, 0.24, 0.18]}
        rotation={[1.2, -0.58, -1.4]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder161.geometry}
        material={materials.sugar2}
        position={[0.09, 0.31, 0.2]}
        rotation={[1.57, -0.05, -1.82]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder165.geometry}
        material={materials.sugar2}
        position={[0.17, 0.32, 0.1]}
        rotation={[1.19, 0.36, -1.56]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder178.geometry}
        material={materials.sugar2}
        position={[0.07, 0.3, 0.22]}
        rotation={[2.21, 0.09, -2.09]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder187.geometry}
        material={materials.sugar2}
        position={[0.04, 0.32, 0.17]}
        rotation={[1.57, -0.57, -1.84]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder201.geometry}
        material={materials.sugar2}
        position={[-0.05, 0.21, 0.1]}
        rotation={[0.96, 0.29, -1.23]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder213.geometry}
        material={materials.sugar2}
        position={[0.08, 0.25, 0.16]}
        rotation={[1.66, 0.25, 1.9]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder221.geometry}
        material={materials.sugar2}
        position={[0.09, 0.26, 0.03]}
        rotation={[1.22, 0.48, -3.1]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder235.geometry}
        material={materials.sugar2}
        position={[0.06, 0.33, 0.13]}
        rotation={[1.22, -0.54, -2.1]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder243.geometry}
        material={materials.sugar2}
        position={[0.03, 0.31, 0.09]}
        rotation={[1.29, 0.12, -3.11]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder247.geometry}
        material={materials.sugar2}
        position={[0.15, 0.27, 0.03]}
        rotation={[1.53, -0.71, -2.99]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder258.geometry}
        material={materials.sugar2}
        position={[0.01, 0.26, 0.1]}
        rotation={[1.89, -0.22, -2.42]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder280.geometry}
        material={materials.sugar2}
        position={[0.11, 0.3, 0.23]}
        rotation={[1.3, -0.38, 2.52]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder286.geometry}
        material={materials.sugar2}
        position={[0.12, 0.26, 0.02]}
        rotation={[1.49, -0.58, -1.61]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder314.geometry}
        material={materials.sugar2}
        position={[-0.05, 0.23, 0.15]}
        rotation={[1.86, -0.27, -1.95]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder326.geometry}
        material={materials.sugar2}
        position={[0.1, 0.23, -0.01]}
        rotation={[1.91, 0.52, 2.41]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder347.geometry}
        material={materials.sugar2}
        position={[0.02, 0.31, 0.1]}
        rotation={[1.28, -0.13, -1.3]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder357.geometry}
        material={materials.sugar2}
        position={[0.11, 0.35, 0.17]}
        rotation={[1.43, -0.16, -1.89]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder369.geometry}
        material={materials.sugar2}
        position={[0.07, 0.24, 0.01]}
        rotation={[1.18, 0.41, -2.52]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder378.geometry}
        material={materials.sugar2}
        position={[0.04, 0.25, 0.02]}
        rotation={[1.24, -0.41, -1.93]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder387.geometry}
        material={materials.sugar2}
        position={[0.01, 0.28, 0.18]}
        rotation={[1.5, -0.21, -2.74]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder389.geometry}
        material={materials.sugar2}
        position={[0.15, 0.3, 0.06]}
        rotation={[1.79, -0.71, -1.84]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder394.geometry}
        material={materials.sugar2}
        position={[0.2, 0.26, 0.06]}
        rotation={[1, -0.24, -2.28]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder403.geometry}
        material={materials.sugar2}
        position={[0.17, 0.29, 0.19]}
        rotation={[1.49, -0.09, -2.63]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder416.geometry}
        material={materials.sugar2}
        position={[0.12, 0.21, -0.02]}
        rotation={[1.17, -0.2, -2.91]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder422.geometry}
        material={materials.sugar2}
        position={[0.22, 0.25, 0.07]}
        rotation={[1.55, 0.13, -3.06]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder436.geometry}
        material={materials.sugar2}
        position={[0.03, 0.25, 0.02]}
        rotation={[1.38, -0.53, 2.19]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder450.geometry}
        material={materials.sugar2}
        position={[0.15, 0.35, 0.11]}
        rotation={[1.29, -0.38, 2.46]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder470.geometry}
        material={materials.sugar2}
        position={[0, 0.22, 0.02]}
        rotation={[1.69, -0.14, 2.42]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder486.geometry}
        material={materials.sugar2}
        position={[-0.02, 0.24, 0.07]}
        rotation={[0.82, -0.01, -2.42]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder506.geometry}
        material={materials.sugar2}
        position={[0.06, 0.31, 0.19]}
        rotation={[1.9, 0.35, -3.11]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder508.geometry}
        material={materials.sugar2}
        position={[0.15, 0.35, 0.15]}
        rotation={[2.27, 0.22, 2.43]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder510.geometry}
        material={materials.sugar2}
        position={[0.17, 0.29, 0.2]}
        rotation={[1.77, 0.64, -2.52]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder514.geometry}
        material={materials.sugar2}
        position={[0.1, 0.35, 0.14]}
        rotation={[1.45, 0.41, 2.24]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder517.geometry}
        material={materials.sugar2}
        position={[0.18, 0.26, 0.05]}
        rotation={[1.58, 0.5, 2.3]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder520.geometry}
        material={materials.sugar2}
        position={[0.06, 0.31, 0.21]}
        rotation={[1.61, 0.12, 2.23]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder522.geometry}
        material={materials.sugar2}
        position={[0.21, 0.28, 0.18]}
        rotation={[0.99, 0.01, -2.1]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder524.geometry}
        material={materials.sugar2}
        position={[0, 0.24, 0.06]}
        rotation={[0.93, 0.03, -1.2]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder528.geometry}
        material={materials.sugar2}
        position={[0.13, 0.35, 0.14]}
        rotation={[1.39, 0.07, -0.9]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder531.geometry}
        material={materials.sugar2}
        position={[0.1, 0.32, 0.06]}
        rotation={[1.5, 0.23, -2.99]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder534.geometry}
        material={materials.sugar2}
        position={[0.13, 0.22, -0.01]}
        rotation={[1.76, 0.07, -0.92]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder537.geometry}
        material={materials.sugar2}
        position={[0.15, 0.35, 0.14]}
        rotation={[1.54, 0.01, -1.4]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder542.geometry}
        material={materials.sugar2}
        position={[-0.04, 0.23, 0.13]}
        rotation={[1.38, -0.18, -2.93]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder545.geometry}
        material={materials.sugar2}
        position={[0.08, 0.3, 0.21]}
        rotation={[1.51, -0.44, -1.3]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder547.geometry}
        material={materials.sugar2}
        position={[0.02, 0.26, 0.22]}
        rotation={[1.12, 0.24, -2.2]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder549.geometry}
        material={materials.sugar2}
        position={[0.05, 0.32, 0.15]}
        rotation={[1.81, 0.3, -1.4]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder551.geometry}
        material={materials.sugar2}
        position={[0.04, 0.23, 0.01]}
        rotation={[1.26, -0.15, -2.24]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder554.geometry}
        material={materials.sugar2}
        position={[0.04, 0.32, 0.14]}
        rotation={[1.9, -0.47, -2.16]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder556.geometry}
        material={materials.sugar2}
        position={[0.19, 0.28, 0.2]}
        rotation={[0.78, 0.12, 2.56]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder559.geometry}
        material={materials.sugar2}
        position={[0.24, 0.24, 0.08]}
        rotation={[1.29, -0.11, -3.11]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder562.geometry}
        material={materials.sugar2}
        position={[0.01, 0.26, 0.07]}
        rotation={[1.35, -0.16, -0.74]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder564.geometry}
        material={materials.sugar2}
        position={[0.01, 0.26, 0.08]}
        rotation={[1.92, 0.49, -2.03]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder566.geometry}
        material={materials.sugar2}
        position={[0.02, 0.25, 0.09]}
        rotation={[1.52, 0.03, -2.34]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder569.geometry}
        material={materials.sugar2}
        position={[0.04, 0.23, 0.01]}
        rotation={[1.18, -0.07, -2.35]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder573.geometry}
        material={materials.sugar2}
        position={[-0.02, 0.24, 0.16]}
        rotation={[1.28, -0.42, -3]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder576.geometry}
        material={materials.sugar2}
        position={[0.14, 0.28, 0.24]}
        rotation={[1.8, -0.58, 2.35]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder579.geometry}
        material={materials.sugar2}
        position={[0.09, 0.33, 0.11]}
        rotation={[1.82, 0.11, 3.12]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder583.geometry}
        material={materials.sugar2}
        position={[0.19, 0.29, 0.16]}
        rotation={[1.33, 0.12, -2.11]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder586.geometry}
        material={materials.sugar2}
        position={[0.1, 0.24, 0.28]}
        rotation={[1.87, -0.49, 2.96]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder589.geometry}
        material={materials.sugar2}
        position={[0.16, 0.27, 0.24]}
        rotation={[1.09, -0.22, -1.05]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder592.geometry}
        material={materials.sugar2}
        position={[0.13, 0.27, 0.04]}
        rotation={[1.35, 0.02, -1.47]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder597.geometry}
        material={materials.sugar2}
        position={[0.18, 0.28, 0.12]}
        rotation={[1.96, 0.5, -2.26]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder600.geometry}
        material={materials.sugar2}
        position={[0.08, 0.31, 0.2]}
        rotation={[1.28, 0.72, -2.38]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder603.geometry}
        material={materials.sugar2}
        position={[0.1, 0.33, 0.07]}
        rotation={[1.9, -0.22, -2.04]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder606.geometry}
        material={materials.sugar2}
        position={[0.01, 0.22, 0.01]}
        rotation={[2.04, 0.03, 2.9]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder611.geometry}
        material={materials.sugar2}
        position={[0.1, 0.26, 0.03]}
        rotation={[1.71, 0.1, 3.08]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder616.geometry}
        material={materials.sugar2}
        position={[0.16, 0.27, 0.06]}
        rotation={[1.55, 0.42, -0.93]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder620.geometry}
        material={materials.sugar2}
        position={[0.21, 0.26, 0.21]}
        rotation={[2.32, 0.11, -1.44]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder623.geometry}
        material={materials.sugar2}
        position={[0.11, 0.07, 0.11]}
        rotation={[1.32, 0.16, -0.97]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder626.geometry}
        material={materials.sugar2}
        position={[0.03, 0.32, 0.13]}
        rotation={[1.41, -0.13, -2.39]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder629.geometry}
        material={materials.sugar2}
        position={[0.11, 0.36, 0.15]}
        rotation={[2.19, 0.31, -1.78]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder634.geometry}
        material={materials.sugar2}
        position={[0.1, 0.26, 0.04]}
        rotation={[1.9, 0.29, -0.65]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder640.geometry}
        material={materials.sugar2}
        position={[0.21, 0.26, 0.2]}
        rotation={[1.73, 0.1, 2.98]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder643.geometry}
        material={materials.sugar2}
        position={[0.01, 0.3, 0.12]}
        rotation={[1.98, 0.02, -1.17]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder644.geometry}
        material={materials.sugar2}
        position={[0.19, 0.23, 0.02]}
        rotation={[1.13, 0.42, -1.86]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder646.geometry}
        material={materials.sugar2}
        position={[0.01, 0.23, 0.23]}
        rotation={[1.33, -0.32, -1.7]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder648.geometry}
        material={materials.sugar2}
        position={[-0.01, 0.25, 0.12]}
        rotation={[1.65, -0.13, -1.46]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder651.geometry}
        material={materials.sugar2}
        position={[0.24, 0.24, 0.14]}
        rotation={[2.18, -0.53, -2.42]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder653.geometry}
        material={materials.sugar2}
        position={[0.12, 0.35, 0.14]}
        rotation={[1.98, -0.18, -1.14]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder655.geometry}
        material={materials.sugar2}
        position={[0.03, 0.25, 0.03]}
        rotation={[2.09, -0.09, -1.63]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder658.geometry}
        material={materials.sugar2}
        position={[0.03, 0.24, 0.02]}
        rotation={[1.91, -0.37, -1.33]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder660.geometry}
        material={materials.sugar2}
        position={[0.07, 0.31, 0.21]}
        rotation={[2.2, -0.13, -1.97]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder663.geometry}
        material={materials.sugar2}
        position={[0.13, 0.35, 0.14]}
        rotation={[1.61, -0.47, 2.79]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder666.geometry}
        material={materials.sugar2}
        position={[-0.02, 0.25, 0.1]}
        rotation={[1.51, -0.05, -1.38]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder671.geometry}
        material={materials.sugar2}
        position={[0.04, 0.29, 0.06]}
        rotation={[2.17, 0.06, 2.51]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder672.geometry}
        material={materials.sugar2}
        position={[0.06, 0.33, 0.1]}
        rotation={[0.88, 0.04, -1.52]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder675.geometry}
        material={materials.sugar2}
        position={[0.11, 0.3, 0.22]}
        rotation={[1.25, -0.09, 2.51]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder678.geometry}
        material={materials.sugar2}
        position={[0.12, 0.34, 0.09]}
        rotation={[2.29, -0.09, -1.8]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder682.geometry}
        material={materials.sugar2}
        position={[0.02, 0.23, 0.03]}
        rotation={[1.53, 0.32, -2.6]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder686.geometry}
        material={materials.sugar2}
        position={[0.23, 0.25, 0.08]}
        rotation={[1.63, 0.04, -2.6]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder688.geometry}
        material={materials.sugar2}
        position={[0.14, 0.26, 0.02]}
        rotation={[1.78, -0.51, -2.06]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder691.geometry}
        material={materials.sugar2}
        position={[0.14, 0.33, 0.07]}
        rotation={[1.27, -0.13, -1.84]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder693.geometry}
        material={materials.sugar2}
        position={[0.03, 0.29, 0.2]}
        rotation={[1.67, 0.39, 2.58]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder694.geometry}
        material={materials.sugar2}
        position={[0.06, 0.32, 0.07]}
        rotation={[1.57, -0.05, -2.52]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder697.geometry}
        material={materials.sugar2}
        position={[0.2, 0.26, 0.21]}
        rotation={[1.46, 0.16, 2.47]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder702.geometry}
        material={materials.sugar2}
        position={[0.1, 0.26, 0.03]}
        rotation={[1.51, -0.08, 2.33]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder705.geometry}
        material={materials.sugar2}
        position={[0.22, 0.27, 0.17]}
        rotation={[2, 0.14, -2.79]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder707.geometry}
        material={materials.sugar2}
        position={[0.08, 0.25, 0.01]}
        rotation={[1.67, 0.41, -1.92]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder715.geometry}
        material={materials.sugar2}
        position={[0.16, 0.28, 0.06]}
        rotation={[1.79, 0.73, 3.11]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder718.geometry}
        material={materials.sugar2}
        position={[0.01, 0.25, 0.06]}
        rotation={[1.76, 0.54, 2.4]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder725.geometry}
        material={materials.sugar2}
        position={[0.16, 0.27, 0.16]}
        rotation={[1.61, -0.01, -1.3]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder728.geometry}
        material={materials.sugar2}
        position={[0.16, 0.27, 0.07]}
        rotation={[1.03, 0.56, 2.79]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder731.geometry}
        material={materials.sugar2}
        position={[0.11, 0.34, 0.08]}
        rotation={[2.3, 0.34, -3.02]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder733.geometry}
        material={materials.sugar2}
        position={[-0.03, 0.24, 0.17]}
        rotation={[1.78, 0.2, 2.64]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder735.geometry}
        material={materials.sugar2}
        position={[-0.03, 0.22, 0.19]}
        rotation={[1.61, 0.24, -0.8]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder738.geometry}
        material={materials.sugar2}
        position={[-0.04, 0.21, 0.08]}
        rotation={[1.53, -0.33, 2.77]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder740.geometry}
        material={materials.sugar2}
        position={[0.09, 0.34, 0.08]}
        rotation={[1.62, -0.75, -1.01]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder745.geometry}
        material={materials.sugar2}
        position={[0.15, 0.21, -0.01]}
        rotation={[1.88, -0.21, -1.42]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder748.geometry}
        material={materials.sugar2}
        position={[-0.01, 0.24, 0.08]}
        rotation={[1.13, -0.33, 2.35]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder021.geometry}
        material={materials.sugar3}
        position={[0.07, 0.33, 0.09]}
        rotation={[1.96, -0.03, 2.72]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder043.geometry}
        material={materials.sugar3}
        position={[0.12, 0.36, 0.16]}
        rotation={[1.48, 0.12, 2.69]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder047.geometry}
        material={materials.sugar3}
        position={[0.01, 0.3, 0.14]}
        rotation={[2.18, -0.03, -2.13]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder052.geometry}
        material={materials.sugar3}
        position={[0.17, 0.27, 0.09]}
        rotation={[2, -0.23, 2.9]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder060.geometry}
        material={materials.sugar3}
        position={[0.14, 0.34, 0.08]}
        rotation={[1.51, 0.01, -2.49]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder081.geometry}
        material={materials.sugar3}
        position={[0.01, 0.27, 0.11]}
        rotation={[1.43, -0.21, 2.99]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder112.geometry}
        material={materials.sugar3}
        position={[-0.01, 0.24, 0.16]}
        rotation={[0.99, 0.3, -3.07]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder120.geometry}
        material={materials.sugar3}
        position={[0.15, 0.26, 0.06]}
        rotation={[1.08, 0.19, 2.56]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder130.geometry}
        material={materials.sugar3}
        position={[0.2, 0.25, 0.05]}
        rotation={[1.63, -0.29, -2.43]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder136.geometry}
        material={materials.sugar3}
        position={[0.1, 0.3, 0.22]}
        rotation={[1.57, -0.09, -1.39]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder157.geometry}
        material={materials.sugar3}
        position={[-0.03, 0.23, 0.09]}
        rotation={[1.53, -0.72, 2.64]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder164.geometry}
        material={materials.sugar3}
        position={[0.12, 0.29, 0.2]}
        rotation={[1.82, 0.77, -2.06]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder181.geometry}
        material={materials.sugar3}
        position={[0.04, 0.24, 0.25]}
        rotation={[1.31, 0.17, 2.62]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder196.geometry}
        material={materials.sugar3}
        position={[0.19, 0.27, 0.22]}
        rotation={[2.06, 0.02, 3.12]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder203.geometry}
        material={materials.sugar3}
        position={[0.01, 0.26, 0.19]}
        rotation={[1.28, -0.6, -2.77]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder215.geometry}
        material={materials.sugar3}
        position={[0.1, 0.31, 0.05]}
        rotation={[2.06, -0.36, -1.65]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder224.geometry}
        material={materials.sugar3}
        position={[0.07, 0.23, 0]}
        rotation={[1.85, 0.7, -1.5]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder226.geometry}
        material={materials.sugar3}
        position={[0.18, 0.27, 0.13]}
        rotation={[1.36, 0.25, -3.04]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder248.geometry}
        material={materials.sugar3}
        position={[0.02, 0.3, 0.11]}
        rotation={[1.77, 0.45, 2.95]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder266.geometry}
        material={materials.sugar3}
        position={[0.07, 0.33, 0.08]}
        rotation={[1.11, -0.12, -2.03]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder267.geometry}
        material={materials.sugar3}
        position={[0.13, 0.29, 0.23]}
        rotation={[0.97, -0.43, -1.52]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder282.geometry}
        material={materials.sugar3}
        position={[0.14, 0.26, 0.18]}
        rotation={[2.02, 0.26, -1.45]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder296.geometry}
        material={materials.sugar3}
        position={[0.23, 0.26, 0.1]}
        rotation={[1.26, 0.2, -1.38]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder299.geometry}
        material={materials.sugar3}
        position={[-0.01, 0.25, 0.09]}
        rotation={[1.08, 0.22, -1.31]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder320.geometry}
        material={materials.sugar3}
        position={[0.16, 0.22, 0]}
        rotation={[1.67, -0.44, -3.14]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder341.geometry}
        material={materials.sugar3}
        position={[-0.04, 0.22, 0.18]}
        rotation={[1.45, -0.18, -0.96]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder350.geometry}
        material={materials.sugar3}
        position={[0.09, 0.31, 0.05]}
        rotation={[1.49, 0.07, -3.13]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder358.geometry}
        material={materials.sugar3}
        position={[-0.03, 0.24, 0.18]}
        rotation={[1.83, 0.63, -3.08]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder361.geometry}
        material={materials.sugar3}
        position={[-0.03, 0.21, 0.21]}
        rotation={[1.57, -0.79, -1.96]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder383.geometry}
        material={materials.sugar3}
        position={[0.13, 0.07, 0.29]}
        rotation={[1.92, -0.15, -1.11]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder388.geometry}
        material={materials.sugar3}
        position={[-0.01, 0.24, 0.16]}
        rotation={[2.18, -0.01, -1]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder391.geometry}
        material={materials.sugar3}
        position={[0.21, 0.28, 0.15]}
        rotation={[1.5, 0.27, -2.69]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder392.geometry}
        material={materials.sugar3}
        position={[0, 0.25, 0.07]}
        rotation={[1.82, 0.66, -2.6]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder398.geometry}
        material={materials.sugar3}
        position={[0.16, 0.32, 0.09]}
        rotation={[1.72, -0.01, -1.61]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder423.geometry}
        material={materials.sugar3}
        position={[0.13, 0.29, 0.19]}
        rotation={[1.54, 0.27, 2.86]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder432.geometry}
        material={materials.sugar3}
        position={[0.12, 0.24, 0]}
        rotation={[0.93, -0.02, 2.92]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder443.geometry}
        material={materials.sugar3}
        position={[0.11, 0.27, 0.25]}
        rotation={[1.4, 0.15, -0.83]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder455.geometry}
        material={materials.sugar3}
        position={[0.12, 0.24, 0.29]}
        rotation={[1.88, 0.43, -2.33]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder458.geometry}
        material={materials.sugar3}
        position={[0.03, 0.25, 0.04]}
        rotation={[1.31, -0.08, -1.79]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder473.geometry}
        material={materials.sugar3}
        position={[0.12, 0.07, 0.18]}
        rotation={[1.24, -0.7, -2.79]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder492.geometry}
        material={materials.sugar3}
        position={[0.18, 0.07, 0.26]}
        rotation={[1.45, -0.04, -2.42]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder504.geometry}
        material={materials.sugar3}
        position={[0.05, 0.32, 0.07]}
        rotation={[2.01, 0.02, -2.83]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder507.geometry}
        material={materials.sugar3}
        position={[0.11, 0.31, 0.17]}
        rotation={[1.1, 0.06, -2.63]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder509.geometry}
        material={materials.sugar3}
        position={[0.11, 0.29, 0.24]}
        rotation={[1.74, 0.06, -2.37]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder511.geometry}
        material={materials.sugar3}
        position={[0.07, 0.31, 0.06]}
        rotation={[1.61, 0.25, -2.69]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder513.geometry}
        material={materials.sugar3}
        position={[0.24, 0.24, 0.17]}
        rotation={[1.6, -0.44, -2.56]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder515.geometry}
        material={materials.sugar3}
        position={[0.09, 0.33, 0.15]}
        rotation={[1.48, 0.62, 2.52]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder518.geometry}
        material={materials.sugar3}
        position={[0.2, 0.28, 0.11]}
        rotation={[1.99, -0.42, -1.13]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder521.geometry}
        material={materials.sugar3}
        position={[-0.04, 0.22, 0.16]}
        rotation={[1.42, -0.73, -2.44]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder523.geometry}
        material={materials.sugar3}
        position={[0.09, 0.27, 0.16]}
        rotation={[1.47, -0.03, -1.98]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder526.geometry}
        material={materials.sugar3}
        position={[0.08, 0.28, 0.24]}
        rotation={[2.37, -0.2, -2.65]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder529.geometry}
        material={materials.sugar3}
        position={[-0.01, 0.24, 0.09]}
        rotation={[2.23, -0.31, -2.41]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder532.geometry}
        material={materials.sugar3}
        position={[0.11, 0.25, 0.26]}
        rotation={[0.92, 0.21, -3.09]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder536.geometry}
        material={materials.sugar3}
        position={[0.07, 0.29, 0.23]}
        rotation={[1.89, -0.75, 2.68]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder538.geometry}
        material={materials.sugar3}
        position={[0.04, 0.31, 0.18]}
        rotation={[2.27, 0.42, -2.53]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder540.geometry}
        material={materials.sugar3}
        position={[0.15, 0.33, 0.17]}
        rotation={[1.34, -0.11, -1.54]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder543.geometry}
        material={materials.sugar3}
        position={[0.14, 0.25, 0.26]}
        rotation={[1.62, 0.37, -2.77]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder546.geometry}
        material={materials.sugar3}
        position={[-0.03, 0.23, 0.07]}
        rotation={[2.12, -0.17, -3.09]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder548.geometry}
        material={materials.sugar3}
        position={[0.14, 0.35, 0.11]}
        rotation={[1.69, -0.6, 3.07]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder552.geometry}
        material={materials.sugar3}
        position={[-0.02, 0.24, 0.09]}
        rotation={[1.77, 0.33, 2.95]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder557.geometry}
        material={materials.sugar3}
        position={[0.04, 0.33, 0.13]}
        rotation={[1.69, 0.68, -1.79]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder560.geometry}
        material={materials.sugar3}
        position={[0.03, 0.25, 0.06]}
        rotation={[1.82, 0.41, -2.48]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder563.geometry}
        material={materials.sugar3}
        position={[-0.02, 0.24, 0.17]}
        rotation={[2.09, -0.3, -2.71]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder567.geometry}
        material={materials.sugar3}
        position={[0.17, 0.24, 0.25]}
        rotation={[2.3, -0.13, -2.15]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder570.geometry}
        material={materials.sugar3}
        position={[0.02, 0.22, 0.01]}
        rotation={[1.75, -0.47, -2.1]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder574.geometry}
        material={materials.sugar3}
        position={[0.21, 0.28, 0.14]}
        rotation={[1.77, 0.33, -1.16]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder577.geometry}
        material={materials.sugar3}
        position={[0.03, 0.28, 0.07]}
        rotation={[2.24, 0.43, -2.97]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder580.geometry}
        material={materials.sugar3}
        position={[0.1, 0.26, 0.26]}
        rotation={[1.69, 0.56, 2.49]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder582.geometry}
        material={materials.sugar3}
        position={[0.13, 0.3, 0.21]}
        rotation={[1.44, 0.64, -2.47]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder585.geometry}
        material={materials.sugar3}
        position={[0.09, 0.33, 0.07]}
        rotation={[1.45, 0.51, -0.63]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder587.geometry}
        material={materials.sugar3}
        position={[0.04, 0.33, 0.11]}
        rotation={[1.11, -0.57, -2.49]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder590.geometry}
        material={materials.sugar3}
        position={[0.21, 0.28, 0.16]}
        rotation={[1.52, -0.25, -2.97]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder593.geometry}
        material={materials.sugar3}
        position={[0.21, 0.22, 0.03]}
        rotation={[1.9, 0.55, 2.41]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder596.geometry}
        material={materials.sugar3}
        position={[0.15, 0.29, 0.2]}
        rotation={[1.55, 0.14, -3.05]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder598.geometry}
        material={materials.sugar3}
        position={[0.03, 0.31, 0.12]}
        rotation={[1.4, 0.24, -2.67]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder601.geometry}
        material={materials.sugar3}
        position={[0.18, 0.27, 0.23]}
        rotation={[2.35, 0.13, -1.47]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder604.geometry}
        material={materials.sugar3}
        position={[0.12, 0.34, 0.07]}
        rotation={[1.28, -0.03, -2.49]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder607.geometry}
        material={materials.sugar3}
        position={[-0.01, 0.23, 0.21]}
        rotation={[1.14, -0.32, -2.7]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder609.geometry}
        material={materials.sugar3}
        position={[0.22, 0.07, 0.21]}
        rotation={[2.05, -0.61, -1.36]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder612.geometry}
        material={materials.sugar3}
        position={[0.11, 0.34, 0.1]}
        rotation={[1.45, -0.62, -1.72]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder614.geometry}
        material={materials.sugar3}
        position={[-0.05, 0.22, 0.18]}
        rotation={[2.05, 0.01, -2.54]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder618.geometry}
        material={materials.sugar3}
        position={[0.05, 0.29, 0.21]}
        rotation={[1.8, 0.54, -2.21]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder621.geometry}
        material={materials.sugar3}
        position={[0.17, 0.34, 0.13]}
        rotation={[1.6, 0.1, -2.99]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder624.geometry}
        material={materials.sugar3}
        position={[0.18, 0.29, 0.21]}
        rotation={[1.73, -0.73, 2.73]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder627.geometry}
        material={materials.sugar3}
        position={[0.1, 0.34, 0.08]}
        rotation={[1.8, 0.44, -2.25]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder630.geometry}
        material={materials.sugar3}
        position={[0.12, 0.25, 0.26]}
        rotation={[1.98, -0.03, -2.11]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder632.geometry}
        material={materials.sugar3}
        position={[0.11, 0.29, 0.19]}
        rotation={[1.62, 0.29, -2.8]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder636.geometry}
        material={materials.sugar3}
        position={[0.08, 0.23, -0.01]}
        rotation={[1.93, -0.72, -3.04]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder638.geometry}
        material={materials.sugar3}
        position={[-0.01, 0.22, 0.04]}
        rotation={[1.65, -0.27, 2.42]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder641.geometry}
        material={materials.sugar3}
        position={[0.02, 0.24, 0.22]}
        rotation={[1.47, -0.07, 1.87]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder645.geometry}
        material={materials.sugar3}
        position={[0.08, 0.33, 0.08]}
        rotation={[1.51, 0.42, 2.16]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder649.geometry}
        material={materials.sugar3}
        position={[0.2, 0.28, 0.19]}
        rotation={[2.14, -0.38, -0.66]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder654.geometry}
        material={materials.sugar3}
        position={[0.11, 0.34, 0.08]}
        rotation={[1.02, -0.38, -1.4]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder656.geometry}
        material={materials.sugar3}
        position={[0.06, 0.31, 0.18]}
        rotation={[1.25, 0.32, -1.85]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder661.geometry}
        material={materials.sugar3}
        position={[0.16, 0.35, 0.12]}
        rotation={[1.38, 0, 2.95]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder664.geometry}
        material={materials.sugar3}
        position={[0.14, 0.27, 0.05]}
        rotation={[1.12, -0.05, -2.94]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder665.geometry}
        material={materials.sugar3}
        position={[0.15, 0.33, 0.07]}
        rotation={[1.81, 0.14, -1.42]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder667.geometry}
        material={materials.sugar3}
        position={[0.09, 0.24, 0.26]}
        rotation={[2.05, -0.31, -1.83]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder669.geometry}
        material={materials.sugar3}
        position={[0.08, 0.24, 0.26]}
        rotation={[1.82, 0.33, -1.94]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder673.geometry}
        material={materials.sugar3}
        position={[0.17, 0.32, 0.11]}
        rotation={[1.35, -0.15, 2.97]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder676.geometry}
        material={materials.sugar3}
        position={[0.05, 0.25, 0.04]}
        rotation={[1.48, 0, 3.03]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder679.geometry}
        material={materials.sugar3}
        position={[0.12, 0.07, 0.12]}
        rotation={[1.27, -0.16, -2.91]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder683.geometry}
        material={materials.sugar3}
        position={[0.16, 0.07, 0.27]}
        rotation={[2.01, -0.62, -2.67]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder687.geometry}
        material={materials.sugar3}
        position={[-0.01, 0.25, 0.15]}
        rotation={[0.89, 0.18, -1.33]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder689.geometry}
        material={materials.sugar3}
        position={[0.12, 0.34, 0.11]}
        rotation={[1.57, 0.36, -1.93]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder695.geometry}
        material={materials.sugar3}
        position={[0.18, 0.07, 0.25]}
        rotation={[2.14, -0.31, -1.45]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder698.geometry}
        material={materials.sugar3}
        position={[0.02, 0.31, 0.12]}
        rotation={[2.11, 0.53, 3.11]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder700.geometry}
        material={materials.sugar3}
        position={[0.16, 0.31, 0.16]}
        rotation={[1.26, -0.08, 3.09]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder703.geometry}
        material={materials.sugar3}
        position={[0.21, 0.27, 0.2]}
        rotation={[1.17, 0.29, -2.92]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder708.geometry}
        material={materials.sugar3}
        position={[0.05, 0.25, 0.03]}
        rotation={[1.29, -0.27, -2.37]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder710.geometry}
        material={materials.sugar3}
        position={[0.07, 0.24, 0.25]}
        rotation={[1.58, -0.66, -2.79]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder712.geometry}
        material={materials.sugar3}
        position={[0.11, 0.25, 0.27]}
        rotation={[1.79, 0.11, -1.65]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder713.geometry}
        material={materials.sugar3}
        position={[-0.01, 0.24, 0.07]}
        rotation={[2.21, -0.21, -1.23]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder716.geometry}
        material={materials.sugar3}
        position={[0.25, 0.22, 0.11]}
        rotation={[2, 0, -2.03]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder719.geometry}
        material={materials.sugar3}
        position={[0.05, 0.26, 0.04]}
        rotation={[2, -0.01, -2.88]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder721.geometry}
        material={materials.sugar3}
        position={[0.17, 0.25, 0.15]}
        rotation={[1.5, 0.42, -2.4]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder723.geometry}
        material={materials.sugar3}
        position={[-0.05, 0.23, 0.15]}
        rotation={[1.99, -0.35, -1.91]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder726.geometry}
        material={materials.sugar3}
        position={[0.25, 0.21, 0.14]}
        rotation={[1.31, 0.56, -1.95]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder729.geometry}
        material={materials.sugar3}
        position={[0.09, 0.3, 0.22]}
        rotation={[0.92, -0.06, -2.49]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder732.geometry}
        material={materials.sugar3}
        position={[0.02, 0.26, 0.21]}
        rotation={[1.68, -0.07, 2.89]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder736.geometry}
        material={materials.sugar3}
        position={[0, 0.23, 0.23]}
        rotation={[0.95, -0.05, 3.05]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder741.geometry}
        material={materials.sugar3}
        position={[0.12, 0.32, 0.05]}
        rotation={[1.63, -0.08, -0.59]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder743.geometry}
        material={materials.sugar3}
        position={[-0.02, 0.25, 0.12]}
        rotation={[1.2, 0.2, 2.85]}
        scale={0}
      />
      <mesh
        geometry={nodes.Cylinder746.geometry}
        material={materials.sugar3}
        position={[0.08, 0.31, 0.06]}
        rotation={[1.18, -0.57, 2.88]}
        scale={0}
      />
    </group>
  );
}

useGLTF.preload('/cupcake.gltf')
