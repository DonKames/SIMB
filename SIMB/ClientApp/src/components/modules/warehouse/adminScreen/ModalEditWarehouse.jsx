import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "../../../../hooks/useForm";

export const ModalEditWarehouse = ({warehouse}) => {

	const [showEditForm, setShowEditForm] = useState(false);
	
	const [formValues, handleInputChange, reset] = useForm({
		id: warehouse?.id,
		name: warehouse?.name,
		location: warehouse?.location,
		status: warehouse?.status,
	});

	const { id, name, location, status } = formValues;


	const handleOpenEditForm = () => {
		setShowEditForm(true);
		//console.log(id);
	};


	const handleCloseEditForm = () => {
		reset();
        setShowEditForm(false);
    };

  	return (
    <>
        <Button size="sm" variant="success" onClick={() => handleOpenEditForm(warehouse)}>Editar</Button>
			<Modal show={showEditForm} onHide={handleCloseEditForm}>
                <Form>
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
							<Form.Control
								type="text"
								placeholder="Estado"
								name="status"
								onChange={handleInputChange}
								value={status}
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Bodeguero</Form.Label>
							<Form.Select
								type="text"
								placeholder="Bodeguero"
								name="warehouse_keeper"
								onChange={handleInputChange}
								value={warehouse?.warehouse_keeper}
							/>
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
