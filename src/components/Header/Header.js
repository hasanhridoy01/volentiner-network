import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img className='logo-img' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"><span className='navbarStyle right'>Home</span></Nav.Link>
              <Nav.Link href="#pricing"><span className='navbarStyle'>Doantion</span></Nav.Link>
              <Nav.Link href="#pricing"><span className='navbarStyle'>Events</span></Nav.Link>
              <Nav.Link href="#pricing"><span className='navbarStyle'>Blog</span></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"><button className='btn btn-danger'>Login</button></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
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