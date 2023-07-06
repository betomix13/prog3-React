import React, { useState } from 'react';

interface Forma {
  calcularArea(): number;
  calcularPerimetro(): number;
}

class Rectangulo implements Forma {
  constructor(private base: number, private altura: number) {}

  calcularArea(): number {
    return this.base * this.altura;
  }

  calcularPerimetro(): number {
    return 2 * (this.base + this.altura);
  }
}

class Circulo implements Forma {
  constructor(private radio: number) {}

  calcularArea(): number {
    return Math.PI * this.radio * this.radio;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

const CalculadoraFormas: React.FC = () => {
  const [baseRectangulo, setBaseRectangulo] = useState('');
  const [alturaRectangulo, setAlturaRectangulo] = useState('');
  const [radioCirculo, setRadioCirculo] = useState('');
  const [areaRectangulo, setAreaRectangulo] = useState(0);
  const [perimetroRectangulo, setPerimetroRectangulo] = useState(0);
  const [areaCirculo, setAreaCirculo] = useState(0);
  const [perimetroCirculo, setPerimetroCirculo] = useState(0);

  const calcularRectangulo = () => {
    const rectangulo = new Rectangulo(Number(baseRectangulo), Number(alturaRectangulo));
    setAreaRectangulo(rectangulo.calcularArea());
    setPerimetroRectangulo(rectangulo.calcularPerimetro());
  };

  const calcularCirculo = () => {
    const circulo = new Circulo(Number(radioCirculo));
    setAreaCirculo(circulo.calcularArea());
    setPerimetroCirculo(circulo.calcularPerimetro());
  };

  return (
    <div>
      <h2>Calculadora de formas geométricas</h2>
      <div>
        <h3>Rectángulo</h3>
        <label>Base:</label>
        <input
          type="number"
          value={baseRectangulo}
          onChange={(e) => setBaseRectangulo(e.target.value)}
        />
        <br />
        <label>Altura:</label>
        <input
          type="number"
          value={alturaRectangulo}
          onChange={(e) => setAlturaRectangulo(e.target.value)}
        />
        <br />
        <button onClick={calcularRectangulo}>Calcular</button>
        <p>Área: {areaRectangulo}</p>
        <p>Perímetro: {perimetroRectangulo}</p>
      </div>
      <div>
        <h3>Círculo</h3>
        <label>Radio:</label>
        <input
          type="number"
          value={radioCirculo}
          onChange={(e) => setRadioCirculo(e.target.value)}
        />
        <br />
        <button onClick={calcularCirculo}>Calcular</button>
        <p>Área: {areaCirculo}</p>
        <p>Perímetro: {perimetroCirculo}</p>
      </div>
    </div>
  );
};

export default CalculadoraFormas;
