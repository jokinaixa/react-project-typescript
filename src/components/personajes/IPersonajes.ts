export interface Detalle {
  "name": string;
  "url": string;
}

export interface IPersonaje {
  "id": number;
  "name": string;
  "status": string;
  "species": string;
  "type": string;
  "gender": string;
  "origin": Detalle;
  "location": Detalle;
  "image": string;
  "episode": [];
  "url": string;
  "created": string;
}

export interface IPersonajes {
  results: IPersonaje[];
  loading: boolean;
}
