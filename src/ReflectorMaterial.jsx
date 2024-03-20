import { MeshReflectorMaterial, OrbitControls } from "@react-three/drei";
// drei의 ReflectorMaterial
function ReflectorMaterial() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      <mesh position={[0, -0.6, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[10, 10]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={0}
          mixStrength={800}
          roughness={0.1}
          depthScale={0.9}
          minDepthThreshold={0.5}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="skyblue" />
      </mesh>
    </>
  );
}

export default ReflectorMaterial;
