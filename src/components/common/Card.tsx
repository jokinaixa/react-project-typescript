import React from "react";

type MyProps = {
  children: React.ReactNode;
};

function Card(props: MyProps) {
  return (
    <div className="card">
      <div>{props.children}</div>
    </div>
  );
}

export default Card;