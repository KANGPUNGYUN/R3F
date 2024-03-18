import { Canvas } from "@react-three/fiber";
import "./App.css";
import WireFrame from "./WireFrame";

function App() {
  return (
    <>
      <Canvas>
        <WireFrame />
      </Canvas>
    </>
  );
}

export default App;
