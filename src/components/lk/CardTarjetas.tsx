import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Tarjetas from "../common/Tarjetas";

import tarjetasData from "../../data/tarjetas.fake.json";
import { ITarjetas } from "./ITarjetas";

export const CardTarjetas: React.SFC<ITarjetas> = () => {
  const [state, setState] = useState<ITarjetas>({
    tarjetas: [],
    loading: true
  });

  useEffect(() => {
    setState({
      tarjetas: tarjetasData.tarjetas,
      loading: false
    });
  }, []);

  return (
    <div>
      <div className={state.loading ? "d-block" : "d-none"}>
        <i className="fa fa-spinner fa-spin fa-3x fa-fw" />
      </div>

      <Row>
        {state.tarjetas.map((element: any, index: number) => (
          <Col md={4} key={index}>
            <Tarjetas>
              <div className="card-body">
                <h5 className="card-title">{element.alias}</h5>
                <div className="card-text">
                  <dl className="row">
                    <dt className="col-md-6">Disponible</dt>
                    <dd className="col-md-6 text-right">
                      {element.disponible?.cantidad} {element.disponible?.moneda}
                    </dd>
                    <dt className="col-md-6">Estado</dt>
                    <dd className="col-md-6 text-right">{element.estado}</dd>
                  </dl>
                </div>
              </div>
            </Tarjetas>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardTarjetas;
