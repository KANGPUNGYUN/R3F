import { Edges, MeshDiscardMaterial, OrbitControls } from "@react-three/drei";
// drei의 DiscardMaterial
function DiscardMaterial() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      <mesh>
        <torusGeometry />
        <MeshDiscardMaterial />
        {/*재질은 보이지 않지만 그림자는 표현할 수 있다. meshStandardMaterial의
          visible={false}는 재질과 그림자 모두 표현하지 않고 있다. */}
        <Edges />
      </mesh>
    </>
  );
}

export default DiscardMaterial;
