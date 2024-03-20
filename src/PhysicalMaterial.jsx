import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function PhysicalMaterial() {
  const mesh1 = useRef();
  const mesh2 = useRef();

  useEffect(() => {
    mesh2.current.material = mesh1.current.material;
  });

  const {
    roughness,
    metalness,
    clearcoat,
    clearcoatRoughness,
    transmission,
    thickness,
    ior,
  } = useControls({
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    metalness: { value: 0, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 0, min: 0, max: 1, step: 0.01 },
    clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.01 },
    transmission: { value: 0, min: 0, max: 1, step: 0.01 },
    thickness: { value: 0, min: 0, max: 10, step: 0.01 },
    ior: { value: 1.5, min: 0, max: 2.333, step: 0.01 },
  });

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      <mesh ref={mesh1} position={[0.7, 0, 0]}>
        <boxGeometry />
        <meshPhysicalMaterial
          visible={true}
          transparent={true}
          opacity={1}
          depthTest={true}
          depthWrite={true}
          side={THREE.FrontSide}
          color={0xffffff}
          wireframe={false}
          roughness={roughness}
          metalness={metalness}
          shininess={100}
          flatShading={false}
          clearcoat={clearcoat}
          clearcoatRoughness={clearcoatRoughness}
          transmission={transmission}
          thickness={thickness}
          ior={ior}
        />
      </mesh>

      <mesh ref={mesh2} position={[-0.7, 0, 0]}>
        <torusGeometry args={[0.5, 0.2]} />
      </mesh>
    </>
  );
}

export default PhysicalMaterial;
