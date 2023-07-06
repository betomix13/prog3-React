import React, { useState } from 'react';

interface ImagenProps {
  src: string;
  alt: string;
}

const Imagen: React.FC<ImagenProps> = ({ src, alt }) => {
  const [ampliada, setAmpliada] = useState(false);

  const handleClick = () => {
    setAmpliada(!ampliada);
  };

  return (
    <div>
      <img
        src={`img/${src}`}
        alt={alt}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
      {ampliada && (
        <div className="imagen-ampliada">
          <img src={src} alt={alt} />
        </div>
      )}
    </div>
  );
};

export default Imagen;
