import React from "react";
import { Link } from "react-router-dom";

import { IPersonaje } from "./IPersonajes";

import Card from "../common/Card";

interface Props {
  personaje: IPersonaje;
}

export const Personaje: React.SFC<Props> = ({ personaje }) => {
  return (
    <Card>
      <img
        className="card-img-top"
        src={personaje.image}
        alt={personaje.name}
      />
      <div className="card-body">
        <h4 className="card-title">
          <Link to={{ pathname: `/personajeFicha/${personaje.id}` }}>
            {personaje.name}
          </Link>
        </h4>
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
      </div>
    </Card>
  );
};

export default Personaje;
