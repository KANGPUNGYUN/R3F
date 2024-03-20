import { Environment, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";
import * as THREE from "three";
// 4. rectAreaLight 설정방식
// import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";
// import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";

const torusGeometry = new THREE.TorusGeometry(0.4, 0.1, 32, 32);
const torusMaterial = new THREE.MeshStandardMaterial({
  color: "#9b59b6",
  roughness: 0.5,
  metalness: 0.9,
});

// 4. rectAreaLight 설정방식
// RectAreaLightUniformsLib.init();

function Light() {
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const smallSpherePivot = state.scene.getObjectByName("smallSpherePivot");
    smallSpherePivot.rotation.y = THREE.MathUtils.degToRad(time * 100);
    // 1. directionalLight 설정 방식
    // smallSpherePivot.children[0].getWorldPosition(
    //   light.current.target.position
    // );

    // 2. pointLight 설정 방식
    // smallSpherePivot.children[0].getWorldPosition(light.current.position);

    // 3. spotLight 설정 방식
    // smallSpherePivot.children[0].getWorldPosition(
    //   light.current.target.position
    // );
  });

  //   const light = useRef();

  //   1. directionalLight 설정 방식
  //   useHelper(light, THREE.DirectionalLightHelper);
  //   const { scene } = useThree();
  //   useEffect(() => {
  //     scene.add(light.current.target);
  //     return () => {
  //       scene.remove(light.current.target);
  //     };
  //   }, [light]);

  //   2. pointLight 설정 방식
  //   useHelper(light, THREE.PointLightHelper, 0.5);

  //   3. spotLight 설정 방식
  //   useHelper(light, THREE.SpotLightHelper);
  //   const { scene } = useThree();
  //   useEffect(() => {
  //     scene.add(light.current.target);
  //     return () => {
  //       scene.remove(light.current.target);
  //     };
  //   }, [light]);

  //   4. rectAreaLight 설정 방식
  //   useHelper(light, RectAreaLightHelper);

  return (
    <>
      <OrbitControls />
      {/* <ambientLight color="#ff0000" intensity={5} /> // ambientLight:주변광. color를 통해 색상을 설정하고,intensity를 통해 조명의 강도값을 설정한다. */}

      {/* <hemisphereLight args={["#00f", "#f00", 5]} /> // hemisphereLight:주변광. 색상 2개를 설정할 수 있다. */}

      {/* <directionalLight
        ref={light}
        color={0xffffff}
        intensity={1}
        position={[0, 5, 0]}
        target-position={[1, 0, 0]}
      />  //directionalLight:특정한 방향으로 향하는 빛. position으로 광원의 위치를 설정하고, target-position을 통해 타겟의 위치를 설정할 수 있다. */}

      {/* <pointLight
        ref={light}
        color="#ffffff"
        intensity={5}
        position={[0, 5, 0]}
        distance={0}
      /> // pointLight: 모든 방향으로 비추는 빛.(ex: 별) distance를 통해 빛이 도달하는 거리를 설정할 수 있다.*/}

      {/* <spotLight
        ref={light}
        color={0xffffff}
        intensity={100}
        position={[0, 5, 0]}
        target-position={[0, 0, 0]}
        distance={0}
        angle={THREE.MathUtils.degToRad(40)}
        penumbra={0.2}
      /> // spotLight: 손전등과 같이 빛에서 멀어질수록 크기가 커지는 원뿔 형태의 빛. angle로 원뿔의 조명각을 설정하고, penumbra로 부드러운 그림자 페이드 아웃 정도를 설정한다. */}

      {/* <rectAreaLight
        ref={light}
        color="#ffffff"
        intensity={20}
        width={1}
        height={3}
        position={[0, 5, 0]}
        rotation-x={THREE.MathUtils.degToRad(-90)}
      /> // rectAreaLight: 형광등. 형광등의 너비와 크기도 설정할 수 있음 */}

      <Environment
        files={"./images/cayley_interior_4k.hdr"}
        background
        blur={0.1}
      />
      {/* Environment를 사용하면 주변 환경과 환경에서 받은 빛을 활용한 조명을 얻을 수 있다. blur처리도 가능하다. */}

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
    </>
  );
}

export default Light;
