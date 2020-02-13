import React, { Component } from "react";
import { Link } from "react-router-dom";

class Cabecera extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ marginBottom: "3em" }}
      >
        <Link to="/home" className="navbar-brand">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/personajes" className="nav-link">
                Personajes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tareas" className="nav-link">
                Tareas
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                LK
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="/lknet/comboTarjetas" className="dropdown-item">
                  Combo Tarjetas
                </Link>
                <Link to="/lknet/comboDepositos" className="dropdown-item">
                  Combo Depositos
                </Link>
                <Link to="/lknet/cardTarjetas" className="dropdown-item">
                  Card Tarjetas
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Cabecera;
