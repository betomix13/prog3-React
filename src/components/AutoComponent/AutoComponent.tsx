import React, { Component } from 'react';

interface Auto {
  marca: string;
  modelo: string;
  potencia: number;
  maxVelocidad: number;
}

const autos: Auto[] = [
  { marca: "Toyota", modelo: "Corolla", potencia: 150, maxVelocidad: 200 },
  { marca: "Ford", modelo: "Mustang", potencia: 300, maxVelocidad: 250 },
  { marca: "Chevrolet", modelo: "Camaro", potencia: 350, maxVelocidad: 270 },
  { marca: "Honda", modelo: "Civic", potencia: 120, maxVelocidad: 180 },
  { marca: "BMW", modelo: "M3", potencia: 400, maxVelocidad: 280 }
];

class AutosComponent extends Component {
  calcularTiempo(distancia: number, auto: Auto): number {
    const tiempo = distancia / auto.maxVelocidad;
    return tiempo;
  }

  render() {
    return (
      <div className='container'>
        <h1 className='titulo'>Autos</h1>
        
        {autos.map((auto, index) => (
          <div className='item' key={index}>
            <h2>{auto.marca} {auto.modelo}</h2>
            <p>Potencia: {auto.potencia}</p>
            <p>Max. Velocidad: {auto.maxVelocidad}</p>
          </div>
        ))}
        <h1 className='titulo'>Tiempos de Recorrido</h1>
        <p className='titulo'>Distancia: 100 km</p>
        {autos.map((auto, index) => (
          <div className='item' key={index}>
            <h2>{auto.marca} {auto.modelo}</h2>
            <p>Tiempo: {this.calcularTiempo(100, auto)} horas</p>
          </div>
        ))}
      </div>
    );
  }
}

export default AutosComponent;
