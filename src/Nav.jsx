import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar className="Navbar">
      <Container>
        <Navbar.Brand
          className="text-light
        "
        >
          Mimi's Restaurant
        </Navbar.Brand>
        <Nav className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/reservation">Reservation</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
