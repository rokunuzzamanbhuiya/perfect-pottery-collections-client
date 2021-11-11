import React from 'react';
import {
  Container,
  Nav,
  Navbar
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import logo from "../../images/logo1.png";
import "./Header.css";



const Header = () => {
    
    const {user , logOut}= useAuth()

    return (
      <Navbar
        className="py-4 header-bg"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand
            className="py-0"
            as={Link}
            to="/"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            <img src={logo} className="" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" id="responsive-navbar-toggle" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
              <Nav.Link as={Link} to="/" style={{ fontWeight: "500", color: "#865932" }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services" style={{ fontWeight: "500", color: "#865932" }}>
                Explore
              </Nav.Link>
              

              {user.email ? (
                <>
                  <Nav.Link as={Link} to="/dashboard" style={{ fontWeight: "500", color: "#865932" }}>
                  Dashboard
                </Nav.Link>
                {/* <Nav.Link as={Link} to="/myorders" style={{ fontWeight: "500", color: "#865932" }}>
                  My Orders
                </Nav.Link>
                <Nav.Link as={Link} to="/manageallorders" style={{ fontWeight: "500", color: "#865932" }}>
                  Manage All Orders
                </Nav.Link>
                <Nav.Link as={Link} to="/addnewservice" style={{ fontWeight: "500", color: "#865932" }}>
                  Add New Service
                </Nav.Link> */}
                <Nav.Link onClick={logOut} style={{ fontWeight: "500", color: "#865932" }}> Sign Out</Nav.Link>
                </>
              ) : (  
                <Nav.Link as={Link} to="/login" style={{ fontWeight: "500", color: "#865932" }}>
                  Log In
                </Nav.Link>
              )}
              <Nav.Link style={{ fontWeight: "500", color: "#865932" }}>{user?.displayName}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
   
};

export default Header;