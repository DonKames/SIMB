import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { startSavingCategory } from "../../../../actions/modules/warehouse";
import { useForm } from "../../../../hooks/useForm";

export const ModalAddCategory = () => {

	const dispatch = useDispatch();

	const [showAddForm, setShowAddForm] = useState(false);

	const [ formValues, handleInputChange, reset ] = useForm({
		id: "",
		name: "",
	});

	const { id, name } = formValues;

	const category = {
		id,
		name,
	};

	const handleSaveCategory = (e) => {
		e.preventDefault();
		dispatch(startSavingCategory(category));
		reset();
	}

	const handleOpenAddCategoryForm = () => {
		setShowAddForm(true);
	};

	const handleCloseAddCategoryForm = () => {
		setShowAddForm(false);
	};

  	return (
    <>
        <Button variant="primary" onClick={handleOpenAddCategoryForm}>
          Agregar
        </Button>
        <Modal show={showAddForm} onHide={handleCloseAddCategoryForm}>
          <Form onSubmit={handleSaveCategory}>
            <Modal.Header closeButton>
              <Modal.Title>Agregar Categoría</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="CAT-001"
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
              <Button variant="danger" onClick={handleCloseAddCategoryForm}>
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
