import React from "react";
import styled from "styled-components";

type MyProps = {
  children: React.ReactNode;
  handleChange?:
    | ((event: React.ChangeEvent<HTMLSelectElement>) => void)
    | undefined;
  identificador: string;
  nombre: string;
  valor: string;
};

function Combo(props: MyProps) {
  return (
    <Seleccion
      name={props.nombre}
      id={props.identificador}
      onChange={props.handleChange}
      value={props.valor}
    >
      {props.children}
    </Seleccion>
  );
}

const Seleccion = styled.select`
  border: 1px solid #c1c1c1c1;
  border-radius: 4px;
  padding: 4px;
  margin: 14px 6px;
`;

export default Combo;
