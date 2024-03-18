import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useRef } from "react";

function WireFrame() {
  //   1. 기존 코드 (mesh를 2번 불러와서 같은 지오메트리를 사용한 뒤, 하나는 와이어프레임만 표현하는 방법. 이 경우 같은 지오메트리가 2번 사용되어 메모리가 낭비된다.)
  //   return (
  //     <>
  //       <OrbitControls />
  //       <ambientLight intensity={0.1} />
  //       <directionalLight position={[2, 1, 3]} intensity={0.5} />
  //       <mesh>
  //         <boxGeometry />
  //         <meshStandardMaterial color="#1abc9c" />
  //       </mesh>

  //       <mesh>
  //         <boxGeometry />
  //         <meshStandardMaterial emissive="yellow" wireframe={true} />
  //       </mesh>
  //     </>
  //   );

  //   2. 대안 (useRef와 useEffect를 사용하여 같은 지오메트리로 연결)
  const refMesh = useRef();
  const refWireMesh = useRef();
  const { width, height, depth, widthSegments, heightSegments, depthSegments } =
    useControls({
      width: { value: 1, min: 0.1, max: 5, step: 0.01 },
      height: { value: 1, min: 0.1, max: 5, step: 0.01 },
      depth: { value: 1, min: 0.1, max: 5, step: 0.01 },
      widthSegments: { value: 1, min: 1, max: 10, step: 1 },
      heightSegments: { value: 1, min: 1, max: 10, step: 1 },
      depthSegments: { value: 1, min: 1, max: 10, step: 1 },
    });

  useEffect(() => {
    refWireMesh.current.geometry = refMesh.current.geometry;
  }, [width, height, depth, widthSegments, heightSegments, depthSegments]);

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 1, 3]} intensity={0.5} />
      <mesh ref={refMesh}>
        <boxGeometry
          args={[
            width,
            height,
            depth,
            widthSegments,
            heightSegments,
            depthSegments,
          ]}
        />
        <meshStandardMaterial color="#1abc9c" />
      </mesh>

      <mesh ref={refWireMesh}>
        <meshStandardMaterial emissive="yellow" wireframe={true} />
      </mesh>
    </>
  );
}

export default WireFrame;
