import React, { useState, useEffect } from "react";
import Card from "../common/Card";

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

      <div className="row row-cols-1 row-cols-md-3">
        {state.tarjetas.map((element: any, index: number) => (
          <div className="col mb-4" key={index}>
            <Card>
              <div className="card-body">
                <h5 className="card-title">{element.alias}</h5>
                <div className="card-text">
                  <dl className="row">
                    <dt className="col-md-4">Disponible</dt>
                    <dd className="col-md-8">
                      {element.disponible?.cantidad} {element.disponible?.moneda}
                    </dd>
                    <dt className="col-md-4">Estado</dt>
                    <dd className="col-md-8">{element.estado}</dd>
                  </dl>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardTarjetas;
