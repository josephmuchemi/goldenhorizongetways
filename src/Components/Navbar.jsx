import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BSNavbar, Button, Container, Nav } from 'react-bootstrap';
import './theme.css';

const Navbar = () => {
  return (
    <BSNavbar expand="lg" className="py-3" style={{ backgroundColor: 'var(--primary-dark)' }}>
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="fw-bold text-white">
          <span style={{ color: 'var(--secondary)' }}>Golden</span> Horizon
        </BSNavbar.Brand>
        
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </BSNavbar.Toggle>
        
        <BSNavbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/signup" className="mx-2">
              <Button variant="outline-light" className="px-3">
                Sign Up
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/signin" className="mx-2">
              <Button variant="light" className="px-3" style={{ color: 'var(--primary-dark)' }}>
                Sign In
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/upload" className="mx-2">
              <Button variant="outline-warning" className="px-3">
                Upload
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="mx-2">
              <Button variant="outline-info" className="px-3">
                Products
              </Button>
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;