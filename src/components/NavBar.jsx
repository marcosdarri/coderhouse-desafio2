import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">NombreDeEmpresa</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About us</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#contact">Contact us</Nav.Link>
              <NavDropdown title="Categorias Clickeables" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Categoria clickeable 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Categoria clickeable 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Categoria clickeable 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Categoria clickeable 4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
