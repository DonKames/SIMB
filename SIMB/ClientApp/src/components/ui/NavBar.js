import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProfileNavBar } from './ProfileNavBar';

export const NavBar = () => {
    return (
      <Row>
        <Navbar bg="secondary" expand="lg" className="bg-gradient">
          <Container>
            <Navbar.Brand>
              <Link to="/" className="navbar-brand">
                SIMB
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto flex-row d-flex align-items-center">
                <div className="flex-col">
                  <FontAwesomeIcon icon={faSun} />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Form.Switch className="d-flex justify-content-center pb-1" />
                </div>
                <div className="flex-col">
                  <FontAwesomeIcon icon={faMoon} />
                </div>
                <ProfileNavBar />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    );
};