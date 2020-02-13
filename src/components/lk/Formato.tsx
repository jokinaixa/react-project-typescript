import React from "react";

import { NumeroTarjetaFormat } from "./NumeroTarjetaFormat";

export const Formato: React.SFC = () => {
  const numeroTarjeta = "1234567890123456";

  return (
    <div className="App">
      <NumeroTarjetaFormat numeroTarjeta={numeroTarjeta} />
    </div>
  )
}

export default Formato;