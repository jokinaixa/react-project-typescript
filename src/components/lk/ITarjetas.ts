interface Disponible {
  cantidad: number;
  moneda: string;
}

interface Tarjeta {
  alias: string;
  disponible?: Disponible;
  estado: string;
}

export interface ITarjetas {
  tarjetas: Tarjeta[];
  loading: boolean;
}