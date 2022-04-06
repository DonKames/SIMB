import React from 'react';
import {
    Collapse,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
    return (
        <Navbar
            color="light"
            expand="md"
            container="md"
            fixed="top"
            light
        >
            <Container>
                <NavbarBrand href="/" className='me-auto'>
                    SIMB
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="ms-auto"
                        navbar
                    >
                        <FontAwesomeIcon icon={faSun} className='my-auto' />
                        <div className="form-check form-switch my-auto d-flex justify-content-center">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                        </div>
                        <FontAwesomeIcon icon={faMoon} className='my-auto' />
                        <NavItem>
                            <NavLink href="/login/">
                                Ingresar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/register/">
                                Registrarse
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>

    )
}