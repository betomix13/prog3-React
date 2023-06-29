/*import React from 'react';

interface FormaGeometrica {
  calcularArea: () => number;
  calcularPerimetro: () => number;
}

interface Rectangulo extends FormaGeometrica {
  base: number;
  altura: number;
}

interface Circulo extends FormaGeometrica {
  radio: number;
}

export const RectanguloComponent: React.FC<Rectangulo> = ({ base, altura }) => {
  const calcularArea = () => {
    return base * altura;
  };

  const calcularPerimetro = () => {
    return 2 * (base + altura);
  };

  return (
    <div>
      <h2>Rectángulo</h2>
      <p>Base: {base}</p>
      <p>Altura: {altura}</p>
      <p>Área: {calcularArea()}</p>
      <p>Perímetro: {calcularPerimetro()}</p>
    </div>
  );
};

export const CirculoComponent: React.FC<Circulo> = ({ radio }) => {
  const calcularArea = () => {
    return Math.PI * Math.pow(radio, 2);
  };

  const calcularPerimetro = () => {
    return 2 * Math.PI * radio;
  };

  return (
    <div>
      <h2>Círculo</h2>
      <p>Radio: {radio}</p>
      <p>Área: {calcularArea()}</p>
      <p>Perímetro: {calcularPerimetro()}</p>
    </div>
  );
};*/
