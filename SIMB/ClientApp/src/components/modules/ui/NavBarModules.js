import React from 'react';
import { DropdownButton, Dropdown, Nav, Navbar, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBarModules = () => {
		return (
			<Row>
				<Navbar bg="primary" expand="lg" className="mw-100 mb-3">
					<Navbar.Brand>
						<Link to="/pvt/modules/warehouse/" className="navbar-brand">
							TEST COMPANY
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Link to="admin" className="me-2">
								<Button>Administrador</Button>
							</Link>
							<Link to="subadmin" className="me-2">
								<Button>SubAdmin</Button>
							</Link>
							<Link to="keeper" className="me-2">
								<Button>Bodeguero</Button>
							</Link>
							<DropdownButton
								align="end"
								id="dropdown-basic-button"
								title="Bodegas"
							>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</DropdownButton>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Row>
		);
};