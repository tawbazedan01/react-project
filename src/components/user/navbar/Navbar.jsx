import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-img/logo.png';
import style from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


export default function CustomNavbar() {
  return (
    <Navbar expand="lg" className={style.bgcolor}>
      <Container>
        <Navbar.Brand><img src={logo} alt='brand-name' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='d-flex justify-content-evenly' id="basic-navbar-nav">
          <Nav className="d-flex gap-3">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={''}>Shop</Nav.Link>
            <Nav.Link as={Link} to={''}>Categories</Nav.Link>
            <Nav.Link as={Link} to={''}>Products</Nav.Link>
            <Nav.Link as={Link} to={''}>About</Nav.Link>
            <Nav.Link as={Link} to={''}>Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={'/cart'}> <FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
            <Nav.Link as={Link} to={'/register'}>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

