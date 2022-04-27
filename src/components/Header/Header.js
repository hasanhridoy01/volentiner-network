import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../logos/Group 1329.png';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  //logout
  const logout = e => {
    e.preventDefault();
    signOut(auth);
    navigate('/login')
  }
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
              {
                user ? <Nav.Link eventKey={2} href="">
                <button onClick={logout} className='btn btn-danger'>Sign Out</button>
              </Nav.Link> : <Nav.Link href="/login"><button className='btn btn-danger'>Login</button></Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;