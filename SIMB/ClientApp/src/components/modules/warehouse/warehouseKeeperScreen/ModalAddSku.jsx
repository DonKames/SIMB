import { useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { startSavingSku } from '../../../../actions/modules/warehouse';
import { useForm } from '../../../../hooks/useForm';

export const ModalAddSku = () => {
	const dispatch = useDispatch();

	const categories = useSelector( (state) => state.warehouse?.categories );
	const subCategories = useSelector( (state) => state.warehouse?.subCategories );

	const [ formValues, handleInputChange ] = useForm	({
		sku: "",
		name: "",
		category: "",
		subCategory: "",
		format:	"",
		unit: "",
		type: "",
		brand: "",
		model: "",
		description: "",
		price: "",
		stock: "0",
	});

	const { sku, name, category, subCategory, format, unit, type, brand, model, description, } = formValues;

	const [ showAddForm, setShowAddForm ] = useState(false);

	const handleCloseForm = () => {
		setShowAddForm(false);
	}

	const handleOpenForm = () => {
		setShowAddForm(true);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(startSavingSku(formValues));
	}

	


  return (
    <>
	  <Button variant="success" onClick={handleOpenForm}>Agregar SKU</Button>
	  <Modal show={showAddForm} onHide={handleCloseForm} size="xl" >
		<Form onSubmit={(e) => handleSubmit(e)}>
			<Modal.Header closeButton>
				<Modal.Title>Agregar SKU</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row className='mb-3'>
					<Col>
						<FloatingLabel label="SKU/Nro Parte">
							<Form.Control type="text" placeholder="SKU/Nro Parte" name='sku' onChange={ handleInputChange } value={sku} />
						</FloatingLabel>
					</Col>
					<Col>
						<FloatingLabel label='Nombre'>
							<Form.Control type="text" placeholder='Nombre' name='name' onChange={ handleInputChange } value={name} />
						</FloatingLabel>
					</Col>
				</Row>
				<Row className='mb-3'>
					<Col>
						<FloatingLabel label="Categoría">
							<Form.Select type="text" placeholder="Categoría" name='category' onChange={ handleInputChange } value={category}>
								<option>Categoría</option>
								{categories.map((category) => (
									<option key={category.id} value={category.id}>{category.name}</option>
								))}
							</Form.Select>
						</FloatingLabel>
					</Col>
					<Col>
						<FloatingLabel label='SubCategoría'>
							<Form.Select type="text" placeholder='SubCategoría' name='subCategory' onChange={ handleInputChange } value={subCategory}>
								<option>SubCategoría</option>
								{subCategories.map((subCategory) => (
									subCategory.category === category ? <option key={subCategory.id} value={subCategory.id}>{subCategory.name}</option>	: null
									)
								)}
							</Form.Select>
						</FloatingLabel>
					</Col>
				</Row>
				<Row className='mb-3'>
					<Col>
						<FloatingLabel label="Formato">
							<Form.Control type="text" placeholder="Formato" list='dlFormats' name='format' onChange={ handleInputChange } value={format} />
							<datalist id='dlFormats'>
								<option value='Unidad' />
								<option value='Pack' />
							</datalist>
						</FloatingLabel>
					</Col>
					<Col xs="3">
						<FloatingLabel label='Unidades'>
							<Form.Control type="number" placeholder='Unidades' name="unit" onChange={ handleInputChange } value={unit} disabled={format === "Unidad"} />
						</FloatingLabel>
					</Col>
					<Col>
						<FloatingLabel label="Tipo">
							<Form.Control type="text" placeholder="Tipo" list="dlTipos" name='type' onChange={ handleInputChange } value={type} />
								<datalist id='dlTipos'>
									<option value='500ml' />
									<option value='1L' />
									<option value='2L' />
									<option value='5L' />
									<option value='10L' />
									<option value='20L' />
									<option value='50L' />
									<option value='100L' />
									<option value='200L' />
									<option value='500L' />
									<option value='1Kg' />
									<option value='2Kg' />
									<option value='5Kg' />
									<option value='10Kg' />
									<option value='20Kg' />
									<option value='50Kg' />
									<option value='100Kg' />
									<option value='200Kg' />
									<option value='500Kg' />
									<option value='1Ton' />
									<option value='2Ton' />
									<option value='5Ton' />
									<option value='10Ton' />
								</datalist>
						</FloatingLabel>
					</Col>
				</Row>
				<Row className='mb-3'>
					<Col>
						<FloatingLabel label='Marca'>
							<Form.Control type="text" placeholder='Marca' name='brand' onChange={ handleInputChange } value={brand} />
						</FloatingLabel>
					</Col>
					<Col>
						<FloatingLabel label='Modelo'>
							<Form.Control type="text" placeholder='Modelo' name='model' onChange={ handleInputChange } value={model} />
						</FloatingLabel>
					</Col>
				</Row>
				<Row className='mb-3'>
					<Col>
						<FloatingLabel label='Descripción'>
							<Form.Control as='textarea' type="text" placeholder='Descripción' name='description' onChange={ handleInputChange } value={description} />
						</FloatingLabel>
					</Col>
				</Row>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="danger" onClick={handleCloseForm}>
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
