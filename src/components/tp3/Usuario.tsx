import React from 'react';

interface UsuarioProps {
  usuario: {
    nombre: string;
    edad: number;
    email: string;
    direccion: string;
    telefono: number;
  };
}

const Usuario: React.FC<UsuarioProps> = ({ usuario }) => {
  return (
    <div>
      <h1>Información del usuario:</h1>
      <p>Nombre: {usuario.nombre}</p>
      <p>Edad: {usuario.edad}</p>
      <p>Email: {usuario.email}</p>
      <p>Direccion: {usuario.direccion}</p>
      <p>Telefono: {usuario.telefono}</p>
      
    </div>
  );
};

export default Usuario;
