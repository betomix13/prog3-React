import React from "react";
import AutosComponent from "./components/AutoComponent/AutoComponent";
import Escuela from "./components/Escuela/Escuela";

const Ejercicio2: React.FC = () => {
  return <div>
    <div className="App">
      <AutosComponent />
    </div>
    <div className="App">
      <Escuela />
    </div>
  </div>;
};
export default Ejercicio2;