import React, { useState } from "react";

import Combo from "../common/Combo";
import depositosData from "../../data/depositos.fake.json";

export const ComboDepositos: React.SFC = () => {
  const [valor, setValor] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValor(event.target.value);
  };

  return (
    <div>
      <label htmlFor="tarjetas">Depositos</label>
      <Combo
        nombre="depositos"
        identificador="depositos"
        handleChange={handleChange}
        valor={valor}
      >
        <option value="">Seleccione un deposito</option>
        {depositosData.depositos.map(deposito => (
          <option value={deposito.numero} key={deposito.id}>
            {deposito.alias}
          </option>
        ))}
      </Combo>
      <p>{valor}</p>
    </div>
  );
};

export default ComboDepositos;
