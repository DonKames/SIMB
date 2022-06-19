import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { DropdownButton, Dropdown, Nav, Navbar, Row, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const NavBarModules = () => {

	const warehouses = useSelector(state => state.warehouse.warehouses);

	console.log(warehouses);

		return (
			<Row>
				<Navbar bg="secondary" expand="lg" className="mw-100 mb-3 bg-gradient">
					<Navbar.Brand>
						<Link to="/pvt/modules/warehouse/" className="navbar-brand">
							TEST COMPANY
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto flex-row align-items-center">
							<Link to="admin" className="me-2">
								<Button className='bg-gradient shadow-sm'>Administrador</Button>
							</Link>
							<Link to="subadmin" className="me-2">
								<Button className='bg-gradient shadow-sm'>SubAdmin</Button>
							</Link>
							<Link to="keeper" className="me-2">
								<Button className='bg-gradient shadow-sm'>Bodeguero</Button>
							</Link>
							<DropdownButton
								align="end"
								id="dropdown-basic-button"
								title="Bodegas"
								className="me-2 bg-gradient shadow-sm"
							>
								{warehouses?.map(warehouse => (
									<Dropdown.Item key={warehouse.id}>
										<Link to={`/pvt/modules/warehouse/${warehouse.id}`}>
											{warehouse.name}
										</Link>
									</Dropdown.Item>
								))}
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</DropdownButton>
							<div className='flex-col'>
							<Link to="configuration" className="me-2">
								<Button variant='secondary bg-gradient'>
									<FontAwesomeIcon icon={faGear} />
								</Button>
							</Link>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Row>
		);
};