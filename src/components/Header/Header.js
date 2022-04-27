import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img className='logo-img' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home"><span className='navbarStyle right'>Home</span></Nav.Link>
              <Nav.Link href="#pricing"><span className='navbarStyle'>Add</span></Nav.Link>
              <Nav.Link href="#pricing"><span className='navbarStyle'>Blog</span></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login"><button className='btn btn-danger'>Login</button></Nav.Link>
              <Nav.Link eventKey={2} href="">
                <button className='btn btn-danger'>Sign Out</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;