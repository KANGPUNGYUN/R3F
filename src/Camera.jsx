import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
// import { useControls } from "leva";

const torusGeometry = new THREE.TorusGeometry(0.4, 0.1, 32, 32);
const torusMaterial = new THREE.MeshStandardMaterial({
  color: "#9b59b6",
  roughness: 0.5,
  metalness: 0.9,
});

RectAreaLightUniformsLib.init();

function Camera() {
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const smallSpherePivot = state.scene.getObjectByName("smallSpherePivot");
    smallSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 100);

    const target = new THREE.Vector3();
    smallSpherePivot.children[0].getWorldPosition(target);
    state.camera.position.copy(target);

    const ghostSpherePivot = state.scene.getObjectByName("ghostSpherePivot");
    ghostSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 100 + 30);
    ghostSpherePivot.children[0].getWorldPosition(target);
    state.camera.lookAt(target);
  });

  const light = useRef();
  useHelper(light, RectAreaLightHelper);

  //   카메라 위치 조절 UI 생성
  //   const { camera } = useThree();

  //   useControls({
  //     positionZ: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //       onChange: (v) => (camera.position.z = v),
  //     },
  //     targetZ: {
  //       value: 0,
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //       onChange: (v) => camera.lookAt(0, 0, v),
  //     },
  //   });

  return (
    <>
      {/* <OrbitControls /> */}

      <rectAreaLight
        ref={light}
        color="#ffffff"
        intensity={20}
        width={1}
        height={3}
        position={[0, 5, 0]}
        rotation-x={THREE.MathUtils.degToRad(-90)}
      />

      <mesh rotation-x={THREE.MathUtils.degToRad(-90)}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#2c3e50"
          roughness={0.5}
          metalness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh rotation-x={THREE.MathUtils.degToRad(-90)}>
        <sphereGeometry args={[1.5, 64, 64, 0, Math.PI]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.2} />
      </mesh>

      {new Array(8).fill().map((item, index) => {
        return (
          <group key={index} rotation-y={THREE.MathUtils.degToRad(45 * index)}>
            <mesh
              geometry={torusGeometry}
              material={torusMaterial}
              position={[3, 0.5, 0]}
            />
          </group>
        );
      })}

      <group name="smallSpherePivot">
        <mesh position={[3, 0.5, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color="#e74c3c"
            roughness={0.2}
            metalness={0.5}
          />
        </mesh>
      </group>

      <group name="ghostSpherePivot">
        <object3D position={[3, 0.5, 0]} />
      </group>
    </>
  );
}

export default Camera;
