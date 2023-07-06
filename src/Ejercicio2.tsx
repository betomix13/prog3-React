import React, { useState } from "react";
import AutosComponent from "./components/AutoComponent/AutoComponent";
import Escuela from './components/Escuela/Escuela';
import './Ejercicio2.css';
import CuentaBancaria from "./components/Banco/CuentaBancaria";
import Figuras from "./components/Figuras/Figuras";
/*import { RectanguloComponent, CirculoComponent } from './components/Figuras/Figuras';*/
const Ejercicio2: React.FC = () => {
  
  return <div>
    <div className="App">
    <h1>Ejercicio 1</h1>
      <AutosComponent />
    </div>
    <div>
      <h1>Ejercicio 2</h1>
      <Escuela />
    </div>
    <div>
      <h1>Ejercicio 3</h1>
      <CuentaBancaria inicial={1000000} />
    </div>
    <div>
      <h1>Ejercicio4</h1>
      <Figuras/>
    </div>
    <div>
      
      
    </div>
  </div>;
};
export default Ejercicio2;