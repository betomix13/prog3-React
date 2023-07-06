import React, { useState, useEffect } from 'react';

const Reloj: React.FC = () => {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{hora.toLocaleTimeString()}</div>;
};

export default Reloj;
