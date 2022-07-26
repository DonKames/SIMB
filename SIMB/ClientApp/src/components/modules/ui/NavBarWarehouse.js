import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar, Row, Button, FormSelect } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActiveWarehouse } from '../../../actions/modules/warehouse';


export const NavBarModules = () => {
	const dispatch = useDispatch();

	const warehouses = useSelector(state => state.warehouse.warehouses);

	const warehouseId = useSelector(state => state.warehouse.warehouse.activeWarehouse);
	//dispatch(setActiveWarehouse(warehouseId));

	const handleWarehouseChange = (e) => {
		dispatch(setActiveWarehouse(e));
		console.log(e);
	}

		return (
			<Row>
				<Navbar bg="secondary" expand="lg" className="mw-100 mb-3 bg-gradient">
					<Navbar.Brand>
						<Link to="/pvt/modules/warehouse/" className="navbar-brand">
							FAKE COMPANY
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
							<FormSelect
								align="end"
								id="dropdownWarehouses"
								title="Bodegas"
								className="me-2 bg-gradient shadow-sm"
								value={warehouseId ?? ''}
								onChange={(e) => handleWarehouseChange( e.currentTarget.value )}
							>
								{warehouses?.map(warehouse => (
									<option key={warehouse.id} value={warehouse.id}>
											{warehouse.name}
									</option>
								))}
							</FormSelect>
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