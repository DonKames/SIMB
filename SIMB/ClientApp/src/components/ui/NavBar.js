import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/">SIMB</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <FontAwesomeIcon icon={faSun} className='my-auto' />
                        <Form.Switch className='d-flex justify-content-center' />
                        <FontAwesomeIcon icon={faMoon} className='my-auto' />
                        <Link to="login" className='link-secondary me-1'>Ingresar</Link>
                        <Link to="register" className='link-secondary'>Registrar</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};