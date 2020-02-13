import React, { useState, useEffect } from "react";

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

      <div className="row row-cols-1 row-cols-md-4">
        {personajes.results.map((element: any, index: number) => (
          <div className="col mb-4" key={index}>
            <Personaje personaje={element} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personajes;
