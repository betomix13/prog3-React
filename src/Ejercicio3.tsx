import React from 'react';
import Saludo from './components/tp3/Saludo';
import Usuario from './components/tp3/Usuario';
import Login from './components/tp3/Login';
import Reloj from './components/tp3/Reloj';
import Imagen from './components/tp3/Imagen';

const Ejercicio3: React.FC = () => {
  const usuario = {
    nombre: 'Pedro',
    edad: 25,
    email: 'juan@example.com',
    direccion:'agua123',
    telefono: 12345
  };

  return (
    <div>
      <Saludo nombre="Juan" />
      <Usuario usuario={usuario} />
      <div>
        <h1>Formulario de inicio de sesión</h1>
        <Login />
      </div>
      <div>
        <h1>Reloj</h1>
        <Reloj />
      </div>
      <div>
      <h1>Galería de imágenes</h1>
      <div className="galeria">
        {/* Renderizar las imágenes */}
        <Imagen src="/img/imagen1.jpg" alt="Imagen 1" />
        <Imagen src="/img/imagen2.jpg" alt="Imagen 2" />
        <Imagen src="/img/imagen3.jpg" alt="Imagen 3" />
      </div>
      
    </div>
    </div>
  );
};

export default Ejercicio3;

