import React, { useState } from 'react';

interface CuentaBancariaProps {
  inicial: number;
}

const CuentaBancaria: React.FC<CuentaBancariaProps> = ({ inicial }) => {
  const [fondos, setFondos] = useState<number>(inicial);
  const [montoIngresar, setMontoIngresar] = useState<string>('');
  const [montoRetirar, setMontoRetirar] = useState<string>('');

  const asignarFondos = () => {
    const monto = parseInt(montoIngresar);
    if (monto > 500000) {
      dispararAlarma('Asignación de fondos excesiva');
    } else {
      setFondos(fondos + monto);
      setMontoIngresar('');
    }
  };

  const sacarFondos = () => {
    const monto = parseInt(montoRetirar);
    if (monto > fondos) {
      dispararAlarma('Fondos insuficientes');
    } else if (monto > 100000) {
      dispararAlarma('Retiro de fondos excesivo');
    } else {
      setFondos(fondos - monto);
      setMontoRetirar('');
    }
  };

  const dispararAlarma = (mensaje: string) => {
    alert(mensaje);
  };

  return (
    <div className='container'>
      <h2>Cuenta Bancaria</h2>
      <p>Fondos disponibles: {fondos}</p>

      <div>
        <h3>Ingresar Fondos</h3>
        <input
          type="text"
          value={montoIngresar}
          onChange={(e) => setMontoIngresar(e.target.value)}
          placeholder="Monto a ingresar"
        />
        <button onClick={asignarFondos}>Ingresar Fondos</button>
      </div>

      <div>
        <h3>Retirar Fondos</h3>
        <input
          type="text"
          value={montoRetirar}
          onChange={(e) => setMontoRetirar(e.target.value)}
          placeholder="Monto a retirar"
        />
        <button onClick={sacarFondos}>Retirar Fondos</button>
      </div>
    </div>
  );
};

export default CuentaBancaria;
