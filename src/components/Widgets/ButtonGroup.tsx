import React, { useState, ChangeEvent } from "react";

const ButtonGroup: React.FC = () => {
  const [selectedOpc, setSelectedOpc] = useState<string | null>(null);

  const radioHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOpc(event.target.value);
  };

  return (
    <div className="container">
      <h3>EL CURKE.com</h3>
      <fieldset>
        <legend>selecciona tu nivel en shiac</legend>
        <p>
          <input
            type="radio"
            name="opc"
            value="PRO"
            id="opc1"
            onChange={radioHandler}
          />
          <label htmlFor="opc1">PRO</label>
        </p>

        <p>
          <input
            type="radio"
            name="opc"
            value="Ahi"
            id="opc2"
            onChange={radioHandler}
          />
          <label htmlFor="opc2">ahi</label>
        </p>

        <p>
          <input
            type="radio"
            name="opc"
            value="Que es eso?"
            id="opc3"
            onChange={radioHandler}
          />
          <label htmlFor="opc3">que es eso?</label>
        </p>
      </fieldset>

      {/* Display the selected opc */}
      {selectedOpc && <h2>{selectedOpc}</h2>}
    </div>
  );
};

export default ButtonGroup;
