import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startEditCategory } from "../../../../actions/modules/warehouse";
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
    };

    const handleEditCategory = (e) => {
		e.preventDefault();
		dispatch( startEditCategory()(category, formValues) );
		handleCloseEditForm();
	};
	

  return (
    <>
    	<Button size="sm" variant="success" onClick={() => handleOpenEditForm(category)}>
			Editar
		</Button>
		<Modal show={showEditForm} onHide={handleCloseEditForm}>
			<Form onSubmit={handleEditCategory}>
				<Modal.Header closeButton>
					<Modal.Title>Editar Categoría</Modal.Title>
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
  )
};