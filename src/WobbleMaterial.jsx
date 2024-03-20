import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
// drei의 WobbleMaterial
function WobbleMaterial() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      <mesh>
        <torusGeometry />
        <MeshWobbleMaterial factor={0.5} speed={20} />
      </mesh>
    </>
  );
}

export default WobbleMaterial;
