import { OrbitControls, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function CustomMaterial() {
  const textures = useTexture({
    map: "./images/glass/Glass_Window_002_basecolor.jpg",
    roughnessMap: "./images/glass/Glass_Window_002_roughness.jpg",
    metalnessMap: "./images/glass/Glass_Window_002_metallic.jpg",
    normalMap: "./images/glass/Glass_Window_002_normal.jpg",
    displacementMap: "./images/glass/Glass_Window_002_height.png",
    aoMap: "./images/glass/Glass_Window_002_ambientOcclusion.jpg",
    alphaMap: "./images/glass/Glass_Window_002_opacity.jpg",
  });

  const mesh = useRef();

  useEffect(() => {
    textures.map.repeat.x =
      textures.roughnessMap.repeat.x =
      textures.metalnessMap.repeat.x =
      textures.normalMap.repeat.x =
      textures.map.repeat.x =
      textures.displacementMap.repeat.x =
      textures.aoMap.repeat.x =
      textures.alphaMap.repeat.x =
        4;

    textures.map.wrapS =
      textures.roughnessMap.wrapS =
      textures.metalnessMap.wrapS =
      textures.normalMap.wrapS =
      textures.map.wrapS =
      textures.displacementMap.wrapS =
      textures.aoMap.wrapS =
      textures.alphaMap.wrapS =
        THREE.MirroredRepeatWrapping;

    textures.map.needsUpdate =
      textures.roughnessMap.needsUpdate =
      textures.metalnessMap.needsUpdate =
      textures.normalMap.needsUpdate =
      textures.map.needsUpdate =
      textures.displacementMap.needsUpdate =
      textures.aoMap.needsUpdate =
      textures.alphaMap.needsUpdate =
        true;

    mesh.current.geometry.setAttribute(
      "uv2",
      new THREE.BufferAttribute(mesh.current.geometry.attributes.uv.array, 2)
    );
  }, []);

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 1, -8]} intensity={0.4} />
      <directionalLight position={[1, 2, 8]} intensity={0.4} />

      <mesh ref={mesh}>
        <cylinderGeometry args={[2, 2, 3, 256, 256, true]} />
        <meshStandardMaterial
          side={THREE.DoubleSide}
          map={textures.map}
          roughnessMap={textures.roughnessMap}
          roughnessMap-colorSpace={THREE.NoColorSpace} // 따로 지정하지 않으면 mesh 전체가 동일한 거칠기로 표현되는데, 색상 공간을 지정해주어야 공간에 따른 거칠기가 올바르게 표현됨
          metalnessMap={textures.metalnessMap}
          metalness={0.5}
          metalnessMap-colorSpace={THREE.NoColorSpace}
          normalMap={textures.normalMap}
          normalMap-colorSpace={THREE.NoColorSpace}
          normalScale={1}
          displacementMap={textures.displacementMap}
          displacementMap-colorSpace={THREE.NoColorSpace}
          displacementScale={0.2}
          displacementBias={-0.2}
          aoMap={textures.aoMap}
          alphaMap={textures.alphaMap}
          transparent
          alphaToCoverage
        />
      </mesh>
    </>
  );
}

export default CustomMaterial;
