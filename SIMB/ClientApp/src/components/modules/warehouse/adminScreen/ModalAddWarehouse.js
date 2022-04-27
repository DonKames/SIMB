import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { startSavingWarehouse } from '../../../../actions/modules/warehouse';
import { useForm } from '../../../../hooks/useForm';

export const ModalAddWarehouse = () => {

    const dispatch = useDispatch();

	const [showAddForm, setShowAddForm] = useState(false);

	const [formValues, handleInputChange, reset] = useForm({
		idInternal: '',
		name: '',
		location: '',
	});

	const { idInternal, name, location } = formValues;

	const warehouse = {
		idInternal,
		name,
		location,
  	};

	const handleSaveWarehouse = (e) => {
		e.preventDefault();
		dispatch(startSavingWarehouse(warehouse));
		reset();
	};

	const handleOpenWarehouseForm = () => {
		setShowAddForm(true);
	};

	const handleCloseWarehouseForm = () => {
		setShowAddForm(false);
	};

    return (
      <>
        <Button variant="primary" onClick={handleOpenWarehouseForm}>
          Agregar
        </Button>
        <Modal show={showAddForm} onHide={handleCloseWarehouseForm}>
          <Form onSubmit={handleSaveWarehouse}>
            <Modal.Header closeButton>
              <Modal.Title>Agregar Bodega</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ID"
                  name="idInternal"
                  onChange={handleInputChange}
                  value={idInternal}
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
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleCloseWarehouseForm}>
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
