import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";

import { IPersonaje } from "./IPersonajes";
import { getPersonaje } from "../../services/personajes";
import { EpisodioFormat } from "./EpisodioFormat";

import Card from "../common/Tarjetas";

type PersonajeDetailParams = {
  idPersonaje: string;
};

type PersonajeDetailProps = RouteComponentProps<PersonajeDetailParams>;

const PersonajeFicha: React.FC<PersonajeDetailProps> = ({ match }) => {
  const [personaje, setPersonaje] = useState<IPersonaje>();

  function colorEspecie() {
    return {
      color: personaje?.species === "Human" ? "blue" : "red"
    };
  }

  useEffect(() => {
    async function loadPersonaje(idPersonaje: string) {
      getPersonaje(idPersonaje).then(data => {
        setPersonaje(data);
      });
    }

    loadPersonaje(match.params.idPersonaje);
  }, [match]);

  return (
    <div className="row">
      <div className="col-4">
        <Card>
          <img
            className="card-img-top"
            src={personaje?.image}
            alt={personaje?.name}
          />
          <div className="card-body">
            <h4 className="card-title">{personaje?.name}</h4>
          </div>
        </Card>
      </div>

      <div className="col-4">
        <dl className="row">
          <dt className="col-4">Status</dt>
          <dd className="col-8">{personaje?.status}</dd>

          <dt className="col-4">Species</dt>
          <dd className="col-8" style={colorEspecie()}>
            {personaje?.species}
          </dd>

          <dt className="col-4">Gender</dt>
          <dd className="col-8">{personaje?.gender}</dd>
        </dl>

        <h4>Episodios</h4>
        <ul className="list-inline">
          {personaje?.episode.map((url, index) => (
            <li className="list-inline-item" key={index}>
              <EpisodioFormat urlEpisodio={url} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PersonajeFicha;
