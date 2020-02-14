import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
    margin-bottom: 2em;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const Cabecera = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home">Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/personajes">Personajes</Nav.Link>
          <Nav.Link href="/tareas">Tareas</Nav.Link>
          <NavDropdown title="LK" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/lknet/comboTarjetas">
              Combo Tarjetas
            </NavDropdown.Item>
            <NavDropdown.Item href="/lknet/comboDepositos">
              Combo Depósitos
            </NavDropdown.Item>
            <NavDropdown.Item href="/lknet/cardTarjetas">
              Card Tarjetas
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
