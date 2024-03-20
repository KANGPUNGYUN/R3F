import { Canvas } from "@react-three/fiber";
import "./App.css";
import CustomMaterial from "./CustomMaterial";

function App() {
  return (
    <>
      <Canvas>
        <CustomMaterial />
      </Canvas>
    </>
  );
}

export default App;
