import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startEditSubCategory } from "../../../../actions/modules/warehouse";
import { useForm } from "../../../../hooks/useForm";

export const ModalEditCategory = ({subCategoryId}) => {
	const subCategory = useSelector(state => state.warehouse.subCategories).find(subCategory => subCategory.id === subCategoryId);
    const initialState = {
        name: subCategory?.name,
        id: subCategory?.id,
        status: subCategory?.status,
    };
    const dispatch = useDispatch();
    const [showEditForm, setShowEditForm] = useState(false);
    const [ formValues, handleInputChange ] = useForm({ ...initialState });
	const warehouseId = useSelector(state => state.warehouse.warehouse.activeWarehouse);

    const { id=subCategory?.id, name=subCategory?.name, status=subCategory?.status } = formValues;

    const handleOpenEditForm = () => {
        setShowEditForm(true);
    }

    const handleCloseEditForm = () => {
        setShowEditForm(false);
    };

    const handleEditSubCategory = (e) => {
		e.preventDefault();
		dispatch( startEditSubCategory(subCategory, formValues, warehouseId) );
		handleCloseEditForm();
	};
	

  return (
    <>
    	<Button size="sm" variant="success" onClick={() => handleOpenEditForm(subCategory)}>
			Editar
		</Button>
		<Modal show={showEditForm} onHide={handleCloseEditForm}>
			<Form onSubmit={handleEditSubCategory}>
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