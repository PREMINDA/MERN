import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">MERNSHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart pr-5"></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="login">
                <Nav.Link href="/login">
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
