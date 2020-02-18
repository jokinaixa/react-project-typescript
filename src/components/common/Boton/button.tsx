import React from 'react';
import "./Boton.css";

type MyProps = {
  label?: string;
};

function Button(props: MyProps) {
  return <div data-testid="button" className="button-style">{props.label}</div>
}

export default Button;