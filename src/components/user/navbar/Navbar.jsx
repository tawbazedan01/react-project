import React, { useContext, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-img/logo.png';
import style from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faMagnifyingGlass, faHeart } from '@fortawesome/free-solid-svg-icons';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { CartContext } from '../context/CartContext.jsx';
import { UserContext } from '../context/userContext/UserContext.jsx';

export default function CustomNavbar() {
  const { cartCount } = useContext(CartContext);
  const { user, loading } = useContext(UserContext);

  return (
    <Navbar expand="lg" sticky='top' className={`${style.bgcolor}`}>
      <Container>
        <Navbar.Brand as={Link} to={'/home'}>
          <img src={logo} alt="brand-name" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-evenly" id="basic-navbar-nav">
          <Nav className="d-flex gap-3">
            <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/categories'}>Categories</Nav.Link>
            <Nav.Link as={Link} to={'/products'}>Products</Nav.Link>
            <Nav.Link as={Link} to={'#'}>About</Nav.Link>
            <Nav.Link as={Link} to={'#'}>Contact</Nav.Link>
          </Nav>

          <Nav className="d-flex flex-row gap-1">
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
            <Nav.Link as={Link} to={'/cart'}>
              <FontAwesomeIcon icon={faCartShopping} />
              {cartCount}
            </Nav.Link>
          </Nav>
          <Dropdown >
            <Dropdown.Toggle id="dropdown-button-dark-example1" className={style.dropdown} >
              welcome  {loading ? "..." : user.userName}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to={'/profile'}>Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-2">LogOut</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
