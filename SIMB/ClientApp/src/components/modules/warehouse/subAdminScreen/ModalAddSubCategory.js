import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { startSavingSubCategory } from "../../../../actions/modules/warehouse";
import { useForm } from "../../../../hooks/useForm";

export const ModalAddSubCategory = () => {

	const dispatch = useDispatch();

	const [ showAddForm, setShowAddForm ] = useState(false);

	const [ formValues, handleInputChange, reset ] = useForm({
		id: "",
		name: "",
	});

	const { id, name } = formValues;

	const category = {
		id,
		name,
	};

	const handleSaveSubCategory = (e) => {
		e.preventDefault();
		dispatch(startSavingSubCategory(category));
		reset();
	};

	const handleOpenAddSubCategoryForm = () => {
		setShowAddForm(true);
	};

	const handleCloseAddSubCategoryForm = () => {
		setShowAddForm(false);
	};

  	return (
      <>
        <Button variant="primary" onClick={handleOpenAddSubCategoryForm}>
          Agregar
        </Button>
        <Modal show={showAddForm} onHide={handleCloseAddSubCategoryForm}>
        	<Form onSubmit={handleSaveSubCategory}>
            	<Modal.Header closeButton>
              		<Modal.Title>Agregar Sub-Categoría</Modal.Title>
            	</Modal.Header>
            	<Modal.Body>
              	<Form.Group className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="SCAT-001"
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
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleCloseAddSubCategoryForm}>
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
};