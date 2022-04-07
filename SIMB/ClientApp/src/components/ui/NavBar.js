import React from 'react';
//import {
//    Collapse,
//    Container,
//    DropdownItem,
//    DropdownMenu,
//    DropdownToggle,
//    Nav,
//    Navbar,
//    NavbarBrand,
//    NavbarText,
//    NavbarToggler,
//    NavItem,
//    NavLink,
//    UncontrolledDropdown
//} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const NavBar = () => {
    return (
        //<Navbar
        //    color="light"
        //    expand="md"
        //    container="md"
        //    fixed="top"
        //    light
        //>
        //    <Container>
        //        <NavbarBrand href="/" className='me-auto'>
        //            SIMB
        //        </NavbarBrand>
        //        <NavbarToggler onClick={function noRefCheck() { }} />
        //        <Collapse navbar>
        //            <Nav
        //                className="ms-auto"
        //                navbar
        //            >
        //                <FontAwesomeIcon icon={faSun} className='my-auto' />
        //                <div className="form-check form-switch my-auto d-flex justify-content-center">
        //                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
        //                </div>
        //                <FontAwesomeIcon icon={faMoon} className='my-auto' />
        //                <NavItem>
        //                    <NavLink href="/login/">
        //                        Ingresar
        //                    </NavLink>
        //                </NavItem>
        //                <NavItem>
        //                    <NavLink href="/register/">
        //                        Registrarse
        //                    </NavLink>
        //                </NavItem>
        //            </Nav>
        //        </Collapse>
        //    </Container>
        //</Navbar>

        <Navbar bg="light" expand="lg" className='mb-5'>
            <Container>
                <Navbar.Brand href="#home">SIMB</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}