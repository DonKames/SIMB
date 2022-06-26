import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { startSavingSubCategory } from "../../../../actions/modules/warehouse";
import { useForm } from "../../../../hooks/useForm";

export const ModalAddSubCategory = () => {

	const dispatch = useDispatch();

	const categories = useSelector((state) => state.warehouse?.categories);

	console.log(categories);

	const [ showAddForm, setShowAddForm ] = useState(false);

	const [ formValues, handleInputChange, reset ] = useForm({
		category: "",
		name: "",
	});

	const {  name, category } = formValues;

	const subCategory = {
		name,
		category,
	};

	const handleSaveSubCategory = (e) => {
		e.preventDefault();
		dispatch(startSavingSubCategory(subCategory));
		handleCloseAddSubCategoryForm();
	};

	const handleOpenAddSubCategoryForm = () => {
		setShowAddForm(true);
	};

	const handleCloseAddSubCategoryForm = () => {
    reset();
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
              <Form.Group>
                <Form.Label>Elija su Categoría</Form.Label>
				        <Form.Select name="category" value={category} onChange={handleInputChange}>
					        <option>Categoría</option>
                    {
                      categories.map((category) => (
                        <option name="category" key={category.id} value={category.id}>{category.name}</option>
                      ))
                    }
				        </Form.Select>
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