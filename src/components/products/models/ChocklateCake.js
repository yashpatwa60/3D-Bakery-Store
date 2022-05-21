import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/chocklate_cake.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.base_stand_0.geometry} material={materials.stand} />
          </group>
          <group position={[0, 82.96, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={79.62}>
            <mesh geometry={nodes.first_first_0.geometry} material={materials.first} />
          </group>
          <group position={[14.74, 123.97, 0]} rotation={[-Math.PI / 2, 0.22, -Math.PI]} scale={60.55}>
            <mesh geometry={nodes.second_second_0.geometry} material={materials.second} />
          </group>
          <group position={[14.74, 159.75, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={47.78}>
            <mesh geometry={nodes.third_first_0.geometry} material={materials.first} />
          </group>
          <group position={[-1.55, 8.99, -83.8]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[82.7, 8.99, 0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere002_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-82.7, 8.99, 0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere003_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-10.24, 8.99, -82.91]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere004_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-19.58, 8.99, -81.13]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere005_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-28.52, 8.99, -78.74]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere006_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-36.87, 8.99, -74.87]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere007_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-45.07, 8.99, -70.25]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere008_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-52.52, 8.99, -64.44]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere009_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-59.82, 8.99, -58.47]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere010_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-65.78, 8.99, -51.02]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere011_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-71.44, 8.99, -43.27]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere012_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-75.92, 8.99, -34.93]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere013_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-79.34, 8.99, -25.99]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere014_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-81.88, 8.99, -16.89]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere015_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-82.62, 8.99, -8.55]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere016_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[82.92, 9.27, -9.66]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere017_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[81.48, 9.34, -18.52]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere018_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[78.52, 8.99, -27.44]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere019_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[74.84, 8.99, -35.98]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere020_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[70.82, 8.99, -44.12]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere021_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[65.59, 8.99, -51.5]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere022_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[59.96, 8.99, -58.3]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere023_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[53.16, 8.99, -64.09]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere024_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[46.41, 8.99, -69.67]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere025_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[38.6, 8.99, -74.05]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere026_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[30.48, 8.99, -77.98]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere027_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[22.24, 8.99, -80.6]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere028_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[13.43, 8.99, -82.66]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere029_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[6.12, 8.99, -83.37]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere030_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[5.07, 8.99, 83.63]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere001_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-82.02, 8.99, 9.83]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere031_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[83.37, 8.99, 9.12]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere032_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[13.25, 8.99, 82.86]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere033_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[21.1, 8.99, 80.97]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere034_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[29.53, 8.99, 78.81]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere035_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[37.86, 8.99, 75.26]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere036_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[52.66, 8.99, 64.16]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere037_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[45.6, 8.99, 70.12]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere038_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[59.7, 8.99, 58.98]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere040_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[65.86, 8.99, 51.92]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere041_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[71.55, 8.99, 44.09]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere042_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[75.84, 8.99, 35.13]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere043_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[78.87, 8.99, 26.03]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere044_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[81.54, 8.99, 17.68]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere045_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-81.17, 9.27, 19.5]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere046_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-78.66, 9.34, 28.35]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere047_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-74.89, 8.99, 37.02]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere048_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-70.4, 8.99, 45.04]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere049_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-64.99, 8.99, 52.29]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere050_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-58.98, 8.99, 59.4]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere051_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-51.84, 8.99, 65.56]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere052_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-44.76, 8.99, 71.57]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere053_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-36.62, 8.99, 75.38]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere054_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-28.42, 8.99, 78.98]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere055_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-19.79, 8.99, 81.39]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere056_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-10.79, 8.99, 83.6]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere057_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-2.36, 8.99, 83.94]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere059_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-1.79, 8.98, -93.31]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere174_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[91.99, 8.98, -0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere175_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-92.11, 8.98, -0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere176_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-11.45, 8.98, -92.32]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere177_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-21.85, 8.98, -90.33]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere178_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-31.8, 8.98, -87.68]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere179_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-41.09, 8.98, -83.37]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere180_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-50.22, 8.98, -78.22]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere181_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-58.51, 8.98, -71.75]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere182_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-66.64, 8.98, -65.12]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere183_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-73.28, 8.98, -56.83]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere184_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-79.58, 8.98, -48.2]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere185_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-84.56, 8.98, -38.91]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere186_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-88.37, 8.98, -28.96]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere187_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-91.19, 8.98, -18.84]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere188_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-92.02, 8.98, -9.55]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere189_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[92.24, 9.3, -10.79]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere190_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[90.63, 9.37, -20.65]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere191_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[87.34, 8.98, -30.58]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere192_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[83.24, 8.98, -40.08]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere193_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[78.77, 8.98, -49.14]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere194_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[72.95, 8.98, -57.36]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere195_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[66.69, 8.98, -64.93]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere196_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[59.11, 8.98, -71.37]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere197_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[51.6, 8.98, -77.58]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere198_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[42.9, 8.98, -82.45]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere199_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[33.87, 8.98, -86.83]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere200_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[24.7, 8.98, -89.74]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere201_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[14.89, 8.98, -92.04]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere202_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[6.76, 8.98, -92.83]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere203_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[5.58, 8.98, 93.06]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere204_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-91.35, 8.98, 10.9]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere205_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[92.74, 8.98, 10.12]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere206_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[14.69, 8.98, 92.19]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere207_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[23.42, 8.98, 90.09]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere208_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[32.81, 8.98, 87.68]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere209_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[42.08, 8.98, 83.73]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere210_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[58.55, 8.98, 71.38]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere211_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[50.69, 8.98, 78.02]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere212_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[66.39, 8.98, 65.61]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere213_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[73.25, 8.98, 57.75]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere214_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[79.58, 8.98, 49.04]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere215_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[84.35, 8.98, 39.07]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere216_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[87.73, 8.98, 28.94]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere217_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[90.7, 8.98, 19.65]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere218_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-90.41, 9.3, 21.67]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere219_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-87.61, 9.37, 31.52]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere220_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-83.42, 8.98, 41.17]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere221_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-78.41, 8.98, 50.09]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere222_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-72.39, 8.98, 58.17]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere223_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-65.71, 8.98, 66.09]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere224_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-57.75, 8.98, 72.94]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere225_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-49.88, 8.98, 79.63]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere226_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-40.82, 8.98, 83.87]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere227_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-31.69, 8.98, 87.87]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere228_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-22.08, 8.98, 90.56]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere229_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-12.07, 8.98, 93.01]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere230_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-2.69, 8.98, 93.39]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere231_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-1.55, 17.23, -83.8]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere232_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[82.7, 17.23, 0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere233_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-82.7, 17.23, 0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere234_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-10.24, 17.23, -82.91]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere235_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-19.58, 17.23, -81.13]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere236_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-28.52, 17.23, -78.74]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere237_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-36.87, 17.23, -74.87]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere238_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-45.07, 17.23, -70.25]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere239_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-52.52, 17.23, -64.44]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere240_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-59.82, 17.23, -58.47]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere241_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-65.78, 17.23, -51.02]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere242_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-71.44, 17.23, -43.27]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere243_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-75.92, 17.23, -34.93]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere244_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-79.34, 17.23, -25.99]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere245_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-81.88, 17.23, -16.89]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere246_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-82.62, 17.23, -8.55]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere247_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[82.92, 17.51, -9.66]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere248_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[81.48, 17.58, -18.52]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere249_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[78.52, 17.23, -27.44]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere250_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[74.84, 17.23, -35.98]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere251_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[70.82, 17.23, -44.12]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere252_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[65.59, 17.23, -51.5]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere253_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[59.96, 17.23, -58.3]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere254_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[53.16, 17.23, -64.09]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere255_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[46.41, 17.23, -69.67]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere256_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[38.6, 17.23, -74.05]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere257_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[30.48, 17.23, -77.98]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere258_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[22.24, 17.23, -80.6]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere259_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[13.43, 17.23, -82.66]} rotation={[-1.69, 0.12, -1.54]} scale={4.63}>
            <mesh geometry={nodes.Sphere260_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[6.12, 17.23, -83.37]} rotation={[-Math.PI / 2, 0, 0]} scale={4.63}>
            <mesh geometry={nodes.Sphere261_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[5.07, 17.23, 83.63]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere262_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-82.02, 17.23, 9.83]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere263_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[83.37, 17.23, 9.12]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere264_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[13.25, 17.23, 82.86]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere265_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[21.1, 17.23, 80.97]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere266_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[29.53, 17.23, 78.81]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere267_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[37.86, 17.23, 75.26]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere268_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[52.66, 17.23, 64.16]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere269_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[45.6, 17.23, 70.12]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere270_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[59.7, 17.23, 58.98]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere271_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[65.86, 17.23, 51.92]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere272_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[71.55, 17.23, 44.09]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere273_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[75.84, 17.23, 35.13]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere274_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[78.87, 17.23, 26.03]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere275_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[81.54, 17.23, 17.68]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere276_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-81.17, 17.51, 19.5]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere277_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-78.66, 17.58, 28.35]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere278_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-74.89, 17.23, 37.02]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere279_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-70.4, 17.23, 45.04]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere280_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-64.99, 17.23, 52.29]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere281_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-58.98, 17.23, 59.4]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere282_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-51.84, 17.23, 65.56]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere283_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-44.76, 17.23, 71.57]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere284_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-36.62, 17.23, 75.38]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere285_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-28.42, 17.23, 78.98]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere286_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-19.79, 17.23, 81.39]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere287_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-10.79, 17.23, 83.6]} rotation={[-1.46, -0.12, 1.61]} scale={4.63}>
            <mesh geometry={nodes.Sphere288_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-2.36, 17.23, 83.94]} rotation={[-Math.PI / 2, 0, -3.14]} scale={4.63}>
            <mesh geometry={nodes.Sphere289_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-1.79, 17.23, -93.31]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere290_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[91.99, 17.23, -0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere291_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-92.11, 17.23, -0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere292_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-11.45, 17.23, -92.32]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere293_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-21.85, 17.23, -90.33]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere294_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-31.8, 17.23, -87.68]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere295_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-41.09, 17.23, -83.37]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere296_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-50.22, 17.23, -78.22]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere297_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-58.51, 17.23, -71.75]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere298_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-66.64, 17.23, -65.12]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere299_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-73.28, 17.23, -56.83]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere300_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-79.58, 17.23, -48.2]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere301_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-84.56, 17.23, -38.91]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere302_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-88.37, 17.23, -28.96]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere303_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-91.19, 17.23, -18.84]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere304_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-92.02, 17.23, -9.55]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere305_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[92.24, 17.54, -10.79]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere306_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[90.63, 17.61, -20.65]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere307_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[87.34, 17.23, -30.58]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere308_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[83.24, 17.23, -40.08]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere309_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[78.77, 17.23, -49.14]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere310_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[72.95, 17.23, -57.36]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere311_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[66.69, 17.23, -64.93]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere312_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[59.11, 17.23, -71.37]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere313_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[51.6, 17.23, -77.58]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere314_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[42.9, 17.23, -82.45]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere315_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[33.87, 17.23, -86.83]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere316_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[24.7, 17.23, -89.74]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere317_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[14.89, 17.23, -92.04]} rotation={[-1.69, 0.12, -1.54]} scale={5.15}>
            <mesh geometry={nodes.Sphere318_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[6.76, 17.23, -92.83]} rotation={[-Math.PI / 2, 0, 0]} scale={5.15}>
            <mesh geometry={nodes.Sphere319_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[5.58, 17.23, 93.06]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere320_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-91.35, 17.23, 10.9]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere321_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[92.74, 17.23, 10.12]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere322_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[14.69, 17.23, 92.19]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere323_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[23.42, 17.23, 90.09]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere324_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[32.81, 17.23, 87.68]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere325_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[42.08, 17.23, 83.73]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere326_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[58.55, 17.23, 71.38]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere327_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[50.69, 17.23, 78.02]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere328_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[66.39, 17.23, 65.61]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere329_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[73.25, 17.23, 57.75]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere330_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[79.58, 17.23, 49.04]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere331_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[84.35, 17.23, 39.07]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere332_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[87.73, 17.23, 28.94]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere333_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[90.7, 17.23, 19.65]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere334_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-90.41, 17.54, 21.67]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere335_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-87.61, 17.61, 31.52]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere336_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-83.42, 17.23, 41.17]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere337_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-78.41, 17.23, 50.09]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere338_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-72.39, 17.23, 58.17]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere339_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-65.71, 17.23, 66.09]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere340_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-57.75, 17.23, 72.94]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere341_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-49.88, 17.23, 79.63]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere342_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-40.82, 17.23, 83.87]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere343_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-31.69, 17.23, 87.87]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere344_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-22.08, 17.23, 90.56]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere345_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-12.07, 17.23, 93.01]} rotation={[-1.46, -0.12, 1.61]} scale={5.15}>
            <mesh geometry={nodes.Sphere346_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-2.69, 17.23, 93.39]} rotation={[-Math.PI / 2, 0, -3.14]} scale={5.15}>
            <mesh geometry={nodes.Sphere347_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[3.21, 76.28, -66.22]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere039_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[68.13, 61.22, 0.07]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere058_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-59.32, 90.78, 0.07]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere060_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-3.48, 77.83, -65.52]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere061_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-10.68, 79.5, -64.11]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere062_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-17.57, 81.1, -62.22]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere063_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-24, 82.59, -59.16]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere064_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-30.32, 84.05, -55.5]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere065_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-36.06, 85.38, -50.91]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere066_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-41.69, 86.69, -46.19]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere067_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-46.28, 87.75, -40.3]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere068_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-50.65, 88.77, -34.17]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere069_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-54.09, 89.57, -27.56]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere070_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-56.73, 90.18, -20.49]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere071_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-58.68, 90.63, -13.3]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere072_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-59.26, 90.76, -6.7]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere073_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[68.35, 61.39, -7.58]} rotation={[-1.69, 0.35, -1.51]} scale={3.66}>
            <mesh geometry={nodes.Sphere074_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[67.25, 61.71, -14.58]} rotation={[-1.69, 0.35, -1.51]} scale={3.66}>
            <mesh geometry={nodes.Sphere075_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[64.91, 61.97, -21.65]} rotation={[-1.69, 0.35, -1.51]} scale={3.66}>
            <mesh geometry={nodes.Sphere076_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[62.07, 62.62, -28.39]} rotation={[-1.69, 0.35, -1.51]} scale={3.66}>
            <mesh geometry={nodes.Sphere077_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[58.97, 63.34, -34.83]} rotation={[-1.69, 0.35, -1.51]} scale={3.66}>
            <mesh geometry={nodes.Sphere078_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[54.95, 64.28, -40.67]} rotation={[-1.69, 0.35, -1.51]} scale={3.66}>
            <mesh geometry={nodes.Sphere079_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[50.61, 65.28, -46.06]} rotation={[-1.69, 0.35, -1.51]} scale={3.66}>
            <mesh geometry={nodes.Sphere080_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[45.37, 66.5, -50.63]} rotation={[-1.69, 0.35, -1.51]} scale={3.66}>
            <mesh geometry={nodes.Sphere081_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[40.17, 67.7, -55.04]} rotation={[-1.69, 0.35, -1.51]} scale={3.66}>
            <mesh geometry={nodes.Sphere082_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[34.15, 69.1, -58.51]} rotation={[-1.69, 0.35, -1.51]} scale={3.66}>
            <mesh geometry={nodes.Sphere083_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[27.89, 70.55, -61.62]} rotation={[-1.69, 0.35, -1.51]} scale={3.66}>
            <mesh geometry={nodes.Sphere084_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[21.55, 72.02, -63.69]} rotation={[-1.69, 0.35, -1.51]} scale={3.66}>
            <mesh geometry={nodes.Sphere085_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[14.75, 73.6, -65.32]} rotation={[-1.69, 0.35, -1.51]} scale={3.66}>
            <mesh geometry={nodes.Sphere086_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[9.12, 74.9, -65.88]} rotation={[-Math.PI / 2, 0.23, 0]} scale={3.66}>
            <mesh geometry={nodes.Sphere087_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[8.31, 75.09, 66.22]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere088_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-58.8, 90.66, 7.84]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere089_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[68.65, 61.1, 7.28]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere090_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[14.61, 73.63, 65.6]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere091_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[20.66, 72.23, 64.11]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere092_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[27.16, 70.72, 62.4]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere093_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[33.58, 69.23, 59.59]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere094_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[44.98, 66.59, 50.82]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere095_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[39.54, 67.85, 55.53]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere096_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[50.4, 65.33, 46.71]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere097_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[55.16, 64.23, 41.13]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere098_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[59.54, 63.21, 34.94]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere099_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[62.84, 62.44, 27.85]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere100_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[65.17, 61.9, 20.65]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere101_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[67.24, 61.42, 14.05]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere102_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-58.09, 90.72, 15.49]} rotation={[-1.46, 0.1, 1.58]} scale={3.66}>
            <mesh geometry={nodes.Sphere103_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-56.14, 90.33, 22.49]} rotation={[-1.46, 0.1, 1.58]} scale={3.66}>
            <mesh geometry={nodes.Sphere104_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-53.3, 89.38, 29.34]} rotation={[-1.46, 0.1, 1.58]} scale={3.66}>
            <mesh geometry={nodes.Sphere105_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-49.84, 88.58, 35.69]} rotation={[-1.46, 0.1, 1.58]} scale={3.66}>
            <mesh geometry={nodes.Sphere106_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-45.67, 87.61, 41.42]} rotation={[-1.46, 0.1, 1.58]} scale={3.66}>
            <mesh geometry={nodes.Sphere107_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-41.04, 86.54, 47.05]} rotation={[-1.46, 0.1, 1.58]} scale={3.66}>
            <mesh geometry={nodes.Sphere108_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-35.54, 85.26, 51.92]} rotation={[-1.46, 0.1, 1.58]} scale={3.66}>
            <mesh geometry={nodes.Sphere109_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-30.08, 84, 56.68]} rotation={[-1.46, 0.1, 1.58]} scale={3.66}>
            <mesh geometry={nodes.Sphere110_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-23.81, 82.54, 59.69]} rotation={[-1.46, 0.1, 1.58]} scale={3.66}>
            <mesh geometry={nodes.Sphere111_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-17.49, 81.08, 62.54]} rotation={[-1.46, 0.1, 1.58]} scale={3.66}>
            <mesh geometry={nodes.Sphere112_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-10.84, 79.53, 64.44]} rotation={[-1.46, 0.1, 1.58]} scale={3.66}>
            <mesh geometry={nodes.Sphere113_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-3.91, 77.93, 66.19]} rotation={[-1.46, 0.1, 1.58]} scale={3.66}>
            <mesh geometry={nodes.Sphere114_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[2.59, 76.42, 66.46]} rotation={[-Math.PI / 2, 0.23, -3.14]} scale={3.66}>
            <mesh geometry={nodes.Sphere115_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[12.1, 119.39, -50]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere116_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[62.49, 119.72, 0.13]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere117_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-36.44, 119.08, 0.13]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere118_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[6.9, 119.36, -49.47]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere119_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[1.31, 119.32, -48.41]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere120_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-4.03, 119.29, -46.98]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere121_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-9.03, 119.26, -44.66]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere122_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-13.93, 119.22, -41.9]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere123_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-18.39, 119.2, -38.42]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere124_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-22.75, 119.17, -34.86]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere125_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-26.32, 119.14, -30.4]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere126_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-29.71, 119.12, -25.76]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere127_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-32.38, 119.11, -20.77]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere128_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-34.43, 119.09, -15.42]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere129_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-35.95, 119.08, -9.98]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere130_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-36.39, 119.08, -4.99]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere131_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[62.62, 119.89, -5.66]} rotation={[-1.69, 0.12, -1.54]} scale={2.77}>
            <mesh geometry={nodes.Sphere132_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[61.76, 119.92, -10.96]} rotation={[-1.69, 0.12, -1.54]} scale={2.77}>
            <mesh geometry={nodes.Sphere133_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[59.99, 119.7, -16.3]} rotation={[-1.69, 0.12, -1.54]} scale={2.77}>
            <mesh geometry={nodes.Sphere134_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[57.79, 119.69, -21.4]} rotation={[-1.69, 0.12, -1.54]} scale={2.77}>
            <mesh geometry={nodes.Sphere135_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[55.38, 119.67, -26.27]} rotation={[-1.69, 0.12, -1.54]} scale={2.77}>
            <mesh geometry={nodes.Sphere136_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[52.26, 119.65, -30.68]} rotation={[-1.69, 0.12, -1.54]} scale={2.77}>
            <mesh geometry={nodes.Sphere137_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[48.89, 119.63, -34.75]} rotation={[-1.69, 0.12, -1.54]} scale={2.77}>
            <mesh geometry={nodes.Sphere138_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[44.82, 119.6, -38.22]} rotation={[-1.69, 0.12, -1.54]} scale={2.77}>
            <mesh geometry={nodes.Sphere139_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[40.79, 119.58, -41.55]} rotation={[-1.69, 0.12, -1.54]} scale={2.77}>
            <mesh geometry={nodes.Sphere140_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[36.11, 119.55, -44.17]} rotation={[-1.69, 0.12, -1.54]} scale={2.77}>
            <mesh geometry={nodes.Sphere141_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[31.26, 119.52, -46.53]} rotation={[-1.69, 0.12, -1.54]} scale={2.77}>
            <mesh geometry={nodes.Sphere142_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[26.33, 119.48, -48.09]} rotation={[-1.69, 0.12, -1.54]} scale={2.77}>
            <mesh geometry={nodes.Sphere143_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[21.06, 119.45, -49.32]} rotation={[-1.69, 0.12, -1.54]} scale={2.77}>
            <mesh geometry={nodes.Sphere144_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[16.69, 119.42, -49.74]} rotation={[-Math.PI / 2, -0.01, 0]} scale={2.77}>
            <mesh geometry={nodes.Sphere145_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[16.06, 119.42, 50.15]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere146_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-36.03, 119.08, 6]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere147_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[62.89, 119.72, 5.58]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere148_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[20.95, 119.45, 49.68]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere149_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[25.65, 119.48, 48.55]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere150_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[30.69, 119.51, 47.26]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere151_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[35.67, 119.54, 45.13]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere152_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[44.52, 119.6, 38.5]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere153_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[40.3, 119.57, 42.06]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere154_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[48.73, 119.63, 35.4]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere155_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[52.42, 119.65, 31.18]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere156_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[55.82, 119.67, 26.49]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere157_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[58.39, 119.69, 21.14]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere158_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[60.2, 119.7, 15.69]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere159_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[61.8, 119.71, 10.7]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere160_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-35.53, 119.25, 11.79]} rotation={[-1.46, -0.13, 1.61]} scale={2.77}>
            <mesh geometry={nodes.Sphere161_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-34.03, 119.3, 17.08]} rotation={[-1.46, -0.13, 1.61]} scale={2.77}>
            <mesh geometry={nodes.Sphere162_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-31.77, 119.11, 22.26]} rotation={[-1.46, -0.13, 1.61]} scale={2.77}>
            <mesh geometry={nodes.Sphere163_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-29.08, 119.13, 27.06]} rotation={[-1.46, -0.13, 1.61]} scale={2.77}>
            <mesh geometry={nodes.Sphere164_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-25.84, 119.15, 31.4]} rotation={[-1.46, -0.13, 1.61]} scale={2.77}>
            <mesh geometry={nodes.Sphere165_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-22.25, 119.17, 35.65]} rotation={[-1.46, -0.13, 1.61]} scale={2.77}>
            <mesh geometry={nodes.Sphere166_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-17.98, 119.2, 39.34]} rotation={[-1.46, -0.13, 1.61]} scale={2.77}>
            <mesh geometry={nodes.Sphere167_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-13.75, 119.23, 42.93]} rotation={[-1.46, -0.13, 1.61]} scale={2.77}>
            <mesh geometry={nodes.Sphere168_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-8.88, 119.26, 45.21]} rotation={[-1.46, -0.13, 1.61]} scale={2.77}>
            <mesh geometry={nodes.Sphere169_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-3.97, 119.29, 47.36]} rotation={[-1.46, -0.13, 1.61]} scale={2.77}>
            <mesh geometry={nodes.Sphere170_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[1.19, 119.32, 48.8]} rotation={[-1.46, -0.13, 1.61]} scale={2.77}>
            <mesh geometry={nodes.Sphere171_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[6.57, 119.36, 50.12]} rotation={[-1.46, -0.13, 1.61]} scale={2.77}>
            <mesh geometry={nodes.Sphere172_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[11.61, 119.39, 50.33]} rotation={[-Math.PI / 2, -0.01, -3.14]} scale={2.77}>
            <mesh geometry={nodes.Sphere173_mala_1_0.geometry} material={materials.mala_1} />
          </group>
          <group position={[-22.81, 169.2, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 13.57]}>
            <mesh geometry={nodes.candle_candle_0.geometry} material={materials.candle} />
            <mesh geometry={nodes.candle_candle2_0.geometry} material={materials.candle2} />
            <mesh geometry={nodes.candle_black_0.geometry} material={materials.black} />
            <mesh geometry={nodes.candle_yellow_0.geometry} material={materials.yellow} />
          </group>
          <group position={[53.76, 151.21, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 13.57]}>
            <mesh geometry={nodes.candle001_candle_0.geometry} material={materials.candle} />
            <mesh geometry={nodes.candle001_candle2_0.geometry} material={materials.candle2} />
            <mesh geometry={nodes.candle001_black_0.geometry} material={materials.black} />
            <mesh geometry={nodes.candle001_yellow_0.geometry} material={materials.yellow} />
          </group>
          <group position={[17.11, 160.37, -35.67]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 13.57]}>
            <mesh geometry={nodes.candle002_candle_0.geometry} material={materials.candle} />
            <mesh geometry={nodes.candle002_candle2_0.geometry} material={materials.candle2} />
            <mesh geometry={nodes.candle002_black_0.geometry} material={materials.black} />
            <mesh geometry={nodes.candle002_yellow_0.geometry} material={materials.yellow} />
          </group>
          <group position={[17.11, 160.04, 36.98]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 13.57]}>
            <mesh geometry={nodes.candle003_candle_0.geometry} material={materials.candle} />
            <mesh geometry={nodes.candle003_candle2_0.geometry} material={materials.candle2} />
            <mesh geometry={nodes.candle003_black_0.geometry} material={materials.black} />
            <mesh geometry={nodes.candle003_yellow_0.geometry} material={materials.yellow} />
          </group>
          <group position={[36.09, 155.46, 32.07]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 13.57]}>
            <mesh geometry={nodes.candle004_candle_0.geometry} material={materials.candle} />
            <mesh geometry={nodes.candle004_candle2_0.geometry} material={materials.candle2} />
            <mesh geometry={nodes.candle004_black_0.geometry} material={materials.black} />
            <mesh geometry={nodes.candle004_yellow_0.geometry} material={materials.yellow} />
          </group>
          <group position={[49.18, 152.19, 19.63]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 13.57]}>
            <mesh geometry={nodes.candle005_candle_0.geometry} material={materials.candle} />
            <mesh geometry={nodes.candle005_candle2_0.geometry} material={materials.candle2} />
            <mesh geometry={nodes.candle005_black_0.geometry} material={materials.black} />
            <mesh geometry={nodes.candle005_yellow_0.geometry} material={materials.yellow} />
          </group>
          <group position={[-14.96, 169.2, -17.67]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 13.57]}>
            <mesh geometry={nodes.candle006_candle_0.geometry} material={materials.candle} />
            <mesh geometry={nodes.candle006_candle2_0.geometry} material={materials.candle2} />
            <mesh geometry={nodes.candle006_black_0.geometry} material={materials.black} />
            <mesh geometry={nodes.candle006_yellow_0.geometry} material={materials.yellow} />
          </group>
          <group position={[-1.87, 164.62, -30.11]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 13.57]}>
            <mesh geometry={nodes.candle007_candle_0.geometry} material={materials.candle} />
            <mesh geometry={nodes.candle007_candle2_0.geometry} material={materials.candle2} />
            <mesh geometry={nodes.candle007_black_0.geometry} material={materials.black} />
            <mesh geometry={nodes.candle007_yellow_0.geometry} material={materials.yellow} />
          </group>
          <group position={[35.02, 151.21, -28.59]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 13.57]}>
            <mesh geometry={nodes.candle008_candle_0.geometry} material={materials.candle} />
            <mesh geometry={nodes.candle008_candle2_0.geometry} material={materials.candle2} />
            <mesh geometry={nodes.candle008_black_0.geometry} material={materials.black} />
            <mesh geometry={nodes.candle008_yellow_0.geometry} material={materials.yellow} />
          </group>
          <group position={[48.08, 151.21, -15.91]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 13.57]}>
            <mesh geometry={nodes.candle009_candle_0.geometry} material={materials.candle} />
            <mesh geometry={nodes.candle009_candle2_0.geometry} material={materials.candle2} />
            <mesh geometry={nodes.candle009_black_0.geometry} material={materials.black} />
            <mesh geometry={nodes.candle009_yellow_0.geometry} material={materials.yellow} />
          </group>
          <group position={[-15.55, 166.92, 17.99]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 13.57]}>
            <mesh geometry={nodes.candle010_candle_0.geometry} material={materials.candle} />
            <mesh geometry={nodes.candle010_candle2_0.geometry} material={materials.candle2} />
            <mesh geometry={nodes.candle010_black_0.geometry} material={materials.black} />
            <mesh geometry={nodes.candle010_yellow_0.geometry} material={materials.yellow} />
          </group>
          <group position={[-2.48, 164.08, 30.68]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 13.57]}>
            <mesh geometry={nodes.candle011_candle_0.geometry} material={materials.candle} />
            <mesh geometry={nodes.candle011_candle2_0.geometry} material={materials.candle2} />
            <mesh geometry={nodes.candle011_black_0.geometry} material={materials.black} />
            <mesh geometry={nodes.candle011_yellow_0.geometry} material={materials.yellow} />
          </group>
          <group position={[14.55, 152.56, 0]} rotation={[-Math.PI / 2, 0.23, 0]} scale={47.39}>
            <mesh geometry={nodes.Topping1_topping1_0.geometry} material={materials.topping1} />
          </group>
          <group position={[12.45, 113, 0]} rotation={[-Math.PI / 2, -0.01, -Math.PI]} scale={59.42}>
            <mesh geometry={nodes.Topping1001_topping1_0.geometry} material={materials.topping1} />
          </group>
          <group position={[0.25, 69.04, 0]} rotation={[-Math.PI / 2, 0.23, 0]} scale={79.89}>
            <mesh geometry={nodes.Topping1002_topping1_0.geometry} material={materials.topping1} />
          </group>
          <group position={[-68.32, 89.77, 21.66]} rotation={[-Math.PI / 2, 0, 0]} scale={[4.86, 4.86, 2.35]}>
            <mesh geometry={nodes.Sphere348_blue_0.geometry} material={materials.blue} />
          </group>
          <group position={[-68.44, 90.03, -21.48]} rotation={[-Math.PI / 2, 0, 0]} scale={[4.86, 4.86, 2.35]}>
            <mesh geometry={nodes.Sphere349_orange_0.geometry} material={materials.orange} />
          </group>
          <group position={[-44.92, 83.99, -58.27]} rotation={[-1.61, 0.07, 0.04]} scale={[4.86, 4.86, 2.35]}>
            <mesh geometry={nodes.Sphere350_red_0.geometry} material={materials.material} />
          </group>
          <group position={[-5.97, 75.4, -74.68]} rotation={[-1.68, 0.04, 0.01]} scale={[4.86, 4.86, 2.35]}>
            <mesh geometry={nodes.Sphere351_dpink_0.geometry} material={materials.dpink} />
          </group>
          <group position={[-44.36, 84.32, 58.62]} rotation={[-1.4, 0.17, -0.1]} scale={[4.86, 4.86, 2.35]}>
            <mesh geometry={nodes.Sphere352_red_0.geometry} material={materials.material} />
          </group>
          <group position={[-3.85, 74.3, 76.22]} rotation={[-1.28, 0.22, -0.17]} scale={[4.86, 4.86, 2.35]}>
            <mesh geometry={nodes.Sphere353_dpink_0.geometry} material={materials.dpink} />
          </group>
          <group position={[36.4, 64.69, -67.2]} rotation={[-1.74, 0.39, 0.16]} scale={[4.86, 4.86, 2.35]}>
            <mesh geometry={nodes.Sphere354_orange_0.geometry} material={materials.orange} />
          </group>
          <group position={[36.48, 64.58, 67.71]} rotation={[-1.33, 0.36, -0.31]} scale={[4.86, 4.86, 2.35]}>
            <mesh geometry={nodes.Sphere355_orange_0.geometry} material={materials.orange} />
          </group>
          <group position={[66.42, 57.73, 37.47]} rotation={[-1.42, 0.72, -0.37]} scale={[4.86, 4.86, 2.35]}>
            <mesh geometry={nodes.Sphere356_blue_0.geometry} material={materials.blue} />
          </group>
          <group position={[76.71, 55.39, 6.85]} rotation={[-1.42, 0.72, -0.37]} scale={[4.86, 4.86, 2.35]}>
            <mesh geometry={nodes.Sphere357_red_0.geometry} material={materials.material} />
          </group>
          <group position={[67.67, 57.48, -35.64]} rotation={[-1.72, 0.48, -0.54]} scale={[4.86, 4.86, 2.35]}>
            <mesh geometry={nodes.Sphere358_dpink_0.geometry} material={materials.dpink} />
          </group>
          <group position={[-41.83, 116.63, 16.14]} rotation={[-Math.PI / 2, -0.27, 0]} scale={[3.56, 3.56, 1.72]}>
            <mesh geometry={nodes.Sphere359_blue_0.geometry} material={materials.blue} />
          </group>
          <group position={[-42.18, 116.83, -15.45]} rotation={[-Math.PI / 2, -0.27, 0]} scale={[3.56, 3.56, 1.72]}>
            <mesh geometry={nodes.Sphere360_orange_0.geometry} material={materials.orange} />
          </group>
          <group position={[-24.64, 117.38, -42.4]} rotation={[-1.61, -0.2, 0.03]} scale={[3.56, 3.56, 1.72]}>
            <mesh geometry={nodes.Sphere361_red_0.geometry} material={materials.material} />
          </group>
          <group position={[7.34, 116.71, -57.19]} rotation={[-1.69, -0.22, -0.02]} scale={[3.56, 3.56, 1.72]}>
            <mesh geometry={nodes.Sphere362_dpink_0.geometry} material={materials.dpink} />
          </group>
          <group position={[-24.02, 116.58, 43.67]} rotation={[-1.4, -0.09, -0.05]} scale={[3.56, 3.56, 1.72]}>
            <mesh geometry={nodes.Sphere363_red_0.geometry} material={materials.material} />
          </group>
          <group position={[9.05, 116.75, 57.52]} rotation={[-1.29, -0.04, -0.1]} scale={[3.56, 3.56, 1.72]}>
            <mesh geometry={nodes.Sphere364_dpink_0.geometry} material={materials.dpink} />
          </group>
          <group position={[39.34, 116.72, -50.01]} rotation={[-1.72, 0.13, 0.12]} scale={[3.56, 3.56, 1.72]}>
            <mesh geometry={nodes.Sphere365_orange_0.geometry} material={materials.orange} />
          </group>
          <group position={[39.42, 117.22, 50.94]} rotation={[-1.35, 0.1, -0.25]} scale={[3.56, 3.56, 1.72]}>
            <mesh geometry={nodes.Sphere366_orange_0.geometry} material={materials.orange} />
          </group>
          <group position={[62.86, 118.14, 27.72]} rotation={[-1.44, 0.46, -0.33]} scale={[3.56, 3.56, 1.72]}>
            <mesh geometry={nodes.Sphere367_blue_0.geometry} material={materials.blue} />
          </group>
          <group position={[69.62, 118.46, 5.29]} rotation={[-1.44, 0.46, -0.33]} scale={[3.56, 3.56, 1.72]}>
            <mesh geometry={nodes.Sphere368_red_0.geometry} material={materials.material} />
          </group>
          <group position={[62.83, 118.2, -25.83]} rotation={[-1.7, 0.22, -0.58]} scale={[3.56, 3.56, 1.72]}>
            <mesh geometry={nodes.Sphere369_dpink_0.geometry} material={materials.dpink} />
          </group>
          <group position={[19.46, 160.13, 16.71]} rotation={[-1.89, 0.46, 2.09]} scale={[6.63, 4.93, 6.63]}>
            <mesh geometry={nodes.Sphere370_choco_0.geometry} material={materials.choco} />
          </group>
          <group position={[13.34, 160.77, 16.62]} rotation={[-1.61, -0.2, 0.99]} scale={[6.63, 4.93, 6.63]}>
            <mesh geometry={nodes.Sphere371_choco_0.geometry} material={materials.choco} />
          </group>
          <group position={[13.34, 160.69, -18.45]} rotation={[-1.18, -0.26, -1.04]} scale={[6.63, 4.93, 6.63]}>
            <mesh geometry={nodes.Sphere372_choco_0.geometry} material={materials.choco} />
          </group>
          <group position={[19.47, 160.21, -18.8]} rotation={[-1.49, 0.39, -2.09]} scale={[6.63, 4.93, 6.63]}>
            <mesh geometry={nodes.Sphere373_choco_0.geometry} material={materials.choco} />
          </group>
          <group position={[34.22, 154.39, -3.14]} rotation={[-2.07, -0.26, -2.81]} scale={[6.63, 4.93, 6.63]}>
            <mesh geometry={nodes.Sphere374_choco_0.geometry} material={materials.choco} />
          </group>
          <group position={[33.82, 155.03, 2.97]} rotation={[-1.37, -0.04, 2.52]} scale={[6.63, 4.93, 6.63]}>
            <mesh geometry={nodes.Sphere375_choco_0.geometry} material={materials.choco} />
          </group>
          <group position={[-1.2, 163.39, 1.2]} rotation={[-1.27, 0.36, 0.37]} scale={[6.63, 4.93, 6.63]}>
            <mesh geometry={nodes.Sphere376_choco_0.geometry} material={materials.choco} />
          </group>
          <group position={[-1.24, 162.91, -4.94]} rotation={[-1.96, 0.09, -0.53]} scale={[6.63, 4.93, 6.63]}>
            <mesh geometry={nodes.Sphere377_choco_0.geometry} material={materials.choco} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/chocklate_cake.gltf')
