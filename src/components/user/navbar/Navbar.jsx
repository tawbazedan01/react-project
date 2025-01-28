import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-img/logo.png';
import style from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faMagnifyingGlass, faHeart } from '@fortawesome/free-solid-svg-icons';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" className={style.bgcolor}>
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="brand-name" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="d-flex justify-content-evenly" id="basic-navbar-nav">
          <Nav className="d-flex gap-3">
            <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/categories'}>Categories</Nav.Link>
            <Nav.Link as={Link} to={'/products'}>Products</Nav.Link>
            <Nav.Link as={Link} to={'#'}>About</Nav.Link>
            <Nav.Link as={Link} to={'#'}>Contact</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={<FontAwesomeIcon icon={faUser} />} >
              <NavDropdown.Item as={Link} to={'/auth/login'}>Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/auth/register'}>Register</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link as={Link} to={'#'}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Nav.Link>
            <Nav.Link as={Link} to={'#'}>
              <FontAwesomeIcon icon={faHeart} />
            </Nav.Link>
            <Nav.Link as={Link} to={'#'}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
