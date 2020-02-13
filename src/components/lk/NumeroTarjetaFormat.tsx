import React from "react";

interface Props {
  numeroTarjeta: string;
}

export const NumeroTarjetaFormat: React.SFC<Props> = ({ numeroTarjeta }) => (
  <span>{formatearTarjeta(numeroTarjeta)}</span>
);

export function formatearTarjeta(value: string) {
  if (!value || value.length !== 16) {
    return value;
  }

  return (
    value.substr(0, 4) +
    ' ' +
    value.substr(4, 4) +
    ' ' +
    value.substr(8, 4) +
    ' ' +
    value.substr(12, 4)
  );
}