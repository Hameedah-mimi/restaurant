import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import logo1 from "./assets/logo1.png";

function CustomNavbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* LOGO + BRAND */}
        <Navbar.Brand className="brand d-flex align-items-center">
          <img src={logo1} alt="Mimi's Kitchen" className="logo me-2" />
          <span>Mimi’s Kitchen</span>
        </Navbar.Brand>

        {/* DESKTOP NAV */}
        <Nav className="links ms-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/reservation">Reservation</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>

        {/* MOBILE ICON */}
        <FaBars className="Bars" onClick={() => setShowNav(!showNav)} />

        {/* MOBILE MENU */}
        {showNav && (
          <div className="mobile-nav">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/reservation">Reservation</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
