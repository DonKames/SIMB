import React from 'react';
import { Form, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProfileNavBar } from '../../ui/ProfileNavBar';

export const NavBarModules = () => {
    return (
      <Row>
        <Navbar bg="primary" expand="lg">
          
            <Navbar.Brand>
              <Link to="/" className="navbar-brand">
                TEST COMPANY
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto flex-row d-flex align-items-center">
                <div className="flex-col">
                  sol
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Form.Switch className="d-flex justify-content-center pb-1" />
                </div>
                <div className="flex-col">
                  luna
                </div>
                <ProfileNavBar />
              </Nav>
            </Navbar.Collapse>
          
        </Navbar>
      </Row>
    );
};