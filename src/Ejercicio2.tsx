import React from "react";
import AutosComponent from "./components/AutoComponent/AutoComponent";
import Escuela from './components/Escuela/Escuela';
import './Ejercicio2.css';
import CuentaBancaria from "./components/Banco/CuentaBancaria";
/*import { RectanguloComponent, CirculoComponent } from './components/Figuras/Figuras';*/
const Ejercicio2: React.FC = () => {
  
  const rectangulo = {
    base: 5,
    altura: 3,
    calcularArea: () => {
      return 5 * 3;
    },
    calcularPerimetro: () => {
      return 2 * (5 + 3);
    },
  };

  const circulo = {
    radio: 2,
    calcularArea: () => {
      return Math.PI * Math.pow(2, 2);
    },
    calcularPerimetro: () => {
      return 2 * Math.PI * 2;
    },
  };


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
      
      
    </div>
  </div>;
};
export default Ejercicio2;