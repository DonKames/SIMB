import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../../hooks/useForm";

export const ModalEditCategory = ({categoryId}) => {

    const dispatch = useDispatch();
    const [showEditForm, setShowEditForm] = useState(false);
    const category = useSelector(state => state.warehouse.categories).find(category => category.id === categoryId);

    const initialState = {
        name: category.name,
        id: category.id,
        status: category.status,
    };
    const [ formValues, handleInputChange ] = useForm({ ...initialState });

    const { id=category.id, name=category.name, status=category.status } = formValues;

    const handleOpenEditForm = () => {
        setShowEditForm(true);
    }

    const handleCloseEditForm = () => {
        setShowEditForm(false);
    }

    const handleEditEmployee = (e) => {};

  return (
    <>
    <Button size="sm" variant="success" onClick={() => handleOpenEditForm(category)}>Editar</Button>
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
						<Form.Label>Teléfono</Form.Label>
						<Form.Control
							type="text"
							placeholder="Nombre"
							name="name"
							onChange={handleInputChange}
							value={name}
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
