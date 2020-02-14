import React from "react";
import { Card } from "react-bootstrap";

type MyProps = {
  children: React.ReactNode;
};

function Tarjetas(props: MyProps) {
  return (
    <Card style={{ marginBottom: '2rem' }}>
      <div>{props.children}</div>
    </Card>
  );
}

export default Tarjetas;