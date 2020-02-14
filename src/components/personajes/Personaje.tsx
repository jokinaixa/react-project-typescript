import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IPersonaje } from "./IPersonajes";

import Tarjetas from "../common/Tarjetas";

interface Props {
  personaje: IPersonaje;
}

export const Personaje: React.SFC<Props> = ({ personaje }) => {
  return (
    <Tarjetas>
      <Card.Img variant="top"
        src={personaje.image}
        alt={personaje.name}
      />
      <Card.Body>
        <Card.Title>
          <Link to={{ pathname: `/personajeFicha/${personaje.id}` }}>
            {personaje.name}
          </Link>
        </Card.Title>
        <div className="card-text">
          <dl className="row">
            <dt className="col-md-5">Species</dt>
            <dd className="col-md-7">{personaje?.species}</dd>
            <dt className="col-md-5">Gender</dt>
            <dd className="col-md-7">{personaje?.gender}</dd>
            <dt className="col-md-5">Status</dt>
            <dd className="col-md-7">{personaje?.status}</dd>
          </dl>
        </div>
      </Card.Body>
    </Tarjetas>
  );
};

export default Personaje;
