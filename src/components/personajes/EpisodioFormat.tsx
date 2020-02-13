import React from "react";

interface Props {
  urlEpisodio: string;
}

export const EpisodioFormat: React.SFC<Props> = ({ urlEpisodio }) => (
  <span className="badge badge-pill badge-info">
    {formatearEpisodio(urlEpisodio)}
  </span>
);

export function formatearEpisodio(url: string) {
  const arrayDeCadenas = url.split("/");
  const id = arrayDeCadenas.slice(-1);

  return id;
}
