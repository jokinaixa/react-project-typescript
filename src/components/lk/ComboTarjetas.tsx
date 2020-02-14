import React, { useState } from "react";

import Combo from "../common/Combo";
import { Input } from "../common/Input/Input";
import tarjetasData from "../../data/tarjetas.fake.json";
import { NumeroTarjetaFormat } from "./NumeroTarjetaFormat";

export const ComboTarjetas: React.SFC = () => {
  const [valor, setValor] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValor(event.target.value);
  };

  return (
    <div>
      <label htmlFor="tarjetas">Tarjetas</label>
      <Combo
        nombre="tarjetas"
        identificador="tarjetas"
        handleChange={handleChange}
        valor={valor}
      >
        <option value="">Seleccione una tarjeta</option>
        {tarjetasData.tarjetas.map((tarjeta, index) => (
          <option value={tarjeta.numero} key={index}>
            {tarjeta.descripcion}
          </option>
        ))}
      </Combo>
      <p><NumeroTarjetaFormat numeroTarjeta={valor} /></p>
      <Input name={"hola"} type={"text"} errorMessage={'prueba'} />
    </div>
  );
};

export default ComboTarjetas;
