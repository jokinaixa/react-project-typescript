import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import { IPersonajes } from "./IPersonajes";
import { getPersonajes } from "../../services/personajes";

import Personaje from "./Personaje";

export const Personajes: React.SFC<IPersonajes> = () => {
  const [personajes, setPersonajes] = useState<IPersonajes>({
    results: [],
    loading: true
  });

  useEffect(() => {
    async function loadPersonajes() {
      getPersonajes().then(data => {
        setPersonajes({
          results: data.results,
          loading: false
        });
      });
    }

    loadPersonajes();
  }, []);

  return (
    <div>
      <div className={personajes.loading ? "d-block" : "d-none"}>
        <i className="fa fa-spinner fa-spin fa-3x fa-fw" />
      </div>

      <Row>
        {personajes.results.map((element: any, index: number) => (
          <Col md={3} key={index}>
            <Personaje personaje={element} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Personajes;
