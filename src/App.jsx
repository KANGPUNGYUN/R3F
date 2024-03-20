import { Canvas } from "@react-three/fiber";
import "./App.css";
import Shadow from "./Shadow";

function App() {
  return (
    <>
      <Canvas
        // 1. canvas에서는 기본적으로 perspective camera를 제공한다.
        // camera={{
        //   fov: 130,
        //   near: 0.1,
        //   far: 20,
        //   position: [7, 7, 0],
        // }}

        // 2. orthographic속성을 사용하면 orthographic camera를 제공한다.
        // orthographic
        // camera={{
        //   near: 0.1,
        //   far: 20,
        //   zoom: 100,
        //   position: [7, 7, 0],
        // }}
        shadows
        camera={{
          near: 1,
          far: 100,
          position: [7, 7, 0],
        }}
      >
        <Shadow />
      </Canvas>
    </>
  );
}

export default App;
