import { Canvas } from "@react-three/fiber";
import "./App.css";
import MatcapMaterial from "./MatcapMaterial";

function App() {
  return (
    <>
      <Canvas>
        <MatcapMaterial />
      </Canvas>
    </>
  );
}

export default App;
