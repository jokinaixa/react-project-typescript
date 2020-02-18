//import React, { Component } from "react";
import React from "react";

type MyProps = {
  //children: string | JSX.Element[];
  //children: React.ReactChild[];
  children: React.ReactNode;
  style: React.CSSProperties;
};

function Button(props: MyProps) {
  return <button {...props}>{props.children}</button>;
}
/*
class Botones extends Component {
render() {
    const style = {
      border : '5px solid green',
      fontSize : '32px'
    };

    return (
      <div className="App">
        <Button style={style}>
          <div>Hello</div>
          <div>Hello2</div>
        </Button>
      </div>
    )
  }
}
*/
export const Botones: React.SFC = () => {
  const style = {
    border : '5px solid green',
    fontSize : '32px'
  };

  return (
    <div className="App">
      <Button style={style}>
        <div>Hello</div>
        <div>Hello2</div>
      </Button>
    </div>
  )
}

export default Botones;