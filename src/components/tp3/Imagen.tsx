import React, { useState } from 'react';

interface ImagenProps {
  src: string; // Ruta de la imagen
  alt: string; // Texto alternativo de la imagen
}

const Imagen: React.FC<ImagenProps> = ({ src, alt }) => {
  const [ampliada, setAmpliada] = useState(false); // Estado para controlar si la imagen está ampliada o no

  const handleClick = () => {
    setAmpliada(!ampliada); // Cambiar el estado al hacer clic en la imagen
  };

  const imagenEstilo = {
    width: ampliada ? '400px' : '200px', // Establecer el ancho de la imagen según el estado ampliada
    height: ampliada ? 'auto' : '200px', // Establecer la altura de la imagen según el estado ampliada
    cursor: 'pointer', // Estilo para mostrar el cursor como puntero al pasar por encima de la imagen
  };

  return (
    <div>
      <img
        src={src}
        alt={alt}
        onClick={handleClick} // Manejador de eventos para hacer clic en la imagen
        style={imagenEstilo} // Estilo para mostrar el cursor como puntero al pasar por encima de la imagen
      />
      {ampliada && (
        <div className="imagen-ampliada" onClick={handleClick}>
          {/* Mostrar la imagen ampliada si está en estado ampliado */}
        </div>
      )}
    </div>
  );
};

export default Imagen;
