import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { startSavingProducts } from "../../../../actions/modules/warehouse";

import { useForm } from "../../../../hooks/useForm";

export const ModalAddProducts = () => {
	const dispatch = useDispatch();

	const [showAddForm, setShowAddForm] = useState(false);

	const [ formValues, handleInputChange, reset ] = useForm({
		id: "",
		name: "",
		category: "",
		subCategory: "",
		qty: "",
	});

	const { id, name, category, subCategory, qty } = formValues;

	const products = {
		id,
		name,
		category,
		subCategory,
		qty,
	};

	const handleSaveProduct = ( e ) => {
		e.preventDefault();
		dispatch( startSavingProducts( products ) );
		reset();
		handleCloseForm();
	};

	const handleOpenForm = () => {
		setShowAddForm( true );
	};

	const handleCloseForm = () => {
		setShowAddForm( false );
	};

  	return (
      <>
        <Button variant="primary" onClick={ handleOpenForm }>
          Agregar
        </Button>
        <Modal show={showAddForm} onHide={ handleCloseForm }>
        	<Form onSubmit={ handleSaveProduct }>
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
    	            		onChange={ handleInputChange }
        	 	        	value={ name }
            	    	/>
              		</Form.Group>
    	          	<Form.Group className="mb-3">
        	        	<Form.Label>Categoría</Form.Label>
	        	        <Form.Control
    	        	    	type="text"
        	        		placeholder="Categoría"
            	    		name="category"
    	            		onChange={ handleInputChange }
        	 	        	value={ category }
            	    	/>
              		</Form.Group>
    	          	<Form.Group className="mb-3">
        	        	<Form.Label>Subcategoría</Form.Label>
	        	        <Form.Control
    	        	    	type="text"
        	        		placeholder="Sub Categoría"
            	    		name="subCategory"
    	            		onChange={ handleInputChange }
        	 	        	value={ subCategory }
            	    	/>
              		</Form.Group>
    	          	<Form.Group className="mb-3">
        	        	<Form.Label>Cantidad</Form.Label>
	        	        <Form.Control
    	        	    	type="number"
        	        		placeholder="Cantidad"
            	    		name="qty"
    	            		onChange={ handleInputChange }
        	 	        	value={ qty }
            	    	/>
              		</Form.Group>
            	</Modal.Body>
            	<Modal.Footer>
              <Button variant="danger" onClick={ handleCloseForm }>
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