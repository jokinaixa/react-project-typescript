import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api";

export const getPersonajes = () => {
  return axios({
    url: `${baseUrl}/character/`,
    method: "get"
  })
    .then(response => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPersonaje = (idPersonaje: string) => {
  return axios({
    url: `${baseUrl}/character/${idPersonaje}`,
    method: "get"
  })
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
};
