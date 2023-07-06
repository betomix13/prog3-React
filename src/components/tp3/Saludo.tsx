import React from 'react';

interface SaludoProps {
  nombre: string;
}

const Saludo: React.FC<SaludoProps> = ({ nombre }) => {
  return <h1>Hola, {nombre}!</h1>;
};

export default Saludo;
