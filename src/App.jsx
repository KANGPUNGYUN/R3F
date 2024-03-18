import { Canvas } from "@react-three/fiber";
import "./App.css";
import MyCylinder from "./MyCylinder";

function App() {
  return (
    <>
      <Canvas>
        <MyCylinder />
      </Canvas>
    </>
  );
}

export default App;
