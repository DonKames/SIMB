import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { startSavingEmployee } from '../../../../actions/modules/warehouse';
import { useForm } from '../../../../hooks/useForm';

export const ModalAddEmployee = () => {

    const dispatch = useDispatch();

	  const [showAddForm, setShowAddForm] = useState(false);

	const [formValues, handleInputChange, reset] = useForm({
		rut: '',
		name: '',
		email: '',
    	phone: '',
		role: 'warehouseKeeper',
	});

	const { rut, name, email, phone, role } = formValues;

	const employee = {
		rut,
		name,
		email,
        phone,
		role,
  	};

	const handleSaveEmployee = (e) => {
		e.preventDefault();
		dispatch(startSavingEmployee(employee));
		reset();
		handleCloseAddEmployeeForm();
	};

	const handleOpenAddEmployeeForm = () => {
		setShowAddForm(true);
	};

	const handleCloseAddEmployeeForm = () => {
		setShowAddForm(false);
	};

    return (
        <>
        <Button variant="primary" onClick={handleOpenAddEmployeeForm}>
          	Agregar
        </Button>
        <Modal show={showAddForm} onHide={handleCloseAddEmployeeForm}>
          	<Form onSubmit={handleSaveEmployee}>
            	<Modal.Header closeButton>
              		<Modal.Title>Agregar Empleado</Modal.Title>
            	</Modal.Header>
    	        <Modal.Body>
    	          	<Form.Group className="mb-3">
						<Form.Label>RUT</Form.Label>
						<Form.Control
							type="text"
							placeholder="12.345.678-9"
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
    	            	<Form.Label>E-mail</Form.Label>
    	            	<Form.Control
    	              		type="text"
    	              		placeholder="micorreo@gmail.com"
    	              		name="email"
    	              		onChange={handleInputChange}
    	              		value={email}
    	            	/>
    	          	</Form.Group>
    	          	<Form.Group className="mb-3">
    	            	<Form.Label>Teléfono</Form.Label>
    	            	<Form.Control
    	              		type="text"
    	              		placeholder="+56912345678"
    	              		name="phone"
    	              		onChange={handleInputChange}
    	              		value={phone}
    	            	/>
    	          	</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Rol</Form.Label>
						<Form.Select name="role" onChange={handleInputChange} value={role}>
							<option value="">Seleccione un rol</option>
							<option value="admin">Administrador</option>
							<option value="subAdmin">Sub-Administrador</option>
							<option value="warehouseKeeper">Bodeguero</option>
						</Form.Select>
					</Form.Group>
    	        </Modal.Body>
    	        <Modal.Footer>
    	          	<Button variant="danger" onClick={handleCloseAddEmployeeForm}>
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
