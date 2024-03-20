import { Canvas } from "@react-three/fiber";
import "./App.css";
import Light from "./Light";

function App() {
  return (
    <>
      <Canvas
        camera={{
          fov: 75,
          position: [7, 7, 0],
        }}
      >
        <Light />
      </Canvas>
    </>
  );
}

export default App;
