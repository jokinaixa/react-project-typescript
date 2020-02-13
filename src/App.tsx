import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Cabecera from "./components/Cabecera";
import Home from "./components/Home";
import Personajes from "./components/personajes/Personajes";
import PersonajeFicha from "./components/personajes/PersonajeFicha";
import Tareas from "./components/tareas/Tasks";
import ComboTarjetas from "./components/lk/ComboTarjetas";
import ComboDepositos from "./components/lk/ComboDepositos";
import CardTarjetas from "./components/lk/CardTarjetas";

const App = () => {
  return (
    <div>
      <div className="container">
        <Router>
          <Route path="/" component={Cabecera} />
          <Route path="/home" component={Home} />
          <Route path="/personajes" component={Personajes} />
          <Route
            path="/personajeFicha/:idPersonaje"
            component={PersonajeFicha}
          />
          <Route path="/tareas" component={Tareas} />
          <Route path="/lknet/comboTarjetas" component={ComboTarjetas} />
          <Route path="/lknet/comboDepositos" component={ComboDepositos} />
          <Route path="/lknet/cardTarjetas" component={CardTarjetas} />
        </Router>
      </div>
    </div>
  );
};

export default App;
