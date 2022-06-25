import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "../../../../hooks/useForm";
import { startEditEmployee } from '../../../../actions/modules/warehouse';

export const ModalEditEmployee = ({employeeId}) => {
	const dispatch = useDispatch();

	const [showEditForm, setShowEditForm] = useState(false);
	
	const employee = useSelector(state => state.warehouse.employees).find(employee => employee.id === employeeId);

	console.log(employee);

	let initialState = {
		email: employee.email,
		id: employee.id,
		name: employee.name,
		phone: employee.phone,
		rut: employee.rut,
		status: employee?.status ? employee.status : "",
	};

	const [formValues, handleInputChange, reset] = useForm({ ...initialState });

	const { email=employee.email, id=employee.id, name=employee.name, phone=employee.phone, rut=employee.rut, status=employee.status } = formValues;

	
	const handleOpenEditForm = () => {
		setShowEditForm(true);
		//console.log(id);
	};


	const handleCloseEditForm = () => {
		//reset();
        setShowEditForm(false);
    };

	const handleEditEmployee = (e) => {
		e.preventDefault();
		dispatch(startEditEmployee(employee, formValues));
		//console.log(formValues, " => ", employee);
		//reset();
		handleCloseEditForm();
	}

  	return (
    <>
        <Button size="sm" variant="success" onClick={handleOpenEditForm}>Editar</Button>
		<Modal show={showEditForm} onHide={handleCloseEditForm}>
			<Form onSubmit={handleEditEmployee}>
				<Modal.Header closeButton>
					<Modal.Title>Editar Empleado</Modal.Title>
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
						<Form.Label>RUT</Form.Label>
						<Form.Control
							type="text"
							placeholder="Rut"
							name="rut"
							onChange={handleInputChange}
							value={rut}
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
						<Form.Label>E-Mail</Form.Label>
						<Form.Control
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleInputChange}
							value={email}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Teléfono</Form.Label>
						<Form.Control
							type="text"
							placeholder="Teléfono"
							name="phone"
							onChange={handleInputChange}
							value={phone}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Estado</Form.Label>
						<Form.Select onChange={handleInputChange} name="status" value={status}>
							<option value="enabled">Habilitado</option>
							<option value="disabled">Deshabilitado</option>
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
  	);
}