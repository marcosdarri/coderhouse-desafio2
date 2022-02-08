import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidjet from "../CartWidjet/CartWidjet";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink to="/" className="navBarLink">
            <Navbar.Brand href="#home">Floreria Paysandu</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink  to="/" className="navBarLink">
                <Nav.Link href="#home">Home</Nav.Link>
              </NavLink>
              {/* <NavLink to="/detalle" className="navBarLink">
                <Nav.Link href="#link">Detalle</Nav.Link>
              </NavLink> */}
              <NavLink to="/categorias/rosa" className="navBarLink">
              <Nav.Link href="#link">Rosas</Nav.Link>
              </NavLink>
              <NavLink to="/categorias/tulipan" className="navBarLink">
              <Nav.Link href="#link">Tulipanes</Nav.Link>
              </NavLink>

              
            
            </Nav>
            
            <NavLink to="/cart" className="navBarLink">
              <CartWidjet />
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
