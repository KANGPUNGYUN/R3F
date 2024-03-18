import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three"; // (N * Math.PI) / 180 => THREE.MathUtils.degToRad(N)

function MyElement3D() {
  const refMesh1 = useRef();
  const refMesh2 = useRef();
  const refMesh3 = useRef();
  useFrame((state, delta) => {
    refMesh1.current.rotation.x -= delta;
    refMesh2.current.rotation.y += delta;
    refMesh3.current.rotation.y += delta;
  });

  return (
    <>
      <directionalLight position={[1, 1, 1]} />

      <axesHelper scale={10} />
      <OrbitControls />

      <mesh
        position-x={2}
        rotation={[
          THREE.MathUtils.degToRad(45),
          THREE.MathUtils.degToRad(45),
          0,
        ]}
        scale={[1, 1, 1]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#e67e22"
          opacity={0.3}
          transparent={true}
        />
        <axesHelper />

        <mesh ref={refMesh1} scale={[0.5, 0.5, 0.5]}>
          <torusGeometry />
          <meshStandardMaterial color="pink" />
        </mesh>
        <mesh
          ref={refMesh2}
          scale={[0.5, 0.5, 0.5]}
          rotation-z={THREE.MathUtils.degToRad(90)}
        >
          <torusGeometry />
          <meshStandardMaterial color="skyblue" />
        </mesh>
        <mesh
          ref={refMesh3}
          scale={[0.5, 0.5, 0.5]}
          rotation-x={THREE.MathUtils.degToRad(270)}
        >
          <torusGeometry />
          <meshStandardMaterial color="lightgreen" />
        </mesh>
      </mesh>
    </>
  );
}

export default MyElement3D;
