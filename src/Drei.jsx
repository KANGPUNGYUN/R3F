import { Box, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function MyBox(props) {
  const geom = new THREE.BoxGeometry();
  return <mesh {...props} geometry={geom} />;
}

function Drei() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 1, 3]} intensity={0.5} />
      {/* 1. 기본 three.js로 표현한 방식 */}
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="#1abc9c" />
      </mesh>
      {/* 2. drei 라이브러리로 표현한 방식 */}
      <Box position={[1.2, 0, 0]}>
        <meshStandardMaterial color="#8244ad" />
      </Box>
      {/* 3. three.js를 재사용성을 높인 컴포넌트로 분리하여 표현한 방식 */}
      <MyBox position={[-1.2, 0, 0]}>
        <meshStandardMaterial color="#e74c3c" />
      </MyBox>
    </>
  );
}

export default Drei;
