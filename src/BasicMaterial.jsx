import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function BasicMaterial() {
  const mesh1 = useRef();
  const mesh2 = useRef();

  useEffect(() => {
    mesh2.current.material = mesh1.current.material;
  });

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      <mesh ref={mesh1} position={[0.7, 0, 0]}>
        <boxGeometry />
        <meshBasicMaterial
          visible={true}
          transparent={true}
          opacity={0.5}
          depthTest={true}
          depthWrite={true}
          side={THREE.DoubleSide}
          color="#ffff00"
          wireframe={false}
        />
      </mesh>

      <mesh ref={mesh2} position={[-0.7, 0, 0]}>
        <torusGeometry args={[0.5, 0.2]} />
      </mesh>
    </>
  );
}

export default BasicMaterial;
