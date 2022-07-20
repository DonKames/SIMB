import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "../../../../hooks/useForm";
import { startEditWarehouse } from '../../../../actions/modules/warehouse';

export const ModalEditWarehouse = ({warehouseId}) => {
	const dispatch = useDispatch();

	const [showEditForm, setShowEditForm] = useState(false);
	
	const warehouse = useSelector(state => state.warehouse.warehouses).find(warehouse => warehouse.id === warehouseId);
	const employees = useSelector(state => state.warehouse.employees);
	
	console.log(warehouseId);

	let initialState = {
		id: warehouse.id,
		location: warehouse.location,
		name: warehouse.name,
		status: warehouse.status,
		warehouseKeeper: warehouse?.warehouseKeeper ? warehouse.warehouseKeeper.id : "",
	};

	const [formValues, handleInputChange] = useForm({ ...initialState });

	const { id=warehouse.id, name=warehouse.name, location=warehouse.location, status= warehouse.status } = formValues;

	
	const handleOpenEditForm = () => {
		setShowEditForm(true);
		//console.log(id);
	};


	const handleCloseEditForm = () => {
		//reset();
        setShowEditForm(false);
    };

	const handleEditWarehouse = (e) => {
		e.preventDefault();
		dispatch(startEditWarehouse(warehouse, formValues));
		console.log(formValues, " => ", warehouse);
		//reset();
		handleCloseEditForm();
	}

  	return (
    <>
        <Button size="sm" variant="success" onClick={() => handleOpenEditForm(warehouse)}>Editar</Button>
		<Modal show={showEditForm} onHide={handleCloseEditForm}>
			<Form onSubmit={handleEditWarehouse}>
				<Modal.Header closeButton>
					<Modal.Title>Editar Bodega</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group className="mb-3">
						<Form.Label>ID</Form.Label>
						<Form.Control
							type="text"
							disabled={true}
							placeholder="ID"
							name="id"
							onChange={handleInputChange}
							value={id}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							type="text"
							placeholder="Nombre"
							name="name"
							onChange={handleInputChange}
							value={name}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Ubicación</Form.Label>
						<Form.Control
							type="text"
							placeholder="Ubicación"
							name="location"
							onChange={handleInputChange}
							value={location}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Estado</Form.Label>
						<Form.Select onChange={handleInputChange} name="status" value={status}>
							<option value="enabled">Habilitado</option>
							<option value="disabled">Deshabilitado</option>
						</Form.Select>
						{/* <Form.Control
							type="text"
							placeholder="Estado"
							name="status"
							onChange={handleInputChange}
							value={status}
						/> */}
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Bodeguero</Form.Label>
						<Form.Select
							type="text"
							placeholder="Bodeguero"
							name="warehouseKeeper"
							onChange={handleInputChange}
							value={warehouse.warehouseKeeper}>
								<option>Bodeguero</option>
							{employees?.map(employee => (
								<option key={employee.id} value={employee.id}>
									{employee.name}
								</option>
							))}
						</Form.Select>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
			<Button variant="danger" onClick={handleCloseEditForm}>
				Cancelar
			</Button>
			<Button variant="primary" type="submit">
				Guardar
			</Button>
		</Modal.Footer>
			</Form>
		</Modal>
    </>
  )
}
